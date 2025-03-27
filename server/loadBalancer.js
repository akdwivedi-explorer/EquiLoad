const http = require("http");
const express = require("express");
const axios = require("axios");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

let backendServers = [
  { url: "http://localhost:4000", connections: 0 },
  { url: "http://localhost:4001", connections: 0 },
  { url: "http://localhost:4002", connections: 0 },
];
let currentStrategy = "round-robin";
let currentServerIndex = 0;
const ML_API_URL = "http://127.0.0.1:8000/predict";

const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const generateServerMetrics = (port) => {
  return {
    server: `http://localhost:${port}`,
    cpu: getRandomFloat(1.5, 13),
    memory: getRandomFloat(70, 90),
    activeConnections: getRandomInt(1, 10),
    responseTime: getRandomInt(50, 200),
  };
};

const sendUpdates = () => {
  const data = JSON.stringify({
    servers: backendServers.map((server) => ({
      url: server.url,
      connections: server.connections,
      metrics: generateServerMetrics(new URL(server.url).port),
    })),
    strategy: currentStrategy,
  });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return url.startsWith("http://") || url.startsWith("https://");
  } catch {
    return false;
  }
};

app.post("/api/configure", (req, res) => {
  const { servers, strategy } = req.body;
  if (!servers || !Array.isArray(servers) || !strategy) {
    return res
      .status(400)
      .send(
        "Invalid input: servers must be an array and strategy must be provided"
      );
  }

  const validServers = servers.filter((url) => isValidUrl(url));
  if (validServers.length === 0) {
    return res.status(400).send("No valid server URLs provided");
  }

  backendServers = validServers.map((url) => ({ url, connections: 0 }));
  currentStrategy = strategy;
  currentServerIndex = 0;
  console.log("Servers reconfigured:", backendServers);
  sendUpdates();
  res.send("Configuration updated");
});

app.get("/api/current-config", (req, res) => {
  res.json({ servers: backendServers, strategy: currentStrategy });
});

const ipHash = (clientIp) => {
  const hash = clientIp
    .split(".")
    .reduce((acc, val) => acc + parseInt(val, 10), 0);
  return hash % backendServers.length;
};

const getMLPrediction = async () => {
  try {
    const data = backendServers
      .flatMap((server) => {
        const metrics = generateServerMetrics(new URL(server.url).port);
        return [
          metrics.cpu,
          metrics.memory,
          metrics.activeConnections,
          metrics.responseTime,
        ];
      })
      .slice(0, 12); // Ensure only 12 values are sent

    const response = await axios.post(ML_API_URL, { input: data });
    return response.data.server_index - 1; // Convert 1-based index to 0-based
  } catch (error) {
    console.error("ML Model Error:", error.message);
    return 0; // Default to the first server in case of an error
  }
};

app.get("/balance-request", async (req, res) => {
  let server;
  try {
    if (backendServers.length === 0) {
      throw new Error("No backend servers configured");
    }

    if (currentStrategy === "round-robin") {
      server = backendServers[currentServerIndex];
      currentServerIndex = (currentServerIndex + 1) % backendServers.length;
    } else if (currentStrategy === "least-connections") {
      server = backendServers.reduce((prev, curr) =>
        prev.connections < curr.connections ? prev : curr
      );
    } else if (currentStrategy === "ip-hashing") {
      const clientIp = req.ip || "127.0.0.1";
      const serverIndex = ipHash(clientIp);
      server = backendServers[serverIndex];
    } else if (currentStrategy === "ml-model") {
      const serverIndex = await getMLPrediction();
      server = backendServers[serverIndex];
    }

    if (!server || !isValidUrl(server.url)) {
      throw new Error(`Invalid server URL: ${server?.url || "undefined"}`);
    }

    console.log(`Request routed to ${server.url} using ${currentStrategy}`);
    server.connections++;
    sendUpdates();

    const response = await axios.get(server.url);
    server.connections--;
    sendUpdates();

    res.send(`${currentStrategy.replace("-", " ")} -> ${response.data}`);
  } catch (error) {
    server && server.connections--;
    sendUpdates();
    console.error(
      `Error contacting ${server?.url || "unknown server"}: ${error.message}`
    );
    res.status(500).send(`Backend server error: ${error.message}`);
  }
});

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ message: "Connected to WebSocket!" }));
});

server.listen(3000, () => {
  console.log("Load Balancer running on port 3000");
});

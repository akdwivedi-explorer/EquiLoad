const http = require("http");
const express = require("express");
const axios = require("axios");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const backendServers = [
  { url: "http://localhost:4000", connections: 0 },
  { url: "http://localhost:4001", connections: 0 },
  { url: "http://localhost:4002", connections: 0 },
];

let currentServerIndex = 0;

// Function to send real-time updates to frontend
const sendUpdates = () => {
  const data = JSON.stringify({
    servers: backendServers.map((server) => ({
      url: server.url,
      connections: server.connections,
    })),
  });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

// Round Robin Load Balancing
app.get("/round-robin", async (req, res) => {
  const server = backendServers[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % backendServers.length;

  try {
    server.connections++; // Increase count
    sendUpdates(); // Send live update

    const response = await axios.get(server.url);
    server.connections--; // Decrease count after response
    sendUpdates(); // Update frontend again

    res.send(`Round Robin -> ${response.data}`);
  } catch (error) {
    res.status(500).send("Backend server error");
  }
});

// Least Connections Load Balancing
app.get("/least-connections", async (req, res) => {
  const server = backendServers.reduce((prev, curr) =>
    prev.connections < curr.connections ? prev : curr
  );

  try {
    server.connections++;
    sendUpdates();

    const response = await axios.get(server.url);
    server.connections--;
    sendUpdates();

    res.send(`Least Connections -> ${response.data}`);
  } catch (error) {
    res.status(500).send("Backend server error");
  }
});

// WebSocket Connection
wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ message: "Connected to WebSocket!" }));
});

server.listen(3000, () => {
  console.log("Load Balancer running on port 3000");
});

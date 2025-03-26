const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const servers = ["http://localhost:4000", "http://localhost:4001"];
let currentServerIndex = 0;
let serverConnections = servers.map(() => 0);

app.use(express.static("public"));

app.get("/round-robin", async (req, res) => {
  let server = servers[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % servers.length;

  try {
    const response = await axios.get(server);
    io.emit("update", { method: "Round Robin", server });
    res.send(`Round Robin -> ${response.data}`);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.get("/least-connections", async (req, res) => {
  let minIndex = serverConnections.indexOf(Math.min(...serverConnections));
  serverConnections[minIndex]++;

  try {
    const response = await axios.get(servers[minIndex]);

    setTimeout(() => {
      serverConnections[minIndex]--;
      io.emit("update", {
        method: "Least Connections",
        server: servers[minIndex],
        activeConnections: [...serverConnections],
      });
    }, 1000);

    res.send(`Least Connections -> ${response.data}`);
  } catch (error) {
    serverConnections[minIndex]--;
    res.status(500).send("Server Error");
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");
});

server.listen(3000, () => console.log("Load Balancer running on port 3000"));

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// List of backend servers
const servers = [
  "http://localhost:4000",
  "http://localhost:4001",
  "http://localhost:4002",
];
let currentServerIndex = 0;
const serverConnections = servers.map(() => 0);

const crypto = require("crypto");

// Round Robin Algorithm
app.get("/round-robin", async (req, res) => {
  const server = servers[currentServerIndex];
  currentServerIndex = (currentServerIndex + 1) % servers.length;

  try {
    const response = await axios.get(server);
    res.send(`Round Robin -> ${response.data}`);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Least Connections Algorithm
app.get("/least-connections", async (req, res) => {
  let minIndex = serverConnections.indexOf(Math.min(...serverConnections));
  serverConnections[minIndex]++; // Increase active connections

  try {
    const response = await axios.get(servers[minIndex]);

    // Simulate request taking time before decreasing count
    setTimeout(() => {
      serverConnections[minIndex]--;
    }, 1000); // Adjust timing as needed

    res.send(`Least Connections -> ${response.data}`);
  } catch (error) {
    serverConnections[minIndex]--; // Decrease if request fails
    res.status(500).send("Server Error");
  }
});

// IP Hashing Algorithm
app.get("/ip-hash", async (req, res) => {
  const ip = req.ip || "127.0.0.1";
  const hash = crypto.createHash("md5").update(ip).digest("hex");
  const serverIndex = parseInt(hash, 16) % servers.length;

  try {
    const response = await axios.get(servers[serverIndex]);
    res.send(`IP Hashing -> ${response.data}`);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Load Balancer running on port ${PORT}`);
});

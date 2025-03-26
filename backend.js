const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  console.log(`Request received at port ${PORT}`);
  setTimeout(() => {
    res.send(`Response from backend server on port ${PORT}`);
  }, Math.random() * 2000); // Simulate variable response time
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

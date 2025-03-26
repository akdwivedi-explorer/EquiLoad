const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`Response from backend server on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

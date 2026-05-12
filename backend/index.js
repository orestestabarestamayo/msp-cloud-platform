const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "MSP backend",
    uptime: process.uptime()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
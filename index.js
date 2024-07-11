require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

PORT = process.env.PORT || 7000;

app.use("/", require("./Routes/route"));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const path = require("path");
PORT = process.env.PORT || 7000;



app.use(express.static(path.join(__dirname, "UI")));
app.use("/", require("./Routes/route"));


io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
  socket.on("image",(image)=>{
    console.log(image);
    io.emit("image",image);
  })
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
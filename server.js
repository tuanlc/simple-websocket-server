const express = require("express");
const WebSocket = require("ws");

const app = express();
const expressAppPort = 8000;
const wsPort = 8001;

const webSocketServer = new WebSocket.Server({ port: wsPort });

webSocketServer.on("connection", ws => {
  console.log("New connection from client");
  
  ws.on("message", data => {
    console.log(`Message data: ${data}`);
    
    ws.send(`Hello client id: ${JSON.parse(data).data.id}`);
  })

  ws.on("close", reason => console.log(`Closed a connection with reason: ${reason}`));
});

const server = app.listen(expressAppPort, () => {
  console.log(`Server is running on port ${expressAppPort}`);
});
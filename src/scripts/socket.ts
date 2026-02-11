import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
  port: 8000,
});

let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);

  socket.on("message", (msg) => {
    console.log("Received message:", msg.toString());
    for (let i = 0; i < allSockets.length; i++) {
      if (allSockets.length === 0) return;
      let curr = allSockets[i];
      curr.send(msg.toString());
    }
  });

  socket.on("disconnect", () => {
    allSockets = allSockets.filter((s) => s !== socket);
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((s) => s !== socket);
  });
});

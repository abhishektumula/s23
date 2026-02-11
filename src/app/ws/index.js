"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var wss = new ws_1.WebSocketServer({
    port: 8000,
});
var allSockets = [];
wss.on("connection", function (socket) {
    allSockets.push(socket);
    socket.on("message", function (msg) {
        console.log("Received message:", msg.toString());
        for (var i = 0; i < allSockets.length; i++) {
            if (allSockets.length === 0)
                return;
            var curr = allSockets[i];
            curr.send(msg.toString());
        }
    });
    socket.on("disconnect", function () {
        allSockets = allSockets.filter(function (s) { return s !== socket; });
    });
    socket.on("close", function () {
        allSockets = allSockets.filter(function (s) { return s !== socket; });
    });
});

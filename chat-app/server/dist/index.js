"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const ws_1 = require("ws");
let allSockets = [];
const ws = new ws_1.WebSocketServer({ port: 9090 });
ws.on('connection', (socket) => {
    socket.send("connected");
    socket.on('message', (message) => {
        var _a;
        const parshedMessage = JSON.parse(message);
        if (parshedMessage.type === "join") {
            allSockets.push({
                socket: socket,
                roomId: parshedMessage.payload.roomId
            });
            console.log("room created " + allSockets);
        }
        if (parshedMessage.type === "chat") {
            const currentUser = (_a = allSockets.find(elm => elm.socket === socket)) === null || _a === void 0 ? void 0 : _a.roomId;
            console.log(currentUser);
            allSockets.forEach((elm) => {
                const user = elm.socket;
                if (currentUser === elm.roomId) {
                    user.send(parshedMessage.payload.message);
                }
            });
        }
    });
});
// app.get("/", (req, res) => {
//   res.send("Hello");
// });
// app.listen(3000, () => {
//   console.log("server is running");
// });

import express from "express";
const app = express();

import { WebSocketServer,WebSocket } from "ws";

interface User {
    socket:WebSocket
    roomId:string
}

let allSockets:User[] = [];

const ws = new WebSocketServer({port:9090});

ws.on('connection',(socket)=>{
    socket.send("connected");
    socket.on('message',(message)=>{
        const parshedMessage = JSON.parse(message as unknown as string)
        if(parshedMessage.type === "join"){
            allSockets.push({
                socket:socket,
                roomId:parshedMessage.payload.roomId
            })
            console.log("room created "+allSockets);
        }
        if(parshedMessage.type === "chat"){
            const currentUser = allSockets.find(elm => elm.socket === socket)?.roomId
            console.log(currentUser);
            allSockets.forEach((elm)=>{
                const user = elm.socket;
                if(currentUser === elm.roomId){
                    user.send(parshedMessage.payload.message);
                }
            })
            
        }
    })

})






















// app.get("/", (req, res) => {
//   res.send("Hello");
// });



// app.listen(3000, () => {
//   console.log("server is running");
// });

const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8081 });
//events in websocket
//1. connection
//2. message
//3. disconnect

// wss.on("connection",function(socket){
//     console.log("a new user connected")
//     socket.send("welcome!!")
//     setInterval(()=>{
//         socket.send("reliance stock price is"+" "+Math.random())
//     },1000)
// })


//ping pong application
// wss.on("connection",function(socket){
//     console.log("a new user connected")
//     socket.send("welcome!!")
//     socket.on("message",function(message){
//         console.log(message.toString())
//         if(message.toString()==="ping"){
//             socket.send("pong")
//         }else{
//             socket.send("you have not send a ping message")
//         }
//     })
// })


//bradcasting
let allSockets=[]
wss.on("connection",function(socket){
    console.log("user connected")
    allSockets.push(socket)
    // console.log(allSockets)
    socket.on("message",function(message){
        allSockets.forEach((s)=>{
            s.send(message.toString())
        })
    })
})


//rooms


//all this in express
//express=require("express")
//app=express();
//app.listen(3000)
//app.get()
//app.post()
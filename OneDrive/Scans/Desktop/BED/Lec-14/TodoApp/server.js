const express=require("express")
const app=express()
const fs=require("fs")
app.use(express.static(__dirname+"/public"))

app.get("/todos",(req,res)=>{
    fs.readFile("./todo.json","utf-8",function(err,data){
        if(err) return res.send(err);
        let todo=JSON.parse(data);
        res.json(todo);
    })
})

app.listen(4000,()=>{
    console.log("server started")
})
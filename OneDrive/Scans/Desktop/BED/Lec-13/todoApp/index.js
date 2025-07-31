const express=require("express");
const path=require("path");
const app=express();
const fs = require("fs"); 
app.use(express.static(__dirname+"/public"));

app.get("/todos",(req,res)=>{
    fs.readFile(path.join(__dirname, "todo.json"), "utf8", (err, data) => {
    if (err) return;
      const todos = JSON.parse(data); 
      res.json(todos);
  });
});
app.listen(3333,()=>{
    console.log("server started")
})
const express=require("express");
const app=express();
// console.log(app)

app.get("/",(req,res)=>{
    console.log(req);
    // res.send("hello world")  //text
    // res.send("<h1>hello world</h1>") //html
    res.json({
        name:"samiya",
        address:"panchkula",
        isLogin:true
    })
})

//path param/variable
//1. params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    let id=req.params.id;
    res.send(id);
})

//2. query parameter
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    console.log(req.query.desc);
    res.send("got it");
})

app.listen(2222,()=>{
    console.log("server started");
})

//hw practice all requests
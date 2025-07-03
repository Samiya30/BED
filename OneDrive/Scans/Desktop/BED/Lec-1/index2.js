const fs=require("fs");
console.log(fs);
console.log("start");

setTimeout(()=>{
    console.log("set Timeout");
},0)
setImmediate(()=>{
    console.log("set immediate");
})

fs.readFile("demo.txt",(data)=>{
    console.log("file read");
    setTimeout(()=>{
        console.log("timer2");
    },0)
    setImmediate(()=>{
        console.log("immediate 2");
    })
})
console.log("end");
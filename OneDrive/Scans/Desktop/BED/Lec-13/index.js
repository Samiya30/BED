let box=document.querySelector("#box");
let btn=document.querySelector("#btn");
let stopbtn=document.querySelector("#stopbtn");
let colours=["red","green","balck","blue","yellow","pink","brown","voilet","orange","cyan"]
let id=null;
function generateRandomColor(){
    let index=Math.floor(Math.random()*10)-1;
    console.log(index);

    let randomcolor=colours[index];
    console.log(randomcolor);
    box.style.backgroundColor=randomcolor;
}

btn.addEventListener("click",function(){
    id=setInterval(()=>{
    generateRandomColor();
    },500)
})

stopbtn.addEventListener("click",function(){
    if(id){
        clearInterval(id);
    }
})
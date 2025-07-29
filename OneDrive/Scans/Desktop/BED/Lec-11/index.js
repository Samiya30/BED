//accesing dom element/node
//1. using id
let res=document.getElementById("mydiv");
// console.log(res);
console.dir(res);

//2. using class
let h2=document.getElementsByClassName("h2");
console.log(h2);        //result in form of list or collection
console.log(h2[0])

//3. using tag name
let p=document.getElementsByTagName("p");
console.log(p)      //result in form of collection

//4. query selector
let out=document.querySelector("#mydiv") //for id use # and . for class //return type object
let out2=document.querySelectorAll("p")      //return type collection
// console.log(out)
console.log(out2)

//document properties
//1. accessing element content and change it

//* innerHTML
console.log(res.innerHTML);     //return html //getter 
// res.innerHTML=`<p> change using dom manipulation</p>`

//* innerText
console.log(res.innerText)      //no html only text
res.innerText=`<h1>hello world</h1>`    //setter

//* textContent

//accessing element class or id or etc.
//1. getAttribute
console.log(res.getAttribute("id"))
//2. setAttribute

let btn=document.querySelector(".btn")
// btn.addEventListener("click",()=>{
//     res.setAttribute("class","js")
// })
// console.log(res.setAttribute("class","using js"))

//2. only for class attribute
//* classList
let myH=document.querySelector(".myh");
console.log(myH.classList)
myH.classList.add("hi");
myH.classList.remove("myh");
// btn.addEventListener("click",()=>{
//    myH.classList.toggle("hide");
// })
let form=document.querySelector(".signup")
btn.addEventListener("click",()=>{
   form.classList.toggle("hide");
})
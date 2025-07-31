let edit=document.querySelector(".edit");
let del=document.querySelector(".delete");

console.log(edit);
console.log(del);

//parent child siblings
//1. nextElementSibling
//2. previousElementSibling

//first child
//last child
//nth child

console.log(edit.nextElementSibling);
console.log(edit.previousElementSibling);
console.log(edit.nextElementSibling.nextElementSibling.innerText);

//to get h1
console.log(edit.parentElement.previousElementSibling);

//from delete button to li id
let id=del.previousElementSibling.parentElement.parentElement.parentElement.getAttribute("id");
console.log(id);
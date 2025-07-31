// const input = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");

// addBtn.addEventListener("click", function () {
//   const task = input.value.trim();

//   if (task !== "") {
//     addTaskToList(task);
//     input.value = "";
//   } else {
//     alert("Please enter a task.");
//   }
// });

// function addTaskToList(taskText) {
//   const li = document.createElement("li");

//   const span = document.createElement("span");
//   span.textContent = taskText;

//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.onclick = function () {
//     const newText = prompt("Edit your task:", span.textContent);
//     if (newText !== null && newText.trim() !== "") {
//       span.textContent = newText.trim();
//     }
//   };

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.onclick = function () {
//     todoList.removeChild(li);
//   };

//   li.appendChild(span);
//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);
//   todoList.appendChild(li);
// } 



let todoInput=document.querySelector("#todoInput")
let todoform=document.querySelector(".input-group")
let todoList=document.querySelector("#todoList")

let todoArray=[]
fetch("https://localhost:3333/todos")
.then((response)=>response.json())
.then((data)=>{
  todoArray=data
  showAllTodos(todoArray)
})

todoform.addEventListener("submit",function(e){
  e.preventDefault();
  let value=inputValue();
  let newTodo={
    id:Math.floor(Math.random*10000),
    title:inputValue
  }
  todoArray.push(newTodo);
  addTodo(newTodo)
  showalltodo(newTodo)
   todoInput.value="";
})
function inputValue(){
  return todoInput.value;
 
}

function addTodo(todo){
   let li=document.createElement("li");
    li.setAttribute("id",`${todo.id}`);
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur aet vel voluptas sapiente libero, architecto cum delectus enim veniam qui.</p>
                </div>
            </div>`
            ul.appendChild(li);
            todoList.appendChild(li);
}

function showalltodo(todoArray){
   todocontainer.innerHTML="";
    todos.forEach(todo=>{
        addTodo(todo);
    });
}
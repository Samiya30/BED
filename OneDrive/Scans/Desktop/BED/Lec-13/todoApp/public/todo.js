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
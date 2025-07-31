//how to insert new element in DOM
//1. create a new element ---> createElement
//2.  add required in that element using innerText or innerHTML
//3. add that element in parent container ---> appendChild or append

let todo={
    id:"12345",
    title:"Newtodo"
}
let ul=document.querySelector(".todoList")

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
}

addTodo(todo);

let todos=[
{
    id:"12345",
    title:"Newtodo"
},{
    id:123,
    title:"samiya"
}]
function showalltodo(todos){
    todos.forEach(todo=>{
        addTodo(todo);
    });
}
showalltodo(todos);
const todoconatiner=document.querySelector(".todo-container");

function gettodos(URL){
     fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((todo) => {
            displaytodo(todo);
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}

function displaytodo(todo){
     let li=document.createElement("li");
    li.innerHTML=` <div class="todo-info">
                <h1>${todo.title}</h1>
                <p>${todo.description}</p>
            </div>
            <div class="todo-btn">
                <button class="delete-btn">delete</button>
                <button class="edit-btn">edit</button>
            </div>`
        todoconatiner.appendChild(li);
}

gettodos("http://localhost:4000/todos")

//add button to add user(register form)
//user add form(name email role)
//sign up add data 
//post route add data to user.json

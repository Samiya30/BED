//fetch
fetch("https://localhost:3333/todos")
.then((response)=>response.json())
.then((data)=>console.log(data))
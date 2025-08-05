let userContainer=document.querySelector(".user-container")

function getUsers(URL,){
    //send request to this url to get users data
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        // showUsers(data);
        data.forEach((user) => {
            displayuser(user);
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}

// function showUsers(users) {
//     const usersContainer = document.getElementById("users");
//     usersContainer.innerHTML = "";
//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.innerText = `Name: ${user.name}, Username: ${user.username}`;
//         usersContainer.appendChild(userDiv);
//     });
// }

function displayuser(user){
    //user ---> {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…},{}
    let li=document.createElement("li");
    li.innerHTML=` <div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="delete-btn">delete</button>
                <button class="edit-btn">edit</button>
            </div>`
        userContainer.appendChild(li);
}

getUsers("http://localhost:3000/users");
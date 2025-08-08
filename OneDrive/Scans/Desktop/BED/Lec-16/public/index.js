//using then and catch

// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")   //for get request //arguement is url
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
// getCommentData();

//using async await
async function getCommentData() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments"); 
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user', {
    email: email,
    password: password
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
adduser("samiya@gmail.com","1234")
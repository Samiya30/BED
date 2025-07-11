let p=new Promise((resolve,reject)=>{
    resolve("okay")
})
// console.log(p);
p.then((data)=>{
    console.log(data)
    console.log("promise completed")
})
.catch((err)=>{
    console.log(err);
})  

let users=[
    {
        id:1,
        age:16,
        name:"samiya"
    },
     {
        id:2,
        age:20,
        name:"samiya2"
    }
]
function isEligible(id){
    //find user in db
    // check age is greater or equal to 18
    // if else

    // let user=users.filter((user)=>user.id==id)[0];
    // console.log(user);
    // if(!user) return "no user found";
    // if(user.age>18){
    //     return "eligible for vote"
    // }
    // else{
    //     return "not eligible"
    // }

    //make promise
    return new Promise((resolve,reject)=>{
    let user=users.filter((user)=>user.id==id)[0];
    console.log(user);
    if(!user) return "no user found";
    if(user.age>18){
        return "eligible for vote"
    }
    else{
        return "not eligible"
    }
    })
}
// console.log(isEligible(1));
isEligible(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("hi");
console.log("bye");
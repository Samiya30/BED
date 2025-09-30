const {PrismaClient} =require("./generated/prisma");
let prisma=new PrismaClient();

// async function addUser(email,name){
//     //User user=new User("","");
//     //user.save();

//     const newUser=await prisma.user.create({
//         data:{
//             email:email,
//             name:name
//         }
//     })
//     return "user added"
// }

// // addUser("samiya@gmail","samiya")
// // .then((data)=>{console.log(data)})
// // .catch((e)=>console.log(e))

// //clients-respective classes of class(methods)

// async function getUser(email){
//     let user=await prisma.user.findUnique({
//         where:{
//             email:email
//         }
//     })
//     return user
// }
// // getUser("samiya@gmail")
// // .then((data)=>console.log(data))
// // console.log("hii")


// async function updateUser(email,name){
//  const updateUser = await prisma.user.update({
//   where: {
//     email: email,
//   },
//   data: {
//     name: 'samiya sharma',
//   },
// })
//     return  updateUser
// }
// // updateUser("samiya@gmail")
// // .then((data)=>console.log(data))

async function deleteUser(email){
    const deleteUser = await prisma.user.delete({
  where: {
    email: email,
  },
})
return deleteUser
}
// // deleteUser("samiya@gmail")
// // .then((data)=>console.log(data))


async function addTweet(userid,body){
    try{
        let tweet=await prisma.tweet.create({
            data:{
                userid:userid,
                body:body
        }
    })
    return tweet;
    }catch(error){
        throw new error("error.message")
    }
}
// addTweet(2,"hello")
// .then((data)=>console.log(data))


async function updateTweet(id,userid,updatedBody){
    let tweet=await prisma.tweet.findFirst({
        where:{
            id:Number(id),
            userid:Number(userid)
        }
    })
    if(!tweet){
        return "something went wrong"
    }
    await prisma.tweet.update({
        where:{
            id:Number(id)
        },
        data:{
            body:updatedBody
        }
    })
    return "tweet updated"
}
// updateTweet("1","2","updated my tweet")
// .then((data)=>console.log(data))

async function deleteTweet(id) {
    await prisma.user.delete({
        where:{
            id:Number(id)
        }
    })
    return "user deleted"
}
deleteUser("2")
.then((data)=>console.log(data))
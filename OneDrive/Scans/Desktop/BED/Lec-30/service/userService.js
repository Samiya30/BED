const {PrismaClient} =require("./generated/prisma");
let prisma=new PrismaClient();

class User{
    static async addUser(email,name){
    const newUser=await prisma.user.create({
        data:{
            email:email,
            name:name
        }
    })
    return "user added"
}

static async getUser(email){
    let user=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    return user
}

static async deleteUser(id){
    const deleteUser = await prisma.user.delete({
  where: {
    id: Number(id)
  },
})
return deleteUser
}
}

module.exports=User
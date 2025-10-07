const express=require("express");
const router=express.Router();

router.post("/adduser",postUser)

module.exports=router;
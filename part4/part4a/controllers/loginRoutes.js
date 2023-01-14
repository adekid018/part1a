const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
//const loginDatabase=require('../model/loginDatabase')
const loginRoutes=require('express').Router()
const userDatabase=require('../model/userDatabase')
loginRoutes.post('/',async(req,res)=>{
    const {username,password}=req.body
    //const user= await userDatabase.findOne({username})
    const searchingUser=await userDatabase.findOne({username})
    console.log("object");
    console.log(searchingUser);

    const passwordCorrect= searchingUser === null
    ? false
    : await bcrypt.compare(password,searchingUser.passwordHash)
    console.log("passwordCorrect",passwordCorrect);
    if(!(searchingUser && passwordCorrect)){
        return res.status(401).json({
            error:"Invalid userName and Password"
        })
    }
    const userForToken={
        username:searchingUser.username,
        id:searchingUser._id
    }
    const token=jwt.sign(userForToken,process.env.SECRET)
    res
    .status(200)
    .send(({token,username,name:searchingUser.name}))
})
module.exports=loginRoutes
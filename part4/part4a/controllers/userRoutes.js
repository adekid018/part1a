//Excersise 4.15 step 3 made
const bcrypt=require('bcrypt')
const userRoutes=require('express').Router()
const userDatabase=require('../model/userDatabase')

userRoutes.get('/',async(req,res)=>{
    const users= 
    await userDatabase.find({}).populate('note')
    res.json(users)
})
userRoutes.post('/',async(req,res)=>{
    const input=req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(input.password, saltRounds)

    const newUser=new userDatabase({
        username:input.username,
        name:input.name,
        passwordHash:passwordHash
    })
    const response=await newUser.save()
    res.status(201).json(response)
})
module.exports=userRoutes


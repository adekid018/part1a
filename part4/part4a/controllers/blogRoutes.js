const jwt=require('jsonwebtoken')
const blogRouters=require('express').Router()
const userDatabase=require('../model/userDatabase')
const blogDatabase=require('../model/blogDatabase')
const getToken=request=>{
    const authorization=request.get('authorization')
      if(authorization && authorization.toLowerCase().startsWith('bearer')){
        return authorization.substring(7)
    }
    return null
}

blogRouters.get('/',async(req,res)=>{
    const blog= await blogDatabase.find({}).populate("user",{name:1})
    res.json(blog)
})
    
blogRouters.get('/:id',async (req,res,next)=>{
    const response=await blogDatabase.findById(req.params.id)
        if(response){
        res.status(200).json(response)
     }
     else{
        res.status(404).end()
     }
})

blogRouters.post('/',async (req,res,next)=>{
    const request=req.body
    const token=getToken(req)
    console.log("token",token);
  const decodeToken=jwt.verify(token,process.env.SECRET)
  console.log("this is decoded token",decodeToken);
  
    if(!decodeToken.id){
        return res.status(401).json({error:"token missing or invalid login"})
    }
    if(request.url===undefined || request.author===undefined){
       return res.status(400).end()
       //return res.status(204).json({error:"Content Missing"})
    }
    const findToken=await userDatabase.findById(decodeToken.id)
    console.log(findToken);
    //const user= await userDatabase.findById(request.userId)
    
    
    
    const blog= new blogDatabase({
    author:request.author,
    title:request.title,
    url:request.url,
    vote:request.vote||0,
    user:findToken._id
    })
    console.log(blog.user);
    
    
    const response=await blog.save()
//    user.note=user.note.concat(response._id)
  //  await user.save()
    findToken.note=findToken.note.concat(response._id)
    await findToken.save()
    res.status(201).json(response)
})

blogRouters.delete('/:id', async (req,res,next)=>{
    const response= await blogDatabase.findByIdAndRemove(req.params.id)
        res.status(204).end()
    
})
blogRouters.put('/:id', async (req,res)=>{
    const body=req.body
    const update={
            author:body.author,
            title:body.title,
            url:body.url,
            vote:body.vote
    }
    const response=await blogDatabase.findByIdAndUpdate(req.params.id,update,{new:true})
    res.json(response)
})
module.exports=blogRouters
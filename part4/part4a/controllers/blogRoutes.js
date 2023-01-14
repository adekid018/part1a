/*const blogRouters=require('express').Router()
const userDatabase=require('../model/userDatabase')
const blogDatabase=require('../model/blogDatabase')

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
    console.log(request);
    if(request.url===undefined || request.author===undefined){
       return res.status(400).end()
       //return res.status(204).json({error:"Content Missing"})
    }
    const user= await userDatabase.findById(request.userId)
    
    
    
    const blog= new blogDatabase({
    author:request.author,
    title:request.title,
    url:request.url,
    vote:request.vote||0,
    user:user._id
    })
    console.log(blog.user);
    //console.log(user._id);
    //console.log(Object.keys(blog));
    
    
    const response=await blog.save()
    user.note=user.note.concat(response._id)
    await user.save()
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
})*/
const blogDatabase=require('../model/blogDatabase')
const userDatabase=require('../model/userDatabase')
const blogRouters=require('express').Router()
blogRouters.get('/',async(req,res)=>{
    const response=await blogDatabase.find({})
    res.json(response)
})
blogRouters.post('/',async(req,res)=>{
    const body=req.body
    const user=userDatabase.findOne(body.user)
    const blog=new blogDatabase({
        author:body.author,
        title:body.title,
        url:body.url,
        vote:body.vote
    })
})
module.exports=blogRouters
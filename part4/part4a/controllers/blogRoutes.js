const blogRouters=require('express').Router()
const blogDatabase=require('../model/blogDatabase')
blogRouters.get('/',async(req,res)=>{
    const blog= await blogDatabase.find({})
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
    if(request.url===undefined){
        return res.status(204).json({error:"Content Missing"})
    }
    const blog= new blogDatabase({
    author:request.author,
    title:request.title,
    url:request.url,
    vote:request.vote
    })
    const response=await blog.save()
        res.status(201).json(response)
})

blogRouters.delete('/:id', async (req,res,next)=>{
    const response= await blogDatabase.findByIdAndRemove(req.params.id)
        res.status(204).end()
    .catch(error=>next(error))
})
module.exports=blogRouters
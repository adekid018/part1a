const blogRouters=require('express').Router()
const blogDatabase=require('../model/blogDatabase')
blogRouters.get('/',(req,res)=>{
    blogDatabase.find({}).then(reesponse=>{
        res.json(reesponse)
    })
    })
    
blogRouters.get('/:id',(req,res,next)=>{
    blogDatabase.findById(req.params.id)
    .then(response=>{
        if(response){
        res.json(response)
     }
     else{
        res.status(404).end()
     }
    })
    .catch(error=>next(error))
})

blogRouters.post('/',(req,res,next)=>{
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
    blog.save()
    .then(response=>{
        res.json(response)
    })
    .catch(error=>next(error))
})

blogRouters.delete('/:id',(req,res,next)=>{
    blogDatabase.findByIdAndRemove(req.params.id)
    .then(result=>{
        res.status(204).end()
    })
    .catch(error=>next(error))
})
module.exports=blogRouters
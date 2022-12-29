const requestLogger=(req,res,next)=>{
    console.log('Method ',req.method);
    console.log('Path ',req.path);
    console.log('Body ',req.body);
    next()
}
const unknownEndpoint=(req,res,next)=>{
    res.status(400).send({error:"Uknown Endpoint"})
}
const errorHandler=(error,res,req,next)=>{
    console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } 
  else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
module.exports={
    requestLogger,
    errorHandler,
    unknownEndpoint
}
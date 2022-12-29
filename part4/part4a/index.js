const config = require('./utils/config')
const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
app.use(morgan("tiny"))
const blogRouters=require('./controllers/blogRoutes')
const mongoose=require('mongoose')
const loggers=require('./utils/logger')
const middleWares=require('./utils/middleware')
app.use(express.static('build'))
app.use(express.json())


app.use(middleWares.requestLogger)


mongoose.connect(config.MONGODB_URI)
.then(()=>{
  loggers.info("Connected To MongoDb")
})
.catch(error=>loggers.error("error connecting to MongoDb",error.message))
app.use(cors())
app.use('/blogs',blogRouters)
app.use(middleWares.errorHandler)
app.use(middleWares.unknownEndpoint)
loggers.info(`Server running on port ${config.PORT}`)
const port=4000
app.listen(port,()=>{
    console.log("Its working on port 4000");
})
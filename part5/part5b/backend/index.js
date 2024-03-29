const config = require('./utils/config')
const express=require('express')
const app=express()
require('express-async-errors')
const http = require('http')
const server = http.createServer(app)
const morgan=require('morgan')
const cors=require('cors')
app.use(morgan("tiny"))
const blogRouters=require('./controllers/blogRoutes')
const userRouters=require('./controllers/userRoutes')
const loginRoutes=require('./controllers/loginRoutes')
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
app.use('/users',userRouters)
app.use('/login',loginRoutes)
app.use(middleWares.errorHandler)
app.use(middleWares.unknownEndpoint)
loggers.info(`Server running on port ${config.PORT}`)
server.listen(config.PORT,()=>{
    loggers.info("Its working on port",config.PORT);
})
module.exports=app
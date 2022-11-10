require('dotenv').config()
const Note = require('./models/phoneBookDatabase')
const express=require('express')
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors())
const morgan=require('morgan')
morgan.token('body', req => {
    return JSON.stringify(req.body)
  })
  app.use(morgan(':method :url :body'))
  
app.get("/api/persons",(req,res)=>{
  Note.find({}).then(result=>{
    res.json(result)
  })
})
app.get("/api/persons/amira",(req,res)=>{
  Note.find({name:"Amira"}).then(result=>{
    res.json(result)
  })
})
/*app.get("/api/persons/:id",(req,res)=>{
  const singleContact=Nreq.pharms.if
})*/

app.post("/api/persons",(req,res)=>{
    const person=req.body
    //console.log("first body",person.name);
    const newPerson= new Note({
        name:person.name,
        number:person.number,
        date:Date()

    })

    newPerson.save().then(result=>{
      res.json(result)
    })
    
})
app.get("/api/normal",(req,res)=>{
    res.send("<p>Hello World</p>")
})
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

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
/*3.18*: Phonebook database step6 Inspecting an individual phonebook entry from the browser should look like this:*/
app.get("/api/persons/:id",(req,res,next)=>{
  Note.findById(req.params.id)
  .then(result=>{
    if(result){
      console.log("it exist")
      res.json(result)
    }
    else{
      res.status(404).end()
    }
  })
  .catch(error=>{
    next(error)
    //console.log("It doesnt exist")
    //console.log(error)
    //res.status(400).send({ error: 'malformatted id' })
  })
})
/*app.get("/api/persons/:id",(req,res)=>{
  const singleContact=Nreq.pharms.if
})*/
/*3.15: Phonebook database, step3 Change the backend so that deleting phonebook entries is reflected in the database.
Verify that the frontend still works after making the changes.*/
app.delete('/api/persons/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log("DEleted sucessfully")
      response.status(204).end()
    })
    .catch(error => next(error))
})

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
/*3.17*: Phonebook database, step5 If the user tries to create a new phonebook entry for a person whose name is already in the phonebook, the frontend will try to update the phone number of the existing entry by making an HTTP PUT request to the entry's unique URL.*/
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const note = {
    name: body.name,
    number: body.number,
    date:Date()
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

app.get("/api/normal",(req,res)=>{
    res.send("<p>Hello World</p>")
})
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  /*3.16: Phonebook database, step4
Move the error handling of the application to a new error handler middleware*/
  app.use(unknownEndpoint)
  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
  
  // this has to be the last loaded middleware.
  app.use(errorHandler)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

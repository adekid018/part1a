const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
console.log(password)
//const url = `mongodb+srv://notes-app-full:${password}@cluster1.lvvbt.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb+srv://adekid018:${password}@cluster0.0elbxxa.mongodb.net/?retryWrites=true&w=majority`
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const note = new Note({
      content: 'HTML is Easy',
      date: new Date(),
      important: true,
    })

    return note.save()
  })
  .then(() => {
    console.log('note saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log("this",err))

  //import persons from './part3a/db.json'
/*
  require('dotenv').config()
const Note = require('./models/phoneBookDatabase')
const express=require('express')
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors())
const morgan=require('morgan')
//const mongoose = require('mongoose')

/*if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}*/
//const password ="adekid"
// process.argv[2]
//const url = `mongodb+srv://notes-app-full:${password}@cluster1.lvvbt.mongodb.net/?retryWrites=true&w=majority`
//const url = `mongodb+srv://adekid018:${password}@cluster0.0elbxxa.mongodb.net/phoneBook?retryWrites=true&w=majority`
//mongoose.connect(url)

//console.log(persons);
//app.use(morgan('tiny'))
//app.use(morgan(':method :url :body'))
/*morgan.token('body', req => {
    return JSON.stringify(req.body)
  })
  app.use(morgan(':method :url :body'))
  
let persons=[
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "dele",
      "number": "090128388338",
      "id": 5
    },
    {
      "name": "mom",
      "number": "08052075764",
      "id": 6
    },
    {
      "name": "adenike",
      "number": "08090779221",
      "id": 7
    },
    {
      "name": "kaykay",
      "number": "08172957673",
      "id": 8
    }
  ]
  //const Note = mongoose.model('Note', noteSchema)
  /*
  const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

  app.use(requestLogger)

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
app.get("/api/persons/:id",(req,res)=>{
  const singleContact=Nreq.pharms.if
})
const generateId=()=>{
const maxId=persons.length>0?
    //Math.max(...persons.map(i=>i.id))
    Math.floor(Math.random()*10000)
    :0
    return maxId+1
}
app.post("/api/persons",(req,res)=>{
    const person=req.body
    //console.log("first body",person.name);
    const newPerson= new Note({
        name:person.name,
        number:person.number,
        date:Date()
        //id:generateId()
    })
    //console.log(!newPerson.number);
    /*if(!newPerson.number||!newPerson.name){
       return res.status(400).json({
        error:"Name Missing"
       })
    }*/
    /*const findname=persons.find(i=>i.name===newPerson.name)
    if(findname){
        return res.status(400).json({
            error:"Name Must be unique"
           })
    }
    //console.log(`this is the finded name ${findname}`);

    //persons=persons.concat(newPerson)
    //console.log(persons);
    newPerson.save().then(result=>{
      res.json(result)
    })
    
})
app.get("/api/normal",(req,res)=>{
    res.send("<p>Hello World</p>")
})
app.get("/api/persons/:id",(req,res)=>{
    const id=Number(req.params.id)
    const findPerson=persons.find(i=>i.id===id)
    if(findPerson){
        res.json(findPerson)
    }
    else{
        res.status(204).end("No candidate")
    }

})
app.delete("/api/persons/:id",(req,res)=>{
    const id=Number(req.params.id)
    const findPerson=persons.filter(i=>i.id!==id)
    //persons=persons.concat(findPerson)
    res.status(204).end()
})
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})*/

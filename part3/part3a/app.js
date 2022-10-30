const express=require('express')
const app=express()
let persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const date=new Date()
console.log(date);
app.get('/persons',(req,res)=>{
    res.json(persons)
})
app.get('/info',(req,res)=>{
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})
app.get('/persons/:id',(req,res)=>{
  const note=req.params.id
  const find=persons.find(value=>value.id===note)
  if(find){
    res.json(find)
  }
  else{
    res.status(204).end()
  }
})
/*app.get('/notes/:id',(req,res)=>{
    const myRequest=Number(req.params.id)
    const findNotes=notes.find(n=>n.id===myRequest)
    if(findNotes){
    res.json(findNotes)
    }
    else{
        res.status(400).end("no data found")
    }
})
app.delete('/notes/:id',(req,res)=>{
    const myRequest=Number(req.params.id)
    const findNotes=notes.find(note=>note.id!==myRequest)
    res.status(204).end()
})*/
const port=3001
app.listen(port)
console.log('sever running');
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
app.get('/persons',(req,res)=>{
  console.log(res.json.persons);
    res.json(persons)
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
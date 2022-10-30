const express=require('express')
const app=express()
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
]
app.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})
app.get('/notes/:id',(req,res)=>{
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
})
const port=3000
app.listen(port)
console.log('sever running');
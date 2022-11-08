const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
//const nametoAdd = process.argv[3]
//console.log("this is",nametoAdd)
//const url = `mongodb+srv://notes-app-full:${password}@cluster1.lvvbt.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb+srv://adekid018:${password}@cluster0.0elbxxa.mongodb.net/phoneBook?retryWrites=true&w=majority`
const noteSchema = new mongoose.Schema({
  /*content: String,
  date: Date,
  important: Boolean,*/
  name:String,
  number:String,
  date:Date
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const note = new Note({
      name:process.argv[3],
      number:"08023307262",
      date: new Date()
    })

    return note.save()

    /*Note.find({}).then(result => {
        result.forEach(note => {
          console.log(note)
        })
        mongoose.connection.close()
      })*/
  })

  .then(() => {
    console.log('note saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))
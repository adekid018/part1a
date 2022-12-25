const mongoose=require('mongoose')
const url=process.env.MONGODB_URI
console.log("commecting to", url);
mongoose
.connect(url)
.then(result=>{
    console.log("Connected to mongoDb");
})
.catch(error=>{
    console.log("error connecting to mongoDb",error.message);
})
const noteSchema = new mongoose.Schema({
    name:{
      type:String,
      minLength:3,
      required:true
    },
    number:{
      type:String,
      /*3.20*: Phonebook database, step8
Add validation to your phonebook application, that will make sure that phone numbers are of the correct form. A phone number must*/
      validate:{
        validator:(v)=>{
        return /^(\d{2}|\d{3})-\d{7,8}$/.test(v)
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required:true
    },
    date:Date,
  })
  
  noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('Note', noteSchema)
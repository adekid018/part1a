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
      require:true
    },
    number:{
      type:Number,
      require:true
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
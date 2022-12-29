const mongoose=require('mongoose')
//const url=process.env.MONGODB_URI
const blogSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    vote:String
})
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports=mongoose.model('Model', blogSchema)
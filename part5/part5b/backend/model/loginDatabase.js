const mongoose=require('mongoose')
const loginDatabase=new mongoose.Schema({
    userName:String,
    passwordHash:String
})
loginDatabase.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports=mongoose.model('loginDatabase',loginDatabase)
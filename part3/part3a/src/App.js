

import './App.css';
import Phonebook from './components/Phonebook';
import { useState,useEffect } from 'react';
import severs from './PhoneSever/severs'
import axios from  'axios'
import Sucessfull from './components/sucessfull';
const App = () => {
  //using useEffect
  //console.log(`this is ${severs.all()}`)
  useEffect(()=>{
    severs
    .all()
    .then(response=>{
      setPersons(response)
    })
  },[])
  
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([])
  const [display,setDisplay]=useState('')
  const [number,setNumber]=useState('')
  const [name,setName]=useState('')
  const [sucess,setSucess]=useState()
  //filtering outcome
  const handledisplay=(event)=>{
    setDisplay(event.target.value)
    //console.log(event.target.value)
  }
  
  const handledName=(event)=>{
    setName(event.target.value)
    //console.log(event.target.value)
  }
  const handledNumber=(event)=>{
    setNumber(event.target.value)
    //console.log(event.target.value)
  }
  
  const handledDelete=(id,name)=>{
    const ur=`http://localhost:4000/persons/${id}`
    window.confirm(`Delete ${name}?`)?severs.deletion(id).then(setPersons(persons.filter(val=>val.id!==id))):axios.get(ur)
    //window.confirm(`Delete ${name}`)?axios.delete(ur).then(setPersons(persons.filter(val=>val.id!==id))):axios.get(ur)
  }


  const numberSubmitted=(event)=>{
    event.preventDefault();
   let addedContact={
      name:name,
      number:number
    }
    const findName=persons.find((value)=>value.name===name)
    const url="http://localhost:4000/api/persons"
    
    if(findName){
      const changeNote={...findName,number:number}
      window.confirm(`Do you want to replace this number`)?
      axios
      .put(`${url}/${findName.id}`,changeNote)
      .then(response=>{
        console.log(response)
       setPersons(persons.map(value=>value.name!==name?value:response.data))
      }):setPersons(persons)
      console.log("number  exist")  
    }

    else{
    //axios
    //.post("http://localhost:3001/persons",addedContact)
    severs
    .addedContact(addedContact)
    .then(myresponse=>{
      setPersons(persons.concat(myresponse))
      setSucess(`Succesfully Added ${name}`)
    })
    .catch(error=>{
      //setSucess(error.response.data.error)
      setSucess(<Sucessfull name={error.response.data.error}/>)
      console.log(error.response.data.error)
    })
    setTimeout(()=>setSucess(null),4000)
  }
  setName('')
  setNumber('')
    }
  //const output=persons.filter((value)=>value.name.toLowerCase().includes(display.toLowerCase()))
  //const output=persons.filter((value)=>console.log("This is",val))
  
  return (
    <div>
      <h2>Phonebook page</h2>
      filter shown with: <input value={display} onChange={handledisplay}/>
      <Sucessfull name={sucess}/>
      <h3>Add a new</h3>
      <form onSubmit={numberSubmitted}>
      <label>Name: </label> <input value={name} onChange={handledName}/>
      <label>Number: </label><input value={number} onChange={handledNumber}/>
      <button type='submit'>Add</button>
      </form>
      <h3>Numbers</h3>
      {persons.map((value)=>
      <Phonebook key={value.id} contact={value.name} phoneNumber={value.number} deletion={()=>handledDelete(value.id,value.name)}/>)}
    </div>
  )
}

export default App
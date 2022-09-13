import './App.css';
import Phonebook from './components/Phonebook';
import { useState,useEffect } from 'react';
import axios from  'axios'
const App = () => {
  //using useEffect
  
  useEffect(()=>{
    console.log("adebayoaa519@gmail.com")
    axios
    .get("http://localhost:3001/persons")
    .then(response=>{
      //console.log("working")
      //console.log(response.data.name)
      //console.log("working")
      setPersons(response.data)
    })
  })
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([])
  const [display,setDisplay]=useState('')
  const [number,setNumber]=useState('')
  const [name,setName]=useState('')
  
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
  
  const numberSubmitted=(event)=>{
    event.preventDefault();
   let addedContact={
      name:name,
      number:number
    }
    axios.post("http://localhost:3001/persons",addedContact)
    .then(response=>setPersons(persons.concat(response.data)))
    setName("")
    setNumber("")
  }
  const output=persons.filter((value)=>value.name.toLowerCase().includes(display.toLowerCase()))
  return (
    <div>
      <h2>Phonebook page</h2>
      filter shown with: <input value={display} onChange={handledisplay}/>
      <h3>Add a new</h3>
      <form onSubmit={numberSubmitted}>
      name: <input value={name} onChange={handledName}/>
      number: <input value={number} onChange={handledNumber}/>
      <button type='submit'>Add</button>
      </form>
      <h3>Numbers</h3>
      {output.map((value,i)=>
      <Phonebook key={i} contact={value.name} phoneNumber={value.number}/>)}
    </div>
  )
}

export default App
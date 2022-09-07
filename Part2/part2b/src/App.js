

import './App.css';
import Phonebook from './components/Phonebook';
import { useState } from 'react';


const App = () => {
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
    id:1,
    number:"08172957673"
  }
  ])
  //Decleare a use state for updating the contact
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  //an event handler used to add the contact to the person state 
  const noteSubmitted=(event)=>{
    //stopping it from submiting automatically
    event.preventDefault();
    const noteObj={
      name:newName,
      number:newNumber,
      id:persons.length + 1
    }
    //updating the person state
    //checking if contact exist
  
    console.log(persons.some((value)=>value.name===newName))
    if(persons.some((value)=>value.name===newName))
    {
      alert(`${newName.toString().toUpperCase()} is already exist in the phonebook`)
    }
    else if(persons.some((value)=>value.number===newNumber)){
      alert(`${newNumber.toString()} is already exist in the phonebook`)
    }
    else{
      setPersons(persons.concat(noteObj))
    }
    setNewName("")
    setNewNumber("")
  
    //reseting the input value
  
  }
  //handling the name changes made on the input
  const updatingName=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  //handling number changes on the input
  const updatingNumber=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
  
      <form onSubmit={noteSubmitted}>
        <div>
          name: <input  value={newName} onChange={updatingName} required/>
        </div>
        <div>number:  
          <input value={newNumber} onChange={updatingNumber} required type={"number"} maxLength={12}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value)=><Phonebook key={value.id} contact={value.name} phoneNumber={value.number}/>)}
    </div>
  )
}

export default App

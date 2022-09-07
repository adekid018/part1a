

import './App.css';
import Phonebook from './components/Phonebook';
import { useState } from 'react';


const App = () => {
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
    id:1
  }
  ])
  //Decleare a use state for updating the contact
  const [newName, setNewName] = useState('')

  //an event handler used to add the contact to the person state 
  const noteSubmitted=(event)=>{
    //stopping it from submiting automatically
    event.preventDefault();
    const noteObj={
      name:newName,
      id:persons.length + 1
    }
    //updating the person state
    //checking if contact exist
    

    console.log(persons.some((value)=>value.name.includes(newName)))
    if(persons.some((value)=>value.name.includes(newName)))
    {
      alert(`${newName.toUpperCase()} is already added to the phonebook`)
    }
    else{
      setPersons(persons.concat(noteObj))
    }
    setNewName("")
  
    //reseting the input value
  
    
  
  }
  //handling the changes made on the input
  const updatingName=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
  
      <form onSubmit={noteSubmitted}>
        <div>
          name: <input  value={newName} onChange={updatingName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value)=><Phonebook key={value.id} contact={value.name}/>)}
    </div>
  )
}

export default App

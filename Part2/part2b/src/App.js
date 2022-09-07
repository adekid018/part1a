
import './App.css';
import Phonebook from './components/Phonebook';
import { useState } from 'react';


const App = () => {
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  //Decleare a use state for updating the contact
  const [newName, setNewName] = useState('')
  
  //an event handler used to add the contact to the person state 
  const noteSubmitted=(event)=>{
    //stopping it from submiting automatically
    event.preventDefault();
    const noteObj={
      name:newName
    }
    //updating the person state
    setPersons(persons.concat(noteObj))
    //reseting the input value
    setNewName("")
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
      {persons.map((value)=><Phonebook key={value.name} note={value.name}/>)}
    </div>
  )
}

export default App

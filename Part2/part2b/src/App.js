import './App.css';
import Phonebook from './components/Phonebook';
import { useState } from 'react';
import PersonForm from './components/PersonForm';

const App = () => {
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
      <h3>Add a new</h3>
      <PersonForm submission={noteSubmitted} newName={newName} updatingName={updatingName} newNumber={newNumber} updatingNumber={updatingNumber}/>
      <h3>Numbers</h3>
      {persons.map((value)=>
      <Phonebook key={value.id} contact={value.name} phoneNumber={value.number}/>)}
    </div>
  )
}

export default App


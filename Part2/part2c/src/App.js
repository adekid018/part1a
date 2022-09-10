import './App.css';
import Phonebook from './components/Phonebook';
import { useState,useEffect } from 'react';
import axios from  'axios'
const App = () => {
  //using useEffect
  
  useEffect(()=>{
    console.log("adebayoaa519@gmail.com")
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response=>{
      console.log("working")
      console.log(response.data.name)
      let outcome=response.data.map((element)=>element.name.official)
      //console.log("working")
      setPersons(outcome)
    })
  })
  //Decleare a use state for the contact
  const [persons, setPersons] = useState([])
  const [display,setDisplay]=useState('')
  
  //filtering outcome
  const handledisplay=(event)=>{
    setDisplay(event.target.value)
    console.log(event.target.value)
  }
  let outCome
  let lessThan10

  if(display!==""){
    if(persons.filter((word)=>word.toLowerCase().includes(display.toLowerCase())).length>10){
      outCome=persons.filter((word)=>word.toLowerCase().includes("oyo"))
      lessThan10=<span>Too many matches specify another filter</span>
    }
    else{
      lessThan10=<span></span>
      outCome=persons.filter((word)=>word.toLowerCase().includes(display.toLowerCase()))
    }
    console.log("bye")
  }
  else{
    outCome=persons.filter((word)=>word.toLowerCase().includes("oyo"))
    
  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input value={display} onChange={handledisplay}/>
      {lessThan10}
      <h3>Add a new</h3>
      <h3>Numbers</h3>
      {outCome.map((value,i)=>
      <Phonebook key={i} contact={value}/>)}
    </div>
  )
}

export default App


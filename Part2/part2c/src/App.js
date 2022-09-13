import './App.css';

import { useState,useEffect } from 'react';
import axios from  'axios'

const App = () => {
  //using useEffect
  const [persons, setPersons] = useState([])
  const [display,setDisplay]=useState('')  
  
  return (
    <div>
      <h2>Phonebook</h2>
    </div>
  )

      


}
export default App

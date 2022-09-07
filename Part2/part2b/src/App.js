/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import { useState } from 'react';

const App=(props)=> {
  const {notes}=props
  const [note,setNote]=useState(props.notes)
  const [newNote, setNewNote] = useState(
    " "
  ) 
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const addNote=(event)=>{
    event.preventDefault();
    console.log("hello",event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: note.length + 1,
    }
    setNote(note.concat(noteObject))
    setNewNote('')
  }
  const handleChanges=(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
        <ul>
          {notesToShow.map((value)=><Note key={value.id} note={value.content}/>)}
        </ul>
        <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handleChanges}
        />
        <button type="submit">save</button>
      </form>   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import { useState } from 'react';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const noteSubmitted=(event)=>{
    event.preventDefault();
    console.log(event.target)
    const noteObj={
      name:newName
    }
    setPersons(persons.concat(noteObj))
    setNewName("")
    
  }
  
  const myNewContact=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
  
      <form onSubmit={noteSubmitted}>
        <div>
          name: <input  value={newName} onChange={myNewContact}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value)=><Note key={value.name} note={value.name}/>)}
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Header = (props) => {
  return (
    <div>
      <h1>The name of the course is {props.course["name"]}</h1>
    </div>
  )
}

const Button=({onClicked,text})=>{
return <button onClick={onClicked}>{text}</button>
}

const App=()=> {
  const [value, changedValue]=useState(0)
  

  /*const good=()=>changedValue({...value,good:value.good+1})
  const bad=()=>changedValue({...value,bad:value.bad+1})
  const neutral=()=>changedValue({...value,neutral:value.neutral+1})*/
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const random=()=>{changedValue(Math.floor(Math.random()*anecdotes.length))}
  const course={
    name:'Half stacks application development',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{course.name}</h1>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        <Header course={course} />

        <Button onClicked={random} text={"Enter Value"} />
        <p>{anecdotes[value]}</p>

        <h2>Statistic</h2>
        
        
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

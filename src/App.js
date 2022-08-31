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
const DisplayValue=({text})=><h3>The current value is {text}</h3>
const Button=({onClicked,text})=>{
return <button onClick={onClicked}>{text}</button>
}

const App=()=> {
  const [counterValue, increaseCounterValue]=useState(0)
  const increase=()=>increaseCounterValue(counterValue+1)
  const decrease=()=>increaseCounterValue(counterValue-1)
  const reset=()=>increaseCounterValue(0)
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
        <DisplayValue text={counterValue} />
        <Button onClicked={increase} text={"Plus1"} />
        <Button onClicked={decrease} text={"Minus1"} />
        <Button onClicked={reset} text={"Reset"} />
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

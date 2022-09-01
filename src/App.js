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
const Statistic=({outcome,text})=><p>{text} {outcome}</p>
const Button=({onClicked,text})=>{
return <button onClick={onClicked}>{text}</button>
}

const App=()=> {
  const [value, changedValue]=useState({
    good:0,
    bad:0,
    neutral:0
  })
  const good=()=>changedValue({...value,good:value.good+1})
  const bad=()=>changedValue({...value,bad:value.bad+1})
  const neutral=()=>changedValue({...value,neutral:value.neutral+1})
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

        <Button onClicked={good} text={"Good"} />
        <Button onClicked={neutral} text={"Neutral"} />
        <Button onClicked={bad} text={"Bad"} />
        <h2>Statistic</h2>
        <Statistic text={"Good"} outcome={value.good} />
        <Statistic text={"Neutral"} outcome={value.neutral} />
        <Statistic text={"Bad"} outcome={value.bad} />
        <Statistic text={"All"} outcome={(value.good+value.bad+value.neutral)} />
        <Statistic text={"Average:"} outcome={((value.good/1)+(value.bad/-1))/3} />
        <Statistic text={"Positive Percentage:"} outcome={((value.good)/(value.good+value.bad+value.neutral))*100 + "%"} />
        
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

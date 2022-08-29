import logo from './logo.svg';
import './App.css';
const Header = (props) => {
  return (
    <div>
      <h1>The name of the course is {props.course}</h1>
    </div>
  )
}

const Part=(props)=>{
  return(
  <div>
    <p>The name of the part on parts is {props.name} and it has {props.excersise}</p>
  </div>
  )
}
const Content=(props)=>{
  return(
    <div>
    <Part name={props.part1} excersise={props.excersise1}/>
    <Part name={props.part2} excersise={props.excersise2}/>
    <Part name={props.part3} excersise={props.excersise3}/>
    </div>
  )
}
const Total=(props)=>{
  return(
    [
      <p>The total number of exercises is {props.total}</p>
    ]
  )
}
/*Step 2 */
const App=()=> {
  const course='Half stack application development'
  const part1='Fundamentals of React'
  const exercises1=10
  const part2='using propsto pass data'
  const exercises2=7
  const part3='state of a component'
  const exercises3=14

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          
        </p>
        <Header course={course} />
        <Total total={exercises1+exercises2+exercises3}/>
        <Content part1={part1} excersise1={exercises1} part2={part2} excersise2={exercises2} part3={part3} excersise3={exercises3}/>
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

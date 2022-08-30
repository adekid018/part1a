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
    <p>The name of the part is {props.name} and it has {props.excersise}</p>
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
  const part1={
    name:'Fundamentals of React',
    exercises:10
  }
  const part2={
    name:'using propsto pass data',
    exercises:7
  }
  const part3={
  name:'state of a component',
  exercises:14
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{course}</h1>
        <p>
          {part1.name} {part1.exercises}
        </p>
        <p>
        {part1.name} {part2['exercises']}
        </p>
        <p>
        {part1.name} {part3.exercises}
        </p>
        <p>Number of exercises {part1['exercises'] + part2.exercises + part3.exercises}</p>
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          
        </p>
        <Header course={course} />
        <Total total={part1.exercises+part2['exercises']+part3['exercises']}/>
        <Content part1={part1.name} excersise1={part1.exercises} part2={part2.name} excersise2={part2.exercises} part3={part3.name} excersise3={part3.exercises}/>
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

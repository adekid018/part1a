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
  const course={
    name:'Half stack application development',
    parts:[{
    name:'Fundamentals of React',
    exercises:10
  },
  {
    name:'using propsto pass data',
    exercises:7
  },
  {
  name:'state of a component',
  exercises:14
  }
]}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{course.name}</h1>
        <p>
          {course.parts[0].name} {course.parts[0].exercises}
        </p>
        
        <p>
        {course.parts[1].name} {course.parts[1]['exercises']}
        </p>
        <p>
        {course.parts[2].name} {course.parts[2].exercises}
        </p>
        
        <p>Number of exercises {course.parts[0]['exercises'] + course.parts[1].exercises + course.parts[2].exercises}</p>
        
  <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
          
        </p>
        <Header course={course.name} />
        <Total total={course.parts[0].exercises+course.parts[1]['exercises']+course.parts[2]['exercises']}/>
        <Content part1={course.parts[0].name} excersise1={course.parts[0].exercises} part2={course.parts[1].name} excersise2={course.parts[1].exercises} part3={course.parts[2].name} excersise3={course.parts[2].exercises}/>

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

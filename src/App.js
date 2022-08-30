import logo from './logo.svg';
import './App.css';
const Header = (props) => {
  return (
    <div>
      <h1>The name of the course is {props.course["name"]}</h1>
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
    <Part name={props.part1["parts"][0].name} excersise={props.part1["parts"][0].exercises}/>
    <Part name={props.part1["parts"][1].name} excersise={props.part1["parts"][1].exercises}/>
    <Part name={props.part1["parts"][2].name} excersise={props.part1["parts"][2].exercises}/>
    </div>
  )
}
const Total=(props)=>{
  return(
    [
      <p>The total number of exercises is {props.total["parts"][0]["exercises"]+props.total["parts"][1]["exercises"]+props.total["parts"][2]["exercises"]}</p>
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
        <Header course={course} />
        <Total total={course}/>
        <Content part1={course}/>
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

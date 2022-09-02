import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';





const App=()=> {
  
//  const [value, changedValue]=useState(0)
  
  
  
  // increment the value in position 2 by one
  
  
  /*const good=()=>changedValue({...value,good:value.good+1})
  const bad=()=>changedValue({...value,bad:value.bad+1})
  const neutral=()=>changedValue({...value,neutral:value.neutral+1})*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello</h2>
        
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        
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

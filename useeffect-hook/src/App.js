import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    alert("useEffect 1 used")
    }, [])

  useEffect(()=>{
    alert("useEffect 2 used")
    }, [name])
    
  return (
    <div className="App">
      <h1>useEffect Hook {count} </h1>
      <button onClick={()=>setCount(count+1)} >Update Counter</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [data, useState] = useState("Vedant");
  return (
    <div className="App">
      <h1>Hooks {data}</h1>
      <button onClick={()=>setData("Nirmohi")} >Update Button</button>
    </div>
  );
}

export default App;

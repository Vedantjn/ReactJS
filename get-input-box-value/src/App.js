import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val){
    console.log(val.target.value)
    setData(val.target.val);
    setPrint(false);
  }

  return (
    <div className="App">
      <h1>Get input box value!</h1>
     {
      print?
      <h2>Value is : {data}</h2>
      : null
     }
      <input type="text" onChange={getData}/>
      <button onClick={() => setPrint(true)} >Print Data</button>
    </div>
  );
}

export default App;

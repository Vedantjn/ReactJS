import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import User from './User';

function App() {

  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  // useEffect(()=>{
  //   console.warn("useEffect called with data state");
  // }, [data])

  // useEffect(()=>{
  //   console.warn("useEffect called with count state");
  // }, [count])

  return (
    <div className="App">
    <User count={count} data={data} />
      <button onClick={()=>setCount(count+1)} >Update Count</button>
      <button onClick={()=>setData(data+1)} >Update Data</button>
    </div>
  );
}

export default App;

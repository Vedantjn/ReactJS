import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {

  // const students = ['Vedant', 'Nirmohi', 'Samyak', 'Ramesh']
  const students = [
    {name : 'Vedant',email : 'vedant#gmail.com', phone : 1111111},
    {name : 'siddu',email : 'siddu#gmail.com', phone : 3333333},
    {name : 'sam',email : 'sam#gmail.com', phone : 444444},
    {name : 'peter',email : 'peter#gmail.com', phone : 444444}

  ]

  // map loop
  // students.map((item)=>{
  //   console.warn("Map name is : ", item);
  }
  
  // for loop
  // for(let i = 0; i < students.length; i++){
  //   console.warn("For name is : ", students[i]);
  // }

  return (
    <div className="App">
    
      <h1>Handle array with list.</h1>
      {
         students.map((data)=>{
         <h1>Name is : {data.name}</h1>
      })
      }
    </div>
  );


export default App;

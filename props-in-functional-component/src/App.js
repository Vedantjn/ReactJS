import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  const [name, setName] = useState("Kartik");
  return (
    <div className="App">
      <h1>Props in react!</h1>
      <Student name = {"vedant"} email = {"vedant@gmail.com"} other = {{address : 'delhi', mobile : "0000"}}/>
      <Student name = {"peter"} email = {"peter@gmail.com"} other = {{address : 'noida', mobile : "0020"}}/>
      <Student name = {"sam"} email = {"sam@gmail.com"} other = {{address : 'indore', mobile : "3000"}}/>
      <button onClick={()=>{setName("Sarthak")}} >Update Name</button>
    </div>
  );
}

export default App;


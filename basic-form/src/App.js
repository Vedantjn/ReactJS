import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './Login';

function App() {

  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e){
    console.warn(name, tnc, interest);
    e.preventDefault()
  }

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

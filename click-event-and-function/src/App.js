import logo from './logo.svg';
import './App.css';

function App() {

  let data = "Vedant"
  function apple(){
    alert("Function called");
  }

  return (
    <div className="App">
      <h1>Hello {data}!</h1>
      <button onClick={()=>alert("Hello")}>Click Me with Arrow function</button>
      <button onClick={()=>apple()}>Click Me with Arrow function a and function component</button>
      <button onClick={apple}>Click Me with function component</button>
    </div>
  );
}

export default App;
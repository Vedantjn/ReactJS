import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  
  constructor(){
    super();
    console.warn("constructor called");
    this.state={
      count:0
    }

  }

  componentDidUpdate(prevProps, prevStates, snapshot){
    console.warn("componentDidUpdate called", prevStates.count, this.state.count);
    if(prevStates.count === this.state.count)
    {
      alert("data is already same")
    }
  }
  
  render(){
    console.warn("render called");
    return (
      <div className="App">
        <h1>Component did update {this.state.count} </h1>
        <button onClick={()=>{this.setState({count : 1})}} >Update Name</button>
      </div>
    );
  }
}

export default App;

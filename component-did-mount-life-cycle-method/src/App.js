import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  constructor(){
    super();

    this.state()={
      name:"vedant"
    }

    // console.warn("constructor called")
  }
  
  componentDidMount(){
    console.warn("componentDidMount called")
  }

  render(){
    console.warn("render called")
    return (
      <div className="App">
        <h1>Component did mount {this.state.name} </h1>
        <button onClick={()=>{this.setState({name:"Nirmohi"})}} >Update Name</button>
  
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data : "vedant"
    }
  }

  apple(){
    this.setState({data : "nirmohi"});
  }

  render(){
    return (
      <div className="App">
        <h1>Hello {this.state.data}</h1>
        <button onClick={() => this.apple()} >Update data</button>
      </div>
    );
  }
}

export default App;

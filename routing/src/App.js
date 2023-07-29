import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Nav from './Nav';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/about' ><About/></Route>
      <Route path='/' exact={true} ><Home/></Route>
    </div>
  );
}

export default App;
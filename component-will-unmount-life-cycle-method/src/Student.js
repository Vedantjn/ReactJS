import logo from './logo.svg';
import './Student.css';
import React from 'react';

class Student extends React.Component{

    componentWillUnmount(){
        alert("componentWillUnmount called")
    }

  render(){
    return (
      <div className="Student">
       <h1>Student Component</h1>
      </div>
    );
  }
}

export default Student;

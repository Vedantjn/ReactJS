import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function User(props) {

  useEffect(()=>{
    alert("Count is "+ props.count)
  }, [props.count])

  return (
    <div className="User">
    <h1>Count props: {props.count}</h1>
    <h1>Data props: {props.data}</h1>
    </div>
  );
}

export default User;

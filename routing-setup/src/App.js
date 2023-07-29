import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import React from 'react'

function App50() {
  return (
    <>
       
    <div style={{textAlign:'center'}}>
          <Router>
        <Link to="/home">Home Page</Link>
        <Link to="about">About Us</Link>
        <Routes>
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
        </Routes>
             <h1>This is we like in our country</h1>
        </Router>
  
    </div>
    </>
  )
}

function Home() {
    return (
        <>
     <div>
        <h1>Home page</h1>
        <h2>This is our Home page Have a look</h2>
     </div>
    </>
  )
}



function About() {
    return (
        <>
    <div><h1>This is our About us Page</h1>
    <h2>You can know each and everything about us from here</h2></div>
    </>
  )
}

export default App50
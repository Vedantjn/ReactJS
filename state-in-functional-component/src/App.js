import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState("vedant")
  function updateData(){
    setData("nirmohi")
  }

  return (
    <div className="App">
      <h1>Hello {data}</h1>
      <button onClick={updateData}>Update data</button>
    </div>
  );
}

export default App;


// =============================================================================================================================================================================

// USING VARIABLES, THE DATA DOESNOT GET UPDATED

// import logo from './logo.svg';
// import './App.css';

// function App() {

//   let data = "vedant";
//   function updateData(){
//     data = "nirmohi"
//     alert(data)
//   }

//   return (
//     <div className="App">
//       <h1>Hello {data}</h1>
//       <button onClick={updateData}>Update data</button>
//     </div>
//   );
// }

// export default App;

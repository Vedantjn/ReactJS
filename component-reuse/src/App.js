import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  const users = [
    {
      name : 'Vedant', email : 'vedant@gmail.com', contact : "111"
    },
    {
      name : 'Samyak', email : 'samyak@gmail.com', contact : "222"
    },
    {
      name : 'Varun', email : 'varun@gmail.com', contact : "333"
    },
  ]

  return (
    <div className="App">
     <h1>Reuse component with list</h1>
     {
      users.map((item, i)=>{
        <User data = {item} />
      })
     }
    </div>
  );
}

export default App;

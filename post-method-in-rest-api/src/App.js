import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    getList()
  },[])
    function getList(){
      fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
    }
  console.warn(users)

  function deleteUser(id){
    fetch(`http://localhost:4000/todo/${id}`, {
      method : 'DELETE'
    }).then((result)=>{
      result.json().then((res)=>{
          console.warn(res);
          getList();
      })
    })
  }

  return (
    <div className="App">
      <h1>DELETE METHOD </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Operations</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id }</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
            <button><button onClick={()=>deleteUser(item.id)} >Delete</button></button>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
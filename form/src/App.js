import "./App.css";
import {useState,useEffect} from 'react'

function App() {
  const initialValve= {username:"", email: "", password: ""}
  const [formValue, setformValue]=useState(initialValve)
  const [formerror, setformerror]=useState({})
  const[isSubmit, setisSubmit]=useState(false)



 const handleChange =(e)=>{

const {name,value}=e.target
setformValue({...formValue, [name]: value})
console.log(formValue)
 }

const handelSubmit =(e)=>{
  e.preventDefault()
  setformerror(validator(formValue))
  setisSubmit(true)
}

useEffect(()=>{
  console.log(formerror)
if(Object.keys(formValue).length===0 && isSubmit){
  console.log(formValue)
}
},[formerror])

const validator=(value)=>{
  const error={}
   const  regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

   if(!value.username){
    error.username="username is requried!"
   }
   if(!value.email){
    error.email="email is requried!"
   }
   if(!value.password){
    error.password="password is requried!"
   }
return error

}

  return (
  
    <div className="App">
{Object.keys(formerror).length === 0 && isSubmit ? (
        <div className="ui message success" style={{"color":"green"}}>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
      )}


      <form onSubmit={handelSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
       

          <div className="field">
            <label>Username</label> <br/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValue.username}
              onChange={handleChange}
             
            />
          </div>
          <p> {formerror.username}</p>
          <div className="field">
            <label>Email</label> <br/>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValue.email}
              onChange={handleChange}


            />
          </div>
          <p> {formerror.email}</p>
          <div className="field">
            <label>Password</label> <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
<p> {formerror.password}</p>
          <br></br>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
    
  );
  }

export default App;

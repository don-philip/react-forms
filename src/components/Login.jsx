import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues]=useState({
    email:'',
    password:''
  })
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })
  
  const emailIsInvalid =didEdit.email && !enteredValues.email.includes('@')
  const passwordIsInvalid= didEdit.password && enteredValues.password.trim().length<6
function handleSubmit(event){
  event.preventDefault()
  console.log(enteredValues);
  
}

function handleInnputChange(identifier, value){
  setEnteredValues(prev=>({
    ...prev,
    [identifier]:value
  }))
  setDidEdit(prev=>({
    ...prev,
    [identifier]:false
  }))
}

function handleInputBlur(identifier){
  setDidEdit(prev=>({
    ...prev,
    [identifier]:true
  }))
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event)=>handleInnputChange('email',event.target.value)} 
          value={enteredValues.email}
          onBlur={()=>handleInputBlur("password")}
          error={emailIsInvalid && 'Enter valid email'}
        />
        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event)=>handleInnputChange('password',event.target.value)} 
          value={enteredValues.password}
          onBlur={()=>handleInputBlur("email")}
          error={passwordIsInvalid && 'Enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

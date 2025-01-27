import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onChange={(event)=>handleInnputChange('email',event.target.value)} value={enteredValues.email} id="email" type="email" name="email" onBlur={()=>handleInputBlur("email")}/>
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onChange={(event)=>handleInnputChange('password',event.target.value)} value={enteredValues.password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

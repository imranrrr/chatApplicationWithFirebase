import React,{useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Firebase/index"
import "./Register.css";
function Register() {
  const [err,setErr] = useState(false)
  const handlesubmit =  async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email =e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{
   const res=  createUserWithEmailAndPassword(auth,email,password)
    }catch(err)
    {
      setErr(true)
    }
   

  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="display name"
            name="username"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            Add an Avatar
          </label>
          <button>Sign up</button>
          {err && <span>Something went Wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;

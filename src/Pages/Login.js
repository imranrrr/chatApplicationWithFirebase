import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="email"
            autoComplete="current-password"
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="current-password"
          />
          <button>Sign in</button>
          {err && <span>Something went Wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

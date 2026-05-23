import "../styles/login.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Login() {

  const [username,setUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = ()=>{

    
    if(username.trim() === ""){
      alert("Please enter username");
      return;
    }

    localStorage.setItem("user",username);

    navigate("/home");
  };

  return (

    <motion.div
      className="login-container"

      initial={{ opacity:0,y:-50 }}

      animate={{ opacity:1,y:0 }}

      transition={{ duration:0.7 }}
    >

      <div className="login-box">

        <h1>LearnBuddy</h1>

        <input
          type="text"
          placeholder="Enter Username"

          value={username}

          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </motion.div>

  );
}

export default Login;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { addUserData } from "./firestore.js";
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Import Lucide icons
import { House, Users, CirclePlus, Settings, Mail } from 'lucide-react';
import './App.css'

function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const handleSignUp = async () => {
    setErrorMsg("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);

    window.location.href = chrome.runtime.getURL("home.html");
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div>
      <input type="text" id='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button id='signup' onClick={handleSignUp}>Sign Up</button>
      {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}
    </div>
  )
}

function Header(props){
  return <h1>{props.title}</h1>
}

function Login(){
  return (
    <div>
      {/* We need to break the menu into its own component and subcomponents */}
      <div id="menu">
        <button id="home-btn" title="Home">
          <House />
          </button>
          <button id="users-btn" title="Friends">
            <Users />
            </button>
            <button id="add-btn" title="Add Habits">
              <CirclePlus />
              </button>
              <button id="mail-btn" title="Messages">
                <Mail />
                </button>
              <button id="settings-btn" title="Settings">
                <Settings />
                </button>
      </div>
      <Header title="Login Page" />
      <hr />
      <SignIn />
    </div>
  )
}


export default Login;
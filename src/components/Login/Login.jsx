/** @format */

import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/frontend_assets/assets";
export default function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sing Up");
  return (
    <>
      <div className='login'>
        <form className='login-container'>
          <div className='login-title'>
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=''
            />
          </div>
          <div className='login-input'>
            {currState === "login" ? (
              <></>
            ) : (
              <input type='text' placeholder='Your Name' required />
            )}
            <input type='email' placeholder='Your Email' required />
            <input type='password' placeholder='Password' required />
          </div>
          <button>
            {currState === "Sing Up" ? "Create Account" : "Login"}
          </button>

          <div className='login-condition'>
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {
            currState === "Sing Up" ?
            <p>
            Already have an account? <span onClick={()=>setCurrState("login")} >Login Here</span>
          </p>
            : 
          <p>
            create a new account? <span onClick={()=>setCurrState("Sing Up")} >Click Here</span>{" "}
          </p>
          }
    
        </form>
      </div>
    </>
  );
}

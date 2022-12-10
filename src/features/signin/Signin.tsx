import React from 'react'
import logo from "../../assets/img/logo.png";
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import './Signin.css'

interface propType{
    switchSignupMode:()=>void
}


const Signin = ({switchSignupMode}:propType) => {
  return (
    <form
    action="index.html"
    autoComplete="off"
    className="sign-in-form">
    <div className="logo">
      <img src={logo} alt="easy class" />
      <h3>easyclass</h3>
    </div>
    <div className="heading">
      <h2>Welcome Back</h2>
      <h6>Not Registered Yet?</h6>
      <a
        className="toggle"
        onClick={() => {
            switchSignupMode()
        }}>
        Sign Up
      </a>
    </div>
    <div className="actual-form">
      <Inputs
        type="text"
        autoCompelete="name"
        id="name"
        labelText="Name"
        required={true}
      />
      <Inputs
        type="password"
        autoCompelete="password"
        id="password"
        labelText="Password"
        required={true}
      />
      <Button type="submit" text="Sign In" />
      <p className="text">
        Forgotten your password or your login details?
        <a href="#">Get Help</a> signing in
      </p>
    </div>
  </form>
  )
}

export default Signin
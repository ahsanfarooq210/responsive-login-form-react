import React from 'react'
import './SignupForm.css'
import logo from "../../assets/img/logo.png";
import Inputs from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';

interface propType{
    switchSignupMode:()=>void
}

const SignupForm = ({switchSignupMode}:propType) => {

  return (
    <form
    action="index.html"
    autoComplete="off"
    className="sign-up-form">
    <div className="logo">
      <img src={logo} alt="easy class" />
      <h3>easyclass</h3>
    </div>
    <div className="heading">
      <h2>Get Started</h2>
      <h6>Already have an account?</h6>
      <a
        className="toggle"
        onClick={() => {
            switchSignupMode()
        }}>
        Sign in
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
        type="email"
        autoCompelete="email"
        id="email"
        labelText="Email"
        required={true}
      />
      <Inputs
        type="password"
        autoCompelete="password"
        id="password"
        labelText="Password"
        required={true}
      />
      <Button type="submit" text="Sign Up" />
      <p className="text">
        By signing up, I agree to the
        <a href="#">Terms of Services</a> and
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  </form>
  )
}

export default SignupForm
import React, { useState } from "react";
import "./Authentication.css";
import logo from "../../assets/img/logo.png";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import Inputs from "../../components/inputs/Inputs";

const Authentication = () => {
  const [toggleSignupMode, setToggleSignupMode] = useState<boolean>(false);

  return (
    <main className={toggleSignupMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
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
                    setToggleSignupMode((prevState) => {
                      return !prevState;
                    });
                  }}>
                  Sign Up
                </a>
              </div>
              <div className="actual-form">
                  <Inputs/>
                <div className="input-wrap">
                  <input
                    type="password"
                    id="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="submit"
                  defaultValue="Sign In"
                  className="sign-btn"
                />
                <p className="text">
                  Forgotten your password or your login details?
                  <a href="#">Get Help</a> signing in
                </p>
              </div>
            </form>
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
                    setToggleSignupMode((prevState) => {
                      return !prevState;
                    });
                  }}>
                  Sign in
                </a>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    id="name"
                    minLength={4}
                    className="input-field"
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    id="email"
                    minLength={4}
                    className="input-field"
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    id="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="submit"
                  defaultValue="Sign Up"
                  className="sign-btn"
                />
                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
          <div className="carousel">
            <div className="image-wrapper">
              <img src={image1} className="image img-1 show" alt="" />
              <img src={image2} className="image img-2" alt="" />
              <img src={image3} className="image img-3" alt="" />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>
              <div className="bullets">
                <span className="active" data-value={1} />
                <span data-value={2} />
                <span data-value={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Authentication;

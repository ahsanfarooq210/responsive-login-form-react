import React, { useState } from "react";
import "./Authentication.css";
import logo from "../../assets/img/logo.png";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import Inputs from "../../components/inputs/Inputs";
import Button from "../../components/button/Button";
import Signin from '../signin/Signin';
import SignupForm from "../signup/SignupForm";

const Authentication = () => {
  const [toggleSignupMode, setToggleSignupMode] = useState<boolean>(false);

  const transformSignupMode=()=>{
    setToggleSignupMode((prevState) => {
      return !prevState;
    });
  }

  return (
    <main className={toggleSignupMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <Signin switchSignupMode={transformSignupMode} />
            <SignupForm switchSignupMode={transformSignupMode} />
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

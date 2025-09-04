import React, { useState } from "react";
import "../ForgetPassword/Forget.css";
import { Link } from "react-router-dom";

function ForgetPass() {

  const [radioChange,SetRadioChange] = useState(false)

  const handleRadioChange =(data)=> {
    if(data==="email"){
      SetRadioChange(false)
    }
    if(data==="text"){
      SetRadioChange(true)
    }

  }

  return (
    <div className="mainContainer" >
      <div className="topContainer" >
        <div className="navContainer">
          <div className="navBar">
            <img src="src/assets/Netflix_Logo_PMS.png" alt="" id="navLogo" />
            <Link to={'/signin'}><button className="signIn2">Sign in</button></Link>
          </div>
        </div>
        <div className="boxContainer">
          <div className="boxForget">
            <h1 className="heading">Update password, email or phone</h1>
            <p id="tag">How would you like to reset your password?</p>
            <div className="radioButtons">
              <label>
                <input type="radio" name="Check" id="radioBtn" onClick={()=>handleRadioChange("email")} />
                {""} Email
              </label>
              <label>
                <input type="radio" name="Check" id="radioBtn" onClick={()=>handleRadioChange("text")}/>
                {""} Text Message(SMS)
              </label>
            </div>
            {
              !radioChange ? (<p id="tag">
              We will send you an email with instructions on how to reset your
              password.
            </p>):(<p id="tag">
              We will text you a verification code to reset your password. Message and data rates may apply.
            </p>)
            }
            {
              !radioChange ? (<div className="Box1">
              <input type="email" name="" id="emailInput" placeholder="Email" />
              <button id="emailMe">Email Me</button>
            </div>):(<div className="Box1">
              <input type="email" name="" id="emailInput" placeholder="Mobile No" />
              <button id="emailMe">Message Me</button>
            </div>)
            }


            <Link style={{ color: "black" }} id="tag2">
              I can't remember my email address or phone number.
            </Link>
          </div>
          <div className="information">
            <p id="subtext">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <Link>Learn More</Link>
          </div>
        </div>
         <div className="footerContainer" >
        <div className="bottomContainer">
          <div className="bottomItems">
            <h3 id="head1">Questions? Call 000-800-919-1743 (Toll-Free)</h3>
            <li className="itemList1">
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Cookie Preferences</a>
              <a href="#">Corporate Information</a>
            </li>

            <select
              name="language"
              id="language2"
              style={{
                width: "130px",
                height: "32px",
                padding: "0 10px 0 10px",
                marginRight: "10px",
                borderRadius: "3px",
              }}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
      </div>
</div>
  );
}
export default ForgetPass;

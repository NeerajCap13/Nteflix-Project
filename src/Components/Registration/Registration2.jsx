import React from "react";

import "../Registration/Registration.css";
import { Link } from "react-router-dom";

// import email from "./../Banner/banner.jsx"

function Registration2() {
  
  return (
    <div className="mainReg">
      <div className="regContainer">
        <div className="regNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo"/>
          <button className="regBtn">Sign In</button>
        </div>
      </div>
      <div className="regContainer2">
        <div className="regContent2">

          <p className="regP" style={{ color: "#333333" }}>
            STEP 2 OF 4
          </p>
          <h1 className="regH2" style={{ color: "#333333" }}>
            Create a password to start your membership
          </h1>
          <p className="regP3" style={{ color: "#000000" }}>
            Just a few more steps and you're done!
            We hate paperwork, too.
          </p>

          <input type="Email" placeholder="Email" className="emailTxt2"/>
          <input type="Password" placeholder="Add a password" className="passTxt2" />

          <Link to={"/userOne"} className="regNextBtn2" > 
          <button className="regNextBtn2">Next</button>
          </Link>
          
        </div>   
      </div>
      <div className="regFooter">
          <div className="regItems">
            <p className="regHead">Questions? Call 000-800-919-1743</p>
            <li className="regList">
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Cookie Preferences</a>
              <a href="#">Corporate Information</a>
            </li>

            <select
              name="language"
              className="regLang"
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
  );
}

export default Registration2;

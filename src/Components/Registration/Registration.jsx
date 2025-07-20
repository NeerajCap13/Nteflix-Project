import React from "react";

import "../Registration/Registration.css";

function Registration() {
  return (
    <div className="mainReg">
      <div className="regContainer">
        <div className="regNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo"/>
          <button className="regBtn">Sign In</button>
        </div>
      </div>

      <div className="regContainer2">
        <div className="regContent">
            <div className="deviceImg"><img src="src/assets/Devices.png" alt="" id="deviceImg" /></div>
          
          <p className="regP" style={{ color: "#333333" }}>
            STEP 1 OF 4
          </p>
          <h1 className="regH1" style={{ color: "#333333" }}>
            Finish setting up your account
          </h1>
          <p className="regP2" style={{ color: "#000000" }}>
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>

          <button className="regNextBtn">Next</button>
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

export default Registration;

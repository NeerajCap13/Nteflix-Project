import React, { useContext, useState } from "react";
import "../Registration/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import EmailContext from "../Context/EmailProvider";

function Registration2() {
  const navigate = useNavigate();
  const [email] = useContext(EmailContext);
  const [pass, setPass] = useState("");
  const passHandler = () => {
    if (pass==="") {
      alert("require password");
    } else {
      navigate("/userOne");
    }
  };
  return (
    <>
      <div className="mainReg">
        <div className="regContainer">
          <div className="regNav">
            <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
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
              Just a few more steps and you're done! We hate paperwork, too.
            </p>

            <label className="label">Email</label>
            <span className="enteredEmail">{email}</span>
            <input
              type="Password"
              placeholder="Add a password"
              className="passTxt2"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />


              <button className="regNextBtn2" onClick={passHandler}>
                Next
              </button>

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
    </>
  );
}

export default Registration2;

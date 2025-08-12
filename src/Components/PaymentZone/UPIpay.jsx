import React from "react";
import "./UPI.css";

function UPIpay() {
  return (
    <>
      <div className="upiContainer">
        <div className="userNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
          <button className="userSignOut">Sign Out</button>
        </div>

        <div className="UPI_container">
          <form className="UPIcontent">
            <span className="upiStep">STEP <b>4</b> OF <b>4</b> </span>
            <h1 className="upiHead">Set up UPI AutoPay</h1>
            <p className="upiSub">You can change this recurring payment any time in your settings.</p>
          </form>
        </div>

        <div className="regFooter">
          <div className="regItems">
            <p className="regHead">Questions? Call 000-800-919-1743</p>
            <li className="regList" id="payList">
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

export default UPIpay;

import React from "react";
import "../RegisteredUser/UserOne.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Netflix_Logo_PMS.png"

function UserOne() {
  return (
    <div className="mainReg">
      <div className="regContainer">
        <div className="regNav">
          <img src={logo} className="regLogo" />
          <Link to={"/logout"}>
          <button className="userSignOut">Sign Out</button>
          </Link>
        </div>
      </div>
      <div className="regContainer2">
        <div className="userContent">
          <div className="SVG">
            <img src="src/assets/Checkmark.png" alt="" className="tickSvg" />
          </div>

          <p className="userP" style={{ color: "#333333" }}>
            STEP 3 OF 4
          </p>
          <h1 className="userH1" style={{ color: "#333333" }}>
            Choose your Plan
          </h1>
          <div className="choose">
            <div className="checkList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="CheckmarkStandard"
                aria-hidden="true"
                class=" "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                  fill="red"
                ></path>
              </svg>
              <p className="listCheck">No commitments, cancel anytime.</p>
            </div>

            <div className="checkList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="CheckmarkStandard"
                aria-hidden="true"
                class=" "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                  fill="red"
                ></path>
              </svg>
              <p className="listCheck">Everything on Netflix for one low price.</p>
            </div>

            <div className="checkList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="CheckmarkStandard"
                aria-hidden="true"
                class=" "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                  fill="red"
                ></path>
              </svg>
              <p className="listCheck">No ads and no extra fees. Ever.</p>
            </div>


          </div>

          <Link to={"/newPlan"} className="regNextBtn2"><button className="regNextBtn2">Next</button></Link>


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

export default UserOne;

import React, { useContext } from "react";
import "../Registration/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/EmailProvider";
import logo from "../../assets/Netflix_Logo_PMS.png";
import apiClient from "../API/APIclient.js";

function Registration2() {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useContext(Context);

  const passHandler = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const res = await apiClient.post("/register", {
        email,
        password,
      });
      if (res.status === 201) {
        navigate("/userOne");
      }
    } catch (error) {
      console.log("Registration Failed", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed. Try again.");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <div className="mainReg">
        <div className="regContainer">
          <div className="regNav">
            <img src={logo} className="regLogo" />
            <button className="regBtn" onClick={() => navigate("/signin")}>
              Sign In
            </button>
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

            {!email ? (
              <input
                type="Email"
                placeholder="Enter Your Email"
                className="emailtxt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
             <input
                type="Email"
                className="emailtxt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            <input
              type="Password"
              placeholder="Add a password"
              className="passTxt2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

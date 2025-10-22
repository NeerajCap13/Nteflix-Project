import React, { useContext, useState } from "react";
import "../Login/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Netflix_Logo_PMS.png'
import cover from '../../assets/BannerNew.jpg'
import apiClient from "../API/APIclient";
import Context from "../Context/EmailProvider";


function SignIn() {
  const navigate = useNavigate()
  const [change, SetOnChange] = useState(false);
  const handleChange = () => SetOnChange((prev) => !prev);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setVerifiedEmail} = useContext(Context)

 const signInHandler = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
    try {
      const res = await apiClient.post("/login", { email, password });

      // ✅ Extract user email from backend response


      if (res.status === 200 || res.status === 201) {
        const userEmail = res?.data?.email;
      if (userEmail) {
        setVerifiedEmail(userEmail);
      }
        navigate("/userProfile");
      } else {
        alert("Unexpected response. Please try again.");
      }

      // Reset fields
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      const message = error.response?.data?.message || "Login failed. Please try again.";
      alert(message);
    }
  };

  return (
    <div className="SignInPageContainer">
      <div className="SignInContainer">
        <img src={cover} className="signinCover"/>
        <div id="card-overlay1" />
        <div className="logoBar">
          <img src={logo} alt="" id="navLogo" />
        </div>
        <div className="contentBox">
          <div className="signBox">
            {change ? (
              <div className="item-container">
                <h2 id="head">Sign In</h2>
                <input
                  type="email"
                  name=""
                  id="EmailID"
                  placeholder="Email or Mobile Number"
                />
                {/* <input type="password" name="" id="Pwd" placeholder="Password"/> */}
                <p
                  id="pp"
                  style={{
                    textAlign: "center",
                    margin: "5px 0px",
                    fontSize: "13px",
                  }}
                >
                  Message and data rates may apply
                </p>
                <button className="SignBtn1">Send sign-in code</button>
                <p id="p1">OR</p>
                <button className="codeSign" onClick={handleChange}>
                  Use password
                </button>
                <a id="a1" href="#">
                  Forgot Email or phone number?
                </a>
              </div>
            ) : (
              <div className="item-container">
                <h2 id="head">Sign In</h2>
                <input
                  type="email"
                  name=""
                  id="EmailID"
                  placeholder="Email or Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  id="Pwd"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="SignBtn1" onClick={signInHandler}>Sign In</button>
                <p id="p1">OR</p>
                <button className="codeSign" onClick={handleChange}>
                  Use a sign-in code
                </button>
                <Link to={"/loginHelp"}>
                  <p id="a1" href="#">
                    Forgot Password?
                  </p>
                </Link>
              </div>
            )}

            <div className="dev2">
              <div className="div3">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  style={{ height: "20px", width: "20px" }}
                />
                <p id="p2">Remember Me</p>
              </div>

              <h4 id="new">
                New to Netflix?
                <Link to={"/"} id="a5">
                  Sign up Now
                </Link>
              </h4>
              <p id="p3">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
              <a id="a4">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="downContainer">
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
  );
}

export default SignIn;

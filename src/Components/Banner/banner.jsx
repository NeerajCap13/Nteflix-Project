import React, { useContext, useState } from "react";
import "../../Components/Banner/banner.css";
import logo from "../../assets/Netflix_Logo_PMS.png";
import Bg from "../../assets/BannerNew.jpg";

import { Link, useNavigate } from "react-router-dom";
import EmailContext from "../Context/EmailProvider";

function Banner() {
  const [email, setEmail] = useContext(EmailContext);
  console.log(email);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleError = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email === "") {
      setError("Type something, it's empty");
    } else if (!emailRegex.test(email)) {
      setError("Not a valid email");
    } else {
      navigate("./newUser");
    }
  };

  return (
    <>
      {/* Banner background image */}
      <div className="banner">
        <img
          src={Bg}
          alt="Netflix Banner"
          id="backPic"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 1,
          }}
        />
        {/* Overlay for dark effect */}
        <div
          id="card-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.75)",
            zIndex: -1,
          }}
        />

        {/* Header with logo and sign-in */}
        <header>
          <img src={logo} alt="" id="logo" />
          {/* Sign-in section */}
          <div id="SignIn">
            <select
              name="language"
              id="language"
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
            <Link to={"/signin"}>
              <button className="SignInBtn">Sign In</button>
            </Link>
          </div>
        </header>

        {/* Banner main content section */}
        <div className="section">
          {/* Banner text content */}
          <div className="banner-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <p id="p">Starts at ₹149. Cancel at any time.</p>
          </div>

          {/* Email prompt and input */}
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          {/* Email input field and button */}
          <div className="inputField">
            <input
              type="email"
              name="email"
              id="emailTxt"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <button type="submit" id="getStartedBtn" onClick={handleError}>
              Get Started<span>&gt;</span>
            </button>
          </div>
          {error ? <p>{error}</p> : <p></p>}
        </div>
      </div>
    </>
  );
}

export default Banner;

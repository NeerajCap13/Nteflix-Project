import { useContext, useState } from "react";
import '../NewBanner/NewBanner.css'
import logo from "../../assets/Netflix_Logo_PMS.png";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/EmailProvider";
import Banner from '../../assets/BannerNew.jpg'

function NewBanner() {
  const {email, setEmail} = useContext(Context);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleError = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && emailRegex === "") {
      setError("Not a Valid Email");
    } else if (!emailRegex.test(email)) {
      setError("Email is Required");
    } else {
      navigate("./newUser");
    }
  };

  return (
    <>
      {/* Banner background image */}
      <div className="banner" >
        <img src={Banner} className="netBanner"/>
        <div className="cardOverlap"/>
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
            <Link to="/signin" className="SignInBtn">Sign In</Link>
          </div>
        </header>
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
              className={`emailTxt ${error ? "emailError":""}`}
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <button type="submit" id="getStartedBtn" onClick={handleError}>
              Get Started<span>&gt;</span>
            </button>
            {error ? <p className="bannerError">{error}</p> : <p></p>}
          </div>

        </div>
      </div>
    </>
  );
}

export default NewBanner;

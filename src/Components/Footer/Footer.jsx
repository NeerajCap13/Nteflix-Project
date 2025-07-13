import React from "react";

import "./../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="subscribe">
          <h3 className="line3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          {/* Email input field and button */}
          <div className="inputField2">
            <input
              type="email"
              name=""
              id="emailTxt2"
              placeholder="Email address"
              required
            />
            <button type="submit" id="getStartedBtn">
              Get Started<span>&gt;</span>
            </button>
          </div>
        </div>

        <div className="details">

          <h4 className="call">
            Questions? Call <a href="#">0-00800-919-1743</a>
          </h4>

          <div className="list">
            <a href="#">FaQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie preferences</a>
            <a href="#">Legal Notices</a>
            <a href="#">Account</a>
            <a href="#">Ways to watch</a>
            <a href="#">Corporate Information </a>
            <a href="#">Only on Netflix</a>
            <a href="#">Media Center</a>
            <a href="#">Terms of use</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="changeLanguage">
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
          </div>

          <div className="copyRight">
            <p>Netflix India</p>
          </div>

          <div className="info2">
            <p className="line">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a>Learn more.</a>
            </p>
          </div>
          <button className="footerBtn">Get Started</button>
        </div>

        
      </div>
    </>
  );
}

export default Footer;

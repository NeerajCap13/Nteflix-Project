import React from 'react'
import '../../Components/Banner/banner.css'
import logo from '../../assets/Netflix_Logo_PMS.png'
import Bg from '../../assets/BannerNew.jpg'
// import arrow from '../../assets/ArrowForward.svg'


function Banner() {
  return (
    <>
      {/* Banner background image */}
      <div className="banner">
        <img
          src={Bg}
          alt="Netflix Banner"
          id='backPic'
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",

            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 1,
          }}  
          
        />
        {/* Overlay for dark effect */}
        <div id="card-overlay"
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
        <img src={logo} alt="" id='logo' />
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
          <button
            className="SignInBtn"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Banner main content section */}
      <div className='section'>
        {/* Banner text content */}
        <div className="banner-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p id='p'>Starts at ₹149. Cancel at any time.</p>
        </div>
        
        {/* Email prompt and input */}
        <h3> 
          Ready to watch? Enter your email to create or restart your
          membership.
        </h3>
        {/* Email input field and button */}
        <div className='inputField'>
          <input type="email" name="" id="emailTxt" placeholder="Email address" required/>
          <button type="submit" id='getStartedBtn'>Get Started<span>&gt;</span></button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Banner
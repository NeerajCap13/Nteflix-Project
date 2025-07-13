import React from "react";

import "../Login/SignIn.css";

function SignIn() {
  return (
    <>
      <div className="SignInPage">
        <img src="src/assets/BannerNew.jpg" className="bgc" />
        <div className="logoNetflix">
          <img src="src/assets/Netflix_Logo_PMS.png" id="NetLogo" />
        </div>
        <div
          id="card-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: -1,
          }}
        />
        <div className="Container">

            <div className="signBox">
                <div className="item-container">
                    <h2 id="head">Sign In</h2>
                    <input type="email" name="" id="EmailID" placeholder="Email or Mobile Number" />
                    <input type="password" name="" id="Pwd" placeholder="Password"/>
                    <button className="SignBtn1">Sign In</button>
                    <p id="p1">OR</p>
                    <button className="codeSign">Use a sign-in code</button>
                    <a id="a1" href="#">Forgot Password?</a>
                </div>
                <div className="dev2">
                    <div className="div3">
                        <input  id="checkbox" type="checkbox" value="" style={{height:"20px",width:"20px"}}/>
                        <p id="p2">Remember Me</p>
                    </div>
                    
                    <h4 id="new">New to Netflix?<a>Sign up Now</a></h4>
                    <p id="p3">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <a id="a4">Learn more</a>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default SignIn;

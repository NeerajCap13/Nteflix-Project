import { Link, useNavigate } from "react-router-dom";
import "./../Signout/SignOut.css";
import { useEffect } from "react";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 30000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logoutContainer">
      <header className="topBar">
        <img src="src/assets/Netflix_Logo_PMS.png" alt="" className="logopng" />
        <Link to={"/signin"}>
          <button className="logBtn">Sign In</button>
        </Link>
      </header>
      <section className="contentSection">
        <div className="BoxSection">
          <h2 className="headBox">Leaving So Soon?</h2>
          <p className="descriptionBox">
            Just so you know, you don't always need to sign out of Netflix. It's
            only necessary if you're on a shared or public computer.
          </p>
          <p className="descriptionBox">
            You'll be redirected to Netflix.com in 30 seconds.
          </p>
          <button className="goNow">Go Now</button>
        </div>
      </section>
      <footer className="FooterBox">
        <div className="footerItems">
          <p className="footerHead">Questions? Call 000-800-919-1743</p>
          <li className="footerList">
            <a className="anchorList" href="#">
              FAQ
            </a>
            <a className="anchorList" href="#">
              Help Center
            </a>
            <a className="anchorList" href="#">
              Terms of Use
            </a>
            <a className="anchorList" href="#">
              Privacy
            </a>
            <a className="anchorList" href="#">
              Cookie Preferences
            </a>
            <a className="anchorList" href="#">
              Corporate Information
            </a>
          </li>
          <select
            name="language"
            className="footerSelect"
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
      </footer>
    </div>
  );
}

export default SignOut;

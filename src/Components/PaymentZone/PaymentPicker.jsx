import React from "react";
import "./../PaymentZone/Payment.css";
import IconLogo  from '../../assets/ArrowForward.svg?react' ;
import { useNavigate } from "react-router-dom";

function PaymentPicker() {
  const navigate =useNavigate()

  const creditOption = () => {
    navigate('/creditOption')
  }
  const upiPay = () => {
    navigate('/UPI')
  }
  return (
    <>
    <div className="Payment">
      <div className="userNav">
        <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
        <button className="userSignOut">Sign Out</button>
      </div>

      <div className="payContainer">
        <div className="payContent">
          <div className="lockIcon">
            <img src="src/assets/Lock.png" className="iconLock" />
          </div>
          <div className="payStep">STEP 4 OF 4</div>
          <h1 className="payHeading">Choose how to pay</h1>
          <div className="subContext">
            Your payment is encrypted and you can change your payment method at
            anytime.
          </div>
          <div className="moreContext">Secure for peace of mind.</div>
          <div className="moreContext1">Cancel easily online.</div>

          <div className="beforeElement">
            <h4 style={{ fontWeight: "400" }}>End-to-end encrypted</h4>{" "}
            <span className="lockSvg">
              <svg
                id="secure-server-icon"
                viewBox="0 0 16 16"
                class="lockSvg"
              >
                <g fill="none">
                  <g fill="#FFB53F">
                    <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div className="payOption1" onClick={creditOption} >
            <div className="option1Container">
              <div className="optionHead">Credit or Debit Card</div>
              <div className="logoContainer">
                <img src="src/assets/VISA@2x.png" alt="" className="logoDiv" />
                <img
                  src="src/assets/MASTERCARD@2x.png"
                  alt=""
                  className="logoDiv"
                />
              </div>
            </div>
            <IconLogo className="payArrow"  />
          </div>
          <div className="payOption2" onClick={upiPay}>
            <div className="option2Container">
              <div className="optionHead">UPI AutoPay</div>
              <div className="logoContainer">
                <img src="src/assets/BHIM@2x.png" alt="" className="logoDiv" />
                <img
                  src="src/assets/PAYTM@2x.png"
                  alt=""
                  className="logoDiv"
                />
                <img
                  src="src/assets/PHONEPE@2x.png"
                  alt=""
                  className="logoDiv"
                />
                <img
                  src="src/assets/AMAZONPAY@2x.png"
                  alt=""
                  className="logoDiv"
                />
                <img
                  src="src/assets/GPAY@2x.png"
                  alt=""
                  className="logoDiv"
                />
              </div>
            </div>
            <IconLogo className="payArrow"  />
          </div>
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

export default PaymentPicker;

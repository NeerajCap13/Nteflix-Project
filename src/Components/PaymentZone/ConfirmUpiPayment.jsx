import React, { useContext } from 'react'
import "./Upiconfirmation.css"
import Context from '../Context/EmailProvider'

function ConfirmUpiPayment() {
  const {selectedPlan,value}  = useContext(Context)
  console.log(selectedPlan)
  return (
    <div className="containerUPI">
       <div className="userNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
          <button className="userSignOut">Sign Out</button>
        </div>
        <div className="UPI_Confirmation">
          <form className='confirmDetails'>
              <div className="confirmationBox">
                <span className='titleBox'>Confirm Your Details</span>
                <div className="subscriptionBox">
                  <div className="planBox">
                    <span className='spanTitle'>{selectedPlan.price}/month</span>
                    <span className='spanSubTitle'>{selectedPlan.name}</span>
                  </div>
                  <div className="changePlanButton">
                    <button className='changePlanBtn'>Change</button>
                  </div>
                </div>
                 <div className="UPI-IDBox">
                  <div className="planBox">
                    <span className='spanTitle'>UPI AutoPay</span>
                    <span className='spanSubTitle'>{value}</span>
                  </div>
                  <div className="changePlanButton">
                    <button className='changePlanBtn'>Edit</button>
                  </div>
                </div>
                <div className="paragraph">
                  By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently {`${selectedPlan.price}`}/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                </div>
                <div className="consentDiv">
                  <input type="checkbox" name="consentBox" className='checkBoxAgree' />
                  <span className='labelCheckBox'>I agree.</span>
                </div>
                <button className='confirmBtn'>Next</button>
              </div>
          </form>
        </div>
        <div className="regFooter">
          <div className="regItems">
            <p className="regHead">Questions? Call 000-800-919-1743</p>
            <li className="regList" id="payList">
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
  )
}

export default ConfirmUpiPayment

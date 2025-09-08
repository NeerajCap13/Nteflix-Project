import React, { useContext } from 'react'
import '../PaymentZone/Credit.css'
import Visa from './../../assets/VISA@2x.png'
import Master from './../../assets/MASTERCARD@2x.png'
import CreditCardIcon from "./../../assets/creditCard.svg?react"
import HelpIcon from "./../../assets/CVV.svg?react"
import { Link } from 'react-router-dom'
import Context from '../Context/EmailProvider'
import logo from '../../assets/Netflix_Logo_PMS.png'


function CreditOption() {
  const {selectedPlan} = useContext(Context)
  return (
    <>
    <div className="cardPay">
      <div className="userNav">
        <img src={logo} className="regLogo" />
        <button className="userSignOut">Sign Out</button>
      </div>
      <div className="credit-Container">
        <div className="centerContainer">
          <form className="cardPayContent">
              <span className='payStep'>STEP <b>4</b> OF <b>4</b> </span>
              <h1 className='payHead'>Set up your credit or debit card</h1>
              <span className='logos'>
                <img src={Visa} alt="visaLogo"  className='visa' />
                <img src={Master} alt="visaLogo"   className='master'/>
              </span>
              <input type="text" placeholder='Card number' className='numIn' />
              <CreditCardIcon className="svgIcon"  />
              <div className="twoInput">
                <input type="text" placeholder='Expiration Date' className='expIn' />
                <input type="text" placeholder='CVV' className='cvvIn' />
                <HelpIcon className="svgIcon2" />
              </div>
              <input type="text" placeholder='Name on card' className='txtIn' />
              <div className="planChosen">
                <div className="dataPlan">
                  <span className='planPrice'>{selectedPlan.price}/month</span>
                  <span className='planName'>{selectedPlan.name}</span>
                </div>
                <div className="changeBtn">
                 <Link to={'/newPlan'}>
                 <button className='changeButton'>Change</button>
                 </Link>

                </div>
              </div>
              <div className="additionalInfo">
                <p className='info1'>Any payment above ₹ 2000 will need additional authentication.</p>
                <p className='info'>By ticking the box below, you agree to our <a style={{color:"blue"}}>Terms of Use</a> and <a style={{color:"blue"}}>Privacy. Statement</a> and confirm that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently {`${selectedPlan.price}`}/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
                <div className="checkBox">
                  <input type="checkbox" name="check_pay" id="checkPay" />
                  <span className='consent'>I agree.</span>
                </div>
              </div>
              <button className='paySubmit'>Start Membership</button>

              <p className='lastLine'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a style={{color:"blue"}}>Learn more.</a></p>
          </form>
        </div>
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
    </>
  )
}

export default CreditOption

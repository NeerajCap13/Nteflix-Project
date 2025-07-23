import React from 'react'

import '../RegisteredUser/ChoosePlan.css'

function ChoosePlan() {
  return (
    <div className="userMain">

        <div className="userNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
          <button className="userSignOut">Sign Out</button>
        </div>

        <div className="plan-Container">
            <div className="planHeader">
                <p style={{color:"#333333",fontSize:"14px"}} className='headPara'>STEP 3 OF 4</p>
                <h1 className='userHeader'>
                    Choose the plan that’s right for you
                </h1>

               <div className="planCard">

                    <div className="mobilePlan">

                        <div className="planHeading">
                            <h3 className='heading1'>Mobile</h3>
                            <p className='subHeading'>480p</p>
                        </div>

                        <div className="planDetails">

                            <div className="specificDetails">
                                <p className='headTitle'>Monthly price</p>
                                <p className='rupees'>₹149</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Video and sound quality</p>
                                <p className='rupees'>Fair</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Resolution</p>
                                <p className='rupees'>480p</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Supported devices</p>
                                <p className='rupees'>Mobile phone, tablet</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Devices your household can watch at the same time</p>
                                <p className='rupees'>1</p>
                            </div>
                            <div className="specificDetail">
                                <p className='headTitle'>Download devices</p>
                                <p className='rupees'>1</p>
                            </div>
                            

                        </div>

                    </div>

                    <div className="basicPlan">
                        <div className="planHeading1">
                            <h3 className='heading1'>Basic</h3>
                            <p className='subHeading'>720p</p>
                        </div>

                        <div className="planDetails">

                            <div className="specificDetails">
                                <p className='headTitle'>Monthly price</p>
                                <p className='rupees'>₹199</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Video and sound quality</p>
                                <p className='rupees'>Good</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Resolution</p>
                                <p className='rupees'>720p(HD)</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Supported devices</p>
                                <p className='rupees'>TV, computer, mobile phone, tablet</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Devices your household can watch at the same time</p>
                                <p className='rupees'>1</p>
                            </div>
                            <div className="specificDetail">
                                <p className='headTitle'>Download devices</p>
                                <p className='rupees'>1</p>
                            </div>
                            

                        </div>
                    </div>

                     <div className="standardPlan">
                        <div className="planHeading2">
                            <h3 className='heading1'>Standard</h3>
                            <p className='subHeading'>1080p</p>
                        </div>

                        <div className="planDetails">

                            <div className="specificDetails">
                                <p className='headTitle'>Monthly price</p>
                                <p className='rupees'>₹499</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Video and sound quality</p>
                                <p className='rupees'>Great</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Resolution</p>
                                <p className='rupees'>1080p(Full HD)</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Supported devices</p>
                                <p className='rupees'>TV, computer, mobile phone, tablet</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Devices your household can watch at the same time</p>
                                <p className='rupees'>2</p>
                            </div>
                            <div className="specificDetail">
                                <p className='headTitle'>Download devices</p>
                                <p className='rupees'>2</p>
                            </div>
                            

                        </div>
                    </div>

                     <div className="premiumPlan">
                        <div className="planHeading3">
                            <h3 className='heading1'>Premium</h3>
                            <p className='subHeading'>4K + HDR</p>
                        </div>

                        <div className="planDetails">

                            <div className="specificDetails">
                                <p className='headTitle'>Monthly price</p>
                                <p className='rupees'>₹649</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Video and sound quality</p>
                                <p className='rupees'>Best</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Resolution</p>
                                <p className='rupees'>4K (Ultra HD) + HDR</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Spatial audio (immersive sound)</p>
                                <p className='rupees'>Included</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Supported devices</p>
                                <p className='rupees'>TV, computer, mobile phone, tablet</p>
                            </div>
                            <div className="specificDetails">
                                <p className='headTitle'>Devices your household can watch at the same time</p>
                                <p className='rupees'>4</p>
                            </div>
                            <div className="specificDetail">
                                <p className='headTitle'>Download devices</p>
                                <p className='rupees'>6</p>
                            </div>
                            

                        </div>
                    </div>

               </div>

               <div className="bottomContainer">
                <p className='P1'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a className='terms'>Terms of Use</a> for more details.</p>
                <p className='P1'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                <p className='P1'>Live events are included with any Netflix plan and contain ads.</p>
               </div>
                <div className="bottomBtn">
                    <button className='cardBtn'>Next</button>
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
  )
}

export default ChoosePlan
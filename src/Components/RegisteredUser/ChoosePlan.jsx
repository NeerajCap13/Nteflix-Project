import React, { useContext } from "react";
import "../RegisteredUser/ChoosePlan.css";
import CheckCircleIcon from "../../assets/check_circle.svg?react";
import { Link } from "react-router-dom";
import Context from "../Context/EmailProvider";
import logo from "../../assets/Netflix_Logo_PMS.png"

const PLAN_DETAILS = {
  Mobile: {
    price: "₹149",
    quality: "Fair",
    resolution: "480p",
    devices: "Mobile phone, tablet",
    household: "1",
    downloadDevices: "1",
  },
  Basic: {
    price: "₹199",
    quality: "Good",
    resolution: "720p",
    devices: "TV, computer, mobile phone, tablet",
    household: "1",
    downloadDevices: "1",
  },
  Standard: {
    price: "₹499",
    quality: "Great",
    resolution: "1080p",
    devices: "TV, computer, mobile phone, tablet",
    household: "2",
    downloadDevices: "2",
  },
  Premium: {
    price: "₹649",
    quality: "Best",
    resolution: "4K + HDR",
    audio: "Included",
    devices: "TV, computer, mobile phone, tablet",
    household: "4",
    downloadDevices: "6",
  },
};

const CARD_DETAILS = [
  { id: "Mobile", label: "Mobile", subLabel: "480p" },
  { id: "Basic", label: "Basic", subLabel: "720p" },
  { id: "Standard", label: "Standard", subLabel: "1080p(HD)" },
  { id: "Premium", label: "Premium", subLabel: "4K + HDR" },
];

function ChoosePlan() {
  const {selectedPlan, setSelectedPlan} = useContext(Context);
  // Helper to check if plan is selected
  const isSelected = (card) => selectedPlan.name  === card.id;

  return (
    <div className="userMain">
      <div className="userNav">
        <img src={logo} className="regLogo" />
        <button className="userSignOut">Sign Out</button>
      </div>

      <div className="plan-Container">
        <div className="planHeader">
          <p
            style={{ color: "#333333", fontSize: "14px" }}
            className="headPara"
          >
            STEP 3 OF 4
          </p>
          <h1 className="userHeader">Choose the plan that’s right for you</h1>

          <div className="planCard">
            {CARD_DETAILS.map((card, index) => {
              const planKey = card.id;
              const plan = PLAN_DETAILS[planKey];
              return (
                <div
                  key={index}
                  className={`${planKey}Plan ${
                    isSelected(card) ? "selected" : ""
                  }`}
                  onClick={() => setSelectedPlan({ name: planKey, price: PLAN_DETAILS[planKey].price })}
                >
                  <div className="planHeading">
                    <h3 className="heading1">{card.label}</h3>
                    <p className="subHeading">{card.subLabel}</p>

                    {isSelected(card) && (
                      <div className="checkCircle">
                        <CheckCircleIcon className="circle" />
                      </div>
                    )}
                  </div>
                  <div className="planDetails">
                    <div className="specificDetails">
                      <p className="headTitle">Monthly price</p>
                      <p className="subHeading1">{plan.price}</p>
                    </div>
                    <div className="specificDetails">
                      <p className="headTitle">Video and sound quality</p>
                      <p className="subHeading1">{plan.quality}</p>
                    </div>
                    <div className="specificDetails">
                      <p className="headTitle">Resolution</p>
                      <p className="subHeading1">{plan.resolution}</p>
                    </div>

                    {planKey === 'premium' && (
                      <div className="specificDetails">
                        <p className="headTitle">
                          Spatial audio (immersive sound)
                        </p>
                        <p className="subHeading1">{plan.audio}</p>
                      </div>
                    )}

                    <div className="specificDetails">
                      <p className="headTitle">Supported devices</p>
                      <p className="subHeading1">{plan.devices}</p>
                    </div>
                    <div className="specificDetails">
                      <p className="headTitle">
                        Devices your household can watch at the same time
                      </p>
                      <p className="subHeading1">{plan.household}</p>
                    </div>
                    <div className="specificDetail">
                      <p className="headTitle">Download devices</p>
                      <p className="subHeading1">{plan.downloadDevices}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="detailContainer">
            <p className="P1">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <a className="terms">Terms of Use</a> for more details.
            </p>
            <p className="P1">
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </p>
            <p className="P1">
              Live events are included with any Netflix plan and contain ads.
            </p>
          </div>
          <div className="bottomBtn">
            <Link to={"/paymentGate"} className="cardBtn">
              {" "}
              <button className="cardBtn">Next</button>
            </Link>
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
  );
}

export default ChoosePlan;

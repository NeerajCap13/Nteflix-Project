import React, { useContext} from "react";
import "./Mobile.css";
import CheckCircleIcon from "../../assets/check_circle.svg?react";
import { Link } from "react-router-dom";
import logo from "../../assets/Netflix_Logo_PMS.png"
import CARD_DETAILS from './CARD_DETAILS'
import PLAN_DETAILS from './PLAN_DETAILS'
import Context from "../Context/EmailProvider";

function ChoosePlanMobile() {
  const {selectedPlan, setSelectedPlan} = useContext(Context);
  const isSelected = (card) => selectedPlan.name === card.id;
  const content = PLAN_DETAILS[selectedPlan.name]
  return (
    <div className="mobileView">
      <div className="mHeader">
        <img src={logo} className="regLogo" />
        <button className="userSignOut" style={{ fontSize: "14px" }}>
          Sign Out
        </button>
      </div>

      <div className="mobileContainer">
        <div className="planHeader">
          <p
            style={{ color: "#333333", fontSize: "14px" }}
            className="headPara"
          >
            STEP 3 OF 4
          </p>
          <h1 className="userHeader">Choose the plan that’s right for you</h1>
        </div>

        <div className="mobileViewCards">
          {CARD_DETAILS.map((card, index) => {
            const planKey = card.id;
            console.log(planKey)
            return (
              <div
                key={index}
                className={`${planKey}Card ${
                    isSelected(card)? "selected" : "notSelected"
                }`}
                onClick={() => setSelectedPlan({name:planKey,price:PLAN_DETAILS[planKey].price})}
              >
                <div className="cardContent">
                  <h3
                    className="mHeading"
                    style={{ color: isSelected(card) ? "white" : "black" }}
                  >
                    {card.label}
                  </h3>
                  <p
                    className="subHeading2"
                    style={{ color: isSelected(card) ? "white" : "black" }}
                  >
                    {card.subLabel}
                  </p>
                </div>
                {isSelected(card) && (
                  <div className="circleSVG">
                    <CheckCircleIcon className="circle" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="contentDetail">
          <div className="div1">
            <p className="duration">Monthly price</p>
            <p className="rupee">{content.price}</p>
          </div>
          <div className="div1">
            <p className="duration">Video and sound quality</p>
            <p className="rupee">{content.quality}</p>
          </div>
          <div className="div1">
            <p className="duration">Resolution</p>
            <p className="rupee">{content.resolution}</p>
          </div>
          {content.audio  && (
                      <div className="div1">
                        <p className="duration">
                          Spatial audio (immersive sound)
                        </p>
                        <p className="rupee">{content.audio}</p>
                      </div>
                    )}
          <div className="div1">
            <p className="duration">Supported devices</p>
            <p className="rupee">{content.devices}</p>
          </div>
          <div className="div1">
            <p className="duration">
              Devices your household can watch at the same time
            </p>
            <p className="rupee">{content.household}</p>
          </div>
          <div className="div1">
            <p className="duration">Download devices</p>
            <p className="rupee">{content.downloadDevices}</p>
          </div>
        </div>

        <div className="fContainer">
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
        <div className="cardBottomBtn">
          <Link to={"/paymentGate"}>
          <button className="mCardBtn">Next</button>
          </Link>
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

export default ChoosePlanMobile;

import React, { useContext, useEffect, useRef, useState } from "react";
import "./UPI.css";
import BHIM from "./../../assets/BHIM@2x.png";
import PayTm from "./../../assets/PAYTM@2x.png";
import Phonepe from "./../../assets/PHONEPE@2x.png";
import AmazonPay from "./../../assets/AMAZONPAY@2x.png";
import GPay from "./../../assets/GPAY@2x.png";
import Other from "./../../assets/OTHER@2x.png";
import UPIModal from "./UPIModal";
import { Link } from "react-router-dom";
import Context from "../Context/EmailProvider";

const AppList = [
  { id: "1", logo: BHIM, label: "BHIM" },
  { id: "2", logo: PayTm, label: "Paytm" },
  { id: "3", logo: Phonepe, label: "PhonePe" },
  { id: "4", logo: AmazonPay, label: "Amazon Pay" },
  { id: "5", logo: GPay, label: "Google Pay" },
  { id: "6", logo: Other, label: "Other" },
];

function UPIpay() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const dropdownRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const {value,setValue} =useContext(Context)
  const [error ,setError] =useState(false)

const handleBlur = () => {
  if(value.trim() === ""){
    setError(true)
  }
  else {
    setError(false)
  }
}

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const buttonHandler = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setDisabled(true);
    }
  };
  const onListClick = (app) => {
    setSelectedOption(app);
    setIsOpen(false);
    setDisabled(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
      document.addEventListener("mousedown", handleClickOutside);
        return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="upiContainer">
        <div className="userNav">
          <img src="src/assets/Netflix_Logo_PMS.png" className="regLogo" />
          <button className="userSignOut">Sign Out</button>
        </div>
        <div className="UPI_container">
          <form className="UPIcontent" ref={dropdownRef}>
            <span className="upiStep">
              STEP <b>4</b> OF <b>4</b>{" "}
            </span>
            <h1 className="upiHead">Set up UPI AutoPay</h1>
            <p className="upiSub">
              You can change this recurring payment any time in your settings.
            </p>
            <div className="customWrapper">
              <button

                className={`customDropdown ${isOpen ? "after" : "before"}`}
                onClick={buttonHandler}
              >
                {selectedOption ? (
                  <div className="selectedOption">
                    <img
                      src={selectedOption.logo}
                      style={{ height: "25px", width: "39px" }}
                    />
                    {selectedOption.label}
                  </div>
                ) : (
                  "Select your UPI app"
                )}
              </button>
            </div>

            {isOpen && (
              <ul className={`ulContainer ${isOpen ? "ulContainerOpen" : ""}`}>
                {AppList.map((app) => {
                  const isSelected = selectedOption?.id === app.id;
                  return (
                    <li
                      key={app.id}
                      className={`dropData ${isSelected ? "active" : ""}`}
                      onClick={() => onListClick(app)}
                    >
                      <img
                        src={app.logo}
                        style={{ height: "25px", width: "39px" }}
                      />
                      <span style={{ color: "black", fontSize: "16px" }}>
                        {app.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            {isOpen ? (
              ""
            ) : (
              <>
              <div className="input-group" >
                <input
                  type="text"
                  className={`upiID ${error ? "errorInput" : ""}`}
                  disabled={disabled}
                  required
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={handleBlur}
                />
                <label className="inputLabel">UPI ID</label>
                {
                  error ? <span className="errorMsg">Please enter a valid UPI ID</span> : ""
                }
              </div>

                <p className="linkTag" onClick={openModal}>
                  How do i find my UPI ID?
                </p>
                <UPIModal isOpen={modalOpen} onClose={closeModal}/>
                <br />
                <Link to={"/upiOrderConfirm"}>
                <button className="upiBtn">Next</button>
                </Link>

              </>
            )}
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
    </>
  );
}

export default UPIpay;

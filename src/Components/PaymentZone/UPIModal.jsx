import React from "react";
import "./modal.css";
import CloseIcon from "../../assets/closeIcon.svg?react";

const myIcon1 = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    aria-hidden="true"
  >
    <rect width="50" height="50" fill="white"></rect>
    <rect
      x="13"
      y="3"
      width="24"
      height="44"
      rx="2.604"
      stroke="#E50913"
      strokeWidth="1.5"
    ></rect>
    <rect
      x="19.5623"
      y="5.25"
      width="10.937"
      height="2.25"
      rx="1.125"
      fill="#E50913"
    ></rect>
    <rect x="15" y="11" width="20" height="33" rx="1" fill="#E50913"></rect>
    <path
      d="M19.7029 26.2244V30.9883"
      stroke="white"
      strokeLinecap="square"
    ></path>
    <path
      d="M23.3589 26.2244V30.9883"
      stroke="white"
      strokeLinecap="square"
    ></path>
    <path
      d="M27.0151 26.2244V30.9883"
      stroke="white"
      strokeLinecap="square"
    ></path>
    <path
      d="M30.6711 26.2244V30.9883"
      stroke="white"
      strokeLinecap="square"
    ></path>
    <path
      d="M19.7029 33.3701H30.6711"
      stroke="white"
      strokeLinecap="square"
    ></path>
    <path
      d="M20.5448 23.938L25.187 20.3087L29.8291 23.938H20.5448Z"
      stroke="white"
    ></path>
  </svg>
);
const myIcon2 = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    aria-hidden="true"
  >
    <rect width="50" height="50" fill="white"></rect>
    <rect
      x="13"
      y="3"
      width="24"
      height="44"
      rx="2.604"
      stroke="#E50913"
      strokeWidth="1.5"
    ></rect>
    <rect x="20" y="5" width="10" height="2" rx="1" fillRule="#E50913"></rect>
    <rect
      x="15.9924"
      y="32"
      width="16.9567"
      height="2"
      rx="1"
      fillRule="#E50913"
    ></rect>
    <rect
      x="20.9797"
      y="36"
      width="11.9694"
      height="2"
      rx="1"
      fill="#E50913"
    ></rect>
    <rect
      x="18.9846"
      y="40"
      width="13.9643"
      height="2"
      rx="1"
      fill="#E50913"
    ></rect>
    <path
      d="M25.0003 20.8065C26.604 20.8065 27.9041 19.5067 27.9041 17.9032C27.9041 16.2998 26.604 15 25.0003 15C23.3965 15 22.0964 16.2998 22.0964 17.9032C22.0964 19.5067 23.3965 20.8065 25.0003 20.8065Z"
      fill="#E50913"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 24.8405C28.7262 26.1736 26.9565 26.9998 25 26.9998C23.0435 26.9998 21.2738 26.1736 20 24.8404C20.5576 22.5234 22.5847 20.8064 25 20.8064C27.4153 20.8064 29.4424 22.5235 30 24.8405Z"
      fill="#E50913"
    ></path>
    <circle cx="25" cy="20" r="8.5" stroke="#E50913"></circle>
  </svg>
);
const myIcon3 = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    aria-hidden="true"
  >
    <rect width="50" height="50" fill="white"></rect>
    <rect
      x="13"
      y="3"
      width="24"
      height="44"
      rx="2.604"
      stroke="#E50913"
      strokeWidth="1.5"
    ></rect>
    <rect
      x="20"
      y="5"
      width="10"
      height="2"
      rx="1"
      fill="#E50913"
      fillOpacity="0.4"
    ></rect>
    <rect
      x="16"
      y="25"
      width="18"
      height="2"
      rx="1"
      fill="#E50913"
      fillOpacity="0.4"
    ></rect>
    <rect
      x="16"
      y="29"
      width="18"
      height="2"
      rx="1"
      fill="#E50913"
      fillOpacity="0.4"
    ></rect>
    <rect
      x="16"
      y="39"
      width="18"
      height="2"
      rx="1"
      fill="#E50913"
      fillOpacity="0.4"
    ></rect>
    <rect x="16" y="33" width="18" height="4" rx="1.25" fill="#E50913"></rect>
    <path
      d="M25.0609 17.499C26.1946 17.499 27.1136 16.6096 27.1136 15.5126C27.1136 14.4155 26.1946 13.5261 25.0609 13.5261C23.9273 13.5261 23.0083 14.4155 23.0083 15.5126C23.0083 16.6096 23.9273 17.499 25.0609 17.499Z"
      fill="#E50913"
      fillOpacity="0.4"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.5951 20.2592C27.6946 21.1714 26.4437 21.7367 25.0608 21.7367C23.6778 21.7367 22.4268 21.1713 21.5264 20.2591C21.9206 18.6738 23.3534 17.499 25.0607 17.499C26.768 17.499 28.2009 18.6739 28.5951 20.2592Z"
      fill="#E50913"
      fillOpacity="0.4"
    ></path>
    <circle
      cx="25"
      cy="17"
      r="5.5"
      stroke="#E50913"
      strokeOpacity="0.4"
    ></circle>
  </svg>
);
const myIcon4 = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    aria-hidden="true"
  >
    <rect width="50" height="50" fill="white"></rect>
    <rect
      x="13"
      y="3"
      width="24"
      height="44"
      rx="2.604"
      stroke="#E50913"
      strokeWidth="1.5"
    ></rect>
    <rect x="20" y="5.13306" width="10" height="2" rx="1" fill="#E50913"></rect>
    <g clipPath="url(#clip0_733_8442)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6716 16.7503V18.2115V23.6929V36.291C20.3377 36.0942 21.171 36.0177 22.8658 35.9418V31.989V26.7069L26.2587 35.9418C28.3908 35.9936 30.6716 36.291 30.6716 36.291L30.6715 36.2905L30.6716 35.6536V15.291H26.4775V19.5929V24.8751L22.9563 15.291H18.6718H18.6716L18.6718 15.2915L18.6716 15.9282V16.7503Z"
        fill="#E50914"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_733_8442">
        <rect
          width="14.0149"
          height="23.7112"
          fill="white"
          transform="translate(18.6716 15.291)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);

const FINDUPI = [
  {
    id: "1",
    icons: myIcon1,
    label: "Go to the app linked to your UPI ID.",
  },
  { id: "2", icons: myIcon2, label: "Tap your profile or settings menu." },
  { id: "3", icons: myIcon3, label: "Find your ID under “UPI ID”." },
  {
    id: "4",
    icons: myIcon4,
    label:
      "Copy your UPI ID and paste it on Netflix to finish the payment set up.",
  },
];

function UPIModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <CloseIcon className="iconClose" onClick={onClose} />
        <div className="topLable">
          <label className="label1">Find your UPI ID</label>
        </div>
        <div className="ulModal">
          {FINDUPI.map((item) => (
            <li className="itemList" key={item.id}>
              <span className="itemIcon">{item.icons}</span>
              <span className="itemLabel">{item.label}</span>
            </li>
          ))}
        </div>
        <button className="closeModalBtn" onClick={onclose}>
          Close
        </button>
      </div>
    </div>
  );
}
export default UPIModal;

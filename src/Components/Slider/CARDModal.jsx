import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/closeIcon.svg?react';
import "./CardModal.css";

function CARDModal({ isOpen, onClose, cardData }) {
  const navigate = useNavigate()
  if (!isOpen) return null;
  const { cardImage, cardTitle, cardDiscription, cardContent } = cardData;
  const { year, certificate, type, genre } = cardDiscription;
  return (
    <div className="CardModal" onClick={onClose}>
      <div className="CardModalContent" onClick={(e) => e.stopPropagation()}>
        <CloseIcon className="cardSvg" onClick={onClose} />
        <div className="topcontent">
          <img src={cardImage} className="imageBackground" />
          <img src={cardTitle} className="titleImg" />
        </div>
        <div className="cardModalOverlay" />
        <div className="dataTab">
          <div className="Card-discription">
            <span className="smallTabs">{year}</span>
            <span className="smallTabs">{certificate}</span>
            <span className="smallTabs">{type}</span>
            {genre.map((g, i) => (
              <span className="smallTabs" key={i}>
                {g}
              </span>
            ))}
          </div>
          <span className="Summary">{cardContent}</span>
          <button className="cardButton" onClick={()=>navigate('/nextPage')}>Get Started {" > "}</button>
        </div>
      </div>
    </div>
  );
}
export default CARDModal;

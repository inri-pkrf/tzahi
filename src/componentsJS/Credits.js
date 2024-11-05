import React from 'react';
import '../componentsCss/Credits.css';
import { useNavigate } from 'react-router-dom'; 

const Credits = () => {
    const navigate = useNavigate();

    const closeCredits = () => {
        navigate(-1); 
      };
  return (
    <div className="credits-container">
    <img
    src={`${process.env.PUBLIC_URL}/assets/media/closeGrey.png`}
    alt="Close"
    className="closeAll"
    onClick={closeCredits}
    />
    <div className="text-container">
      <h1 className="credits-title">קרדיטים</h1>
      <p className="credits-text">
        תודה לכל מי שתרם להפקת הממשק הזה:
      </p>
      <ul className="credits-list">
        <li> מפתחת ראשית: אביטל גמבורג מפ"ל</li>
        <li>צוות פל"א: עלמה יובל,אביטל גמבורג</li>
        <li>יועצים: תמר בוסתן</li>
      </ul>
    </div>
    </div>
  );
};

export default Credits;

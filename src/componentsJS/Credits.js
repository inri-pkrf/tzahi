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
    src={`${process.env.PUBLIC_URL}/assets/media/closeBlack.png`}
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
      <li>
        <span style={{ textDecoration: "underline" }}>מפתחת ראשית</span>: אביטל גמבורג
      </li>
      <li>
        <span style={{ textDecoration: "underline" }}>צוות פל"א</span>: אביטל גמבורג,עלמה יובל
      </li>
      <li>
        <span style={{ textDecoration: "underline" }}>יועצים:</span> תמר בוסתן,אופיר גבסו
      </li> 
      <li>
        <span style={{ textDecoration: "underline" }}>עריכת וידיאו:</span> ליעוז רוזנר
      </li>     </ul>
    </div>
    </div>
  );
};

export default Credits;

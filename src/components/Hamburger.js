import React from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate
import './Hamburger.css';

function Hamburger() {
  const navigate = useNavigate(); // יצירת אובייקט ניווט

  // פונקציה שמבצעת ניווט לנתיב המבוקש
  const handleItemClick = (path) => {
    navigate(path); // ניווט לכתובת המתאימה
  };

  // פונקציה לסגירה וניווט אחורה
  const handleClose = () => {
    navigate(-1); // חזור לעמוד הקודם בהיסטוריה
  };

  return (
    <div className="menu">
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}
        alt="Decorative"
        className="whiteLogoHam"
      />
      <h1 className="menu-title">עזר סד"פ לצח"י</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/closeBtn.png`}
        alt="Close"
        className="closeBtn"
        onClick={handleClose} // הוסף את onClick שמבצע חזרה אחורה
      />
      <ul className="menu-list">
        <li onClick={() => handleItemClick('/tzahi')}>עמוד הבית</li>
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('/tzahi/EmergencyRolls')}>בחירת סד"פ</li>
        <div className='lineMenu'></div>
        <li onClick={() => handleItemClick('/tzahi/EmergencyRolls')}>שיעור דיגיטלי לצח"י</li>
        <div className='lineMenu'></div>
      </ul>
      <div className='mashov-menu'>
        <div className='mashovTextMenu'>
          <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
          <br /> <a id='linkMenu' href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            בקישור הבא
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;

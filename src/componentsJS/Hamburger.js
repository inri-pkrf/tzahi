import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/Hamburger.css';

function Hamburger() {
  const navigate = useNavigate(); 
  const location = useLocation();

  // פונקציה לסגירת התפריט
  const handleClose = () => {
    navigate(-1); // חוזר לעמוד הקודם
  };

  // שימוש ב-useEffect לבדוק את מיקום הניווט
  useEffect(() => {
    const menuElement = document.querySelector('.menu'); // שמור על האלמנט
    if (location.pathname === '/tzahi/hamburger') {
      if (menuElement) { // בדוק אם האלמנט קיים
        menuElement.classList.add('open'); // הוסף את הקלאס 'open' כדי לפתוח את התפריט
      }
    }

    // ניקוי הקלאס 'open' כאשר יוצאים מהעמוד
    return () => {
      if (menuElement) { // בדוק שוב אם האלמנט קיים
        menuElement.classList.remove('open');
      }
    };
  }, [location]);

  // פונקציה לניווט לפריטים בתפריט

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
        onClick={()=>  navigate(-1)} // הוסף את onClick לסגירת התפריט
      />
      <ul className="menu-list">
        <li onClick={() => navigate('/tzahi/home')}>עמוד הבית</li>
        <div className='lineMenu'></div>
        <li onClick={() => navigate('/tzahi/EmergencyRolls')}>בחירת סד"פ</li>
        <div className='lineMenu'></div>
        <li onClick={() => navigate('/tzahi/digitalLesson')}>שיעור דיגיטלי לצח"י</li>
        <div className='lineMenu'></div>
      </ul>
      <div className='mashov-menu'>
        <div className='mashovTextMenu'>
          <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
          <br /> 
          <a 
            id='linkMenu' 
            href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            בקישור הבא
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;

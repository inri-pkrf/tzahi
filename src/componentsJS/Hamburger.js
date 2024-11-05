import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/Hamburger.css';

function Hamburger() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Effect to control the menu open state based on the current path
  useEffect(() => {
    if (location.pathname === '/tzahi/hamburger') {
      setIsOpen(true); 
    } else {
      setIsOpen(false); 
    }
  }, [location]);

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1); 
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
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
        onClick={handleClose}
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
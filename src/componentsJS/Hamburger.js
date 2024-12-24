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

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const handleClose = () => {
    setIsOpen(false); // Close the menu immediately
  };

  return (
    <div>
      {/* התמונה משתנה לפי מצב ההמבורגר */}
      {!isOpen ? (
        <img
          className="tzahi-white"
          src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}
          alt="Open Menu"
          style={{ cursor: 'pointer' }}
          onClick={handleToggle}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/media/closeBtn.png`}
          alt="Close"
          className="closeBtn"
          onClick={handleClose}
        />
      )}

      {/* תפריט ההמבורגר */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <>
            <img
              src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}
              alt="Decorative"
              className="whiteLogoHam"
            />
            <h1 className="menu-title">עזר סד"פ לצח"י</h1>
            <ul className="menu-list">
              <li onClick={() => navigate('/tzahi/home')}>עמוד הבית</li>
              <div className='lineMenu'></div>
              <li onClick={() => navigate('/tzahi/EmergencyRolls')}>בחירת סד"פ</li>
              <div className='lineMenu'></div>
              <li onClick={() => window.open('https://sites.google.com/view/inri-tzahi/home', '_blank')}>
                שיעור דיגיטלי לצח"י
              </li>
              <div className='lineMenu'></div>
            </ul>
            <div className='mashov-menu'>
              <div className='mashovTextMenu'>
                <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                <br />
                <a
                  id='linkMenu'
                  href="https://docs.google.com/forms/d/e/1FAIpQLScrH0xIU_TVN4wRSC5Cq8LkvU8dzyWMbqCc4Uduv3ygyYEWMw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  בקישור הבא
                </a>
                <a className="linkCreditsWhite" onClick={() => navigate('/tzahi/Credits')}>
                  @קרדיטים
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hamburger;

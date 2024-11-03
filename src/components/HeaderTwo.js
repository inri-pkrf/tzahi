import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderTwo.css';

function HeaderTwo() {
  const navigate = useNavigate();

  // פונקציה שמבצעת ניווט לעמוד ההמבורגר
  const handleLogoClick = () => {
    console.log('Logo clicked!');
    navigate('/tzahi/hamburger'); // עדכן את הנתיב לנתיב המתאים לעמוד ההמבורגר
  };

  return (
    <header className="header">
      <img
        className="tzahi-white"
        src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}
        onClick={handleLogoClick} // קרא לפונקציית הניווט בלחיצה
        style={{ cursor: 'pointer' }}
      />
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/collegeLogo.png`}
        className="App-logo"
        alt="logo"
      />
      
      <button
        className="back-homeNav"
        onClick={() => navigate('/tzahi/home')} // ניווט לעמוד הבית
      >
      </button>

      <img
        src={`${process.env.PUBLIC_URL}/assets/media/orange.png`}
        alt="Decorative"
        className="decorative-photo"
      />
    </header>
  );
}

export default HeaderTwo;

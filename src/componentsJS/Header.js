import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/tzahi/hamburger'); 
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

export default Header;

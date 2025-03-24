import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Header.css';
import Hamburger from '../componentsJS/Hamburger'; 
import NavBar from '../componentsJS/NavBar'; 

function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      {/* תפריט ניווט – המבורגר למובייל, ניווט רגיל לדסקטופ */}
      {isMobile ? <Hamburger /> : <NavBar />}

      {/* לוגו ראשי */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/collegeLogo.png`}
        className="App-logo"
        alt="logo"
      />

      {/* לחצן חזרה לעמוד הבית */}
      <button
        className="back-homeNav"
        onClick={() => navigate('/tzahi/home')} 
      ></button>

      {/* לוגו נוסף שמופיע רק בדסקטופ */}
      {!isMobile && (
        <img
          className="tzahi-white-nav"
          src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}
          alt="Decorative Logo"
        />
      )}

      {/* תמונה דקורטיבית */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/orange.png`}
        alt="Decorative"
        className="decorative-photo"
      />
    </header>
  );
}

export default Header;

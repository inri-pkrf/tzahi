import React, { useEffect, useState } from 'react'; // ייבוא נכון
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate
import './HeaderOne.css'; 

function Header() {
  const navigate = useNavigate(); // הגדרת הניווט

  return (
    <header className="header">
        <img
        src={`${process.env.PUBLIC_URL}/assets/media/tzahiLogo.svg`}
        className="tzahi-logo"
        />
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/collegeLogo.png`}
        className="App-logo-one "
        alt="logo"
        onClick={() => navigate('/tzahi/home')} // ניווט לעמוד הבית
      />
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/orange.png`}
        alt="Decorative"
        className="decorative-photo"
      />
    </header>
  );
}

export default Header;

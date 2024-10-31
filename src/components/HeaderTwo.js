import React, { useEffect, useState } from 'react'; // ייבוא נכון
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate
import './HeaderTwo.css'; 

function Header() {
  const navigate = useNavigate(); // הגדרת הניווט

  return (
    <header className="header">
      <img   className='tzahi-white'  src={`${process.env.PUBLIC_URL}/assets/media/whileLogo.svg`}  />
     
     
     
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/collegeLogo.png`}
        className="App-logo"
        alt="logo"
      
        
      />
      <button className="back-homeNav"   onClick={() => {
          console.log("Navigating to /tzahi/home");
          navigate('/tzahi/home');
        }}></button>

    
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/media/orange.png`}
        alt="Decorative"
        className="decorative-photo"
      />
    </header>
  );
}

export default Header;

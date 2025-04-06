import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCss/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // פונקציה שבודקת אם ה-URL הנוכחי תואם לקישור מסוים
  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <ul className="nav-links">
    <li className={isActive('/tzahi/home')} onClick={() => navigate('/tzahi/home')}>
      עמוד הבית
    </li>
    <span className="divider">|</span>
    <li className={isActive('/tzahi/EmergencyRolls')} onClick={() => navigate('/tzahi/EmergencyRolls')}>
      בחירת סד"פ לחירום
    </li>
    <span className="divider">|</span>
    <li className={isActive('/tzahi/PdfFiles')} onClick={() => navigate('/tzahi/PdfFiles')}>
      הורדת עזרים מודפסים
    </li>
    <span className="divider">|</span>
    <li onClick={() => window.open('https://sites.google.com/view/inri-tzahi/home', '_blank')}>
      שיעור דיגיטלי לצח"י
    </li>
  </ul>
  );
}

export default NavBar;

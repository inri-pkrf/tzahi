import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../componentsCss/PdfFiles.css';

const PdfFiles = () => {
  const navigate = useNavigate();

  const goToCredits = () => {
    console.log("Navigating to Credits");
    navigate('/tzahi/Credits'); 
  };

  return (
    <div className="homepage-container">
      <h1 className="pdf-title">עזרים מודפסים</h1>

      <div className="pdf-list">
        {/* קובץ PDF להורדה */}
        <div className="pdf-item">
          <a 
            href={`${process.env.PUBLIC_URL}/assets/docs/assigments.pdf`} 
            download="assigments.pdf" 
            className="pdf-link"
          >
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" 
            alt="PDF Icon" 
            className="pdf-icon"
            />

            <span className="pdf-text">assigments PDF</span>
          </a>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default PdfFiles;

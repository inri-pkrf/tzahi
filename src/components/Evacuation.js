import React, { useState } from 'react';
import './Evacuation.css';

const Evacuation = ({ selectedScenario }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  // פונקציה לטיפול בלחיצה על כותרת הקטגוריה
  const handleToggle = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div id="evacuation-page">
      <p className='page-title'>בחרת בסד"פ הבא:</p>
      <h1 className="evacuation-title">{selectedScenario.situation}</h1>
      <img
        className='icon-evacuation'
        src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
        alt={`${selectedScenario.situation} icon`} 
      />
      
      {/* בדיקה אם infos קיים והוא אובייקט */}
      {typeof selectedScenario.infos === 'object' && Object.keys(selectedScenario.infos).length > 0 ? (
        <div className="tooltips-container">
          {Object.entries(selectedScenario.infos).map(([category, items], index) => (
            <div key={index} className="tooltip">
              <h3 
                className="tooltip-title" 
                onClick={() => handleToggle(category)}
                style={{ cursor: 'pointer' }}
              >
                {category}
                <span className={`chevron ${expandedCategory === category ? 'expanded' : ''}`}>&#x25B6;</span>
              </h3>
              {expandedCategory === category && (
                <div className="tooltip-content">
                  <ul>
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>אין מידע נוסף להצגה.</p> // הודעה אם אין טול טיפים
      )}
    </div>
  );
};

export default Evacuation;

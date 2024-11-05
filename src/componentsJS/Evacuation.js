import React, { useState } from 'react';
import '../componentsCss/Evacuation.css';

const Evacuation = ({ selectedScenario }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [checkedItems, setCheckedItems] = useState({}); // מצב לצ'ק בוקסים

  const handleBackClick = () => {
    const event = new CustomEvent("emergencyback");
    window.dispatchEvent(event);
  };

  // פונקציה לטיפול בלחיצה על כותרת הקטגוריה
  const handleToggle = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleCheckboxChange = (category, item) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [category]: {
        ...prevCheckedItems[category],
        [item]: !prevCheckedItems[category]?.[item] // הפוך את מצב הצ'ק בוקס
      }
    }));
  };

  // פונקציה לבדוק אם כל הפריטים בקטגוריה נבחרו
  const areAllItemsChecked = (category) => {
    return selectedScenario.infos[category].every(item => checkedItems[category]?.[item]);
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
                className={`tooltip-title ${areAllItemsChecked(category) ? 'title-checked' : ''}`} 
                onClick={() => handleToggle(category)}
                style={{ cursor: 'pointer' }}
              >
                {category}
                <img  
                  src={`${process.env.PUBLIC_URL}/assets/media/nextGrey.png`}
                  className={`chevron ${expandedCategory === category ? 'expanded' : ''}`}
                />
              </h3>
              {expandedCategory === category && (
                <div className="tooltip-content">
                  <ul className="tasks-list">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="checkbox-item">
                        <input 
                          type="checkbox" 
                          className="mine-checkbox" 
                          checked={checkedItems[category]?.[item] || false} 
                          onChange={() => handleCheckboxChange(category, item)} 
                        />
                        <span className="checkbox-text">{item}</span>
                      </li>
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
      <a className='back-emergency' onClick={handleBackClick}>
        חזרה לבחירת מצב חירום
      </a>
      <div className='buffer'></div>
    </div>
  );
};

export default Evacuation;
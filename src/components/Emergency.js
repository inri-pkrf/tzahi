import React from 'react';
import data from '../data/data';
import "./Emergency.css"

const Emergency = ({ onScenarioSelect }) => {
  return (
    <div id="emergency-container">
      <p className="instruction">יש ללחוץ על הכפתורים על מנת לבחור מצב חירום</p>
      <div className="buttons-sec">
      {data.map((scenario) => (
        <button
          className='button'
          key={scenario.id}
          onClick={() => onScenarioSelect(scenario)}
          style={{ backgroundColor: scenario.color }} // שימוש בצבע מה-data
         
        >
          {scenario.situation}
          <img className='button-icon'  src={`${process.env.PUBLIC_URL}/assets/icons/icon${scenario.id}.svg`}  />
        </button>
      ))}
      </div>
    </div>
  );
};

export default Emergency;

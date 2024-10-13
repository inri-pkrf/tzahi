import React from 'react';
import data from '../data/data';
import "./Emergency.css"

const Emergency = ({ onScenarioSelect }) => {
  return (
    <div id="emergency-container">
      {data.map((scenario) => (
        <button
          className='button'
          key={scenario.id}
          onClick={() => onScenarioSelect(scenario)}
          style={{ backgroundColor: scenario.color }} // שימוש בצבע מה-data
        >
          {scenario.situation}
        </button>
      ))}
    </div>
  );
};

export default Emergency;

import React from 'react';
import '../componentsCss/Roles.css';

const Roles = ({ selectedScenario, onRoleSelect, onEvacuationClick }) => {
  return (
    <div id="roles-container">
      {/* Render the selected scenario information */}
      {selectedScenario.situation !== "פינוי ישוב" && (
        <div className="scen-selected">
          <img
            className='selected-icon'
            src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
            alt={`${selectedScenario.situation} icon`} 
          />
          <p className='selected-name'>{selectedScenario.situation}</p>
        </div>
      )}

      {/* Check if the selected scenario is "פינוי ישוב" */}
      {selectedScenario.situation === "פינוי ישוב" ? (
        <div id="evacuation">
          <img
            className='scenrio-icon'
            src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
            alt={`${selectedScenario.situation} icon`} 
          />
          <p className='scenrio-name'>{selectedScenario.situation}</p>
          <p className='evacuation-dis'>
            במצב זה אין בעלי תפקידים עם משימות מוסדרות מפני שמפנים את הישוב.
            לחצו על הכפתור למעבר.
          </p>
          <button className='next-btnev' onClick={onEvacuationClick}>
            מעבר למצב פינוי ישוב
          </button>
        </div>
      ) : (
        <div id="buttons-container">
          {/* Render role buttons for other scenarios */}
          {selectedScenario.roles.map((role, index) => (
            <button
              className='role-button'
              key={index}
              style={{ backgroundColor: role.color }}
              onClick={() => onRoleSelect(role)} // Call function on role button click
            >
              {role.role} {/* Role name */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Roles;

import React from 'react';
import "./Roles.css";

const Roles = ({ selectedScenario, onRoleSelect }) => {
  return (
    <div id="roles-container">
      <div id="selected-scenerio">
        <img
          className='selected-icon'
          src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
          alt={`${selectedScenario.situation} icon`} 
        />
        <p className='selected-name'>{selectedScenario.situation}</p>
      </div>
      <div id="buttons-container">
        {selectedScenario.roles.map((role, index) => (
          <button
            className='role-button'
            key={index}
            style={{ backgroundColor: role.color }}
            onClick={() => onRoleSelect(role)} // קריאה לפונקציה בעת לחיצה על תפקיד
          >
            {role.role} {/* שם התפקיד */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Roles;

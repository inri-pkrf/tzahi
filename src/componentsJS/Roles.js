import React from 'react';
import '../componentsCss/Roles.css';

const Roles = ({ selectedScenario, onRoleSelect }) => {
  return (
    <div id="roles-container">
      {/* Render the selected scenario information */}
      <div className="scen-selected">
        <img
          className='selected-icon'
          src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
          alt={`${selectedScenario.situation} icon`} 
        />
        <p className='selected-name'>{selectedScenario.situation}</p>
      </div>

      <div id="buttons-container">
        {/* Render only the first seven role buttons */}
        {selectedScenario.roles.slice(0, 7).map((role, index) => (
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
    </div>
  );
};

export default Roles;

import React from 'react';
import "./Roles.css"
const Roles = ({ selectedScenario }) => {
  return (
    <div id="roles-container">
      <div id="selected-scenerio" >
      <img className='selected-icon'  src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}  />
      <p className='selected-name'>{selectedScenario.situation}</p>

      </div>
      <div id="buttons-container">
        
      {selectedScenario.roles.map((role, index) => (
        <button
          className='role-button'
          key={index}
          style={{ backgroundColor: role.color }} // צבע הרקע מהתפקיד
        >
          {role.role} {/* שם התפקיד */}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Roles;

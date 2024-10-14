import React from 'react';
import "./Combined.css"



const Combined = ({ selectedScenario, selectedRole }) => {
    return (
      <div id="combined-container"> 
      <p className='page-title'>בחרת בסד"פ הבא:</p>
      <h1 className="combined-title" style={{ backgroundColor: selectedRole.color }} >
        {`משימות ${selectedRole.role} במצב של ${selectedScenario.situation}`}
      </h1>
      <h1 className='background-situation'>רקע למצב:</h1>
      <p className='situation-discription'>{selectedScenario.description}</p>
    
       
      </div>
    );
  };
  
export default Combined;

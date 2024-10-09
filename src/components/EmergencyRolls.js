import React from 'react';
import './EmergencyRolls.css';

const EmergencyRolls = () => {
  return (
    <div className='page-container'>
      <h1 className='title'>יש לבחור מצב חירום ותפקיד בצח"י בכדי לצפות בסד"פ המתאים.</h1>
      <div className='states'>
        <div className='state1'>
        <img className='Fireicon'
            src={`${process.env.PUBLIC_URL}/assets/media/fire.svg`}
        />

        </div>
        <hr class="dotted hr1"/>

        <div className='state2'>
         <img className='tzahiicon'
              src={`${process.env.PUBLIC_URL}/assets/media/tzahiGrey.svg`}
             />
        </div>
        <hr class="dotted hr2"/>

        <div className='state3'>
        <img className='tasksicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tasksGrey.svg`}
             />
        </div>
        
      </div>
    </div>
  );
};

export default EmergencyRolls;

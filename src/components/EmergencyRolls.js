import React, { useState } from 'react';
import './EmergencyRolls.css';
import Emergency from './Emergency'; // קומפוננטה של בחירת מצבי חירום
import Roles from './Roles'; // קומפוננטה של הצגת תפקידים לאחר בחירת מצב חירום

const EmergencyRolls = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  return (
    <div className='page-container'>
      <h1 className='title'>יש לבחור מצב חירום ותפקיד בצח"י בכדי לצפות בסד"פ המתאים.</h1>
      <div className='states'>
        <div className='state1'>
          <p className="stageNumber numberOne">שלב 1</p>
          <img
            className='Fireicon'
            src={`${process.env.PUBLIC_URL}/assets/media/fire.svg`}
            alt="Fire icon"
          />
          <p className="stateTitle titleOne">בחירת <br /> מצב חירום</p>
        </div>
        <hr className="dotted hr1" />

        <div className='state2'>
          <p className="stageNumber numberTwo">שלב 2</p>
          <img
            className='tzahiicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tzahiGrey.svg`}
            alt="Tzahi icon"
          />
          <p className="stateTitle titleTwo">בחירת <br /> תפקיד</p>
        </div>
        <hr className="dotted hr2" />

        <div className='state3'>
          <p className="stageNumber numberThree">שלב 3</p>
          <img
            className='tasksicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tasksGrey.svg`}
            alt="Tasks icon"
          />
          <p className="stateTitle titleThree">משימות ודגשים</p>
        </div>
      </div>

      {/* כאן נבדוק האם נבחר מצב חירום */}
      {selectedScenario ? (
        // אם נבחר מצב חירום, נציג את קומפוננטת Roles
        <Roles selectedScenario={selectedScenario} />
      ) : (
        // אם לא נבחר מצב חירום, נמשיך להציג את קומפוננטת Emergency
        <Emergency onScenarioSelect={setSelectedScenario} />
      )}
    </div>
  );
};

export default EmergencyRolls;

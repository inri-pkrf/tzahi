import React, { useState } from 'react';
import './EmergencyRolls.css';
import Emergency from './Emergency'; // קומפוננטה של בחירת מצבי חירום
import Roles from './Roles'; // קומפוננטה של הצגת תפקידים לאחר בחירת מצב חירום
import Combined from './Combined'; // קומפוננטה של הצגת מידע לאחר בחירת תפקיד

const EmergencyRolls = () => {
  const [selectedScenario, setSelectedScenario] = useState(null); // מצב חירום שנבחר
  const [selectedRole, setSelectedRole] = useState(null); // תפקיד שנבחר

  const handleRoleSelect = (role) => {
    setSelectedRole(role); // שמירה של התפקיד שנבחר
  };

  const isEmergencyDisplayed = !selectedScenario && !selectedRole; // מצב להצגת Emergency
  const isRolesDisplayed = selectedScenario && !selectedRole; // מצב להצגת Roles
  const isCombinedDisplayed = selectedRole; // מצב להצגת Combined

  return (
    <div className='page-container'>
      <h1 className='title'>יש לבחור מצב חירום ותפקיד בצח"י בכדי לצפות בסד"פ המתאים.</h1>
      <div className='states'>
        <div className={isEmergencyDisplayed ? 'state1-chosen' : 'state1 fade'}>
          <p className="stageNumber numberOne">שלב 1</p>
          <img
            className='Fireicon'
            src={`${process.env.PUBLIC_URL}/assets/media/fire.svg`}
            alt="Fire icon"
          />
          <p className="stateTitle titleOne">בחירת <br /> מצב חירום</p>
        </div>
        <hr className="dotted hr1" />

        <div className={isRolesDisplayed ? 'state2-chosen' : 'state2 fade'}>
          <p className="stageNumber numberTwo">שלב 2</p>
          <img
            className='tzahiicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tzahiGrey.svg`}
            alt="Tzahi icon"
          />
          <p className="stateTitle titleTwo">בחירת <br /> תפקיד</p>
        </div>
        <hr className="dotted hr2" />

        <div className={isCombinedDisplayed ? 'state3-chosen' : 'state3 fade'}>
          <p className="stageNumber numberThree">שלב 3</p>
          <img
            className='tasksicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tasksGrey.svg`}
            alt="Tasks icon"
          />
          <p className="stateTitle titleThree">משימות ודגשים</p>
        </div>
      </div>

      {selectedRole ? (
        // אם נבחר גם מצב חירום וגם תפקיד, עוברים ל-Combined
        <Combined selectedScenario={selectedScenario} selectedRole={selectedRole} />
      ) : selectedScenario ? (
        // אם רק מצב חירום נבחר, מציגים את קומפוננטת Roles
        <Roles selectedScenario={selectedScenario} onRoleSelect={handleRoleSelect} />
      ) : (
        // אם אף מצב חירום לא נבחר, מציגים את קומפוננטת Emergency
        <Emergency onScenarioSelect={setSelectedScenario} />
      )}
    </div>
  );
};

export default EmergencyRolls;

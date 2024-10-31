import React, { useState, useEffect } from 'react';
import './EmergencyRolls.css';
import Emergency from './Emergency';
import Roles from './Roles';
import Combined from './Combined';
import Evacuation from './Evacuation'; // ייבוא הקומפוננטה החדשה

const EmergencyRolls = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleEvacuationClick = () => {
    setSelectedRole("evacuation");
  };
  const isEmergencyDisplayed = !selectedScenario && !selectedRole;
  const isRolesDisplayed = selectedScenario && !selectedRole;
  const isCombinedDisplayed = selectedRole && selectedScenario && selectedRole !== "evacuation";
  const isEvacuationDisplayed = selectedRole === "evacuation"; // בדיקה אם זה פינוי

  useEffect(() => {
    const handleEmergencyBack = () => {
      setSelectedScenario(null);
      setSelectedRole(null);
    };

    window.addEventListener("emergencyback", handleEmergencyBack);
    return () => {
      window.removeEventListener("emergencyback", handleEmergencyBack);
    };
  }, []);

  return (
    <div className='page-container'>
      <h1 className='title'>יש לבחור מצב חירום ותפקיד בצח"י בכדי לצפות בסד"פ המתאים.</h1>
      <div className='states'>
        {/* Step indicators for each state */}
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

        <div className={(isCombinedDisplayed || isEvacuationDisplayed) ? 'state3-chosen' : 'state3 fade'}>
          <p className="stageNumber numberThree">שלב 3</p>
          <img
            className='tasksicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tasksGrey.svg`}
            alt="Tasks icon"
          />
          <p className="stateTitle titleThree">משימות ודגשים</p>
        </div>
      </div>

      {isEvacuationDisplayed ? (
        <Evacuation selectedScenario={selectedScenario} />
      ) : isCombinedDisplayed ? (
        <Combined selectedScenario={selectedScenario} selectedRole={selectedRole} />
      ) : isRolesDisplayed ? (
        <Roles 
          selectedScenario={selectedScenario} 
          onRoleSelect={handleRoleSelect} 
          onEvacuationClick={handleEvacuationClick} 
        />
      ) : (
        <Emergency onScenarioSelect={setSelectedScenario} onEvacuationClick={handleEvacuationClick} />
      )}
    </div>
  );
};

export default EmergencyRolls;
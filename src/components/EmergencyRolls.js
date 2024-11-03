import React, { useState, useEffect } from 'react';
import './EmergencyRolls.css';
import Emergency from './Emergency';
import Roles from './Roles';
import Combined from './Combined';
import Evacuation from './Evacuation';

const EmergencyRolls = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleBackEvent = () => {
    setSelectedScenario(null);
    setSelectedRole(null);
    const event = new CustomEvent("emergencyback");
    window.dispatchEvent(event);
  };

  const handleEvacuationClick = () => {
    setSelectedRole("evacuation");
  };

  const isEmergencyDisplayed = !selectedScenario && !selectedRole;
  const isRolesDisplayed = selectedScenario && !selectedRole;
  const isCombinedDisplayed = selectedRole && selectedScenario && selectedRole !== "evacuation";
  const isEvacuationDisplayed = selectedRole === "evacuation";

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
      <h1 className='title'>יש לבחור מצב חירום ותפקיד בצח"י בכדי לצפות בסד"פ המתאים</h1>
      <div className='states'>
        <div className={isEmergencyDisplayed ? 'state1-chosen' : 'state1 fade'}>
          <p className="stageNumber numberOne">שלב 1</p>
          <img
            className='Fireicon'
            src={`${process.env.PUBLIC_URL}/assets/media/fire.svg`}
            alt="Fire icon"
            onClick={handleBackEvent} // Assuming this should trigger the back event
          />
          <p className="stateTitle titleOne">בחירת <br /> מצב חירום</p>
        </div>
        <hr className={isEmergencyDisplayed ? 'hr1-none' : 'dotted hr1'} />

        <div className={isRolesDisplayed ? 'state2-chosen' : 'state2'}>
          <p className="stageNumber numberTwo">שלב 2</p>
          <img
            className='tzahiicon'
            src={`${process.env.PUBLIC_URL}/assets/media/tzahiGrey.svg`}
            alt="Tzahi icon"
          />
          <p className="stateTitle titleTwo">בחירת <br /> תפקיד</p>
        </div>
        <hr className={(isCombinedDisplayed || isEvacuationDisplayed) ? 'hr2-none' : 'dotted hr2'} />

        <div className={(isCombinedDisplayed || isEvacuationDisplayed) ? 'state3-chosen' : 'state3'}>
          <p className="stageNumber numberThree"> קבלת סד"פ</p>
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

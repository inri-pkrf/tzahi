import React, { useState, useEffect } from 'react';
import './EmergencyRolls.css';
import Emergency from './Emergency'; // Component for selecting emergency scenarios
import Roles from './Roles'; // Component for displaying roles after selecting an emergency scenario
import Combined from './Combined'; // Component for displaying information after selecting a role

const EmergencyRolls = () => {
  const [selectedScenario, setSelectedScenario] = useState(null); // Selected emergency scenario
  const [selectedRole, setSelectedRole] = useState(null); // Selected role

  const handleRoleSelect = (role) => {
    setSelectedRole(role); // Save the selected role
  };

  // New function to handle evacuation scenario selection
  const handleEvacuationClick = () => {
    const evacuationScenario = { situation: "פינוי ישוב" }; // Create the evacuation scenario object
    setSelectedScenario(evacuationScenario); // Set the selected scenario
    setSelectedRole("evacuation"); // Set the selected role to evacuation
  };

  const isEmergencyDisplayed = !selectedScenario && !selectedRole; // Display Emergency selection
  const isRolesDisplayed = selectedScenario && !selectedRole; // Display Roles selection
  const isCombinedDisplayed = selectedRole && selectedScenario; // Display Combined if both scenario and role are selected

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

      {isCombinedDisplayed ? (
        <Combined selectedScenario={selectedScenario} selectedRole={selectedRole} />
      ) : isRolesDisplayed ? (
        <Roles 
          selectedScenario={selectedScenario} 
          onRoleSelect={handleRoleSelect} 
          onEvacuationClick={handleEvacuationClick} // Ensure this is passed if needed
        />
      ) : (
        <Emergency onScenarioSelect={setSelectedScenario} onEvacuationClick={handleEvacuationClick} />
      )}
    </div>
  );
};

export default EmergencyRolls;

import React, { useState, useEffect } from 'react';
import './Combined.css';

const Combined = ({ selectedScenario, selectedRole }) => {
  const initialRoleIndex = selectedScenario.roles.findIndex(role => role.role === selectedRole.role);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(initialRoleIndex >= 0 ? initialRoleIndex : 0);
  const [completedTasks, setCompletedTasks] = useState({});
  const [hasMovedNext, setHasMovedNext] = useState(false);

  useEffect(() => {
    const currentRole = selectedScenario.roles[currentRoleIndex];
    const tasks = currentRole.tasksByPhases || { "כללי": currentRole.tasks || [] };
    const initialTasks = Object.keys(tasks).reduce((acc, phase) => {
      acc[phase] = new Array(tasks[phase].length).fill(false);
      return acc;
    }, {});
    setCompletedTasks(initialTasks);
  }, [currentRoleIndex, selectedScenario]);

  const handleCheckboxChange = (phase, index) => {
    const phaseTasks = completedTasks[phase] || [];
    const updatedCompletedTasks = {
      ...completedTasks,
      [phase]: [
        ...phaseTasks.slice(0, index),
        !phaseTasks[index],
        ...phaseTasks.slice(index + 1),
      ],
    };
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleNextRole = () => {
    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % selectedScenario.roles.length);
    setHasMovedNext(true);
  };

  const handlePreviousRole = () => {
    setCurrentRoleIndex((prevIndex) => (prevIndex - 1 + selectedScenario.roles.length) % selectedScenario.roles.length);
  };

  const handleBackClick = () => {
    const event = new CustomEvent("emergencyback");
    window.dispatchEvent(event);
  };

  const currentRole = selectedScenario.roles[currentRoleIndex];
  const tasks = currentRole.tasksByPhases || { "כללי": currentRole.tasks || [] };

  return (
    <div id="combined-container">
        <div id="both-selected">
          <p className='page-title'>בחרת בסד"פ הבא:</p>
          <h1 className="combined-title">{selectedScenario.situation}</h1>
          <img
            className='icon-sce'
            src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
            alt={`${selectedScenario.situation} icon`} 
          />
          <h1 className="combined-role" style={{ backgroundColor: currentRole.color }}>
            תפקיד: {currentRole.role || 'לא זוהה'}
          </h1>
          
          {hasMovedNext && (
            <img 
              className='navBtn back' 
              src={`${process.env.PUBLIC_URL}/assets/media/next.png`} 
              onClick={handlePreviousRole} 
              alt="Previous Role"
            />
          )}
          <img 
            className='navBtn next' 
            src={`${process.env.PUBLIC_URL}/assets/media/next.png`} 
            onClick={handleNextRole} 
            alt="Next Role"
          />

          <h1 className='background-situation'>רקע למצב:</h1>
          <p className='situation-description'>{selectedScenario.description}</p>
          <h1 className='tasks-title'>משימות בעל תפקיד</h1>
          
          {Object.entries(tasks).map(([phase, phaseTasks], phaseIndex) => (
            <div key={phaseIndex} className="phase-container">
              <h2 className="sub-title">{phase}:</h2>
              <ul className="tasks-list">
                {phaseTasks.map((task, index) => (
                  <li key={index} className="task-item">
                    <input 
                      className='mine-checkbox'
                      type="checkbox" 
                      checked={completedTasks[phase] ? completedTasks[phase][index] : false} 
                      onChange={() => handleCheckboxChange(phase, index)} 
                    />
                    <span className='task-text'>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a className='back-emergency' onClick={handleBackClick}>
            חזרה לבחירת מצב חירום
          </a>
          <div className='buffer'></div>
        </div>
      
    
    </div>
  );
};

export default Combined;

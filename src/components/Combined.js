import React, { useState } from 'react';
import './Combined.css';

const Combined = ({ selectedScenario }) => {
  // אתחול המצב לאינדקס התפקיד הנוכחי בתוך מערך התפקידים של מצב החירום
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const selectedRole = selectedScenario.roles[currentRoleIndex];
  
  // אתחול המצב של משימות שהושלמו לכל שלב ותפקיד
  const initialCompletedTasks = selectedRole.tasksByPhases
    ? Object.keys(selectedRole.tasksByPhases).reduce((acc, phase) => {
        acc[phase] = new Array(selectedRole.tasksByPhases[phase].length).fill(false);
        return acc;
      }, {})
    : {};

  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);
  const [hasMovedNext, setHasMovedNext] = useState(false); // מצב חדש

  // פונקציה לעדכון משימות שהושלמו
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

  // פונקציה לעדכון המצב והשלמת משימות
  const resetCompletedTasks = () => {
    const initialTasks = selectedRole.tasksByPhases
      ? Object.keys(selectedRole.tasksByPhases).reduce((acc, phase) => {
          acc[phase] = new Array(selectedRole.tasksByPhases[phase].length).fill(false);
          return acc;
        }, {})
      : {};
    setCompletedTasks(initialTasks);
  };

  // מעבר לתפקיד הבא
  const handleNextRole = () => {
    if (currentRoleIndex < selectedScenario.roles.length - 1) {
      setCurrentRoleIndex(currentRoleIndex + 1);
      resetCompletedTasks(); // ניקוי המשימות המושלמות
      setHasMovedNext(true); // עדכון המצב
    }
  };

  // מעבר לתפקיד הקודם
  const handlePreviousRole = () => {
    if (currentRoleIndex > 0) {
      setCurrentRoleIndex(currentRoleIndex - 1);
      resetCompletedTasks(); // ניקוי המשימות המושלמות
    }
  };

  const handleBackClick = () => {
    const event = new CustomEvent("emergencyback");
    window.dispatchEvent(event);
  };

  return (
    <div id="combined-container"> 
      <p className='page-title'>בחרת בסד"פ הבא:</p>
      
      <h1 className="combined-title" >
        {selectedScenario.situation}
      </h1>
      <img
          className='icon-sce'
          src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
          alt={`${selectedScenario.situation} icon`} 
        />
      <h1 className="combined-role" style={{ backgroundColor: selectedRole.color }}>
        תפקיד: {selectedRole.role}
      </h1>
      
      {/* הכפתור 'Back' מוצג רק אם hasMovedNext הוא true */}
      {hasMovedNext && (
        <img 
          className='navBtn back' 
          src={`${process.env.PUBLIC_URL}/assets/media/next.png`} 
          onClick={handlePreviousRole} 
          alt="Previous Role"
        />
      )}
      
      {currentRoleIndex < selectedScenario.roles.length - 1 && (
        <img 
          className='navBtn next' 
          src={`${process.env.PUBLIC_URL}/assets/media/next.png`} 
          onClick={handleNextRole} 
          alt="Next Role"
        />
      )}

      <h1 className='background-situation'>רקע למצב:</h1>
      <p className='situation-description'>{selectedScenario.description}</p>
      <h1 className='tasks-title'>משימות בעל תפקיד</h1>
      {selectedRole.tasks ? (
        // אם יש tasks ישירות
        <ul className="tasks-list">
          {selectedRole.tasks.map((task, index) => (
            <li key={index} className="task-item">
              <input 
                className='mine-checkbox'
                type="checkbox" 
                checked={completedTasks['default'] ? completedTasks['default'][index] : false} 
                onChange={() => handleCheckboxChange('default', index)} 
              />
              <span className='task-text'>{task}</span>
            </li>
          ))}
        </ul>
      ) : selectedRole.tasksByPhases ? (
        // אם יש tasksByPhases
        Object.entries(selectedRole.tasksByPhases).map(([phase, tasks], phaseIndex) => (
          <div key={phaseIndex} className="phase-container">
            <h2 className="sub-title">{phase}:</h2>
            <ul className="tasks-list">
              {tasks.map((task, index) => (
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
        ))
      ) : (
        // הודעה אם לא נמצאו משימות
        <p>לא נמצאו משימות.</p>
      )}

      <a className='back-emergency' onClick={handleBackClick}>
        חזרה לבחירת מצב חירום
      </a>
      
      <div className='buffer'></div>
    </div>
  );
};

export default Combined;

import React, { useState } from 'react';
import './Combined.css';

const Combined = ({ selectedScenario, selectedRole }) => {
  // יצירת מצב שבו לכל שלב יש מערך של משימות שהושלמו
  const initialCompletedTasks = selectedRole.tasksByPhases
    ? Object.keys(selectedRole.tasksByPhases).reduce((acc, phase) => {
        acc[phase] = new Array(selectedRole.tasksByPhases[phase].length).fill(false);
        return acc;
      }, {})
    : {};

  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  const handleCheckboxChange = (phase, index) => {
    const updatedCompletedTasks = {
      ...completedTasks,
      [phase]: [
        ...completedTasks[phase].slice(0, index),
        !completedTasks[phase][index], // עדכון הסטטוס של המשימה
        ...completedTasks[phase].slice(index + 1),
      ],
    };
    setCompletedTasks(updatedCompletedTasks); // עדכן את המצב החדש
  };

  const handleClick = () => {
    // צור את האירוע החדש
    const event = new CustomEvent("emergencyback");
    
    // שדר את האירוע
    window.dispatchEvent(event);
  };

  return (
    <div id="combined-container"> 
      <p className='page-title'>בחרת בסד"פ הבא:</p>
      <h1 className="combined-title" style={{ backgroundColor: selectedRole.color }}>
        {`משימות ${selectedRole.role} במצב של ${selectedScenario.situation}`}
      </h1>
      <h1 className='background-situation'>רקע למצב:</h1>
      <p className='situation-discription'>{selectedScenario.description}</p>
      <h1 className='tasks-title'>משימות בעל תפקיד</h1>

      {selectedRole.tasks ? (
        // אם יש tasks ישירות
        <ul className="tasks-list">
          {selectedRole.tasks.map((task, index) => (
            <li key={index} className="task-item">
              <input 
                className='mine-checkbox'
                type="checkbox" 
                checked={completedTasks[index]} 
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
                    checked={completedTasks[phase][index]} 
                    onChange={() => handleCheckboxChange(phase, index)} 
                  />
                  <span className='task-text'>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>לא נמצאו משימות.</p> // הודעה אם לא נמצאו משימות
      )}

      <a className='back-emergency' onClick={handleClick}>
        חזרה לבחירת מצב חירום
      </a>    
      <div className='buffer'></div>
    </div>
  );
};

export default Combined;


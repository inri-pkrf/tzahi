import React, { useState } from 'react';
import "./Combined.css";

const Combined = ({ selectedScenario, selectedRole }) => {
  const [completedTasks, setCompletedTasks] = useState(
    new Array(selectedRole.tasks.length).fill(false) 
  );

  const handleCheckboxChange = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index]; 
    setCompletedTasks(updatedCompletedTasks); // עדכן את המצב החדש
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

      <ul className="tasks-list">
        {selectedRole.tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input 
            className='mine-checkbox'
              type="checkbox" 
              checked={completedTasks[index]} 
              onChange={() => handleCheckboxChange(index)} 
            />
            <span className='task-text'>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Combined;

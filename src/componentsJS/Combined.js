import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../componentsCss/Combined.css';

const Combined = ({ selectedScenario, selectedRole }) => {
  // Initialize the navigate hook
  const navigate = useNavigate();

  // Determine the initial role index based on the selected role
  const initialRoleIndex = selectedScenario.roles.findIndex(
    (role) => role.role === selectedRole.role
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(
    initialRoleIndex >= 0 ? initialRoleIndex : 0
  );
  const [completedTasks, setCompletedTasks] = useState({});
  const [hasMovedNext, setHasMovedNext] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  // Set up the initial tasks state when the component mounts or the role changes
  useEffect(() => {
    const currentRole = selectedScenario.roles[currentRoleIndex];
    const tasks = currentRole.tasksByPhases || { "כללי": currentRole.tasks || [] };
    const initialTasks = Object.keys(tasks).reduce((acc, phase) => {
      acc[phase] = new Array(tasks[phase].length).fill(false);
      return acc;
    }, {});
    setCompletedTasks(initialTasks);
  }, [currentRoleIndex, selectedScenario]);

  // Handle checkbox changes for each task
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

  // Check if all tasks in a phase are completed
  const areAllTasksCompleted = (phase) => {
    return completedTasks[phase] && completedTasks[phase].every((task) => task);
  };

  // Move to the next role
  const handleNextRole = () => {
    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % selectedScenario.roles.length);
    setHasMovedNext(true);
  };

  // Move to the previous role
  const handlePreviousRole = () => {
    setCurrentRoleIndex(
      (prevIndex) => (prevIndex - 1 + selectedScenario.roles.length) % selectedScenario.roles.length
    );
  };

  // Trigger a custom event to go back to the emergency selection
  const handleBackClick = () => {
    const event = new CustomEvent("emergencyback");
    window.dispatchEvent(event);
  };

  const currentRole = selectedScenario.roles[currentRoleIndex];
  const tasks = currentRole.tasksByPhases || { "משימות": currentRole.tasks || [] };

  // Toggle the visibility of the notes
  const toggleNotes = () => {
    setShowNotes((prevShowNotes) => !prevShowNotes);
  };

  // Conditionally render the "הודעות נצורות" button
  const renderMessagesButton = () => {
    if (currentRole.role === "מידע לציבור" && currentRole.messages) {
      return (
        <div className="messages-button-container">
          <button 
            className="messages-button" 
            onClick={() => navigate('/tzahi/Messages')}
          >
            הודעות נצורות
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="combined-container">
      <div id="both-selected">
        <p className="page-title">בחרת בסד"פ הבא:</p>
        <p className="situation-description">{selectedScenario.description}</p>
        <div className='scenerio-chose'>
          <h1 className="combined-title">{selectedScenario.situation}</h1>
          <img
            className="icon-sce"
            src={`${process.env.PUBLIC_URL}/assets/iconsGrey/icon${selectedScenario.id}.svg`}
            alt={`${selectedScenario.situation} icon`}
          />
        </div>
        <h1 className="combined-role" style={{ backgroundColor: currentRole.color }}>
          תפקיד: {currentRole.role || 'לא זוהה'}
        </h1>

        {renderMessagesButton()} {/* Render the button here */}

        <div className="navigation-buttons">
          {hasMovedNext && (
            <div className="nav-button-container">
              <img
                className="navBtn back"
                src={`${process.env.PUBLIC_URL}/assets/media/next.png`}
                onClick={handlePreviousRole}
                alt="Previous Role"
              />
              <p className="nav-button-text back-txt">תפקיד קודם</p>
            </div>
          )}
          <div className="nav-button-container">
            <img
              className="navBtn next"
              src={`${process.env.PUBLIC_URL}/assets/media/next.png`}
              onClick={handleNextRole}
              alt="Next Role"
            />
            <p className="nav-button-text next-txt">תפקיד הבא</p>
          </div>
        </div>
        <div className="noted">
          <h2
            className="notes-title"
            onClick={toggleNotes}
            style={{ cursor: 'pointer' }}
          >
            דגשים
            <img
              src={`${process.env.PUBLIC_URL}/assets/media/nextBlack.png`}
              className={`arrow ${showNotes ? 'down next-black' : 'right next-black'}`}
            />
          </h2>
          {showNotes && (
            <ul className="notes-list">
              {selectedScenario.notes.map((note, index) => (
                <li key={index} className="note-item">
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>

        {Object.entries(tasks).map(([phase, phaseTasks], phaseIndex) => (
          <div key={phaseIndex} className="phase-container">
            <h2
              className={`sub-title ${areAllTasksCompleted(phase) ? 'checked-title' : ''}`}
            >
              {phase}:
            </h2>
            <ul className="tasks-list">
              {phaseTasks.map((task, index) => (
                <li key={index} className="task-item">
                  <input
                    className="mine-checkbox"
                    type="checkbox"
                    checked={completedTasks[phase] ? completedTasks[phase][index] || false : false}
                    onChange={() => handleCheckboxChange(phase, index)}
                  />
                  <span className="task-text">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="buffer">
          <a className="back-emergency" onClick={handleBackClick}>
            חזרה לבחירת מצב חירום
          </a>
        </div>
      </div>
    </div>
  );
};

export default Combined;

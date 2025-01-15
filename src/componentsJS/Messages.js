import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../componentsCss/Messages.css';

const Messages = ({ selectedScenario, currentRole }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [messages, setMessages] = useState(currentRole.messages || []);
  const [activeMessageIndex, setActiveMessageIndex] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");

  const handleEditMessage = (index) => {
    setActiveMessageIndex(index);
    setEditedMessage(messages[index]);
  };

  const handleSaveMessage = () => {
    const updatedMessages = [...messages];
    updatedMessages[activeMessageIndex] = editedMessage;
    setMessages(updatedMessages);
    setActiveMessageIndex(null);
    setEditedMessage("");
  };

  const handleSendMessage = () => {
    if (navigator.share) {
      navigator.share({
        title: 'הודעה חדשה',
        text: editedMessage,
      })
        .then(() => alert('ההודעה שותפה בהצלחה!'))
        .catch((error) => console.error('שיתוף נכשל:', error));
    } else {
      alert('הדפדפן שלך לא תומך בשיתוף.');
    }
    setActiveMessageIndex(null);
    setEditedMessage("");
  };

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="messages-container">
      <h1 className="messages-title">הודעות נצורות - {selectedScenario.situation}</h1>
      <button className="close-button" onClick={handleClose}>
        סגור
      </button>

      {messages.length === 0 ? (
        <p className="no-messages">אין הודעות זמינות</p>
      ) : (
        <div className="messages-list">
          {messages.map((message, index) => (
            <button
              key={index}
              className="message-button"
              onClick={() => handleEditMessage(index)}
            >
              הודעה {index + 1}
            </button>
          ))}
        </div>
      )}

      {activeMessageIndex !== null && (
        <div className="message-editor">
          <h2 className="editor-title">עריכת הודעה</h2>
          <textarea
            className="message-textarea"
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
          />
          <div className="editor-actions">
            <button className="save-button" onClick={handleSaveMessage}>
              שמור
            </button>
            <button className="send-button" onClick={handleSendMessage}>
              העתק ושלח
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;

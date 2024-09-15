import React, { useState } from 'react';
import './ChatApp.css'; // Optional: For styling

const ChatApp = () => {
  const [input, setInput] = useState(''); // The current input value
  const [messages, setMessages] = useState([]); // List of chat messages
  const [isExpanded, setIsExpanded] = useState(false); // Chat screen visibility

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setMessages([...messages, input]); // Add message to the list
      setInput(''); // Clear the input
      setIsExpanded(true); // Expand the chat screen
    }
  };

  return (
    <div className={`chat-container ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded && (
        <div className="chat-screen">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              {msg}
            </div>
          ))}
        </div>
      )}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="chat-input"
      />
    </div>
  );
};

export default ChatApp;

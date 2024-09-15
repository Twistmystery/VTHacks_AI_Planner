import React, { useState } from 'react';

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
            <div>
            <span className="message-label">YOU</span>
            <div key={index} className="chat-message">
            <div className="message-text"> 
                {msg}
            </div>
            </div>
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

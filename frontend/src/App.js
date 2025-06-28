// frontend/src/App.js
import React, { useState } from 'react';

function App() {
  // State to hold chat messages, starting with a bot greeting
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there, I’m your virtual assistant. How can I help you today?' },
  ]);
  // State to hold the current input value
  const [input, setInput] = useState('');

  // Sends the user’s message to the backend and processes the response
  const sendMessage = async () => {
    // Do nothing if the input is empty or only whitespace
    if (!input.trim()) return;

    // Add the user’s message to the conversation
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    // Clear the input field
    setInput('');

    try {
      // Send POST request to Flask backend
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      // Parse JSON response
      const data = await res.json();
      // Add the bot’s reply to the conversation
      const botMsg = { sender: 'bot', text: data.response };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      // Log any fetch errors
      console.error('Connection error:', error);
      // Show a generic error message to the user
      const botMsg = { sender: 'bot', text: 'Server connection error.' };
      setMessages(prev => [...prev, botMsg]);
    }
  };

  // Send message when user presses Enter
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      {/* Chat title */}
      <h2>Support Chat</h2>

      {/* Chat message container */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: 10,
          height: 300,
          overflowY: 'auto',
          marginBottom: 10,
        }}
      >
        {/* Render each message */}
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.sender === 'user' ? 'right' : 'left',
              margin: '10px 0',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 15,
                backgroundColor: m.sender === 'user' ? '#007bff' : '#e5e5ea',
                color: m.sender === 'user' ? 'white' : 'black',
                maxWidth: '80%',
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input field for typing messages */}
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        style={{ width: '80%', padding: 10 }}
      />
      {/* Button to send the message */}
      <button onClick={sendMessage} style={{ padding: 10, marginLeft: 5 }}>
        Send
      </button>
    </div>
  );
}

export default App;

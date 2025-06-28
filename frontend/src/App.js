import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error:', error);
      const botMsg = { sender: 'bot', text: 'Error de conexión al servidor.' };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Chat de Soporte</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: 10,
          height: 300,
          overflowY: 'auto',
          marginBottom: 10,
        }}
      >
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
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu mensaje..."
        style={{ width: '80%', padding: 10 }}
      />
      <button onClick={sendMessage} style={{ padding: 10, marginLeft: 5 }}>
        Enviar
      </button>
    </div>
  );
}

export default App;

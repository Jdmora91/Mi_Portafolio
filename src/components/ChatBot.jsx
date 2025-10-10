import React, { useState } from 'react';
import './ChatBot.css';
import { FaRobot, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `
Eres JD-Bot, el chatbot personal del desarrollador José Donis Mora. Tu trabajo es responder preguntas sobre su experiencia, proyectos (como BarberShop Book, MechTruck), habilidades (React, Python, Flask), su paso por 4Geeks Academy, y su motivación como programador full stack con enfoque en IA.
No exageres. Habla como si fueras él, de forma natural, cercana y profesional.
              `,
            },
            ...newMessages,
          ],
        }),
      });

      const botReply = await response.json();
      setMessages([...newMessages, botReply]);
    } catch (error) {
      console.error('Error al obtener respuesta del backend:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <strong>{msg.role === 'user' ? 'Tú' : 'JD-Bot'}:</strong> {msg.content}
              </div>
            ))}
            {loading && <div className="message assistant">JD-Bot está escribiendo...</div>}
          </div>
          <form onSubmit={handleSubmit} className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntame sobre mi experiencia, proyectos o stack..."
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

import React, { useState } from "react";
import "./ChatBot.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import translations from "../i18n/translations";

function ChatBot({ language }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const t = translations[language].chatbot;

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `
Eres JD-Bot, el asistente personal del desarrollador José Donis Mora.
Responde sobre su experiencia, proyectos y habilidades en el idioma del usuario (${language}).
              `,
            },
            ...newMessages,
          ],
        }),
      });

      const botReply = await response.json();
      setMessages([...newMessages, botReply]);
    } catch (error) {
      console.error("Error al obtener respuesta del backend:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chat-toggle-button" onClick={toggleChat}>
          <FaRobot />
        </button>
      )}

      {isOpen && (
        <div className="chatbox">
          {/* HEADER del chat con botón X */}
          <div className="chatbox-header">
            <span className="chatbox-title">JD-Bot</span>
            <button className="close-button" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* MENSAJES */}
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role === "user" ? "user" : "assistant"}`}
              >
                <strong>{msg.role === "user" ? "You" : "JD-Bot"}:</strong>{" "}
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="message assistant">{t.typing}</div>
            )}
          </div>

          {/* INPUT */}
          <form onSubmit={handleSubmit} className="input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
            />
            <button type="submit">
              {language === "en" ? "Send" : "Enviar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;

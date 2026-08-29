import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

import { faqs, contactFallback } from '../constants/constchatbot.jsx';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! How can I help you today?",
      options: ["What is 3SV Edumentors?", "What courses do you offer?", "Where are you located?"]
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Bot response logic
    setTimeout(() => {
      setIsTyping(false);
      const query = text.toLowerCase().trim();
      let matchedAnswer = "";

      // Try keyword matching
      for (const faq of faqs) {
        if (faq.keywords.some((kw) => query.includes(kw))) {
          matchedAnswer = faq.answer;
          break;
        }
      }

      // If no keyword match, check if query matches the exact prefixed questions
      if (!matchedAnswer) {
        const found = faqs.find((f) => f.question.toLowerCase() === query);
        if (found) matchedAnswer = found.answer;
      }

      // If still no match, check if they are asking for help/unresolved
      if (!matchedAnswer) {
        matchedAnswer = contactFallback;
      }

      const botMsg = {
        sender: 'bot',
        text: matchedAnswer,
        options: matchedAnswer === contactFallback ? [] : ["Need more help", "Solve query"]
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleOptionClick = (option) => {
    if (option === "Solve query") {
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: "Query resolved. Thank you!" },
        { sender: 'bot', text: "Glad to help! Have a great day." }
      ]);
    } else if (option === "Need more help") {
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: "I need more help." },
        { sender: 'bot', text: contactFallback }
      ]);
    } else {
      // Find matching FAQ answer
      const found = faqs.find((faq) => faq.question === option);
      const textToSend = found ? found.question : option;
      handleSendMessage(textToSend);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Chat Trigger Button (replacing right whatsapp logo) */}
      <button 
        className="chatbot-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="chatbot-window glass animate-chat-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="chatbot-header-text">
                <h3>3SV Assistant</h3>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-row ${msg.sender}-row`}>
                <div className={`message-bubble ${msg.sender}-bubble`}>
                  {msg.text}
                </div>
                {msg.options && msg.options.length > 0 && (
                  <div className="message-options-grid">
                    {msg.options.map((opt, oIdx) => (
                      <button 
                        key={oIdx} 
                        className="option-btn" 
                        onClick={() => handleOptionClick(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="message-row bot-row">
                <div className="message-bubble bot-bubble typing-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Ask a query..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputText.trim()} aria-label="Send Message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

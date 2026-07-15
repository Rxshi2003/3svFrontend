import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const faqs = [
  {
    keywords: ["what is 3sv", "about 3sv", "who are you", "what do you do"],
    question: "What is 3SV Edumentors?",
    answer: "Lifelong learning partner offering certified training and corporate consultancy."
  },
  {
    keywords: ["courses", "programs", "classes", "teach", "learn", "study"],
    question: "What courses do you offer?",
    answer: "Management, SCM, Six Sigma, PM, Coding, Excel, Analytics, Marketing, Accounting."
  },
  {
    keywords: ["location", "located", "where", "office", "address", "mumbai", "pune"],
    question: "Where are you located?",
    answer: "Headquartered in Mumbai, with offices in Pune, India."
  },
  {
    keywords: ["ceo", "vilas", "founder & ceo"],
    question: "Who is the CEO?",
    answer: "Prof. Vilas K. Chaudhari is the Founder & CEO."
  },
  {
    keywords: ["project", "capstone", "support", "guidance"],
    question: "Do you offer project support?",
    answer: "Yes, we provide guided production-grade capstone project assistance."
  },
  {
    keywords: ["online", "offline", "hybrid", "classroom"],
    question: "Are classes online or offline?",
    answer: "We offer hybrid options: both online and offline learning."
  },
  {
    keywords: ["six sigma", "lean", "quality"],
    question: "What is the Six Sigma course?",
    answer: "Quality control, DMAIC framework, process mapping, and waste elimination."
  },
  {
    keywords: ["corporate", "company", "training"],
    question: "Do you provide corporate training?",
    answer: "Yes, custom corporate training pathways tailored for your teams."
  },
  {
    keywords: ["placement", "job", "career", "hiring"],
    question: "Do you help with placements?",
    answer: "Yes, we offer corporate resources center alignment and training."
  },
  {
    keywords: ["director", "surekha"],
    question: "Who is the Founder Director?",
    answer: "Surekha V. Chaudhari is the Founder Director."
  },
  {
    keywords: ["excel", "advanced excel"],
    question: "What is the Advanced Excel course?",
    answer: "Advanced formulas, macros, Power Query, dashboards, and modeling."
  },
  {
    keywords: ["analytics", "data", "business analytics"],
    question: "What is the Analytics course?",
    answer: "Business intelligence, statistical modeling, forecasting, Python, and Tableau."
  },
  {
    keywords: ["marketing", "digital marketing"],
    question: "Do you teach digital marketing?",
    answer: "Yes, SEO, SEM, social branding, and email campaigns."
  },
  {
    keywords: ["accounting", "tally", "gst"],
    question: "Do you teach computerized accounting?",
    answer: "Yes, Tally Prime, GST filing, bookkeeping, and auditing."
  }
];

const contactFallback = "For more information contact +91 7738828132 or svc.3sv@gmail.com.";

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

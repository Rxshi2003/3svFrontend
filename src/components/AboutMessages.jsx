import React from 'react';
import './AboutMessages.css';
import founderImg from '../assets/images/Directorsurekhachaudhari.jpg';
import ceoImg from '../assets/images/CEOVilaschaudhari.jpg';
import { founderMessage, ceoMessage } from '../constants/constaboutmessages.jsx';

export default function AboutMessages() {
  return (
    <section className="about-messages-section">
      <div className="container">
        
        {/* Founder Director's Message */}
        <div className="message-card-wrapper animate-slide-up">
          <div className="message-grid">
            <div className="message-image-column">
              <div className="message-image-frame glass">
                <img 
                  src={founderImg} 
                  alt="Founder Director" 
                  className="message-photo"
                />
              </div>
              <div className="director-info-box">
                <h3 className="director-name">Founder Director</h3>
                <span className="director-title">3SV Edumentors & Consultants</span>
              </div>
            </div>
            
            <div className="message-text-column">
              <div className="message-badge-wrap">
                <span className="message-badge">{founderMessage.badge}</span>
              </div>
              <h2 className="message-heading">
                {founderMessage.title} <span>{founderMessage.titleHighlight}</span>
              </h2>
              
              <div className="message-content">
                {founderMessage.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                <div className="message-signature">
                  <p className="signature-salutation">{founderMessage.salutation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="message-divider"></div>

        {/* CEO's Message */}
        <div className="message-card-wrapper reverse-grid animate-slide-up">
          <div className="message-grid">
            <div className="message-text-column">
              <div className="message-badge-wrap">
                <span className="message-badge-alt">{ceoMessage.badge}</span>
              </div>
              <h2 className="message-heading">
                {ceoMessage.title} <span>{ceoMessage.titleHighlight}</span>
              </h2>
              
              <div className="message-content">
                {ceoMessage.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                <div className="message-signature">
                  <p className="signature-salutation">{ceoMessage.salutation}</p>
                </div>
              </div>
            </div>

            <div className="message-image-column">
              <div className="message-image-frame glass bg-glow-orange">
                <img 
                  src={ceoImg} 
                  alt="CEO Profile" 
                  className="message-photo"
                />
              </div>
              <div className="director-info-box">
                <h3 className="director-name">Chief Executive Officer</h3>
                <span className="director-title">3SV Edumentors & Consultants</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

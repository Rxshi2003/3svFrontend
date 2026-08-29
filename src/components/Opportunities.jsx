import React from 'react';
import './Opportunities.css';
import careerPathImg from 'C:/Users/HP/.gemini/antigravity-ide/brain/8a36b3f9-f036-4342-84ec-de75fd142537/career_path_1783958329881.png';

import { missionPoints } from '../constants/constopportunities.jsx';

export default function Opportunities() {

  return (
    <section className="opportunities-section">
      <div className="container opportunities-grid">
        {/* Left Side: Generated Image of Career Crossroads */}
        <div className="opportunities-graphic-column">
          <div className="graphic-backdrop bg-glow-blue"></div>
          <img
            src={careerPathImg}
            alt="Choosing career paths in IT illustration"
            className="opportunities-banner-img animate-float"
          />
        </div>

        {/* Right Side: Vision & Mission */}
        <div className="opportunities-text-column animate-slide-up">
          <div className="badge-wrapper">
            <span className="section-subtitle">STRATEGIC GOVERNANCE</span>
          </div>
          <h2 className="opportunities-heading">
            Our <span>Vision & Mission</span>
          </h2>

          {/* Vision Card Block */}
          <div className="vision-statement-card">
            <div className="vision-quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="vision-quote-text">
              To be recognised as a Global Leader in Fostering and Developing Industry Synchronized Courses and Consultancy Services.
            </p>
            <span className="vision-label">— Vision Statement</span>
          </div>

          {/* Mission Bullet List */}
          <div className="mission-section">
            <h3 className="mission-title">Our Mission Directions</h3>
            <div className="mission-list">
              {missionPoints.map((point, idx) => (
                <div key={idx} className="mission-item">
                  <div className="mission-icon-box">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="mission-text">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

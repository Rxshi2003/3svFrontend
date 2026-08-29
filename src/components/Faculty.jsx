import React from 'react';
import './Faculty.css';

import { facultyData } from '../constants/constfaculty.jsx';

export default function Faculty() {

  return (
    <section id="faculty" className="faculty-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LEARN FROM LEADERS</span>
          <h2 className="section-title">
            Our <span>Advisory Board & Faculty</span>
          </h2>
          <p className="section-desc">
            Gain guidance from highly experienced management mentors, certified auditors, technical specialists, and operations consultants.
          </p>
        </div>

        <div className="faculty-grid">
          {facultyData.map((mentor, idx) => (
            <div key={idx} className={`faculty-card glass ${mentor.color}`}>
              <div className={`faculty-avatar-box ${mentor.image ? 'has-image' : ''}`}>
                {mentor.image ? (
                  <img src={mentor.image} alt={mentor.name} className="faculty-avatar-img" />
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>
              <h3 className="faculty-name">{mentor.name}</h3>
              <span className="faculty-role">{mentor.role}</span>
              <span className="faculty-credentials">{mentor.credentials}</span>
              <div className="faculty-divider"></div>
              <p className="faculty-desc">{mentor.desc}</p>
              {mentor.id && (
                <a href={`#/faculty/${mentor.id}`} className="faculty-profile-link">
                  View Full Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

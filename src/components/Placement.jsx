import React from 'react';
import './Placement.css';

export default function Placement() {
  const crcFeatures = [
    {
      title: "100% Placement Referral Assistance",
      desc: "Our active corporate relations team partners with leading organizations in Mumbai, Pune, and Bangalore to host exclusive campus recruitment drives and referrals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: "1-on-1 Mock Interview Drills",
      desc: "Practice with seasoned industry professionals who evaluate your technical knowledge, analytical approach, communication skills, and project descriptions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: "ATS-Friendly Resume Builder",
      desc: "Create resumes tailored to match automated recruiter filters. We help detail your projects, technical certifications, and core competencies to ensure you stand out.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      title: "LinkedIn & Git Optimization",
      desc: "Your digital footprint is your first impression. We optimize your LinkedIn profile, clean up your GitHub repositories, and package your code portfolio professionally.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="placement" className="placement-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PLACEMENT ECOSYSTEM</span>
          <h2 className="section-title">
            Corporate Resources <span>Center (CRC)</span>
          </h2>
          <p className="section-desc">
            Our specialized placement hub bridges the gap between academic education and corporate requirement. We provide complete training alignment and job assistance.
          </p>
        </div>

        <div className="crc-grid animate-slide-up">
          {crcFeatures.map((item, idx) => (
            <div key={idx} className="crc-card glass">
              <div className="crc-icon-box">
                {item.icon}
              </div>
              <div className="crc-details">
                <h3 className="crc-title">{item.title}</h3>
                <p className="crc-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CRC Metrics Panel */}
        <div className="crc-metrics-bar glass mt-50">
          <div className="metric-item">
            <h3>100%</h3>
            <p>Placement Support</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3>120+</h3>
            <p>Recruiting Partners</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3>15+</h3>
            <p>Avg. Monthly Interviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

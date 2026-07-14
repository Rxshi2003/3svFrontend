import React from 'react';
import '../services/ServiceDetail.css';

export default function CorporateResourceCenter() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-crc">
        <div className="container">
          <span className="badge">Placement Hub</span>
          <h1>Corporate Resources Center (CRC)</h1>
          <p>Our dedicated placement cell bridging academic education and corporate hiring requirements. We actively cultivate recruitment partnerships, conduct mock drills, and prepare candidate files.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Your Pathway to Professional Excellence</h2>
          <p>The Corporate Resources Center (CRC) serves as the primary liaison between our certified students and industry recruiters. Our focus goes beyond just sharing job alerts; we curate personalized learning paths, train candidates on actual hiring criteria, and ensure high visibility with top employers.</p>
          
          <h3>CRC Support Pillars</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>100% Placement Referral Assistance:</strong> Access to a network of recruiting companies in Mumbai, Pune, and Bangalore looking for trained professionals.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Resume & LinkedIn Optimization:</strong> Dedicated sessions to format resumes according to Applicant Tracking Systems (ATS) and curate standard LinkedIn profiles.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Technical Mock Interviews:</strong> Rigorous 1-on-1 prep sessions with industry experts who provide detailed feedback on presentation and domain expertise.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Corporate Network Integration:</strong> Guest lectures, alumni panels, and corporate meets connecting our students with industry leaders.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Register with CRC</h3>
          <p>Ready to jumpstart your career search or submit your profile for review? Connect with the CRC placement officer.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Submit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

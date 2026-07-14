import React from 'react';
import './ServiceDetail.css';

export default function Entrepreneurship() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-entrepreneurship">
        <div className="container">
          <span className="badge">Service Details</span>
          <h1>Entrepreneurship & Incubation</h1>
          <p>Comprehensive incubation assistance, early-stage business modeling workshops, design thinking bootcamps, and strategic mentorship to guide new founders.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Fostering the Next Generation of Innovators</h2>
          <p>We believe in nurturing ground-breaking ideas into sustainable, scale-ready business operations. Our entrepreneurship vertical provides the tools, frameworks, and network required for early-stage founders to design, validate, and launch their startups.</p>
          
          <h3>Key Offerings</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Incubation Program:</strong> Structuring operations, legal entity setup guidelines, and infrastructure guidance for startups.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Business Model Canvas Workshops:</strong> Hands-on sessions to map value propositions, target audiences, cost structures, and revenue models.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Design Thinking & Prototyping:</strong> Teaching user-centric product research, UI/UX conceptualization, and MVP validation.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Mentorship & Investor Network:</strong> Connecting founders with veteran entrepreneurs and potential early-stage seed investors.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Apply for Incubation</h3>
          <p>Have an innovative startup idea or product roadmap? Share your pitch deck and join our incubation pipeline.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Submit Idea
          </button>
        </div>
      </div>
    </div>
  );
}

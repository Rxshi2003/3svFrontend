import React from 'react';
import './ServiceDetail.css';

export default function ResearchDevelopment() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-rd">
        <div className="container">
          <span className="badge">Service Details</span>
          <h1>Research & Development</h1>
          <p>Comprehensive research support, innovation incubation setups, and academic standards auditing modeled on international research guidelines.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Fostering Academic & Applied Research</h2>
          <p>3SV Edumentors & Consultants is deeply committed to academic integrity and intellectual growth. Our R&D division supports scholars, educational institutions, and corporate teams in structuring, writing, and auditing high-quality, peer-reviewed research papers and publications.</p>
          
          <h3>Key Offerings</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Research Paper Support:</strong> Assisting in literature review methods, data analysis formulations, and academic writing conventions.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Statistical Analytics:</strong> Utilizing tools like SPSS, R, Python, and Minitab for scientific validation of hypotheses.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Academic Standards Audit:</strong> Reviewing research curricula to align with leading international research directories.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Patent & Intellectual Property:</strong> Guidelines for protecting intellectual property, patent filing processes, and innovation audits.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Collaborate on Research</h3>
          <p>Looking to collaborate on a research publication or require assistance with statistical validation? Reach out to us.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Contact Research Desk
          </button>
        </div>
      </div>
    </div>
  );
}

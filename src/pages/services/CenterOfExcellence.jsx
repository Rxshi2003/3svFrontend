import React from 'react';
import './ServiceDetail.css';

export default function CenterOfExcellence() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-coe">
        <div className="container">
          <span className="badge">Special Initiative</span>
          <h1>Center of Excellence (CoE)</h1>
          <p>An elite training and strategic research incubator designed to foster domain expertise, bridge state-of-the-art technological systems, and nurture advanced industry leadership.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Establishing Industry & Research Benchmarks</h2>
          <p>The 3SV Center of Excellence (CoE) serves as a specialized knowledge hub aimed at driving innovation, standardizing premium operations protocols, and executing joint research programs with academic institutions and corporate partners.</p>
          
          <h3>Focus Areas</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Advanced Skill Development:</strong> Specialized programs in Lean Quality systems, data science, agile architectures, and project management.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Incubation & Research Lab:</strong> Facilitating high-impact industrial research projects, technology transfer, and academic standard audits.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Strategic Partnerships:</strong> Collaborating with standard training providers, corporate networks, and leading universities to build localized centers.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Operational Audits & Standards:</strong> Drafting operational guides, benchmarking productivity metrics, and helping clients implement premium QA standards.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Partner with the CoE</h3>
          <p>Explore opportunities for joint research programs, university incubation labs, or customized corporate Center of Excellence setups.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Collaborate with CoE
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './ServiceDetail.css';

export default function Consultancy() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-consultancy">
        <div className="container">
          <span className="badge">Service Details</span>
          <h1>Management & Operational Consultancy</h1>
          <p>Customized professional advisory services to optimize business workflows, refine curriculum frameworks, audit methodologies, and implement global operational standards.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Driving Operational Excellence & Compliance</h2>
          <p>At 3SV Edumentors & Consultants, our consultancy vertical is designed to solve complex industrial and academic challenges. We work closely with organizations to analyze their existing workflows, identify bottleneck areas, and implement lean solutions that drastically reduce waste, time, and costs.</p>
          
          <h3>Key Offerings</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Workflow & Process Optimization:</strong> Implementing Lean Six Sigma methodologies to streamline operational procedures.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Curriculum & Standards Auditing:</strong> Helping academic institutions audit and refine their course frameworks to align with global industry expectations.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Quality Assurance Audits:</strong> Conducting rigorous quality audits and preparing teams for international standard certifications.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Strategic Operations Advisory:</strong> High-level advisory for executive leadership to manage transitions, scaling, and technology integration.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Enquire About Consultancy</h3>
          <p>Want to optimize your organization's processes or academic curriculum? Contact our consultancy division today.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

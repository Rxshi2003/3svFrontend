import React from 'react';
import './ServiceDetail.css';

export default function CorporateTraining() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-corporate">
        <div className="container">
          <span className="badge">Service Details</span>
          <h1>Corporate Training Programs</h1>
          <p>Specially tailored corporate learning pathways covering Agile, Lean & Six Sigma, Logistics & Supply Chain Management, and advanced technical programming tailored to team goals.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Upskill & Transform Your Workforce</h2>
          <p>3SV Edumentors & Consultants is a trusted training partner for numerous industrial and service corporations. We design customizable, result-driven training modules that target practical challenges, improving process efficiency and upskilling teams in high-demand domains.</p>
          
          <h3>Key Offerings</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Lean Six Sigma Certification:</strong> Interactive workshops detailing DMAIC phases, root-cause analysis, and statistical process controls.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Logistics & Supply Chain Management:</strong> Enhancing capabilities in warehousing operations, demand forecasting, and inventory flow logic.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Agile & Project Management:</strong> Building scrum proficiency, product-owner alignment, and enterprise-grade roadmap delivery.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Custom Technology Bootcamps:</strong> Tailored training sessions in data science, analytics, and software architectures.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Request Corporate Proposal</h3>
          <p>Ready to custom upskill your company's departments? Get in touch with our learning and development experts.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Connect with Us
          </button>
        </div>
      </div>
    </div>
  );
}

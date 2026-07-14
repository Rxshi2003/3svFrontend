import React from 'react';
import './ServiceDetail.css';

export default function Projects() {
  return (
    <div className="service-detail-page">
      <div className="service-hero bg-projects">
        <div className="container">
          <span className="badge">Service Details</span>
          <h1>Industrial Capstone Projects</h1>
          <p>Guided production-grade capstone development, case study analysis, and hands-on analytical workshops to build industry-validated implementation portfolios.</p>
        </div>
      </div>

      <div className="container service-detail-grid">
        <div className="detail-content">
          <h2>Hands-On Practical Implementation</h2>
          <p>Theory is only half the battle. At 3SV, we emphasize project-based learning. We coordinate with industries to bring real-world problems and data sets to our students, enabling them to build high-impact portfolios that demonstrate true problem-solving capabilities.</p>
          
          <h3>Key Offerings</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Live Capstone Projects:</strong> Work on real-time corporate case studies across Six Sigma, supply chain, and data science.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Industry Mentorship:</strong> Weekly reviews and guidelines from experienced industry practitioners and tech leads.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Portfolio Building:</strong> Learn to package projects on GitHub, write comprehensive documentation, and present results.
              </div>
            </div>
            <div className="feature-item">
              <span className="bullet">✔</span>
              <div>
                <strong>Technical Workshops:</strong> Intensive modules focused on tools like Python, PowerBI, SQL, Tableau, and Excel solvers.
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar glass">
          <h3>Sponsor / Submit Projects</h3>
          <p>Looking to assign structural or analytical projects to talented students? Collaborate with our projects division.</p>
          <button className="cta-button" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
            Pitch a Project
          </button>
        </div>
      </div>
    </div>
  );
}

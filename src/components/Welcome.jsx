import React from 'react';
import './Welcome.css';
import { welcomeImg } from '../constants/constgeneratedassets.jsx';

export default function Welcome() {
  return (
    <section id="about" className="welcome-section">
      <div className="container welcome-grid">
        {/* Left Side: Text Details */}
        <div className="welcome-text-column animate-slide-up">
          <div className="badge-wrapper">
            <span className="section-subtitle">ABOUT 3SV EDUMENTORS</span>
          </div>
          <h2 className="welcome-heading">
            Bridging the Gap Between <span>Academia and Industry</span>
          </h2>
          <p className="welcome-paragraph highlight">
            Operational since October 2022, 3SV Edumentors & Consultants has emerged as a preferred lifelong learning partner for students and corporate organizations alike.
          </p>
          <p className="welcome-paragraph">
            Headquartered in Mumbai with offices in Pune, we are renowned for providing industry-synchronized certificate courses and executive-level consultancy services. Our solutions are designed to optimize plant operations, productivity compliance, time, and costs for both manufacturing and service sector organizations.
          </p>
          <p className="welcome-paragraph">
            In the education sector, we offer hybrid (online and offline) courses in Lean Six Sigma, Data Analytics, Data Science, Data Engineering, Business Analytics, and Project Management. Our programs are conducted in association with Authorized Training Partners (ATP) of the Project Management Institute (PMI), USA, providing hands-on case studies, live assignments, and direct industry mentorship.
          </p>

          <div className="core-values-section">
            <h4 className="core-values-title">Our Core Values</h4>
            <div className="core-values-grid">
              {[
                'Integrity & Ethical Conduct',
                'Quality & Excellence',
                'Commitment & Accountability',
                'Growing Together',
                'Dedication',
                'Entrepreneurial Spirit',
                'Trust & Credibility'
              ].map((value, idx) => (
                <span key={idx} className="value-badge">
                  <svg className="value-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Generated climb image */}
        <div className="welcome-graphic-column">
          <div className="graphic-backdrop"></div>
          <img
            src={welcomeImg}
            alt="Climbing stairs to tech career success illustration"
            className="welcome-banner-img animate-float"
          />
        </div>
      </div>
    </section>
  );
}

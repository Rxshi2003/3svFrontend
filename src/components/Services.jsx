import React from 'react';
import './Services.css';

import { allServicesList } from '../constants/constservices.jsx';

export default function Services({ limitTo }) {

  const servicesList = limitTo 
    ? allServicesList.filter(service => limitTo.includes(service.title))
    : allServicesList;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">
            Empowering Teams and <span>Academic Horizons</span>
          </h2>
          <p className="section-desc">
            We deliver industry-certified education consultancy, customized corporate training programs, project support, and incubation platforms to build professional excellence.
          </p>
        </div>

        <div className="services-grid animate-slide-up">
          {servicesList.map((item, idx) => (
            <div 
              key={idx} 
              className="service-card glass clickable"
              onClick={() => {
                if (item.link) {
                  window.location.hash = `#/${item.link}`;
                }
              }}
            >
              <div className="service-icon-box">
                {item.icon}
              </div>
              <div className="service-details">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
                {item.link && (
                  <span className="service-learn-more">
                    Learn More
                    <svg className="learn-more-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

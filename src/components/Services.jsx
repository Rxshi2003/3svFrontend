import React from 'react';
import './Services.css';

export default function Services({ limitTo }) {
  const allServicesList = [
    {
      title: "Consultancy",
      desc: "Customized professional advisory services to optimize business workflows, refine curriculum frameworks, audit methodologies, and implement global operational standards.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      link: "services/consulting"
    },
    {
      title: "Corporate Training",
      desc: "Specially tailored corporate learning pathways covering Agile, Lean & Six Sigma, Logistics & Supply Chain Management, and advanced technical programming tailored to team goals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      link: "services/corporate-training"
    },
    {
      title: "Entrepreneurship",
      desc: "Comprehensive incubation assistance, early-stage business modeling workshops, design thinking bootcamps, and strategic mentorship to guide new founders.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13"></path>
          <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
        </svg>
      ),
      link: "services/entrepreneurship"
    },
    {
      title: "Projects",
      desc: "Guided production-grade capstone development, case study analysis, and hands-on analytical workshops to build industry-validated implementation portfolios.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      ),
      link: "services/projects"
    },
    {
      title: "Research & Development",
      desc: "Comprehensive research support, innovation incubation setups, and academic standards auditing modeled on international research guidelines.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
        </svg>
      ),
      link: "services/research-development"
    },
    {
      title: "Center of Excellence",
      desc: "An elite training and strategic research incubator designed to foster domain expertise, bridge state-of-the-art technological systems, and nurture advanced industry leadership.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      link: "services/center-of-excellence"
    }
  ];

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

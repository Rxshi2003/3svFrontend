import React from 'react';
import './Courses.css';

export default function Courses() {
  const coursesData = [
    {
      title: "Management Courses",
      duration: "Professional",
      color: "java-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      skills: ["Strategic Planning", "Business Leadership", "Operations Management", "Organizational Behavior", "Finance Basics", "Marketing Strategy", "Performance Audits"]
    },
    {
      title: "Logistics & Supply Chain Management",
      duration: "Certification",
      color: "python-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      skills: ["Supply Chain Operations", "Inventory Optimization", "Logistics & Warehousing", "Procurement Strategies", "Global Distribution", "Vendor Management", "Freight & Transport"]
    },
    {
      title: "Lean & Six Sigma Course",
      duration: "Quality Audit",
      color: "devops-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      skills: ["Six Sigma Methodology", "DMAIC Framework", "Process Mapping", "Statistical Analysis", "Waste Elimination", "Kaizen Principles", "Quality Auditing"]
    },
    {
      title: "Project Management Courses",
      duration: "PM Competency",
      color: "ds-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      skills: ["Project Lifecycle", "PMP Preparation", "Agile & Scrum Planning", "Resource Scheduling", "Risk Management", "Budget Optimization", "Team Leadership"]
    },
    {
      title: "Technical Courses & Computer Programming",
      duration: "Core Tech",
      color: "ml-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ["Logic & Algorithms", "Computer Programming", "Software Systems", "Databases & SQL", "Systems Architecture", "API Configurations", "Technical Deployments"]
    },
    {
      title: "Excel & Functional Analytics",
      duration: "Data Insights",
      color: "testing-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      skills: ["Advanced Excel", "Formulas & Pivot Tables", "Functional Analytics", "Business Dashboards", "Statistical Reporting", "Data Modeling", "Predictive Analytics"]
    },
    {
      title: "Management Education Consulting",
      duration: "Institutional",
      color: "java-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      skills: ["Education Consulting", "Curriculum Architecture", "Pedagogical Design", "Academic Leadership", "Institutional Strategy", "Accreditation Support", "Learning Management"]
    },
    {
      title: "Consulting, Training & Service Management",
      duration: "Corporate Services",
      color: "python-theme",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="8" y1="22" x2="16" y2="22"></line>
        </svg>
      ),
      skills: ["Corporate Training", "Operations Advisory", "Service Management", "SLA Configurations", "Quality Assurance", "Process Outsourcing", "Managing & Delivery"]
    }
  ];

  const handleEnquire = (courseName) => {
    window.dispatchEvent(new CustomEvent('open-enquiry', { detail: { course: courseName } }));
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">EXPLORE OUR PROGRAMS</span>
          <h2 className="section-title">
            Popular Courses <span>Built For Everyone</span>
          </h2>
          <p className="section-desc">
            Acquire specialized technical training in highly demanded technologies. Learn from basics and build robust production-ready applications.
          </p>
        </div>

        <div className="courses-grid">
          {coursesData.map((course, idx) => (
            <div key={idx} className={`course-card glass ${course.color}`}>
              <div className="card-top">
                <div className="course-icon-bg">
                  {course.icon}
                </div>
                <span className="course-duration-badge">{course.duration}</span>
              </div>
              
              <h3 className="course-card-title">{course.title}</h3>
              
              <div className="syllabus-divider"></div>
              
              <div className="syllabus-preview">
                <h4>What you will learn:</h4>
                <div className="skills-tags-grid">
                  {course.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-actions">
                <button className="card-cta-primary" onClick={() => handleEnquire(course.title)}>
                  Enquire Now
                </button>
                <button className="card-cta-secondary" onClick={() => handleEnquire(course.title)}>
                  Syllabus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './Faculty.css';

export default function Faculty() {
  const facultyData = [
    {
      id: "vilas-chaudhari",
      name: "Prof. Vilas K. Chaudhari",
      role: "Founder & CEO, 3SV Edumentors",
      credentials: "Master Black Belt – Six Sigma | Strategic Consultant | Academic Leader",
      desc: "Over 42 years of operations leadership, specializing in Six Sigma, strategic business consulting, and analytical education reforms.",
      color: "blue-accent"
    },
    {
      id: "v-ramachandran",
      name: "CA V. Ramachandran",
      role: "Financial Strategist & Senior Consultant",
      credentials: "Chartered Accountant | 45+ Yrs Financial Leadership",
      desc: "Expert in corporate finance, strategic cost management, accounting finalization, compliance, and GMCS coaching.",
      color: "gold-accent"
    },
    {
      id: "sudheer-gopal-bide",
      name: "Prof. Dr. Sudheer Gopal Bhide",
      role: "Senior Operations & Quality Consultant",
      credentials: "Ph.D. | 45+ Yrs Industry & Academic Excellence",
      desc: "Internationally trained expert (AOTS/JIPM Japan) in Total Productive Maintenance, Operations Research, and Lean Manufacturing.",
      color: "indigo-accent"
    },
    {
      name: "Ajit Thatte",
      role: "Lead Quality Auditor",
      credentials: "Six Sigma Master Black Belt",
      desc: "Master mentor in Six Sigma quality tools, DMAIC framework, and statistical process controls.",
      color: "blue-accent"
    },
    {
      name: "Ajay Modak",
      role: "Project Management Director",
      credentials: "PMP Certified Professional",
      desc: "Mentors in project lifecycle methodologies, agile scaling, and PMO office management.",
      color: "gold-accent"
    },
    {
      name: "Dr. R. C. Walke",
      role: "Academic Research Head",
      credentials: "Ph.D. in Operations Research",
      desc: "Coordinates research papers, innovation incubations, and institutional frameworks.",
      color: "indigo-accent"
    },
    {
      name: "Vivek Prakash PMP, MCP",
      role: "Principal Project Advisor",
      credentials: "PMP, Microsoft Certified Professional",
      desc: "Provides hands-on consultancy in project scheduling, risk plans, and tech systems alignment.",
      color: "blue-accent"
    },
    {
      name: "Amit K. Gosh",
      role: "Lead Functional Analyst",
      credentials: "MS in Analytics | ex-Big4 Advisory Lead",
      desc: "Instructs functional statistics, dashboard designs, and business intelligence reporting.",
      color: "gold-accent"
    },
    {
      name: "Manoj Sarasappan",
      role: "Senior Programming Consultant",
      credentials: "B.E. Computer Science | Tech Lead",
      desc: "Instructs logic buildings, computer programming basics, and software design architectures.",
      color: "indigo-accent"
    },
    {
      name: "Dr. Hemjith Balakrishnan",
      role: "Management Advisory Lead",
      credentials: "Ph.D. in Human Resource Management",
      desc: "Oversees workforce management audits, executive mentoring, and organizational behavior.",
      color: "blue-accent"
    },
    {
      name: "Nadeem Khan",
      role: "Logistics Audit Specialist",
      credentials: "MBA in Operations & Logistics",
      desc: "Tracks supply chain structures, warehouse optimization, and material handling solutions.",
      color: "gold-accent"
    },
    {
      name: "Chandrasen Sharma",
      role: "Project Governance Mentor",
      credentials: "Agile Coach | 15+ Yrs PMO Architect",
      desc: "Coaches project governance protocols, scrum implementation, and scaling frameworks.",
      color: "indigo-accent"
    },
    {
      name: "Manoranjan Prusty",
      role: "Technical Programming Trainer",
      credentials: "M.C.A. | Fullstack Lead Architect",
      desc: "Mentors computer programming fundamentals, database designs, and code compiler tests.",
      color: "blue-accent"
    },
    {
      name: "Zafar Mukadam",
      role: "Business Operations Advisor",
      credentials: "M.B.A. | Lead Business Operations Consultant",
      desc: "Specializes in functional operational reviews, metric layouts, and performance consulting.",
      color: "gold-accent"
    },
    {
      name: "Dinesh Kumar Mishra",
      role: "Academic Quality Auditor",
      credentials: "M.Tech | Certified Quality Control Expert",
      desc: "Guides quality inspection metrics, service delivery blueprints, and compliance audits.",
      color: "indigo-accent"
    },
    {
      name: "Dr. Pratik R. Sathe",
      role: "Executive Mentor - Corporate Strategy",
      credentials: "Ph.D. in Strategic Management",
      desc: "Advises corporate executives on competitive strategy, market entry plans, and alliances.",
      color: "blue-accent"
    },
    {
      name: "Subarna Rath",
      role: "Corporate Training Coordinator",
      credentials: "PGDM in Corporate Relations",
      desc: "Coordinates custom corporate workshops, trainee programs, and placement alignments.",
      color: "gold-accent"
    },
    {
      name: "Surekha V. Chaudhari",
      role: "Managing Strategy Advisor",
      credentials: "M.S. Industrial Engineering",
      desc: "Guides organizational design, consulting frameworks, and operational governance setups.",
      color: "indigo-accent"
    }
  ];

  return (
    <section id="faculty" className="faculty-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LEARN FROM LEADERS</span>
          <h2 className="section-title">
            Our <span>Advisory Board & Faculty</span>
          </h2>
          <p className="section-desc">
            Gain guidance from highly experienced management mentors, certified auditors, technical specialists, and operations consultants.
          </p>
        </div>

        <div className="faculty-grid">
          {facultyData.map((mentor, idx) => (
            <div key={idx} className={`faculty-card glass ${mentor.color}`}>
              <div className="faculty-avatar-box">
                {/* Custom Styled Avatar placeholder utilizing high-quality inline SVG */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="faculty-name">{mentor.name}</h3>
              <span className="faculty-role">{mentor.role}</span>
              <span className="faculty-credentials">{mentor.credentials}</span>
              <div className="faculty-divider"></div>
              <p className="faculty-desc">{mentor.desc}</p>
              {mentor.id && (
                <a href={`#/faculty/${mentor.id}`} className="faculty-profile-link">
                  View Full Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

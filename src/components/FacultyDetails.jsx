import React, { useEffect } from 'react';
import './FacultyDetails.css';

const facultyProfiles = {
  'vilas-chaudhari': {
    name: 'Prof. Vilas K. Chaudhari',
    role: 'CEO, 3SV Edumentors & Consultants',
    location: 'Nerul, Navi Mumbai',
    tagline: 'Master Black Belt – Six Sigma | Strategic Consultant | Academic Leader',
    color: 'blue-accent',
    bio: 'With over 42 years of professional excellence, Prof. Vilas K. Chaudhari stands as a seasoned industry expert and academic visionary. As the Founder and CEO of 3SV Edumentors & Consultants, he has pioneered industry-synchronized certification programs and consultancy solutions tailored for manufacturing and service sector organizations. His leadership blends deep domain expertise in Six Sigma, Analytics, Project Management, and Operations with hands-on project-based learning, empowering institutions and professionals alike.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'competencies',
        items: [
          {
            category: 'Quality & Lean Management',
            details: 'Six Sigma (Yellow to Master Black Belt), SQC, Lean Implementation'
          },
          {
            category: 'Business & Functional Analytics',
            details: 'Predictive Analytics, HR, Marketing, Retail, Logistics & SCM, CSR Analytics, Machine Learning, NLP, Deep Learning, Tableau, Python, Power BI, Fintech'
          },
          {
            category: 'Project & Operations Management',
            details: 'Project Management, Primavera, MS Project, Smart City Project Management, Theory of Constraints'
          },
          {
            category: 'Research & Teaching',
            details: 'Over 25+ consulting assignments, 21+ publications, FDPs, MDPs, student development programs across 60+ institutions'
          }
        ]
      },
      {
        title: 'Education & Certifications',
        type: 'list-items',
        items: [
          'MBA (Marketing & Retail) | MCM | MSc (Chemistry) | Post B.Sc. Diploma in Computer Science and Applications',
          'Certified Master Black Belt – Indian Statistical Institute, Pune',
          'Lean Six Sigma (KPMG, ASQM), ISO 9001:2015 Internal Auditor',
          '50+ national and international certifications in Business Analytics, AI/ML, Digital Marketing, R/Python, Tableau, Scilab, Tally Prime, etc.'
        ]
      },
      {
        title: 'Leadership Highlights',
        type: 'list-items',
        items: [
          'Developed 40+ certification programs across analytics, project management, and operations.',
          'Founder of Binary & Analytical Labs for live project-based learning.',
          'Consultant for ISO, NAAC, NBA accreditations and strategic education reforms.',
          'Spearheaded CSR, ISR, and tribal upliftment projects under Rotary and SIESCOMS initiatives.',
          'Former Dean of Operations and Business Analytics at SIESCOMS, Navi Mumbai and Pride Institute of Business Management, Pune; set up Centres of Excellence in Analytics, Project Management, Entrepreneurship and Logistics.',
          'Played a strategic role in international accreditations, curriculum design, and faculty development.'
        ]
      },
      {
        title: 'Institutional and Industry Impact',
        type: 'list-items',
        items: [
          'Consultancy Services: Provided impactful advisory to over 25 organizations across sectors.',
          'Training & Mentorship: Guided over 700 students in certification programs and mentored MBA projects.',
          'Academic Collaborations: Partnered with CII, PMI, SAP, AIMA, pmwares and more for delivering value-added programs.',
          'Visiting Faculty across premier institutions in Mumbai, Pune, and Bhopal.'
        ]
      }
    ],
    footerBlock: {
      title: 'Vision at 3SV Edumentors',
      text: 'To build globally recognized, project-integrated, and outcome-driven training and consultancy platforms that bridge the gap between academia and industry. Focused on excellence, innovation, and transformation.'
    }
  },
  'v-ramachandran': {
    name: 'CA V. Ramachandran',
    role: 'Financial Strategist | Educator | Chartered Accountant',
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Chartered Accountant | 45+ Years of Corporate & Academic Advisory',
    color: 'gold-accent',
    bio: 'With over 45 years of distinguished experience across India’s top public and private sector organizations, CA V. Ramachandran is a highly accomplished Chartered Accountant and Senior Consultant at 3SV Edumentors & Consultants, Navi Mumbai. His career spans a rich blend of financial leadership, academic instruction, and consulting excellence, with deep expertise in Financial Accounting, Costing, Strategic Cost Management, Taxation, and Financial Analytics. A proven mentor and trainer, he has significantly contributed to professional development programs for MBA, PGDM, EMBA, and CA aspirants, especially through GMCS Programs of the Institute of Chartered Accountants of India (ICAI).',
    sections: [
      {
        title: 'Areas of Expertise',
        type: 'competencies',
        items: [
          {
            category: 'Finance & Accounting',
            details: 'Financial Statement Analysis, Finalization of Accounts, Capital & Revenue Budgeting, Working Capital Management, Costing, Pricing, ERP'
          },
          {
            category: 'Strategic & Cost Management',
            details: 'Tools & Techniques for Industry, Financial Scrutiny, Investment Proposals, Funds Management'
          },
          {
            category: 'Taxation & Compliance',
            details: 'Direct & Indirect Taxation, Representation Before Government Bodies, Secretarial Duties'
          },
          {
            category: 'Professional Training',
            details: 'GMCS sessions on Office Management, Negotiation, Report Writing, Mock Interviews'
          }
        ]
      },
      {
        title: 'Academic & Industry Background',
        type: 'list-items',
        items: [
          'Chartered Accountant (C.A.)',
          'Formerly associated with leading organizations such as: Indian Oil Corporation Ltd. (R&P Division), Lubrizol India Pvt. Ltd., Hindustan Copper Ltd., Ballarpur Industries Ltd., Technimont ICB Pvt. Ltd., Lalit Profiles and Steel Industries Ltd., and Haryana Detergents Ltd.'
        ]
      },
      {
        title: 'Training & Development Impact',
        type: 'table',
        headers: ['Activity', 'Count'],
        rows: [
          ['Consulting Assignments', '7'],
          ['Student Development Programs', '50'],
          ['Research Papers Presented', '7'],
          ['Publications', '1'],
          ['Faculty Development Programs (Attended)', '7'],
          ['Faculty Development Programs (Conducted)', '5'],
          ['Management Development Programs (Conducted)', '5'],
          ['Recognitions & Honors', '7']
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'As a Chartered Accountant at 3SV, he mentors professionals and students through financial consultancy, hands-on analytical training, and cost management strategy development. His sessions are known for their real-world application, structured problem-solving, and regulatory insight, helping professionals bridge the gap between academic concepts and practical industry challenges.'
    }
  },
  'sudheer-gopal-bide': {
    name: 'Prof. Dr. Sudheer Gopal Bhide',
    role: 'Senior Consultant – 3SV Edumentors & Consultants',
    location: 'Navi Mumbai',
    tagline: 'Ph.D., B.E., M.Sc., PGDMS, D.I.S. | 45+ Years of Professional Experience',
    color: 'indigo-accent',
    bio: 'Prof. Dr. Sudheer Gopal Bhide is a highly experienced and internationally trained expert in Operations and Quality Management, with over 45 years of professional excellence in academia and industry. As a Senior Consultant at 3SV Edumentors & Consultants, he brings a strategic and systems-driven approach to improving organizational efficiency and quality. His unique combination of technical depth and academic rigor has empowered both engineering and management professionals across India. Having received specialized training in Quality Control from AOTS, Japan and a Certificate in Total Productive Maintenance (TPM) from the prestigious JIPM, Japan, Dr. Bhide stands out as a globally oriented educator and consultant in manufacturing excellence, world-class production systems, and lean methodologies.',
    sections: [
      {
        title: 'Areas of Expertise',
        type: 'grid-items',
        items: [
          'Operations Management & Operations Research',
          'Supply Chain & Manufacturing Resources Planning',
          'Productivity & Quality Management',
          'World-Class Manufacturing Practices',
          'Operations Analytics & Project Management',
          'Total Quality Management (TQM)'
        ]
      },
      {
        title: 'Education & International Certifications',
        type: 'list-items',
        items: [
          'Ph.D. in Operations Management',
          'B.E. – Bachelor of Engineering',
          'M.Sc. – Master of Science',
          'PGDMS – Post Graduate Diploma in Management Studies',
          'D.I.S. – Diploma in Information Systems',
          'Quality Control Training – AOTS, Kansai Kenshu Centre, Osaka, Japan',
          'Total Productive Maintenance (TPM) – Certificate by JIPM, Japan'
        ]
      },
      {
        title: 'Industry Experience',
        type: 'industry-list',
        desc: 'These roles provided him with comprehensive exposure to plant operations, quality compliance, productivity enhancement techniques, and cross-functional leadership in industrial environments.',
        items: [
          'Engineering Industry (Bearings & Tin Can Manufacturing)',
          'Quality Management Systems, Thane',
          'Antifriction Bearings Corporation Ltd., Lonavala',
          'Poysha Industrial Co. Ltd., Thane',
          'Universal Cans & Containers, Taloja',
          'Divecha Glass Industries, Mulund'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV Edumentors, Dr. Bhide plays a crucial role in delivering consultancy services and academic training in the fields of manufacturing systems, quality control, and operations excellence. His sessions are known for their deep practical insights, globally benchmarked practices, and structured analytical approach.'
    }
  }
};

export default function FacultyDetails({ facultyId }) {
  const profile = facultyProfiles[facultyId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [facultyId]);

  if (!profile) {
    return (
      <div className="faculty-not-found">
        <h2>Faculty Profile Not Found</h2>
        <p>The profile you are looking for does not exist or has been removed.</p>
        <a href="#faculty" className="back-home-btn-accent">Back to Faculty List</a>
      </div>
    );
  }

  return (
    <div className={`faculty-details-page ${profile.color}`}>
      {/* Background Graphic elements */}
      <div className="bg-glow-circle circle-1"></div>
      <div className="bg-glow-circle circle-2"></div>

      <div className="details-container">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="breadcrumb-area">
          <a href="#faculty" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Advisory & Faculty</span>
          </a>
        </div>

        {/* Profile Header Card */}
        <header className="profile-header-card glass">
          <div className="profile-header-grid">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar-circle">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            
            <div className="profile-main-info">
              <span className="profile-badge">Senior Advisor Profile</span>
              <h1 className="profile-title">{profile.name}</h1>
              <h2 className="profile-subtitle">{profile.role}</h2>
              {profile.location && <p className="profile-loc">{profile.location}</p>}
              <div className="profile-tagline-wrap">
                <p className="profile-tagline">{profile.tagline}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content Grid */}
        <div className="profile-content-grid">
          
          {/* Left Column - Biography & Vision */}
          <div className="profile-left-col">
            
            <section className="profile-card-block glass">
              <h3 className="block-title">Professional Profile</h3>
              <p className="bio-text">{profile.bio}</p>
            </section>

            {profile.footerBlock && (
              <section className="profile-card-block vision-block glass">
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h4 className="vision-title">{profile.footerBlock.title}</h4>
                <p className="vision-text">{profile.footerBlock.text}</p>
              </section>
            )}
            
          </div>

          {/* Right Column - Specialized Sections */}
          <div className="profile-right-col">
            {profile.sections.map((sec, idx) => (
              <section key={idx} className="profile-card-block glass">
                <h3 className="block-title">{sec.title}</h3>
                
                {sec.type === 'competencies' && (
                  <div className="competency-list">
                    {sec.items.map((item, cIdx) => (
                      <div key={cIdx} className="competency-item">
                        <div className="competency-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="competency-content">
                          <span className="competency-category">{item.category}</span>
                          <p className="competency-details">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'list-items' && (
                  <ul className="bullet-list">
                    {sec.items.map((item, lIdx) => (
                      <li key={lIdx} className="bullet-item">
                        <span className="bullet-bullet"></span>
                        <span className="bullet-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.type === 'grid-items' && (
                  <div className="grid-list">
                    {sec.items.map((item, gIdx) => (
                      <div key={gIdx} className="grid-item-card">
                        <div className="grid-item-dot"></div>
                        <p className="grid-item-text">{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'industry-list' && (
                  <div className="industry-block">
                    {sec.desc && <p className="industry-desc">{sec.desc}</p>}
                    <ul className="bullet-list">
                      {sec.items.map((item, iIdx) => (
                        <li key={iIdx} className="bullet-item">
                          <span className="bullet-bullet outline-bullet"></span>
                          <span className="bullet-content">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sec.type === 'table' && (
                  <div className="table-responsive">
                    <table className="impact-table">
                      <thead>
                        <tr>
                          {sec.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td>{row[0]}</td>
                            <td className="table-count-cell">
                              <span className="count-badge">{row[1]}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </section>
            ))}
          </div>

        </div>

        {/* Back Button Footer Action */}
        <div className="footer-action-area">
          <a href="#faculty" className="back-to-list-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to All Faculty</span>
          </a>
        </div>
      </div>
    </div>
  );
}

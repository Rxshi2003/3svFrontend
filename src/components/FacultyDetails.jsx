import React, { useEffect } from 'react';
import './FacultyDetails.css';
import { facultyProfiles } from '../constants/constfacultydetails.jsx';

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
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} className="profile-avatar-img" />
                ) : (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
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

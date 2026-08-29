import React, { useState, useEffect } from 'react';
import './CourseDetail.css';
import { COURSES_DATA } from '../constants/constcourses.jsx';

export default function CourseDetail({ courseId }) {
  const course = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];
  const [selectedLevelIdx, setSelectedLevelIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedLevelIdx(0);
  }, [courseId]);

  const handleEnquire = (subTitle = '') => {
    const courseName = subTitle ? `${course.title} - ${subTitle}` : course.title;
    window.dispatchEvent(new CustomEvent('open-enquiry', { detail: { course: courseName } }));
  };

  const handleBackToCourses = () => {
    window.dispatchEvent(new CustomEvent('app-navigate', {
      detail: { hash: '#/courses', route: { path: 'courses' } }
    }));
  };

  if (!course) {
    return (
      <div className="course-detail-page container">
        <div className="not-found-card glass">
          <h2>Course Not Found</h2>
          <p>The requested course program could not be located.</p>
          <button className="glow-btn" onClick={handleBackToCourses}>
            Back to All Courses
          </button>
        </div>
      </div>
    );
  }

  // ── Determine what type of course this is ──────────────────────────────────
  const isModular = !!course.modules;   // flat subject list (Excel, Mgmt Analytics certs)
  const isLeveled = !!course.levels;    // tiered level system (Logistics, Six Sigma, etc.)

  return (
    <div className={`course-detail-page ${course.theme}`}>

      {/* ── Hero Header ──────────────────────────────────────────────────── */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-breadcrumbs">
            <button onClick={() => window.dispatchEvent(new CustomEvent('app-navigate', { detail: { hash: '#/home', route: { path: 'home' } } }))} className="crumb-btn">Home</button>
            <span className="crumb-sep">/</span>
            <button onClick={handleBackToCourses} className="crumb-btn">Courses</button>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{course.title}</span>
          </div>

          <div className="hero-content-grid">
            <div className="hero-text">
              <div className="hero-badges-row">
                <span className="hero-cat-tag">{course.category}</span>
                <span className="hero-badge">{course.badge}</span>
                <span className="hero-dur-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {course.duration}
                </span>
              </div>
              <h1 className="hero-course-title">{course.title}</h1>
              <p className="hero-course-desc">{course.description}</p>
              <div className="hero-action-buttons">
                <button className="glow-btn hero-cta-btn" onClick={() => handleEnquire()}>
                  Enroll / Enquire Now
                </button>
                <button className="secondary-hero-btn" onClick={handleBackToCourses}>
                  ← Back to All Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Body ────────────────────────────────────────────────────── */}
      <section className="detail-body-section">
        <div className="container">
          <div className="detail-main-layout">

            {/* Left Content Column */}
            <div className="detail-left-column">

              {/* Program Overview */}
              <div className="detail-box glass">
                <h2 className="box-title">Program Overview</h2>
                <p className="box-desc">
                  {isModular
                    ? 'This program covers the following subjects and courses. Click any course below to enquire about enrollment:'
                    : 'This program offers structured levels of mastery. Click any level below to view its detailed syllabus and topics:'}
                </p>
                <div className="program-features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">🎓</div>
                    <div><h4>Industry Certification</h4><p>Recognized credential upon completion & capstone defense.</p></div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">💼</div>
                    <div><h4>Practical Capstone</h4><p>Real-world datasets and corporate analytics case studies.</p></div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">👨‍🏫</div>
                    <div><h4>Expert Mentorship</h4><p>Senior corporate advisors and hands-on guidance.</p></div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⏰</div>
                    <div><h4>Flexible Batches</h4><p>Weekday & Weekend hybrid online/offline options.</p></div>
                  </div>
                </div>
              </div>

              {/* ── FLAT MODULE CARDS (for Excel / Management Analytics certs) ── */}
              {isModular && (
                <div className="detail-box glass">
                  <h2 className="box-title">
                    {isModular && course.modules.length > 1
                      ? `${course.title} — Course Structure`
                      : 'Courses Included'}
                  </h2>
                  <p className="box-subtext">All subjects included in this program:</p>

                  <div className="modules-cards-grid">
                    {course.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className={`module-card ${mod.isCapstone ? 'module-capstone' : ''} ${mod.isSpecialization ? 'module-specialization' : ''}`}
                        style={{ '--mod-color': mod.color || '#4f8ef7' }}
                      >
                        <div className="module-card-top">
                          <div className="module-number-badge">{idx + 1}</div>
                          <div className="module-icon-wrap">
                            <span className="module-emoji">{mod.icon}</span>
                          </div>
                          {mod.isCapstone && <div className="capstone-tag">Capstone</div>}
                          {mod.isSpecialization && <div className="spec-tag">Choose Any One</div>}
                        </div>

                        <h3 className="module-card-title">{mod.name}</h3>

                        {/* Duration chip */}
                        {mod.duration && (
                          <div className="module-duration-chip">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            {mod.duration}
                          </div>
                        )}

                        {/* Specialization sub-options */}
                        {mod.isSpecialization && mod.options && (
                          <ul className="spec-options-list">
                            {mod.options.map((opt, oIdx) => (
                              <li key={oIdx} className="spec-option-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {opt}
                              </li>
                            ))}
                          </ul>
                        )}

                        <button
                          className="module-enquire-btn"
                          onClick={() => handleEnquire(mod.name)}
                        >
                          Enquire for This Course →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── INTERACTIVE LEVEL CARDS (for Logistics / Six Sigma / etc.) ── */}
              {isLeveled && (
                <div className="detail-box glass">
                  <div className="levels-header-wrap">
                    <h2 className="box-title">Available Levels in {course.title}</h2>
                    <p className="box-subtext">Click on any level to view its detailed subcourses & topics:</p>
                  </div>

                  <div className="interactive-level-cards-grid">
                    {course.levels.map((lvl, idx) => {
                      const isSelected = selectedLevelIdx === idx;
                      return (
                        <div
                          key={idx}
                          className={`level-interactive-card ${isSelected ? 'active-level' : ''}`}
                          onClick={() => setSelectedLevelIdx(idx)}
                        >
                          <div className="level-card-header">
                            <div className="level-badge-pill">Level {lvl.levelNumber || idx + 1}</div>
                            <h3 className="level-card-name">{lvl.levelTitle}</h3>
                            <span className="level-card-dur-chip">{lvl.duration}</span>
                          </div>

                          <div className="level-card-body">
                            <h4 className="syllabus-title">Syllabus & Topics Covered:</h4>
                            <ul className="subcourses-check-list">
                              {lvl.subcourses.map((sub, sIdx) => (
                                <li key={sIdx} className="check-item">
                                  <svg className="check-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="level-card-actions">
                              <button
                                className="glow-btn level-enquire-action"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEnquire(lvl.levelTitle);
                                }}
                              >
                                Enquire for {lvl.levelTitle.split('-')[1]?.trim() || lvl.levelTitle} →
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* ── Right Sticky Sidebar ─────────────────────────────────────── */}
            <div className="detail-right-sidebar">
              <div className="sidebar-card glass sticky-card">
                <h3 className="sidebar-title">Course Information</h3>

                <div className="summary-list">
                  <div className="summary-row">
                    <span className="sum-label">Program:</span>
                    <span className="sum-val">{course.title}</span>
                  </div>
                  <div className="summary-row">
                    <span className="sum-label">Duration:</span>
                    <span className="sum-val">{course.duration}</span>
                  </div>
                  <div className="summary-row">
                    <span className="sum-label">Subjects:</span>
                    <span className="sum-val">
                      {isModular
                        ? `${course.modules.length} Subjects / Courses`
                        : `${course.levels.length} Levels`}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="sum-label">Mode:</span>
                    <span className="sum-val">Hybrid (Online / Offline)</span>
                  </div>
                  <div className="summary-row">
                    <span className="sum-label">Certification:</span>
                    <span className="sum-val">Executive Credential</span>
                  </div>
                </div>

                <div className="sidebar-actions">
                  <button className="glow-btn sidebar-btn-primary" onClick={() => handleEnquire()}>
                    Enquire for {course.title.split('in')[0].trim() || course.title}
                  </button>
                  <button className="sidebar-btn-secondary" onClick={() => handleEnquire('Full Syllabus PDF')}>
                    Download Full Syllabus
                  </button>
                </div>

                <div className="counseling-box">
                  <h4>Counseling & Admissions:</h4>
                  <p>Speak with an academic counselor:</p>
                  <a href="tel:+917738828132" className="counseling-link">📞 +91 7738828132</a>
                  <a href="mailto:svc.3sv@gmail.com" className="counseling-link">✉️ svc.3sv@gmail.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

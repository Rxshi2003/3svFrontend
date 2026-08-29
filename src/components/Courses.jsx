import React, { useState } from 'react';
import './Courses.css';
import { COURSES_DATA, COURSE_CATEGORIES } from '../constants/constcourses.jsx';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = COURSES_DATA.filter(course => {
    if (activeCategory === "All") return true;
    return course.category === activeCategory;
  });

  const handleEnquire = (courseTitle, extraInfo = '') => {
    const fullCourseName = extraInfo ? `${courseTitle} (${extraInfo})` : courseTitle;
    window.dispatchEvent(new CustomEvent('open-enquiry', { detail: { course: fullCourseName } }));
  };

  const handleViewCourse = (courseId) => {
    // Fire custom event so App.jsx sets route immediately (no hashchange delay)
    window.dispatchEvent(new CustomEvent('app-navigate', {
      detail: {
        hash: `#/courses/${courseId}`,
        route: { path: 'course-detail', param: courseId }
      }
    }));
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">EXPLORE OUR PROGRAMS</span>
          <h2 className="section-title">
            Industry Certification <span>& Master Programs</span>
          </h2>
          <p className="section-desc">
            Structured competency pathways with modular subcourses, multi-level certifications, specialized domain analytics, and hands-on capstone projects.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="courses-category-bar">
          {COURSE_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className={`course-card glass ${course.theme}`}>
              <div className="card-top">
                <span className="course-badge">{course.badge}</span>
                <span className="course-duration-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {course.duration}
                </span>
              </div>

              <h3 
                className="course-card-title clickable-title" 
                onClick={() => handleViewCourse(course.id)}
                title="Click to view 3 levels & full course details"
              >
                {course.title}
                <svg className="title-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </h3>

              <p className="course-card-desc">{course.description}</p>

              <div className="syllabus-divider"></div>

              {/* Display module name previews for flat-subject programs */}
              {course.modules && (
                <div className="levels-preview-box">
                  <h4 className="sub-heading">Courses Included:</h4>
                  <div className="levels-badges-grid">
                    {course.modules.slice(0, 4).map((mod, mIdx) => (
                      <div key={mIdx} className={`level-preview-badge ${mod.isCapstone ? 'capstone-badge' : ''}`} onClick={() => handleViewCourse(course.id)}>
                        <span className="level-preview-num">{mIdx + 1}</span>
                        <span className="level-preview-text">{mod.name}</span>
                      </div>
                    ))}
                    {course.modules.length > 4 && (
                      <div className="level-preview-badge more-badge" onClick={() => handleViewCourse(course.id)}>
                        <span className="level-preview-text">+{course.modules.length - 4} more</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Display level preview badges for tiered programs */}
              {course.levels && (
                <div className="levels-preview-box">
                  <h4 className="sub-heading">Course Structure (Click to Explore):</h4>
                  <div className="levels-badges-grid">
                    {course.levels.map((lvl, lIdx) => (
                      <div key={lIdx} className="level-preview-badge" onClick={() => handleViewCourse(course.id)}>
                        <span className="level-preview-num">{lvl.levelNumber || lIdx + 1}</span>
                        <span className="level-preview-text">{lvl.levelTitle.split('-')[1]?.trim() || lvl.levelTitle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specializations Quick Chips */}
              {course.specializations && (
                <div className="specialization-section">
                  <h4 className="sub-heading">Specializations Available:</h4>
                  <div className="specialization-chips">
                    {course.specializations.map((spec, spIdx) => (
                      <span key={spIdx} className="spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-actions">
                <button className="card-cta-primary" onClick={() => handleViewCourse(course.id)}>
                  View 3 Levels & Syllabus →
                </button>
                <button className="card-cta-secondary" onClick={() => handleEnquire(course.title)}>
                  Quick Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

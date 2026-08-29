import React, { useState } from 'react';
import './Placement.css';
import { crcFeatures, studentFeedbacks } from '../constants/constplacement.jsx';

export default function Placement() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = ['All', 'SIP Internship', 'Six Sigma & Quality', 'Logistics & SCM', 'Finance & Analytics'];

  // Helper to extract student initials for shimmer avatar
  const getInitials = (name) => {
    const cleanName = name.replace(/^(Mr\.|Ms\.|Dr\.|Prof\.)\s+/i, '');
    const parts = cleanName.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Filter feedbacks based on category and search query
  const filteredFeedbacks = studentFeedbacks.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.feedback.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.role && item.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.institute && item.institute.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.projectTitle && item.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const displayedFeedbacks = filteredFeedbacks.slice(0, visibleCount);

  return (
    <section id="placement" className="placement-section">
      <div className="container">
        
        {/* CRC Section Header */}
        <div className="section-header">
          <span className="section-subtitle">PLACEMENT ECOSYSTEM</span>
          <h2 className="section-title">
            Corporate Resources <span>Center (CRC)</span>
          </h2>
          <p className="section-desc">
            Our specialized placement hub bridges the gap between academic education and corporate requirements. We provide complete training alignment and job assistance.
          </p>
        </div>

        {/* CRC Features Grid */}
        <div className="crc-grid animate-slide-up">
          {crcFeatures.map((item, idx) => (
            <div key={idx} className="crc-card glass">
              <div className="crc-icon-box">
                {item.icon}
              </div>
              <div className="crc-details">
                <h3 className="crc-title">{item.title}</h3>
                <p className="crc-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CRC Metrics Panel */}
        <div className="crc-metrics-bar glass mt-50">
          <div className="metric-item">
            <h3>100%</h3>
            <p>Placement Support</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3>120+</h3>
            <p>Recruiting Partners</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3>15+</h3>
            <p>Avg. Monthly Interviews</p>
          </div>
        </div>

        {/* Student Testimonials Header */}
        <div className="section-header mt-80">
          <span className="section-subtitle">STUDENT TESTIMONIALS</span>
          <h2 className="section-title">
            What Our <span>Interns & Scholars Say</span>
          </h2>
          <p className="section-desc">
            Direct feedback from MMS, MBA, Six Sigma, and SIP project scholars who completed their training and projects at 3SV Edumentors & Consultants.
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="testimonial-controls">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(9);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search student, course, or project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Feedback Cards Grid */}
        <div className="student-feedback-grid mt-40">
          {displayedFeedbacks.map((student) => {
            const isLong = student.feedback.length > 220;
            const isExpanded = expandedId === student.id;

            return (
              <div key={student.id} className="feedback-card glass animate-slide-up">
                
                {/* Quote Icon */}
                <div className="quote-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Header Profile Info */}
                <div className="feedback-profile">
                  {student.image ? (
                    <div className="avatar-wrapper">
                      <img src={student.image} alt={student.name} className="student-avatar-img" />
                    </div>
                  ) : (
                    /* Shimmer UI Placeholder Avatar */
                    <div className="shimmer-avatar-wrapper" title="Student Avatar Shimmer UI">
                      <div className="shimmer-effect"></div>
                      <span className="shimmer-initials">{getInitials(student.name)}</span>
                    </div>
                  )}

                  <div className="profile-details">
                    <h4 className="student-name">{student.name}</h4>
                    <span className="student-role">{student.role}</span>
                    {student.institute && (
                      <span className="student-institute">📍 {student.institute}</span>
                    )}
                    {student.award && (
                      <span className="award-tag">🏆 {student.award}</span>
                    )}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="star-rating">
                  {'★'.repeat(5)}
                </div>

                {/* Project Title if present */}
                {student.projectTitle && (
                  <div className="project-title-box">
                    <strong>Project:</strong> "{student.projectTitle}"
                  </div>
                )}

                {/* Testimonial Text */}
                <p className="feedback-text">
                  {isLong && !isExpanded
                    ? `${student.feedback.substring(0, 220)}...`
                    : student.feedback}
                </p>

                {/* Read More Toggle */}
                {isLong && (
                  <button
                    className="read-more-btn"
                    onClick={() => setExpandedId(isExpanded ? null : student.id)}
                  >
                    {isExpanded ? 'Show Less ↑' : 'Read Full Feedback →'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredFeedbacks.length === 0 && (
          <div className="no-feedback-found">
            <p>No student feedback found matching "{searchTerm}".</p>
            <button className="reset-btn" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredFeedbacks.length && (
          <div className="load-more-wrapper mt-40">
            <button className="load-more-btn" onClick={() => setVisibleCount((prev) => prev + 9)}>
              <span>More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

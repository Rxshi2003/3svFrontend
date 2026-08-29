import React, { useState } from 'react';
import './Contact.css';
import { COURSES_DATA } from '../constants/constcourses.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Management Courses',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Management Courses',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">
            Start Your <span>Journey With 3SV</span>
          </h2>
          <p className="section-desc">
            Have questions about syllabus details, batch timings, consulting projects, or service delivery? Fill out the form or reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Form */}
          <div className="contact-card form-container glass">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon-box">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Enquiry Sent Successfully!</h3>
                <p>Our program counselors will get back to you within 24 hours on your provided details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="course">Select Course Interested *</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    {COURSES_DATA.map((course) => (
                      <optgroup key={course.id} label={course.title}>
                        <option value={course.title}>{course.title} ({course.duration})</option>
                        {course.subcourses && course.subcourses.map((sub, sIdx) => (
                          <option key={sIdx} value={`${course.title} - ${sub}`}>
                            -- Subcourse: {sub}
                          </option>
                        ))}
                        {course.levels && course.levels.map((lvl, lIdx) => (
                          <option key={lIdx} value={`${course.title} - ${lvl.levelTitle}`}>
                            -- Level: {lvl.levelTitle}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Queries</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Ask us anything..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="glow-btn form-submit-btn">
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Details & Map */}
          <div className="contact-details-column">
            {/* Info Cards */}
            <div className="info-cards-stack">
              <a href="tel:+917738828132" className="info-card-item glass">
                <div className="info-icon-circle phone-c">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="info-card-texts">
                  <h4>Call Counselors</h4>
                  <p>+91 7738828132</p>
                </div>
              </a>

              <a href="mailto:svc.3sv@gmail.com" className="info-card-item glass">
                <div className="info-icon-circle mail-c">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-card-texts">
                  <h4>Email Admissions</h4>
                  <p>svc.3sv@gmail.com</p>
                </div>
              </a>

              <div className="info-card-item glass no-hover">
                <div className="info-icon-circle location-c">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-card-texts">
                  <h4>Head Office</h4>
                  <p>Flat no. 6, Building no. 7, NL 5, Gangotri CHS. Ltd., Sector 3, Nerul, Navi Mumbai</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="map-holder-graphic glass">
              <div className="map-dot pulse-glow-dot"></div>
              <div className="map-texts">
                <h4>Find Us In Nerul, Navi Mumbai</h4>
                <p>Located centrally in Nerul, Navi Mumbai. Visit us for a free counseling session and course orientation.</p>
                <a 
                  href="https://maps.google.com/?q=Flat+no.+6,+Building+no.+7,+NL+5,+Gangotri+CHS.+Ltd.,+Sector+3,+Nerul,+Navi+Mumbai" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="google-maps-link"
                >
                  Open in Google Maps
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

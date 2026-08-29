import React, { useState, useEffect } from 'react';
import './EnquiryModal.css';
import { COURSES_DATA } from '../constants/constcourses.jsx';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(COURSES_DATA[0].title);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail && e.detail.course) {
        setSelectedCourse(e.detail.course);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-enquiry', handleOpen);
    return () => window.removeEventListener('open-enquiry', handleOpen);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry modal submitted:", { ...formData, course: selectedCourse });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Sticky Vertical 'Enquire Now!' Tab */}
      <button 
        className="sticky-enquire-tab"
        onClick={() => setIsOpen(true)}
        aria-label="Open Enquiry Form"
      >
        Enquire Now!
      </button>

      {/* Enquiry Modal Backdrop & Form */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content glass animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="modal-success-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. Our counselors will call you shortly.</p>
              </div>
            ) : (
              <div className="modal-form-wrapper">
                <h3>Quick Course Enquiry</h3>
                <p className="modal-sub">Tell us your goal and let us help you achieve it.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="modal-form-group">
                    <label htmlFor="modal-name">Full Name *</label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label htmlFor="modal-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label htmlFor="modal-email">Email Address</label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      placeholder="Enter email (optional)"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="modal-form-group">
                    <label htmlFor="modal-course">Course / Subcourse of Interest *</label>
                    <select
                      id="modal-course"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                      {/* Render pre-selected value if custom selection */}
                      {!COURSES_DATA.some(c => c.title === selectedCourse) && (
                        <option value={selectedCourse}>{selectedCourse}</option>
                      )}
                      
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

                  <button type="submit" className="glow-btn modal-submit-btn">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

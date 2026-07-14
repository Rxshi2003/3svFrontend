import React, { useState, useEffect } from 'react';
import './EnquiryModal.css';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Management Courses');
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
      {/* 1. Sticky Vertical 'Enquire Now!' Tab */}
      <button 
        className="sticky-enquire-tab"
        onClick={() => setIsOpen(true)}
        aria-label="Open Enquiry Form"
      >
        Enquire Now!
      </button>

      {/* 2. Floating WhatsApp Help Circles */}
      <a 
        href="https://wa.me/917738828132?text=Hello%203SV,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses."
        className="whatsapp-float float-left"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon SVG */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.236 3.465 5.212 3.463 8.378-.004 6.537-5.329 11.86-11.86 11.86-.001 0-.002 0-.003 0-2.001-.001-3.97-.521-5.713-1.512L0 24zm6.758-3.414c1.642.974 3.25 1.486 4.935 1.487 5.372 0 9.742-4.368 9.745-9.743.001-2.605-1.013-5.053-2.86-6.901C16.788 3.581 14.341 2.56 11.86 2.56c-5.378 0-9.748 4.37-9.75 9.745-.001 1.77.472 3.498 1.371 5.052L2.51 21.49l4.305-1.904zM17.65 14.86c-.322-.162-1.905-.941-2.2-.104-.297.359-.796.941-.976 1.144-.181.203-.362.228-.684.066-.322-.162-1.36-.5-2.59-1.6c-.958-.855-1.603-1.912-1.79-2.236-.188-.324-.02-.5-.181-.661-.146-.146-.322-.376-.484-.563-.16-.188-.214-.322-.322-.538-.108-.215-.054-.404-.027-.563.027-.162.297-.718.446-1.077.15-.36.2-.616.1-.817-.1-.202-.9-2.175-1.23-2.98-.324-.788-.655-.68-.97-.696-.25-.012-.538-.014-.827-.014-.289 0-.76.108-1.157.539-.398.431-1.517 1.484-1.517 3.618 0 2.133 1.554 4.194 1.772 4.49.217.297 3.058 4.67 7.408 6.554 1.035.448 1.843.715 2.472.915 1.04.33 1.987.284 2.735.173.832-.124 2.2-.9 2.508-1.77.308-.87.308-1.618.216-1.771-.093-.153-.341-.244-.664-.406z"/>
        </svg>
      </a>

      <a 
        href="https://wa.me/917738828132?text=Hello%203SV,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses."
        className="whatsapp-float float-right"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.236 3.465 5.212 3.463 8.378-.004 6.537-5.329 11.86-11.86 11.86-.001 0-.002 0-.003 0-2.001-.001-3.97-.521-5.713-1.512L0 24zm6.758-3.414c1.642.974 3.25 1.486 4.935 1.487 5.372 0 9.742-4.368 9.745-9.743.001-2.605-1.013-5.053-2.86-6.901C16.788 3.581 14.341 2.56 11.86 2.56c-5.378 0-9.748 4.37-9.75 9.745-.001 1.77.472 3.498 1.371 5.052L2.51 21.49l4.305-1.904zM17.65 14.86c-.322-.162-1.905-.941-2.2-.104-.297.359-.796.941-.976 1.144-.181.203-.362.228-.684.066-.322-.162-1.36-.5-2.59-1.6c-.958-.855-1.603-1.912-1.79-2.236-.188-.324-.02-.5-.181-.661-.146-.146-.322-.376-.484-.563-.16-.188-.214-.322-.322-.538-.108-.215-.054-.404-.027-.563.027-.162.297-.718.446-1.077.15-.36.2-.616.1-.817-.1-.202-.9-2.175-1.23-2.98-.324-.788-.655-.68-.97-.696-.25-.012-.538-.014-.827-.014-.289 0-.76.108-1.157.539-.398.431-1.517 1.484-1.517 3.618 0 2.133 1.554 4.194 1.772 4.49.217.297 3.058 4.67 7.408 6.554 1.035.448 1.843.715 2.472.915 1.04.33 1.987.284 2.735.173.832-.124 2.2-.9 2.508-1.77.308-.87.308-1.618.216-1.771-.093-.153-.341-.244-.664-.406z"/>
        </svg>
      </a>

      {/* 3. Enquiry Modal Backdrop & Form */}
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
                    <label htmlFor="modal-course">Course of Interest *</label>
                    <select
                      id="modal-course"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                      <option value="Management Courses">Management Courses</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain Management</option>
                      <option value="Lean & Six Sigma">Lean & Six Sigma Course</option>
                      <option value="Project Management">Project Management Courses</option>
                      <option value="Technical & Programming">Technical Courses & Computer Programming</option>
                      <option value="Excel & Analytics">Excel & Functional Analytics</option>
                      <option value="Management Consulting">Management Education Consulting</option>
                      <option value="Consulting & Service Management">Consulting, Training & Service Management</option>
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

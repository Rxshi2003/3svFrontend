import React from 'react';
import './Footer.css';
import logoImg from '../assets/images/3SVlogo.jpg';

export default function Footer({ onNavClick }) {
  const handleLinkClick = (target) => {
    onNavClick(target);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Col 1: Brand details */}
        <div className="footer-col brand-col">
          <div className="footer-logo" onClick={() => handleLinkClick('home')}>
            <img src={logoImg} alt="3SV Edumentors & Consultants Logo" style={{ height: '55px', borderRadius: '4px', objectFit: 'contain' }} />
          </div>
          <p className="brand-tagline-footer">Research | Innovation | Incubation</p>
          <p className="brand-description-footer">
            3SV Edumentors & Consultants offers premier education mentoring, customized tech training, and corporate consulting solutions.
          </p>
        </div>

        {/* Col 2: Course Catalog 1 */}
        <div className="footer-col list-col">
          <h4>Management Tracks</h4>
          <ul>
            <li><button onClick={() => handleLinkClick('courses')}>Management Courses</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Logistics & Supply Chain Courses</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Lean & Six Sigma Course</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Project Management Courses</button></li>
          </ul>
        </div>

        {/* Col 3: Course Catalog 2 */}
        <div className="footer-col list-col">
          <h4>Technical & Analytics</h4>
          <ul>
            <li><button onClick={() => handleLinkClick('courses')}>Technical and Programming Courses</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Advanced Excel Course</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Data/ Business and Functional Analytics</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Digital Marketing Courses</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Computerized Accounting Courses</button></li>
          </ul>
        </div>

        {/* Col 4: Site map links */}
        <div className="footer-col list-col">
          <h4>Useful Links</h4>
          <ul>
            <li><button onClick={() => handleLinkClick('home')}>Home</button></li>
            <li><button onClick={() => handleLinkClick('about')}>About Us</button></li>
            <li><button onClick={() => handleLinkClick('courses')}>Courses</button></li>
            <li><button onClick={() => handleLinkClick('faculty')}>Faculty</button></li>
            <li><button onClick={() => handleLinkClick('services')}>Services</button></li>
            <li><button onClick={() => handleLinkClick('placement')}>Placement</button></li>
            <li><button onClick={() => handleLinkClick('gallery')}>Gallery</button></li>
            <li><button onClick={() => handleLinkClick('contact')}>Contact Us</button></li>
          </ul>
        </div>

        {/* Col 5: Get in Touch Column (Blue Highlight) */}
        <div className="footer-col contact-col-card">
          <h4>Get in Touch</h4>
          
          <div className="contact-list-items">
            <a href="tel:+917738828132" className="footer-contact-item">
              <div className="footer-icon-wrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span>+91 7738828132</span>
            </a>

            <a href="mailto:svc.3sv@gmail.com" className="footer-contact-item">
              <div className="footer-icon-wrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>svc.3sv@gmail.com</span>
            </a>

            <div className="footer-contact-item align-top">
              <div className="footer-icon-wrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>Flat no. 6, Building no. 7, NL 5, Gangotri CHS. Ltd., Sector 3, Nerul, Navi Mumbai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Socials */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} 3SV Edumentors & Consultants. All Rights Reserved. Designed with creativity.
          </p>
          <div className="footer-social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/images/3SVlogo.jpg';

export default function Navbar({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Courses', target: 'courses' },
    { label: 'Faculty', target: 'faculty' },
    { 
      label: 'Services', 
      target: 'services',
      dropdownItems: [
        { label: 'Consultancy', target: 'services/consulting' },
        { label: 'Corporate Training', target: 'services/corporate-training' },
        { label: 'Entrepreneurship', target: 'services/entrepreneurship' },
        { label: 'Projects', target: 'services/projects' },
        { label: 'Research & Development', target: 'services/research-development' },
        { label: 'Center of Excellence', target: 'services/center-of-excellence' }
      ]
    },
    { 
      label: 'Placement', 
      target: 'placement',
      dropdownItems: [
        { label: 'Corporate Resources Center', target: 'placement/crc' }
      ]
    },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact Us', target: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target) => {
    setIsOpen(false);
    onNavClick(target);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar for Contact Info */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <a href="tel:+917738828132" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 7738828132</span>
            </a>
            <a href="mailto:svc.3sv@gmail.com" className="contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>svc.3sv@gmail.com</span>
            </a>
          </div>
          <div className="top-socials">
            <span className="timing-badge">Admission Open: 2026-27</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <div className="logo-area" onClick={() => handleLinkClick('home')}>
            <img src={logoImg} alt="3SV Edumentors & Consultants Logo" style={{ height: '55px', borderRadius: '4px', objectFit: 'contain' }} />
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.target} className={`nav-item-wrap ${item.dropdownItems ? 'has-dropdown' : ''}`}>
                <button
                  onClick={() => handleLinkClick(item.target)}
                  className={`nav-btn ${activeSection === item.target ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.dropdownItems && (
                    <svg className="chevron-down-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
                {item.dropdownItems && (
                  <ul className="dropdown-menu">
                    {item.dropdownItems.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <button 
                          className="dropdown-item-btn"
                          onClick={() => handleLinkClick(sub.target)}
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Action CTA Button */}
          <div className="nav-action">
            <button className="nav-cta-btn" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.target} className="mobile-nav-item">
                <button
                  onClick={() => handleLinkClick(item.target)}
                  className={`mobile-nav-btn ${activeSection === item.target ? 'active' : ''}`}
                >
                  {item.label}
                </button>
                {item.dropdownItems && (
                  <ul className="mobile-dropdown-menu">
                    {item.dropdownItems.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <button 
                          className="mobile-dropdown-item-btn"
                          onClick={() => handleLinkClick(sub.target)}
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button 
                className="mobile-nav-cta" 
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent('open-enquiry'));
                }}
              >
                Enquire Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
        { label: 'Consultancy', target: 'services' },
        { label: 'Corporate Training', target: 'services' },
        { label: 'Entrepreneurship', target: 'services' },
        { label: 'Projects', target: 'services' },
        { label: 'Research & Development', target: 'services' }
      ]
    },
    { 
      label: 'Placement', 
      target: 'placement',
      dropdownItems: [
        { label: 'Corporate Resources Center', target: 'placement' }
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
            <div className="logo-image-svg">
              <svg width="220" height="52" viewBox="0 0 220 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 3 Gears */}
                <circle cx="14" cy="30" r="5" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" fill="none"/>
                <circle cx="24" cy="24" r="4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" fill="none"/>
                <circle cx="20" cy="36" r="4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" fill="none"/>
                
                {/* Blue Graduate Figure */}
                <circle cx="28" cy="14" r="3" fill="#0055d4" />
                <polygon points="28,8 21,11 28,14 35,11" fill="#0033aa" />
                <rect x="27" y="11" width="2" height="1.5" fill="#0033aa" />
                <line x1="33" y1="12" x2="34" y2="15" stroke="#0033aa" strokeWidth="0.8" />
                <path d="M 17,39 C 23,37 31,32 31,21 C 31,18 29,18 27,19 C 27,27 22,32 14,34 C 13,37 15,39 17,39 Z" fill="#002288" />
                
                {/* Red 3S Text */}
                <text x="44" y="32" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="24" fill="#dc2626">3S</text>
                {/* V with red arrow head */}
                <path d="M 70,18 L 76,32 L 82,14 L 86,14 L 79,35 L 73,35 L 66,18 Z" fill="#dc2626"/>
                <polygon points="80,14 86,9 86,16" fill="#dc2626"/>
                
                {/* S-dot */}
                <circle cx="68" cy="31" r="3" fill="#f59e0b"/>
                
                {/* EDUMENTORS & CONSULTANTS text */}
                <text x="94" y="21" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="8.5" fill="#0033aa">EDUMENTORS &</text>
                <text x="94" y="31" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="8.5" fill="#0033aa">CONSULTANTS</text>
                
                {/* Tagline: Research | Innovation | Incubation */}
                <text x="44" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="7" fill="#475569">Research | Innovation | Incubation</text>
              </svg>
            </div>
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

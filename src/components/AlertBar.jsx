import React, { useState } from 'react';
import './AlertBar.css';

export default function AlertBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="alert-bar">
      <div className="alert-content">
        <div className="alert-badge">ANNOUNCEMENT</div>
        <div className="marquee-container">
          <div className="marquee-text">
            🚀 Adding new courses soon! Stay tuned.
          </div>
        </div>
      </div>
      <button className="alert-close" onClick={() => setIsVisible(false)} aria-label="Close Alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

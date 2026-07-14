import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Interactive Programming Lab",
      category: "labs",
      desc: "Our state-of-the-art laboratory where students solve daily coding drills under assistance.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      color: "gradient-blue"
    },
    {
      id: 2,
      title: "Placement Celebration 2026",
      category: "placements",
      desc: "Honoring our graduates who secured Software Engineer roles in Top MNCs this quarter.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M7 11.8V17c0 .8.8 1.5 2 2h6c1.2 0 2-.7 2-2v-5.2"></path>
        </svg>
      ),
      color: "gradient-gold"
    },
    {
      id: 3,
      title: "Annual Tech Hackathon",
      category: "events",
      desc: "A 24-hour collaborative coding event where students build fully functional prototypes.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      color: "gradient-purple"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Setup Workshop",
      category: "labs",
      desc: "Hands-on configuration of secure VPCs and CI/CD runners on cloud instances.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      color: "gradient-cyan"
    },
    {
      id: 5,
      title: "MNC Recruiter Job Fair",
      category: "placements",
      desc: "On-campus interviews hosted by top-tier tech employers with direct hiring pathways.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      color: "gradient-rose"
    },
    {
      id: 6,
      title: "Industry Expert Seminars",
      category: "events",
      desc: "IIT/IIM alumni delivering talks on data architectures and technical job trends.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      color: "gradient-indigo"
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LIFE AT ADHYAYAN</span>
          <h2 className="section-title">
            Our <span>Photo Gallery</span>
          </h2>
          <p className="section-desc">
            Explore snapshots of interactive learning environments, student success stories, hackathons, and corporate interview drives.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'labs' ? 'active' : ''}`}
            onClick={() => setFilter('labs')}
          >
            Classroom & Labs
          </button>
          <button 
            className={`filter-btn ${filter === 'placements' ? 'active' : ''}`}
            onClick={() => setFilter('placements')}
          >
            Placements
          </button>
          <button 
            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            Events & Seminars
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid animate-fade-in">
          {filteredItems.map((item) => (
            <div key={item.id} className={`gallery-card ${item.color}`}>
              <div className="card-illustration-box">
                {item.icon}
              </div>
              <div className="gallery-card-overlay">
                <span className="gallery-card-category">{item.category}</span>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

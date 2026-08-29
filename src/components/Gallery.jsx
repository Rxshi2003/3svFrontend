import React, { useState } from 'react';
import './Gallery.css';

import { galleryItems } from '../constants/constgallery.jsx';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LIFE AT 3SV</span>
          <h2 className="section-title">
            Our <span>Photo Gallery</span>
          </h2>
          <p className="section-desc">
            Explore real snapshots of our hybrid learning classrooms, active R&D collaborations, student achievements, and placement drives.
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
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setSelectedImage(item.image)}
            >
              <img src={item.image} alt={item.title} className="gallery-card-img" />
              <div className="gallery-card-overlay">
                <span className="gallery-card-category">
                  {item.category === 'labs' ? 'Classroom & Labs' : 
                   item.category === 'placements' ? 'Placements' : 
                   'Events & Seminars'}
                </span>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged gallery preview" className="lightbox-img" />
            <button className="lightbox-close-btn" onClick={() => setSelectedImage(null)} aria-label="Close Lightbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

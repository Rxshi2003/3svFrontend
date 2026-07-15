import React, { useState } from 'react';
import './Gallery.css';

// Import all 18 real photos
import img1 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-45.jpg';
import img2 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-49.jpg';
import img3 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-51.jpg';
import img4 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-56.jpg';
import img5 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-57.jpg';
import img6 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-58.jpg';
import img7 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-37-59.jpg';
import img8 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-00.jpg';
import img9 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-01.jpg';
import img10 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-02.jpg';
import img11 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-03.jpg';
import img12 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-04.jpg';
import img13 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-05.jpg';
import img14 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-06.jpg';
import img15 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-07.jpg';
import img16 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2024-08-29-13-38-08.jpg';
import img17 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2025-06-04-22-57-25.jpg';
import img18 from '../assets/Gallery-20260715T101156Z-1-001/Gallery/PHOTO-2025-06-04-22-58-17.jpg';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Interactive Classroom Discussion",
      category: "labs",
      image: img1,
      desc: "Daily peer coding reviews and mentor-guided theory application classes."
    },
    {
      id: 2,
      title: "Practical Coding Lab Session",
      category: "labs",
      image: img2,
      desc: "Our state-of-the-art computer labs hosting data analytics pipelines."
    },
    {
      id: 3,
      title: "Advanced Algorithms Workshop",
      category: "labs",
      image: img3,
      desc: "Students testing algorithms and debugging complex programming solutions."
    },
    {
      id: 4,
      title: "Project Collaboration Meet",
      category: "events",
      image: img4,
      desc: "Group brainstorming sessions for final capstone product developments."
    },
    {
      id: 5,
      title: "Corporate Mentor Review",
      category: "placements",
      image: img5,
      desc: "One-on-one portfolio evaluations from industry experts before drives."
    },
    {
      id: 6,
      title: "Mock Placement Interviews",
      category: "placements",
      image: img6,
      desc: "Direct interview preparation and technical feedback round reviews."
    },
    {
      id: 7,
      title: "Technical Seminar Presentation",
      category: "events",
      image: img7,
      desc: "Guest lectures addressing system scale and engineering practices."
    },
    {
      id: 8,
      title: "Industry Expert Guest Lecture",
      category: "events",
      image: img8,
      desc: "Prominent industry leaders giving insights on standard processes."
    },
    {
      id: 9,
      title: "Hackathon Pitch Session",
      category: "events",
      image: img9,
      desc: "Teams presenting their functional models after 24-hour sprints."
    },
    {
      id: 10,
      title: "Team Incubator Discussion",
      category: "labs",
      image: img10,
      desc: "Brainstorming sessions targeting product launch metrics."
    },
    {
      id: 11,
      title: "Placement Selection Day",
      category: "placements",
      image: img11,
      desc: "Students finalizing their offers and celebrating placement milestones."
    },
    {
      id: 12,
      title: "Industry-Academia Summit",
      category: "events",
      image: img12,
      desc: "Keynotes on bridging modern tooling trends with standard curricula."
    },
    {
      id: 13,
      title: "Hands-on Development Practice",
      category: "labs",
      image: img13,
      desc: "Individual code execution and systems verification in progress."
    },
    {
      id: 14,
      title: "Annual Placement Drive",
      category: "placements",
      image: img14,
      desc: "On-campus recruiting panels selecting final batch candidates."
    },
    {
      id: 15,
      title: "Design Thinking Bootcamp",
      category: "events",
      image: img15,
      desc: "Interactive workshops building creative project concepts."
    },
    {
      id: 16,
      title: "Project Mentorship Review",
      category: "labs",
      image: img16,
      desc: "Deep review sessions focused on refinement and deployment paths."
    },
    {
      id: 17,
      title: "Corporate Resource Meet 2025",
      category: "placements",
      image: img17,
      desc: "Honoring relationships with recruiters across prime domains."
    },
    {
      id: 18,
      title: "Grand Tech Seminar 2025",
      category: "events",
      image: img18,
      desc: "Full-house keynote addressing advancements in system logic."
    }
  ];

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

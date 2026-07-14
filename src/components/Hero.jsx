import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBanner from 'C:/Users/HP/.gemini/antigravity-ide/brain/8a36b3f9-f036-4342-84ec-de75fd142537/hero_banner_1783958302518.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Management & Strategic Advisory",
      subtitle: "Optimize processes. Lead organizational growth.",
      desc: "Acquire specialized competencies in general management, corporate governance, strategy audits, and leadership frameworks designed under expert advisory.",
      tags: ["Strategy", "Management", "Operations", "Governance", "Leadership"],
      badge: "In Demand"
    },
    {
      title: "Logistics & Supply Chain Management",
      subtitle: "Streamline inventories. Optimize logistics.",
      desc: "Master warehouse layout structures, procurement protocols, global freight forwarding, and inventory optimization frameworks to run flawless operations.",
      tags: ["Logistics", "Supply Chain", "Procurement", "Warehousing", "Freight"],
      badge: "Certification"
    },
    {
      title: "Lean & Six Sigma Quality Systems",
      subtitle: "Analyze metrics. Eliminate process waste.",
      desc: "Learn quality control blueprints, DMAIC execution, process audits, and Kaizen improvement cycles to deliver quality services and training management.",
      tags: ["Six Sigma", "Lean Systems", "Quality Audit", "DMAIC", "Kaizen"],
      badge: "Trending"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        {/* Left Side: Dynamic Text Slider */}
        <div className="hero-content">
          <div className="hero-slides-wrapper">
            {slides.map((slide, idx) => (
              <div key={idx} className={`hero-slide-item ${idx === currentSlide ? 'active' : ''}`}>
                <div className="slide-badge-row">
                  <span className="slide-badge">{slide.badge}</span>
                </div>
                <h1 className="hero-title">
                  {slide.title}
                </h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
                <p className="hero-desc">{slide.desc}</p>
                
                <div className="hero-tags">
                  {slide.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="hero-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button className="glow-btn" onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry'))}>
              Get Free Career Counseling
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="outline-btn" onClick={() => {
              window.location.hash = '#/courses';
            }}>
              Explore Courses
            </button>
          </div>

          {/* Slide Indicators & Controls */}
          <div className="hero-controls">
            <div className="slider-arrows">
              <button onClick={prevSlide} className="arrow-btn" aria-label="Previous Slide">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button onClick={nextSlide} className="arrow-btn" aria-label="Next Slide">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="slide-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Generated Graphic Art */}
        <div className="hero-graphic">
          <div className="graphic-glow-underlay"></div>
          <img 
            src={heroBanner} 
            alt="3SV Edumentors and Consultants Banner" 
            className="hero-banner-img animate-float"
          />
        </div>
      </div>
      
      {/* Background visual shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </section>
  );
}

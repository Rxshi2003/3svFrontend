import React, { useState, useEffect } from 'react';
import './Hero.css';
import { heroBanner } from '../constants/constgeneratedassets.jsx';

import { slides } from '../constants/consthero.jsx';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

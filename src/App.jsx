import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AlertBar from './components/AlertBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Opportunities from './components/Opportunities';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import FacultyDetails from './components/FacultyDetails';
import Services from './components/Services';
import Placement from './components/Placement';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [route, setRoute] = useState({ path: 'home', param: 'home' });
  const [activeSection, setActiveSection] = useState('home');

  // Parse the current URL hash
  const parseHash = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/faculty/')) {
      const facultyId = hash.replace('#/faculty/', '');
      return { path: 'faculty-detail', param: facultyId };
    }
    // Otherwise, parse the hash as a section or default to 'home'
    const section = hash.replace('#', '') || 'home';
    return { path: 'home', param: section };
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    // Parse initial route on load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle routing navigation clicks
  const handleNavClick = (target) => {
    if (route.path === 'home' && window.location.hash === `#${target}`) {
      const el = document.getElementById(target);
      if (el) {
        const headerOffset = 110;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(target);
      }
    } else {
      window.location.hash = `#${target}`;
    }
  };

  // Scroll to section when route matches home and a section parameter is specified
  useEffect(() => {
    if (route.path === 'home') {
      const target = route.param || 'home';
      const el = document.getElementById(target);
      if (el) {
        const timer = setTimeout(() => {
          const headerOffset = 110;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setActiveSection(target);
        }, 100);
        return () => clearTimeout(timer);
      }
    } else if (route.path === 'faculty-detail') {
      setActiveSection('faculty');
    }
  }, [route]);

  // Setup intersection observer to dynamically highlight nav tabs on scroll
  useEffect(() => {
    if (route.path !== 'home') return;

    const sections = ['home', 'about', 'courses', 'faculty', 'services', 'placement', 'gallery', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies core viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [route.path]);

  return (
    <>
      {/* Dynamic Navigation Header */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      
      {/* Sections Wrapper */}
      <main className="main-content">
        {route.path === 'faculty-detail' ? (
          <FacultyDetails facultyId={route.param} />
        ) : (
          <>
            {/* prebooking promo banner */}
            <AlertBar />

            {/* Home */}
            <Hero />
            
            {/* About Us (comprising Welcome intro and Opportunities features) */}
            <Welcome />
            <Opportunities />
            
            {/* Courses Catalog Grid */}
            <Courses />
            
            {/* Faculty profiles */}
            <Faculty />
            
            {/* Value-added Career services */}
            <Services />
            
            {/* Placement Section */}
            <Placement />
            
            {/* Photo Gallery Grid */}
            <Gallery />
            
            {/* Contact Form & Office info */}
            <Contact />
          </>
        )}
      </main>

      {/* Footer details */}
      <Footer onNavClick={handleNavClick} />

      {/* Floating enquiry modal & WhatsApp triggers */}
      <EnquiryModal />
    </>
  );
}


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AlertBar from './components/AlertBar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import FacultyDetails from './components/FacultyDetails';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import FacultyPage from './pages/FacultyPage';
import ServicesOverview from './pages/ServicesOverview';
import Consultancy from './pages/services/Consultancy';
import CorporateTraining from './pages/services/CorporateTraining';
import Entrepreneurship from './pages/services/Entrepreneurship';
import Projects from './pages/services/Projects';
import ResearchDevelopment from './pages/services/ResearchDevelopment';
import PlacementOverview from './pages/placement/PlacementOverview';
import CorporateResourceCenter from './pages/placement/CorporateResourceCenter';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import CenterOfExcellence from './pages/services/CenterOfExcellence';

export default function App() {
  const [route, setRoute] = useState({ path: 'home', param: 'home' });

  // Parse the current URL hash
  const parseHash = () => {
    const hash = window.location.hash || '#/home';
    if (hash.startsWith('#/faculty/')) {
      const facultyId = hash.replace('#/faculty/', '');
      return { path: 'faculty-detail', param: facultyId };
    }
    const cleanHash = hash.replace('#', '');
    if (cleanHash === '/about' || cleanHash === 'about') return { path: 'about' };
    if (cleanHash === '/courses' || cleanHash === 'courses') return { path: 'courses' };
    if (cleanHash === '/faculty' || cleanHash === 'faculty') return { path: 'faculty' };
    if (cleanHash === '/services/consulting' || cleanHash === 'services/consulting') return { path: 'services-consulting' };
    if (cleanHash === '/services/corporate-training' || cleanHash === 'services/corporate-training') return { path: 'services-corporate-training' };
    if (cleanHash === '/services/entrepreneurship' || cleanHash === 'services/entrepreneurship') return { path: 'services-entrepreneurship' };
    if (cleanHash === '/services/projects' || cleanHash === 'services/projects') return { path: 'services-projects' };
    if (cleanHash === '/services/research-development' || cleanHash === 'services/research-development') return { path: 'services-rd' };
    if (cleanHash === '/services/center-of-excellence' || cleanHash === 'services/center-of-excellence') return { path: 'services-coe' };
    if (cleanHash === '/services' || cleanHash === 'services') return { path: 'services' };
    if (cleanHash === '/placement/crc' || cleanHash === 'placement/crc') return { path: 'placement-crc' };
    if (cleanHash === '/placement' || cleanHash === 'placement') return { path: 'placement' };
    if (cleanHash === '/gallery' || cleanHash === 'gallery') return { path: 'gallery' };
    if (cleanHash === '/contact' || cleanHash === 'contact') return { path: 'contact' };
    return { path: 'home' };
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Parse initial route on load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle routing navigation clicks
  const handleNavClick = (target) => {
    window.location.hash = `#/${target}`;
  };

  // Determine active section for nav highlight
  const getActiveSection = (path) => {
    if (path.startsWith('services-') || path === 'services') return 'services';
    if (path.startsWith('placement-') || path === 'placement') return 'placement';
    if (path === 'faculty-detail') return 'faculty';
    return path;
  };

  const renderContent = () => {
    switch (route.path) {
      case 'about':
        return <About />;
      case 'courses':
        return <CoursesPage />;
      case 'faculty':
        return <FacultyPage />;
      case 'faculty-detail':
        return <FacultyDetails facultyId={route.param} />;
      case 'services-consulting':
        return <Consultancy />;
      case 'services-corporate-training':
        return <CorporateTraining />;
      case 'services-entrepreneurship':
        return <Entrepreneurship />;
      case 'services-projects':
        return <Projects />;
      case 'services-rd':
        return <ResearchDevelopment />;
      case 'services-coe':
        return <CenterOfExcellence />;
      case 'services':
        return <ServicesOverview />;
      case 'placement-crc':
        return <CorporateResourceCenter />;
      case 'placement':
        return <PlacementOverview />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Dynamic Navigation Header */}
      <Navbar activeSection={getActiveSection(route.path)} onNavClick={handleNavClick} />
      
      {/* Sections Wrapper */}
      <main className="main-content">
        {route.path === 'home' && <AlertBar />}
        {renderContent()}
      </main>

      {/* Footer details */}
      <Footer onNavClick={handleNavClick} />

      {/* Floating enquiry modal & Chatbot assistant */}
      <EnquiryModal />
      <Chatbot />
    </>
  );
}

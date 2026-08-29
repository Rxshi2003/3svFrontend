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
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import ProfileSetup from './pages/ProfileSetup';

// ─── Pure routing function (outside component — no stale closure risk) ────────
function parseHash(hash) {
  const h = hash || window.location.hash || '#/home';

  // Sub-path routes must be checked FIRST (before single-segment matches)
  if (h.startsWith('#/faculty/')) {
    return { path: 'faculty-detail', param: h.replace('#/faculty/', '') };
  }
  if (h.startsWith('#/courses/')) {
    const courseId = h.replace('#/courses/', '').split('?')[0]; // strip query strings
    return { path: 'course-detail', param: courseId };
  }

  const clean = h.replace(/^#\/?/, ''); // strip leading #/ or #
  switch (clean) {
    case 'about':                       return { path: 'about' };
    case 'courses':                     return { path: 'courses' };
    case 'faculty':                     return { path: 'faculty' };
    case 'services/consulting':         return { path: 'services-consulting' };
    case 'services/corporate-training': return { path: 'services-corporate-training' };
    case 'services/entrepreneurship':   return { path: 'services-entrepreneurship' };
    case 'services/projects':           return { path: 'services-projects' };
    case 'services/research-development': return { path: 'services-rd' };
    case 'services/center-of-excellence': return { path: 'services-coe' };
    case 'services':                    return { path: 'services' };
    case 'placement/crc':               return { path: 'placement-crc' };
    case 'placement':                   return { path: 'placement' };
    case 'gallery':                     return { path: 'gallery' };
    case 'contact':                     return { path: 'contact' };
    case 'login':                       return { path: 'login' };
    case 'dashboard':                   return { path: 'dashboard' };
    case 'profile-setup':               return { path: 'profile-setup' };
    default:                            return { path: 'home' };
  }
}

function getActiveSection(path) {
  if (path.startsWith('services-') || path === 'services') return 'services';
  if (path.startsWith('placement-') || path === 'placement') return 'placement';
  if (path === 'faculty-detail') return 'faculty';
  if (path === 'course-detail') return 'courses';
  return path;
}
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  // Session validation on mount
  useEffect(() => {
    if (!token) return;
    const validateSession = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Session expired');
        const data = await res.json();
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } catch (err) {
        console.error('Session validation failed:', err.message);
        handleLogout();
      }
    };
    validateSession();
  }, [token]);

  // ── Master navigation handler ────────────────────────────────────────────
  const navigate = (parsedRoute) => {
    // Auth guards
    if (parsedRoute.path === 'dashboard' && !user) {
      window.location.hash = '#/login';
      return;
    }
    if (parsedRoute.path === 'profile-setup' && !user) {
      window.location.hash = '#/login';
      return;
    }
    if (parsedRoute.path === 'login' && user) {
      window.location.hash = '#/dashboard';
      return;
    }
    setRoute(parsedRoute);
    window.scrollTo(0, 0);
  };

  // ── Listen to hashchange events ─────────────────────────────────────────
  useEffect(() => {
    const onHashChange = () => {
      navigate(parseHash(window.location.hash));
    };
    window.addEventListener('hashchange', onHashChange);
    // Re-parse on mount in case the initial hash was set before listener attached
    navigate(parseHash(window.location.hash));
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [user]); // re-register when user changes so auth guards use fresh value

  // ── Listen to custom 'app-navigate' events fired by child components ────
  // This lets Courses/CourseDetail call navigate without relying on hashchange
  useEffect(() => {
    const onNavigate = (e) => {
      const { hash, route: directRoute } = e.detail || {};
      if (directRoute) {
        // Directly set route (bypasses hashchange for instant navigation)
        navigate(directRoute);
        if (hash) window.history.replaceState(null, '', hash);
      } else if (hash) {
        window.location.hash = hash;
      }
    };
    window.addEventListener('app-navigate', onNavigate);
    return () => window.removeEventListener('app-navigate', onNavigate);
  }, [user]);

  // ── Auth callbacks ───────────────────────────────────────────────────────
  const handleLoginSuccess = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.hash = '#/home';
  };

  const handleProfileUpdate = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem('user', JSON.stringify(updatedUserData));
  };

  const handleNavClick = (target) => {
    window.location.hash = `#/${target}`;
  };

  // ── Render ───────────────────────────────────────────────────────────────
  const renderContent = () => {
    switch (route.path) {
      case 'about':                     return <About />;
      case 'courses':                   return <CoursesPage />;
      case 'course-detail':             return <CourseDetail courseId={route.param} />;
      case 'faculty':                   return <FacultyPage />;
      case 'faculty-detail':            return <FacultyDetails facultyId={route.param} />;
      case 'services-consulting':       return <Consultancy />;
      case 'services-corporate-training': return <CorporateTraining />;
      case 'services-entrepreneurship': return <Entrepreneurship />;
      case 'services-projects':         return <Projects />;
      case 'services-rd':               return <ResearchDevelopment />;
      case 'services-coe':              return <CenterOfExcellence />;
      case 'services':                  return <ServicesOverview />;
      case 'placement-crc':             return <CorporateResourceCenter />;
      case 'placement':                 return <PlacementOverview />;
      case 'gallery':                   return <GalleryPage />;
      case 'contact':                   return <ContactPage />;
      case 'login':                     return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'profile-setup':             return <ProfileSetup user={user} token={token} onProfileUpdate={handleProfileUpdate} />;
      case 'dashboard':                 return <Dashboard user={user} onLogout={handleLogout} onProfileUpdate={handleProfileUpdate} />;
      case 'home':
      default:                          return <Home />;
    }
  };

  return (
    <>
      <Navbar
        activeSection={getActiveSection(route.path)}
        onNavClick={handleNavClick}
        user={user}
        onLogout={handleLogout}
      />
      <main className="main-content">
        {route.path === 'home' && <AlertBar />}
        {renderContent()}
      </main>
      <Footer onNavClick={handleNavClick} />
      <EnquiryModal />
      <Chatbot />
    </>
  );
}

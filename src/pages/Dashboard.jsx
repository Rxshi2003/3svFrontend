import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({ user, onLogout, onProfileUpdate }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Input states for settings
  const [profileName, setProfileName] = useState(user?.name || '');
  const [profileEmail, setProfileEmail] = useState(user?.email || '');
  const [profilePhone, setProfilePhone] = useState(user?.phone || '');
  const [profileBio, setProfileBio] = useState(user?.bio || '');
  const [profilePhoto, setProfilePhoto] = useState(user?.photoUrl || '');

  const [highestQual, setHighestQual] = useState(user?.highestQual || '');
  const [institution, setInstitution] = useState(user?.institution || '');
  const [gradYear, setGradYear] = useState(user?.gradYear || '');
  const [skills, setSkills] = useState(user?.skills || '');

  // Format Account Created Date
  const formatJoinedDate = (dateStr) => {
    if (!dateStr) return 'July 2026';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Capitalize Role name for Badge
  const getRoleBadge = (role) => {
    if (!role) return 'User';
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'student': return '🎓';
      case 'corporate': return '🏢';
      case 'faculty': return '👨‍🏫';
      default: return '👤';
    }
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (!profileName.trim() || !profileEmail.trim()) {
      alert('Name and Email are required.');
      return;
    }

    const updatedUser = {
      ...user,
      name: profileName.trim(),
      email: profileEmail.trim(),
      phone: profilePhone.trim(),
      bio: profileBio.trim(),
      photoUrl: profilePhoto.trim(),
      highestQual: highestQual.trim(),
      institution: institution.trim(),
      gradYear: gradYear.trim(),
      skills: skills.trim()
    };

    onProfileUpdate(updatedUser);
    alert('Settings updated successfully!');
  };

  // Render role-specific main widgets
  const renderRoleWidgets = () => {
    const role = user?.role || 'user';

    switch (role) {
      case 'student':
        return (
          <div className="role-dashboard-grid">
            <div className="dashboard-widget card-enrolled-courses glass">
              <h3>Enrolled Courses</h3>
              <div className="courses-list">
                <div className="course-progress-item">
                  <div className="course-progress-header">
                    <span>Full Stack Development Masterclass</span>
                    <span className="progress-percentage">68%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '68%' }}></div>
                  </div>
                  <p className="course-meta">Next class: Saturday at 10:00 AM</p>
                </div>
                <div className="course-progress-item">
                  <div className="course-progress-header">
                    <span>UI/UX Design Essentials</span>
                    <span className="progress-percentage">35%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '35%' }}></div>
                  </div>
                  <p className="course-meta">Assignment due in 2 days</p>
                </div>
                <div className="course-progress-item">
                  <div className="course-progress-header">
                    <span>Data Science & AI BootCamp</span>
                    <span className="progress-percentage">12%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: '12%' }}></div>
                  </div>
                  <p className="course-meta">14 lectures remaining</p>
                </div>
              </div>
            </div>

            <div className="dashboard-widget card-upcoming-events glass">
              <h3>Upcoming Live Webinars</h3>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-date">
                    <span className="event-day">28</span>
                    <span className="event-month">Jul</span>
                  </div>
                  <div className="event-details">
                    <h4>Industry Trends in Generative AI</h4>
                    <p>Speaker: Dr. Amit Sharma (IIT Bombay)</p>
                    <span className="event-time">5:00 PM - 6:30 PM</span>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <span className="event-day">04</span>
                    <span className="event-month">Aug</span>
                  </div>
                  <div className="event-details">
                    <h4>Corporate Placement Prep Session</h4>
                    <p>Speaker: Sneha Patel (HR Director, TCS)</p>
                    <span className="event-time">2:00 PM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-widget card-downloads glass">
              <h3>Study Resources</h3>
              <ul className="download-list">
                <li>
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <span className="file-name">MERN Stack Syllabus v2.pdf</span>
                    <span className="file-size">2.4 MB</span>
                  </div>
                  <button className="download-btn">Download</button>
                </li>
                <li>
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <span className="file-name">React State Management Handout.pdf</span>
                    <span className="file-size">1.8 MB</span>
                  </div>
                  <button className="download-btn">Download</button>
                </li>
                <li>
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <span className="file-name">UI Design Checklist.pdf</span>
                    <span className="file-size">850 KB</span>
                  </div>
                  <button className="download-btn">Download</button>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="role-dashboard-grid">
            <div className="dashboard-widget card-corporate-stats glass">
              <h3>Training Programs Overview</h3>
              <div className="stats-row">
                <div className="stat-card">
                  <span className="stat-num">3</span>
                  <span className="stat-label">Active Cohorts</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">84</span>
                  <span className="stat-label">Employees Trained</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">96%</span>
                  <span className="stat-label">Satisfaction Score</span>
                </div>
              </div>
            </div>

            <div className="dashboard-widget card-consultancy-milestones glass">
              <h3>Milestones</h3>
              <ul className="milestone-list">
                <li className="milestone-item done">
                  <div className="milestone-bullet">✓</div>
                  <div className="milestone-text">
                    <h4>Requirement Analysis Phase</h4>
                    <p>Completed on July 10, 2026</p>
                  </div>
                </li>
                <li className="milestone-item active">
                  <div className="milestone-bullet">●</div>
                  <div className="milestone-text">
                    <h4>Architecture Design Draft</h4>
                    <p>In Review - Expected by July 28</p>
                  </div>
                </li>
                <li className="milestone-item pending">
                  <div className="milestone-bullet">○</div>
                  <div className="milestone-text">
                    <h4>Proof of Concept Delivery</h4>
                    <p>Scheduled for August 15</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dashboard-widget card-proposal-form glass">
              <h3>Request New Training / Consulting Proposal</h3>
              <p className="form-description">Submit your project details and our senior directors will compile a proposal outline for your firm.</p>
              <form className="proposal-quick-form" onSubmit={(e) => { e.preventDefault(); alert('Request submitted! Our consultancy board will contact you shortly.'); }}>
                <div className="form-group-dash">
                  <input type="text" placeholder="Project Name / Focus Area" required />
                </div>
                <div className="form-group-dash">
                  <textarea placeholder="Briefly describe your objectives or employee strength" rows="3" required></textarea>
                </div>
                <button type="submit" className="dash-btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        );

      case 'faculty':
        return (
          <div className="role-dashboard-grid">
            <div className="dashboard-widget card-teaching-cohorts glass">
              <h3>Teaching Classes</h3>
              <div className="cohorts-grid">
                <div className="cohort-card">
                  <div className="cohort-banner">Batch A</div>
                  <h4>Advanced Python & Algorithms</h4>
                  <p className="cohort-details">Mondays, Wednesdays | 7:00 PM</p>
                  <p className="cohort-students">👥 28 Students</p>
                </div>
                <div className="cohort-card">
                  <div className="cohort-banner">Batch C</div>
                  <h4>Cloud Architecture & Devops</h4>
                  <p className="cohort-details">Saturdays | 2:00 PM</p>
                  <p className="cohort-students">👥 42 Students</p>
                </div>
              </div>
            </div>

            <div className="dashboard-widget card-grading-queue glass">
              <h3>Grading & Review Queue</h3>
              <ul className="todo-list">
                <li className="todo-item-dash">
                  <div className="todo-content">
                    <h4>Python OOP Assignment 3</h4>
                    <p>8 pending submissions need grading</p>
                  </div>
                  <button className="todo-action-btn">Grade</button>
                </li>
                <li className="todo-item-dash">
                  <div className="todo-content">
                    <h4>VPC Cloud Design Project Proposals</h4>
                    <p>14 submissions ready for feedback</p>
                  </div>
                  <button className="todo-action-btn">Review</button>
                </li>
              </ul>
            </div>

            <div className="dashboard-widget card-upload-resource glass">
              <h3>Upload Lecture Notes & Slides</h3>
              <form className="upload-dash-form" onSubmit={(e) => { e.preventDefault(); alert('File uploaded and announced to all students in the cohort.'); }}>
                <div className="form-group-dash">
                  <select defaultValue="">
                    <option value="" disabled>Select Cohort Batch</option>
                    <option value="batch-a">Batch A - Advanced Python</option>
                    <option value="batch-c">Batch C - Cloud Architecture</option>
                  </select>
                </div>
                <div className="form-group-dash">
                  <input type="text" placeholder="Resource Title (e.g. Lecture 4 Slides)" required />
                </div>
                <div className="form-group-dash">
                  <input type="file" className="file-input-dash" required />
                </div>
                <button type="submit" className="dash-btn-primary">Upload & Publish</button>
              </form>
            </div>
          </div>
        );

      case 'user':
      default:
        return (
          <div className="role-dashboard-grid">
            <div className="dashboard-widget card-enquiries glass">
              <h3>Your Enquiries Status</h3>
              <div className="enquiries-history">
                <div className="enquiry-row resolved">
                  <div className="enquiry-info">
                    <h4>Course inquiry: Full Stack Development program details</h4>
                    <p className="enquiry-date">Submitted: July 20, 2026</p>
                  </div>
                  <span className="status-badge solved">Resolved</span>
                </div>
                <div className="enquiry-row pending">
                  <div className="enquiry-info">
                    <h4>Consulting inquiry: Corporate training for IT managers</h4>
                    <p className="enquiry-date">Submitted: Today</p>
                  </div>
                  <span className="status-badge wait">Pending</span>
                </div>
              </div>
            </div>

            <div className="dashboard-widget card-brochures glass">
              <h3>Download Official Brochure</h3>
              <p>Get full details about 3SV Edumentors training tracks, consultancy sectors, and success milestones.</p>
              <div className="brochure-download-container">
                <button className="dash-btn-primary" onClick={() => alert('Downloading 3SV Corporate Brochure 2026-27.pdf...')}>
                  📥 Corporate Brochure 2026
                </button>
                <button className="dash-btn-secondary" onClick={() => alert('Downloading 3SV Academics Course Catalog.pdf...')}>
                  📥 Academic Course Catalog
                </button>
              </div>
            </div>

            <div className="dashboard-widget card-appointment glass">
              <h3>Schedule a Consultation Call</h3>
              <p>Book a free 1-on-1 virtual call with our principal counselors to outline your learning roadmap or research outline.</p>
              <div className="appointment-card-body">
                <div className="appointment-promo">
                  <span className="promo-tag">Free 30 Mins Session</span>
                  <h4>Connect with Senior Advisors</h4>
                </div>
                <button className="dash-btn-primary" onClick={() => alert('Redirecting to consultation booking calendar...')}>
                  Book Live Video Session
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="dashboard-section">
      <div className="dashboard-bg-glows">
        <div className="db-glow db-glow-1"></div>
        <div className="db-glow db-glow-2"></div>
      </div>

      <div className="container dashboard-container">
        {/* Left Sidebar */}
        <aside className="dashboard-sidebar glass">
          <div className="user-profile-header">
            <div className="user-avatar-circle">
              {user?.photoUrl ? (
                <img src={user.photoUrl} alt={user.name} className="user-avatar-img" />
              ) : (
                getRoleIcon(user?.role)
              )}
            </div>
            <div className="user-profile-summary">
              <h3>{user?.name || 'User Profile'}</h3>
              <span className="user-role-badge">
                {getRoleBadge(user?.role)}
              </span>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Dashboard Overview
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile Information
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings & Account
            </button>
            <button 
              className="sidebar-link logout-link"
              onClick={onLogout}
            >
              🚪 Sign Out
            </button>
          </nav>
        </aside>

        {/* Right Content Area */}
        <main className="dashboard-main-content">
          {/* Welcome Banner */}
          <div className="welcome-banner-card glass">
            <h2>Welcome back, <span>{user?.name || 'Guest User'}</span>!</h2>
            <p>Here is what's happening with your account today. You are currently logged in as a <strong>{getRoleBadge(user?.role)}</strong>.</p>
          </div>

          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="tab-fade-in">
              {renderRoleWidgets()}
            </div>
          )}

          {/* Profile Details Tab Content */}
          {activeTab === 'profile' && (
            <div className="dashboard-widget profile-details-card glass tab-fade-in">
              <h3>Account Profile Information</h3>
              <p className="profile-intro-text">This information governs your certifications and training logs at 3SV.</p>
              
              {user?.bio && (
                <div className="profile-bio-box">
                  <h4>Short Bio</h4>
                  <p>{user.bio}</p>
                </div>
              )}

              <div className="profile-fields-grid">
                <div className="profile-field">
                  <span className="field-label">Full Registered Name</span>
                  <span className="field-value">{user?.name}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Verified Email Address</span>
                  <span className="field-value">{user?.email}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Contact Phone</span>
                  <span className="field-value">{user?.phone || 'Not specified'}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">System User ID (UID)</span>
                  <span className="field-value">#3SV-{user?.id || '0000'}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Assigned Access Role</span>
                  <span className="field-value badge-role-value">{getRoleBadge(user?.role)}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Account Registration Date</span>
                  <span className="field-value">{formatJoinedDate(user?.createdAt)}</span>
                </div>

                {user?.currentLocation && (
                  <div className="profile-field">
                    <span className="field-label">Current Location</span>
                    <span className="field-value">📍 {user.currentLocation}</span>
                  </div>
                )}
                {user?.dressSize && (
                  <div className="profile-field">
                    <span className="field-label">Dress Size</span>
                    <span className="field-value">👕 {user.dressSize}</span>
                  </div>
                )}
                {user?.highestQual && (
                  <div className="profile-field">
                    <span className="field-label">Highest Qualification</span>
                    <span className="field-value">{user.highestQual}</span>
                  </div>
                )}
                {user?.institution && (
                  <div className="profile-field">
                    <span className="field-label">Educational Institution</span>
                    <span className="field-value">{user.institution}</span>
                  </div>
                )}
                {user?.gradYear && (
                  <div className="profile-field">
                    <span className="field-label">Graduation Year</span>
                    <span className="field-value">{user.gradYear}</span>
                  </div>
                )}
                {user?.skills && (
                  <div className="profile-field">
                    <span className="field-label">Skills & Interests</span>
                    <span className="field-value">{user.skills}</span>
                  </div>
                )}
              </div>

              {/* Address Details */}
              {user?.address && (user.address.houseNo || user.address.city) && (
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                    🏠 Address Details
                  </h4>
                  <div className="profile-fields-grid">
                    <div className="profile-field">
                      <span className="field-label">Flat / House No</span>
                      <span className="field-value">{user.address.houseNo || 'N/A'}</span>
                    </div>
                    {user.address.addressLine2 && (
                      <div className="profile-field">
                        <span className="field-label">Address Line 2</span>
                        <span className="field-value">{user.address.addressLine2}</span>
                      </div>
                    )}
                    <div className="profile-field">
                      <span className="field-label">City</span>
                      <span className="field-value">{user.address.city || 'N/A'}</span>
                    </div>
                    <div className="profile-field">
                      <span className="field-label">State</span>
                      <span className="field-value">{user.address.state || 'N/A'}</span>
                    </div>
                    <div className="profile-field">
                      <span className="field-label">Pincode</span>
                      <span className="field-value">{user.address.pincode || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Educational Qualifications List */}
              {Array.isArray(user?.education) && user.education.length > 0 && (
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>
                    🎓 Educational Qualifications ({user.education.length})
                  </h4>
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {user.education.map((edu, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          padding: '16px', 
                          borderRadius: '10px', 
                          background: 'rgba(79, 70, 229, 0.04)', 
                          border: '1px solid rgba(79, 70, 229, 0.1)' 
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase' }}>
                            {edu.degree || edu.level}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: '600', padding: '2px 8px', borderRadius: '4px', background: edu.status === 'graduated' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)', color: edu.status === 'graduated' ? '#16a34a' : '#d97706' }}>
                            {edu.status || 'Completed'}
                          </span>
                        </div>
                        <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text-dark)' }}>
                          <strong>School / College:</strong> {edu.college || 'N/A'}
                        </p>
                        {edu.specialization && (
                          <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text-light)' }}>
                            <strong>Specialization:</strong> {edu.specialization}
                          </p>
                        )}
                        <div style={{ display: 'flex', gap: '20px', marginTop: '8px', fontSize: '12px', color: 'var(--text-light)' }}>
                          <span><strong>Marks/CGPA:</strong> {edu.marks || 'N/A'}</span>
                          {edu.yearOfCompletion && <span><strong>Year:</strong> {edu.yearOfCompletion}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Experience List */}
              {Array.isArray(user?.workExperience) && user.workExperience.length > 0 && (
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>
                    💼 Work Experience ({user.workExperience.length})
                  </h4>
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {user.workExperience.map((exp, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          padding: '16px', 
                          borderRadius: '10px', 
                          background: 'rgba(79, 70, 229, 0.04)', 
                          border: '1px solid rgba(79, 70, 229, 0.1)' 
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)' }}>
                            {exp.jobTitle || 'Role'}
                          </span>
                          {exp.duration && (
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary)' }}>
                              {exp.duration}
                            </span>
                          )}
                        </div>
                        <p style={{ margin: '2px 0 6px', fontSize: '13px', color: 'var(--primary)', fontWeight: '600' }}>
                          🏢 {exp.company || 'Company'}
                        </p>
                        {exp.description && (
                          <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text-light)' }}>
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab Content */}
          {activeTab === 'settings' && (
            <div className="dashboard-widget settings-card glass tab-fade-in">
              <h3>Account Settings & Options</h3>
              <p className="settings-intro">Configure your profile info, educational credentials, and notification options.</p>
              
              <form className="settings-form" onSubmit={handleSaveSettings}>
                {/* A. Profile Information */}
                <div className="settings-section-block">
                  <h4>1. Edit Profile Info</h4>
                  <div className="settings-form-row">
                    <div className="form-group-dash">
                      <label>Full Registered Name</label>
                      <input 
                        type="text" 
                        value={profileName} 
                        onChange={(e) => setProfileName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group-dash">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        value={profileEmail} 
                        onChange={(e) => setProfileEmail(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="settings-form-row">
                    <div className="form-group-dash">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
                        value={profilePhone} 
                        onChange={(e) => setProfilePhone(e.target.value)} 
                      />
                    </div>
                    <div className="form-group-dash">
                      <label>Profile Picture URL</label>
                      <input 
                        type="url" 
                        placeholder="https://example.com/photo.jpg"
                        value={profilePhoto} 
                        onChange={(e) => setProfilePhoto(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="form-group-dash">
                    <label>Short Bio</label>
                    <textarea 
                      placeholder="Tell us about yourself..." 
                      rows="2"
                      value={profileBio} 
                      onChange={(e) => setProfileBio(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* B. Education details */}
                <div className="settings-section-block">
                  <h4>2. Edit Education Details</h4>
                  <div className="settings-form-row">
                    <div className="form-group-dash">
                      <label>Highest Qualification</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Bachelor of Technology"
                        value={highestQual} 
                        onChange={(e) => setHighestQual(e.target.value)} 
                      />
                    </div>
                    <div className="form-group-dash">
                      <label>Institution / College / School</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Mumbai University"
                        value={institution} 
                        onChange={(e) => setInstitution(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="settings-form-row">
                    <div className="form-group-dash">
                      <label>Year of Graduation</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 2025"
                        value={gradYear} 
                        onChange={(e) => setGradYear(e.target.value)} 
                      />
                    </div>
                    <div className="form-group-dash">
                      <label>Key Skills / Interests (Comma Separated)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Python, SQL, Project Management"
                        value={skills} 
                        onChange={(e) => setSkills(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>

                {/* C. Other Settings */}
                <div className="settings-section-block">
                  <h4>3. Notifications & Security</h4>
                  <div className="form-group-dash checkbox-group-dash">
                    <label className="checkbox-container-dash">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark-dash"></span>
                      Receive notifications about webinar schedules and corporate cohorts.
                    </label>
                  </div>
                </div>

                <div className="settings-action-buttons">
                  <button type="submit" className="dash-btn-primary save-settings-btn">Save All Changes</button>
                </div>
              </form>

              {/* D. Sign Out Section */}
              <div className="settings-section-block logout-settings-block">
                <h4>4. Account Sessions</h4>
                <p className="settings-subtext">Click below to terminate your current session on this browser.</p>
                <button type="button" className="dash-btn-secondary logout-settings-btn" onClick={onLogout}>
                  🚪 Sign Out / Logout from Account
                </button>
              </div>

            </div>
          )}
        </main>
      </div>
    </section>
  );
}

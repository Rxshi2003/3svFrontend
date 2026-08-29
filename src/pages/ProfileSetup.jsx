import React, { useState } from 'react';
import './ProfileSetup.css';

const EMPTY_EDUCATION = {
  level: '',
  degree: '',
  specialization: '',
  college: '',
  marks: '',
  yearOfCompletion: '',
  status: 'graduated'
};

const EMPTY_EXPERIENCE = {
  jobTitle: '',
  company: '',
  duration: '',
  description: ''
};

export default function ProfileSetup({ user, token, onProfileUpdate }) {
  const [phone, setPhone] = useState(user?.phone || '');
  const [education, setEducation] = useState([{ ...EMPTY_EDUCATION }]);
  const [workExperience, setWorkExperience] = useState([]);
  const [address, setAddress] = useState({
    houseNo: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [currentLocation, setCurrentLocation] = useState('');
  const [dressSize, setDressSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Education handlers
  const handleEducationChange = (index, field, value) => {
    setEducation(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setError('');
  };

  const addEducation = () => {
    setEducation(prev => [...prev, { ...EMPTY_EDUCATION }]);
  };

  const removeEducation = (index) => {
    if (education.length <= 1) return;
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  // Work Experience handlers (Optional)
  const handleExperienceChange = (index, field, value) => {
    setWorkExperience(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setError('');
  };

  const addWorkExperience = () => {
    setWorkExperience(prev => [...prev, { ...EMPTY_EXPERIENCE }]);
  };

  const removeWorkExperience = (index) => {
    setWorkExperience(prev => prev.filter((_, i) => i !== index));
  };

  // Address handler
  const handleAddressChange = (field, value) => {
    setAddress(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  // Validate form
  const validateForm = () => {
    if (!phone.trim()) {
      setError('Please enter your contact phone number');
      return false;
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s-()]/g, ''))) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return false;
    }

    for (let i = 0; i < education.length; i++) {
      const edu = education[i];
      if (!edu.level) {
        setError(`Please select the education level for entry ${i + 1}`);
        return false;
      }
      if (!edu.degree.trim()) {
        setError(`Please enter the degree/board name for entry ${i + 1}`);
        return false;
      }
      if (!edu.college.trim()) {
        setError(`Please enter the school/college name for entry ${i + 1}`);
        return false;
      }
      if (!edu.marks.trim()) {
        setError(`Please enter the marks/CGPA for entry ${i + 1}`);
        return false;
      }
    }

    if (!address.houseNo.trim()) {
      setError('Please enter your house/flat number');
      return false;
    }
    if (!address.city.trim()) {
      setError('Please enter your city');
      return false;
    }
    if (!address.state.trim()) {
      setError('Please enter your state');
      return false;
    }
    if (!address.pincode.trim()) {
      setError('Please enter your pincode');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          phone: phone.trim(),
          education,
          workExperience,
          address,
          currentLocation,
          dressSize
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Profile update failed');
      }

      setSuccess('Profile saved successfully! Redirecting to Dashboard...');

      // Update parent state and redirect
      if (onProfileUpdate) {
        onProfileUpdate(data.user);
      }
      localStorage.setItem('user', JSON.stringify(data.user));

      setTimeout(() => {
        window.location.hash = '#/dashboard';
      }, 1000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    window.location.hash = '#/dashboard';
  };

  const getLevelLabel = (index) => {
    const entry = education[index];
    if (entry.level) {
      const labels = {
        '10th': '10th Standard',
        '12th': '12th Standard',
        'graduation': 'Graduation',
        'post-graduation': 'Post-Graduation',
        'diploma': 'Diploma',
        'other': 'Other'
      };
      return labels[entry.level] || `Education ${index + 1}`;
    }
    return `Education ${index + 1}`;
  };

  return (
    <section className="profile-setup-section">
      <div className="login-bg-glows">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
      </div>

      <div className="profile-setup-container">
        <div className="profile-setup-card glass">
          <div className="profile-setup-header">
            <h2>Complete Your <span>Profile</span></h2>
            <p>Hi {user?.name || 'there'}! Fill in your details to customize your dashboard.</p>
          </div>

          {error && <div className="profile-alert alert-error">{error}</div>}
          {success && <div className="profile-alert alert-success">{success}</div>}

          <form className="profile-form" onSubmit={handleSubmit}>

            {/* ─── Contact Information ─── */}
            <div className="section-divider">
              <span className="section-icon">📞</span>
              <h3>Contact Details</h3>
              <span className="section-line"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setError(''); }}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  style={{ opacity: 0.8, cursor: 'not-allowed', background: 'rgba(0,0,0,0.04)' }}
                />
              </div>
            </div>

            {/* ─── Education Section ─── */}
            <div className="section-divider">
              <span className="section-icon">🎓</span>
              <h3>Education Details</h3>
              <span className="section-line"></span>
            </div>

            {education.map((edu, index) => (
              <div className="education-entry" key={index}>
                <div className="education-entry-header">
                  <span className="entry-label">{getLevelLabel(index)}</span>
                  {education.length > 1 && (
                    <button type="button" className="remove-entry-btn" onClick={() => removeEducation(index)}>
                      ✕ Remove
                    </button>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Education Level *</label>
                    <select value={edu.level} onChange={(e) => handleEducationChange(index, 'level', e.target.value)}>
                      <option value="">Select Level</option>
                      <option value="10th">10th Standard (SSC)</option>
                      <option value="12th">12th Standard (HSC)</option>
                      <option value="diploma">Diploma</option>
                      <option value="graduation">Graduation (UG)</option>
                      <option value="post-graduation">Post-Graduation (PG)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Degree / Board *</label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech, SSC, HSC, M.Sc"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Specialization / Stream</label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Science, Science"
                      value={edu.specialization}
                      onChange={(e) => handleEducationChange(index, 'specialization', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>School / College *</label>
                    <input
                      type="text"
                      placeholder="Institution name"
                      value={edu.college}
                      onChange={(e) => handleEducationChange(index, 'college', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-3">
                  <div className="form-group">
                    <label>Marks / CGPA *</label>
                    <input
                      type="text"
                      placeholder="e.g. 85% or 8.5 CGPA"
                      value={edu.marks}
                      onChange={(e) => handleEducationChange(index, 'marks', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Year of Completion</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024"
                      maxLength="4"
                      value={edu.yearOfCompletion}
                      onChange={(e) => handleEducationChange(index, 'yearOfCompletion', e.target.value.replace(/\D/g, ''))}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select value={edu.status} onChange={(e) => handleEducationChange(index, 'status', e.target.value)}>
                      <option value="graduated">Graduated</option>
                      <option value="pursuing">Pursuing</option>
                      <option value="dropped">Dropped Out</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <button type="button" className="add-education-btn" onClick={addEducation}>
              ＋ Add Another Education
            </button>

            {/* ─── Work Experience Section (Optional) ─── */}
            <div className="section-divider">
              <span className="section-icon">💼</span>
              <h3>Work Experience <span style={{ fontSize: '12px', fontWeight: '500', opacity: 0.7 }}>(Optional)</span></h3>
              <span className="section-line"></span>
            </div>

            {workExperience.length === 0 ? (
              <p style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '12px' }}>
                No work experience added yet. Freshers or students can leave this blank.
              </p>
            ) : (
              workExperience.map((exp, index) => (
                <div className="education-entry" key={index}>
                  <div className="education-entry-header">
                    <span className="entry-label">Experience #{index + 1}</span>
                    <button type="button" className="remove-entry-btn" onClick={() => removeWorkExperience(index)}>
                      ✕ Remove
                    </button>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Job Title / Designation</label>
                      <input
                        type="text"
                        placeholder="e.g. Software Engineer, Intern"
                        value={exp.jobTitle}
                        onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Duration / Period</label>
                      <input
                        type="text"
                        placeholder="e.g. Jan 2023 - Present or 6 Months"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Key Responsibilities</label>
                      <input
                        type="text"
                        placeholder="Brief summary of work"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}

            <button type="button" className="add-education-btn" onClick={addWorkExperience}>
              ＋ Add Work Experience
            </button>

            {/* ─── Address Section ─── */}
            <div className="section-divider">
              <span className="section-icon">🏠</span>
              <h3>Address Details</h3>
              <span className="section-line"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>H.No / Flat No *</label>
                <input
                  type="text"
                  placeholder="e.g. 12-A, Flat 302"
                  value={address.houseNo}
                  onChange={(e) => handleAddressChange('houseNo', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address Line 2</label>
                <input
                  type="text"
                  placeholder="Street, Landmark"
                  value={address.addressLine2}
                  onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row-3">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  placeholder="State"
                  value={address.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  placeholder="6-digit pincode"
                  maxLength="6"
                  value={address.pincode}
                  onChange={(e) => handleAddressChange('pincode', e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>

            {/* ─── Location & Dress Size Section ─── */}
            <div className="section-divider">
              <span className="section-icon">📍</span>
              <h3>Other Details</h3>
              <span className="section-line"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Current Location</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={currentLocation}
                  onChange={(e) => { setCurrentLocation(e.target.value); setError(''); }}
                />
              </div>
              <div className="form-group">
                <label>Dress Size</label>
                <select value={dressSize} onChange={(e) => setDressSize(e.target.value)}>
                  <option value="">Select Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="profile-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? <span className="spinner"></span> : 'Save Details & Go to Dashboard'}
            </button>
          </form>

          <span className="skip-link" onClick={handleSkip}>
            Skip for now →
          </span>
        </div>
      </div>
    </section>
  );
}

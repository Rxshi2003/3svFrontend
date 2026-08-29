import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [showOtpVerify, setShowOtpVerify] = useState(false);
  const [otpEmail, setOtpEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpPhone, setOtpPhone] = useState('');
  const [otpPhoneCode, setOtpPhoneCode] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error on input
  };

  const handleTabChange = (toRegister) => {
    setIsRegister(toRegister);
    setShowOtpVerify(false);
    setError('');
    setSuccess('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'student'
    });
  };

  const validateForm = () => {
    if (isRegister && !formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (isRegister && !formData.phone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (isRegister) {
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s-()]/g, ''))) {
        setError('Please enter a valid phone number (at least 10 digits)');
        return false;
      }
    }
    if (!formData.password) {
      setError('Please enter a password');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (isRegister && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
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

    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const payload = isRegister 
      ? { name: formData.name, email: formData.email, phone: formData.phone, password: formData.password, role: formData.role }
      : { email: formData.email, password: formData.password };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        // If login fails because user is unverified, open OTP verification immediately!
        if (data.unverified) {
          setError(data.message);
          setOtpEmail(data.email);
          setOtpPhone(data.phone || '');
          setShowOtpVerify(true);
          return;
        }
        throw new Error(data.message || 'Authentication failed');
      }

      if (isRegister) {
        // OTP has been sent
        setSuccess(data.message || 'OTP verification codes sent!');
        setOtpEmail(data.email);
        setOtpPhone(data.phone);
        setShowOtpVerify(true);
      } else {
        // Direct Login success (only for already verified accounts)
        setSuccess('Login successful!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        setTimeout(() => {
          onLoginSuccess(data.user, data.token);
          window.location.hash = '#/dashboard';
        }, 1000);
      }

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otpCode.trim() || otpCode.length !== 6) {
      setError('Please enter a valid 6-digit email OTP code');
      return;
    }
    if (otpPhone && (!otpPhoneCode.trim() || otpPhoneCode.length !== 6)) {
      setError('Please enter a valid 6-digit phone OTP code');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: otpEmail, otp: otpCode, emailOtp: otpCode, phoneOtp: otpPhoneCode || '' })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      setSuccess('Account verified and logged in successfully!');
      
      // Store credentials
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setTimeout(() => {
        onLoginSuccess(data.user, data.token);
        // Redirect to profile setup for new users
        window.location.hash = '#/profile-setup';
      }, 1000);

    } catch (err) {
      setError(err.message || 'Verification failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // Re-trigger registration endpoint to issue new OTP code (since registration endpoint updates unverified users)
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'User',
          email: otpEmail,
          phone: otpPhone || formData.phone || '',
          password: formData.password || 'password123',
          role: formData.role
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend code');
      }

      setSuccess('New verification codes have been dispatched!');
    } catch (err) {
      setError(err.message || 'Failed to resend. Please check input parameters.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-bg-glows">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
      </div>
      
      <div className="container login-container">
        <div className="login-card glass">
          <div className="login-header">
            <h2>Welcome to <span>3SV</span></h2>
            <p>Edumentors & Consultants</p>
          </div>

          {/* Form Tabs (Hidden during OTP verification step) */}
          {!showOtpVerify && (
            <div className="login-tabs">
              <button 
                className={`tab-btn ${!isRegister ? 'active' : ''}`}
                onClick={() => handleTabChange(false)}
                disabled={isLoading}
              >
                Login
              </button>
              <button 
                className={`tab-btn ${isRegister ? 'active' : ''}`}
                onClick={() => handleTabChange(true)}
                disabled={isLoading}
              >
                Register
              </button>
            </div>
          )}

          {/* Notifications */}
          {error && <div className="auth-alert alert-error">{error}</div>}
          {success && <div className="auth-alert alert-success">{success}</div>}

          {/* OTP Verification Form */}
          {showOtpVerify ? (
            <div className="otp-verification-wrapper tab-fade-in">
              <div className="otp-title-block">
                <h3>Verify Your Identity</h3>
                <p>We've sent verification codes to <strong>{otpEmail}</strong>{otpPhone && <> and <strong>{otpPhone}</strong></>}.</p>
                <p className="otp-helper-hint"><em>(If using local development settings, check your backend server terminal logs or database for the codes)</em></p>
              </div>

              <form className="auth-form" onSubmit={handleOtpSubmit}>
                <div className="form-group">
                  <label htmlFor="otpCode">6-Digit Email Verification Code</label>
                  <div className="input-wrapper centered-input-wrapper">
                    <input
                      type="text"
                      id="otpCode"
                      placeholder="XXXXXX"
                      maxLength="6"
                      value={otpCode}
                      onChange={(e) => { setOtpCode(e.target.value.replace(/\D/g, '')); setError(''); }}
                      className="otp-code-input"
                      disabled={isLoading}
                      required
                    />
                    <span className="input-icon">✉️</span>
                  </div>
                </div>

                {otpPhone && (
                  <div className="form-group">
                    <label htmlFor="otpPhoneCode">6-Digit Phone Verification Code</label>
                    <div className="input-wrapper centered-input-wrapper">
                      <input
                        type="text"
                        id="otpPhoneCode"
                        placeholder="XXXXXX"
                        maxLength="6"
                        value={otpPhoneCode}
                        onChange={(e) => { setOtpPhoneCode(e.target.value.replace(/\D/g, '')); setError(''); }}
                        className="otp-code-input"
                        disabled={isLoading}
                        required
                      />
                      <span className="input-icon">📱</span>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`auth-submit-btn ${isLoading ? 'btn-loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? <span className="spinner"></span> : 'Verify & Continue'}
                </button>
              </form>

              <div className="otp-actions">
                <button 
                  type="button" 
                  className="otp-resend-link-btn" 
                  onClick={handleResendOtp}
                  disabled={isLoading}
                >
                  Resend Verification Code
                </button>
                <button 
                  type="button" 
                  className="otp-back-btn" 
                  onClick={() => setShowOtpVerify(false)} 
                  disabled={isLoading}
                >
                  ← Back to forms
                </button>
              </div>
            </div>
          ) : (
            /* Standard Authentication Form (Login / Register) */
            <form className="auth-form" onSubmit={handleSubmit}>
              {isRegister && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                  <span className="input-icon">✉️</span>
                </div>
              </div>

              {isRegister && (
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1234567890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                    <span className="input-icon">📞</span>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle Password Visibility"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {isRegister && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-wrapper">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        required
                      />
                      <span className="input-icon">🔒</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">I am a</label>
                    <div className="input-wrapper select-wrapper">
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      >
                        <option value="student">Student</option>
                        <option value="corporate">Corporate Client</option>
                        <option value="faculty">Faculty Member</option>
                        <option value="user">General User</option>
                      </select>
                      <span className="input-icon">🎓</span>
                    </div>
                  </div>
                </>
              )}

              <button 
                type="submit" 
                className={`auth-submit-btn ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  isRegister ? 'Create Account' : 'Sign In'
                )}
              </button>
            </form>
          )}

          {!showOtpVerify && (
            <div className="auth-footer">
              {isRegister ? (
                <p>Already have an account? <span onClick={() => handleTabChange(false)}>Sign In</span></p>
              ) : (
                <p>New to 3SV? <span onClick={() => handleTabChange(true)}>Create an Account</span></p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './About3SV.css';
import octagonImg from '../assets/images/Digital Octagon Illustration for 3SV.jpg.jpeg';

import { coreValues } from '../constants/constabout3sv.jsx';

export default function About3SV() {

  return (
    <section className="about-3sv-section" id="about-3sv">
      <div className="container">
        
        <div className="about-3sv-grid">
          
          {/* LEFT SIDE: All Text Content */}
          <div className="about-3sv-text-column animate-slide-up">
            
            <div className="badge-wrapper">
              <span className="section-subtitle">ABOUT 3SV</span>
            </div>
            
            <h2 className="about-3sv-heading">
              About <span>3SV Edumentors & Consultants</span>
            </h2>

            <div className="about-paragraph-group">
              
              {/* Core Values Badge List */}
              <div className="core-values-box">
                <h4 className="core-values-title">Our Core Values</h4>
                <div className="core-values-flex">
                  {coreValues.map((value, index) => (
                    <span key={index} className="value-chip">
                      <svg className="chip-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Block 1: Established Presence */}
              <div className="content-block">
                <p className="about-lead">
                  3SV Edumentors and Consultants is an established organization whose head office is in Mumbai. 3SV also having an office in Pune. 3SV Edumentors and Consultants is known for consultancy services to manufacturing units as well as service sector organizations, value added industry synchronized certificate courses for graduate and post-graduate students of various streams such as management, engineering, pharmaceutical, computer application, etc., and for working professionals from various industries.
                </p>
              </div>

              {/* Text Block 2: Education Sector & PMI ATP */}
              <div className="content-block">
                <h4 className="block-subheading">Education Sector & PMI ATP Programs</h4>
                <p>
                  In the education sector 3SV Edumentors and Consultants offers online and offline courses in Six Sigma with certifications, Data Analytics, Data Science, Data Engineering, Business Analytics courses, Project Management courses for freshers and working professionals in association with Authorized Training Partner (ATP) of Project Management Institute (PMI), USA, and various other industry-oriented value-added.
                </p>
                <p>
                  3SV Edumentors and Consultants also provides other value enhancing courses to various institutes. These courses are developed by industry experts to help learners in achieving their career goal. 3SV Edumentors and Consultants believes in preparing learners for success in a changing scenario by providing blended (Online and Offline) courses. 3SV Edumentors and Consultants also provides a mentorship opportunity to the learners by the dedicated experts from industries. 3SV Edumentors and Consultants provides real-time projects and case studies to the learners.
                </p>
              </div>

              {/* Text Block 3: Operational History & Mission */}
              <div className="content-block">
                <h4 className="block-subheading">Lifelong Learning Partner</h4>
                <p>
                  3SV Edumentors and Consultants has been operational since October 2022, 3SV Edumentors and Consultants now is preferred as a lifelong learning partner by learners from a significant number of corporates. The mission of 3SV Edumentors and Consultants now is to assist learners to overcome industrial and professional challenges and achieve their career goals.
                </p>
              </div>

              {/* Text Block 4: Consultancy & Centre of Excellence */}
              <div className="content-block">
                <h4 className="block-subheading">Consultancy & Centre of Excellence</h4>
                <p>
                  3SV Edumentors and Consultants provides industry-relevant skills and ensures that the learner is industry ready to handle the job requirement. 3SV Edumentors and Consultants provides a consultancy service to both manufacturing and service sectors for the optimization of processes, time, space, and cost. Consultancy services are provided by 3SV Edumentors and Consultants through its Centre of Excellence which is fully equipped with experienced internationally certified industrial experts in Six Sigma, Analytics and Project Management.
                </p>
              </div>

              {/* Text Block 5: Incubation Centre & Startup Ecosystem */}
              <div className="content-block">
                <h4 className="block-subheading">Incubation Centre & Startup Ecosystem</h4>
                <p>
                  3SV Edumentors and Consultants is having its own incubation Centre and startup ecosystem for providing cutting – edge knowledge, skills, attitude and entrepreneurial mindset on how to develop products and services successfully, leading to enterprise creation and growth.
                </p>
                <p>
                  3SV Edumentors and Consultants in his Entrepreneurship development program encourages critical and lateral thinking, nurturing, and enable new ventures through an academically rigorous, directly relevant and highly practical learning experience. The approach of our ecosystem is to focuses on growth-oriented entrepreneurship, based on the evidence that high-growth entrepreneurs are the main drivers of innovation, productivity and employment.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Digital Octagon Illustration Image */}
          <div className="about-3sv-graphic-column animate-slide-up">
            <div className="sticky-graphic-wrapper">
              <div className="graphic-backdrop"></div>
              <img 
                src={octagonImg} 
                alt="Digital Octagon Illustration for 3SV Edumentors and Consultants" 
                className="about-octagon-side-img animate-float"
              />
              <div className="graphic-caption-badge">
                <span>3SV Ecosystem Illustration</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

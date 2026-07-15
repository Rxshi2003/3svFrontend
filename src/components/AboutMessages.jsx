import React from 'react';
import './AboutMessages.css';
import founderImg from '../assets/images/Directorsurekhachaudhari.jpg';
import ceoImg from '../assets/images/CEOVilaschaudhari.jpg';

export default function AboutMessages() {
  return (
    <section className="about-messages-section">
      <div className="container">
        
        {/* Founder Director's Message */}
        <div className="message-card-wrapper animate-slide-up">
          <div className="message-grid">
            <div className="message-image-column">
              <div className="message-image-frame glass">
                <img 
                  src={founderImg} 
                  alt="Founder Director" 
                  className="message-photo"
                />
              </div>
              <div className="director-info-box">
                <h3 className="director-name">Founder Director</h3>
                <span className="director-title">3SV Edumentors & Consultants</span>
              </div>
            </div>
            
            <div className="message-text-column">
              <div className="message-badge-wrap">
                <span className="message-badge">Leadership Voice</span>
              </div>
              <h2 className="message-heading">
                Founder Director's <span>Message</span>
              </h2>
              
              <div className="message-content">
                <p>
                  At 3SV Edumentors & Consultants, our journey has been driven by a singular vision: 
                  to be recognized as a global leader in fostering and developing industry-synchronized 
                  courses and consultancy services. From the very beginning, we have dedicated 
                  ourselves to creating an environment where education, training, and consultancy 
                  are seamlessly integrated to meet the evolving demands of the manufacturing and service sectors.
                </p>
                <p>
                  Our mission is multifaceted. We aim to become a leading Centre of Excellence in knowledge 
                  management, focusing on industry-synchronized courses and consultancy services. Through 
                  education, training, consulting, applied research, and institution-building, we promote 
                  industry-relevant programs that equip our participants with the skills and knowledge 
                  they need to excel. We also assist in capacity building, training, and institutional 
                  development, with a special emphasis on research, innovation, incubation, consultation, 
                  and digitalization. Our ultimate goal is to help our clients transform their organizations 
                  into more productive and quality-focused entities through the power of their people.
                </p>
                <p>
                  The values that guide us are at the core of everything we do. We are committed to integrity 
                  and ethical conduct, ensuring that our actions are always aligned with the highest standards. 
                  Quality and excellence are non-negotiable in our pursuit of delivering the best outcomes 
                  for our clients and participants. We believe in commitment and accountability, taking 
                  responsibility for the results we deliver. Growing together, we foster an environment of 
                  mutual respect and collaboration. Our dedication to our mission is unwavering, and we 
                  strive to build trust and credibility in all our interactions. Lastly, we embrace an 
                  entrepreneurial spirit, constantly innovating and adapting to the ever-changing landscape 
                  of industry needs.
                </p>
                <p>
                  As we continue to grow and evolve, our focus remains steadfast: to provide unparalleled 
                  training programs and consultancy services that empower organizations and individuals 
                  to achieve their full potential. We are excited about the future and look forward to 
                  continuing this journey with you.
                </p>
                <div className="message-signature">
                  <p className="signature-salutation">Thank you for your trust and partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="message-divider"></div>

        {/* CEO's Message */}
        <div className="message-card-wrapper reverse-grid animate-slide-up">
          <div className="message-grid">
            <div className="message-text-column">
              <div className="message-badge-wrap">
                <span className="message-badge-alt">Executive Vision</span>
              </div>
              <h2 className="message-heading">
                CEO's <span>Message</span>
              </h2>
              
              <div className="message-content">
                <p>
                  At 3SV Edumentors & Consultants, we are driven by a clear vision: to be recognized as 
                  a global leader in fostering and developing industry-synchronized courses and 
                  consultancy services. Our commitment to this vision is reflected in every aspect of 
                  our work, from the comprehensive training programs we offer to the tailored consultancy 
                  services we provide to both manufacturing and service sectors.
                </p>
                <p>
                  Our mission is to serve as a leading Centre of Excellence in knowledge management, 
                  focusing on the diverse needs of industries today. We strive to promote 
                  industry-synchronized courses through education, training, consulting, applied 
                  research, and institution-building. Our efforts extend beyond just training; 
                  we are deeply involved in capacity building, fostering innovation, and helping 
                  organizations enhance productivity and quality through strategic consultation.
                </p>
                <p>
                  The values that guide us—integrity, quality, excellence, commitment, accountability, 
                  and a spirit of entrepreneurship—are the bedrock of our organization. We believe in 
                  growing together with our clients, building trust and credibility through our unwavering 
                  dedication to their success.
                </p>
                <p>
                  As we continue to evolve, our focus remains on delivering exceptional value through 
                  our programs and services, ensuring that every individual and organization we work 
                  with is equipped to achieve excellence in their respective fields.
                </p>
                <div className="message-signature">
                  <p className="signature-salutation">Thank you for being part of our journey towards global leadership in education and consultancy.</p>
                </div>
              </div>
            </div>

            <div className="message-image-column">
              <div className="message-image-frame glass bg-glow-orange">
                <img 
                  src={ceoImg} 
                  alt="CEO Profile" 
                  className="message-photo"
                />
              </div>
              <div className="director-info-box">
                <h3 className="director-name">Chief Executive Officer</h3>
                <span className="director-title">3SV Edumentors & Consultants</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

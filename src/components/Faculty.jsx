import React from 'react';
import './Faculty.css';

// Image Imports
import imgVilasChaudhari from '../assets/images/CEOVilaschaudhari.jpg';
import imgRamachandran from '../assets/images/CA V. Ramachandran.jpg';
import imgBhide from '../assets/images/Prof. Dr. Sudheer Gopal Bhide.jpg';
import imgThatte from '../assets/images/Prof. Ajit Thatte.jpg';
import imgModak from '../assets/images/Mr.  Ajay Modak.jpg';
import imgWalke from '../assets/images/Prof. (Dr.) R. C. Walke.jpg';
import imgPrakash from '../assets/images/Vivek Prakash, PMP, MCP.jpg';
import imgGhosh from '../assets/images/Mr.  Amit K. Ghosh.jpg';
import imgSarasappan from '../assets/images/Mr. Manoj Sarasappan, PMP, LIMC.jpg';
import imgBalakrishnan from '../assets/images/Dr. Hemjith Balakrishnan.jpg';
import imgKhan from '../assets/images/Nadeem A. Khan.jpg';
import imgSharma from '../assets/images/Mr. Chandrasen B. Sharma.jpg';
import imgPrusty from '../assets/images/Mr. Manoranjan Prusty.jpg';
import imgMukadam from '../assets/images/Mukadam Zafar.jpg';
import imgMishra from '../assets/images/Dinesh Kumar Mishra.jpg';
import imgSathe from '../assets/images/Dr. Pratik Sathe.jpg';
import imgRath from '../assets/images/Subarna Rath.jpg';
import imgSurekhaChaudhari from '../assets/images/Directorsurekhachaudhari.jpg';

// New Faculty Images
import imgNishiKaul from '../assets/images/Dr. Nishi Kaul.jpg';
import imgSharmilaMohapatra from '../assets/images/Dr. Sharmila Mohapatra.jpg';
import imgPratikGupta from '../assets/images/Pratik Gupta.jpg';

export default function Faculty() {
  const facultyData = [
    {
      id: "vilas-chaudhari",
      name: "Prof. Vilas K. Chaudhari",
      role: "Founder & CEO, 3SV Edumentors",
      credentials: "Master Black Belt – Six Sigma | Strategic Consultant | Academic Leader",
      desc: "Over 42 years of operations leadership, specializing in Six Sigma, strategic business consulting, and analytical education reforms.",
      color: "blue-accent",
      image: imgVilasChaudhari
    },
    {
      id: "v-ramachandran",
      name: "CA V. Ramachandran",
      role: "Financial Strategist & Senior Consultant",
      credentials: "Chartered Accountant | 45+ Yrs Financial Leadership",
      desc: "Expert in corporate finance, strategic cost management, accounting finalization, compliance, and GMCS coaching.",
      color: "gold-accent",
      image: imgRamachandran
    },
    {
      id: "sudheer-gopal-bide",
      name: "Prof. Dr. Sudheer Gopal Bhide",
      role: "Senior Operations & Quality Consultant",
      credentials: "Ph.D. | 45+ Yrs Industry & Academic Excellence",
      desc: "Internationally trained expert (AOTS/JIPM Japan) in Total Productive Maintenance, Operations Research, and Lean Manufacturing.",
      color: "indigo-accent",
      image: imgBhide
    },
    {
      id: "ajit-thatte",
      name: "Prof. Ajit Thatte",
      role: "Senior Strategic Consultant, 3SV Edumentors",
      credentials: "40+ Yrs Experience | Marketing, Strategy & Energy Specialist",
      desc: "Seasoned professional with over four decades of cross-industry experience across marketing, strategic management, energy projects, and telecom.",
      color: "blue-accent",
      image: imgThatte
    },
    {
      id: "ajay-modak",
      name: "Mr. Ajay Modak",
      role: "Senior Consultant, 3SV Edumentors",
      credentials: "25+ Yrs MIS & IT Consultancy Experience",
      desc: "Expertise in software development, system analysis, design, and MIS/IT consultancy across banking, transport, energy, and healthcare.",
      color: "gold-accent",
      image: imgModak
    },
    {
      id: "rc-walke",
      name: "Prof. (Dr.) R. C. Walke",
      role: "Senior Academic Consultant, 3SV Edumentors",
      credentials: "Ph.D. (Risk Management) | 35+ Yrs Experience",
      desc: "Former Dean CRC. Experienced academician in Project Management, Risk Management, Strategic Management, and Supply Chain Performance.",
      color: "indigo-accent",
      image: imgWalke
    },
    {
      id: "vivek-prakash",
      name: "Vivek Prakash, PMP, MCP",
      role: "Project Management Advisor",
      credentials: "PMP & MCP Certified | 30+ Yrs Experience",
      desc: "Founder of pmwares. Former Chairperson for PMI's Hindi Translation of PMBOK Guide.",
      color: "blue-accent",
      image: imgPrakash
    },
    {
      id: "amit-ghosh",
      name: "Mr. Amit K. Ghosh",
      role: "Strategic Pharma Operations Consultant",
      credentials: "Pharma Manufacturing Specialist | 40 Yrs Experience",
      desc: "Director at Reflux Pharmaceuticals. Multi-disciplinary MBA. Managed operations for Ranbaxy, Elder, and Kopran.",
      color: "gold-accent",
      image: imgGhosh
    },
    {
      id: "manoj-sarasappan",
      name: "Mr. Manoj Sarasappan, PMP, LIMC",
      role: "IT & Healthcare Transformation Leader",
      credentials: "PMP, LIMC Graduate | Lean Six Sigma Black Belt",
      desc: "President & MD of Ikigai Techxecellence. 33+ years scaling global IT, healthcare delivery, and BPO operations.",
      color: "indigo-accent",
      image: imgSarasappan
    },
    {
      id: "hemjith-balakrishnan",
      name: "Dr. Hemjith Balakrishnan",
      role: "Academic Leader & Research Scholar",
      credentials: "Ph.D. in Business Administration | UGC-NET",
      desc: "Dean and Professor with 21+ years in teaching, academic coordination, and institutional accreditations (NAAC/NBA).",
      color: "blue-accent",
      image: imgBalakrishnan
    },
    {
      id: "nadeem-khan",
      name: "Nadeem A. Khan",
      role: "Operations & Logistics Strategist",
      credentials: "MBA (Operations) | B.E. Mech (Hons) | LL.B.",
      desc: "25+ years leading supply chain, inventory, and logistics for JSW Steel, Ispat Industries, and NITCO.",
      color: "gold-accent",
      image: imgKhan
    },
    {
      id: "chandrasen-sharma",
      name: "Mr. Chandrasen B. Sharma",
      role: "Operations & Materials Management Consultant",
      credentials: "GDMM | 37+ Yrs Professional Experience",
      desc: "Former Purchase & Warehouse Manager at L&T and Future Group. Honorary Lecturer at IIM Mumbai & Garware.",
      color: "indigo-accent",
      image: imgSharma
    },
    {
      id: "manoranjan-prusty",
      name: "Mr. Manoranjan Prusty",
      role: "Digital Marketing Strategist & Senior Consultant",
      credentials: "Google Certified Digital Marketer | 15+ Yrs SEO/SEM Experience",
      desc: "Expert in SEO, SEM, digital analytics. Formerly SEO Lead at Birds Eye Systems. Guest speaker at IIT Bombay.",
      color: "blue-accent",
      image: imgPrusty
    },
    {
      id: "zafar-mukadam",
      name: "Zafar Mukadam",
      role: "Strategic HR Leader & Behavioural Coach",
      credentials: "MBA (HRM) | PG Diploma Labour Law & Psychological Counselling",
      desc: "Departmental Head - HR at Wudtools. 30+ years leading strategic HR policy, workforce planning, and L&D across Voltas and Wilco.",
      color: "gold-accent",
      image: imgMukadam
    },
    {
      id: "dinesh-mishra",
      name: "Dinesh Kumar Mishra",
      role: "Insurance VP & Risk Management Specialist",
      credentials: "MBA (Finance) | LL.B. | Associate III | 39 Yrs Experience",
      desc: "Vice President - Direct Business at Anzen Insurance Brokers. 29+ years at The New India Assurance Co.",
      color: "indigo-accent",
      image: imgMishra
    },
    {
      id: "pratik-sathe",
      name: "Dr. Pratik R. Sathe",
      role: "Consultant Medical & Hemato-Oncologist",
      credentials: "DM (Medical Oncology) | MD (Internal Medicine) | 14+ Yrs",
      desc: "Expert in chemotherapy, immunotherapy, targeted therapy, and bone marrow transplants. Taught DNB oncology students.",
      color: "blue-accent",
      image: imgSathe
    },
    {
      id: "subarna-rath",
      name: "Subarna Rath",
      role: "Computer Science & Quality Training Consultant",
      credentials: "B.Ed. | 24+ Yrs Teaching & LMS Development",
      desc: "Specialist in Quality Management and Computer Science training. Proficient in LMS development and content design.",
      color: "gold-accent",
      image: imgRath
    },
    {
      name: "Surekha V. Chaudhari",
      role: "Managing Strategy Advisor",
      credentials: "M.S. Industrial Engineering",
      desc: "Guides organizational design, consulting frameworks, and operational governance setups.",
      color: "indigo-accent",
      image: imgSurekhaChaudhari
    },
    {
      id: "nishi-kaul",
      name: "Dr. Nishi Kaul",
      role: "Communication Skills Specialist & Consultant",
      credentials: "Ph.D. in Management | M.A. & M.Phil. in Clinical Psychology",
      desc: "Certified PRISM Practitioner with 25+ years in soft skills training, emotional intelligence, leadership development, and CV/Interview readiness.",
      color: "indigo-accent",
      image: imgNishiKaul
    },
    {
      id: "sharmila-mohapatra",
      name: "Dr. Sharmila Mohapatra",
      role: "Communication Specialist & Consultant",
      credentials: "Certified PRISM Practitioner | NLP & soft skills trainer",
      desc: "Former Dean at SIES. Acclaimed academician with 30+ years experience, certified in NLP, PRISM Brain Mapping, and POSH training.",
      color: "gold-accent",
      image: imgSharmilaMohapatra
    },
    {
      id: "pratik-gupta",
      name: "Pratik Gupta",
      role: "Electrical Site Engineer & MEP Specialist",
      credentials: "Diploma in Electrical Engineering | 4+ Yrs MEP Projects",
      desc: "Electrical site engineer at Rahiman Electricals. Proficient in site supervision, load calculations, AutoCAD drafting, and MEP coordination.",
      color: "blue-accent",
      image: imgPratikGupta
    }
  ];

  return (
    <section id="faculty" className="faculty-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LEARN FROM LEADERS</span>
          <h2 className="section-title">
            Our <span>Advisory Board & Faculty</span>
          </h2>
          <p className="section-desc">
            Gain guidance from highly experienced management mentors, certified auditors, technical specialists, and operations consultants.
          </p>
        </div>

        <div className="faculty-grid">
          {facultyData.map((mentor, idx) => (
            <div key={idx} className={`faculty-card glass ${mentor.color}`}>
              <div className={`faculty-avatar-box ${mentor.image ? 'has-image' : ''}`}>
                {mentor.image ? (
                  <img src={mentor.image} alt={mentor.name} className="faculty-avatar-img" />
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>
              <h3 className="faculty-name">{mentor.name}</h3>
              <span className="faculty-role">{mentor.role}</span>
              <span className="faculty-credentials">{mentor.credentials}</span>
              <div className="faculty-divider"></div>
              <p className="faculty-desc">{mentor.desc}</p>
              {mentor.id && (
                <a href={`#/faculty/${mentor.id}`} className="faculty-profile-link">
                  View Full Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="link-arrow">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

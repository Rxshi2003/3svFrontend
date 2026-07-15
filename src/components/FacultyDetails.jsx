import React, { useEffect } from 'react';
import './FacultyDetails.css';
import imgVilasChaudhari from '../assets/images/CEOVilaschaudhari.jpg';
import imgRamachandran from '../assets/images/CA V. Ramachandran.jpg';
import imgBhide from '../assets/images/Prof. Dr. Sudheer Gopal Bhide.jpg';
import imgThatte from '../assets/images/Prof. Ajit Thatte.jpg';
import imgModak from '../assets/images/Mr.  Ajay Modak.jpg';
import imgWalke from '../assets/images/Prof. (Dr.) R. C. Walke.jpg';
import imgNishiKaul from '../assets/images/Dr. Nishi Kaul.jpg';
import imgSharmilaMohapatra from '../assets/images/Dr. Sharmila Mohapatra.jpg';
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
import imgPratikGupta from '../assets/images/Pratik Gupta.jpg';
import imgRath from '../assets/images/Subarna Rath.jpg';

const facultyProfiles = {
  'vilas-chaudhari': {
    name: 'Prof. Vilas K. Chaudhari',
    role: 'CEO, 3SV Edumentors & Consultants',
    image: imgVilasChaudhari,
    location: 'Nerul, Navi Mumbai',
    tagline: 'Master Black Belt – Six Sigma | Strategic Consultant | Academic Leader',
    color: 'blue-accent',
    bio: 'With over 42 years of professional excellence, Prof. Vilas K. Chaudhari stands as a seasoned industry expert and academic visionary. As the Founder and CEO of 3SV Edumentors & Consultants, he has pioneered industry-synchronized certification programs and consultancy solutions tailored for manufacturing and service sector organizations. His leadership blends deep domain expertise in Six Sigma, Analytics, Project Management, and Operations with hands-on project-based learning, empowering institutions and professionals alike.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'competencies',
        items: [
          {
            category: 'Quality & Lean Management',
            details: 'Six Sigma (Yellow to Master Black Belt), SQC, Lean Implementation'
          },
          {
            category: 'Business & Functional Analytics',
            details: 'Predictive Analytics, HR, Marketing, Retail, Logistics & SCM, CSR Analytics, Machine Learning, NLP, Deep Learning, Tableau, Python, Power BI, Fintech'
          },
          {
            category: 'Project & Operations Management',
            details: 'Project Management, Primavera, MS Project, Smart City Project Management, Theory of Constraints'
          },
          {
            category: 'Research & Teaching',
            details: 'Over 25+ consulting assignments, 21+ publications, FDPs, MDPs, student development programs across 60+ institutions'
          }
        ]
      },
      {
        title: 'Education & Certifications',
        type: 'list-items',
        items: [
          'MBA (Marketing & Retail) | MCM | MSc (Chemistry) | Post B.Sc. Diploma in Computer Science and Applications',
          'Certified Master Black Belt – Indian Statistical Institute, Pune',
          'Lean Six Sigma (KPMG, ASQM), ISO 9001:2015 Internal Auditor',
          '50+ national and international certifications in Business Analytics, AI/ML, Digital Marketing, R/Python, Tableau, Scilab, Tally Prime, etc.'
        ]
      },
      {
        title: 'Leadership Highlights',
        type: 'list-items',
        items: [
          'Developed 40+ certification programs across analytics, project management, and operations.',
          'Founder of Binary & Analytical Labs for live project-based learning.',
          'Consultant for ISO, NAAC, NBA accreditations and strategic education reforms.',
          'Spearheaded CSR, ISR, and tribal upliftment projects under Rotary and SIESCOMS initiatives.',
          'Former Dean of Operations and Business Analytics at SIESCOMS, Navi Mumbai and Pride Institute of Business Management, Pune; set up Centres of Excellence in Analytics, Project Management, Entrepreneurship and Logistics.',
          'Played a strategic role in international accreditations, curriculum design, and faculty development.'
        ]
      },
      {
        title: 'Institutional and Industry Impact',
        type: 'list-items',
        items: [
          'Consultancy Services: Provided impactful advisory to over 25 organizations across sectors.',
          'Training & Mentorship: Guided over 700 students in certification programs and mentored MBA projects.',
          'Academic Collaborations: Partnered with CII, PMI, SAP, AIMA, pmwares and more for delivering value-added programs.',
          'Visiting Faculty across premier institutions in Mumbai, Pune, and Bhopal.'
        ]
      }
    ],
    footerBlock: {
      title: 'Vision at 3SV Edumentors',
      text: 'To build globally recognized, project-integrated, and outcome-driven training and consultancy platforms that bridge the gap between academia and industry. Focused on excellence, innovation, and transformation.'
    }
  },
  'v-ramachandran': {
    name: 'CA V. Ramachandran',
    role: 'Financial Strategist | Educator | Chartered Accountant',
    image: imgRamachandran,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Chartered Accountant | 45+ Years of Corporate & Academic Advisory',
    color: 'gold-accent',
    bio: 'With over 45 years of distinguished experience across India’s top public and private sector organizations, CA V. Ramachandran is a highly accomplished Chartered Accountant and Senior Consultant at 3SV Edumentors & Consultants, Navi Mumbai. His career spans a rich blend of financial leadership, academic instruction, and consulting excellence, with deep expertise in Financial Accounting, Costing, Strategic Cost Management, Taxation, and Financial Analytics. A proven mentor and trainer, he has significantly contributed to professional development programs for MBA, PGDM, EMBA, and CA aspirants, especially through GMCS Programs of the Institute of Chartered Accountants of India (ICAI).',
    sections: [
      {
        title: 'Areas of Expertise',
        type: 'competencies',
        items: [
          {
            category: 'Finance & Accounting',
            details: 'Financial Statement Analysis, Finalization of Accounts, Capital & Revenue Budgeting, Working Capital Management, Costing, Pricing, ERP'
          },
          {
            category: 'Strategic & Cost Management',
            details: 'Tools & Techniques for Industry, Financial Scrutiny, Investment Proposals, Funds Management'
          },
          {
            category: 'Taxation & Compliance',
            details: 'Direct & Indirect Taxation, Representation Before Government Bodies, Secretarial Duties'
          },
          {
            category: 'Professional Training',
            details: 'GMCS sessions on Office Management, Negotiation, Report Writing, Mock Interviews'
          }
        ]
      },
      {
        title: 'Academic & Industry Background',
        type: 'list-items',
        items: [
          'Chartered Accountant (C.A.)',
          'Formerly associated with leading organizations such as: Indian Oil Corporation Ltd. (R&P Division), Lubrizol India Pvt. Ltd., Hindustan Copper Ltd., Ballarpur Industries Ltd., Technimont ICB Pvt. Ltd., Lalit Profiles and Steel Industries Ltd., and Haryana Detergents Ltd.'
        ]
      },
      {
        title: 'Training & Development Impact',
        type: 'table',
        headers: ['Activity', 'Count'],
        rows: [
          ['Consulting Assignments', '7'],
          ['Student Development Programs', '50'],
          ['Research Papers Presented', '7'],
          ['Publications', '1'],
          ['Faculty Development Programs (Attended)', '7'],
          ['Faculty Development Programs (Conducted)', '5'],
          ['Management Development Programs (Conducted)', '5'],
          ['Recognitions & Honors', '7']
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'As a Chartered Accountant at 3SV, he mentors professionals and students through financial consultancy, hands-on analytical training, and cost management strategy development. His sessions are known for their real-world application, structured problem-solving, and regulatory insight, helping professionals bridge the gap between academic concepts and practical industry challenges.'
    }
  },
  'sudheer-gopal-bide': {
    name: 'Prof. Dr. Sudheer Gopal Bhide',
    role: 'Senior Consultant – 3SV Edumentors & Consultants',
    image: imgBhide,
    location: 'Navi Mumbai',
    tagline: 'Ph.D., B.E., M.Sc., PGDMS, D.I.S. | 45+ Years of Professional Experience',
    color: 'indigo-accent',
    bio: 'Prof. Dr. Sudheer Gopal Bhide is a highly experienced and internationally trained expert in Operations and Quality Management, with over 45 years of professional excellence in academia and industry. As a Senior Consultant at 3SV Edumentors & Consultants, he brings a strategic and systems-driven approach to improving organizational efficiency and quality. His unique combination of technical depth and academic rigor has empowered both engineering and management professionals across India. Having received specialized training in Quality Control from AOTS, Japan and a Certificate in Total Productive Maintenance (TPM) from the prestigious JIPM, Japan, Dr. Bhide stands out as a globally oriented educator and consultant in manufacturing excellence, world-class production systems, and lean methodologies.',
    sections: [
      {
        title: 'Areas of Expertise',
        type: 'grid-items',
        items: [
          'Operations Management & Operations Research',
          'Supply Chain & Manufacturing Resources Planning',
          'Productivity & Quality Management',
          'World-Class Manufacturing Practices',
          'Operations Analytics & Project Management',
          'Total Quality Management (TQM)'
        ]
      },
      {
        title: 'Education & International Certifications',
        type: 'list-items',
        items: [
          'Ph.D. in Operations Management',
          'B.E. – Bachelor of Engineering',
          'M.Sc. – Master of Science',
          'PGDMS – Post Graduate Diploma in Management Studies',
          'D.I.S. – Diploma in Information Systems',
          'Quality Control Training – AOTS, Kansai Kenshu Centre, Osaka, Japan',
          'Total Productive Maintenance (TPM) – Certificate by JIPM, Japan'
        ]
      },
      {
        title: 'Industry Experience',
        type: 'industry-list',
        desc: 'These roles provided him with comprehensive exposure to plant operations, quality compliance, productivity enhancement techniques, and cross-functional leadership in industrial environments.',
        items: [
          'Engineering Industry (Bearings & Tin Can Manufacturing)',
          'Quality Management Systems, Thane',
          'Antifriction Bearings Corporation Ltd., Lonavala',
          'Poysha Industrial Co. Ltd., Thane',
          'Universal Cans & Containers, Taloja',
          'Divecha Glass Industries, Mulund'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV Edumentors, Dr. Bhide plays a crucial role in delivering consultancy services and academic training in the fields of manufacturing systems, quality control, and operations excellence. His sessions are known for their deep practical insights, globally benchmarked practices, and structured analytical approach.'
    }
  },
  'ajit-thatte': {
    name: 'Prof. Ajit Thatte',
    role: 'Senior Strategic Consultant – 3SV Edumentors & Consultants',
    image: imgThatte,
    location: 'Senior Strategic Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: '40+ Years of Industry & Academic Experience | Marketing, Strategy & Energy Sector Specialist',
    color: 'blue-accent',
    bio: 'Prof. Ajit Thatte is a seasoned professional with over four decades of cross-industry experience across marketing, strategic management, sales, energy projects, environmental engineering, and telecommunications. Currently serving as a Senior Strategic Consultant at 3SV Edumentors & Consultants, his multifaceted career is marked by a consistent focus on driving organizational growth, fostering innovation, and mentoring professionals. His leadership spans high-impact roles in corporate strategy, product launches, channel development, and M&A initiatives, with proven success in both domestic and international markets. As a distinguished coach and trainer, he has developed and delivered strategic marketing and sales training modules for employees across organizations.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'competencies',
        items: [
          { category: 'Strategy & Leadership', details: 'Strategic Planning & Implementation, Mergers & Acquisitions, Corporate Strategy' },
          { category: 'Marketing & Sales', details: 'Marketing & Sales Management, Channel Management, Product Innovation & Launch' },
          { category: 'Technical & Engineering', details: 'Energy Sector Operations, Environmental Engineering, Telecom Projects, Project Management' },
          { category: 'Corporate Enablement', details: 'Domestic & International Business Development, Corporate Training, Executive Mentoring' }
        ]
      },
      {
        title: 'Educational Qualifications',
        type: 'list-items',
        items: [
          'B.Tech. (Hons.), First Class – IIT Kharagpur (1975)',
          'Post Graduate Diploma in Marketing & Sales Management, First Class – Delhi (1981)'
        ]
      },
      {
        title: 'Industry Experience',
        type: 'industry-list',
        desc: 'Prof. Thatte has held senior leadership positions in prominent companies across telecommunications, industrial manufacturing, and environmental systems, with a record of strategic expansions and corporate turnarounds:',
        items: [
          'Voltas Ltd.',
          'BPL Communication',
          'Mafatlal Industries Ltd.',
          'Western Paques India Ltd.',
          'Lucent Technologies Ltd.',
          'Avaya Global Connect Ltd.',
          'CEO – Enkay Technologies India Pvt. Ltd.'
        ]
      },
      {
        title: 'Knowledge Contributions & Recognitions',
        type: 'list-items',
        items: [
          'Contributor to leading publications: The Economic Times, Business World, tele.net, Telematics',
          'Presenter at numerous national and international forums on business and industry topics',
          'Super Achiever in Marketing – Indira Institute of Management, Pune (2005)',
          'Nominated for Business Leadership Award – Indian Economic Development & Research Association, New Delhi (2009)'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Prof. Thatte brings unmatched strategic and market foresight to various industry-synchronized training programs, and provides expert consultation to corporates in energy, telecom, and manufacturing. He actively contributes to mentoring programs, helps design project-based learning modules, and supports organizational capability-building.'
    }
  },
  'ajay-modak': {
    name: 'Mr. Ajay Modak',
    role: 'Senior Consultant – 3SV Edumentors & Consultants',
    image: imgModak,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'MIS & IT Consultancy Specialist | 25+ Years of Corporate & Public Sector Experience',
    color: 'gold-accent',
    bio: 'Mr. Ajay Modak brings over 25 years of dynamic and versatile experience in the corporate, government, and development sectors. His expertise spans software development, system analysis, design, and MIS/IT consultancy, particularly in national and international donor-funded projects (ADB and World Bank). He has successfully implemented robust IT and MIS systems across diverse domains such as banking, transport, energy, healthcare, advertising, mining, and urban development.',
    sections: [
      {
        title: 'Technical & Project Expertise',
        type: 'list-items',
        items: [
          'Banking Automation Systems, Reservation Systems',
          'Vehicle Management Systems for RTC',
          'Payroll and Sales Accounting Systems',
          'Inventory & Billing Systems',
          'MIS solutions for IDBI refinance, loan recovery/disbursement/appraisal for Industry Development Corporation',
          'End-to-end IT frameworks for Seva Sadan Eye Hospital, MP Madhyam, Chhattisgarh Samvad, and more',
          'Consultant for NCHSE, AVN, CECL, Nitel, Fotel, HEG',
          'Worked with reputed international agencies such as NdLea (Canada), Louis Berger (USA), GKW, GHK, PSP',
          'Led IT implementations in West Bengal, Assam, Rajasthan, Jammu & Kashmir, Madhya Pradesh, and Telangana for over 15 years'
        ]
      },
      {
        title: 'Corporate & Institutional Training',
        type: 'competencies',
        items: [
          { category: 'Training Areas', details: 'MS Excel (Advanced), MIS, Financial Accounting' },
          { category: 'Data Science Tools', details: 'Python, R, Power BI, Tableau, SQL Server' },
          { category: 'Corporate Clients', details: 'Railways (DRM), Permali Wallace, Lupin, Cummins, Kirloskar, Mafatlal, Ruchi Soya, JK Files, SRF' },
          { category: 'Govt & Academic', details: 'CRISP, MP Madhyam, Sales Tax, Veterinary Dept, LNCT, IPER, Extol, VNS, IGNOU, GGITM, Govt. Polytechnics' }
        ]
      },
      {
        title: 'Educational Qualifications & Certifications',
        type: 'list-items',
        items: [
          'M.Sc. (Computer Science) – 2012, Makhanlal Chaturvedi Journalism University, Bhopal',
          'MBA – 1997, CRIM, Bhopal',
          'M.A. (Economics) – 1993, Barkatullah University, Bhopal',
          'B.Sc. – 1985, Ravishankar University, Raipur',
          'Microsoft Excel Certification – 2022'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Mr. Ajay Modak leads advanced Excel workshops, MIS system analytics, and data sciences training modules. He brings rich case studies from 25 years of large scale systems architecture to student projects and corporate programs.'
    }
  },
  'rc-walke': {
    name: 'Prof. (Dr.) R. C. Walke',
    role: 'Senior Academic Consultant – 3SV Edumentors & Consultants',
    image: imgWalke,
    location: 'Senior Academic Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: '35+ Years of Academic & Industry Experience | Former Dean CRC - FCRIMS',
    color: 'indigo-accent',
    bio: 'Prof. (Dr.) R. C. Walke is a seasoned academician and consultant with over 35 years of combined experience in academia and industry, including more than 30 years with the Agnel Technical Education Complex and Fr. C. Rodrigues Institute of Management Studies (FCRIMS). He is a recognized faculty member of the University of Mumbai, actively involved in teaching, research, curriculum development, and student development initiatives. His work encompasses a wide range of subjects in Operations, Marketing, and General Management, with specialized expertise in Project Management, Strategic Management, Operations Research, and Supply Chain Performance Analysis.',
    sections: [
      {
        title: 'Areas of Expertise',
        type: 'grid-items',
        items: [
          'Project & Operations Management',
          'Risk Management in Construction & Supply Chains',
          'Strategic & Business Ethics',
          'Business Research Methods',
          'Logistics & Advanced Supply Chain Management',
          'Rural & Perspective Marketing',
          'Corporate Governance and Process Skills'
        ]
      },
      {
        title: 'Educational Qualifications',
        type: 'list-items',
        items: [
          'Ph.D. – Risk Management, University of Mumbai, VJTI (2012)',
          'M.E. – Value Analysis, University of Mumbai, VJTI (1999)',
          'B.E. (Civil Engineering), VNIT, Nagpur University (1984)',
          'MBA – Reward Management, IGNOU (2013)'
        ]
      },
      {
        title: 'Publications & Research Contributions',
        type: 'list-items',
        items: [
          'Published over 30 research papers in reputed national and international journals and conferences (IJMRT, IOSR, IJERA, ICI, Indian Journal of Marketing, etc.)',
          'Presented at over 13 international and 3 national conferences across India, China, Nepal, and UAE',
          'Awarded Best Paper twice at ADMIFMS IMRC Conferences',
          'SSRN paper "Going Green: A Holistic Approach…" listed among Top Ten Downloads (2010)'
        ]
      },
      {
        title: 'Corporate & Outreach Engagements',
        type: 'list-items',
        items: [
          'Conducted 50+ corporate workshops for UTI, SBI, Agnel Polytechnic, etc.',
          'Served as Editorial Advisory Council Member & Advisory Board Member – Unity CSR Foundation & CSR Centre',
          'DACUM Expert – DTE & MSBTE for technical faculty training',
          'Professional Member: ISTE, ICI, Dharmabharti Foundation'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Dr. Walke leads operations research methodology, risk management coaching, and academic standards auditing at 3SV. He brings extensive expertise in coordination and curriculum development to help scale the institution\'s core offerings.'
    }
  },
  'nishi-kaul': {
    name: 'Dr. Nishi Kaul',
    role: 'Communication Skills Specialist | Academic Leader | Consultant',
    image: imgNishiKaul,
    location: 'Senior Management & HR Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Certified PRISM Practitioner | Ph.D. in Management & Clinical Psychology Expert',
    color: 'indigo-accent',
    bio: 'Dr. Nishi Kaul is a highly experienced Associate Professor, acclaimed for her contributions in the fields of Education Management, Corporate Training, and Behavioural Sciences. With a robust professional background spanning over 25 years, she has consistently demonstrated excellence in teaching, counselling, psychometric testing, and training delivery. Her unique blend of psychology and management underpins her deep understanding of human behaviour, leadership dynamics, and organizational development.',
    sections: [
      {
        title: 'Teaching & Advisory Expertise',
        type: 'grid-items',
        items: [
          'Business Communication',
          'Organizational Behaviour',
          'Human Resource Management',
          'Organizational Development',
          'Counselling & Psychometric Testing',
          'Learning and Development'
        ]
      },
      {
        title: 'Educational Qualifications & Affiliations',
        type: 'list-items',
        items: [
          'Ph.D. in Management (Thesis: "Leadership Effectiveness through Emotional Competencies")',
          'M.Phil. in Clinical Psychology',
          'M.A. in Clinical Psychology',
          'Certified PRISM Practitioner',
          'Life Member of the Indian Society for Training and Development (ISTD)'
        ]
      },
      {
        title: 'Impactful Training Programs Delivered',
        type: 'competencies',
        items: [
          { category: 'Behavioural & Soft Skills', details: 'Managerial and Behavioural Skills, Corporate Etiquettes, Emotional Intelligence' },
          { category: 'Mentorship & Support', details: 'Mentoring and Goal Setting, Workplace Counselling, Marital Discord Counselling' },
          { category: 'Student Readiness', details: 'Placement readiness training including CV Writing, Group Discussions (GD), and Interview Skills' },
          { category: 'Health & Wellness', details: 'Addiction Management workshops and counselings' }
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Dr. Kaul leads communication skills programs, leadership coaching, soft skills training, and placement preparation drives. Her sessions use clinical psychology insights to empower students and professionals for high performance corporate entries.'
    }
  },
  'sharmila-mohapatra': {
    name: 'Dr. Sharmila Mohapatra',
    role: 'Communication Specialist & Consultant',
    image: imgSharmilaMohapatra,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Certified PRISM Brain Mapping Practitioner | NLP & POSH Trainer | Former Dean - SIES',
    color: 'gold-accent',
    bio: 'Dr. Sharmila Mohapatra is a distinguished academician and communication expert with an illustrious career spanning over three decades. As the former Dean – Academics and General Management at SIES College of Management Studies and SIES School of Business Studies, she has significantly contributed to curriculum development, faculty mentoring, and institutional accreditation processes. She has been actively involved in ensuring academic excellence and governance through her leadership roles and expertise in communication and management education.',
    sections: [
      {
        title: 'Academic & Training Credentials',
        type: 'list-items',
        items: [
          'Certified PRISM Brain Mapping Practitioner',
          'Associate Practitioner of Neuro-Linguistic Programming (NLP)',
          'Certified POSH (Prevention of Sexual Harassment) Trainer',
          'Life Member of ISTD (Indian Society for Training and Development)'
        ]
      },
      {
        title: 'Soft Skills and Communication Expertise',
        type: 'grid-items',
        items: [
          'Presentation Skills',
          'Email and Report Writing',
          'Public Speaking and Group Discussions',
          'Interview Skills',
          'Sensitivity in Internal and External Communication',
          'Diversity and Inclusion in the Workplace'
        ]
      },
      {
        title: 'Research & Publications',
        type: 'list-items',
        items: [
          'Authored over 15 research papers in reputed national and international journals',
          'Published a textbook on Business Communication specifically tailored for B. Com. (Financial Markets)',
          'Active journal reviewer and thesis evaluator'
        ]
      },
      {
        title: 'Awards & Recognitions',
        type: 'list-items',
        items: [
          'Best Teacher Award (2016) from the Higher Education Forum',
          'Felicitation by Graceful Hands (March 2024), a Government of India awarded NGO, for her three-decade contribution to the education sector'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'As a consultant, she has successfully designed and implemented competency frameworks for organizations, enabling structured performance evaluation and role alignment. She integrates neuroscience-based behavioral tools to enhance team dynamics, communication, and leadership effectiveness.'
    }
  },
  'vivek-prakash': {
    name: 'Vivek Prakash, PMP, MCP',
    role: 'Project Management Advisor',
    image: imgPrakash,
    location: 'Senior Advisor – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'PMP & MCP Certified | 30+ Years of Industry Experience | Founder of pmwares',
    color: 'blue-accent',
    bio: 'Vivek Prakash is a veteran Project Management Professional with over three decades of experience in training, consulting, mentoring, and leadership development. As a certified PMP (Project Management Professional) and MCP (Microsoft Certified Professional), he has played a pivotal role in shaping the project management landscape across India. He is the founder of pmwares and Aapt Training and Management Services, two reputed firms providing top-tier project management consulting and capability-building programs.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'Project Management Consulting & Training',
          'Coaching Senior Leadership & PMO Teams',
          'Strategic Planning & Execution',
          'Mentorship for CEOs, Senior Managers & Project Managers',
          'Program/Portfolio Management Advisory',
          'PMI Standards & Methodology Deployment',
          'Organizational PM Culture Development'
        ]
      },
      {
        title: 'Major Contributions & Leadership Roles',
        type: 'list-items',
        items: [
          'Founder of PMP Club (2004) under the PMI Mumbai Chapter – a pioneering initiative fostering community-based learning among PM professionals',
          'Chairperson for PMI’s Hindi Translation of PMBOK® Guide (5th Edition, 2013 and 6th Edition, 2017)',
          'Currently leads the Project Manager’s Club of Pune in collaboration with College of Engineering Pune (COEP) – a platform for continuous development and knowledge sharing'
        ]
      },
      {
        title: 'Training & Advisory Clientele',
        type: 'competencies',
        items: [
          { category: 'Government & Defence', details: 'Department of Atomic Energy (DAE), HEMRL (DRDO)' },
          { category: 'Corporate & Engineering', details: 'Tata Power, KSB, Honeywell, Mahindra & Mahindra, Orient Cement, Zensar Technologies, ZF India' },
          { category: 'Financial & Insurance', details: 'HDFC Life' },
          { category: 'Manufacturing & Infrastructure', details: 'Welspun, other mid-large-scale enterprises' }
        ]
      }
    ],
    footerBlock: {
      title: 'Legacy and Impact at 3SV',
      text: 'Through a unique blend of practical expertise, formal frameworks, and personalized coaching, Vivek Prakash continues to enable organizations to mature their project management practices, reduce risk, and drive performance. His work directly supports PMI-aligned delivery excellence, strategic transformation initiatives, and enterprise-wide capacity building.'
    }
  },
  'amit-ghosh': {
    name: 'Mr. Amit K. Ghosh',
    role: 'Strategic Pharma Operations Consultant',
    image: imgGhosh,
    location: 'Senior Advisor – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Pharma Manufacturing Specialist | 40 Years of Industry Excellence | Director - Reflux Pharmaceuticals',
    color: 'gold-accent',
    bio: 'Mr. Amit K. Ghosh is a distinguished pharmaceutical industry leader with 40 years of rich and diverse experience across manufacturing, drug development, strategic operations, project management, and supply chain leadership. With a multi-disciplinary academic background, he brings a rare combination of technical depth, business acumen, and regulatory expertise to the pharmaceutical sector. Currently serving as Director at Reflux Pharmaceuticals Pvt. Ltd., Mr. Ghosh leads strategic initiatives in pharmaceutical manufacturing and formulation development, ensuring operational excellence, regulatory compliance, and innovation-driven growth.',
    sections: [
      {
        title: 'Educational Qualifications',
        type: 'list-items',
        items: [
          'B.Sc. – Bachelor of Science',
          'MBA in Marketing',
          'MBA in Finance',
          'Diploma in Intellectual Property Rights',
          'Post-Graduate Diploma in International Drug Regulatory Affairs'
        ]
      },
      {
        title: 'Leadership & Professional Expertise',
        type: 'competencies',
        items: [
          { category: 'Pharma Manufacturing & Dev', details: 'Oversight of product development, production planning, GMP compliance, and large-scale pharma operations.' },
          { category: 'Project & Strategic Management', details: 'Managing cross-functional teams, optimizing timelines and cost, and aligning projects with organizational objectives.' },
          { category: 'SCM Risk & Benchmarking', details: 'Designing resilient supply chain frameworks, forecasting disruptions, and setting KPIs for performance benchmarking.' },
          { category: 'Operations Optimization', details: 'Applying analytical and quantitative operations research techniques for improving cost, productivity, and resource utilization.' }
        ]
      },
      {
        title: 'Career History',
        type: 'industry-list',
        desc: 'His extensive career spans major pharmaceutical giants where he contributed significantly to large-scale operations, corporate planning, production efficiency, and quality-driven project execution:',
        items: [
          'Infar India',
          'Ranbaxy',
          'Kopran',
          'Elder Pharmaceuticals'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Mr. Ghosh contributes his deep domain knowledge to our training programs in Project Management, Strategic Management, Supply Chain Management, Logistics & Advanced SCM, Operations Management & Operations Research, and Pharmaceutical Management. He is widely respected for his practical teaching approach blending conceptual clarity with real-time case studies.'
    }
  },
  'manoj-sarasappan': {
    name: 'Mr. Manoj Sarasappan, PMP, LIMC',
    role: 'IT & Healthcare Transformation Leader',
    image: imgSarasappan,
    location: 'Senior Advisor – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'President & MD - Ikigai Techxecellence | PMP ATP Consultant | 33+ Yrs Global IT & Operations Experience',
    color: 'indigo-accent',
    bio: 'Mr. Manoj Sarasappan is a dynamic, result-driven business leader with 33+ years of diversified global experience in IT, Healthcare RCM, Business Analytics, Operations Management, P&L Leadership, and Strategic Transformation. A distinguished professional recognized for setting up organizations from the ground up, Manoj has consistently demonstrated excellence in scaling businesses, driving high-performance teams, and building robust operational ecosystems that align technology, strategy, and measurable business outcomes.',
    sections: [
      {
        title: 'Educational & Professional Qualifications',
        type: 'list-items',
        items: [
          'B.E. Mechanical – Shivaji University',
          'Master’s in Administrative Management – Mumbai University',
          'PGCM – Business Analytics – SIESCOMS',
          'PMP (PMI) Certified (since 1996) | LIMC Graduate (2017) | Lean Six Sigma Black Belt (KPMG)',
          'ISO 9001:2015 & ISO 27001:2013 Internal Auditor',
          'PMI-ACP 24-Hr Classroom Training'
        ]
      },
      {
        title: 'Core Expertise & Skills',
        type: 'grid-items',
        items: [
          'Strategic IT & Business Planning',
          'RCM Operations & US Healthcare Delivery',
          'Project & Program Management (PMP ATP)',
          'BPO/BPM/IT Operations Leadership',
          'Business Transformation & Process Re-engineering',
          'P&L Management, Budgeting & Forecasting',
          'Agile Team Management & Leadership Development',
          'Data-Driven Operational Excellence',
          'ISO 9001/27001 Audits, Compliance & Governance'
        ]
      },
      {
        title: 'Corporate Leadership & Strategic Impact',
        type: 'list-items',
        items: [
          'Held key executive roles at GEBS, Infinx, Datamatics, Nirvana Datatech, Touchcore Systems, and now Ikigai Techxecellence',
          'Built companies from scratch to multi-million-dollar revenue engines (scaling businesses to $11M, $12M, and INR 10 Cr from zero baseline)',
          'Scaled US Healthcare RCM workforces from 120 to 1200 and 600 to 1200 employees by instituting process governance and skill development',
          'Established end-to-end US Healthcare RCM businesses, ICD-10 certification programs, and Centres of Excellence for coding, billing, and analytics',
          'Led software development centres and digitization projects using AI & ML for healthcare collections improvement'
        ]
      },
      {
        title: 'Community Engagement & Professional Affiliations',
        type: 'list-items',
        items: [
          'VP Outreach & VP Professional Development at PMI Mumbai Chapter, streamlining PM forums and evangelizing PM across sectors',
          'Past President of Rotary Club of Navi Mumbai Central (2021-22), leading humanitarian and community service initiatives',
          'Rotary District 3142 leadership contributor, serving as Sergeant-at-Arms and Avenue Chair'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Manoj serves as a Senior Consultant and Visiting Faculty, instructing in project management, agile methodologies, and healthcare analytics. He uses clinical cases and enterprise IT models to help bridge academic skills with modern tech workflows.'
    }
  },
  'hemjith-balakrishnan': {
    name: 'Dr. Hemjith Balakrishnan',
    role: 'Academic Leader & Research Scholar',
    image: imgBalakrishnan,
    location: 'Senior Academic Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Ph.D. in Business Administration | 21+ Years of Academic Administration & Research',
    color: 'blue-accent',
    bio: 'Dr. Hemjith Balakrishnan is a highly accomplished and forward-thinking academic professional with over 21 years of rich experience in teaching, research, academic administration, and institutional development. Holding a Ph.D. in Business Administration, Dr. H. B. is widely recognized for his academic rigor, administrative foresight, and research impact in management education.',
    sections: [
      {
        title: 'Academic and Professional Credentials',
        type: 'list-items',
        items: [
          'Ph.D. in Business Administration, M.Phil., MBA, PGDM, and MA (Eco)',
          'UGC-NET qualified in Business Management',
          'Recognized Ph.D. guide and research supervisor at Savitribai Phule Pune University and Yashwantrao Chavan Maharashtra Open University (YCMOU)'
        ]
      },
      {
        title: 'Core Strengths & Expertise',
        type: 'grid-items',
        items: [
          'Academic Governance & IQAC Activities',
          'Accreditation Operations (NAAC, NBA, NIRF)',
          'Curriculum Development & Academic Auditing',
          'Faculty Development Programs (FDPs)',
          'Entrepreneurship Development & Mentoring',
          'Marketing & Strategic Management Research'
        ]
      },
      {
        title: 'Research Excellence and Publications',
        type: 'list-items',
        items: [
          'Over 36 research papers published in reputed peer-reviewed national and international journals',
          'Authored multiple books, edited volumes, and presented papers at over 40 conferences/seminars',
          'Conducted over 50 Faculty Development Programs (FDPs) and management workshops'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Dr. Balakrishnan guides R&D operations, research projects, curriculum alignment under NEP 2020, and institutional audits at 3SV. He is dedicated to building outcome-based academic models that nurture student leadership.'
    }
  },
  'nadeem-khan': {
    name: 'Nadeem A. Khan',
    role: 'Operations & Logistics Strategist',
    image: imgKhan,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'MBA (Operations) | B.E. Mechanical (Hons) | LL.B. | 25+ Yrs Operations & Supply Chain Experience',
    color: 'gold-accent',
    bio: 'Nadeem A. Khan is a distinguished Operations and Logistics professional with over 25 years of diversified experience across key industries including steel, building materials, and food & hospitality. With a strong academic foundation—spanning engineering, management, and law—he has held strategic leadership positions at JSW Steel Ltd., Ispat Industries Ltd., and NITCO Ltd., where he led operations, supply chain, logistics, and transformation initiatives.',
    sections: [
      {
        title: 'Educational Qualifications & Certifications',
        type: 'list-items',
        items: [
          'B.E. Mechanical (Hons.)',
          'MBA in Operations Management',
          'LL.B. (Bachelor of Laws)',
          'PG Diploma in Planning & Project Management',
          'Certified in ITIL Foundation, Scrum Agile, Power BI Tools'
        ]
      },
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'Production Planning & Inventory Management',
          'Sales & Operations Planning (S&OP)',
          'Logistics and Supply Chain Optimization',
          'Business Transformation & Excellence (TQM, Six Sigma, QS 9000, ISO 14000)',
          'IT Program Management (SAP – SD, BI, Salesforce CRM)',
          'Digitisation Initiatives and Data Analytics'
        ]
      },
      {
        title: 'Industry Positions Held',
        type: 'list-items',
        items: [
          'General Manager – Operations, affiliate of JSW Steel Ltd.',
          'Head – Operations and Logistics, NITCO Ltd.',
          'Senior management roles at JSW Steel Ltd. and Ispat Industries Ltd.',
          'Promoter & Entrepreneur of Tawa Foods in the food & hospitality sector',
          'Member of the Harvard Business Review Advisory Council and active member of Rotary India'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Mr. Khan serves as a Senior Consultant and Visiting Faculty, teaching Service Operations Management, SCM systems, and Business Analytics at 3SV. He specializes in designing end-to-end digital operational strategies.'
    }
  },
  'chandrasen-sharma': {
    name: 'Mr. Chandrasen B. Sharma',
    role: 'Operations & Materials Management Consultant',
    image: imgSharma,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'GDMM | IATA/FIATA Certified | 37+ Years Professional Experience in Warehousing & Logistics',
    color: 'indigo-accent',
    bio: 'With over 37 years of distinguished professional experience in Operations, Logistics, Warehousing, Purchasing, and Distribution, Mr. Chandrasen B. Sharma has earned a reputation as a committed professional, industry trainer, and academician dedicated to blending innovation, perseverance, and technology into impactful knowledge delivery. His career is rooted in domain expertise and hands-on leadership, with a strong foundation in ISO 9000, ISO 14000, and OHSAS auditing standards.',
    sections: [
      {
        title: 'Academic Engagements & Lectureships',
        type: 'list-items',
        items: [
          'Honorary Lecturer at Indian Institute of Management (IIM) Mumbai – Shipping, Logistics & SCM Course (2024–Present)',
          'Honorary Lecturer at Mumbai University’s Garware Institute – PGDLSCM, BMSCCFFL, etc. (2013–Present)',
          'Honorary Lecturer at SIES Institute of Business Management – PGDM, MMS (2015–Present)',
          'Honorary Lecturer at Alkesh Dinesh Mody Institute (MMS, 2023–Present) and Indian Institute of Freight Forwarders (IIFF DCCFF, 2011–Present)',
          'Certified online teaching coordinator (Ramanujan College, Delhi, 2020 FDP)'
        ]
      },
      {
        title: 'Courses Handled & Teaching Focus',
        type: 'grid-items',
        items: [
          'Advanced Supply Chain Management & International Logistics',
          'Total Quality Management & Lean Manufacturing',
          'Operations, Materials, Warehousing & Inventory Management',
          'CSR, Business Ethics & Business Process Re-engineering (BPR)',
          'Transportation Systems (Road, Rail, Air, Sea)',
          'Project Management & International Business'
        ]
      },
      {
        title: 'Corporate & Industrial Experience',
        type: 'list-items',
        items: [
          '25 Years at Larsen & Toubro Group – Manager, Purchase & Stores',
          '2 Years at Future Group – Warehouse Manager',
          '5 Years at Safe & Secure Logistics Pvt. Ltd. – All India Head: Distribution & Warehousing',
          '5 Years at All Cargo Logistics – Sr. Manager: Warehousing & New Projects'
        ]
      },
      {
        title: 'Qualifications & Memberships',
        type: 'list-items',
        items: [
          'Diploma in Mechanical Engineering (Gujarat, 1982)',
          'GDMM in Materials Management – IIMM Mumbai (1986)',
          'IATA/FIATA Introductory Course – Montreal (2006)',
          'Landmark Forum Leadership Course (6 Months)',
          'Active member of the Rotary Club of Navi Mumbai Central'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Mr. Sharma conducts strategic courses in Materials Management, Warehouse Audits, and Port Logistics. He helps student groups understand large scale supply chain networks through case studies from L&T and Future Group.'
    }
  },
  'manoranjan-prusty': {
    name: 'Mr. Manoranjan Prusty',
    role: 'Digital Marketing Strategist & Senior Consultant',
    image: imgPrusty,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Google Certified Digital Marketer | 15+ Years of Expertise in SEO, SEM, SMO & Digital Analytics',
    color: 'blue-accent',
    bio: 'Mr. Manoranjan Prusty is a Google-certified digital marketing professional with a stellar track record in executing data-driven strategies across the digital spectrum. With over a decade and a half of hands-on experience, he brings deep expertise in SEO, search engine marketing, social media optimization, and digital analytics, both as a practitioner and a thought leader. He has held senior positions such as SEO Lead at Birds Eye Systems and Digital Marketing Manager at Digit9.0 Web Marketing, with impactful stints at Eros International, Kompass India, and multiple other reputed organizations. He also runs his own digital blog, astroguruonline.com, showcasing his entrepreneurial edge.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'SEO, SEM, SMO Strategy',
          'Google Analytics & Search Console',
          'App Store Optimization (ASO)',
          'Content Writing & Digital PR',
          'Campaign Management & ROI Analysis',
          'HTML Basics, Site Optimization, Meta & Schema Tagging',
          'Competitor Research, Website Audits, Keyword & Backlink Strategy',
          'Social Media Campaigns & Engagement',
          'Article/Blog Creation, Forum Posting'
        ]
      },
      {
        title: 'Key Achievements & Projects',
        type: 'list-items',
        items: [
          'Led digital campaigns for high-traffic platforms like ridlr.in, erosnow.com, and kompass.com',
          'Elevated online visibility and lead generation for multimedia channels including YouTube, Facebook, and Twitter through organic and paid strategies',
          'Managed complete SEO lifecycle: keyword research, on-page and off-page SEO, app store optimization (ASO), link-building, content optimization, and campaign analytics',
          'Delivered SEO consultancy for 3rd-party websites and optimized content across platforms, contributing to exponential traffic growth'
        ]
      },
      {
        title: 'Education, Certifications & Skills',
        type: 'list-items',
        items: [
          'Bachelor of Arts, Utkal University (1994)',
          'Google Certified in Digital Marketing',
          'Skilled in MS Office, Dreamweaver, FTP, Filezilla, Linux, and Windows OS',
          'Global exposure through projects in Europe and Asia as an interpreter at Maharishi Vedic University'
        ]
      }
    ],
    footerBlock: {
      title: 'Academic & Mentorship Contributions',
      text: 'Mr. Prusty has contributed to academic development through lectures and workshops delivered at prestigious institutions like IIT Bombay, SIES College of Management Studies, and EMDI Institute of Media and Communication, sharing his industry insights with aspiring digital marketers.'
    }
  },
  'zafar-mukadam': {
    name: 'Zafar Mukadam',
    role: 'Strategic HR Leader & Behavioural Coach',
    image: imgMukadam,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Strategic Human Resource Leader | Behavioural Coach | HR Policy Expert',
    color: 'gold-accent',
    bio: 'Mukadam Zafar is a dynamic and empathetic Human Resources Leader with over 30 years of diversified industry experience across manufacturing, shipping, engineering, and training sectors. Currently serving as Departmental Head – HR at Wudtools, he brings a powerful blend of strategic HR policy-making, behavioural coaching, and people-centric operations.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'Talent Management & Workforce Planning',
          'Employee Relations & Retention Strategies',
          'Performance Management Systems (PMS)',
          'Behavioural Development & Coaching',
          'HR Policies, Compensation & Benefits Design',
          'Organizational Development & Change Management',
          'Succession Planning & Recruitment Strategy',
          'Compliance, Labour Law, and Exit Formalities',
          'Learning & Development (L&D) Program Design',
          'HRIS & MIS Reporting'
        ]
      },
      {
        title: 'Key Leadership Roles & Deliverables',
        type: 'competencies',
        items: [
          { category: 'Head - HR / HR Business Partner', details: 'Acted as single point of contact (SPOC) for HR across verticals; Designed HR strategies for retention, succession, and recognition; Implemented online PMS systems.' },
          { category: 'HR Section Head', details: 'Drove policy formulation and PMS cycle execution; Oversaw annual increments, promotions, and alignment with pay-for-performance models; Built KRA templates.' },
          { category: 'Executive - HR / EA', details: 'Managed onboarding, confirmations, grievance handling, and separation; Administered HR databases and performance tracking dashboards.' }
        ]
      },
      {
        title: 'Academic Credentials',
        type: 'list-items',
        items: [
          'MBA – Human Resource Management & Marketing (IBMS, 2008)',
          'PG Diploma – Labour Law (2016)',
          'PG Diploma – Psychological Counselling (Institute of Psychotherapy and Management Sciences, 2007)',
          'B.Com – Mumbai University (1988)'
        ]
      },
      {
        title: 'Industry Background',
        type: 'industry-list',
        desc: 'Mukadam Zafar has worked with renowned names across shipping, engineering, training, and manufacturing sectors:',
        items: [
          'Tata Group – Voltas Ltd.',
          'Denkee Ltd.',
          'Al Majdouie Group (KSA)',
          'Wilco Shipmanagement Ltd.',
          'The School of Self Development',
          'The American Institute of Languages'
        ]
      }
    ],
    footerBlock: {
      title: 'Mentoring at 3SV Edumentors & Consultants',
      text: 'Mukadam Zafar provides strategic mentorship in Human Resource metrics, employee relations, and psychological counseling. His lectures help students build core competencies in workplace emotional quotient and corporate alignment.'
    }
  },
  'dinesh-mishra': {
    name: 'Dinesh Kumar Mishra',
    role: 'Insurance VP & Risk Management Specialist',
    image: imgMishra,
    location: 'Senior Advisor – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Insurance Industry Expert | Legal & Finance Professional | Risk Management Specialist',
    color: 'indigo-accent',
    bio: 'Dinesh Kumar Mishra is a highly accomplished insurance professional and academic with over 39 years of distinguished experience in the insurance, legal, and finance sectors. A veteran of The New India Assurance Co. Ltd., he has consistently demonstrated excellence in underwriting, claims management, legal compliance, HR operations, and risk evaluation.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'General & Corporate Insurance Advisory',
          'Claims, Legal Affairs, MACT & Consumer Forum Representation',
          'Risk Evaluation, Audit & Underwriting',
          'Insurance Laws & Compliance',
          'HRMD, Cost Control, Budgeting, Profit/Loss Management',
          'Customer Relationship Management in BFSI & Corporate Sectors',
          'Training & Mentorship for Insurance Professionals',
          'Drafting Policy Clauses and Process Implementation',
          'Broker Licensing and Advisory'
        ]
      },
      {
        title: 'Academic & Professional Qualifications',
        type: 'list-items',
        items: [
          'MBA (Finance) – Devi Ahilya Vishwavidyalaya, Indore – 1997 (First Division with Distinction)',
          'LL.B. – Barkatullah University, Bhopal – 1994',
          'B.Sc. (Biology) – Jiwaji University, Gwalior – 1976',
          'Pursuing PhD in MBA – Bhagwant University, Ajmer',
          'Insurance Inspectorate – Federation of Insurance Institutes (1980)',
          'Licentiate (1997) & Associate (2005) – Insurance Institute of India',
          'Brokers Exam – NIA Pune (2016)'
        ]
      },
      {
        title: 'Key Career Highlights',
        type: 'list-items',
        items: [
          'Currently serving as Vice President – Direct Business at Anzen Insurance Brokers Pvt. Ltd., Mumbai',
          'Previously held senior roles at Peraj Insurance Brokers and Unison Insurance',
          '29+ years at The New India Assurance Co. Ltd., progressing from Development Officer to Divisional Manager',
          'Handled insurance portfolios for prestigious clients: Britannia, ITC, Procter & Gamble, JC Mills, Gwalior Rayon, nationalized banks, and steel foundries',
          'Recognized as Best Branch/Divisional Manager in Madhya Pradesh and Chhattisgarh regions'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Mr. Mishra serves as a senior management consultant and academic advisor at 3SV. He coordinates research papers, guides curriculum development in risk management, and leads studies into employer branding in IT industries.'
    }
  },
  'pratik-sathe': {
    name: 'Dr. Pratik Sathe',
    role: 'Consultant Medical & Hemato-Oncologist',
    image: imgSathe,
    location: 'Senior Advisor – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'DM (Medical Oncology) | MD (Internal Medicine) | 14+ Years of Clinical & Academic Experience',
    color: 'blue-accent',
    bio: 'Dr. Pratik Sathe is a highly accomplished Medical Oncologist and Hemato-Oncologist, bringing over 14 years of experience in the field of oncology with a rich blend of clinical expertise, academic excellence, and research contributions. He has successfully treated thousands of patients across India and abroad, offering holistic care in chemotherapy, targeted therapy, immunotherapy, and advanced haematological treatments.',
    sections: [
      {
        title: 'Academic Credentials',
        type: 'list-items',
        items: [
          'DM in Medical Oncology – Gujarat Cancer & Research Institute, Ahmedabad (2016)',
          'MD in Internal Medicine – B.J. Medical College, Pune (2011)',
          'MBBS – Smt. Kashibai Navale Medical College, Pune (2006)',
          'International Observerships: Tata Medical Centre (Kolkata) and Princess Margaret Hospital (Toronto)'
        ]
      },
      {
        title: 'Core Skills and Competencies',
        type: 'grid-items',
        items: [
          'Diagnosis & management of solid tumours (breast, lung, GI, head & neck)',
          'Expertise in leukaemia, lymphoma, myeloma, and chronic haematological disorders',
          'Skilled in bone marrow aspiration, biopsy, and intrathecal chemotherapy',
          'Evidence-based treatment planning and patient counselling',
          'Multidisciplinary tumour board participation & oncologic emergencies handling'
        ]
      },
      {
        title: 'Clinical & Research Achievements',
        type: 'list-items',
        items: [
          'Present Designation: Consultant Medical Oncologist at a leading tertiary care hospital',
          'Recipient of prestigious awards for Best Paper Presentations at various national and international oncology forums',
          'Actively involved in clinical research with multiple publications in peer-reviewed journals'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Dr. Sathe supports 3SV\'s healthcare research, clinical operations consulting, and student mentoring. He contributes to academic teaching, mentors DNB students, organizes CMEs, and guides precision medicine education.'
    }
  },
  'pratik-gupta': {
    name: 'Pratik Gupta',
    role: 'Electrical Site Engineer & MEP Specialist',
    image: imgPratikGupta,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Electrical Design, Site Execution & MEP Project Management Specialist',
    color: 'blue-accent',
    bio: 'Pratik Gupta is a dynamic and results-driven Electrical Engineer with over 4 years of hands-on experience in site execution, coordination, estimation, and project supervision for large-scale electrical and MEP installations. Demonstrated ability to manage high-pressure projects from design to commissioning, with a focus on safety, quality, and timely delivery. Well-versed with BMS systems, firefighting, HVAC layouts, and AutoCAD 2D drafting for precise project drawings.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'Project Execution & Site Management',
          'Electrical Estimation and Costing',
          'MEP Drawing Coordination',
          'Load Calculations & Cable Sizing',
          'BMS & ELV Systems Understanding',
          'AutoCAD Drafting (2D)',
          'Vendor & Contractor Coordination',
          'Safety & Compliance Standards (NBC/NEC)'
        ]
      },
      {
        title: 'Professional Experience',
        type: 'competencies',
        items: [
          { category: 'Electrical Site Engineer', details: 'Rahiman Electricals (June 2022 – Present): Executing site activities for residential and commercial electrical layouts. Coordinated between HVAC, plumbing, and electrical teams.' },
          { category: 'Junior Engineer', details: 'Arman Infrastructure Pvt Ltd (Dec 2019 – Feb 2022): Managed site execution and maintenance of electrical systems. Adhered to statutory electrical regulations.' }
        ]
      },
      {
        title: 'Education & Technical Skills',
        type: 'list-items',
        items: [
          'Diploma in Electrical Engineering – M.H. Saboo Siddik Polytechnic, Mumbai (2019)',
          'MS Office Suite (Excel, Word, PowerPoint) & AutoCAD 2D Layout Design',
          'Basic knowledge of Revit & Dialux',
          'Calculation of electrical loads, fault levels, and cable selection'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'Pratik mentors junior professionals in AutoCAD designs, MEP drawing coordination, electrical estimations, and site operations at 3SV, providing direct project-based training on construction and industrial engineering standards.'
    }
  },
  'subarna-rath': {
    name: 'Subarna Rath',
    role: 'Computer Science & Quality Training Consultant',
    image: imgRath,
    location: 'Senior Consultant – 3SV Edumentors & Consultants, Navi Mumbai',
    tagline: 'Quality Management & Computer Science Educator | LMS & Content Developer | 24+ Yrs Experience',
    color: 'gold-accent',
    bio: 'With a dedicated career spanning over 24 years, Subarna Rath has established herself as a multifaceted professional excelling in education, training, consultancy, and technology management. Her passion for teaching, eye for detail, and commitment to organizational and societal development have consistently translated into tangible results across various domains.',
    sections: [
      {
        title: 'Core Competencies',
        type: 'grid-items',
        items: [
          'Quality Management and Academic Excellence',
          'Computer Science, Mathematics & Statistics Education',
          'Website & Learning Management System (LMS) Development',
          'Content Development and Management',
          'Business Development & Team Administration',
          'Social Media Strategy & Customer Service'
        ]
      },
      {
        title: 'Education',
        type: 'list-items',
        items: [
          'Master of Arts (History) – Utkal University (1990–1992)',
          'Bachelor of Education – Utkal University (1994–1996)',
          'Diploma in Computer Application – Lakhotia Institute (1992–1994)'
        ]
      },
      {
        title: 'Professional Traits & Honors',
        type: 'list-items',
        items: [
          'Best Presenter Award, recognizing outstanding communication and presentation abilities',
          'Client & Learner Focused: Known for customer service and retention strategies that prioritize individual attention',
          'Growth-Oriented Mindset: Committed to achieving organizational goals through continuous learning and team empowerment'
        ]
      }
    ],
    footerBlock: {
      title: 'Current Role at 3SV Edumentors & Consultants',
      text: 'At 3SV, Subarna manages the development of hybrid digital learning infrastructure, drafts training manuals, and leads workshops in computer science application and quality control metrics.'
    }
  }
};

export default function FacultyDetails({ facultyId }) {
  const profile = facultyProfiles[facultyId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [facultyId]);

  if (!profile) {
    return (
      <div className="faculty-not-found">
        <h2>Faculty Profile Not Found</h2>
        <p>The profile you are looking for does not exist or has been removed.</p>
        <a href="#faculty" className="back-home-btn-accent">Back to Faculty List</a>
      </div>
    );
  }

  return (
    <div className={`faculty-details-page ${profile.color}`}>
      {/* Background Graphic elements */}
      <div className="bg-glow-circle circle-1"></div>
      <div className="bg-glow-circle circle-2"></div>

      <div className="details-container">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="breadcrumb-area">
          <a href="#faculty" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Advisory & Faculty</span>
          </a>
        </div>

        {/* Profile Header Card */}
        <header className="profile-header-card glass">
          <div className="profile-header-grid">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar-circle">
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} className="profile-avatar-img" />
                ) : (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>
            </div>
            
            <div className="profile-main-info">
              <span className="profile-badge">Senior Advisor Profile</span>
              <h1 className="profile-title">{profile.name}</h1>
              <h2 className="profile-subtitle">{profile.role}</h2>
              {profile.location && <p className="profile-loc">{profile.location}</p>}
              <div className="profile-tagline-wrap">
                <p className="profile-tagline">{profile.tagline}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Content Grid */}
        <div className="profile-content-grid">
          
          {/* Left Column - Biography & Vision */}
          <div className="profile-left-col">
            
            <section className="profile-card-block glass">
              <h3 className="block-title">Professional Profile</h3>
              <p className="bio-text">{profile.bio}</p>
            </section>

            {profile.footerBlock && (
              <section className="profile-card-block vision-block glass">
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h4 className="vision-title">{profile.footerBlock.title}</h4>
                <p className="vision-text">{profile.footerBlock.text}</p>
              </section>
            )}
            
          </div>

          {/* Right Column - Specialized Sections */}
          <div className="profile-right-col">
            {profile.sections.map((sec, idx) => (
              <section key={idx} className="profile-card-block glass">
                <h3 className="block-title">{sec.title}</h3>
                
                {sec.type === 'competencies' && (
                  <div className="competency-list">
                    {sec.items.map((item, cIdx) => (
                      <div key={cIdx} className="competency-item">
                        <div className="competency-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="competency-content">
                          <span className="competency-category">{item.category}</span>
                          <p className="competency-details">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'list-items' && (
                  <ul className="bullet-list">
                    {sec.items.map((item, lIdx) => (
                      <li key={lIdx} className="bullet-item">
                        <span className="bullet-bullet"></span>
                        <span className="bullet-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.type === 'grid-items' && (
                  <div className="grid-list">
                    {sec.items.map((item, gIdx) => (
                      <div key={gIdx} className="grid-item-card">
                        <div className="grid-item-dot"></div>
                        <p className="grid-item-text">{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'industry-list' && (
                  <div className="industry-block">
                    {sec.desc && <p className="industry-desc">{sec.desc}</p>}
                    <ul className="bullet-list">
                      {sec.items.map((item, iIdx) => (
                        <li key={iIdx} className="bullet-item">
                          <span className="bullet-bullet outline-bullet"></span>
                          <span className="bullet-content">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sec.type === 'table' && (
                  <div className="table-responsive">
                    <table className="impact-table">
                      <thead>
                        <tr>
                          {sec.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td>{row[0]}</td>
                            <td className="table-count-cell">
                              <span className="count-badge">{row[1]}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </section>
            ))}
          </div>

        </div>

        {/* Back Button Footer Action */}
        <div className="footer-action-area">
          <a href="#faculty" className="back-to-list-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to All Faculty</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

// Student Images
import imgAnshulChanne from '../assets/studentimages/Anshul Channe.jpg';
import imgAnujRaina from '../assets/studentimages/Anuj Raina.jpg';
import imgAshutoshKatwate from '../assets/studentimages/Ashutosh Katwate.jpg';
import imgAtharvaKannav from '../assets/studentimages/Atharva R Kannav.jpg';
import imgAyushChaudhari from '../assets/studentimages/Ayush Chaudhari.jpg';
import imgGoldiBhagwani from '../assets/studentimages/Goldi Bhagwani.jpg';
import imgHemantBodke from '../assets/studentimages/Hemant Bodke.jpg';
import imgMihirPalav from '../assets/studentimages/Mihir Palav.jpg';
import imgMohanGhute from '../assets/studentimages/Mohan Ghute.jpg';
import imgAditiKarle from '../assets/studentimages/Ms. Aditi Karle.jpg';
import imgKashishGanjave from '../assets/studentimages/Ms. Kashish Ganjave.jpg';
import imgRutujaKulkarni from '../assets/studentimages/Ms. Rutuja Kulkarni.jpg';
import imgOmJaiswal from '../assets/studentimages/Om Jaiswal.jpg';
import imgPratikshaGurav from '../assets/studentimages/Pratiksha Gurav.jpg';
import imgPravinRajbhar from '../assets/studentimages/Pravin Rajbhar.jpg';
import imgSamiranMohanty from '../assets/studentimages/Samiran Mohanty.jpg';
import imgShreyasParab from '../assets/studentimages/Shreyas Parab.jpg';
import imgSwaraliBhoir from '../assets/studentimages/Swarali Bhoir.jpg';
import imgSwaroopKarlkar from '../assets/studentimages/Swaroop Karlkar.jpg';
import imgTanmayTure from '../assets/studentimages/Tanmay Ture.jpg';
import imgYogeetaPande from '../assets/studentimages/Yogeeta Pande.jpg';

export const crcFeatures = [
  {
    title: "100% Placement Referral Assistance",
    desc: "Our active corporate relations team partners with leading organizations in Mumbai, Pune, and Bangalore to host exclusive campus recruitment drives and referrals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    title: "1-on-1 Mock Interview Drills",
    desc: "Practice with seasoned industry professionals who evaluate your technical knowledge, analytical approach, communication skills, and project descriptions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    title: "ATS-Friendly Resume Builder",
    desc: "Create resumes tailored to match automated recruiter filters. We help detail your projects, technical certifications, and core competencies to ensure you stand out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
    )
  },
  {
    title: "LinkedIn & Git Optimization",
    desc: "Your digital footprint is your first impression. We optimize your LinkedIn profile, clean up your GitHub repositories, and package your code portfolio professionally.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  }
];

export const studentFeedbacks = [
  {
    id: 1,
    name: "Yogeeta Pande",
    role: "Summer Intern",
    category: "SIP Internship",
    image: imgYogeetaPande,
    feedback: "During my 2 months of internship at 3SV Iearned the importance of meeting deadlines and Collaborating with teams. I also developed skills like time management and adapting quickly to new tasks. I also had an opportunities to work on different projects and get knowledge of the practical corporate world."
  },
  {
    id: 2,
    name: "Hemant Bodke",
    role: "SIP Intern - Financial Analysis",
    category: "Finance & Analytics",
    image: imgHemantBodke,
    feedback: "During my SIP at 3SV Edumentors & Consultants, I gained practical exposure to various aspects of financial analysis and reporting. I learned how to interpret financial statements and conduct ratio analysis. This training has helped me bridge the gap between theoretical knowledge and practical application."
  },
  {
    id: 3,
    name: "Goldi Bhagwani",
    role: "Incubator Program Scholar",
    category: "Incubation & Startup",
    image: imgGoldiBhagwani,
    feedback: "I am truly grateful to 3SV Edumentors and Consultants for the invaluable opportunities they have provided me. Being a part of their incubator program has been a transformative experience. Their unwavering support and encouragement have allowed me to bring my ideas on hydroponics to life. The access to resources, mentorship, and a conducive working environment have played a crucial role in helping me develop a practical and effective module on this subject. I deeply appreciate the platform they’ve created for aspiring innovators like myself, and I feel genuinely blessed to have been a part of this journey."
  },
  {
    id: 4,
    name: "Pravin Rajbhar",
    role: "MMS (Finance) - GNIMS",
    category: "Finance & Analytics",
    image: imgPravinRajbhar,
    projectTitle: "Advance Financial Forecasting for Selective Edible Products",
    institute: "Guru Nanak Institute of Management Studies",
    feedback: "During my SIP at 3SV Edumentors & Consultants, I worked on a project focused on financial forecasting using regression analysis for selective edible products. The experience helped me understand practical forecasting techniques, data handling, and financial modeling. I’m especially thankful to Dr. Vilas Chaudhari sir for his continuous support and guidance in explaining key concepts and helping me interpret the data effectively. This internship added great value to my learning and professional development."
  },
  {
    id: 5,
    name: "Anuj Raina",
    role: "SIP Intern",
    category: "SIP Internship",
    image: imgAnujRaina,
    feedback: "I would like to extend my heartfelt appreciation for the SIP (Summer Internship Program) training conducted by 3SV Edumentors and Consultants under the guidance of Mr. Vilas Chaudhari. The training program was insightful, practical, and exceptionally well-organized. Mr. Vilas Chaudhari demonstrated deep knowledge and professionalism throughout the sessions. His teaching style was engaging, and he made complex concepts easy to understand through real-life examples, case studies, and interactive discussions. His mentorship was instrumental in helping us bridge the gap between academic knowledge and industry expectations. The training emphasized not only technical skills but also professional development, communication, and teamwork. The hands-on tasks and live projects gave us valuable exposure to real-world scenarios, enhancing both our confidence and problem-solving abilities."
  },
  {
    id: 6,
    name: "Anshul Channe",
    role: "SIP Intern",
    category: "SIP Internship",
    image: imgAnshulChanne,
    feedback: "I sincerely thank 3SV Edumentors and Consultants for the insightful SIP training, led by Mr. Vilas Chaudhary. The program was well-structured, practical, and highly engaging. Mr. Chaudhary’s expertise and real-world examples made complex topics easy to grasp. His guidance helped bridge the gap between academics and industry expectations. The focus on both technical and soft skills, along with live projects, boosted our confidence and problem-solving abilities. I truly appreciate Mr. Chaudhary’s approachable nature and the personalized support he offered throughout the training."
  },
  {
    id: 7,
    name: "Pratiksha Gurav",
    role: "Summer Intern - Design & Finance",
    category: "SIP Internship",
    image: imgPratikshaGurav,
    feedback: "My summer internship was of 2 months. Where I learned the financial & regression method to use, creating & designing brochures for the company. Overall, the internship was a great learning experience."
  },
  {
    id: 8,
    name: "Rasika Kamble",
    role: "Training & Development Intern",
    category: "Training & HR",
    image: null, // Shimmer UI Placeholder
    feedback: "My summer internship in May 2024 at 3SV Edumentors, an online platform offering management certification courses, was an enriching experience. Under the guidance of Mr. Villas Choudhary, whose strong operational background and passion for continuous learning were truly inspiring, I joined as a Training & Development intern. My key responsibilities included designing a Six Sigma-certified course training schedule, creating enrolment and feedback forms, and planning a one-day program outline. This experience allowed me to deeply understand how structured training is developed to engage and attract learners. I also gained practical insights into the Six Sigma methodology and the strategic process of delivering impactful training programs. Being part of a growing startup helped me enhance my adaptability, creativity, and professional approach toward real world challenges."
  },
  {
    id: 9,
    name: "Shruti Rambade",
    role: "SIP Project Intern - Corporate Finance",
    category: "Finance & Analytics",
    image: null, // Shimmer UI Placeholder
    projectTitle: "Implementing Corporate Finance Strategies for Effective Capital Allocation & Cash Flow Optimization",
    feedback: "My Summer Internship Program Project Training at 3SV Edumentor and Consultants was an insightful and growth-oriented experience. During the training, I worked on the project titled 'Implementing Corporate Finance Strategies for Effective Capital Allocation and Cash Flow Optimization in Transportation Services.' This project allowed me to practically apply my academic knowledge in the field of finance. Throughout the training, I was engaged in financial analysis, report preparation, and strategy development related to corporate finance practices. I also contributed to content creation and brochure designing, which helped enhance my communication and marketing skills. The supportive work environment and consistent guidance from the team made the training highly productive."
  },
  {
    id: 10,
    name: "Saket Khalate",
    role: "SIP Project Intern",
    category: "SIP Internship",
    image: null, // Shimmer UI Placeholder
    feedback: "My experience during the SIP project training at 3SV Edumentors & Consultants was insightful and professionally enriching. The training sessions were well-structured and covered a wide range of topics relevant to our academic background and future career paths. Key highlights included hands-on learning applying theoretical knowledge to real-world scenarios, and supportive mentorship that clarified doubts and provided constructive feedback."
  },
  {
    id: 11,
    name: "Rasika Mahadik",
    role: "Summer Intern",
    category: "SIP Internship",
    image: null, // Shimmer UI Placeholder
    feedback: "Thank you for the incredible opportunity to intern under your guidance last year. It was a valuable experience that gave me meaningful exposure to real-world applications and helped me grow both personally and professionally. Your constant support and encouragement made a big difference in my learning and confidence."
  },
  {
    id: 12,
    name: "Avani Rawat",
    role: "SIP Project Winner",
    category: "SIP Internship",
    award: "Best Project Prize Winner",
    image: null, // Shimmer UI Placeholder
    feedback: "The training given for SIP Project during the internship at 3SV Edumentors and Consultants was excellent. It helped me win the best project prize in the SIP project. Detailed explanation was given and Vilas sir mentored the whole project and guided me well towards this success."
  },
  {
    id: 13,
    name: "Atharva R Kannav",
    role: "Six Sigma Scholar",
    category: "Six Sigma & Quality",
    image: imgAtharvaKannav,
    feedback: "I greatly enjoyed the course. It has greatly increased my knowledge and usability of Six Sigma techniques. I will use what I have learned here for the rest of my career."
  },
  {
    id: 14,
    name: "Om Jaiswal",
    role: "Operations Management Trainee",
    category: "Six Sigma & Quality",
    image: imgOmJaiswal,
    feedback: "Highly educational and easy to understand course. This course changed my perception about management and quality control. This course helped me in enhancing my knowledge on management and waste reduction. I would suggest this course to those who are new or looking forward to join industry in operational department. Concepts were very well explained."
  },
  {
    id: 15,
    name: "Visu",
    role: "Six Sigma Green Belt Certified",
    category: "Six Sigma & Quality",
    institute: "Indian Statistical Institute - Pune Chapter",
    image: null, // Shimmer UI Placeholder
    feedback: "Six Sigma Green Belt course is very useful in corporate life and I am happy to say that I completed my Six Sigma course from the Indian Statistical Institute of Pune chapter where I gained knowledge of DMAIC and Six Sigma by using Minitab. It will definitely be helpful for me in the future for analytical skills."
  },
  {
    id: 16,
    name: "Swarali Bhoir",
    role: "Operations & Quality Trainee",
    category: "Six Sigma & Quality",
    image: imgSwaraliBhoir,
    feedback: "The course is very insightful, with well-prepared learning materials and a high level of engagement that allowed me to stay focused from start to end. We worked on a practical project that helped us understand the subject better. I would strongly recommend anyone in the operations sector to enroll in the ISI Six Sigma Green Belt Certification course."
  },
  {
    id: 17,
    name: "Ayush Chaudhari",
    role: "Six Sigma Green Belt Scholar",
    category: "Six Sigma & Quality",
    image: imgAyushChaudhari,
    feedback: "The Six Sigma Green Belt Course proved to be an incredibly insightful journey, delving into the intricacies of quality management across diverse industries. Through hands-on projects, I encountered firsthand the various hurdles that organizations face in day-to-day operations. This immersive experience equipped me with the tools and techniques needed to identify and overcome obstacles, streamlining processes and enhancing efficiency."
  },
  {
    id: 18,
    name: "Anurag Prabhakar Nimbalkar",
    role: "MMS IT - GNIMS (OJT & SIP)",
    category: "IT & Analytics",
    institute: "Guru Nanak Institute of Management Studies (GNIMS)",
    image: null, // Shimmer UI Placeholder
    feedback: "I, Anurag Prabhakar Nimbalkar, from MMS IT Department at GNIMS, have successfully completed my OJT and SIP with 3SV Edumentors & Consultancy. During the course of my training, I learned the basics of Python programming, algorithmic logic building, and data analytics, which helped me strengthen my technical foundation. I was also trained in research and analysis techniques, schedule management, and office norms. I am especially grateful for the daily continuous assessments and guidance provided by mentor Mr. Vilas Chaudhari."
  },
  {
    id: 19,
    name: "Mohan Ghute",
    role: "Logistics Strategy Scholar",
    category: "Logistics & SCM",
    image: imgMohanGhute,
    feedback: "I had an excellent learning experience at 3SV Edumentors & Consultants. Thanks to Vilas Sir’s deep industry insights and practical approach, I developed a solid understanding of logistics and business strategies. The supportive environment boosted my professional development. I highly endorse this program for anyone looking to advance in this field."
  },
  {
    id: 20,
    name: "Mihir Palav",
    role: "Logistics & Sourcing Trainee",
    category: "Logistics & SCM",
    image: imgMihirPalav,
    feedback: "My tenure with 3SV Edumentors and Consultants, under the mentorship of Vilas Sir, was profoundly impactful and intellectually rewarding. The project-based training served as a vital link between academic theory and practical execution, offering immersive, hands-on experience that enhanced my comprehension of real-world business dynamics."
  },
  {
    id: 21,
    name: "Ms. Rutuja Kulkarni",
    role: "Logistics & Business Trainee",
    category: "Logistics & SCM",
    image: imgRutujaKulkarni,
    feedback: "I had a highly beneficial learning experience at 3SV Edumentors & Consultants. Vilas Sir’s expert guidance and real-world examples made logistics concepts clear and relevant. The supportive professional culture boosted my confidence significantly. This training is ideal for anyone looking to enhance their practical business knowledge."
  },
  {
    id: 22,
    name: "Ms. Kashish Ganjave",
    role: "Strategic Sourcing Trainee",
    category: "Logistics & SCM",
    image: imgKashishGanjave,
    feedback: "My tenure with 3SV Edumentors and Consultants, under the mentorship of Vilas Sir, was profoundly impactful and intellectually rewarding. The project-based training served as a vital link between academic theory and practical execution, offering immersive, hands-on experience that enhanced my comprehension of real-world business dynamics."
  },
  {
    id: 23,
    name: "Swaroop Karlkar",
    role: "Logistics Workflow Trainee",
    category: "Logistics & SCM",
    image: imgSwaroopKarlkar,
    feedback: "The training at 3SV Edumentors & Consultants was a valuable opportunity to learn from real business scenarios. Under the guidance of Vilas Sir, I gained exposure to logistics workflows and industry expectations. The supportive team and professional setup made this experience both meaningful and rewarding."
  },
  {
    id: 24,
    name: "Ashutosh Katwate",
    role: "Business Operations Trainee",
    category: "Logistics & SCM",
    image: imgAshutoshKatwate,
    feedback: "My experience with 3SV Edumentors and Consultants under the guidance of Vilas Sir was enriching and insightful. The project training offered an opportunity to bridge academic knowledge with practical application, enabling hands-on learning that deepened my understanding of business operations."
  },
  {
    id: 25,
    name: "Samiran Mohanty",
    role: "Business Context Trainee",
    category: "Logistics & SCM",
    image: imgSamiranMohanty,
    feedback: "I found my training at 3SV Edumentors & Consultants to be an exceptionally positive and transformative experience. The mentorship of Vilas Sir was particularly beneficial, providing practical understanding of real-world logistics and business contexts. The professional culture at 3SV Edumentors & Consultants fostered clarity and strengthened my confidence."
  },
  {
    id: 26,
    name: "Ms. Aditi Karle",
    role: "MBA Scholar",
    category: "SIP Internship",
    image: imgAditiKarle,
    feedback: "My MBA journey with 3SV Edumentors and Consultants has been both enriching and transformative. Guided by Vilas sir, I gained a solid understanding of management concepts, enhanced by real-world industry insights. His ability to link theory with practice made learning engaging and practical."
  },
  {
    id: 27,
    name: "Shreyas Parab",
    role: "MBA Scholar",
    category: "SIP Internship",
    image: imgShreyasParab,
    feedback: "As an MBA student, my learning experience with 3SV Edumentors and Consultants has been incredibly enriching and impactful. Vilas sir brings a perfect blend of academic expertise and industry insights, creating a learning environment that bridges the gap between theoretical knowledge and real-world application."
  },
  {
    id: 28,
    name: "Tanmay Ture",
    role: "Logistics Trainee",
    category: "Logistics & SCM",
    image: imgTanmayTure,
    feedback: "My training experience at 3SV Edumentors & Consultants was insightful and enriching. Under the guidance of Vilas Sir, I gained practical exposure to real-world logistics and business scenarios. His support and expertise were invaluable. Highly recommended for professionals."
  }
];

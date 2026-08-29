// Complete course structure matching official curriculum spreadsheets
export const COURSE_CATEGORIES = [
  "All",
  "Excel Courses",
  "Management Analytics",
  "Logistics & Supply Chain",
  "Lean & Six Sigma",
  "Quality Management",
  "Digital Marketing",
  "Project Management",
  "Certificate Courses"
];

export const COURSES_DATA = [

  // ── 1. Excel Courses ──────────────────────────────────────────────────────
  {
    id: "excel-courses",
    title: "Excel Courses",
    category: "Excel Courses",
    duration: "45 Hours (Complete Course)",
    theme: "java-theme",
    badge: "Foundation to Advanced",
    description: "Master Microsoft Excel from fundamentals to advanced automation, analytics dashboards, and real-world capstone project execution.",
    // FLAT MODULE LIST (matches spreadsheet exactly)
    modules: [
      { name: "Excel Foundation Course",    icon: "📊", color: "#4f8ef7" },
      { name: "Excel Intermediate Course",  icon: "📈", color: "#7c5af7" },
      { name: "Excel Advance Course",       icon: "🚀", color: "#22c9a0" },
      { name: "Capstone Project",           icon: "🏆", color: "#f7c84f", isCapstone: true }
    ]
  },

  // ── 2. Certificate in Management Analytics (3 Months) ─────────────────────
  {
    id: "cert-management-analytics",
    title: "Certificate in Management Analytics and Business Excellence",
    category: "Management Analytics",
    duration: "3 Months (3 Hours / Weekdays)",
    theme: "ds-theme",
    badge: "3-Month Certificate",
    description: "Integrated management analytics program combining Excel analytics, applied statistics, Six Sigma Green Belt, project management, and domain specialization.",
    modules: [
      { name: "Excel - Foundation, Intermediate and Advance",  icon: "📊", color: "#4f8ef7" },
      { name: "Applied Statistics Including Predictive Analytics", icon: "📉", color: "#7c5af7" },
      { name: "Six Sigma Green Belt",                          icon: "🎯", color: "#22c9a0" },
      { name: "Project Management",                            icon: "📋", color: "#f76f4f" },
      {
        name: "Specialization Specific (Any One)",
        icon: "⚡",
        color: "#f7c84f",
        isSpecialization: true,
        options: [
          "Operations Analytics for Operations",
          "Marketing Analytics for Marketing",
          "HR Analytics for Human Resources",
          "Financial Modelling for Finance"
        ]
      },
      { name: "Capstone Project", icon: "🏆", color: "#f7c84f", isCapstone: true }
    ]
  },

  // ── 3. Professional Certificate (4.5 Months) ──────────────────────────────
  {
    id: "prof-cert-management-analytics",
    title: "Professional Certificate in Applied Management Analytics and Business Excellence",
    category: "Management Analytics",
    duration: "4½ Months (3 Hours / Weekdays)",
    theme: "python-theme",
    badge: "4.5-Month Professional",
    description: "Expanded professional certification adding Data Visualization and Digital Marketing Analytics to the core management analytics curriculum.",
    modules: [
      { name: "Excel - Foundation, Intermediate and Advance",  icon: "📊", color: "#4f8ef7" },
      { name: "Applied Statistics Including Predictive Analytics", icon: "📉", color: "#7c5af7" },
      { name: "Six Sigma Green Belt",                          icon: "🎯", color: "#22c9a0" },
      { name: "Data Visualization",                            icon: "📊", color: "#f76f4f" },
      { name: "Digital Marketing / Analytics",                 icon: "💻", color: "#4f8ef7" },
      { name: "Project Management",                            icon: "📋", color: "#7c5af7" },
      {
        name: "Specialization Specific (Any One)",
        icon: "⚡",
        color: "#f7c84f",
        isSpecialization: true,
        options: [
          "Operations Analytics for Operations",
          "Marketing Analytics for Marketing",
          "HR Analytics for Human Resources",
          "Financial Modelling for Finance"
        ]
      },
      { name: "Capstone Project", icon: "🏆", color: "#f7c84f", isCapstone: true }
    ]
  },

  // ── 4. Advanced Professional Certificate (6 Months) ───────────────────────
  {
    id: "adv-prof-cert-management-analytics",
    title: "Advanced Professional Certificate in Management Analytics and Digital Transformation",
    category: "Management Analytics",
    duration: "6 Months (3 Hours / Weekdays)",
    theme: "ml-theme",
    badge: "6-Month Advanced",
    description: "Flagship 6-month executive program covering Python, Machine Learning, Cost Control, Design Thinking, and Digital Transformation.",
    modules: [
      { name: "Excel - Foundation, Intermediate and Advance",  icon: "📊", color: "#4f8ef7" },
      { name: "Applied Statistics Including Predictive Analytics", icon: "📉", color: "#7c5af7" },
      { name: "Six Sigma Green Belt",                          icon: "🎯", color: "#22c9a0" },
      { name: "Cost Control Tools and Techniques in Industries", icon: "💰", color: "#f76f4f" },
      { name: "Data Visualization",                            icon: "📊", color: "#4f8ef7" },
      { name: "Python for Data Analytics",                     icon: "🐍", color: "#7c5af7" },
      { name: "Machine Learning by Using Python",              icon: "🤖", color: "#22c9a0" },
      { name: "Design Thinking",                               icon: "💡", color: "#f76f4f" },
      { name: "Digital Marketing / Analytics",                 icon: "💻", color: "#4f8ef7" },
      { name: "Project Management",                            icon: "📋", color: "#7c5af7" },
      {
        name: "Specialization Specific (Any One)",
        icon: "⚡",
        color: "#f7c84f",
        isSpecialization: true,
        options: [
          "Operations Analytics for Operations",
          "Marketing Analytics for Marketing",
          "HR Analytics for Human Resources",
          "Financial Modelling for Finance"
        ]
      },
      { name: "Capstone Project", icon: "🏆", color: "#f7c84f", isCapstone: true }
    ]
  },

  // ── 5. Logistics & Supply Chain (LEVELED) ─────────────────────────────────
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain Management Courses",
    category: "Logistics & Supply Chain",
    duration: "3 Months per Level (3 Hours / Weekdays)",
    theme: "python-theme",
    badge: "3-Level Progressive",
    description: "3-Level progressive certification in logistics operations, smart intralogistics, supply chain analytics, and circular economy strategies.",
    levels: [
      {
        levelNumber: "I",
        levelTitle: "Level I - Certificate in Logistics and Supply Chain Management Foundations",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Excel - Foundation, Intermediate and Advance",
          "Integrated Logistics and Supply Chain Management",
          "Applied Statistics and Business Research for Logistics and Supply Chains",
          "Materials, Inventory and Warehouse Management"
        ]
      },
      {
        levelNumber: "II",
        levelTitle: "Level II - Professional Certificate in Logistics Operations and Digital Supply Chains",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Lean Six Sigma Green Belt Course",
          "Strategic Procurement and Supplier Sourcing Management",
          "Freight Transportation and International Logistics Management",
          "Retail, E-Commerce and Smart Intralogistics Systems"
        ]
      },
      {
        levelNumber: "III",
        levelTitle: "Level III - Advanced Certificate in Global Supply Chain Strategy and Analytics",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Design Thinking",
          "Decision Models and Advanced Supply Chain Analytics",
          "Digital Technologies for Logistics and Supply Chains",
          "Global, International and Circular Supply Chain Management",
          "Capstone Project Execution"
        ]
      }
    ]
  },

  // ── 6. Lean & Six Sigma (FLAT — 3 Belt Courses) ──────────────────────────
  {
    id: "lean-six-sigma",
    title: "Lean & Six Sigma Course",
    category: "Lean & Six Sigma",
    duration: "2 Days to 12 Days + Capstone",
    theme: "devops-theme",
    badge: "Belt Certification Series",
    description: "Certified Yellow, Green, and Black Belt credentials focused on DMAIC methodologies, process mapping, Minitab analytics, and quality leadership.",
    modules: [
      {
        name: "Lean Six Sigma Yellow Belt Course",
        icon: "🟡",
        color: "#f7c84f",
        duration: "2 Days"
      },
      {
        name: "Lean Six Sigma Green Belt Course",
        icon: "🟢",
        color: "#22c9a0",
        duration: "6 Days + 1½ Month Capstone Project"
      },
      {
        name: "Lean Six Sigma Black Belt Course",
        icon: "⚫",
        color: "#334155",
        duration: "12 Days + 2½ Month Capstone Project"
      }
    ]
  },

  // ── 7. Quality & Operational Excellence (LEVELED) ─────────────────────────
  {
    id: "quality-operational-excellence",
    title: "Integrated Professional Certification in Quality and Operational Excellence",
    category: "Quality Management",
    duration: "2 Months per Level (3 Hours / Weekdays)",
    theme: "devops-theme",
    badge: "3-Level Quality Pathway",
    description: "End-to-end operational excellence pathway from quality control foundations to TQM and DFSS innovation.",
    levels: [
      {
        levelNumber: "I",
        levelTitle: "Level I - Certificate in Quality Management Foundations",
        duration: "2 Months (3 Hours / Weekdays)",
        subcourses: [
          "Quality Assurance, Quality Control and Workplace Excellence",
          "Applied Quality Tools and Root-Cause Problem-Solving",
          "Statistical Process Monitoring and Capability Management"
        ]
      },
      {
        levelNumber: "II",
        levelTitle: "Level II - Professional Certificate in Lean and Continuous Improvement",
        duration: "2 Months (3 Hours / Weekdays)",
        subcourses: [
          "Enterprise Total Quality Management and Japanese Operational Excellence",
          "Lean Value Stream Design and Waste Elimination",
          "Kaizen, Kanban and Mistake-Proofing Systems"
        ]
      },
      {
        levelNumber: "III",
        levelTitle: "Level III - Advanced Certificate in Quality Excellence",
        duration: "2 Months (3 Hours / Weekdays)",
        subcourses: [
          "Quality Analytics and Data-Driven Decision-Making",
          "Quality Management Practices for Process Improvement and Control",
          "DFSS and Preventive Quality Innovation",
          "Capstone Project Execution"
        ]
      }
    ]
  },

  // ── 8. Digital Marketing (LEVELED) ────────────────────────────────────────
  {
    id: "digital-marketing-certifications",
    title: "Digital Marketing Certification Courses",
    category: "Digital Marketing",
    duration: "3 Months per Level (3 Hours / Weekdays)",
    theme: "java-theme",
    badge: "3-Level Digital Track",
    description: "Full-stack marketing program covering search strategy, social media, MarTech automation, AI for growth, and campaign optimization.",
    levels: [
      {
        levelNumber: "I",
        levelTitle: "Level I - Certificate in Digital Marketing Foundations, Research and Search Strategy",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Excel - Foundation, Intermediate and Advance",
          "Digital Marketing Fundamentals and Integrated Strategy",
          "Applied Statistics and Business Research Methods for Digital Marketing",
          "Content Marketing, SEO, SEM and Digital Brand Communication"
        ]
      },
      {
        levelNumber: "II",
        levelTitle: "Level II - Advanced Certificate in Social Media, Digital Media and Marketing Technology",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Lean Six Sigma Green Belt Course",
          "Social Media Marketing, Analytics and Community Strategy",
          "Media Planning, Buying and Programmatic Advertising",
          "AdTech, MarTech, Data Integration and Marketing Automation"
        ]
      },
      {
        levelNumber: "III",
        levelTitle: "Level III - Professional Certificate in Performance Marketing, AI and Digital Project",
        duration: "3 Months (3 Hours / Weekdays)",
        subcourses: [
          "Design Thinking",
          "Performance Marketing and Campaign Optimisation",
          "Artificial Intelligence for Marketing and Business Growth",
          "Digital Marketing Project Management and Integrated Capstone Project",
          "Capstone Project Execution"
        ]
      }
    ]
  },

  // ── 9. Project Management (FLAT — individual courses) ────────────────────
  {
    id: "project-management-courses",
    title: "Project Management Courses",
    category: "Project Management",
    duration: "30 to 60 Hours per Course",
    theme: "ds-theme",
    badge: "10 Specialised Courses",
    description: "Specialized project management courses for freshers, working professionals, agile teams, risk leaders, smart city planners, and analytics practitioners.",
    modules: [
      { name: "Project Management Course for Freshers",                        icon: "🌱", color: "#22c9a0", duration: "30 Hours" },
      { name: "Project Management Course for Professionals",                   icon: "💼", color: "#4f8ef7", duration: "45 Hours" },
      { name: "Advanced Project Management",                                   icon: "🚀", color: "#7c5af7", duration: "60 Hours" },
      { name: "Sustainable, Green and Smart City Project Management",           icon: "🌿", color: "#22c9a0", duration: "60 Hours" },
      { name: "Strategic Project Risk and Resilience Management",               icon: "🛡️", color: "#f76f4f", duration: "60 Hours" },
      { name: "Agile and Hybrid Management",                                   icon: "⚡", color: "#4f8ef7", duration: "60 Hours" },
      { name: "Project Analytics and Predictive Project Management",           icon: "📊", color: "#7c5af7", duration: "60 Hours" },
      { name: "Applied Statistics and Business Research for Project Management", icon: "📉", color: "#f76f4f", duration: "60 Hours" },
      { name: "Quantitative Decision Models for Project Management",            icon: "🔢", color: "#22c9a0", duration: "60 Hours" },
      { name: "Project Business Analysis and Requirements Management",          icon: "📋", color: "#4f8ef7", duration: "60 Hours" }
    ]
  },

  // ── 10. Certificate Courses (FLAT — all 45-Hour individual modules) ─────────
  {
    id: "certificate-courses",
    title: "Specialized Certificate Courses (Individual Modules)",
    category: "Certificate Courses",
    duration: "45 Hours per Module",
    theme: "testing-theme",
    badge: "45-Hour Modules",
    description: "Single-subject intensive 45-hour certification modules across programming, data analytics, business intelligence, finance, logistics, and management.",
    modules: [
      { name: "C Programming",                                                       icon: "💻", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "C++ Programming",                                                     icon: "💻", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Data Structure",                                                      icon: "🗃️", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Python Programming",                                                  icon: "🐍", color: "#22c9a0",  duration: "45 Hours" },
      { name: "R Programming",                                                       icon: "📊", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Machine Learning Using Python",                                       icon: "🤖", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Applied Natural Language Processing for BA",                          icon: "🗣️", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Applied Deep Learning & Neural Network Modelling for Business Intelligence", icon: "🧠", color: "#f76f4f", duration: "45 Hours" },
      { name: "Data Visualization",                                                  icon: "📈", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Design Thinking",                                                     icon: "💡", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Operation Analytics",                                                 icon: "⚙️", color: "#22c9a0",  duration: "45 Hours" },
      { name: "HR Analytics",                                                        icon: "👥", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Digital Marketing",                                                   icon: "📱", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Marketing Analytics",                                                 icon: "📣", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Financial Modelling",                                                 icon: "💰", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Financial Technology",                                                icon: "🏦", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Market Research Analytics",                                           icon: "🔍", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Supply Chain Analytics",                                              icon: "🔗", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Spend Analytics",                                                     icon: "💳", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Sales and Distribution Analytics",                                    icon: "🛒", color: "#f76f4f",  duration: "45 Hours" },
      { name: "People Analytics",                                                    icon: "👤", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Customer Relationship Analytics",                                     icon: "🤝", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Strategic Predictive Modelling for Business Intelligence",            icon: "🎯", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Applied Statistics Including Predictive Analytics",                   icon: "📉", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Cost Control Tools and Techniques in Industry",                       icon: "📐", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Artificial Intelligence and Machine Learning",                        icon: "🤖", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Database Design and Administration",                                  icon: "🗄️", color: "#22c9a0",  duration: "45 Hours" },
      { name: "SQL and NoSQL Databases",                                             icon: "🛢️", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Database Performance Optimization",                                   icon: "⚡", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Cloud Databases",                                                     icon: "☁️", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Database Security and Governance",                                    icon: "🔒", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Source Code Management Tools",                                        icon: "🔧", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Pharmaceutical Analytics",                                            icon: "💊", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Freight Transportation",                                              icon: "🚢", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Retail Supply Chain Management",                                      icon: "🏪", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Procurement Management",                                              icon: "📦", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Ecommerce Supply Chain",                                              icon: "🛍️", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Advertising Analytics and Technology",                                icon: "📡", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Smart Intralogistics Systems & Industrial Automation",               icon: "🏭", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Warehouse Management & Analytics",                                    icon: "🏬", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Big Data & BA for Cross-Functional Business Agility",                icon: "🌐", color: "#4f8ef7",  duration: "45 Hours" },
      { name: "Strategic Negotiation Skills for Business Functions",                 icon: "🤜", color: "#7c5af7",  duration: "45 Hours" },
      { name: "Training and Development",                                            icon: "🎓", color: "#22c9a0",  duration: "45 Hours" },
      { name: "Performance Measurement",                                             icon: "📏", color: "#f76f4f",  duration: "45 Hours" },
      { name: "Business Process Reengineering & Benchmarking",                      icon: "🔄", color: "#4f8ef7",  duration: "45 Hours" }
    ]
  }
];

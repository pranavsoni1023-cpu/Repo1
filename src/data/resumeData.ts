import { FullResumeData } from '../types';

export const initialResumeData: FullResumeData = {
  profile: {
    name: "Pranav Soni",
    title: "BUSINESS OPERATIONS · SALES · DATA · TECHNOLOGY",
    tagline: "Smart, technology-enabled business operations, customer engagement, and data systems.",
    bio: "Business and technology student pursuing concurrent BBA and BCA degrees, with practical experience in sales, customer engagement, business operations, accounting and research. Proficient across Microsoft Office, Excel-based automation and reporting, Tally Prime, AI-assisted workflows and digital productivity tools. Participated in 5+ nationwide exhibitions as a salesperson, engaging directly with prospective clients and contributing to the collection of 1,000+ leads and orders. Strongly oriented toward smart, efficient execution—using research, technology and AI to solve problems, accelerate learning and improve the quality and efficiency of work.",
    email: "pranavsoni1023@gmail.com",
    phone: "+91 80056 55458",
    location: "Jaipur, Rajasthan, India",
    remoteAvailability: "Open to Remote Opportunities",
    linkedin: "",
    portfolio: "",
    github: "",
    status: "Open to Remote Opportunities",
    highlights: [
      { label: "Positioning", value: "Ops · Sales · Data", detail: "Technology & Business" },
      { label: "Lead Generation", value: "1,000+ Leads & Orders", detail: "Exhibitions & Direct Sales" },
      { label: "Exhibitions", value: "5+ Nationwide", detail: "Customer-Facing Representation" },
      { label: "Systems", value: "Excel & Tally", detail: "Automation & Workflows" }
    ]
  },

  coreCompetencies: [
    "Sales & Lead Generation",
    "Customer Engagement",
    "Business Operations",
    "Microsoft Excel & Dashboards",
    "Tally Prime & Accounting",
    "AI-Assisted Productivity",
    "Business & Market Research",
    "Documentation & Systems"
  ],

  capabilityCategories: [
    {
      id: "cap-business-sales",
      title: "BUSINESS & SALES",
      skills: [
        "Sales",
        "Lead Generation",
        "Buyer Research",
        "Customer Engagement",
        "Order Collection",
        "Follow-ups",
        "Client Communication",
        "Exhibition Sales"
      ]
    },
    {
      id: "cap-office-data",
      title: "MICROSOFT OFFICE & DATA",
      skills: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Microsoft Office",
        "Data Management",
        "Formula-based Automation",
        "PivotTables",
        "Dashboards",
        "Reporting",
        "Documentation"
      ]
    },
    {
      id: "cap-accounting",
      title: "ACCOUNTING",
      skills: [
        "Tally Prime",
        "Accounting Workflows",
        "Ledger Management",
        "Invoicing",
        "Financial Record Organisation"
      ]
    },
    {
      id: "cap-ai-productivity",
      title: "AI & DIGITAL PRODUCTIVITY",
      skills: [
        "AI-assisted Research",
        "Content Writing",
        "Data Analysis",
        "Workflow Enhancement",
        "AI-assisted UI/UX Development",
        "Prompt-based Problem Solving",
        "Rapid Learning"
      ]
    },
    {
      id: "cap-research-analysis",
      title: "RESEARCH & ANALYSIS",
      skills: [
        "Business Research",
        "Market Research",
        "Information Synthesis",
        "Competitive Analysis",
        "Data Interpretation",
        "Structured Documentation"
      ]
    }
  ],

  experiences: [
    {
      id: "exp-family-business",
      role: "Business Operations & Sales Support",
      company: "Family Business",
      location: "Jaipur, Rajasthan",
      period: "2023 – Present",
      isCurrent: true,
      type: "full-time",
      summary: "Practical business operations, customer-facing exhibition sales, and structured Excel record management across commercial activities.",
      achievements: [
        "Participated in 5+ nationally recognised exhibitions as a salesperson, engaging directly with prospective clients and representing the business in customer-facing environments.",
        "Collected and organised 1,000+ leads and orders through direct customer interaction and exhibition-based sales activity.",
        "Communicated with prospective and existing customers, identified requirements, presented products and maintained professional follow-up.",
        "Conducted buyer research and supported lead generation, customer acquisition and business development activities.",
        "Assisted with professional meetings, customer relationships and business correspondence.",
        "Developed and maintained Excel-based systems for structured record keeping, operational tracking and improved information accessibility.",
        "Applied research, technology and AI tools to improve productivity, documentation, communication and problem-solving across business activities."
      ],
      technologies: ["Sales Support", "Direct Customer Engagement", "Exhibition Sales", "Microsoft Excel", "Tally Prime", "AI Workflow Tools", "Client Follow-ups"],
      metrics: [
        { label: "Leads & Orders Collected", value: "1,000+" },
        { label: "Nationwide Exhibitions", value: "5+" },
        { label: "Operational Tracking", value: "Excel Systems" }
      ]
    }
  ],

  selectedWork: [
    {
      id: "work-sales-dashboard",
      title: "SALES & OPERATIONS INTELLIGENCE DASHBOARD",
      tools: ["Microsoft Excel", "Data Analysis", "Automation"],
      description: "Structured business dataset and interactive dashboard for sales, profitability, customer activity and operational performance.",
      status: "In Development"
    },
    {
      id: "work-tally-simulation",
      title: "TALLY PRIME ACCOUNTING SIMULATION",
      tools: ["Tally Prime", "Accounting", "Financial Reporting"],
      description: "Simulated business environment for practising accounting workflows, transaction recording, inventory management and financial reporting.",
      status: "In Development"
    },
    {
      id: "work-crm-system",
      title: "CLIENT COMMUNICATION & FOLLOW-UP SYSTEM",
      tools: ["Excel", "Operations", "CRM"],
      description: "Structured system for recording prospects, customer interactions, follow-ups, status, requirements and next actions.",
      status: "In Development"
    },
    {
      id: "work-research-dossier",
      title: "BUSINESS RESEARCH & INTELLIGENCE DOSSIER",
      tools: ["Research", "Analysis", "Documentation"],
      description: "Structured research project using information gathering, data analysis, competitive research and documented findings.",
      status: "In Development"
    }
  ],

  selectedAchievements: [
    {
      id: "ach-leads",
      metric: "1,000+",
      label: "Leads & Orders",
      description: "Collected through direct customer engagement and exhibition sales."
    },
    {
      id: "ach-exhibitions",
      metric: "5+",
      label: "Nationwide Exhibitions",
      description: "Participated as a salesperson in recognised business exhibitions and customer-facing events."
    },
    {
      id: "ach-systems",
      metric: "Operational",
      label: "Business Systems",
      description: "Designed Excel-based systems for operational tracking, data organisation and improved accessibility."
    }
  ],

  howIWork: [
    {
      id: "work-smart-exec",
      title: "SMART EXECUTION",
      description: "Focus on efficient, practical methods rather than repetitive effort alone."
    },
    {
      id: "work-tech-prod",
      title: "TECHNOLOGY-ENABLED PRODUCTIVITY",
      description: "Use AI and digital tools to accelerate research, learning, content creation, analysis and workflow development."
    },
    {
      id: "work-indep-problem",
      title: "INDEPENDENT PROBLEM-SOLVING",
      description: "Comfortable researching unfamiliar subjects, learning required tools and taking tasks from understanding through execution."
    },
    {
      id: "work-precision",
      title: "PRECISION",
      description: "Prioritise accuracy, organisation, traceability and clear documentation."
    }
  ],

  selectedProjects: [],
  skillCategories: [],

  education: [
    {
      id: "edu-bba",
      institution: "Manipal University Jaipur — Online",
      degree: "Bachelor of Business Administration (BBA)",
      field: "Business Administration & Management",
      period: "Ongoing",
      location: "Jaipur, India",
      coursework: [
        "Financial Accounting & Cost Management",
        "Business Statistics & Quantitative Methods",
        "Marketing Management & Consumer Behavior",
        "Organizational Behavior & Human Resources",
        "Business Law & Corporate Taxation",
        "Strategic Management & Entrepreneurship"
      ]
    },
    {
      id: "edu-bca",
      institution: "Manipal University Jaipur — Online",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications & Information Technology",
      period: "Ongoing",
      location: "Jaipur, India",
      coursework: [
        "Database Management Systems & Relational SQL",
        "Spreadsheet Applications & Business Computing",
        "Data Structures & Algorithmic Logic",
        "Software Engineering & Systems Analysis",
        "Web Technologies & Information Systems",
        "Computerized Accounting Implementations"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-excel",
      title: "Advanced Excel / Microsoft Office certification",
      issuer: "Samyak Training Institute / Skill India NSDC Certified",
      issueDate: "2026",
      description: "Comprehensive practical certification covering advanced formulas, dynamic reporting, PivotTables, data management, and automated workflows."
    },
    {
      id: "cert-tally",
      title: "Accounts Executive / Tally certification",
      issuer: "Samyak Training Institute / Skill India NSDC Certified",
      issueDate: "2026",
      description: "Hands-on certification in computerized accounting, ledger management, GST compliance, voucher entries, and financial statements in Tally Prime."
    },
    {
      id: "cert-pm",
      title: "Project Management",
      issuer: "Coursera",
      issueDate: "In Progress",
      description: "Structured training in project planning, milestone delivery, documentation, stakeholder communication, and workflow execution."
    }
  ],

  businessExposure: [
    "Nationwide Trade Exhibitions",
    "Direct Customer Engagement & Sales",
    "Lead Generation & Qualification",
    "Buyer Market Research",
    "Client Communication & Follow-ups",
    "Professional Business Correspondence",
    "Excel Operational Tracking Systems"
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" }
  ],

  portfolioDetails: {
    url: "",
    description: "Structured business operations dashboards, accounting simulations, and customer tracking systems.",
    curatedItems: [
      {
        title: "SALES & OPERATIONS INTELLIGENCE DASHBOARD",
        category: "Data Analysis & Automation",
        description: "Structured business dataset and interactive dashboard for sales, profitability, customer activity and operational performance.",
        tools: "Microsoft Excel · Data Analysis · Automation",
        status: "In Development"
      },
      {
        title: "TALLY PRIME ACCOUNTING SIMULATION",
        category: "Accounting & Reporting",
        description: "Simulated business environment for practising accounting workflows, transaction recording, inventory management and financial reporting.",
        tools: "Tally Prime · Accounting · Financial Reporting",
        status: "In Development"
      },
      {
        title: "CLIENT COMMUNICATION & FOLLOW-UP SYSTEM",
        category: "Operations & CRM",
        description: "Structured system for recording prospects, customer interactions, follow-ups, status, requirements and next actions.",
        tools: "Excel · Operations · CRM",
        status: "In Development"
      },
      {
        title: "BUSINESS RESEARCH & INTELLIGENCE DOSSIER",
        category: "Research & Documentation",
        description: "Structured research project using information gathering, data analysis, competitive research and documented findings.",
        tools: "Research · Analysis · Documentation",
        status: "In Development"
      }
    ]
  },

  additionalInfo: {
    remoteAvailability: "Open to Remote Opportunities",
    projectManagementTraining: [
      "Project Management (Coursera — In Progress)",
      "Process Optimization & SOP Standard Operating Procedure Design",
      "Task Tracking & Milestone Delivery"
    ],
    areasOfProfessionalInterest: [
      "Business Operations & Process Optimization",
      "Sales Support & Client Relationship Management",
      "Spreadsheet-based Data Modeling & Dashboards",
      "Computerized Financial Accounting (Tally Prime)",
      "AI-Assisted Workflow Enhancement"
    ]
  }
};

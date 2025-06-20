import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hatim Rehmanjee — Strategic Problem Solver & Aspiring Data-Driven Consultant",
  author: "Hatim Rehmanjee",
  description:
    "Final year Computer Science student at NYU Abu Dhabi combining analytical rigor with business strategy. Proven track record of delivering data-driven insights to drive business growth across emerging markets, with experience at PwC, KPMG, and leading regional firms.",
  lang: "en",
  siteLogo: "/hatim-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Research", href: "#research" },
    { text: "Education", href: "#education" },
    { text: "Skills", href: "#skills" },
    { text: "Leadership", href: "#leadership" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/hatim-rehmanjee" },
    { text: "GitHub", href: "https://github.com/hatimrehmanjee" },
    { text: "Email", href: "mailto:hqr9411@nyu.edu" },
  ],
  socialImage: "/hatim-og.png",
  canonicalURL: "https://hatimrehmanjee.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hatim Rehmanjee",
    specialty: "Data Science & Consulting",
    summary:
      "Final year Computer Science student at NYU Abu Dhabi with a passion for data-driven insights and strategic consulting. Experienced in machine learning, quantitative finance, and business analytics across diverse markets.",
    email: "hqr9411@nyu.edu",
  },
  experience: [
    {
      company: "OCTAVE (John Keells Group)",
      position: "Data Science Intern",
      startDate: "May 2024",
      endDate: "Present",
      summary: [
        "Designed end-to-end modular framework using transaction data and customer patterns to provide business insights for new supermarket outlets in untapped regions of Sri Lanka",
        "Presented findings and outlet-specific recommendations to client leadership",
        "Applied advanced analytics to identify optimal locations for retail expansion"
      ],
    },
    {
      company: "Acuity Knowledge Partners",
      position: "Quantitative Finance Intern",
      startDate: "June 2024",
      endDate: "Aug 2024",
      summary: [
        "Designed novel methodology for stock trading decisions (hold, buy, sell) and presented findings to management",
        "Implemented time series forecasting methods and hypothesis testing into software tool for portfolio optimization",
        "Applied quantitative models to enhance investment decision-making processes"
      ],
    },
    {
      company: "PwC",
      position: "Data Analyst Intern",
      startDate: "June 2023",
      endDate: "Aug 2023",
      summary: [
        "Leveraged timesheet data and visualization tools to recommend productivity improvement strategies",
        "Initiated research on AI tools in decision-making processes, exploring the Delphi decision framework",
        "Created actionable insights from complex datasets to drive business efficiency"
      ],
    },
    {
      company: "KPMG",
      position: "Corporate Finance Intern",
      startDate: "July 2021",
      endDate: "Feb 2022",
      summary: [
        "Presented investment recommendations for Sri Lanka's manufacturing sector to senior management",
        "Worked with clients on Mergers and Acquisitions for microfinance companies",
        "Applied CAPM, DCF, and MMM methods for venture valuations, including fertilizer plant feasibility analysis"
      ],
    },
  ],
  research: [
    {
      institution: "New York University Abu Dhabi",
      position: "Economics Research Assistant",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Optimized computational efficiency by translating Stata code to Python, implementing vectorized and parallel operations",
        "Processed and analyzed 8TB of order book data from German Stock Exchange to compute liquidity measures",
        "Applied advanced statistical methods to extract meaningful insights from high-frequency financial data"
      ],
      advisor: "Economics Department"
    },
    {
      institution: "New York University Abu Dhabi", 
      position: "Efficient Compilers Research Assistant",
      startDate: "Sep 2023",
      endDate: "May 2024",
      summary: [
        "Conducted statistical analysis to evaluate performance metrics of 3 compiler systems across multiple algorithms",
        "Developed methodology for longitudinal performance comparison and optimization assessment",
        "Collaborated with computer science faculty on cutting-edge compiler optimization research"
      ],
      advisor: "Computer Science Department"
    }
  ],
  education: [
    {
      institution: "New York University Abu Dhabi",
      degree: "Bachelor of Science in Computer Science",
      startDate: "Aug 2022",
      endDate: "June 2026",
      gpa: "3.83/4.0",
      honors: ["100% Scholarship", "Dean's List"],
      coursework: [
        "Machine Learning",
        "Predictive Analytics", 
        "Linear Algebra",
        "Stochastic Processes",
        "Asset Pricing",
        "Data Structures & Algorithms"
      ],
      experiences: [
        "Study-away semesters in New York and Paris",
        "Business seminar in Kenya for global perspective",
        "Active member of international academic community"
      ]
    },
    {
      institution: "Association of Chartered Certified Accountants (ACCA)",
      degree: "Professional Qualification in Accounting & Finance",
      startDate: "Sept 2021",
      endDate: "Ongoing",
      coursework: [
        "Financial Management",
        "Performance Management",
        "Audit and Assurance", 
        "Corporate & Business Law",
        "Financial Reporting"
      ]
    }
  ],
  skills: {
    "Analytics & Data Science": [
      "Python",
      "Machine Learning",
      "Statistical Analysis",
      "Predictive Modeling",
      "Time Series Forecasting",
      "Hypothesis Testing"
    ],
    "Data & Databases": [
      "SQL",
      "PySpark",
      "Azure DataBricks",
      "Big Data Processing",
      "Database Design",
      "ETL Pipelines"
    ],
    "Visualization & Reporting": [
      "Tableau",
      "PowerBI",
      "Data Visualization",
      "Dashboard Development",
      "Executive Reporting",
      "Business Intelligence"
    ],
    "Programming & Development": [
      "Python",
      "C++",
      "Software Development",
      "Algorithm Design",
      "System Optimization",
      "Code Performance"
    ],
    "Financial & Business Analysis": [
      "Financial Modeling",
      "Valuation (DCF, CAPM)",
      "Portfolio Optimization", 
      "Risk Analysis",
      "Investment Analysis",
      "Performance Metrics"
    ],
    "Cloud & Tools": [
      "Azure",
      "Git/GitHub",
      "Jupyter Notebooks",
      "Excel/VBA",
      "Stata",
      "Research Tools"
    ]
  },
  leadership: [
    {
      organization: "Student Energy Summit 2023",
      position: "Sponsorship Associate",
      startDate: "Sep 2022",
      endDate: "Nov 2023",
      type: "Volunteering",
      impact: "Raised over $500,000 for the largest student-led sustainable energy conference in the world",
      summary: [
        "Led corporate outreach initiatives to secure major sponsorship deals for international energy conference",
        "Developed strategic partnerships with energy companies, government entities, and NGOs across the Middle East",
        "Coordinated with cross-functional teams to deliver sponsorship packages and ensure stakeholder satisfaction",
        "Contributed to hosting 1,000+ delegates from 100+ countries in Abu Dhabi"
      ]
    },
    {
      organization: "Sri Lankan Students Association - NYU Abu Dhabi",
      position: "Founding Treasurer",
      startDate: "Jan 2023",
      endDate: "June 2023",
      type: "Leadership",
      impact: "Successfully established and managed finances for a new cultural organization at NYU Abu Dhabi",
      summary: [
        "Founded and managed financial operations for newly established cultural association",
        "Optimized budget allocation of $850 to maximize impact of cultural events and community outreach",
        "Organized cultural showcases and events to promote Sri Lankan heritage within the university community",
        "Established financial frameworks and processes for long-term organizational sustainability"
      ]
    },
    {
      organization: "Asian International School Rowing Team",
      position: "Vice-Captain",
      startDate: "Sep 2018",
      endDate: "July 2021",
      type: "Sports",
      impact: "Led team to national-level success with 2 Gold Medals and 1 Bronze Medal",
      summary: [
        "Provided leadership and mentorship to team members in high-performance athletic environment",
        "Coordinated training schedules, team strategy, and performance optimization initiatives",
        "Represented Sri Lanka in national-level rowing competitions with consistent medal-winning performance",
        "Balanced academic excellence with elite athletic commitments, demonstrating time management and discipline"
      ]
    }
  ],
  projects: [
    {
      name: "Formula 1 Qualifying Prediction",
      summary: "Machine learning model using telemetry data from F1 practice sessions to predict final qualifying positions of drivers with high accuracy.",
      linkPreview: "#", // Update when you deploy
      linkSource: "https://github.com/Hatimqr/F1-Ranking-Prediction", // Update with actual repo
      image: "/f1.png", // You'll need to add project images
    },
    {
      name: "CareSync Medical Platform",
      summary: "End-to-end appointment management system for small medical clinics with real-time scheduling and patient management features.",
      linkPreview: "#",
      linkSource: "https://github.com/irfank123/CareSync/tree/restart_progress", // Update with actual repo
      image: "/caresync.png",
    },
    {
      name: "Bitcoin Algorithmic Trading",
      summary: "Directional trading strategy based on fair value gaps and key levels for Bitcoin, outperforming buy-and-hold across key performance metrics.",
      linkPreview: "#",
      linkSource: "https://github.com/Hatimqr/Crypto-Trading", // Update with actual repo
      image: "/bitcoin.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Hatim Rehmanjee, a final year Computer Science student at NYU Abu Dhabi with a passion for transforming data into actionable business insights. My journey spans across quantitative finance, data science, and strategic consulting, with hands-on experience at leading firms like PwC, KPMG, and Acuity Knowledge Partners.

      With a strong academic foundation (3.83/4.0 GPA, 100% scholarship recipient) and practical experience across diverse markets including the UAE, Sri Lanka, and beyond, I bring a unique global perspective to problem-solving. My expertise lies in machine learning, statistical analysis, and building data-driven solutions that drive business growth.

      Currently pursuing opportunities in consulting and data science roles where I can leverage my technical skills and business acumen to create meaningful impact.
    `,
    image: "/hatim-big.jpeg", // You'll need to add your photo
  },
};
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
    specialty: "Strategic Problem Solver & Aspiring Consultant",
    summary: "Transforming complex challenges into actionable insights. Final year CS student at NYU Abu Dhabi with proven experience at PwC and KPMG, where data-driven analysis meets strategic thinking. Built for the impossible standards that others avoid.",
    email: "hqr9411@nyu.edu"
  },
  experience: [
    {
      company: "OCTAVE Analytics (John Keells Holdings)",
      position: "Data Science Intern",
      startDate: "May 2024",
      endDate: "Present",
      summary: [
        "Conducted end-to-end customer analysis for underperforming Keells supermarket outlet in untapped region, developing methodology to cluster customers by promotional sensitivity and recommending targeted strategies to reduce churn rates",
        "Delivered comparative performance analysis across 3 outlets nationwide, revealing that the 'underperforming' new outlet was actually excelling in volume and sales metrics—transforming management perception through data-driven insights",
        "Applied McKinsey-trained advanced analytics methodologies within Sri Lanka's largest conglomerate to solve real retail business challenges with measurable impact"
      ],
    },
    {
      company: "Acuity Knowledge Partners",
      position: "Quantitative Finance Intern",
      startDate: "June 2024",
      endDate: "August 2024",
      summary: [
        "Developed backend infrastructure for client-facing portfolio optimization software tool, contributing to product that would be sold to financial institutions",
        "Researched and implemented novel trading strategy using drawdown analysis to systematically determine buy/hold/sell decisions for asset management",
        "Integrated multiple forecasting models (Brownian motion, LSTM, time series methods) into portfolio optimization platform, enhancing predictive capabilities for client investment decisions"
      ],
    },
    {
      company: "PwC",
      position: "Data Analyst Intern",
      startDate: "June 2023",
      endDate: "August 2023",
      summary: [
        "Analyzed employee timesheet data to identify productivity bottlenecks, building real-time PowerBI dashboards that provided management with actionable insights for operational efficiency",
        "Initiated independent research project on AI-supported decision-making for senior leadership, utilizing Delphi decision framework as foundational methodology",
        "Presented dual insights to management: both productivity optimization strategies and innovative AI tool applications for high-level decision processes"
      ],
    },
    {
      company: "KPMG",
      position: "Corporate Finance Consultant",
      startDate: "July 2021",
      endDate: "February 2022",
      summary: [
        "Executed due diligence for 4 high-value M&A transactions in microfinance sector, working directly with clients to understand lending policies and regulatory requirements",
        "Conducted comprehensive valuations using DCF, Market Multiple (MMM), and CAPM methodologies for acquisition targets and investment opportunities",
        "Delivered feasibility analysis for international fertilizer plant project during period of volatile regulatory environment, providing strategic guidance for complex market entry decision"
      ],
    },
  ],
  research: [
    {
      institution: "New York University Abu Dhabi",
      position: "Financial Econometrics Research Assistant",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Solved computational bottleneck in economic research by re-engineering legacy Stata workflows in Python, achieving order-of-magnitude performance improvements through vectorized operations, parallel processing, and efficient data storage",
        "Managed analysis of 8TB German Stock Exchange order book data to compute liquidity measures, demonstrating capability to handle institutional-scale datasets and extract actionable insights",
        "Applied advanced econometrics and linear algebra methods to make previously infeasible computations feasible"
      ],
      advisor: "Professor Christian Haefke"
    },
    {
      institution: "New York University Abu Dhabi", 
      position: "Efficient Compilers Research Assistant",
      startDate: "September 2023",
      endDate: "May 2024",
      summary: [
        "First deep dive into systematic statistical analysis: evaluated performance metrics across 3 compiler systems over time, developing frameworks for longitudinal performance comparison",
        "Discovered the consulting mindset in research: statistical analysis isn't just finding patterns—it's understanding what those patterns mean for real-world performance optimization",
      ],
      advisor: "Professor Joao Fernandez"
    }
  ],  
  education: [
    {
      institution: "New York University Abu Dhabi",
      degree: "Bachelor of Science in Computer Science",
      startDate: "Aug 2022",
      endDate: "June 2026",
      gpa: "3.92/4.0",
      honors: ["100% Scholarship"],
      coursework: [
        "Machine Learning",
        "Predictive Analytics", 
        "Linear Algebra",
        "Stochastic Processes",
        "Asset Pricing",
        "Algorithmic Foundations of Data Science"


      ],
      experiences: [
        "Study-away semesters in New York and Paris",
        "Business seminar in Kenya"
      ]
    },
    {
      institution: "Association of Chartered Certified Accountants (ACCA)",
      degree: "Professional Qualification in Accounting & Finance",
      startDate: "Sept 2021",
      endDate: "Ongoing",
      honors: ["Completed 9 out of 13 exams in 8 months", "Entirely self-taught"],
      coursework: [
        "Financial Management",
        "Performance Management",
        "Audit and Assurance", 
        "Corporate & Business Law",
        "Financial Reporting"
      ],
    },
    {
      institution: "Asian International School",
      degree: "International Advanced Level",
      startDate: "Sept 2019",
      endDate: "June 2021",
      gpa: "4 A*'s",
      honors: ["Highest Grades in School"],
      coursework: [
        "Economics",
        "Mathematics",
        "Physics",
        "Accounting",
      ]
    }
  ],
  skills: {
    "Programming & Development": [
      "Python",
      "C++",
      "C",
      "SQL",
      "DAX",
    ],
    "Business Intelligence": [
      "Power BI",
      "Data Visualization Best Practices",
      "Stakeholder Communication"
    ],
    "Cloud & Infrastructure": [
      "Microsoft Azure Ecosystem",
      "GitHub",
      "Docker",
      "Linux (CLI)",
    ],
    "Advanced Analytics & ML": [
      "Machine Learning Pipelines",
      "Deep Learning (LSTM, Neural Networks)",
      "Time Series Forecasting",
      "Predictive Modeling",
    ],
    "Enterprise Data Solutions": [
      "Big Data Processing (PySpark)",
      "Azure Databricks Platform",
      "Parallel Computing",
      "Large-scale Analytics (8TB+ datasets)",
    ],
    "Financial Modeling": [
      "Portfolio Risk Management",
      "Monte Carlo Simulations",
      "Valuation Models (DCF, CAPM)",
      "Algorithmic Trading Systems",
      "Market Data Analysis",
      "Market Liquidity Measures"
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
        "Coordinated with cross-functional teams to deliver sponsorship packages and ensure stakeholder satisfaction",
        "Contributed to hosting 600+ delegates from 50+ countries in Abu Dhabi"
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
        "Organized cultural showcases and events to promote Sri Lankan heritage within the university community"
      ]
    },
    {
      organization: "Asian International School Rowing Crew",
      position: "Vice-Captain",
      startDate: "Sep 2018",
      endDate: "July 2021",
      type: "Sports",
      impact: "Led team to national-level success with 8 Gold Medals, 1 silver medal, and 3 bronze medals",
      summary: [
        "Provided leadership and mentorship to team members in high-performance athletic environment",
        "Coordinated training schedules, team strategy, and individually targeted training",
        "Represented Sri Lanka in national-level rowing competitions with 2 Gold Medals,1 Bronze, and a national record",
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
    {
      name: "Alertnet",
      summary: "Developed a website for the MENA region where users can report minor crimes and see statistics on the safety of an area. Employs clustering methods for simplified alerts.",
      linkPreview: "#",
      linkSource: "https://alert-net.vercel.app/",
      image: "/alertnet.png",
    }
  ],
  about: {
    description: `
      The moments that define us happen when everything else falls away. I have always chosen to build up rather than break down, achieving the best results in my batch and learning that adversity doesn't have to diminish performance—it can fuel it.\n
  
      That resilience, first discovered through rowing's grueling training sessions, has shaped everything since. From walking into KPMG with no finance background to mastering computer science from zero programming experience, I've built my career on embracing the unknown and setting standards others consider impossible.\n
  
      My journey spans three continents and diverse challenges: analyzing terrabytes of stock exchange data, developing customer clustering strategies for Sri Lanka's largest conglomerate, and creating algorithmic trading systems that outperform market benchmarks. What connects these experiences is a systematic approach to complex problems and an obsession with translating analysis into action.\n
  
      I'm passionate about the moment when data becomes decision, when complexity becomes clarity, and when rigorous analysis shapes strategic direction.
    `,
    image: "/hatim-big.jpeg",
  },
};
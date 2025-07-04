import type { SiteConfig, SiteContent } from "../types";



export const SITE_CONFIG: SiteConfig = {
  title: "Hatim Rehmanjee",
  author: "Hatim Rehmanjee",
  description:
    "Final year Computer Science student at NYU Abu Dhabi combining analytical rigor with business strategy. Proven track record of delivering data-driven insights to drive business growth across emerging markets, with experience at PwC, KPMG, and leading regional firms.",
  lang: "en",
  siteLogo: "/hatim.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Research", href: "#research" },
    { text: "Leadership", href: "#leadership" },
    { text: "Skills", href: "#skills" },
    { text: "Travel", href: "#travel" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/hatimrehmanjee" },
    { text: "GitHub", href: "https://github.com/hatimqr" },
    { text: "Email", href: "mailto:hrehmanjee@icloud.com" },
  ],
  socialImage: "/hatim.jpg",
  canonicalURL: "https://hatimrehmanjee.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hatim Rehmanjee",
    specialty: "A Data-Driven Problem Solver",
    summary: "Final year CS student at NYU Abu Dhabi who loves turning messy data into clear insights. I've had the chance to work with amazing teams at PwC, KPMG, and across emerging markets—always looking for that moment when the numbers start telling a story.",
    email: "hrehmanjee@icloud.com"
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
      **"You're only given a little spark of madness. You mustn't lose it."** \n

      This Robin Williams quote is something I live by. Whether I was learning to row (badly, at first), diving into finance with zero background at KPMG, or wrestling with my first lines of code, I've learned that a bit of creative madness often leads to the best solutions.\n

      My journey has taken me from a small boathouse in Sri Lanka to the classrooms of NYU Abu Dhabi, with stops at Big Four consulting firms, an obsession with algorithmic trading, and an unexpected draw to customer analytics. Along the way, I've learned to really value that spark of madness because thats the thing that makes me different and gives me the courage to go the extra mile.\n

      When I'm not buried in data, you'll probably find me looking for cheap flights (to any new place really), trying to convince some unfortunate soul that Ferrari's F1 strategy is actually good (I know I'm wrong), or brainstorming some business idea that probably won't work out.
    `,
    image: "/hatim.jpg",
  },
  travel: {
    description:
    `
    I didn't have too many opportunities to travel for fun when I was younger. When I went to university, 3 things happened: 1) I had financial freedom because of my full scholarhsip. 2) I was at a university that put an emphasis on being 'global'. 3) I was located in the UAE, quite literally in the middle of the world. Combined with smart financial decisions and part-time work, I had the freedom to see the world.\n

    These adventures have taught me more than I expected. Growing up in Sri Lanka—a small island fairly cut off from the rest of the world culturally—I notice alot of interesting differences in otherparts of the world. Being in new environments means facing unexpected problems, and figuring out how to solve them has become one of my favorite challenges.

    While it may not mean much professionally, it's something I'm really proud of - especially since I did it all on my own.
    `,
    image: "/map.jpeg", 
  },
};
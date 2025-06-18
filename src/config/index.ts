import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hatim Rehmanjee — Data Science & Consulting",
  author: "Hatim Rehmanjee",
  description:
    "Final year Computer Science student at NYU Abu Dhabi with expertise in data science, quantitative finance, and business analytics. Seeking opportunities in consulting and data science roles.",
  lang: "en",
  siteLogo: "/hatim-small.jpeg", // You'll need to add your photo
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/hatimrehmanjee" }, // Update with your actual LinkedIn
    { text: "GitHub", href: "https://github.com/hatimqr" }, // Update with your actual GitHub
    { text: "Email", href: "mailto:hqr9411@nyu.edu" },
  ],
  socialImage: "/hatim-og.jpeg", // You'll need to create this
  canonicalURL: "https://hatimrehmanjee.com", // Update with your actual domain
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
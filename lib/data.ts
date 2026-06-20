import type {
  Project,
  SkillCategory,
  Certification,
  EducationEntry,
  ResearchPaper,
  ExperienceEntry,
  GitHubRepo,
  ContactInfo,
  TrackMeta,
  Track,
} from "@/types";

// Resolves to a real, working URL in every environment instead of a fictional
// placeholder domain:
//  1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is live
//  2. VERCEL_URL — auto-provided by Vercel on every deployment/preview
//  3. localhost — local dev fallback
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const SITE = {
  name: "Amina Emad",
  title: "Amina Emad — AI, Cybersecurity & Data Analysis Student",
  description:
    "Portfolio of Amina Emad, an Artificial Intelligence student at Delta University for Science and Technology specializing in Cybersecurity, Data Analysis, and Front-End Development.",
  url: resolveSiteUrl(),
};

export const TRACKS: TrackMeta[] = [
  {
    id: "ai",
    label: "Artificial Intelligence",
    shortLabel: "AI",
    description: "Machine learning, deep learning, and computer vision.",
  },
  {
    id: "cyber",
    label: "Cybersecurity",
    shortLabel: "Cyber",
    description: "Threat detection, network security, and SOC workflows.",
  },
  {
    id: "data",
    label: "Data Analysis",
    shortLabel: "Data",
    description: "EDA, statistical modeling, and data-driven pipelines.",
  },
];

export const CONTACT: ContactInfo = {
  email: "aminaemad57@gmail.com",
  phone: "+20 103 461 0352",
  location: "Egypt",
  github: "https://github.com/Amina231205",
  linkedin: "https://www.linkedin.com/in/amina-emad-8242b7376/",
  previousPortfolio: "https://euphonious-brioche-8a8a1c.netlify.app/",
};

/** Two CV tracks exist as real, distinct files — map each lens to the CV that
 *  best matches it rather than picking one arbitrary default for everyone. */
export const CV_BY_LENS: Record<Track, { href: string; label: string }> = {
  ai: { href: "/Amina_Emad_DataAnalyst_CV.pdf", label: "Data Analyst CV" },
  data: { href: "/Amina_Emad_DataAnalyst_CV.pdf", label: "Data Analyst CV" },
  cyber: { href: "/Amina_Emad_Cybersecurity_CV.pdf", label: "Cybersecurity CV" },
};

export const ABOUT = {
  paragraphs: [
    "I'm an Artificial Intelligence student at Delta University for Science and Technology, specializing in Cybersecurity. I also study Data Analysis and have hands-on experience in front-end development with HTML, CSS, and JavaScript.",
    "I'm drawn to problems that sit at the intersection of these three lenses — training a model is rarely separate from securing the system it runs on, or from the data pipeline that feeds it. I like building solutions that combine artificial intelligence, data analysis, and web development into something secure and usable.",
    "Outside of coursework, I explore new tools, work through personal projects, and keep up with what's changing in cybersecurity and AI.",
  ],
  stats: [
    { label: "Finished projects", value: "8+" },
    { label: "Active internship", value: "CodeAlpha" },
    { label: "Certifications", value: "7" },
    { label: "Research paper", value: "1" },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Machine Learning & Deep Learning",
    track: "ai",
    icon: "BrainCircuit",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Predictive Modeling",
      "Model Evaluation & Cross-validation",
      "Pattern Recognition",
      "Classification & Regression",
      "Anomaly Detection",
    ],
  },
  {
    title: "Computer Vision",
    track: "ai",
    icon: "ScanEye",
    skills: [
      "OpenCV",
      "Image Data Processing",
      "Feature Extraction",
      "Unstructured-to-Structured Transformation",
    ],
  },
  {
    title: "Cybersecurity & Networking",
    track: "cyber",
    icon: "ShieldCheck",
    skills: [
      "Wireshark",
      "Nmap",
      "Network Security",
      "Ethical Hacking",
      "Cryptography (AES / SHA / RSA)",
      "Access Control & Authentication",
      "IDS / IPS Concepts",
      "Vulnerability Assessment",
      "Digital Forensics",
      "TCP/IP & OSI Model",
      "IoT Security",
      "SIEM Concepts",
      "Kali Linux (familiar)",
    ],
  },
  {
    title: "Data Analysis & Python",
    track: "data",
    icon: "ChartSpline",
    skills: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Data Cleaning & Wrangling",
      "Statistical Analysis",
      "Feature Engineering",
      "Data Visualization",
      "Web Scraping (BeautifulSoup, Requests)",
    ],
  },
  {
    title: "Front-End Development",
    track: "core",
    icon: "LayoutTemplate",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend & Languages",
    track: "core",
    icon: "Terminal",
    skills: ["Python", "Java", "PHP", "C++", "SQL"],
  },
  {
    title: "Hardware & Embedded Systems",
    track: "core",
    icon: "Cpu",
    skills: ["Raspberry Pi", "Arduino", "ESP32"],
  },
  {
    title: "Tools & Platforms",
    track: "core",
    icon: "Wrench",
    skills: ["Git / GitHub", "Jupyter Notebook", "AWS Cloud Practitioner", "Linux CLI", "Docker (basic)"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "codealpha-web-scraping",
    name: "CodeAlpha_WebScraping",
    tracks: ["data"],
    blurb:
      "Production-grade scraper turning 120 unstructured book listings into a clean, analysis-ready dataset.",
    description: [
      "Task 1 of the CodeAlpha Data Analytics Internship. Crawls books.toscrape.com across pagination, enriches each record from its detail page, then runs the result through a Pandas .pipe() cleaning chain before exporting structured CSV output.",
      "Built with a clear separation of concerns: a pagination crawler, a dedicated cleaning module, and an orchestrator script — plus logging throughout for traceability.",
    ],
    stack: ["Python", "requests", "BeautifulSoup4", "lxml", "pandas"],
    metrics: [
      { label: "Records", value: "120 books" },
      { label: "Categories", value: "34" },
      { label: "Avg. price", value: "£34.10" },
      { label: "In-stock rate", value: "100%" },
    ],
    links: { github: "https://github.com/Amina231205/CodeAlpha_WebScraping" },
    source: "github",
    featured: true,
  },
  {
    slug: "neural-network-anomaly-classifier",
    name: "Neural Network Anomaly Classifier",
    tracks: ["ai", "cyber"],
    blurb: "A deep neural network trained from scratch for behavioral anomaly detection.",
    description: [
      "Designed and trained a deep neural network from scratch for high-accuracy pattern classification, applying ML techniques directly relevant to AI-driven threat detection and behavioral anomaly identification in security operations.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    links: {},
    source: "cv",
    featured: true,
  },
  {
    slug: "biometric-access-control",
    name: "Biometric Access Control System",
    tracks: ["cyber", "ai"],
    blurb: "Real-time facial authentication classifying authorized vs. unauthorized access attempts.",
    description: [
      "Built a real-time facial authentication system using Python and OpenCV, implementing biometric identity verification to demonstrate access-control security principles.",
      "Classifies authorized vs. unauthorized access attempts using ML pattern recognition — transferable to endpoint security monitoring and authentication workflows.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision"],
    links: {},
    source: "cv",
    featured: true,
  },
  {
    slug: "iot-security-monitoring",
    name: "IoT Security Monitoring System",
    tracks: ["cyber"],
    blurb: "An IoT security platform with real-time anomaly detection and incident-triggered alerts.",
    description: [
      "Architected an IoT security platform integrating Raspberry Pi, ESP32, and multi-sensor inputs with automated event-driven alerts — demonstrating IoT attack-surface awareness and embedded security control design.",
      "Mirrors SOC security event logging, alerting pipelines, and incident detection/response workflows.",
    ],
    stack: ["Raspberry Pi", "ESP32", "Arduino", "Embedded Systems"],
    links: {},
    source: "cv",
    featured: false,
  },
  {
    slug: "smart-city-analytics-platform",
    name: "Smart City Multi-Source Data Analytics Platform",
    tracks: ["data", "cyber", "ai"],
    blurb: "Team platform fusing heterogeneous IoT sensor data with ML-driven threat detection.",
    description: [
      "Collaborated on a data-driven smart city platform integrating heterogeneous IoT sensor datasets with ML models.",
      "Applied statistical analysis and data fusion to extract actionable insight, alongside network anomaly detection models aligned with SOC security event management practices.",
    ],
    stack: ["Python", "Machine Learning", "IoT Sensors", "Network Security"],
    links: {},
    source: "cv",
    featured: false,
  },
  {
    slug: "ml-data-pipeline-classifier",
    name: "End-to-End ML Data Pipeline & Classifier",
    tracks: ["ai", "data"],
    blurb: "A 70,000+ sample pipeline from raw data through a trained deep neural network.",
    description: [
      "Built a complete machine learning data pipeline processing 70,000+ samples — EDA, preprocessing, normalization, and feature analysis before training a deep neural network to high classification accuracy.",
      "Evaluated through systematic cross-validation and quantitative metrics analysis.",
    ],
    stack: ["Python", "NumPy", "Scikit-learn", "Deep Learning"],
    metrics: [{ label: "Samples", value: "70,000+" }],
    links: {},
    source: "cv",
    featured: true,
  },
  {
    slug: "iot-sensor-analysis",
    name: "Multi-Sensor IoT Data Collection & Analysis System",
    tracks: ["data"],
    blurb: "Real-time multivariate sensor pipeline detecting patterns in live environmental data.",
    description: [
      "Designed and deployed a real-time multivariate sensor data pipeline using Raspberry Pi and ESP32 — collecting, logging, and processing continuous data streams to detect patterns and anomalies.",
      "Implemented threshold-based statistical analysis on live sensor feeds with automated event-driven outputs.",
    ],
    stack: ["Raspberry Pi", "ESP32", "Arduino", "Python"],
    links: {},
    source: "cv",
    featured: false,
  },
  {
    slug: "image-feature-engineering",
    name: "Image Data Feature Engineering & Classification Pipeline",
    tracks: ["ai", "data"],
    blurb: "Transforming raw image data into structured features for ML classification.",
    description: [
      "Developed an end-to-end image processing pipeline using Python and OpenCV, applying feature extraction and pattern classification to large visual datasets.",
      "Demonstrates data cleaning, feature engineering, and preprocessing workflows applicable to analyst roles.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision"],
    links: {},
    source: "cv",
    featured: false,
  },
  {
    slug: "product-management-system",
    name: "Product_management_System",
    tracks: ["data"],
    blurb: "A vanilla-JS CRUD app with live price calculation and persistent local storage.",
    description: [
      "Full CRUD product management built in vanilla JavaScript — real-time total price calculation including taxes, ads, and discounts, bulk product creation, and search by title or category.",
      "Data persists via browser localStorage; no backend required.",
    ],
    stack: ["JavaScript", "HTML", "CSS"],
    links: { github: "https://github.com/Amina231205/Product_management_System" },
    source: "github",
    featured: false,
  },
  {
    slug: "parallax-scrolling",
    name: "Parallax-Scrolling",
    tracks: ["data"],
    blurb: "A scroll-driven parallax layout exploring CSS animation and visual layering.",
    description: [
      "A parallax scrolling implementation built with HTML, CSS, and JavaScript, demonstrating scroll-based visual layering and animation technique.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/Amina231205/Parallax-Scrolling" },
    source: "github",
    featured: false,
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    org: "CodeAlpha",
    role: "Data Analytics Intern",
    type: "Internship",
    status: "In progress — Task 1 of 4 complete",
    summary:
      "Remote data analytics internship. First deliverable was a production-grade web scraping and cleaning pipeline (see CodeAlpha_WebScraping); remaining tasks in progress.",
    tasks: [
      { label: "Task 1 — Web scraping & data cleaning pipeline", done: true },
      { label: "Task 2", done: false },
      { label: "Task 3", done: false },
      { label: "Task 4", done: false },
    ],
  },
];

export const EDUCATION: EducationEntry = {
  degree: "Bachelor of Artificial Intelligence",
  institution: "Delta University for Science and Technology",
  status: "In progress",
  expected: "2027",
  specialization: "Cybersecurity",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Analysis",
    "Network Security",
    "Cryptography",
    "Embedded Systems",
    "Data Structures & Algorithms",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "Coursera (Andrew Ng)" },
  { name: "Python for Everybody", issuer: "University of Michigan (Coursera)" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
  {
    name: "Cybersecurity Program",
    issuer: "Maharaty",
    note: "Network security, ethical hacking, digital forensics",
  },
  { name: "Front-End Development", issuer: "Online coursework", note: "HTML, CSS, JavaScript" },
  { name: "Data Analysis", issuer: "University & online coursework" },
];

export const RESEARCH: ResearchPaper = {
  title: "Unified SIEM Platform for Integrated Host and Network Security Monitoring",
  venue: "IEEE-affiliated conference",
  status: "rejected",
  role: "Co-author",
  summary: [
    "Proposed a unified SIEM approach correlating host-level and network-level telemetry into a single security-monitoring pipeline, aimed at reducing blind spots between endpoint and network detection layers.",
    "Contributed technical literature review, security-focused analysis, and academic writing alongside the co-author team.",
    "Not accepted in this submission cycle. The work is being revised based on reviewer feedback ahead of resubmission.",
  ],
};

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "CodeAlpha_WebScraping",
    description: "Production-grade web scraping & cleaning pipeline — CodeAlpha Data Analytics Internship, Task 1.",
    languages: [
      { name: "Python", percent: 52.1 },
      { name: "HTML", percent: 47.9 },
    ],
    url: "https://github.com/Amina231205/CodeAlpha_WebScraping",
  },
  {
    name: "Product_management_System",
    description: "Vanilla JS CRUD app for product management with live pricing and localStorage persistence.",
    languages: [
      { name: "JavaScript", percent: 62.9 },
      { name: "HTML", percent: 23.9 },
      { name: "CSS", percent: 13.2 },
    ],
    url: "https://github.com/Amina231205/Product_management_System",
  },
  {
    name: "Parallax-Scrolling",
    description: "A parallax scroll-effect built with HTML, CSS, and JavaScript.",
    languages: [
      { name: "CSS", percent: 38.7 },
      { name: "HTML", percent: 31.9 },
      { name: "JavaScript", percent: 29.4 },
    ],
    url: "https://github.com/Amina231205/Parallax-Scrolling",
  },
];

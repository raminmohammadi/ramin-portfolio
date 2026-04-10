import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';

// 1. IMPORT the images here
import trackerImg1 from '../assets/activity_tracker1.png';
import trackerImg2 from '../assets/activity_tracker2.png';

export const PRIMARY_EXPERIENCE = [
  { 
    role: "Lead Principal AI Engineer | iBase-t", 
    time: "2025 — Present | California", 
    desc: "Directing high-performing AI organization. Secured major enterprise customers via Solumina-AI.",
    gradient: "from-emerald-500 via-emerald-400 to-blue-500",
    icon: <Target className="size-24 md:size-40" />,
    tags: ["AI Strategy", "Industrial Scale"]
  },
  { 
    role: "ML Manager - Principal ML Engineer | Tausight", 
    time: "2019 — 2025 | Massachusetts", 
    desc: "Managed the full ML lifecycle and scaled team from inception to maturity. Optimized training efficiency by 40% for HIPAA-compliant systems.",
    gradient: "from-blue-600 via-blue-400 to-emerald-500",
    icon: <TrendingUp className="size-24 md:size-40" />,
    tags: ["Healthcare AI", "MLOps"]
  },
  { 
    role: "Intel Ignite Alumnus", 
    time: "2024 | Global", 
    desc: "Focused on scaling high-growth deep tech ventures and fundraising strategy for seed-to-series-A AI startups.",
    gradient: "from-purple-600 via-blue-500 to-emerald-400",
    icon: <Zap className="size-24 md:size-40" />,
    tags: ["Deep Tech", "Ventures"],
    isIgnite: true 
  }
];

export const FOUNDATIONAL_EXPERIENCE = [
  { inst: "Deep Learning Engineer | Mitsubishi (MERL)", date: "2019", d: "Real-time anomaly detection for satellite orbit maneuvers via VAEs and RL-based HVAC system optimization." },
  { inst: "Machine Learning Engineer | Philips", date: "2018", d: "Pioneered multimodal sensor fusion models for building automation and occupant counting sensors." },
  { inst: "Data Scientist | Partners HealthCare", date: "2016 – 2017", d: "Developed hierarchical deep learning for readmission risk assessment, resulting in a 15% reduction for heart failure patients." },
  { inst: "ML Research Scientist Fellow| MGH Institute (ITA)", date: "2015 – 2019", d: "Led development and validation of predictive models for Non-Alcoholic Steatohepatitis (NASH) using image processing over ultrasound imagery." },
];

export const HOME_STATS = [
  { v: "10+", l: "Years Principal Exp", color: "emerald" },
  { v: "12+", l: "Peer Publications", color: "blue" },
  { v: "01", l: "US Patent (Fusion)", color: "emerald" },
  { v: "05", l: "MLOps Expo Seasons", color: "purple" }
];

export const BIO_DATA = {
  quote: "I spent my Ph.D. years focused on the technical 'what,' but my career has been defined by the 'how.'",
  paragraphs: [
    "Most people can build a model; very few can ship one that survives a production environment with regulated data and enterprise scale.",
    "My work is about turning research-grade computation into high-integrity infrastructure that actually works for people."
  ]
};

export const REPOS = [
  { name: 'AI-agent-smart-assist', path: 'RaminMohammadi/ai-agent-smart-assist', desc: 'Agentic AI' },
  { name: 'Averix', path: 'RaminMohammadi/Averix', desc: 'Code Generation' },
  { name: 'GradientBlueprint', path: 'RaminMohammadi/GradientBlueprint', desc: 'Architectural Patterns' },
  { name: 'US Food', path: 'RaminMohammadi/US_Food', desc: 'Data Analytics' },
  { name: 'MLOps', path: 'RaminMohammadi/MLOps', desc: 'Production Systems' },
  { name: 'GEN-AI', path: 'RaminMohammadi/GEN-AI', desc: 'Generative Frameworks' },
  { name: 'NLP', path: 'RaminMohammadi/NLP', desc: 'Language Processing' },
];

export const MILO_PROJECT = {
  title: "Project Milo",
  subtitle: "Embodied AI Teacher",
  desc: "A physical AI companion designed for elderly Farsi speakers. Moving beyond the 'screen barrier' to solve the Immigrant Tax, Milo utilizes a hybrid cloud/local pipeline to provide patient, persistent English language instruction through embodied presence.",
  tags: ["Farsi Teacher", "Gemini Live", "Local-First AI", "Reachy Mini", "Design Thinking"],
  articleUrl: "https://www.linkedin.com/pulse/my-parents-didnt-want-ai-needed-teacher-ramin-madi-ph-d--bcwhe/",
  repoUrl: "https://github.com/RaminMohammadi/reachy-mini-teacher-app"
};

export const WORLD_MODELS_DATA = {
  title: "World Models",
  subtitle: "Open Source Research",
  desc: "An empirical re-implementation of Ha & Schmidhuber (2018). This project demonstrates how an agent leverages a self-supervised VAE and MDN-RNN to master high-dimensional environments through internal simulation.",
  repoUrl: "https://github.com/RaminMohammadi/World_Models",
  videoUrl: "https://www.youtube.com/embed/n8xeodYAXnE"
};

export const TEACHING_DATA = {
  northeastern: {
    role: "Adjunct Professor | Northeastern University",
    desc: "Designing PhD-level curricula for Generative AI, Machine Learning, NLP and MLOps. Established the first university level MLOps course in the U.S.",
    courses: ["MLOps", "Deep Generative Modeling", "NLP", "Statistical Learning", "Visualization Techniques"]
  },
  coursera: {
    role: "Faculty | Coursera",
    profileUrl: "https://www.coursera.org/instructor/~162569871",
    courses: [
      {
        title: "GenAI Foundations",
        desc: "Strategic implementation and core architectural foundations for industrial GenAI.",
        url: "https://www.coursera.org/learn/generative-ai-foundations-and-concepts"
      },
      {
        title: "NLP in Engineering",
        desc: "Applying NLP frameworks to real-world production environments.",
        url: "https://www.coursera.org/learn/nlp-in-engineering-concepts--real-world-applications"
      }
    ]
  }
};

// Add these to your existing research constants
export const HUMAN_RESEARCH = [
  {
    title: "Factors Influencing Exercise Engagement...",
    desc: "Determined the individualistic reasons for nonengagement...",
    link: "https://mhealth.jmir.org/2019/10/e11603",
    image: trackerImg2, // 2. Use the imported variable, NOT a string
    tag: "JMIR mHealth"
  },
  {
    title: "Algorithm for Adjusting Activity Targets...",
    desc: "Built an ML model to predict achievable weekly activity targets...",
    link: "https://mhealth.jmir.org/2020/9/e18142/",
    image: trackerImg1, // 2. Use the imported variable
    tag: "ML Modeling"
  }
];

export const TECHNICAL_RESEARCH = [
  {
    title: "Diagnostic Accuracy of Shear Wave Elastography as a Non-invasive Biomarker of NASH",
    desc: "Evaluated SWE accuracy for differentiating high-risk non-alcoholic steatohepatitis (hrNASH) using non-invasive imaging biomarkers.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0301562919316400",
    tag: "Biomedical Imaging"
  },
  {
    title: "An Analysis of Attention over Clinical Notes for Predictive Tasks",
    desc: "ACL Publication exploring neural models for EMR. Demonstrated that attention mechanisms over unstructured notes fields are critical for predictive performance.",
    link: "https://aclanthology.org/W19-1902/",
    tag: "NLP / ACL"
  },
  {
    title: "Predicting Unplanned Readmissions Following a Hip or Knee Arthroplasty",
    desc: "Retrospective observational study using raw EHRs and deep learning to demonstrate that unstructured free-text notes contain key predictive signals for 30-day readmission.",
    link: "https://medinform.jmir.org/2020/11/e19761",
    tag: "Predictive Analytics"
  }
];
# 🚀 Executive AI Portfolio: Modular Architecture

**Principal AI Leader • PhD Scientist • Strategic Founder**

This repository contains the professional portfolio of **Ramin Mohammadi, Ph.D.** It has been engineered with a focus on **Separation of Concerns (SoC)**, **Declarative UI**, and **Performance**, reflecting the architectural standards required for enterprise-grade AI systems.



## 🏗️ The Engineering Blueprint

Moving beyond a monolithic script, this portfolio is built on a **Decoupled Architecture**. This allows for high maintainability and scales seamlessly as new research, patents, or executive roles are added.

### 1. Separation of Concerns
* **Data Layer (`/src/constants`):** The "Source of Truth." All professional history, research data, and navigation options are stored as structured JSON/JavaScript constants.
* **Logic Layer (`/src/hooks`):** Specialized business logic, such as the dynamic fetching of GitHub READMEs and global scroll tracking, is encapsulated in custom React Hooks.
* **UI Primitives (`/src/components/ui`):** A custom design system of reusable components (`GlassCard`, `SectionHeader`, `StatBox`) ensures visual consistency and follows DRY (Don't Repeat Yourself) principles.
* **Page Sections (`/src/components/sections`):** High-level "Declarative" views that focus on layout and composition rather than implementation details.

---

## 📁 Project Structure

```text
src/
├── assets/             # Optimized media (JPEG, PNG, MOV)
├── components/
│   ├── layout/         # Navigation, Global Footer, and Orchestration
│   ├── sections/       # Tab-specific views (Exec, Teaching, Research, etc.)
│   └── ui/             # Reusable Design System Primitives
├── constants/          # Professional Data (The "Source of Truth")
├── hooks/              # Encapsulated Logic (GitHub API, Scroll Listeners)
├── App.jsx             # The Root Orchestrator
└── index.css           # Tailwind configuration & Custom Animations
```

---

## 🛠️ Technical Stack & Implementation

* **React 18:** Functional components with Hooks for state management.
* **Tailwind CSS:** Utility-first styling with custom animations (`animate-gradient`).
* **Lucide React:** High-fidelity iconography.
* **React-Markdown & Remark-GFM:** Dynamic rendering of GitHub technical documentation.
* **Vercel Analytics & Speed Insights:** Real-time performance monitoring.

### Key "Principal-Level" Features:
1.  **Dynamic README Transformer:** A custom hook fetches live README data from GitHub and uses a custom Markdown renderer to rewrite relative image paths into Raw CDN links, ensuring architecture diagrams always render correctly.
2.  **Architecture-as-Data:** Adding a new professional achievement is a zero-code operation—simply update the `experienceData.js` constant.
3.  **Visual Hierarchy:** Engineered for "Executive Presence" using grayscale-to-color transitions, glassmorphism, and animated gradients.

---

## 🚦 Getting Started

### Prerequisites
* Node.js (v18+)
* npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/raminMadi/portfolio.git

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Deployment
This project is optimized for deployment on **Vercel** or **GitHub Pages**.
```bash
npm run build
```


**Built by Ramin Mohammadi, Ph.D.** *Principal AI Engineer & Adjunct Professor*
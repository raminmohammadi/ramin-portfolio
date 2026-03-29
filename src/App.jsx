import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Layout & Sections
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomeView from './components/sections/HomeView';
import ExecView from './components/sections/ExecView';
import TeachingView from './components/sections/TeachingView';
import AgentLearningView from './components/sections/AgentLearningView';
import ResearchView from './components/sections/ResearchView';
import ExpoView from './components/sections/ExpoView';
import ProjectsView from './components/sections/ProjectsView';

const App = () => {
  return (
    <Router>
      {/* Logic to reset scroll on every route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
        
        {/* Navigation is outside Routes so it is visible on every page */}
        <Navigation />
        
        <main className="min-h-screen">
          <Routes>
            {/* Define your page paths here */}
            <Route path="/" element={<HomeView />} />
            <Route path="/exec" element={<ExecView />} />
            <Route path="/teaching" element={<TeachingView />} />
            <Route path="/agent-learning" element={<AgentLearningView />} />
            <Route path="/research" element={<ResearchView />} />
            <Route path="/expo" element={<ExpoView />} />
            <Route path="/projects" element={<ProjectsView />} />
            
            {/* Catch-all: If user goes to a URL that doesn't exist, send them Home */}
            <Route path="*" element={<HomeView />} />
          </Routes>
        </main>

        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </Router>
  );
};

export default App;
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Layout & Sections
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
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'exec': return <ExecView />;
      case 'teaching': return <TeachingView />;
      case 'agent-learning': return <AgentLearningView />;
      case 'research': return <ResearchView />;
      case 'expo': return <ExpoView />;
      case 'projects': return <ProjectsView />;
      default: return <HomeView setTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="min-h-screen">
        {renderView()}
      </main>

      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
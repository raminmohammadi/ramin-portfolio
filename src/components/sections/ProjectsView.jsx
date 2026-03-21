import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Github, ExternalLink, Terminal, Database } from 'lucide-react';

// Hooks & Constants
import { useGitHubReadme } from '../../hooks/useGitHubReadme';
import { REPOS } from '../../constants/experienceData';

// UI Primitives
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/Card';

const ProjectsView = () => {
  const { selectedProject, readmeContent, loading, fetchReadme } = useGitHubReadme();

  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/5 pb-12">
        <div>
          <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.5em] mb-4">Laboratory</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
            Hobby Projects.
          </h1>
        </div>
        
        {/* PyPI Highlight */}
        <a 
          href="https://pypi.org/project/gradientblueprint/" 
          target="_blank" 
          rel="noreferrer" 
          className="group relative p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all shadow-2xl max-w-sm"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
              <Database size={20} />
            </div>
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none">PyPI Publication</span>
          </div>
          <h3 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight group-hover:text-blue-400 transition-colors">GradientBlueprint</h3>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">
            <Terminal size={14} /> pip install gradientblueprint
          </div>
        </a>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Sidebar: Project List */}
        <div className="lg:col-span-4 space-y-4">
          {REPOS.map((repo) => (
            <button
              key={repo.path}
              onClick={() => fetchReadme(repo.path)}
              className={`w-full text-left p-6 rounded-3xl border transition-all group ${
                selectedProject === repo.path 
                ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className={`font-black uppercase italic text-xl ${selectedProject === repo.path ? 'text-emerald-400' : 'text-white'}`}>
                  {repo.name}
                </h3>
                <Github size={18} className={selectedProject === repo.path ? 'text-emerald-400' : 'text-slate-600'} />
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-2 tracking-widest">{repo.desc}</p>
            </button>
          ))}
        </div>

        {/* Main Content: README Viewer */}
        <GlassCard className="lg:col-span-8 !p-0 overflow-hidden flex flex-col h-[700px]">
          {selectedProject && (
            <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center shrink-0">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Documentation</span>
              <a href={`https://github.com/${selectedProject}`} target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs font-bold">
                SOURCE CODE <ExternalLink size={14} />
              </a>
            </div>
          )}

          <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-1 bg-[#020617]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                <span className="text-emerald-500 font-black italic uppercase text-xs tracking-widest">Fetching Data...</span>
              </div>
            ) : selectedProject ? (
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Reroute images to Raw GitHub CDN
                    img: ({ node, src, alt, ...props }) => {
                      let finalSrc = src;
                      if (src && !src.startsWith('http')) {
                        const cleanPath = src.startsWith('./') ? src.slice(2) : src;
                        finalSrc = `https://raw.githubusercontent.com/${selectedProject}/main/${cleanPath}`;
                      }
                      return (
                        <img 
                          {...props} 
                          src={finalSrc} 
                          alt={alt} 
                          className="rounded-3xl border border-white/10 shadow-2xl mx-auto my-8 block max-w-full h-auto"
                          onError={(e) => {
                            if (finalSrc.includes('/main/')) {
                              e.target.src = finalSrc.replace('/main/', '/master/');
                            }
                          }}
                        />
                      );
                    }
                  }}
                >
                  {readmeContent}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <Terminal size={40} className="text-slate-700 mb-8" />
                <h3 className="text-2xl font-black text-white italic uppercase mb-4">Select a Repository</h3>
                <p className="text-slate-500 max-w-xs mx-auto font-light italic text-xl leading-snug">
                  Explore technical documentation pulled directly from my GitHub.
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ProjectsView;
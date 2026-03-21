import React from 'react';
import { Cpu, Github, ExternalLink } from 'lucide-react';

// UI Primitives
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard, GradientCard } from '../ui/Card';

// Data & Assets
import { MILO_PROJECT, WORLD_MODELS_DATA } from '../../constants/experienceData';
import milo1 from '../../assets/milo1.jpeg';
import milo2 from '../../assets/milo2.jpeg';

const AgentLearningView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    
    {/* 1. Page Header */}
    <SectionHeader 
      subtitle="Autonomous Intelligence" 
      title="Agent Autonomy." 
      description="Engineering systems that build internal representations of reality to achieve true operational autonomy."
      color="emerald"
    />

    {/* 2. Project Milo: Embodied AI (using GlassCard) */}
    <div className="mb-40">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.6em] leading-none">
          {MILO_PROJECT.subtitle}
        </h2>
        <span className="px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black text-emerald-400 uppercase tracking-widest animate-pulse">
          Live Build Log
        </span>
      </div>
      
      <GlassCard>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <Cpu size={32} className="text-emerald-500" />
              <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                {MILO_PROJECT.title}
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 font-extralight italic leading-snug">
              {MILO_PROJECT.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              {MILO_PROJECT.tags.map((tag, idx) => (
                <div key={idx} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-400">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            {[milo1, milo2].map((img, i) => (
              <div key={i} className="rounded-[40px] overflow-hidden border border-white/10 aspect-square shadow-xl relative group/img">
                <img 
                  src={img} 
                  alt={`Milo Build ${i + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute bottom-4 left-6 text-[10px] font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover/img:opacity-100 transition-opacity">
                  {i === 0 ? "Hardware Assembly" : "Sensor Integration"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>

    {/* 3. World Models (using GradientCard) */}
    <div className="mb-20">
      <h2 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.6em] mb-12 text-center md:text-left">
        {WORLD_MODELS_DATA.subtitle}
      </h2>
      
      <GradientCard gradient="from-emerald-500 via-blue-500 to-emerald-500">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <Github size={32} className="text-emerald-500" />
              <span className="text-slate-500 font-black text-xs uppercase tracking-[0.5em]">Research Milestone</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 text-white leading-none">
              {WORLD_MODELS_DATA.title}
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 font-extralight italic mb-10 leading-snug">
              {WORLD_MODELS_DATA.desc}
            </p>
            <a 
              href={WORLD_MODELS_DATA.repoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="px-12 py-6 bg-white text-[#020617] font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all inline-flex items-center gap-4 shadow-2xl"
            >
              Explore Repository <ExternalLink size={20} />
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 aspect-video rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl relative">
            <iframe 
              className="w-full h-full opacity-80"
              src={WORLD_MODELS_DATA.videoUrl} 
              title="World Model Agent Performance" 
              frameBorder="0" 
              allowFullScreen
            />
          </div>
        </div>
      </GradientCard>
    </div>
  </div>
);

export default AgentLearningView;
import React from 'react';
import { BrainCircuit, ShieldCheck, ExternalLink, BookOpen, Microscope } from 'lucide-react';

// UI Primitives
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/Card';

// Data
import { HUMAN_RESEARCH, TECHNICAL_RESEARCH } from '../../constants/experienceData';

const ResearchView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    
    {/* 1. Page Header */}
    <SectionHeader 
      subtitle="Scientific Foundation" 
      title="Invention & Discovery." 
      color="blue"
    />

    <div className="flex gap-10 items-center justify-center lg:justify-start mb-24">
      <a href="https://scholar.google.com/citations?user=UASu03oAAAAJ" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-10 py-4 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20">
        Scholar Profile <ExternalLink size={16}/>
      </a>
      <div className="text-slate-600 font-black uppercase text-xs tracking-widest italic">12+ Peer Reviewed Articles</div>
    </div>

    {/* 2. Patent & Stats Grid */}
    <div className="grid lg:grid-cols-12 gap-12 mb-40">
       <GlassCard className="lg:col-span-8 border-l-[16px] border-l-blue-600 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-blue-500 opacity-5 group-hover:opacity-10 transition-opacity"><BrainCircuit size={300} /></div>
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-10 block underline decoration-blue-500/20 underline-offset-8 leading-none">Primary Inventor | US Patent Office</span>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter leading-[0.8] mb-12 uppercase">US 2023 / <br/> 0016037 A1</h3>
          <p className="text-3xl lg:text-4xl text-slate-300 font-extralight italic leading-tight mb-16 max-w-4xl">
            "Systems and methods for sensor fusion using autoencoder neural networks for high-reliability environments."
          </p>
          <div className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-16">
             <div className="px-8 py-3 bg-white/5 border border-white/10 text-xs font-black uppercase text-slate-400 italic">Philips Research Tenure</div>
             <div className="px-8 py-3 bg-white/5 border border-white/10 text-xs font-black uppercase text-slate-400 italic">Multimodal Fusion</div>
          </div>
       </GlassCard>
       
       <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="p-16 bg-white/[0.02] border border-white/10 rounded-[60px] flex-1 flex flex-col justify-center text-center group hover:bg-white/[0.04] transition-all relative overflow-hidden shadow-xl">
             <ShieldCheck size={80} className="mx-auto mb-10 text-blue-500 group-hover:scale-110 transition-transform shadow-2xl" />
             <h4 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-4 leading-none">Regulated AI</h4>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Mission-Critical Governance & Security</p>
          </div>
          <div className="p-16 bg-blue-600 text-white rounded-[60px] text-center shadow-xl">
             <h4 className="text-[7rem] font-black italic tracking-tighter mb-4 leading-none">12+</h4>
             <p className="text-lg font-black uppercase tracking-[0.4em] opacity-80 italic">Scholar Papers</p>
          </div>
       </div>
    </div>

    {/* 3. Human Subject Research Section */}
    <div className="mb-40">
      <div className="flex items-center gap-6 mb-16">
        <BookOpen className="text-blue-500" size={32} />
        <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">Human-Centric Research.</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        {HUMAN_RESEARCH.map((paper, i) => (
          <a key={i} href={paper.link} target="_blank" rel="noreferrer" className="group">
            <GlassCard className="h-full hover:bg-white/[0.05] transition-all border-white/5 group-hover:border-blue-500/30 overflow-hidden !p-0">
              <div className="aspect-video w-full overflow-hidden border-b border-white/10">
                <img src={paper.image} alt={paper.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-10">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block">{paper.tag}</span>
                <h4 className="text-2xl font-black text-white uppercase italic mb-6 leading-tight group-hover:text-blue-400 transition-colors">{paper.title}</h4>
                <p className="text-slate-400 font-light italic leading-relaxed">{paper.desc}</p>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </div>

    {/* 4. Technical & Non-Human Subject Research Section */}
    <div>
      <div className="flex items-center gap-6 mb-16">
        <Microscope className="text-blue-500" size={32} />
        <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">Clinical & Technical Discovery.</h3>
      </div>

      <div className="space-y-8">
        {TECHNICAL_RESEARCH.map((paper, i) => (
          <a key={i} href={paper.link} target="_blank" rel="noreferrer" className="block group">
            <div className="p-10 md:p-12 bg-white/[0.02] border border-white/10 rounded-[40px] border-l-8 border-l-slate-700 group-hover:border-l-blue-600 group-hover:bg-white/[0.04] transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-4xl">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block group-hover:text-blue-500 transition-colors">{paper.tag}</span>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase italic mb-4 leading-tight">{paper.title}</h4>
                <p className="text-slate-400 font-extralight italic leading-relaxed text-lg">{paper.desc}</p>
              </div>
              <ExternalLink className="text-slate-700 group-hover:text-blue-500 transition-colors shrink-0" size={32} />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ResearchView;
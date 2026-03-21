import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRIMARY_EXPERIENCE, FOUNDATIONAL_EXPERIENCE } from '../../constants/experienceData';

// Import our new UI Primitives
import { SectionHeader } from '../ui/SectionHeader';
import { GradientCard, GlassCard } from '../ui/Card';

// Assets
import intelIgnite1 from '../../assets/ignite.jpeg';
import intelIgnite2 from '../../assets/ignite2.jpeg';

const ExecView = () => {
  const [igniteIndex, setIgniteIndex] = useState(0);
  const ignitePhotos = [intelIgnite1, intelIgnite2];

  return (
    <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
      
      {/* 1. Header is now a single line */}
      <SectionHeader 
        subtitle="Strategy & Growth" 
        title="Executive Leadership." 
        color="emerald" 
      />
      
      {/* 2. Primary roles use the GradientCard primitive */}
      <div className="space-y-16 mb-40">
        {PRIMARY_EXPERIENCE.map((job, i) => (
          <GradientCard 
            key={i} 
            gradient={job.gradient} 
            icon={job.icon}
          >
            <span className="text-slate-500 font-black text-xs uppercase tracking-[0.5em] block mb-4 underline decoration-white/10 underline-offset-8">
              {job.time}
            </span>
            <h3 className={`text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r ${job.gradient}`}>
              {job.role}
            </h3>
            <p className="text-2xl md:text-3xl text-slate-300 leading-snug font-extralight italic mb-10">
              {job.desc}
            </p>
            
            <div className="flex gap-4 mb-10">
              {job.tags.map((tag, idx) => (
                <div key={idx} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-400 group-hover:text-white transition-colors">
                  {tag}
                </div>
              ))}
            </div>

            {job.isIgnite && (
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-video shadow-2xl">
                <img src={ignitePhotos[igniteIndex]} alt="Intel Ignite" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <button onClick={() => setIgniteIndex(prev => prev === 0 ? 1 : 0)} className="p-4 bg-black/60 rounded-full text-white hover:bg-purple-600 transition-all"><ChevronLeft size={24} /></button>
                  <button onClick={() => setIgniteIndex(prev => prev === 0 ? 1 : 0)} className="p-4 bg-black/60 rounded-full text-white hover:bg-purple-600 transition-all"><ChevronRight size={24} /></button>
                </div>
              </div>
            )}
          </GradientCard>
        ))}
      </div>

      {/* 3. Foundational Header */}
      <SectionHeader 
        subtitle="Origins & Specialized Research" 
        title="Foundational Innovation." 
        color="blue" 
      />

      {/* 4. Foundational roles use the GlassCard primitive */}
      <div className="grid md:grid-cols-1 gap-8">
        {FOUNDATIONAL_EXPERIENCE.map((item, i) => (
          <GlassCard key={i} className="border-l-8 border-l-blue-900 group hover:bg-white/[0.04] transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <h4 className="text-white font-black uppercase italic tracking-widest text-2xl md:text-4xl leading-tight max-w-3xl group-hover:text-blue-400 transition-colors">
                {item.inst}
              </h4>
              <span className="px-8 py-3 bg-blue-600/10 text-blue-400 border border-blue-400/20 rounded-full font-black uppercase text-xs tracking-widest italic shadow-xl">
                {item.date}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-slate-400 font-extralight italic leading-relaxed group-hover:text-slate-200 transition-colors">
              {item.d}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ExecView;
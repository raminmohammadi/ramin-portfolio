import React from 'react';
import { Calendar, MapPin, ArrowUpRight, Code, Terminal, Layers } from 'lucide-react';
import { HACKATHONS_DATA } from '../../constants/experienceData';

const HackathonsView = () => {
  const upcomingHackathon = HACKATHONS_DATA.find(h => h.isActive);
  const historicHackathons = [...HACKATHONS_DATA].reverse();

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom duration-700">
      
      {/* 1. Hero Section - Compacted spacing */}
      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-12 mb-20">
        
        {/* Left Side: Text Content */}
        <div className="w-full xl:max-w-2xl flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-amber-500"></span>
            <span className="text-amber-400 text-sm font-black uppercase tracking-[0.3em] italic">Code. Ship. Defend.</span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter uppercase italic mb-8 leading-[0.9]">
            The <br/> Hackathons.
          </h1>

          <p className="text-xl text-slate-400 font-extralight italic mb-10 max-w-xl border-l-4 border-amber-500/30 pl-8">
            High-octane operational sandboxes where production-ready engineering eclipses theoretical design.
          </p>

          <div className="relative p-8 bg-amber-600/5 border border-amber-500/20 rounded-[40px] shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Terminal size={24} className="text-amber-400" />
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Applied Engineering Only</h3>
            </div>
            <p className="text-md text-slate-300 italic font-extralight max-w-md">
              We eliminate traditional slide-deck fluff. Teams are judged directly on system execution, pipeline resilience, and functional APIs.
            </p>
          </div>
        </div>

        {/* Right Side: Metrics Grid - Scaled down */}
        <div className="grid grid-cols-2 gap-4 w-full xl:w-[400px] shrink-0 mt-4 xl:mt-8">
          {[
            { label: "Total Hackathons", val: `${HACKATHONS_DATA.length}` }, 
            { label: "Core Hub", val: "Boston" }, 
            { label: "Focus Domain", val: "AI/ML", icon: Code }, 
            { label: "Execution Metric", val: "Working Code", icon: Layers }
          ].map((stat, i) => (
            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col items-center justify-center p-4 border-l-4 border-l-amber-500">
              {stat.icon && <stat.icon size={24} className="text-amber-500/40 mb-2" />}
              <span className="text-2xl font-black text-white tracking-tighter italic uppercase text-center">{stat.val}</span>
              <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-2 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Upcoming Live Banner */}
      {upcomingHackathon && (
        <div className="mb-20 relative overflow-hidden rounded-[40px] bg-gradient-to-br from-amber-900/30 to-[#020617] border border-amber-500/30 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/50 text-amber-400 text-[9px] font-black uppercase tracking-widest mb-4 bg-amber-950/50">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Applications Open
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-2">{upcomingHackathon.title}</h2>
            <div className="flex gap-4 text-slate-300 text-sm italic">
              <span>{upcomingHackathon.date}</span>
              <span className="text-amber-500/30">|</span>
              <span>{upcomingHackathon.location}</span>
            </div>
          </div>
          <a href={upcomingHackathon.rsvpLink} className="px-8 py-4 bg-amber-500 text-[#020617] font-black uppercase tracking-widest text-xs rounded-full hover:bg-amber-400 transition-all">
            Register to Build
          </a>
        </div>
      )}

      {/* 3. Hackathon Chapters / Archive */}
      {historicHackathons.map((hackathon, hIdx) => (
        <div key={hackathon.id} className="mb-24">
          
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">Chapter // 0{hIdx + 1}</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mt-2">{hackathon.title}</h2>
            </div>
          </div>

          <p className="text-lg text-slate-300 font-extralight italic leading-relaxed mb-8 max-w-3xl">
            {hackathon.description}
          </p>

          <div className="space-y-4">
            {/* Top Row: Spotlight */}
            <div className="w-full relative group overflow-hidden rounded-[40px] bg-white/5 border border-white/10 h-[400px] shadow-xl">
              <img src={hackathon.gallery[0].src} alt={hackathon.gallery[0].label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] bg-amber-600 px-6 py-2 rounded-full italic shadow-lg">{hackathon.gallery[0].label}</span>
              </div>
            </div>

            {/* Bottom Row: Mosaic */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {hackathon.gallery.slice(1).map((img, i) => (
                <div key={i} className={`relative group overflow-hidden rounded-[30px] bg-white/5 border border-white/10 shadow-xl h-[250px] ${i === 0 || i === 3 ? 'md:col-span-8' : 'md:col-span-4'}`}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full italic">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HackathonsView;
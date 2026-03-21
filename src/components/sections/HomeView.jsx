import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { StatBox } from '../ui/StatBox';
import { HOME_STATS, BIO_DATA } from '../../constants/experienceData';

// Assets
import profilePic from '../../assets/Ramin-Mohammadi1.jpg';

const HomeView = ({ setTab }) => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative pt-72 pb-40 px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-white/5 border border-white/10 text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">
          <Zap size={14} className="animate-pulse" /> Technical AI Leader • PhD Scientist • Strategic Founder
        </div>

        <h1 className="text-7xl md:text-8xl lg:text-[clamp(4rem,10vw,9rem)] font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase italic">
          Leading <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">Scale & Discovery.</span>
        </h1>

        <p className="text-2xl md:text-3xl xl:text-4xl text-slate-400 max-w-4xl leading-snug mb-20 font-extralight italic border-l-2 border-emerald-500 pl-10 mx-auto md:mx-0">
          Leading high-stakes AI transformation. Managing principal-level teams and 
          pioneering the industrial standards for MLOps and Generative AI.
        </p>
        
        {/* Statistics Grid using the UI StatBox component */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-left">
          {HOME_STATS.map((s, i) => (
            <StatBox key={i} value={s.v} label={s.l} color={s.color} />
          ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          <button onClick={() => setTab('exec')} className="px-12 py-6 bg-white text-[#020617] font-black uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-400 transition-all flex items-center gap-4 shadow-2xl">
            Executive Summary <ArrowRight size={20} />
          </button>
          <button onClick={() => setTab('teaching')} className="px-12 py-6 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white/10 transition-all italic shadow-xl">
            Academic Impact
          </button>
        </div>
      </div>
    </header>

    <section className="py-40 px-8 bg-black/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-4 relative group">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-auto">
              <img src={profilePic} alt="Ramin Mohammadi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          <div className="lg:col-span-8 text-center md:text-left">
            <h2 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.6em] mb-8">My Story</h2>
            <div className="space-y-10">
              <p className="text-2xl md:text-4xl text-slate-300 font-light italic leading-tight border-l-4 border-emerald-500 pl-10">
                "{BIO_DATA.quote}"
              </p>
              <div className="text-lg md:text-xl text-slate-400 font-light leading-relaxed pl-1 md:pl-10 space-y-8">
                {BIO_DATA.paragraphs.map((p, i) => (
                  <p key={i} className={i === 1 ? "text-white font-medium italic" : ""}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeView;
import React, { useState, useEffect } from 'react';
import { 
  Github, Youtube, Linkedin, BookOpen, Cpu, Mic, Award, ExternalLink, 
  Code, Users, FileText, Zap, Mail, ChevronDown, Target, Globe, 
  Trophy, Building2, Rocket, ArrowRight, Search, Menu, X, 
  GraduationCap, Presentation, ShieldCheck, PlayCircle, TrendingUp, 
  Monitor, HeartPulse, Database, Terminal, BrainCircuit
} from 'lucide-react';

// Asset Imports
import expoMain from './assets/1766011722581.jpeg';
import expoJudging from './assets/1766011720233.jpeg';
import expoPartner from './assets/1766011714075.jpeg';
import expoCrowd from './assets/1766011720247.jpeg';
import northeasternLogo from './assets/northeastern_logo.png'; 
import practicalAI340 from './assets/practical_ai_340.png';
import practicalAI273 from './assets/practical_ai_273.png';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navOptions = [
    { id: 'home', label: 'Overview' },
    { id: 'exec', label: 'Executive Leadership' },
    { id: 'teaching', label: 'Teaching & Academy' },
    { id: 'research', label: 'Research & Patents' },
    { id: 'expo', label: 'MLOps Expo' },
    { id: 'background', label: 'Background & Bio' }
  ];

  const currentLabel = navOptions.find(opt => opt.id === activeTab)?.label;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-white text-[#020617] flex items-center justify-center font-black text-lg italic uppercase">RM</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white uppercase italic leading-none">Ramin Mohammadi</span>
              <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.3em] mt-1">Ph.D. | AI Strategy</span>
            </div>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 rounded-xl transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">{currentLabel}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`} />
            </button>

            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                <div className="absolute right-0 mt-3 w-64 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
                  {navOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setActiveTab(opt.id); setDropdownOpen(false); window.scrollTo(0,0); }}
                      className={`w-full text-left px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors border-b border-white/5 last:border-0 ${activeTab === opt.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {activeTab === 'home' && <HomeView setTab={setActiveTab} />}
        {activeTab === 'exec' && <ExecView />}
        {activeTab === 'teaching' && <TeachingView />}
        {activeTab === 'research' && <ResearchView />}
        {activeTab === 'expo' && <ExpoView />}
        {activeTab === 'background' && <BackgroundView />}
      </main>

      <footer className="py-20 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white font-black tracking-widest uppercase italic text-xl">Ramin Mohammadi, Ph.D.</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ramin-mohammadi-ml/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Linkedin size={20} /></a>
            <a href="https://github.com/raminmohammadi" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Github size={20} /></a>
            <a href="https://www.youtube.com/@MLWithRamin" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- SUB-VIEW: HOME --- */
const HomeView = ({ setTab }) => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative pt-72 pb-40 px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-4 px-5 py-2 rounded bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">
          <Zap size={14} className="animate-pulse" /> Technical AI Leader • PhD Scientist • Strategic Founder
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase italic">
          Orchestrating <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">Intelligence.</span>
        </h1>
        <p className="text-3xl text-slate-400 max-w-4xl leading-snug mb-20 font-extralight italic border-l-2 border-emerald-500 pl-10 mx-auto md:mx-0">
          Leading high-stakes AI transformation. Managing principal-level teams and 
          pioneering the industrial standards for MLOps and Generative AI.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { v: "10+", l: "Years Principal Exp" },
            { v: "12+", l: "Peer Publications" },
            { v: "01", l: "US Patent (Fusion)" },
            { v: "05", l: "MLOps Expo Seasons" }
          ].map((s, i) => (
            <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-emerald-500/30 transition-all group">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tighter italic">{s.v}</div>
              <div className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em]">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          <button onClick={() => setTab('exec')} className="px-16 py-7 bg-white text-[#020617] font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all flex items-center gap-4 shadow-2xl">
            Executive Summary <ArrowRight size={22} />
          </button>
          <button onClick={() => setTab('teaching')} className="px-16 py-7 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all italic">
            Academic Impact
          </button>
        </div>
      </div>
    </header>
  </div>
);

/* --- VIEW: EXECUTIVE (Refined Gradient Transitions) --- */
const ExecView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    <div className="text-center md:text-left mb-32 border-b border-white/5 pb-20">
      <h2 className="text-[12px] font-black text-emerald-500 uppercase tracking-[0.6em] mb-6">Strategy & Growth</h2>
      
      {/* Title font size reduced by 15% (Original 9rem -> 7.65rem) */}
      <h1 className="text-7xl md:text-[7.65rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
        Executive <br /> Leadership.
      </h1>
      
      <p className="text-2xl text-slate-400 max-w-3xl font-light italic leading-relaxed border-l-2 border-emerald-500 pl-10">
        Transforming business priorities into scalable, production-hardened AI frameworks.
      </p>
    </div>
    
    <div className="space-y-16">
      {[
        { 
          role: "Lead Principal AI Engineer | iBase-t", 
          time: "June 2025 — Present | California", 
          desc: "Directing high-performing AI organization. Secured 6+ major enterprise customers via Scan-AI pipeline, reducing turnaround from days to hours.",
          gradient: "from-emerald-500 via-emerald-400 to-blue-500",
          icon: <Target size={120} />
        },
        { 
          role: "ML Manager - Principal ML Engineer | Tausight", 
          time: "2019 — 2025 | Massachusetts", 
          desc: "Managed the full ML lifecycle and scaled team from inception to maturity. Optimized training efficiency by 40% for HIPAA-compliant systems.",
          gradient: "from-blue-600 via-blue-400 to-emerald-500",
          icon: <TrendingUp size={120} />
        },
        { 
          role: "Intel Ignite Alumnus", 
          time: "2024 | Global", 
          desc: "Focused on scaling high-growth deep tech ventures and fundraising strategy for seed-to-series-A AI startups.",
          gradient: "from-purple-600 via-blue-500 to-emerald-400",
          icon: <Zap size={120} />
        }
      ].map((job, i) => (
        <div key={i} className="relative p-[1px] rounded-[60px] overflow-hidden group shadow-2xl">
          {/* Animated Gradient Border Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
          
          {/* Internal Card Content */}
          <div className="relative p-16 bg-[#020617] rounded-[59px] h-full transition-all duration-500 group-hover:bg-[#020617]/90">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 relative z-10">
              <div className="max-w-3xl">
                <span className="text-slate-500 font-black text-[11px] uppercase tracking-[0.5em] block mb-4 underline decoration-white/10 underline-offset-8">
                  {job.time}
                </span>
                <h3 className={`text-5xl font-black italic tracking-tighter uppercase mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r ${job.gradient}`}>
                  {job.role}
                </h3>
                <p className="text-slate-300 text-2xl leading-relaxed font-light italic mb-10">
                  {job.desc}
                </p>
                <div className="flex gap-4">
                   <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      AI Strategy
                   </div>
                   <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      Industrial Scale
                   </div>
                </div>
              </div>
              <div className="text-slate-800 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 hidden lg:block shrink-0">
                {job.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
/* --- VIEW: TEACHING --- */
const TeachingView = () => (
  <div className="pt-48 pb-32 px-8 animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto">
    <div className="text-center mb-32 border-b border-white/5 pb-20">
      <h2 className="text-[12px] font-black text-emerald-500 uppercase tracking-[0.6em] mb-6">Academic Leadership</h2>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
        Shaping the <br /> Industry.
      </h1>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light italic leading-relaxed">
        Pioneer of MLOps education and founder of the Google-partnered MLOps Expo.
      </p>
    </div>

    <div className="p-10 bg-white/[0.02] border border-white/10 rounded-3xl mb-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <img src={northeasternLogo} alt="Northeastern" className="w-12 h-12 grayscale brightness-200" />
            <h3 className="text-3xl font-black text-emerald-400 uppercase italic">Adjunct Professor | Northeastern University</h3>
          </div>
          <p className="text-xl text-slate-300 font-light italic leading-relaxed">
            Designing PhD-level curricula for Generative AI, Machine Learning, NLP and MLOps. Established the first university level MLOps course in the U.S.
          </p>
        </div>
        <GraduationCap className="text-emerald-500 opacity-20 hidden lg:block" size={80} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["MLOps", "Generative AI", "NLP Foundations", "Statistical Learning"].map((course, i) => (
          <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-emerald-500/10 transition-all">
            <p className="text-white font-bold italic text-sm uppercase group-hover:text-emerald-400">{course}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="p-10 bg-blue-600/5 border border-blue-500/20 rounded-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
        <Globe size={150} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" alt="Coursera" className="w-12 h-12" />
          <a href="https://www.coursera.org/instructor/~162569871" target="_blank" rel="noreferrer" className="group/link flex items-center gap-3">
            <h3 className="text-3xl font-black text-blue-400 uppercase italic hover:text-blue-300 transition-colors">Teaching | Coursera</h3>
            <ExternalLink size={20} className="text-blue-500" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="https://www.coursera.org/learn/generative-ai-foundations-and-concepts" target="_blank" rel="noreferrer" className="p-8 bg-[#020617]/50 rounded-2xl border border-white/5 hover:border-blue-400/30 transition-all">
            <h4 className="text-white font-black mb-3 uppercase text-sm tracking-widest italic flex justify-between items-center">GenAI Foundations <ArrowRight size={16} /></h4>
            <p className="text-slate-500 text-sm italic">Strategic implementation and core architectural foundations for industrial GenAI.</p>
          </a>
          <a href="https://www.coursera.org/learn/nlp-in-engineering-concepts--real-world-applications" target="_blank" rel="noreferrer" className="p-8 bg-[#020617]/50 rounded-2xl border border-white/5 hover:border-blue-400/30 transition-all">
            <h4 className="text-white font-black mb-3 uppercase text-sm tracking-widest italic flex justify-between items-center">NLP in Engineering <ArrowRight size={16} /></h4>
            <p className="text-slate-500 text-sm italic">Applying NLP frameworks to real-world production environments.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* --- VIEW: RESEARCH --- */
const ResearchView = () => (
  <div className="pt-48 pb-32 px-8 animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto">
    <div className="mb-20 border-b border-white/5 pb-12">
      <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.5em] mb-4">Scientific Impact</h2>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-8 leading-none">Invention & Discovery.</h1>
      <div className="flex gap-6 items-center">
        <a href="https://scholar.google.com/citations?user=UASu03oAAAAJ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">View Publications <ExternalLink size={14}/></a>
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">12+ Peer Reviewed Articles</span>
      </div>
    </div>
    <div className="grid lg:grid-cols-12 gap-8 mb-16">
      <div className="lg:col-span-8 p-10 bg-white/[0.02] border border-white/10 rounded-3xl border-l-4 border-l-blue-600 group">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4 block underline underline-offset-8 decoration-blue-500/20">US Patent | US 2023 / 0016037 A1</span>
        <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-6 leading-tight">Primary Inventor | Philips Research</h3>
        <p className="text-2xl text-slate-400 font-light italic leading-relaxed mb-6">"Systems and methods for sensor fusion using autoencoder neural networks."</p>
      </div>
      <div className="lg:col-span-4 p-10 bg-blue-600 rounded-3xl text-white flex flex-col justify-center text-center">
        <h4 className="text-7xl font-black italic mb-2 tracking-tighter">12+</h4>
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 italic">Scholar Papers</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { role: "Research Assistant | MGH Institute (ITA)", date: "2015 – 2019", desc: "Led development of predictive models for NASH disease using deep image processing." },
        { role: "Machine Learning Engineer | Philips", date: "2018", desc: "Pioneered occupancy counting patent and developed multimodal sensor fusion models." },
        { role: "Deep Learning Engineer | Mitsubishi (MERL)", date: "2019", desc: "Developed anomaly detection via VAEs for satellite orbits and RL optimization for HVAC." },
        { role: "Data Scientist | Partners HealthCare", date: "2016 – 2017", desc: "Developed models reducing heart failure readmission by 15% and built neural engagement engines." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group relative">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-white font-bold uppercase italic text-lg leading-tight max-w-[75%]">{item.role}</h4>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.date}</span>
          </div>
          <p className="text-slate-500 text-sm font-light italic leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

/* --- VIEW: MLOPS EXPO --- */
const ExpoView = () => {
  const expoGallery = [
    { src: expoMain, label: 'Season 05 | Google Cambridge', span: 'md:col-span-8 md:row-span-2' },
    { src: expoJudging, label: 'Industry Judging', span: 'md:col-span-4 md:row-span-1' },
    { src: expoPartner, label: 'Google Cloud Partnership', span: 'md:col-span-4 md:row-span-1' },
    { src: expoCrowd, label: '500+ Community Members', span: 'md:col-span-12 md:row-span-1' },
  ];

  const GoogleCloudLogo = ({ size = 24 }) => (
    <img src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png" alt="Google Cloud" style={{ width: size, height: size }} className="inline-block" />
  );

  return (
    <div className="pt-48 pb-32 px-8 animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic mb-8 leading-tight">The MLOps <br/> Expo.</h1>
          <div className="p-10 bg-purple-700/10 border border-purple-500/20 rounded-[40px] shadow-2xl group">
            <div className="flex items-center gap-4 mb-6"><GoogleCloudLogo size={40} /><h3 className="text-3xl font-black text-white uppercase italic text-purple-400">Google Partnership</h3></div>
            <p className="text-xl text-slate-300 italic font-light leading-relaxed">Recognized and formally supported by Google Cloud. Season 5 hosted at Google Cambridge.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 relative">
          {[
            { label: "Community", val: "500+" },
            { label: "Partner", val: "Google", logo: true },
            { label: "Sponsor", val: "Google-Cloud", logo: true },
            { label: "Season", val: "05" }
          ].map((stat, i) => (
            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col items-center justify-center text-center p-8 border-l-4 border-l-purple-500 shadow-2xl">
              <div className="flex flex-col items-center gap-2">{stat.logo && <GoogleCloudLogo size={32} />}<span className="text-4xl font-black text-white tracking-tighter italic uppercase">{stat.val}</span></div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {expoGallery.map((img, i) => (
          <div key={i} className={`${img.span} relative group overflow-hidden rounded-[40px] bg-white/5 border border-white/10 h-[400px]`}>
            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            <div className="absolute bottom-8 left-8"><span className="text-[10px] font-black text-white uppercase tracking-[0.4em] bg-purple-600 px-4 py-2 rounded-full shadow-2xl">{img.label}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- VIEW: BACKGROUND --- */
const BackgroundView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    <div className="text-center mb-32 border-b border-white/5 pb-20">
      <h2 className="text-[12px] font-black text-slate-500 uppercase tracking-[0.6em] mb-6">The Story</h2>
      <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">Foundations.</h1>
      <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
        My work is defined by the practical application of advanced computation to industrial problems. 
        With a Ph.D. from Northeastern and a focus on the engineering reality of production AI, 
        I bridge the gap between scientific research and stable, high-ROI enterprise systems.
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-20 mb-40">
      <div className="space-y-12">
        <h3 className="text-3xl font-black text-white mb-16 uppercase tracking-widest italic flex items-center gap-6 border-b border-white/5 pb-8"><Rocket className="text-emerald-500" /> Education</h3>
        <div className="p-16 bg-white/[0.02] border border-white/10 rounded-[60px] relative overflow-hidden shadow-2xl">
          <div className="border-l-8 border-emerald-500 pl-10 mb-16"><h4 className="text-4xl font-black italic text-white uppercase leading-none mb-4">Ph.D. CS / IE</h4><p className="text-slate-500 font-bold uppercase text-[11px]">Northeastern University | 2020.</p></div>
          <div className="border-l-8 border-blue-500 pl-10"><h4 className="text-4xl font-black italic text-white uppercase leading-none mb-4">MBA Candidate</h4><p className="text-slate-500 font-bold uppercase text-[11px]">Expected 2027.</p></div>
          <div className="mt-20 pt-12 border-t border-white/5 space-y-6 text-slate-400 text-lg italic"><div className="flex gap-6 items-center"><Award className="text-yellow-500" /> Akira Yamamura Award for Excellence</div><div className="flex gap-6 items-center"><Trophy className="text-blue-500" /> Boston Scientific Challenge Finalist</div></div>
        </div>
      </div>
      <div className="space-y-12">
        <h3 className="text-3xl font-black text-white mb-16 uppercase tracking-widest italic flex items-center gap-6 border-b border-white/5 pb-8"><Mic className="text-red-500" /> Media & Presence</h3>
        <div className="space-y-8">
          <a href="https://www.youtube.com/watch?v=vMQOZDuqOVI" target="_blank" rel="noreferrer" className="p-10 bg-white/[0.02] border border-white/10 rounded-[40px] block hover:bg-white/10 transition-all group overflow-hidden shadow-2xl">
            <div className="flex justify-between items-start mb-6"><Youtube className="text-red-600" size={50} /><span className="text-emerald-500 font-bold uppercase text-[10px]">Featured Talk | 2024</span></div>
            <h4 className="text-white font-black uppercase italic text-3xl mb-4 leading-tight">Career Resilience in the Age of AI | Northeastern</h4>
            <div className="flex items-center gap-2 text-slate-500 group-hover:text-white transition-colors"><PlayCircle size={18} /> <span className="text-[11px] font-bold uppercase">Watch Presentation</span></div>
          </a>
          <a href="https://practicalai.fm/340" target="_blank" rel="noreferrer" className="flex items-center gap-8 p-8 bg-white/[0.02] border border-white/10 rounded-[40px] hover:bg-white/5 transition-all group">
            <img src={practicalAI340} alt="Practical AI 340" className="w-32 h-32 rounded-2xl object-cover grayscale group-hover:grayscale-0" />
            <div><span className="text-emerald-500 font-bold uppercase text-[10px] mb-2 block">Practical AI Episode 340</span><h4 className="text-xl font-black text-white uppercase italic leading-tight">The AI engineer skills gap</h4></div>
          </a>
          <a href="https://changelog.com/practicalai/273" target="_blank" rel="noreferrer" className="flex items-center gap-8 p-8 bg-white/[0.02] border border-white/10 rounded-[40px] hover:bg-white/5 transition-all group">
            <img src={practicalAI273} alt="Practical AI 273" className="w-32 h-32 rounded-2xl object-cover grayscale group-hover:grayscale-0" />
            <div><span className="text-blue-500 font-bold uppercase text-[10px] mb-2 block">Practical AI Episode 273</span><h4 className="text-xl font-black text-white uppercase italic leading-tight">Finding sensitive data with edge models</h4></div>
          </a>
          {/* YouTube Channel Featured Card */}
          <a href="https://www.youtube.com/@MLWithRamin" target="_blank" rel="noreferrer" className="p-10 bg-white/[0.02] border border-white/10 rounded-[40px] block hover:bg-white/10 transition-all group overflow-hidden shadow-2xl">
             <Youtube className="text-red-600 mb-6 group-hover:rotate-12 transition-transform duration-700" size={50} />
             <h4 className="text-white font-black uppercase italic tracking-widest text-3xl mb-4">ML With Ramin</h4>
             <p className="text-slate-400 text-xl font-extralight italic leading-snug">Educational platform reaching 1k+ annual students globally.</p>
          </a>
        </div>
      </div>
    </div>
    <div className="p-20 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[80px] text-[#020617] font-black text-center uppercase tracking-[0.5em] shadow-2xl shadow-emerald-500/20 text-3xl italic">Principal Leader • Scientist • Strategic Advisor</div>
  </div>
);

export default App;
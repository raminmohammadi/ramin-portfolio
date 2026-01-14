import React, { useState, useEffect } from 'react';
import { 
  Github, Youtube, Linkedin, BookOpen, Cpu, Mic, Award, ExternalLink, 
  Code, Users, FileText, Zap, Mail, ChevronDown, Target, Globe, 
  Trophy, Building2, Rocket, ArrowRight, Search, Menu, X, 
  GraduationCap, Presentation, ShieldCheck, PlayCircle, TrendingUp, 
  Monitor, HeartPulse, Database, Terminal, BrainCircuit, ChevronLeft, ChevronRight
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Asset Imports
import expoMain from './assets/1766011722581.jpeg';
import expoJudging from './assets/1766011720233.jpeg';
import expoPartner from './assets/1766011714075.jpeg';
import expoCrowd from './assets/1766011720247.jpeg';
import expoCrowd2 from './assets/1745263483597.jpeg';
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
    { id: 'projects', label: 'Hobby Projects' },
  ];

  const currentLabel = navOptions.find(opt => opt.id === activeTab)?.label;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-white text-[#020617] flex items-center justify-center font-black text-xl italic uppercase">RM</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white uppercase italic leading-none">Ramin Mohammadi</span>
              <span className="text-[10px] md:text-xs text-emerald-500 font-bold uppercase tracking-[0.3em] mt-1">Ph.D. | AI Strategy</span>
            </div>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 rounded-xl transition-all"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white">{currentLabel}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`} />
            </button>

            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                <div className="absolute right-0 mt-3 w-72 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
                  {navOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setActiveTab(opt.id); setDropdownOpen(false); window.scrollTo(0,0); }}
                      className={`w-full text-left px-8 py-4 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-colors border-b border-white/5 last:border-0 ${activeTab === opt.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
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
        {activeTab === 'projects' && <ProjectsView />}
      </main>

      <footer className="py-20 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white font-black tracking-widest uppercase italic text-2xl">Ramin Mohammadi, Ph.D.</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ramin-mohammadi-ml/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all shadow-xl"><Linkedin size={20} /></a>
            <a href="https://github.com/raminmohammadi" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all shadow-xl"><Github size={20} /></a>
            <a href="https://www.youtube.com/@MLWithRamin" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all shadow-xl"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- SUB-VIEWS --- */

/* --- VIEW: HOME (Combined with Background & Bio) --- */
const HomeView = ({ setTab }) => (
  <div className="animate-in fade-in duration-1000">
    {/* SECTION 1: ORIGINAL OVERVIEW HEADER */}
    <header className="relative pt-72 pb-40 px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-white/5 border border-white/10 text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">
          <Zap size={14} className="animate-pulse" /> Technical AI Leader • PhD Scientist • Strategic Founder
        </div>
        <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase italic">
          Leading <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">Scale & Discovery.</span>
        </h1>
        <p className="text-2xl md:text-3xl xl:text-4xl text-slate-400 max-w-4xl leading-snug mb-20 font-extralight italic border-l-2 border-emerald-500 pl-10 mx-auto md:mx-0">
          Leading high-stakes AI transformation. Managing principal-level teams and 
          pioneering the industrial standards for MLOps and Generative AI.
        </p>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-left">
          {[
            { v: "10+", l: "Years Principal Exp" },
            { v: "12+", l: "Peer Publications" },
            { v: "01", l: "US Patent (Fusion)" },
            { v: "05", l: "MLOps Expo Seasons" }
          ].map((s, i) => (
            <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-emerald-500/30 transition-all group shadow-lg">
              <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tighter italic">{s.v}</div>
              <div className="text-[11px] md:text-xs text-slate-500 font-black uppercase tracking-[0.3em]">{s.l}</div>
            </div>
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

    {/* SECTION 2: THE STORY & NARRATIVE (Original Background) */}
    <section className="py-40 px-8 bg-black/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-32 border-b border-white/5 pb-20">
          <h2 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.6em] mb-8">My Story</h2>
          <div className="max-w-5xl space-y-10">
            <p className="text-2xl md:text-4xl text-slate-300 font-light italic leading-tight border-l-4 border-emerald-500 pl-10 md:pl-16">
              "I spent my Ph.D. years focused on the technical 'what,' but my career has been defined by the 'how.'"
            </p>
            
            <div className="text-lg md:text-xl text-slate-400 font-light leading-relaxed pl-1 md:pl-20 space-y-8">
              <p className="max-w-3xl">
                Most people can build a model; very few can ship one that survives a production environment with regulated data and enterprise scale. I went back for my MBA because I realized that the hardest problems in AI aren't just technical-they’re organizational and strategic.
              </p>
              
              <p className="max-w-4xl text-white font-medium italic leading-relaxed">
                Beyond the research, what drives me is the "Aha" moment in a conversation with a customer, that point where the complexity fades away and they realize exactly how the system solves their problem. My work is about building toward that moment: turning research-grade computation into high-integrity infrastructure that actually works for people.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: EDUCATION & MEDIA (Original Background) */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Education Block */}
          <div className="space-y-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-16 uppercase tracking-widest italic flex items-center gap-8 border-b border-white/5 pb-8 text-left">
              <Rocket className="text-emerald-500" size={48} /> Education
            </h3>
            <div className="p-16 md:p-20 bg-white/[0.02] border border-white/10 rounded-[80px] relative overflow-hidden shadow-2xl text-left">
              <div className="border-l-8 border-emerald-500 pl-12 mb-16">
                <h4 className="text-4xl font-black italic text-white uppercase leading-none mb-6 tracking-tighter">Ph.D. CS / IE</h4>
                <p className="text-slate-500 font-black uppercase text-sm tracking-widest italic">Northeastern University | 2020.</p>
              </div>
              <div className="border-l-8 border-blue-500 pl-12 mb-16">
                <h4 className="text-4xl font-black italic text-white uppercase leading-none mb-6 tracking-tighter">MBA Candidate</h4>
                <p className="text-slate-500 font-black uppercase text-sm tracking-widest italic">Northeastern University | Expected 2027.</p>
              </div>
              <div className="mt-20 pt-16 border-t border-white/5 space-y-12 text-slate-400 text-xl md:text-2xl italic font-extralight">
                <div className="flex gap-10 items-center"><Award className="text-yellow-500" size={40} /> Akira Yamamura Award for Excellence</div>
                <div className="flex gap-10 items-center"><Trophy className="text-blue-500" size={40} /> Boston Scientific Challenge Finalist</div>
              </div>
            </div>
          </div>

          {/* Media & Presence Block */}
          <div className="space-y-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-16 uppercase tracking-widest italic flex items-center gap-8 border-b border-white/5 pb-8 text-left">
              <Mic className="text-red-500" size={48} /> Media & Presence
            </h3>
            <div className="space-y-12">
              <a href="https://www.youtube.com/watch?v=vMQOZDuqOVI" target="_blank" rel="noreferrer" className="p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-[70px] block hover:bg-white/10 transition-all group overflow-hidden shadow-2xl text-left">
                <div className="flex justify-between items-start mb-12"><Youtube className="text-red-600" size={80} /><span className="text-emerald-500 font-black uppercase text-xs tracking-widest border border-emerald-500/20 px-8 py-3 rounded-full italic shadow-2xl">Featured Talk | 2024</span></div>
                <h4 className="text-white font-black uppercase italic text-3xl mb-10 leading-none tracking-tighter">Career Resilience in the Age of AI | Northeastern</h4>
                <div className="flex items-center gap-5 text-slate-500 group-hover:text-white transition-colors"><PlayCircle size={32} /> <span className="text-sm font-black uppercase tracking-widest italic">Watch Full Presentation</span></div>
              </a>
              
              <a href="https://practicalai.fm/340" target="_blank" rel="noreferrer" className="flex items-center gap-10 p-12 bg-white/[0.02] border border-white/10 rounded-[70px] hover:bg-white/5 transition-all group shadow-2xl text-left">
                <img src={practicalAI340} alt="Practical AI" className="w-40 h-40 rounded-[40px] object-cover grayscale group-hover:grayscale-0 shadow-2xl" />
                <div>
                  <span className="text-emerald-500 font-black uppercase text-xs tracking-[0.4em] mb-6 block italic">Practical AI Episode 340</span>
                  <h4 className="text-2xl font-black text-white uppercase italic leading-none tracking-tighter">The AI engineer skills gap</h4>
                </div>
              </a>

              <a href="https://www.youtube.com/@MLWithRamin" target="_blank" rel="noreferrer" className="p-12 bg-white/[0.02] border border-white/10 rounded-[70px] block hover:bg-white/10 transition-all group shadow-2xl text-left">
                 <Youtube className="text-red-600 mb-10" size={80} />
                 <h4 className="text-white font-black uppercase italic tracking-widest text-4xl mb-8 leading-none tracking-tighter">ML With Ramin</h4>
                 <p className="text-slate-400 text-2xl font-extralight italic">Educational platform reaching 1k+ annual students globally.</p>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 4: FINAL PROFESSIONAL BANNER */}
        <div className="p-15 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[120px] text-[#020617] font-black text-center uppercase tracking-[0.5em] shadow-2xl shadow-emerald-500/30 text-2xl md:text-3xl italic leading-none">
          Principal Leader • Scientist • Strategic Advisor
        </div>
      </div>
    </section>
  </div>
);

const ExecView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    <div className="text-center md:text-left mb-32 border-b border-white/5 pb-20">
      <h2 className="text-xs md:text-sm font-black text-emerald-500 uppercase tracking-[0.6em] mb-6">Strategy & Growth</h2>
      <h1 className="text-6xl md:text-[7.65rem] font-black text-white tracking-tighter uppercase italic mb-12 leading-none">
        Executive <br /> Leadership.
      </h1>
      <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl font-light italic leading-relaxed border-l-2 border-emerald-500 pl-10">
        Transforming business priorities into scalable, production-hardened AI frameworks.
      </p>
    </div>
    
    <div className="space-y-16">
      {[
        { 
          role: "Lead Principal AI Engineer | iBase-t", 
          time: "June 2025 — Present | California", 
          desc: "Directing high-performing AI organization. Secured major enterprise customers via Solumina-AI.",
          gradient: "from-emerald-500 via-emerald-400 to-blue-500",
          icon: <Target className="size-24 md:size-32 lg:size-40" />
        },
        { 
          role: "ML Manager - Principal ML Engineer | Tausight", 
          time: "2019 — 2025 | Massachusetts", 
          desc: "Managed the full ML lifecycle and scaled team from inception to maturity. Optimized training efficiency by 40% for HIPAA-compliant systems.",
          gradient: "from-blue-600 via-blue-400 to-emerald-500",
          icon: <TrendingUp className="size-24 md:size-32 lg:size-40" />
        },
        { 
          role: "Intel Ignite Alumnus", 
          time: "2024 | Global", 
          desc: "Focused on scaling high-growth deep tech ventures and fundraising strategy for seed-to-series-A AI startups.",
          gradient: "from-purple-600 via-blue-500 to-emerald-400",
          icon: <Zap className="size-24 md:size-32 lg:size-40" />
        }
      ].map((job, i) => (
        <div key={i} className="relative p-[1px] rounded-[60px] overflow-hidden group shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
          <div className="relative p-12 md:p-16 lg:p-20 bg-[#020617] rounded-[59px] h-full transition-all duration-500 group-hover:bg-[#020617]/90">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 relative z-10">
              <div className="max-w-4xl">
                <span className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-[0.5em] block mb-4 underline decoration-white/10 underline-offset-8">
                  {job.time}
                </span>
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r ${job.gradient}`}>
                  {job.role}
                </h3>
                <p className="text-2xl md:text-3xl xl:text-4xl text-slate-300 leading-snug font-extralight italic mb-10">
                  {job.desc}
                </p>
                <div className="flex gap-4">
                   <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors shadow-lg">
                      AI Strategy
                   </div>
                   <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors shadow-lg">
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

const TeachingView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    <div className="text-center mb-32 border-b border-white/5 pb-20">
      <h2 className="text-xs md:text-sm font-black text-emerald-500 uppercase tracking-[0.6em] mb-6">Academic Leadership</h2>
      <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
        Shaping the <br /> Industry.
      </h1>
      <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl mx-auto font-light italic leading-relaxed">
        Empowering high-potential talent to move beyond modeling and master the engineering discipline required to build and ship end-to-end AI systems.
      </p>
    </div>

    <div className="p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-[60px] mb-12 shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-6 mb-10">
            <img src={northeasternLogo} alt="Northeastern" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 grayscale brightness-200" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-emerald-400 uppercase italic tracking-tighter leading-none">Adjunct Professor | Northeastern University</h3>
          </div>
          <p className="text-2xl md:text-3xl text-slate-300 font-extralight italic leading-relaxed mb-10">
            Designing PhD-level curricula for Generative AI, Machine Learning, NLP and MLOps. Established the first university level MLOps course in the U.S.
          </p>
        </div>
        <GraduationCap className="text-emerald-500 opacity-20 hidden lg:block" size={120} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["MLOps", "Generative AI", "NLP Foundations", "Statistical Learning"].map((course, i) => (
          <div key={i} className="p-8 md:p-10 bg-white/5 rounded-3xl border border-white/5 text-center group hover:bg-emerald-500/10 transition-all shadow-xl">
            <p className="text-white font-bold italic text-base md:text-lg lg:text-xl uppercase group-hover:text-emerald-400 tracking-tight leading-none">{course}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="p-12 md:p-16 bg-blue-600/5 border border-blue-500/20 rounded-[60px] relative overflow-hidden group shadow-2xl">
      <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-700">
        <Globe size={250} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" alt="Coursera" className="w-16 h-16 shadow-2xl" />
          <a href="https://www.coursera.org/instructor/~162569871" target="_blank" rel="noreferrer" className="group/link flex items-center gap-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-400 uppercase italic hover:text-blue-300 transition-colors tracking-tighter">Teaching | Coursera</h3>
            <ExternalLink size={24} className="text-blue-500" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <a href="https://www.coursera.org/learn/generative-ai-foundations-and-concepts" target="_blank" rel="noreferrer" className="p-10 md:p-12 bg-[#020617]/50 rounded-[40px] border border-white/5 hover:border-blue-400/30 transition-all shadow-2xl group/card">
            <h4 className="text-white font-black mb-6 uppercase text-xl lg:text-2xl tracking-widest italic flex justify-between items-center leading-none">GenAI Foundations <ArrowRight size={24} /></h4>
            <p className="text-slate-400 text-lg lg:text-xl italic leading-relaxed font-light">Strategic implementation and core architectural foundations for industrial GenAI.</p>
          </a>
          <a href="https://www.coursera.org/learn/nlp-in-engineering-concepts--real-world-applications" target="_blank" rel="noreferrer" className="p-10 md:p-12 bg-[#020617]/50 rounded-[40px] border border-white/5 hover:border-blue-400/30 transition-all shadow-2xl group/card">
            <h4 className="text-white font-black mb-6 uppercase text-xl lg:text-2xl tracking-widest italic flex justify-between items-center leading-none">NLP in Engineering <ArrowRight size={24} /></h4>
            <p className="text-slate-400 text-lg lg:text-xl italic leading-relaxed font-light">Applying NLP frameworks to real-world production environments.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);


/* --- SUB-VIEW: RESEARCH --- */
const ResearchView = () => (
  <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
    <div className="mb-32 border-b border-white/5 pb-20">
      <h2 className="text-xs md:text-sm font-black text-blue-500 uppercase tracking-[0.6em] mb-6">Scientific Foundation</h2>
      <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12 text-center lg:text-left leading-none">
        Invention & <br /> Discovery.
      </h1>
      <div className="flex gap-10 items-center justify-center lg:justify-start">
        <a href="https://scholar.google.com/citations?user=UASu03oAAAAJ" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-10 py-4 bg-blue-600 text-white rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20">Scholar Profile <ExternalLink size={16}/></a>
        <div className="text-slate-600 font-black uppercase text-[10px] md:text-xs tracking-widest italic whitespace-nowrap">12+ Peer Reviewed Articles</div>
      </div>
    </div>

    <div className="grid lg:grid-cols-12 gap-12 mb-32">
       <div className="lg:col-span-8 p-16 md:p-20 bg-white/[0.02] border border-white/10 rounded-[80px] border-l-[16px] border-l-blue-600 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 text-blue-500 opacity-5 group-hover:opacity-10 transition-opacity"><BrainCircuit size={300} /></div>
          <span className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-[0.5em] mb-10 block underline decoration-blue-500/20 underline-offset-8 leading-none">Primary Inventor | US Patent Office</span>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter leading-[0.8] mb-12 uppercase leading-none">US 2023 / <br/> 0016037 A1</h3>
          <p className="text-3xl lg:text-4xl text-slate-300 font-extralight italic leading-tight mb-16 max-w-4xl">
            "Systems and methods for sensor fusion using autoencoder neural networks for high-reliability environments."
          </p>
          <div className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-16">
             <div className="px-8 py-3 md:px-10 md:py-4 bg-white/5 border border-white/10 text-[10px] md:text-xs font-black uppercase text-slate-400 italic leading-none shadow-lg">Philips Research Tenure</div>
             <div className="px-8 py-3 md:px-10 md:py-4 bg-white/5 border border-white/10 text-[10px] md:text-xs font-black uppercase text-slate-400 italic leading-none shadow-lg">Multimodal Fusion</div>
          </div>
       </div>
       
       <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="p-16 bg-white/[0.02] border border-white/10 rounded-[60px] flex-1 flex flex-col justify-center text-center group hover:bg-white/[0.04] transition-all relative overflow-hidden shadow-xl">
             <ShieldCheck size={80} className="mx-auto mb-10 text-blue-500 group-hover:scale-110 transition-transform shadow-2xl" />
             <h4 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-4 leading-none tracking-tight">Regulated AI</h4>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Mission-Critical Governance & Security</p>
          </div>
          <div className="p-16 bg-blue-600 text-white rounded-[60px] text-center shadow-xl">
             <h4 className="text-[7rem] md:text-[10rem] font-black italic tracking-tighter mb-4 leading-none whitespace-nowrap">12+</h4>
             <p className="text-lg md:text-xl font-black uppercase tracking-[0.4em] opacity-80 italic">Scholar Papers</p>
          </div>
       </div>
    </div>

    <div className="grid md:grid-cols-1 gap-12">
       {[
         { inst: "Research Assistant | MGH Institute (ITA)", date: "2015 – 2019", d: "Led development and validation of predictive models for Non-Alcoholic Steatohepatitis (NASH) using image processing over ultrasound imagery." },
         { inst: "Data Scientist | Partners HealthCare", date: "2016 – 2017", d: "Developed hierarchical deep learning for readmission risk assessment, resulting in a 15% reduction for heart failure patients." },
         { inst: "Deep Learning Engineer | Mitsubishi (MERL)", date: "2019", d: "Real-time anomaly detection for satellite orbit maneuvers via VAEs and RL-based HVAC system optimization." },
         { inst: "Machine Learning Engineer | Philips", date: "2018", d: "Pioneered multimodal sensor fusion models for building automation and occupant counting sensors." },
        ].map((item, i) => (
         <div key={i} className="p-8 md:p-12 lg:p-12 bg-white/[0.02] border border-white/10 rounded-[60px] border-l-8 border-l-blue-900 group shadow-2xl hover:bg-white/[0.04] transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-12">
              <h4 className="text-white font-black uppercase italic tracking-widest text-3xl md:text-4xl lg:text-4xl leading-[1.1] max-w-5xl tracking-tighter leading-none">
                {item.inst}
              </h4>
              <span className="px-8 py-3 bg-blue-600/10 text-blue-400 border border-blue-400/20 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shrink-0 italic shadow-xl">
                {item.date}
              </span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-2xl text-slate-400 font-extralight italic leading-relaxed group-hover:text-slate-200 transition-colors">
              {item.d}
            </p>
         </div>
       ))}
    </div>
  </div>
);

/* --- VIEW: EXPO --- */
const ExpoView = () => {
  const [crowdIndex, setCrowdIndex] = useState(0);

  const expoGallery = [
    { src: expoMain, label: 'Season 05 | Google Cambridge', span: 'md:col-span-8 md:row-span-2' },
    { src: expoJudging, label: 'Industry Judging', span: 'md:col-span-4 md:row-span-1' },
    { src: expoPartner, label: 'Google Cloud Partnership', span: 'md:col-span-4 md:row-span-1' },
    { 
      isSwitchable: true,
      variants: [
        { src: expoCrowd, label: '500+ Community Members' },
        { src: expoCrowd2, label: '500+ Community Members' }
      ], 
      span: 'md:col-span-12 md:row-span-1' 
    },
  ];

  const GoogleCloudLogo = ({ size = 24 }) => (
    <img src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png" alt="Google Cloud" style={{ width: size, height: size }} className="inline-block shadow-lg" />
  );

  return (
    <div className="pt-48 pb-32 px-8 animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          {/* Founder Line */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-12 md:w-16 bg-emerald-500"></span>
            <span className="text-emerald-400 text-base md:text-lg font-black uppercase tracking-[0.5em] leading-none italic">Founder: Ramin Mohammadi, Ph.D.</span>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-[9.5rem] font-black text-white tracking-tighter uppercase italic mb-10 leading-[0.85]">The MLOps <br/> Expo.</h1>
          
          {/* Short Description */}
          <p className="text-2xl md:text-3xl text-slate-400 font-extralight italic mb-12 max-w-2xl leading-snug border-l-4 border-emerald-500/30 pl-10">
            The premier recurring summit connecting engineering leads with elite academic talent to bridge the gap between classroom theory and production-grade ML.
          </p>

          <div className="p-12 md:p-16 bg-purple-700/10 border border-purple-500/20 rounded-[60px] shadow-2xl group">
            <div className="flex items-center gap-6 mb-10">
              <GoogleCloudLogo size={70} />
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-black text-white uppercase italic text-purple-400 tracking-tighter leading-none">Google Partnership</h3>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 italic font-extralight leading-relaxed italic">Recognized and formally supported by Google Cloud. Season 5 hosted at Google Cambridge.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 relative">
          {[
            { label: "Community", val: "500+" },
            { label: "Partner", val: "Google", logo: true },
            { label: "Sponsor", val: "Google-Cloud", logo: true },
            { label: "Season", val: "05" }
          ].map((stat, i) => (
            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-[60px] flex flex-col items-center justify-center text-center p-10 border-l-8 border-l-purple-500 shadow-2xl hover:border-white/10 transition-all">
              <div className="flex flex-col items-center gap-6">
                {stat.logo && <GoogleCloudLogo size={60} />}
                <span className="text-5xl md:text-4xl font-black text-white tracking-tighter italic uppercase">{stat.val}</span>
              </div>
              <span className="text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-widest mt-6 italic">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {expoGallery.map((img, i) => {
          const displaySrc = img.isSwitchable ? img.variants[crowdIndex].src : img.src;
          const displayLabel = img.isSwitchable ? img.variants[crowdIndex].label : img.label;
          return (
            <div key={i} className={`${img.span} relative group overflow-hidden rounded-[70px] bg-white/5 border border-white/10 h-[600px] shadow-2xl`}>
              <img 
                src={displaySrc} 
                alt={displayLabel} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30 group-hover:opacity-10 transition-opacity" />
              {img.isSwitchable && (
                <div className="absolute top-12 right-12 flex bg-black/70 backdrop-blur-2xl p-2 rounded-full border border-white/10 z-10 shadow-2xl">
                  <button onClick={() => setCrowdIndex(0)} className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${crowdIndex === 0 ? 'bg-purple-600 text-white shadow-2xl' : 'text-slate-400 hover:text-white'}`}>View 1</button>
                  <button onClick={() => setCrowdIndex(1)} className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${crowdIndex === 1 ? 'bg-purple-600 text-white shadow-2xl' : 'text-slate-400 hover:text-white'}`}>View 2</button>
                </div>
              )}
              <div className="absolute bottom-12 left-12 z-10">
                <span className="text-xs md:text-sm font-black text-white uppercase tracking-[0.4em] bg-purple-600 px-8 py-4 rounded-full shadow-2xl border border-white/10 italic">
                  {displayLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProjectsView = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [loading, setLoading] = useState(false);

  const repos = [
    { name: 'AI-agent-smart-assist', path: 'raminmohammadi/ai-agent-smart-assist', desc: 'Agentic AI' },
    { name: 'Averix', path: 'raminmohammadi/Averix', desc: 'Code Generation' },
    { name: 'GradientBlueprint', path: 'raminmohammadi/GradientBlueprint', desc: 'Architectural Patterns' },
    { name: 'US Food', path: 'raminmohammadi/US_Food', desc: 'Data Analytics' },
    { name: 'MLOps', path: 'raminmohammadi/MLOps', desc: 'Production Systems' },
    { name: 'GEN-AI', path: 'raminmohammadi/GEN-AI', desc: 'Generative Frameworks' },
    { name: 'NLP', path: 'raminmohammadi/NLP', desc: 'Language Processing' },
  ];

  const fetchReadme = async (repoPath) => {
    setLoading(true);
    setSelectedProject(repoPath);
    try {
      const response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
      if (response.ok) {
        const text = await response.text();
        setReadmeContent(text);
      } else {
        const altResponse = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
        const altText = await altResponse.text();
        setReadmeContent(altResponse.ok ? altText : "README not found.");
      }
    } catch (err) {
      setReadmeContent("Error loading project details.");
    }
    setLoading(false);
  };

  return (
    <div className="pt-48 pb-32 px-8 animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto">
      <div className="mb-20 border-b border-white/5 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.5em] mb-4">Laboratory</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-0 leading-none">Hobby Projects.</h1>
        </div>
        
        {/* NEW: PYPI PACKAGE SECTION */}
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
          <p className="text-xs text-slate-500 italic mb-4">Official Python package for streamlined ML architectural patterns.</p>
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Terminal size={14} /> pip install gradientblueprint
          </div>
        </a>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-4">
          {repos.map((repo) => (
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

        <div className="lg:col-span-8 bg-[#020617] border border-white/10 rounded-[40px] overflow-hidden flex flex-col h-[700px] shadow-2xl">
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
                <span className="text-emerald-500 font-black italic uppercase text-xs tracking-widest">Fetching Repository...</span>
              </div>
            ) : selectedProject ? (
              <div className="prose prose-invert max-w-none 
                prose-headings:font-black prose-headings:italic prose-headings:tracking-tighter prose-headings:uppercase prose-headings:text-white prose-headings:mb-6 prose-headings:mt-10
                prose-h1:text-4xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-300 prose-li:my-1
                prose-ul:list-disc prose-ol:list-decimal
                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-6
                prose-code:text-emerald-400 prose-code:bg-emerald-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline">
                
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {readmeContent}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <Terminal size={40} className="text-slate-700 mb-8" />
                <h3 className="text-2xl font-black text-white italic uppercase mb-4">Select a Repository</h3>
                <p className="text-slate-500 max-w-xs mx-auto font-light italic text-xl">
                  Explore technical documentation and engineering patterns pulled directly from my GitHub environment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_OPTIONS } from '../../constants/navigation';

const Navigation = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLabel = NAV_OPTIONS.find(opt => opt.id === activeTab)?.label;

  return (
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
              <div className="absolute right-0 mt-3 w-72 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden">
                {NAV_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setActiveTab(opt.id); setDropdownOpen(false); window.scrollTo(0,0); }}
                    className={`w-full text-left px-8 py-4 text-[11px] md:text-xs font-bold uppercase tracking-widest border-b border-white/5 last:border-0 ${activeTab === opt.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
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
  );
};

export default Navigation;
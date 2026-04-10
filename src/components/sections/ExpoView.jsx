import React, { useState } from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'; // Added icons for the new banner

// Assets
import expoMain from '../../assets/1766011722581.jpeg';
import expoJudging from '../../assets/1766011720233.jpeg';
import expoPartner from '../../assets/1766011714075.jpeg';
import expoCrowd from '../../assets/1766011720247.jpeg';
import expoCrowd2 from '../../assets/1745263483597.jpeg';
import mlopsSticker from '../../assets/MLOPS_Logo.png';

const GoogleCloudLogo = ({ size = 24 }) => (
  <img src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png" alt="Google Cloud" style={{ width: size, height: size }} className="inline-block" />
);

const ExpoView = () => {
  const [crowdIndex, setCrowdIndex] = useState(0);

  const expoGallery = [
    { src: expoMain, label: 'Season 05 | Google Cambridge', span: 'md:col-span-8 md:row-span-2' },
    { src: expoJudging, label: 'Industry Judging', span: 'md:col-span-4 md:row-span-1' },
    { src: expoPartner, label: 'Google Partnership', span: 'md:col-span-4 md:row-span-1' },
    { 
      isSwitchable: true,
      variants: [
        { src: expoCrowd, label: '500+ Community Members' },
        { src: expoCrowd2, label: '500+ Community Members' }
      ], 
      span: 'md:col-span-12 md:row-span-1' 
    },
  ];

  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom duration-700">
      
      {/* 1. Hero & Stats Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="relative"> {/* Main Container */}
          
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-16 bg-emerald-500"></span>
            <span className="text-emerald-400 text-lg font-black uppercase tracking-[0.5em] italic">Founder: Ramin Mohammadi</span>
          </div>

          {/* Clean, un-interrupted Title */}
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic mb-10 leading-none">
            The MLOps <br/> Expo.
          </h1>

          <p className="text-2xl text-slate-400 font-extralight italic mb-12 max-w-2xl border-l-4 border-emerald-500/30 pl-10">
            The premier recurring summit connecting engineering leads with elite academic talent.
          </p>

          {/* Integrated Partnership Card with the "Sticker" Badge */}
          <div className="relative p-12 bg-purple-700/10 border border-purple-500/20 rounded-[60px] shadow-2xl overflow-visible">
            
            {/* THE STICKER: Tilted, shadowed, and anchored as a Seal */}
            <div className="absolute -top-12 -right-6 md:-top-16 md:-right-10 w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] rotate-[12deg] hover:rotate-0 transition-all duration-500 cursor-pointer z-30 group">
                <img 
                  src={mlopsSticker} 
                  alt="MLOps Model Factory Sticker" 
                  className="w-full h-full object-contain" 
                />
                {/* Subtle Tooltip on Hover */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[8px] font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Season 06 Badge
                </span>
            </div>

            <div className="flex items-center gap-6 mb-10 relative z-10">
              <GoogleCloudLogo size={70} />
              <h3 className="text-3xl font-black text-white uppercase italic text-purple-400 tracking-tighter">Google Partnership</h3>
            </div>
            <p className="text-xl text-slate-300 italic font-extralight relative z-10 max-w-md">
              Season 5 hosted at Google Cambridge. Supported by Google Cloud.
            </p>
          </div>
        </div>

        {/* 2. Stats Grid (Remains the same) */}
        <div className="grid grid-cols-2 gap-8">
          {[{ label: "Community", val: "500+" }, { label: "Partner", val: "Google", logo: true }, { label: "Sponsor", val: "Cloud", logo: true }, { label: "Season", val: "05" }].map((stat, i) => (
            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-[60px] flex flex-col items-center justify-center p-10 border-l-8 border-l-purple-500">
              {stat.logo && <GoogleCloudLogo size={60} />}
              <span className="text-4xl font-black text-white tracking-tighter italic uppercase">{stat.val}</span>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-6">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Upcoming Event Banner (Season 06) remains untouched */}
      <div className="mb-24 relative overflow-hidden rounded-[60px] bg-gradient-to-br from-emerald-900/30 to-[#020617] border border-emerald-500/30 p-10 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)]">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/50 text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 bg-emerald-950/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Upcoming Chapter
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
            Season 06
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-slate-300 font-light text-lg md:text-xl italic">
            <span className="flex items-center gap-3">
              <Calendar size={22} className="text-emerald-400" /> 
              April 15th, 2026
            </span>
            <span className="hidden md:block text-emerald-500/30">|</span>
            <span className="flex items-center gap-3">
              <MapPin size={22} className="text-emerald-400" /> 
              Google Cambridge
            </span>
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-auto">
          <a 
            href="https://luma.com/6bhwupwg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 px-12 py-6 bg-emerald-500 text-[#020617] font-black uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-400 transition-all rounded-full w-full lg:w-auto shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
          >
            RSVP on Luma
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 3. Past Events Gallery remains untouched */}
      <div className="mb-10 flex items-center gap-4">
        <span className="text-slate-500 text-sm font-black uppercase tracking-[0.4em]">Previous Chapters Archive</span>
        <div className="h-[1px] flex-1 bg-white/5"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {expoGallery.map((img, i) => {
          const displaySrc = img.isSwitchable ? img.variants[crowdIndex].src : img.src;
          const displayLabel = img.isSwitchable ? img.variants[crowdIndex].label : img.label;
          return (
            <div key={i} className={`${img.span} relative group overflow-hidden rounded-[70px] bg-white/5 border border-white/10 h-[600px] shadow-2xl`}>
              <img src={displaySrc} alt={displayLabel} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              {img.isSwitchable && (
                <div className="absolute top-12 right-12 flex bg-black/70 backdrop-blur-2xl p-2 rounded-full border border-white/10 z-10">
                  <button onClick={() => setCrowdIndex(0)} className={`px-8 py-3 rounded-full text-xs font-black uppercase ${crowdIndex === 0 ? 'bg-purple-600 text-white' : 'text-slate-400'}`}>View 1</button>
                  <button onClick={() => setCrowdIndex(1)} className={`px-8 py-3 rounded-full text-xs font-black uppercase ${crowdIndex === 1 ? 'bg-purple-600 text-white' : 'text-slate-400'}`}>View 2</button>
                </div>
              )}
              <div className="absolute bottom-12 left-12">
                <span className="text-xs font-black text-white uppercase tracking-[0.4em] bg-purple-600 px-8 py-4 rounded-full italic">{displayLabel}</span>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default ExpoView;
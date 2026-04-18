import React from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

// Assets - Season 5
import expoMain5 from '../../assets/Season_5_3.jpeg';
import expoJudging5 from '../../assets/Season_5_2.jpeg';
import expoPartner5 from '../../assets/Season_5_1.jpeg';
import expoCrowd5 from '../../assets/Season_5_4.jpeg';

// Assets - Season 4
import expoCrowd4 from '../../assets/Season_4_1.jpeg';

// Assets - Season 6
import expoSeason6_1 from '../../assets/Season_6_1.jpeg';
import expoSeason6_2 from '../../assets/Season_6_2.jpeg';
import expoSeason6_3 from '../../assets/Season_6_3.jpeg';
import expoSeason6_4 from '../../assets/Season_6_4.jpeg';
import expoSeason6_5 from '../../assets/Season_6_5.jpeg';

import mlopsSticker from '../../assets/MLOPS_Logo.png';

// --- CONFIGURATION DATA ---
// To add a new season, just add a new object to this array.
const SEASONS_DATA = [
  {
    number: "04",
    title: "Season 04",
    location: "Google Cambridge",
    date: "2024",
    isActive: false,
    gallery: [
      { src: expoCrowd4, label: 'Community Growth', span: 'md:col-span-12' }
    ]
  },
  {
    number: "05",
    title: "Season 05",
    location: "Google Cambridge",
    date: "Late 2025",
    isActive: false,
    gallery: [
      { src: expoMain5, label: 'Main Stage', span: 'md:col-span-8' },
      { src: expoJudging5, label: 'Industry Judging', span: 'md:col-span-4' },
      { src: expoPartner5, label: 'Partnerships', span: 'md:col-span-4' },
      { src: expoCrowd5, label: '1000+ Attendees', span: 'md:col-span-8' },
    ]
  },
  {
    number: "06",
    title: "Season 06",
    location: "Google Cambridge",
    date: "April 15th, 2026",
    rsvpLink: "https://luma.com/6bhwupwg",
    isActive: false, // Set to false because season ended; Toggle to true to show banner
    gallery: [
      { src: expoSeason6_1, label: 'Season 06 Kickoff', span: 'md:col-span-12' },
      { src: expoSeason6_2, label: 'Technical Keynote', span: 'md:col-span-6' },
      { src: expoSeason6_3, label: 'Workshop Series', span: 'md:col-span-6' },
      { src: expoSeason6_4, label: 'Networking', span: 'md:col-span-8' },
      { src: expoSeason6_5, label: 'Lab Demo', span: 'md:col-span-4' },
    ]
  }
];

const GoogleCloudLogo = ({ size = 24 }) => (
  <img src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png" alt="Google Cloud" style={{ width: size, height: size }} className="inline-block" />
);

const ExpoView = () => {
  // 1. Logic for Requirement 2: Find the active season for the banner
  const upcomingSeason = SEASONS_DATA.find(s => s.isActive);

  // 2. Logic for Requirement 3: Show only last two seasons, most recent first
  const archivedSeasons = [...SEASONS_DATA].reverse().slice(0, 2);

  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom duration-700">
      
      {/* 1. Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-16 bg-emerald-500"></span>
            <span className="text-emerald-400 text-lg font-black uppercase tracking-[0.5em] italic">Founder: Ramin Mohammadi</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic mb-10 leading-none">
            The MLOps <br/> Expo.
          </h1>

          <p className="text-2xl text-slate-400 font-extralight italic mb-12 max-w-2xl border-l-4 border-emerald-500/30 pl-10">
            The premier recurring summit connecting engineering leads with elite academic talent.
          </p>

          <div className="relative p-12 bg-purple-700/10 border border-purple-500/20 rounded-[60px] shadow-2xl overflow-visible">
            <div className="absolute -top-12 -right-6 md:-top-16 md:-right-10 w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] rotate-[12deg] hover:rotate-0 transition-all duration-500 cursor-pointer z-30 group">
                <img src={mlopsSticker} alt="MLOps Badge" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-6 mb-10 relative z-10">
              <GoogleCloudLogo size={70} />
              <h3 className="text-3xl font-black text-white uppercase italic text-purple-400 tracking-tighter">Google Partnership</h3>
            </div>
            <p className="text-xl text-slate-300 italic font-extralight relative z-10 max-w-md">
              Season 5 and 6 hosted at Google Cambridge. Sponsered by Google Cloud.
            </p>
          </div>
        </div>

        {/* Stats Grid - Dynamically shows latest season number */}
        <div className="grid grid-cols-2 gap-8">
          {[
            { label: "Community", val: "1000+" }, 
            { label: "Partner", val: "Google", logo: true }, 
            { label: "Sponsor", val: "Cloud", logo: true }, 
            { label: "Current", val: SEASONS_DATA[SEASONS_DATA.length - 1].number }
          ].map((stat, i) => (
            <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-[60px] flex flex-col items-center justify-center p-10 border-l-8 border-l-purple-500">
              {stat.logo && <GoogleCloudLogo size={60} />}
              <span className="text-4xl font-black text-white tracking-tighter italic uppercase">{stat.val}</span>
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-6">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Upcoming Event Banner (Requirement 2) */}
      {/* This section only renders if a season in SEASONS_DATA has isActive: true */}
      {upcomingSeason && (
        <div className="mb-24 relative overflow-hidden rounded-[60px] bg-gradient-to-br from-emerald-900/30 to-[#020617] border border-emerald-500/30 p-10 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)]">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/50 text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 bg-emerald-950/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Upcoming Chapter
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
              {upcomingSeason.title}
            </h2>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-slate-300 font-light text-lg md:text-xl italic">
              <span className="flex items-center gap-3"><Calendar size={22} className="text-emerald-400" /> {upcomingSeason.date}</span>
              <span className="hidden md:block text-emerald-500/30">|</span>
              <span className="flex items-center gap-3"><MapPin size={22} className="text-emerald-400" /> {upcomingSeason.location}</span>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            <a href={upcomingSeason.rsvpLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-12 py-6 bg-emerald-500 text-[#020617] font-black uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-400 transition-all rounded-full w-full lg:w-auto shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]">
              RSVP on Luma
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* 3. Season Galleries (Requirement 3) */}
      {archivedSeasons.map((season, sIdx) => (
        <div key={sIdx} className="mb-32">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-slate-500 text-sm font-black uppercase tracking-[0.4em]">{season.title} Archive</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {season.gallery.map((img, i) => (
              <div key={i} className={`${img.span} relative group overflow-hidden rounded-[70px] bg-white/5 border border-white/10 h-[500px] shadow-2xl`}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute bottom-12 left-12">
                  <span className="text-xs font-black text-white uppercase tracking-[0.4em] bg-purple-600 px-8 py-4 rounded-full italic">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ExpoView;
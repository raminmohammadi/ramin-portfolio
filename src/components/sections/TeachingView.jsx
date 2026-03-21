import React from 'react';
import { GraduationCap, ExternalLink, Globe, ArrowRight } from 'lucide-react';

// UI Primitives
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/Card';

// Data & Assets
import { TEACHING_DATA } from '../../constants/experienceData';
import northeasternLogo from '../../assets/northeastern_logo.png';
import teachingImg1 from '../../assets/Teaching.jpeg';
import teachingImg2 from '../../assets/Teaching2.jpeg';
import studioImg from '../../assets/Studio.jpeg';
import studioVideo1 from '../../assets/IMG_5873.MOV';

const TeachingView = () => {
  return (
    <div className="pt-60 pb-40 px-8 animate-in slide-in-from-bottom duration-1000 max-w-7xl mx-auto">
      
      {/* 1. Page Header */}
      <SectionHeader 
        subtitle="Academic Leadership" 
        title="Shaping the Industry." 
        description="Empowering high-potential talent to move beyond modeling and master the engineering discipline required to build and ship end-to-end AI systems."
        color="emerald"
      />

      {/* 2. Northeastern Section */}
      <GlassCard className="mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-4xl w-full">
            <div className="flex items-center gap-6 mb-10">
              <img src={northeasternLogo} alt="Northeastern" className="w-12 h-12 md:w-20 md:h-20 grayscale brightness-200" />
              <h3 className="text-3xl md:text-5xl font-black text-emerald-400 uppercase italic tracking-tighter leading-none">
                {TEACHING_DATA.northeastern.role}
              </h3>
            </div>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-extralight italic leading-relaxed mb-10">
              {TEACHING_DATA.northeastern.desc}
            </p>

            {/* Teaching Gallery */}
            <div className="grid grid-cols-2 aspect-[25/9] rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl mb-10">
              <img src={teachingImg1} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Lecture" />
              <img src={teachingImg2} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Mentorship" />
            </div>
          </div>
          <GraduationCap className="text-emerald-500 opacity-20 hidden lg:block" size={120} />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TEACHING_DATA.northeastern.courses.map((course, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-emerald-500/10 transition-all">
              <p className="text-white font-bold italic text-sm uppercase group-hover:text-emerald-400 tracking-tight leading-none">
                {course}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* 3. Coursera Section */}
      <div className="p-12 md:p-16 bg-blue-600/5 border border-blue-500/20 rounded-[60px] relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-700">
          <Globe size={250} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" alt="Coursera" className="w-16 h-16 shadow-2xl" />
            <a href={TEACHING_DATA.coursera.profileUrl} target="_blank" rel="noreferrer" className="group/link flex items-center gap-4">
              <h3 className="text-3xl md:text-5xl font-black text-blue-400 uppercase italic hover:text-blue-300 transition-colors tracking-tighter">
                {TEACHING_DATA.coursera.role}
              </h3>
              <ExternalLink size={24} className="text-blue-500" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-56 aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shrink-0 shadow-2xl">
              <img src={studioImg} alt="Studio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <div className="relative flex-1 aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
              <video src={studioVideo1} controls className="w-full h-full object-cover opacity-90" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {TEACHING_DATA.coursera.courses.map((course, i) => (
              <a key={i} href={course.url} target="_blank" rel="noreferrer" className="p-10 bg-[#020617]/50 rounded-[40px] border border-white/5 hover:border-blue-400/30 transition-all shadow-2xl group/card">
                <h4 className="text-white font-black mb-6 uppercase text-xl lg:text-2xl tracking-widest italic flex justify-between items-center leading-none">
                  {course.title} <ArrowRight size={24} />
                </h4>
                <p className="text-slate-400 text-lg italic leading-relaxed font-light">
                  {course.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingView;
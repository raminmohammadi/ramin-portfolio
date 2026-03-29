import React, { useState } from 'react';
import expoMain from '../../assets/1766011722581.jpeg';
import expoJudging from '../../assets/1766011720233.jpeg';
import expoPartner from '../../assets/1766011714075.jpeg';
import expoCrowd from '../../assets/1766011720247.jpeg';
import expoCrowd2 from '../../assets/1745263483597.jpeg';

const GoogleCloudLogo = ({ size = 24 }) => (
  <img src="https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png" alt="Google Cloud" style={{ width: size, height: size }} className="inline-block" />
);

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

  return (
    <div className="pt-48 pb-32 px-8 max-w-7xl mx-auto animate-in slide-in-from-bottom duration-700">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-16 bg-emerald-500"></span>
            <span className="text-emerald-400 text-lg font-black uppercase tracking-[0.5em] italic">Founder: Ramin Mohammadi</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase italic mb-10 leading-none">The MLOps <br/> Expo.</h1>
          <p className="text-2xl text-slate-400 font-extralight italic mb-12 max-w-2xl border-l-4 border-emerald-500/30 pl-10">
            The premier recurring summit connecting engineering leads with elite academic talent.
          </p>
          <div className="p-12 bg-purple-700/10 border border-purple-500/20 rounded-[60px] shadow-2xl">
            <div className="flex items-center gap-6 mb-10">
              <GoogleCloudLogo size={70} />
              <h3 className="text-3xl font-black text-white uppercase italic text-purple-400 tracking-tighter">Google Partnership</h3>
            </div>
            <p className="text-xl text-slate-300 italic font-extralight">Season 5 hosted at Google Cambridge. Supported by Google Cloud.</p>
          </div>
        </div>

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
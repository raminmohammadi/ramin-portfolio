import React from 'react';

export const SectionHeader = ({ subtitle, title, description, color = "emerald" }) => {
  const colorMap = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    purple: "text-purple-500"
  };

  return (
    <div className="text-center md:text-left mb-32 border-b border-white/5 pb-20">
      <h2 className={`text-xs md:text-sm font-black ${colorMap[color]} uppercase tracking-[0.6em] mb-6`}>
        {subtitle}
      </h2>
      <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
        {title}
      </h1>
      {description && (
        <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl font-light italic leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
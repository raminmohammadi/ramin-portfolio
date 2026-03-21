import React from 'react';

export const StatBox = ({ value, label, icon: Icon, color = "emerald" }) => {
  const borderMap = {
    emerald: "border-l-emerald-500",
    purple: "border-l-purple-500",
    blue: "border-l-blue-500"
  };

  return (
    <div className={`aspect-square bg-white/[0.02] border border-white/5 rounded-[60px] flex flex-col items-center justify-center text-center p-10 border-l-8 ${borderMap[color]} shadow-2xl hover:border-white/10 transition-all`}>
      <div className="flex flex-col items-center gap-6">
        {Icon && <Icon size={60} className="text-white/20" />}
        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase">{value}</span>
      </div>
      <span className="text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-widest mt-6 italic">{label}</span>
    </div>
  );
};
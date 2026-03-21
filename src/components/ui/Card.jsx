import React from 'react';

export const GlassCard = ({ children, className = "" }) => (
  <div className={`p-12 md:p-16 bg-white/[0.02] border border-white/10 rounded-[60px] shadow-2xl backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

export const GradientCard = ({ children, gradient, icon }) => (
  <div className="relative p-[1px] rounded-[60px] overflow-hidden group shadow-2xl">
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
    <div className="relative p-12 md:p-16 bg-[#020617] rounded-[59px] transition-all duration-500 group-hover:bg-[#020617]/90">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="max-w-4xl w-full">
          {children}
        </div>
        {icon && (
          <div className="text-slate-800 opacity-20 group-hover:opacity-40 transition-all hidden lg:block">
            {icon}
          </div>
        )}
      </div>
    </div>
  </div>
);
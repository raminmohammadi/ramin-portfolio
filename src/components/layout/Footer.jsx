import React from 'react';
import { Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 px-8 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-white font-black tracking-widest uppercase italic text-2xl">Ramin Mohammadi, Ph.D.</p>
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/Ramin-Mohammadi-ml/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Linkedin size={20} /></a>
        <a href="https://github.com/raminMohammadi" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Github size={20} /></a>
        <a href="https://www.youtube.com/@MLWithRamin" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:text-emerald-400 transition-all"><Youtube size={20} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
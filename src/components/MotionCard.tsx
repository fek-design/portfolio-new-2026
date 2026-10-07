import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  tech: string[];
}

export default function MotionCard({ title, subtitle, tech }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015, transition: { type: "spring", stiffness: 240, damping: 16 } }}
      className="glass-panel p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
    >
      {/* Specular top rim light */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-widest font-mono text-slate-500 font-medium">
          Motion Reactive Island
        </span>
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3186FF]" />
      </div>

      <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2 tracking-tight group-hover:text-[#3186FF] transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {subtitle}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs rounded-full bg-slate-100 border border-black/[0.08] text-slate-800 font-mono font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

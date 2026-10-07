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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-panel p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
    >
      {/* Specular top rim light */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-widest font-mono text-white/60 font-medium">
          Motion Reactive Island
        </span>
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3186FF]" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6">
        {subtitle}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs rounded-full bg-white/[0.06] border border-white/10 text-white/90 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

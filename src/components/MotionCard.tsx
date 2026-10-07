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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="p-6 rounded-2xl bg-amber-50/80 border border-stone-800/10 shadow-sm backdrop-blur-md transition-shadow hover:shadow-xl"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest font-mono text-stone-600 font-semibold">
          Framer Motion Island
        </span>
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-1">{title}</h3>
      <p className="text-stone-600 text-sm mb-4">{subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-900 text-amber-100 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

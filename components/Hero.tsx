
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero: React.FC = () => {
  const [params, setParams] = useState({ logic: 90, aesthetics: 85, sarcasm: 40 });
  const [status, setStatus] = useState('Optimizing Flows');
  const [showOverride, setShowOverride] = useState(false);

  const statuses = [
    'Optimizing Flows',
    'Caffeinating',
    'Arguing with Semicolons',
    'Building Leverage',
    'Maintaining Restraint'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-20 md:pt-20 md:pb-0 bg-white dark:bg-black overflow-hidden relative">
      {/* Background Precision Grid (Easter Egg: Visible when Logic > 95) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] transition-opacity duration-1000"
        style={{ 
          backgroundImage: 'radial-gradient(#0066cc 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          opacity: params.logic > 95 ? 0.15 : 0.03
        }} 
      />

      <div className="max-w-5xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-8"
        >
          <div className="text-left">
            <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter text-black dark:text-white leading-[0.9] mb-4">
              Nabil<span className="text-apple-blue">.</span>
            </h1>
            <div className="flex items-center gap-3 text-gray-400 font-medium uppercase tracking-[0.2em] text-[10px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              System Status: <span className="text-black dark:text-white">{status}</span>
            </div>
          </div>

          {/* Parameters Console */}
          <div className="bg-apple-gray-50 dark:bg-apple-gray-500/5 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] dark:border-white/[0.03] w-full md:w-72 space-y-6">
            <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Core Parameters</p>
            {[
              { key: 'logic', label: 'Logic', color: 'bg-apple-blue' },
              { key: 'aesthetics', label: 'Aesthetics', color: 'bg-zinc-800 dark:bg-zinc-200' },
              { key: 'sarcasm', label: 'Sarcasm', color: 'bg-orange-500' }
            ].map((p) => (
              <div key={p.key} className="space-y-2 group">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">{p.label}</span>
                  <span className="text-black dark:text-white">{params[p.key as keyof typeof params]}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={params[p.key as keyof typeof params]}
                  onChange={(e) => setParams({...params, [p.key]: parseInt(e.target.value)})}
                  className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-apple-blue"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative"
        >
          <p className="text-xl md:text-5xl font-medium leading-[1.2] md:leading-[1.15] text-black dark:text-white tracking-tight max-w-4xl text-balance group">
            A builder by instinct, a Computer Scientist by discipline. I create systems that are 
            <span className="relative inline-block px-1 mx-1 italic hover:text-apple-blue transition-colors cursor-help">
              deliberately precise
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                "No accidents here."
              </span>
            </span> 
            and 
            <span className="relative inline-block px-1 mx-1 italic hover:text-orange-500 transition-colors cursor-help">
              quietly theatrical
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                "Prince Julian energy, calibrated."
              </span>
            </span>.
          </p>
          
          <div className="mt-12 md:mt-16 flex flex-wrap gap-4">
            <button 
              onClick={() => setShowOverride(!showOverride)}
              className="px-6 md:px-8 py-3 md:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all"
            >
              {showOverride ? "Restore Sanity" : "Manual Override"}
            </button>
            <div className="px-6 md:px-8 py-3 md:py-4 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Build Version 2.0.25
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showOverride && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-apple-blue text-white p-5 md:p-6 rounded-3xl shadow-2xl max-w-[280px] md:max-w-xs z-50 border border-white/20"
          >
            <p className="text-xs md:text-sm font-bold italic leading-tight">
              "The theatricality is currently set to 110%. Please maintain a quiet smirk while navigating the site."
            </p>
            <div className="mt-4 h-[1px] w-full bg-white/20" />
            <p className="mt-4 text-[9px] md:text-[10px] uppercase tracking-widest font-black opacity-60">
              — The Builder
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-black dark:bg-white" />
      </motion.div>
    </section>
  );
};

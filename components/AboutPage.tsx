
import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const specs = [
    { label: 'Caffeine Tolerance', value: 'High', detail: 'Runs on Dark Roast & Spite' },
    { label: 'Latency', value: '0.04ms', detail: 'Faster than your average builder' },
    { label: 'Semicolon Relations', value: 'Strained', detail: 'We are currently not speaking' },
    // Use double quotes to handle the single quote in "doesn't"
    { label: 'Philosophy', value: 'Theatrical', detail: "If it doesn't look cool, does it even work?" },
  ];

  return (
    <section className="min-h-screen pt-40 pb-20 px-6 bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Theatrical Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/20 text-orange-500 text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            The Unauthorized Biography
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[0.9] mb-12">
            Technically <br />
            <span className="text-gray-300 dark:text-zinc-800 italic">Human.</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-gray-500 dark:text-gray-400 max-w-2xl leading-tight text-balance">
            I was born at a very young age with an unfortunate obsession for how things fit together. 
            Currently, I spend my time at Salim Habib University convincing computers that I am their superior.
          </p>
        </motion.div>

        {/* Humorous Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-10 rounded-[3rem] bg-apple-gray-50 dark:bg-apple-gray-500/5 border border-black/[0.03] dark:border-white/[0.03]"
          >
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-apple-blue mb-8">Core Directive</h3>
            <p className="text-2xl md:text-4xl font-bold text-black dark:text-white tracking-tight leading-tight">
              "I build systems that make people feel slightly less intelligent, but significantly more productive."
            </p>
            <div className="mt-12 flex gap-4">
              <div className="h-1 w-20 bg-apple-blue rounded-full" />
              <div className="h-1 w-8 bg-gray-200 dark:bg-zinc-800 rounded-full" />
              <div className="h-1 w-4 bg-gray-200 dark:bg-zinc-800 rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 p-10 rounded-[3rem] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex flex-col justify-between"
          >
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-50 mb-8">Status</h3>
            <div>
              <p className="text-5xl font-bold tracking-tighter mb-2">Busy.</p>
              <p className="text-xs font-bold opacity-60">Building something elegant. Probably.</p>
            </div>
          </motion.div>

          {/* Specs Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {specs.map((spec, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] border border-black/[0.05] dark:border-white/[0.05] group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500">
                <p className="text-[9px] font-black tracking-[0.3em] uppercase opacity-40 mb-4">{spec.label}</p>
                <p className="text-2xl font-bold mb-2 tracking-tight">{spec.value}</p>
                <p className="text-[10px] font-medium opacity-0 group-hover:opacity-60 transition-opacity italic">{spec.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Closing "Theatrical" Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 border-t border-black/[0.05] dark:border-white/[0.05]"
        >
          <p className="text-gray-400 dark:text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12">
            End of Transmission
          </p>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl font-bold text-black dark:text-white italic tracking-tight">
              "If you're still reading this, you're either a recruiter or my mother. <br />Either way, let's talk."
            </p>
            <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-apple-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
          <div className="mt-12 flex justify-center gap-6">
             <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
             <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse [animation-delay:0.2s]" />
             <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse [animation-delay:0.4s]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

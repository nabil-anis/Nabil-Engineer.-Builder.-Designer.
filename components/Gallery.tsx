
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:py-60 px-6 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-72"
        >
          <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-black dark:text-white mb-8 md:mb-12 leading-[1.1]">
            Curated <br />
            <span className="text-gray-300 dark:text-zinc-800">Movements.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 dark:text-gray-500 max-w-xl font-medium leading-tight text-balance">
            A record of deliberate motion. Each entry represents a system understood, a challenge accepted, or a narrative steered.
          </p>
        </motion.div>

        <div className="space-y-40 md:space-y-96">
          {ACHIEVEMENTS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-10 md:mb-16 border-b border-black/[0.05] dark:border-white/[0.05] pb-10 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-[9px] md:text-[10px] font-black tracking-[0.4em] text-apple-blue uppercase"
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="text-2xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase shrink-0">
                  {item.date}
                </span>
              </div>

              <div className="space-y-12 md:space-y-20">
                {/* Visual Placeholder */}
                <div className="relative aspect-[16/10] w-full rounded-[2rem] md:rounded-[2.5rem] bg-apple-gray-50 dark:bg-apple-gray-500/5 border border-black/[0.03] dark:border-white/[0.03] overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-gray-300 dark:text-zinc-800 uppercase text-center px-6 opacity-40 group-hover:opacity-100 transition-opacity">
                      Systemic Visualization
                    </span>
                  </div>
                </div>

                <div className="max-w-xl">
                  <div className="space-y-4 mb-6 md:mb-8">
                    <div className="h-[1px] w-full bg-black/[0.08] dark:bg-white/[0.08]" />
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-gray-400 dark:text-zinc-700 uppercase">
                    Engineering Brief
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

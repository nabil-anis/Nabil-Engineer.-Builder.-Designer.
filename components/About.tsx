
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 md:pt-48 md:pb-40 px-6 bg-apple-gray-50 dark:bg-apple-gray-500/5 overflow-x-hidden border-t border-black/[0.05] dark:border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
        >
          {/* Left Column: The "Why" */}
          <div className="lg:col-span-7">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase text-apple-blue mb-10 md:mb-12">
              The Architecture
            </h2>
            <p className="text-3xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] text-black dark:text-white tracking-tight mb-16 md:mb-20 text-balance">
              Rigour is a <br />
              <span className="text-gray-300 dark:text-zinc-800 italic">Personality.</span>
            </p>
            
            <div className="space-y-10 md:space-y-12">
              <p className="text-xl md:text-3xl font-medium text-black dark:text-white leading-tight text-balance">
                I navigate Computer Science with a builder’s spine and a designer’s eye.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                <p>
                  I don't believe in "good enough." Every flow, every system, and every elegant shortcut is an opportunity to prove that technology can be as refined as a physical object.
                </p>
                <p>
                  My time at Salim Habib University is spent refining this philosophy—transforming complex academic rigour into visible, usable infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The "How" */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="space-y-12 md:space-y-16 mt-16 lg:mt-0">
              <section className="p-8 md:p-10 bg-white dark:bg-black rounded-[2.5rem] border border-black/[0.05] dark:border-white/[0.05] shadow-sm">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 mb-6">
                  System Stats
                </h3>
                <ul className="space-y-4 text-sm font-bold text-black dark:text-white">
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-gray-400">Efficiency</span>
                    <span>100% Target</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-gray-400">Restraint</span>
                    <span>High</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Humor</span>
                    <span>Intelligent</span>
                  </li>
                </ul>
              </section>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-apple-blue to-orange-500 rounded-[3rem] blur opacity-5 group-hover:opacity-10 transition duration-1000"></div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative p-8 md:p-14 bg-white dark:bg-black rounded-[3rem] border border-black/[0.05] dark:border-white/[0.05] shadow-sm"
                >
                  <p className="text-xl md:text-3xl text-black dark:text-white font-bold leading-tight italic tracking-tight">
                    "A builder, not a spectator."
                  </p>
                  <div className="mt-8 pt-8 md:mt-10 md:pt-10 border-t border-black/[0.05] dark:border-white/[0.05]">
                    <p className="text-[9px] md:text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.2em]">
                      Nabil • 2025 Foundation
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

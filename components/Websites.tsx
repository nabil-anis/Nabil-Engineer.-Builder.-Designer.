
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEBSITES } from '../constants';

export const Websites: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:py-60 px-6 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-48"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-apple-blue/5 border border-apple-blue/10 text-apple-blue text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            Digital Estates
          </div>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-black dark:text-white mb-8 md:mb-12 leading-[1.1]">
            Interfaces.
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 dark:text-gray-500 max-w-2xl font-medium leading-tight text-balance text-left">
            A collection of layouts designed for clarity and utility. I prefer environments that require zero explanation. 
            The internet is already crowded enough; I choose to be quiet but effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {WEBSITES.map((site) => (
            <WebsiteCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WebsiteCard: React.FC<{ site: typeof WEBSITES[0] }> = ({ site }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex flex-col h-full space-y-8 md:space-y-10">
        {/* Browser Window UI Wrapper */}
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative block w-full rounded-[2.5rem] bg-apple-gray-50 dark:bg-apple-gray-500/5 border border-black/[0.08] dark:border-white/[0.08] overflow-hidden group-hover:border-apple-blue/30 transition-all duration-700 cursor-pointer shadow-sm group-hover:shadow-2xl group-hover:shadow-apple-blue/10 transform-gpu group-hover:-translate-y-2"
        >
          {/* Mac Header Simulation */}
          <div className="h-8 md:h-10 bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/[0.05] dark:border-white/[0.05] flex items-center px-4 md:px-6 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto flex items-center gap-2 bg-white/50 dark:bg-black/50 px-4 py-1 rounded-md border border-black/[0.05] dark:border-white/[0.05] w-2/3 md:w-1/2">
               <div className="w-2 h-2 rounded-full border border-gray-400 opacity-30" />
               <span className="text-[8px] font-bold text-gray-400 truncate opacity-50 uppercase tracking-widest">{site.url}</span>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            {/* Shimmer Loading Effect */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />
            )}
            
            {/* Real Image Preview */}
            <img 
              src={site.image} 
              alt={site.name}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover object-top transition-all duration-1000 ease-out transform-gpu group-hover:scale-[1.03] group-hover:translate-y-[-5%] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />

            {/* Subtle Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover "View Project" Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="glass px-6 py-3 rounded-full border border-white/20 shadow-xl backdrop-blur-md scale-90 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white">View Project</span>
              </div>
            </div>
          </div>
        </a>

        <div className="space-y-6 px-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white tracking-tight">
              {site.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.techStack?.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-apple-blue transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-[1px] w-full bg-black/[0.05] dark:bg-white/[0.05]" />
            <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl text-balance text-left">
              {site.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AboutPage } from './components/AboutPage';
import { Gallery } from './components/Gallery';
import { Websites } from './components/Websites';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on load
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div key="home">
            <Hero />
            <About />
          </div>
        );
      case Page.About:
        return <AboutPage key="about-page" />;
      case Page.Gallery:
        return <Gallery key="gallery" />;
      case Page.Websites:
        return <Websites key="websites" />;
      default:
        return <Hero key="hero" />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-apple-blue/20 transition-colors duration-500 flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-20 md:py-32 px-6 bg-white dark:bg-black border-t border-black/[0.05] dark:border-white/[0.05] transition-colors duration-500">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          {/* Brand Header */}
          <div className="mb-14">
            <h4 className="text-3xl font-bold mb-4 tracking-tighter text-black dark:text-white">Nabil.</h4>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 font-medium max-w-xs mx-auto text-balance">
              Turning curiosity into infrastructure. <br />
              Instinct for design, discipline for CS.
            </p>
          </div>

          {/* Centered Navigation/Links */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-20">
            <div className="space-y-4 min-w-[120px]">
              <p className="text-black dark:text-white border-b border-black/[0.05] dark:border-white/[0.05] pb-2 px-2">Contact</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:hello@nabil.build" className="hover:text-apple-blue transition-colors">Email</a>
                <a href="#" className="hover:text-apple-blue transition-colors">Calendar</a>
              </div>
            </div>
            <div className="space-y-4 min-w-[120px]">
              <p className="text-black dark:text-white border-b border-black/[0.05] dark:border-white/[0.05] pb-2 px-2">Social</p>
              <div className="flex flex-col space-y-3">
                <a href="#" className="hover:text-apple-blue transition-colors">GitHub</a>
                <a href="#" className="hover:text-apple-blue transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Copyright & Vibe */}
          <div className="space-y-6">
            <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-zinc-700 uppercase">
              © {new Date().getFullYear()} Nabil. All rights reserved.
            </div>
            <div className="flex items-center justify-center gap-4 opacity-30 dark:opacity-20 scale-90 md:scale-100">
              <span className="text-[8px] font-black uppercase tracking-[0.5em]">Precise</span>
              <div className="w-1 h-1 rounded-full bg-apple-blue" />
              <span className="text-[8px] font-black uppercase tracking-[0.5em]">Calm</span>
              <div className="w-1 h-1 rounded-full bg-apple-blue" />
              <span className="text-[8px] font-black uppercase tracking-[0.5em]">Deliberate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

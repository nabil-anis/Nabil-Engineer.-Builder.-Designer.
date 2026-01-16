
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, isDark, toggleTheme }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or if at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Hide navbar if scrolling down and not at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-[100] px-6 pointer-events-none"
    >
      <nav className="max-w-[640px] mx-auto glass border border-black/[0.08] dark:border-white/[0.08] rounded-full px-2 h-14 flex items-center justify-between pointer-events-auto shadow-lg shadow-black/[0.03]">
        {/* Brand/Logo */}
        <div className="flex-1 flex justify-start pl-4">
          <button 
            onClick={() => onPageChange(Page.Home)}
            className="font-bold tracking-tighter text-sm hover:opacity-60 transition-opacity text-black dark:text-white"
          >
            Nabil.
          </button>
        </div>
        
        {/* Centered Navigation Links */}
        <div className="flex items-center gap-1 md:gap-2 text-[10px] font-black uppercase tracking-widest">
          <button 
            onClick={() => onPageChange(Page.About)}
            className={`transition-all px-3 py-2 rounded-full ${currentPage === Page.About ? 'text-apple-blue bg-black/[0.03] dark:bg-white/[0.05]' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
          >
            About
          </button>
          <button 
            onClick={() => onPageChange(Page.Gallery)}
            className={`transition-all px-3 py-2 rounded-full ${currentPage === Page.Gallery ? 'text-apple-blue bg-black/[0.03] dark:bg-white/[0.05]' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => onPageChange(Page.Websites)}
            className={`transition-all px-3 py-2 rounded-full ${currentPage === Page.Websites ? 'text-apple-blue bg-black/[0.03] dark:bg-white/[0.05]' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
          >
            Websites
          </button>
        </div>

        {/* Theme Toggle - Refined to fit better */}
        <div className="flex-1 flex justify-end pr-1">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.05] hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            <div className="relative w-4 h-4">
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDark ? 90 : 0, 
                  scale: isDark ? 0 : 1, 
                  opacity: isDark ? 0 : 1 
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </motion.div>
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDark ? 0 : -90, 
                  scale: isDark ? 1 : 0, 
                  opacity: isDark ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </motion.div>
            </div>
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

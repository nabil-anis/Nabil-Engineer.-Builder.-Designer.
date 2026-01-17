import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';

export const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Achievement | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openLightbox = (project: Achievement, index: number) => {
    setSelectedProject(project);
    setCurrentMediaIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
    document.body.style.overflow = 'auto';
  };

  const getMediaList = (project: Achievement) => {
    const list: { type: 'image' | 'video'; src: string }[] = [];
    if (project.video) list.push({ type: 'video', src: project.video });
    if (project.images) {
      project.images.forEach(img => list.push({ type: 'image', src: img }));
    }
    return list;
  };

  const nextMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      const list = getMediaList(selectedProject);
      setCurrentMediaIndex((prev) => (prev + 1) % list.length);
    }
  };

  const prevMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      const list = getMediaList(selectedProject);
      setCurrentMediaIndex((prev) => (prev - 1 + list.length) % list.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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
          <p className="text-xl md:text-3xl text-gray-400 dark:text-gray-500 max-w-xl font-medium leading-tight text-balance text-left font-sans">
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
                <div 
                  onClick={() => openLightbox(item, 0)}
                  className="relative aspect-[16/10] w-full rounded-[2rem] md:rounded-[2.5rem] bg-apple-gray-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03] overflow-hidden group cursor-pointer shadow-xl shadow-black/5"
                >
                  {/* Floating Expand Icon - Improved Visibility */}
                  <div className="absolute top-6 right-6 z-20 pointer-events-none transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/20 flex items-center justify-center shadow-lg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>

                  {item.images && item.images.length > 0 ? (
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-gray-300 dark:text-zinc-800 uppercase text-center px-6">
                        No Assets Defined
                      </span>
                    </div>
                  )}

                  {item.video && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg width="24" height="24" className="md:w-8 md:h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md text-white text-[9px] font-bold px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                    {item.video && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>}
                    {getMediaList(item).length > 1 ? `EXPLORE ${getMediaList(item).length} ASSETS` : 'VIEW FULLSCREEN'}
                  </div>
                </div>

                <div className="max-w-xl">
                  <div className="space-y-4 mb-6 md:mb-8">
                    <div className="h-[1px] w-full bg-black/[0.08] dark:bg-white/[0.08]" />
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-left">
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/10 dark:bg-black/80 backdrop-blur-[40px] p-0 md:p-10"
            onClick={closeLightbox}
          >
            {/* Highly Visible Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 z-[210] w-14 h-14 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </motion.button>

            <div 
              className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) nextMedia();
                    else if (swipe > 50) prevMedia();
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {getMediaList(selectedProject)[currentMediaIndex].type === 'video' ? (
                    <video
                      src={getMediaList(selectedProject)[currentMediaIndex].src}
                      controls
                      autoPlay
                      className="max-w-full max-h-screen md:max-h-[80vh] object-contain rounded-lg md:rounded-3xl shadow-2xl bg-black"
                    />
                  ) : (
                    <img
                      src={getMediaList(selectedProject)[currentMediaIndex].src}
                      alt={selectedProject.title}
                      className="max-w-full max-h-screen md:max-h-[80vh] object-contain rounded-lg md:rounded-3xl shadow-2xl"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls with higher visibility */}
              {getMediaList(selectedProject).length > 1 && (
                <>
                  <button 
                    onClick={prevMedia}
                    className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-16 h-16 hidden md:flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl hover:scale-110 active:scale-95 transition-all border border-black/10 dark:border-white/10"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button 
                    onClick={nextMedia}
                    className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 hidden md:flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl hover:scale-110 active:scale-95 transition-all border border-black/10 dark:border-white/10"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>

                  {/* Pagination Indicators */}
                  <div className="absolute bottom-12 flex gap-3 z-[220]">
                    {getMediaList(selectedProject).map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMediaIndex(i)}
                        className={`group relative h-1.5 transition-all duration-500 rounded-full ${i === currentMediaIndex ? 'w-12 bg-apple-blue' : 'w-4 bg-gray-400 dark:bg-zinc-700 hover:bg-gray-600'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      >
                         <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-gray-500">0{i + 1}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Media Title Overlay */}
              <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[10px] font-black tracking-[0.4em] text-apple-blue uppercase mb-1 drop-shadow-sm">{selectedProject.category}</p>
                <h4 className="text-sm font-bold text-black dark:text-white tracking-widest uppercase drop-shadow-sm">{selectedProject.title}</h4>
                {getMediaList(selectedProject).length > 1 && (
                  <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 mt-2 tracking-widest">{currentMediaIndex + 1} / {getMediaList(selectedProject).length}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
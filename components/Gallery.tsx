import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';

export const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Achievement | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0); // 0 for video (if exists), then 1...n for images

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

  // Get total media count (video counts as first item if available)
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

  // Keyboard navigation
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
                  className="relative aspect-[16/10] w-full rounded-[2rem] md:rounded-[2.5rem] bg-apple-gray-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03] overflow-hidden group cursor-zoom-in"
                >
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

                  {/* Play Overlay if video exists */}
                  {item.video && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg width="24" height="24" className="md:w-8 md:h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 pointer-events-none border-[0.5px] border-black/[0.03] dark:border-white/[0.03] rounded-[2rem] md:rounded-[2.5rem]" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    {item.video && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>}
                    {(item.images?.length || 0) > 1 && `+${item.images!.length - 1} MORE`}
                    {(item.images?.length === 1 && !item.video) && 'VIEW FULLSCREEN'}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-white/80 dark:bg-black/90 backdrop-blur-3xl p-4 md:p-10"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-10 right-10 z-[210] w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </motion.button>

            <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {getMediaList(selectedProject)[currentMediaIndex].type === 'video' ? (
                    <video
                      src={getMediaList(selectedProject)[currentMediaIndex].src}
                      controls
                      autoPlay
                      className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl bg-black"
                    />
                  ) : (
                    <img
                      src={getMediaList(selectedProject)[currentMediaIndex].src}
                      alt={selectedProject.title}
                      className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              {getMediaList(selectedProject).length > 1 && (
                <>
                  <button 
                    onClick={prevMedia}
                    className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button 
                    onClick={nextMedia}
                    className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 flex gap-2">
                    {getMediaList(selectedProject).map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMediaIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${i === currentMediaIndex ? 'w-6 bg-apple-blue' : 'bg-gray-300 dark:bg-zinc-700'}`}
                      >
                         {item.type === 'video' && i !== currentMediaIndex && <div className="w-[3px] h-[3px] rounded-full bg-white/50" />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Minimal Caption */}
              <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[10px] font-black tracking-[0.4em] text-apple-blue uppercase mb-2">{selectedProject.category}</p>
                <h4 className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight">{selectedProject.title}</h4>
                <p className="text-[9px] font-bold text-gray-400 mt-2 tracking-widest">
                  {getMediaList(selectedProject)[currentMediaIndex].type.toUpperCase()} • {currentMediaIndex + 1} / {getMediaList(selectedProject).length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
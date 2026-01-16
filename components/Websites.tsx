
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEBSITES } from '../constants';

type Viewport = 'desktop' | 'mobile';

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
            Live Prototypes
          </div>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-black dark:text-white mb-8 md:mb-12 leading-[1.1]">
            The Lab.
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 dark:text-gray-500 max-w-2xl font-medium leading-tight text-balance text-left font-sans">
            A builder's output shouldn't be static. These are live environments. 
            Initialize the handshake to interact with the production instances.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-64">
          {WEBSITES.map((site) => (
            <WebsiteCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WebsiteCard: React.FC<{ site: typeof WEBSITES[0] }> = ({ site }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [logs, setLogs] = useState<string[]>([]);
  
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && !isLoaded) {
      const initialLogs = [
        'INITIALIZING_HANDSHAKE...',
        'RESOLVING_HOST: ' + site.url.split('/')[2],
        'ESTABLISHING_TLS_TUNNEL...',
        'MOUNTING_REMOTE_ASSETS...',
        'STARTING_LIVE_STREAM...',
        'SYSTEM_STABLE.'
      ];
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < initialLogs.length) {
          setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${initialLogs[i]}`]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isActive, isLoaded, site.url]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const resetInstance = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(false);
    setIsLoaded(false);
    setLogs([]);
  };

  const metadata = {
    class: site.techStack?.includes('AI') ? 'NEURAL_UNIT' : 'UI_COMPONENT',
    status: isActive ? (isLoaded ? 'LIVE_STREAMING' : 'CONNECTING') : 'STANDBY',
    load: isActive ? '0.04ms' : '0.00ms'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Context */}
        <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-apple-blue opacity-30'}`} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-zinc-600">
                ID: {site.id.toUpperCase()}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tighter">
              {site.name}
            </h3>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-balance">
              {site.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {site.techStack?.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg border border-black/[0.05] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-[9px] font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500">
                {tech}
              </span>
            ))}
          </div>

          {isActive && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] space-y-4"
            >
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">System Logs</p>
              <div 
                ref={terminalRef}
                className="h-32 overflow-y-auto font-mono text-[10px] space-y-1 text-apple-blue scroll-smooth"
              >
                {logs.map((log, i) => (
                  <div key={i} className="opacity-80"><span className="opacity-40">{">"}</span> {log}</div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="pt-6">
            <a 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group/link"
            >
              <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover/link:bg-apple-blue group-hover/link:border-apple-blue transition-all duration-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white group-hover/link:text-white"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover/link:text-apple-blue transition-colors">Launch Independent Instance</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Browser */}
        <div className="lg:col-span-8 order-1 lg:order-2 flex justify-center w-full overflow-hidden">
          <div 
            className={`relative w-full transition-all duration-700 ease-[0.22,1,0.36,1] ${viewport === 'mobile' ? 'max-w-[320px] md:max-w-[360px]' : 'max-w-none'}`}
          >
            <div className="relative rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-black/[0.12] dark:border-white/[0.12] overflow-hidden shadow-2xl shadow-black/[0.05] dark:shadow-apple-blue/10 transform-gpu transition-all duration-500">
              
              {/* Enhanced MacOS Header */}
              <div className="h-12 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] flex items-center px-4 md:px-6 gap-2 md:gap-6 z-50 relative">
                <div className="flex gap-1.5 md:gap-2 min-w-[30px] md:min-w-[50px]">
                  <button onClick={resetInstance} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] hover:brightness-75 transition-all" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] opacity-40" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] opacity-40" />
                </div>
                
                {/* Viewport Toggles */}
                <div className="flex bg-black/[0.05] dark:bg-white/[0.05] p-1 rounded-lg border border-black/[0.05] dark:border-white/[0.05]">
                  <button 
                    onClick={() => setViewport('desktop')}
                    className={`p-1 md:p-1.5 rounded-md transition-all ${viewport === 'desktop' ? 'bg-white dark:bg-zinc-800 shadow-sm text-apple-blue' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </button>
                  <button 
                    onClick={() => setViewport('mobile')}
                    className={`p-1 md:p-1.5 rounded-md transition-all ${viewport === 'mobile' ? 'bg-white dark:bg-zinc-800 shadow-sm text-apple-blue' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </button>
                </div>

                <div className="flex-1 flex items-center gap-1.5 md:gap-2 bg-black/[0.03] dark:bg-white/[0.03] px-2 md:px-4 py-1.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] max-w-[80px] md:max-w-sm mx-auto overflow-hidden">
                   <svg width="8" height="8" className="md:w-2.5 md:h-2.5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                   <span className="text-[7px] md:text-[9px] font-bold text-gray-400 truncate uppercase tracking-widest">{site.url.replace('https://', '')}</span>
                </div>
                
                {/* Simplified Header Status Indicator */}
                <div className="flex items-center gap-2">
                   <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-apple-blue'} animate-pulse shrink-0`} />
                </div>
              </div>

              {/* Main Display Area - Fixed Aspect Ratios (Modern Mobile Height) */}
              <div className={`relative bg-apple-gray-50 dark:bg-zinc-950 overflow-hidden transition-all duration-700 ${viewport === 'mobile' ? 'aspect-[9/19]' : 'aspect-[16/10]'}`}>
                {/* Blueprint Background */}
                <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(90deg, #0066cc 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Handshake Scanning Effect */}
                {isActive && !isLoaded && (
                  <motion.div 
                    initial={{ top: '-10%' }}
                    animate={{ top: '110%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[20%] bg-gradient-to-b from-transparent via-apple-blue/20 to-transparent z-10 pointer-events-none"
                  />
                )}

                {!isActive ? (
                  <div 
                    onClick={() => setIsActive(true)}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group/overlay transition-all duration-700 bg-black/[0.02] dark:bg-white/[0.01]"
                  >
                    <div className="text-center px-6 md:px-12 space-y-6 md:space-y-8">
                       <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center bg-white dark:bg-black shadow-xl group-hover/overlay:border-apple-blue/40 transition-all duration-500"
                       >
                          <svg width="20" height="20" md:width="32" md:height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-zinc-700 group-hover/overlay:text-apple-blue transition-colors">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.05" />
                          </svg>
                       </motion.div>
                       <div className="space-y-2">
                         <h4 className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400 group-hover/overlay:text-apple-blue transition-colors">Initialize Production Interface</h4>
                         <p className="text-[7px] md:text-[10px] font-medium text-gray-500 opacity-60 italic">Handshake required for live data stream</p>
                       </div>
                    </div>
                    
                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex gap-3 md:gap-4">
                        <div className="px-2 py-0.5 md:py-1 rounded border border-black/5 dark:border-white/5 text-[5px] md:text-[7px] font-black tracking-widest text-gray-400 uppercase">STREAM_LOCKED</div>
                        <div className="px-2 py-0.5 md:py-1 rounded border border-black/5 dark:border-white/5 text-[5px] md:text-[7px] font-black tracking-widest text-gray-400 uppercase">PROTOCOL_V2</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <iframe 
                      src={site.url} 
                      className={`w-full h-full border-none transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                      onLoad={() => setIsLoaded(true)}
                      title={site.name}
                    />
                    
                    {/* RESTORED: Live Streaming text indicator on top of iframe */}
                    {isLoaded && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 right-4 z-[60] flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 backdrop-blur-md"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">Live Streaming</span>
                      </motion.div>
                    )}
                  </>
                )}
                
                {/* Watermark badge */}
                <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
                   <div className="px-2 py-1 rounded bg-black/10 dark:bg-white/5 backdrop-blur-sm text-gray-400 dark:text-zinc-500 text-[6px] md:text-[7px] font-black uppercase tracking-[0.2em] border border-black/5 dark:border-white/5">
                      {metadata.class}
                   </div>
                </div>

                {/* Physical Polish */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] opacity-50 z-40" />
              </div>
            </div>
            
            {/* Viewport Label (Bottom) */}
            <div className="mt-4 md:mt-6 flex justify-center">
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.5em] text-gray-400 opacity-30">
                Resolution: {viewport.toUpperCase()} • {viewport === 'mobile' ? 'Mobile High-Res' : 'Desktop Ultra'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

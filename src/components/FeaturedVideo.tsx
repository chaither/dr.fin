import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Play, Pause, Volume2, VolumeX, Maximize, Compass, Star } from 'lucide-react';

// Import local interview mp4 video
// @ts-ignore
import interviewFile from '../Pictures/Dr. Finnian Ebuehi with Benji Cole From CBS Radio - ARPRESS (720p, h264).mp4';

export default function FeaturedVideo() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const hasPlayedRef = useRef(false);

  // Autoplay and pause on scroll viewport intersection
  useEffect(() => {
    if (isInView) {
      if (!hasPlayedRef.current && videoRef.current) {
        hasPlayedRef.current = true;
        
        // Pause global background music player
        window.dispatchEvent(new CustomEvent('pauseBackgroundMusic'));

        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.log("Autoplay unmuted blocked, playing muted:", err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(e => console.error("Muted autoplay also failed:", e));
            }
          });
      }
    } else {
      // Pause when scrolled out of view
      if (hasPlayedRef.current && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
        hasPlayedRef.current = false;
      }
    }
  }, [isInView]);

  // Sync play event and send dispatch to stop background music
  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pause global background music player
      window.dispatchEvent(new CustomEvent('pauseBackgroundMusic'));
      
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Error playing video:", err));
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error(err));
      } else {
        containerRef.current.requestFullscreen().catch(err => console.error(err));
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Autohide controls on hover
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section ref={sectionRef} id="featured-performance" className="py-24 px-6 lg:px-20 bg-espresso text-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl text-cream font-display mb-4">
            {t('featuredVideo.title')} <span className="italic text-gold">{t('featuredVideo.titleAccent')}</span>
          </h2>
          <div className="h-[1px] bg-gold/30 mx-auto w-24 mb-6" />
        </motion.div>

        {/* Video Player Layout: Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Custom Video Player Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Player Container */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black/60 border border-gold/20 shadow-[0_24px_50px_rgba(0,0,0,0.6)] group"
            >
              <video
                ref={videoRef}
                src={interviewFile}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onClick={handlePlayToggle}
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Big Play Overlay (when paused or hover) */}
              <AnimatePresence>
                {(!isPlaying || !showControls) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handlePlayToggle}
                    className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer transition-opacity"
                  >
                    {!isPlaying && (
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 bg-gold text-espresso rounded-full flex items-center justify-center shadow-2xl border border-gold/30 focus:outline-none"
                      >
                        <Play size={32} className="fill-espresso translate-x-[2px]" />
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Custom Controls Bar */}
              <AnimatePresence>
                {showControls && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-3 transition-all pointer-events-auto"
                  >
                    {/* Progress slider bar */}
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-cream/70 font-mono min-w-[35px]">{formatTime(currentTime)}</span>
                      <input 
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeekChange}
                        className="flex-grow h-1 rounded-full appearance-none cursor-pointer bg-cream/20 accent-gold hover:accent-gold focus:outline-none"
                        style={{
                          background: `linear-gradient(to right, #D62828 0%, #D62828 ${
                            duration ? (currentTime / duration) * 100 : 0
                          }%, rgba(245, 242, 235, 0.2) ${
                            duration ? (currentTime / duration) * 100 : 0
                          }%, rgba(245, 242, 235, 0.2) 100%)`
                        }}
                      />
                      <span className="text-[11px] text-cream/70 font-mono min-w-[35px] text-right">{formatTime(duration)}</span>
                    </div>

                    {/* Buttons block */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={handlePlayToggle}
                          className="p-2 bg-gold text-espresso rounded-full hover:bg-gold/90 transition-colors"
                        >
                          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="translate-x-[0.5px]" />}
                        </button>
                        <div>
                          <p className="text-sm font-bold text-cream tracking-wide">{t('featuredVideo.trackInterview')}</p>
                          <p className="text-xs text-gold/80 font-medium">CBS Radio - ARPress</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button 
                          onClick={handleMuteToggle}
                          className="p-2 hover:bg-cream/10 rounded-full text-cream/80 hover:text-gold transition-colors"
                        >
                          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                        <button 
                          onClick={handleFullScreen}
                          className="p-2 hover:bg-cream/10 rounded-full text-cream/80 hover:text-gold transition-colors"
                        >
                          <Maximize size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description Container (Beside Video Container) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex"
          >
            <div className="bg-[#122238]/60 backdrop-blur-md rounded-3xl p-8 border border-gold/15 relative overflow-hidden flex flex-col justify-between w-full h-full shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 text-gold text-xs font-bold uppercase tracking-widest">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex items-center justify-center"
                  >
                    <Compass size={14} />
                  </motion.div>
                  <span>Interview Context & Information</span>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl text-cream font-display mb-3 leading-tight">
                    {t('featuredVideo.trackInterview')}
                  </h3>
                  <p className="text-beige/85 font-serif italic text-base leading-relaxed">
                    {t('featuredVideo.descInterview')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-gold/10 text-xs text-cream/70 mt-6 lg:mt-0">
                <div className="flex justify-between items-center border-b border-gold/5 pb-3">
                  <span className="opacity-60 uppercase tracking-wider text-[10px]">Genre</span>
                  <span className="font-semibold text-cream bg-gold/10 px-3 py-1 rounded-full border border-gold/20 text-[11px]">
                    Author Interview
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gold/5 pb-3">
                  <span className="opacity-60 uppercase tracking-wider text-[10px]">Publisher</span>
                  <span className="font-semibold text-cream text-[11px]">
                    ARPress
                  </span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="opacity-60 uppercase tracking-wider text-[10px]">Platform</span>
                  <span className="font-semibold text-cream text-[11px]">
                    CBS Radio
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

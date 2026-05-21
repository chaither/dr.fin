import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, VolumeX, Music, Play, Pause, SkipForward, SkipBack, 
  Shuffle, Repeat, ChevronUp, ChevronDown, ListMusic, Volume1
} from 'lucide-react';

// Import media tracks
// @ts-ignore
import nuvoleFile from '../Pictures/Ludovico Einaudi - Nuvole Bianche.mp4';
// @ts-ignore
import spiritFile from '../Pictures/Spirit Lead Me - Hillsong United __ Worship Piano & Sheet Music.mp4';
// @ts-ignore
import nameFile from '../Pictures/What a Beautiful Name - Hillsong Worship __ Beautiful Piano Cover (Sheet Music).mp4';

const TRACKS = [
  {
    id: 'spirit',
    title: 'Spirit Lead Me',
    artist: 'Hillsong United',
    src: spiritFile,
    coverColor: 'from-[#4e3c3b] to-[#251b1a]',
    accentColor: '#D4AF37',
  },
  {
    id: 'nuvole',
    title: 'Nuvole Bianche',
    artist: 'Ludovico Einaudi',
    src: nuvoleFile,
    coverColor: 'from-[#4e433f] to-[#1e1917]',
    accentColor: '#D4AF37',
  },
  {
    id: 'name',
    title: 'What a Beautiful Name',
    artist: 'Hillsong Worship',
    src: nameFile,
    coverColor: 'from-[#3c423d] to-[#1b1f1c]',
    accentColor: '#D4AF37',
  }
];

const barVariants = {
  animate: (custom: number) => ({
    scaleY: [1, 2.5, 1],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse" as const,
      delay: custom * 0.15,
      ease: "easeInOut"
    }
  }),
  idle: {
    scaleY: 1
  }
};

export default function BackgroundMusic() {
  // Player state
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Start false to try unmuted autoplay first
  const [volume, setVolume] = useState(0.5); // Default volume at 50%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false); // false: play straight, true: repeat current track
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const audioRef = useRef<HTMLVideoElement | null>(null);
  const currentTrack = TRACKS[currentTrackIndex];
  const isFirstTrackEffect = useRef(true);

  // Autoplay attempt with interaction event listener fallbacks
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Set initial volume
    audioRef.current.volume = volume;

    const unmuteAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = volume; // Explicitly set volume to 50%
        setIsMuted(false);
        setIsPlaying(true);
        setShowTooltip(false);
        audioRef.current.play().catch((err) => {
          console.log("Play failed on interaction unmute:", err);
        });
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', unmuteAudio, { capture: true });
      window.removeEventListener('keydown', unmuteAudio, { capture: true });
      window.removeEventListener('touchstart', unmuteAudio, { capture: true });
      window.removeEventListener('mousedown', unmuteAudio, { capture: true });
      window.removeEventListener('pointerdown', unmuteAudio, { capture: true });
      window.removeEventListener('wheel', unmuteAudio, { capture: true });
    };

    const addUnmuteListeners = () => {
      window.addEventListener('click', unmuteAudio, { capture: true });
      window.addEventListener('keydown', unmuteAudio, { capture: true });
      window.addEventListener('touchstart', unmuteAudio, { capture: true, passive: true });
      window.addEventListener('mousedown', unmuteAudio, { capture: true });
      window.addEventListener('pointerdown', unmuteAudio, { capture: true });
      window.addEventListener('wheel', unmuteAudio, { capture: true, passive: true });
    };

    // Try playing unmuted first
    audioRef.current.muted = false;
    setIsMuted(false);

    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Unmuted autoplay blocked, trying muted:", err);
        if (audioRef.current) {
          audioRef.current.muted = true;
          setIsMuted(true);
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              setShowTooltip(true);
              addUnmuteListeners();
            })
            .catch((muteErr) => {
              console.log("Muted autoplay also blocked:", muteErr);
              setShowTooltip(true);
              addUnmuteListeners();
            });
        }
      });

    // Sync play/pause state from the audio element events natively
    const handlePlayEvent = () => setIsPlaying(true);
    const handlePauseEvent = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlayEvent);
    audioRef.current.addEventListener('pause', handlePauseEvent);

    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlayEvent);
        audioRef.current.removeEventListener('pause', handlePauseEvent);
      }
    };
  }, []);

  // Update audio source when currentTrackIndex changes
  useEffect(() => {
    if (isFirstTrackEffect.current) {
      isFirstTrackEffect.current = false;
      return;
    }
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      audioRef.current.load();
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.error("Playback failed on track change:", err);
          setIsPlaying(false);
        });
    }
  }, [currentTrackIndex]);

  // Handle Play/Pause toggles
  const handlePlayToggle = () => {
    if (!audioRef.current) return;
    setShowTooltip(false);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => console.error("Error starting playback:", err));
    }
  };

  // Skip Forward/Next Track
  const handleNext = () => {
    if (isShuffle) {
      let nextIndex = currentTrackIndex;
      if (TRACKS.length > 1) {
        while (nextIndex === currentTrackIndex) {
          nextIndex = Math.floor(Math.random() * TRACKS.length);
        }
      }
      setCurrentTrackIndex(nextIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    }
  };

  // Skip Backward/Previous Track
  const handlePrev = () => {
    if (audioRef.current && audioRef.current.currentTime > 5) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error(err));
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    }
  };

  // Volume control changes
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = parseFloat(e.target.value);
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
      if (nextVolume === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  // Mute toggles
  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

  // Direct track selection from queue list
  const selectTrack = (index: number) => {
    if (index === currentTrackIndex) {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error(err));
      }
    } else {
      setCurrentTrackIndex(index);
    }
  };

  // Scrubbing/seeking progress bar
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  // Audio elements event listeners
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.error(err));
      }
    } else {
      handleNext();
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans pointer-events-none">
      
      {/* Autoplay Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-espresso/90 border border-gold/30 text-cream text-xs px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 select-none animate-bounce"
          >
            <span className="text-gold animate-pulse">🎵</span>
            <span>Click anywhere to unmute piano backgrounds!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Spotify-like Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="pointer-events-auto w-96 max-w-[calc(100vw-32px)] h-[580px] bg-[#12100E]/95 backdrop-blur-xl border border-gold/20 rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden text-cream"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-gold/10 bg-black/20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold/10 rounded-lg">
                  <Music className="text-gold" size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gold">Aetheria Player</h3>
                  <p className="text-[10px] text-cream/50">Ambient Piano Covers</p>
                </div>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-1.5 hover:bg-gold/10 rounded-full text-cream/70 hover:text-gold transition-colors"
                aria-label="Collapse player"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Main Area: Vinyl Artwork & Details */}
            <div className="flex-grow p-6 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-transparent to-black/30">
              {/* Vinyl Graphic with Spin Animation */}
              <div className="relative group">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="w-36 h-36 rounded-full border-4 border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center bg-gradient-to-br from-espresso to-black relative"
                >
                  {/* Vinyl outer grooves */}
                  <div className="absolute inset-0 rounded-full border border-cream/5 m-2" />
                  <div className="absolute inset-0 rounded-full border border-cream/5 m-4" />
                  <div className="absolute inset-0 rounded-full border border-cream/5 m-6" />
                  <div className="absolute inset-0 rounded-full border border-cream/5 m-8" />
                  <div className="absolute inset-0 rounded-full border border-cream/5 m-12" />

                  {/* Album Cover Central Image Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${currentTrack.coverColor} opacity-75`} />

                  {/* Inner vinyl label */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#12100E] border-2 border-gold/40 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                </motion.div>
                
                {/* Floating vinyl needle arm */}
                <div 
                  className={`absolute top-0 right-0 w-8 h-12 origin-top-right transition-transform duration-500 pointer-events-none z-20 ${
                    isPlaying ? 'rotate-[-5deg] translate-x-2' : 'rotate-[-30deg] translate-x-3'
                  }`}
                  style={{ marginRight: '-12px', marginTop: '-4px' }}
                >
                  <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
                    <path d="M22 2C22 2 12 18 10 26L6 44" stroke="#C5A880" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="4" y="40" width="4" height="6" rx="1" fill="#C5A880" transform="rotate(15 4 40)"/>
                    <circle cx="22" cy="2" r="2" fill="#D4AF37"/>
                  </svg>
                </div>
              </div>

              {/* Title & Artist */}
              <div className="text-center w-full px-4">
                <h4 className="text-base font-bold text-cream tracking-wide truncate">{currentTrack.title}</h4>
                <p className="text-xs text-gold/80 font-medium mt-0.5">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Bottom Section: Controls & Seeker & Playlist */}
            <div className="bg-black/40 border-t border-gold/10 p-5 flex flex-col gap-4">
              {/* Progress Slider */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-cream/50 min-w-[28px]">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeekChange}
                    className="flex-grow h-1 bg-cream/10 rounded-full appearance-none cursor-pointer accent-gold hover:accent-gold focus:outline-none transition-all"
                    style={{
                      background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, rgba(245, 242, 235, 0.1) ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, rgba(245, 242, 235, 0.1) 100%)`
                    }}
                  />
                  <span className="text-[10px] text-cream/50 min-w-[28px] text-right">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Core Control Buttons */}
              <div className="flex items-center justify-between px-2">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-1.5 rounded-full transition-colors relative hover:text-gold ${
                    isShuffle ? 'text-gold' : 'text-cream/40'
                  }`}
                  title="Shuffle"
                >
                  <Shuffle size={16} />
                  {isShuffle && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />}
                </button>

                <button
                  onClick={handlePrev}
                  className="p-2 hover:bg-gold/10 rounded-full text-cream hover:text-gold transition-all active:scale-95"
                  title="Previous"
                >
                  <SkipBack size={18} fill="currentColor" className="fill-transparent" />
                </button>

                <button
                  onClick={handlePlayToggle}
                  className="p-3 bg-gold text-[#12100E] rounded-full hover:bg-gold/90 transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause size={20} fill="currentColor" />
                  ) : (
                    <Play size={20} fill="currentColor" className="translate-x-[1px]" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-gold/10 rounded-full text-cream hover:text-gold transition-all active:scale-95"
                  title="Next"
                >
                  <SkipForward size={18} fill="currentColor" className="fill-transparent" />
                </button>

                <button
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-1.5 rounded-full transition-colors relative hover:text-gold ${
                    isRepeat ? 'text-gold' : 'text-cream/40'
                  }`}
                  title="Repeat"
                >
                  <Repeat size={16} />
                  {isRepeat && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />}
                </button>
              </div>

              {/* Volume Controller */}
              <div className="flex items-center gap-2.5 px-1">
                <button
                  onClick={handleMuteToggle}
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} />
                  ) : volume < 0.4 ? (
                    <Volume1 size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-grow h-[3px] bg-cream/10 rounded-full appearance-none cursor-pointer accent-gold hover:accent-gold focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                      isMuted ? 0 : volume * 100
                    }%, rgba(245, 242, 235, 0.1) ${
                      isMuted ? 0 : volume * 100
                    }%, rgba(245, 242, 235, 0.1) 100%)`
                  }}
                />
              </div>

              {/* Collapsible Playlist Queue */}
              <div className="mt-1 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-wider pl-1 mb-1">
                  <ListMusic size={12} />
                  <span>Play Queue</span>
                </div>
                <div className="max-h-28 overflow-y-auto flex flex-col gap-1 pr-1 custom-scrollbar">
                  {TRACKS.map((track, idx) => {
                    const isSelected = idx === currentTrackIndex;
                    return (
                      <button
                        key={track.id}
                        onClick={() => selectTrack(idx)}
                        className={`w-full text-left p-1.5 rounded-lg flex items-center justify-between text-xs transition-all hover:bg-gold/15 group ${
                          isSelected ? 'bg-gold/10 text-gold font-medium' : 'text-cream/70 hover:text-cream'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-[10px] text-cream/40 group-hover:text-gold/60 w-3 text-center">
                            {isSelected && isPlaying ? (
                              <span className="flex items-center gap-[2px] h-2.5 justify-center">
                                {[0, 1, 2].map((v) => (
                                  <motion.span
                                    key={v}
                                    animate={{ scaleY: [1, 2, 1] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: v * 0.15 }}
                                    className="w-[2px] h-full bg-gold origin-bottom"
                                  />
                                ))}
                              </span>
                            ) : (
                              idx + 1
                            )}
                          </span>
                          <div className="truncate">
                            <p className="truncate text-xs font-semibold">{track.title}</p>
                            <p className="text-[10px] opacity-60 truncate">{track.artist}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed Glassmorphism Floating Bar Player */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto flex items-center gap-3 px-4.5 py-3.5 bg-espresso/80 hover:bg-espresso/90 backdrop-blur-md border border-gold/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-gold/60 transition-all duration-300 group cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            {/* Equalizer animation icon */}
            <div className="flex items-end gap-[3px] h-3.5 w-4 justify-center mb-[2px]">
              {[0, 1, 2, 3].map((val) => (
                <motion.div
                  key={val}
                  custom={val}
                  variants={barVariants}
                  animate={isPlaying && !isMuted ? "animate" : "idle"}
                  className="w-[2.5px] h-2.5 bg-gold origin-bottom rounded-full"
                />
              ))}
            </div>

            {/* Current title bar */}
            <div className="flex flex-col text-left max-w-[120px] truncate">
              <span className="text-[11px] font-bold text-cream tracking-wide truncate group-hover:text-gold transition-colors">
                {currentTrack.title}
              </span>
              <span className="text-[9px] text-cream/50 truncate">
                {currentTrack.artist}
              </span>
            </div>

            {/* Play/Pause/Expand control buttons */}
            <div className="flex items-center gap-2.5 border-l border-gold/20 pl-2.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayToggle();
                }}
                className="p-1 hover:bg-gold/10 hover:text-gold rounded-full text-cream/80 transition-colors flex items-center justify-center"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
              </button>
              
              <ChevronUp size={15} className="text-cream/50 group-hover:text-gold transition-colors group-hover:translate-y-[-1px] duration-300" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HTML5 Video Node used as background audio */}
      <video
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="auto"
        autoPlay={true}
        muted={isMuted}
        playsInline={true}
        className="hidden"
      />
      
      {/* Scrollbar & Range input style customization */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(245, 242, 235, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
        input[type="range"]::-webkit-slider-thumb {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          -webkit-appearance: none;
          opacity: 0;
          transition: opacity 0.15s ease-in-out;
        }
        input[type="range"]:hover::-webkit-slider-thumb {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

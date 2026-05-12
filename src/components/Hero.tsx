import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getBooks } from '../constants';
import backgroundImage from '../Pictures/new.png';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const books = getBooks(i18n.language);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };



  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream px-6 pt-20 pb-32 lg:px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Parallax Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-espresso/5 rounded-full blur-3xl -z-10"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10">
        
        {/* Left Side: Text and Buttons (Preserved) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity, y: textY }}
        >
          <h1 className="text-6xl lg:text-7xl font-display leading-[0.9] text-cream mb-8">
            {t('hero.titlePart1')} <br />
            <span className="italic font-light text-gold">{t('hero.titlePart2')}</span> <br />
            {t('hero.titlePart3')} <br />
            <span className="italic font-light text-gold">{t('hero.titlePart4')}</span>
          </h1>

          <p className="text-lg text-cream/80 max-w-md mb-10 font-sans">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-espresso text-cream font-medium rounded-sm hover:bg-ink transition-all flex items-center gap-2 group"
            >
              {t('hero.explore')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-espresso text-espresso font-medium rounded-sm hover:bg-espresso hover:text-cream transition-all">
              {t('hero.ourStory')}
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Book Carousel with "Stepping" Format */}
        <motion.div 
          className="relative h-[600px] flex items-center justify-center overflow-visible mt-[200px]"
          style={{ y: imgY, opacity }}
        >
          {/* Carousel Wrapper with Perspective (Centered horizontally, High angle) */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px', perspectiveOrigin: '50% 10%', transformStyle: 'preserve-3d', transform: 'translateX(120px)' }}>
            
            {books.map((book, index) => {
              // Calculate position in the cascade (0: Large, 1: Medium, 2: Small)
              let pos = (index - activeIndex + books.length) % books.length;
              
              // Show 5 items in the cascade
              const isVisible = pos < 5;
              
              if (!isVisible) return null;

              // Values based on position to match the requested image format (decreasing size)
              let xPos = 0;
              let scale = 1;
              let zPos = 0;
              let rotateY = 0;
              let yPos = 0;

              // No baseOffset, use symmetric positions
              // Adjusted positions for better spacing and realistic hierarchy
              if (pos === 0) {
                // Center book (smaller)
                xPos = 0;
                scale = 0.8; // smaller than side books
                zPos = 100; // bring forward slightly
                rotateY = 0;
                yPos = 0;
              } else if (pos === 1) {
                // Right immediate side (larger)
                xPos = 190; // adjusted spacing
                scale = 1.0;
                zPos = 20; // slightly behind center
                rotateY = -20; // Rotate towards center
                yPos = 0;
              } else if (pos === 2) {
                // Right far side (medium)
                xPos = 380; // adjusted spacing
                scale = 0.85;
                zPos = -20;
                rotateY = -30; // Rotate towards center
                yPos = 0;
              } else if (pos === 3) {
                // Left far side (medium)
                xPos = -380; // adjusted spacing
                scale = 0.85;
                zPos = -20;
                rotateY = 30; // Rotate towards center
                yPos = 0;
              } else if (pos === 4) {
                // Left immediate side (larger)
                xPos = -190; // adjusted spacing
                scale = 1.0;
                zPos = 20;
                rotateY = 20; // Rotate towards center
                yPos = 0;
              }

              const isActive = pos === 0;

              return (
                <motion.div
                  key={book.id}
                  className="absolute"
                  style={{
                    width: '280px',
                    height: '400px',
                    transformStyle: 'preserve-3d',
                    zIndex: 10 - pos, // Higher z-index for larger items on left
                    originY: 1, // Scale from bottom to align bottoms!
                  }}
                  animate={{
                    x: xPos,
                    z: zPos,
                    rotateY: rotateY,
                    rotateX: 0,
                    scale: scale,
                    y: yPos,
                  }}
                  whileHover={{ scale: scale * 1.05 }}
                  whileTap={{ scale: scale * 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Grounded Book Container (No floating) */}
                  <div className="w-full h-full preserve-3d">
                    <div className="relative w-full h-full preserve-3d group">
                      
                      {/* Front Cover (Pushed forward to show thickness) */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-r-md overflow-hidden bg-white shadow-2xl"
                        style={{ 
                          transform: 'translateZ(30px)', // 30px thickness
                          boxShadow: isActive ? '0 30px 60px -12px rgba(0,0,0,0.4), 0 18px 36px -18px rgba(0,0,0,0.5)' : '0 15px 30px -5px rgba(0,0,0,0.3)',
                        }}
                      >
                        <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                        
                        {/* Glossy Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay" />
                        
                        {/* Spine Joint/Groove for Realistic Hardcover Look */}
                        <div className="absolute top-0 bottom-0 left-[12px] w-[1px] bg-black/30" />
                        <div className="absolute top-0 bottom-0 left-[13px] w-[1px] bg-white/10" />
                      </div>
                      
                      {/* Spine (Left side, connecting front to back) */}
                      <div 
                        className="absolute top-0 bottom-0 left-0 w-[30px] bg-gradient-to-r from-[#2A2118] to-[#1A1410] origin-left"
                        style={{ 
                          transform: 'translateZ(30px) rotateY(-90deg)',
                          borderLeft: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                      </div>
                      
                      {/* Pages (Right side, connecting front to back) */}
                      <div 
                        className="absolute top-[4px] bottom-[4px] right-0 w-[30px] bg-[#e8e6df] origin-right"
                        style={{ 
                          transform: 'translateZ(30px) rotateY(90deg)',
                          backgroundImage: 'repeating-linear-gradient(90deg, #d8d6cf, #d8d6cf 1px, #e8e6df 1px, #e8e6df 3px)',
                        }}
                      >
                        {/* Shadow from overhang */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />
                      </div>
                      
                      {/* Top Edge (Connecting front to back) */}
                      <div 
                        className="absolute top-0 left-[4px] right-[4px] h-[30px] bg-[#e8e6df] origin-top"
                        style={{ 
                          transform: 'translateZ(30px) rotateX(90deg)',
                          backgroundImage: 'repeating-linear-gradient(0deg, #d8d6cf, #d8d6cf 1px, #e8e6df 1px, #e8e6df 3px)',
                        }}
                      >
                        {/* Shadow from overhang */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                      </div>
                      

                      
                      {/* Subtle drop shadow beneath each book */}
                      <div 
                        className="absolute bottom-[-5px] left-0 right-0 h-8 bg-black/30 blur-md rounded-full pointer-events-none"
                        style={{
                          transform: 'translateY(8px)',
                          opacity: isActive ? 0.7 : 0.4,
                        }}
                      />
                    </div>
                    </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>

      </div>

    </section>
  );
}

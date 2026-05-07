import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import featuredImage from '../Pictures/ENGLISH/16279a37-5c09-457e-82f7-37995b9beb65.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream px-6 py-20 lg:px-20">
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-espresso/5 rounded-full blur-3xl -z-10"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity, y: textY }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-medium tracking-widest text-xs uppercase">{t('hero.est')}</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-display leading-[0.9] text-espresso mb-8">
            {t('hero.titlePart1')} <br /> 
            <span className="italic font-light text-gold">{t('hero.titlePart2')}</span>
          </h1>
          
          <p className="text-lg text-espresso/70 max-w-md mb-10 font-serif italic">
            {t('hero.quote')}
            <br />
            <span className="text-sm block mt-4 not-italic opacity-70">{t('hero.subtitle')}</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-espresso text-cream font-medium rounded-sm hover:bg-ink transition-all flex items-center gap-2 group">
              {t('hero.explore')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-espresso text-espresso font-medium rounded-sm hover:bg-espresso hover:text-cream transition-all">
              {t('hero.ourStory')}
            </button>
          </div>
        </motion.div>

        <div className="relative">
          {/* Floating Book 1 */}
          <motion.div
            style={{ y: y2, rotate }}
            className="perspective-1000 absolute -top-20 -left-10 z-20 hidden lg:block"
          >
            <div className="w-48 h-64 bg-vintage-red rounded-r-lg book-shadow animate-float flex items-center justify-center p-4">
              <div className="border border-cream/20 w-full h-full flex flex-col items-center justify-center text-cream text-center p-2">
                <p className="font-display italic text-lg leading-tight">Spiritual Warfare</p>
                <div className="w-8 h-[1px] bg-cream/40 my-2" />
                <p className="text-[8px] uppercase tracking-widest">Dr. Finnian Ebuehi</p>
              </div>
            </div>
          </motion.div>

          {/* Main Featured Book (Floating & Animating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: imgY }}
            className="relative z-10 perspective-1000"
          >
            <div className="w-[300px] lg:w-[400px] aspect-[3/4] bg-espresso rounded-r-xl overflow-hidden book-shadow mx-auto relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={featuredImage} 
                alt="Who is this Jesus Christ?"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 text-cream">
                <p className="text-gold uppercase text-[10px] tracking-widest font-bold mb-2">Book of the Week</p>
                <h3 className="text-2xl lg:text-3xl font-display leading-tight">Who is this Jesus Christ?</h3>
                <p className="text-sm italic opacity-80 mt-2">By Dr. Finnian Ebuehi</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Book 3 */}
          <motion.div
            style={{ y: y3, rotate: -10 }}
            className="perspective-1000 absolute -bottom-12 -right-4 z-20 hidden lg:block"
          >
            <div className="w-40 h-52 bg-gold rounded-r-lg book-shadow animate-float flex items-center justify-center p-4" style={{ animationDelay: '1s' }}>
              <div className="border border-cream/30 w-full h-full flex flex-col items-center justify-center text-espresso text-center p-2">
                <p className="font-display italic text-base leading-tight">Trauma Dilemma</p>
                <div className="w-6 h-[1px] bg-espresso/20 my-2" />
                <p className="text-[7px] uppercase tracking-widest">Dr. Finnian Ebuehi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

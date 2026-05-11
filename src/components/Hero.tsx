import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Shield, BookOpen, Feather, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import featuredImage from '../Pictures/ENGLISH/16279a37-5c09-457e-82f7-37995b9beb65.jpg';
import backgroundImage from '../Pictures/new1.png';

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
    <section
      ref={containerRef}
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

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
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


      </div>


    </section>
  );
}

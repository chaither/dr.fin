import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import authorImg from '../Pictures/prof.png';
import bgImage from '../Pictures/new2.png';

export default function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#1A1410] overflow-hidden">
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 opacity-60"
      >
        <img 
          src={bgImage} 
          alt="Library"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410] via-transparent to-[#1A1410]" />

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
        {/* Top Header */}
        <div className="w-full max-w-4xl mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <div className="h-[1px] flex-1 bg-gold/30" />
            <span className="font-display text-3xl text-gold mx-6 tracking-wider font-bold">
              DR. FINNIAN <span className="text-cream">BOOKS</span>
            </span>
            <div className="h-[1px] flex-1 bg-gold/30" />
          </div>
          {/* Decorative flourish below */}
          <div className="flex items-center justify-center w-1/3 mt-2">
            <div className="h-[1px] flex-1 bg-gold/30" />
            <span className="text-gold mx-3 text-xs">⬥</span>
            <div className="h-[1px] flex-1 bg-gold/30" />
          </div>
        </div>

        <motion.div 
          style={{ scale: textScale }}
          className="max-w-4xl flex flex-col items-center"
        >
          <Quote className="text-gold mb-6 opacity-50" size={48} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-cream leading-relaxed mb-12 text-center">
            “After all, <span className="italic text-gold">nothing in the world</span> — not even the most <span className="italic text-gold">supreme act of love</span> — is able to persuade you emotionally to <span className="italic text-gold">turn from your sin</span> (John 3:19). Jesus died to accomplish something <span className="italic text-gold">more significant and certain</span>.”
          </h2>

          
        </motion.div>
      </div>
    </section>
  );
}

export function AuthorSpotlight() {
  return (
    <section id="author-spotlight" className="py-24 px-6 lg:px-20 bg-cream border-t border-espresso/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[4/5] relative z-10 rounded-sm overflow-hidden border-[12px] border-paper shadow-2xl">
            <img src={authorImg} alt="Dr. Finnian Ebuehi" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/30 -z-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Author Spotlight</p>
          <h2 className="text-5xl lg:text-7xl text-gold mb-8 underline decoration-espresso/10 underline-offset-8">
            Dr. Finnian Ebuehi
          </h2>
          <div className="text-lg text-espresso/80 font-serif mb-10 leading-relaxed space-y-4">
            <p>
              Finnian “Finn.” Osak. Ebuehi is a Missionary Strategist, and Researcher. He is also a Professional Engineer, Social Worker, Clinical Therapist, and a Church Planter.
            </p>
            <p>
              Dr. Ebuehi studied from various continents: Africa, Asia, Europe, South and North America. He holds a bachelor's degree in mechanical engineering, a master’s in divinity, a master’s degree in Marriage and Family Therapy, and a Doctorate degree in Ministry.
            </p>
            <p>
              He is the President and Co-founder of Christ's Harvesters Churches Ministries which is involved in strategic in reaches, outreaches/missions through Church Advancements/Planting, Discipleship, Leadership, Educational, and Infrastructural Developments in the most vulnerable nations of the globe.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest font-bold text-espresso/40">Notable Works</p>
            <div className="flex flex-wrap gap-4">
              {['Trauma Dilemma', 'Spiritual Warfare', 'Shattered and Consumed'].map((book) => (
                <span key={book} className="px-5 py-2 bg-paper border border-espresso/10 text-espresso text-sm italic font-serif hover:border-gold hover:text-gold cursor-default transition-colors">
                  {book}
                </span>
              ))}
            </div>
            <button className="mt-8 px-8 py-3 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-all text-sm uppercase tracking-widest font-bold">
              Explore His Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import authorImg from '../Pictures/prof.png';

export default function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-espresso overflow-hidden">
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 opacity-40 grayscale"
      >
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
          alt="Library"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-transparent to-espresso" />

      <div className="sticky top-0 h-screen flex items-center justify-center text-center px-6">
        <motion.div 
          style={{ scale: textScale }}
          className="max-w-4xl"
        >
          <Quote className="text-gold mx-auto mb-8 opacity-50" size={64} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-cream leading-tight mb-12 italic font-light">
            "After all, nothing in the world – not even the most supreme act of love – is able to persuade you emotionally to turn from your sin (John 3:19). Jesus died to accomplish something more significant and certain."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-bold">Dr. Finnian Ebuehi</p>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AuthorSpotlight() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-cream border-t border-espresso/5">
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
          <h2 className="text-5xl lg:text-7xl text-espresso mb-8 underline decoration-gold/20 underline-offset-8">
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

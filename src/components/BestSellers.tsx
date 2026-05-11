import { BookCard } from './BookCard';
import { getBooks } from '../constants';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Book } from '../types';

export default function BestSellers() {
  const { t, i18n } = useTranslation();
  const staticBooks = getBooks(i18n.language);
  const [dynamicBooks, setDynamicBooks] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'books'), (snapshot) => {
      const booksData: any[] = [];
      snapshot.forEach(doc => {
        booksData.push({ id: doc.id, ...doc.data() });
      });
      setDynamicBooks(booksData);
    });
    return () => unsubscribe();
  }, []);

  const allBooks = [...dynamicBooks, ...staticBooks];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="best-sellers" ref={containerRef} className="py-24 px-6 lg:px-20 bg-paper relative overflow-hidden">
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[10%] left-0 w-full whitespace-nowrap pointer-events-none z-0"
      >
        <h2 className="text-[12rem] lg:text-[18rem] font-display text-espresso/[0.02] uppercase font-bold tracking-tighter">
          Masterpieces Masterpieces Masterpieces
        </h2>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-espresso mb-4">{t('bestSellers.title')} <span className="italic text-gold">{t('bestSellers.titleAccent')}</span></h2>
          <p className="text-espresso/60 max-w-2xl mx-auto font-serif italic">
            {t('bestSellers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {allBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

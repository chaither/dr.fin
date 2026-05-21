import { getBooks } from '../constants';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Book } from '../types';
import { Heart, Star } from 'lucide-react';
import BookDetailsModal from './BookDetailsModal';
import { useFavorites } from '../context/FavoritesContext';
import bgImage from '../Pictures/back2.png';

export default function BestSellers() {
  const { t, i18n } = useTranslation();
  const staticBooks = getBooks(i18n.language);
  const [dynamicBooks, setDynamicBooks] = useState<any[]>([]);
  const [selectedBookForModal, setSelectedBookForModal] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
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

  const openModal = (book: Book) => {
    setSelectedBookForModal(book);
    setIsModalOpen(true);
  };

  return (
    <section id="best-sellers" ref={containerRef} className="py-24 px-6 lg:px-20 bg-[#FDFCFA] relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 block"
          >
            {t('bestSellers.curatedCollection', { defaultValue: 'Curated Collection' })}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl lg:text-7xl text-white font-display mb-4 drop-shadow-md"
          >
            {t('bestSellers.title')} <span className="italic text-gold">{t('bestSellers.titleAccent')}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-[1px] bg-gold/50 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-white/80 max-w-2xl mx-auto font-serif text-lg italic leading-relaxed drop-shadow-sm"
          >
            {t('bestSellers.subtitle')}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {allBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-cream rounded-[24px] p-6 border border-gold/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(192,138,83,0.15)] hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div className="relative">
                {/* Category Pill */}
                <div className="absolute top-0 left-0 bg-gold/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                  {book.genre}
                </div>

                {/* Favorite Icon */}
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className={`absolute top-0 right-0 p-2 transition-colors z-20 ${isFavorite(book.id) ? 'text-gold' : 'text-gold/50 hover:text-gold'
                    }`}
                >
                  <Heart size={18} fill={isFavorite(book.id) ? 'currentColor' : 'none'} />
                </button>

                {/* Book Cover Area */}
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-[16px] bg-white/50 flex items-center justify-center p-4">
                  <motion.div
                    className="w-full h-full preserve-3d"
                    whileHover={{ rotateY: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-sm shadow-xl" />
                    {/* Spine highlight */}
                    <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/30 to-transparent" />
                  </motion.div>

                  {/* Subtle reflection */}
                  <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-white/20 to-transparent blur-sm" />
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-gold text-gold" />
                  ))}
                  <span className="text-[10px] text-[#0A1128]/60 ml-1">{book.rating}</span>
                </div>

                <h3 className="text-xl font-display text-[#0A1128] group-hover:text-gold transition-colors line-clamp-2 min-h-[56px] flex items-center justify-center">{book.title}</h3>
                <p className="text-sm font-serif italic text-[#0A1128]/60">by {book.author}</p>

                <div className="pt-4 flex flex-col items-center gap-4">
                  <p className="text-lg font-bold text-[#0A1128]">${book.price.toFixed(2)}</p>

                  {/* Button */}
                  <button
                    onClick={() => openModal(book)}
                    className="w-full bg-[#0A1128] text-white rounded-full px-6 py-3 border border-gold/30 hover:bg-blue-700 hover:text-white transition-all duration-500 text-xs font-bold uppercase tracking-widest shadow-[0_5px_15px_rgba(10,17,40,0.1)] hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBookForModal && (
        <BookDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          book={selectedBookForModal}
        />
      )}
    </section>
  );
}

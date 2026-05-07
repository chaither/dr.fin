import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Heart, Star } from 'lucide-react';
import { Book } from '../types';

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  onAddToCart: () => void;
}

export default function BookDetailsModal({ isOpen, onClose, book, onAddToCart }: BookDetailsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-paper shadow-2xl z-[101] border-t-4 border-gold overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-espresso/40 hover:text-espresso transition-colors z-20 bg-white/50 backdrop-blur-sm p-1 rounded-full">
              <X size={20} />
            </button>
            
            <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-auto overflow-hidden">
              <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xs text-gold uppercase tracking-widest font-bold">{book.genre}</p>
                  <span className="text-espresso/20">•</span>
                  <div className="flex items-center gap-1 text-xs text-espresso/60">
                    <Star size={12} className="fill-gold text-gold" />
                    <span>{book.rating}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-display text-espresso mb-2">{book.title}</h2>
                <p className="text-espresso/60 font-serif italic mb-4">by {book.author}</p>
                <p className="text-lg font-medium text-espresso mb-6">${book.price.toFixed(2)}</p>
                
                <div className="border-t border-b border-espresso/10 py-6 mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso mb-3">Synopsis</h3>
                  <p className="text-espresso/80 leading-relaxed font-serif text-sm">
                    {book.description}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <button 
                  onClick={() => {
                    onAddToCart();
                    onClose();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-espresso text-cream p-4 hover:bg-ink transition-colors font-medium tracking-wide"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center bg-white border border-espresso/10 p-4 hover:bg-cream transition-colors text-espresso">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

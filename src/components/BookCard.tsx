import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Book } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import AuthModal from './AuthModal';
import BookDetailsModal from './BookDetailsModal';

interface BookCardProps {
  book: Book;
  index: number;
  key?: string;
}

export function BookCard({ book, index }: BookCardProps) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleAddToCart = async () => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    await addToCart(book.id);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <div className="relative aspect-[3/4] mb-6 perspective-1000">
          <motion.div
            whileHover={{ rotateY: -15, x: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full h-full preserve-3d cursor-pointer"
            onClick={() => setIsDetailsOpen(true)}
          >
            <img 
              src={book.image} 
              alt={book.title}
              className="w-full h-full object-cover rounded-r-md book-shadow transition-shadow group-hover:shadow-2xl"
            />
            
            <div className="absolute inset-y-0 -left-1 w-2 bg-gradient-to-r from-white/30 to-transparent z-10" />
          </motion.div>
          
          {book.price > 40 && (
            <div className="absolute top-4 left-4 z-30">
              <span className="bg-gold text-espresso text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter shadow-lg">
                Collectors Edition
              </span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] text-gold uppercase tracking-widest font-bold">{book.genre}</p>
            <div className="flex items-center gap-1 text-[10px] text-espresso/40">
              <Star size={10} className="fill-gold text-gold" />
              <span>{book.rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-display text-espresso group-hover:text-gold transition-colors truncate">{book.title}</h3>
          <p className="text-sm italic font-serif text-espresso/60">{book.author}</p>
          
          <div className="flex items-center justify-between pt-2">
            <p className="text-lg font-medium text-espresso">${book.price.toFixed(2)}</p>
            <div className="flex items-center gap-1">
              <button className="p-2 text-espresso/40 hover:text-vintage-red hover:bg-vintage-red/10 rounded-full transition-all">
                <Heart size={18} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className="p-2 text-cream bg-espresso hover:bg-gold hover:text-espresso rounded-full transition-all shadow-sm hover:shadow-md ml-1"
                title="Add to Cart"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <BookDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        book={book} 
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

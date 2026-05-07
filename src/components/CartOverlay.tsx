import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartOverlay({ isOpen, onClose, onCheckout }: CartOverlayProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const { user } = useAuth();


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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-paper shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 border-b border-espresso/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-gold" />
                <h2 className="text-2xl font-display text-espresso">Your Bag</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-espresso/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 italic font-serif">
                  <ShoppingBag size={48} className="mb-4" />
                  <p>Your bag is waiting for a story.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.bookId} className="flex gap-4">
                    <div className="w-20 aspect-[3/4] bg-espresso rounded-sm overflow-hidden shrink-0">
                      <img src={item.book?.image} alt={item.book?.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-espresso font-display truncate">{item.book?.title}</h4>
                      <p className="text-xs text-espresso/60 italic font-serif truncate">{item.book?.author}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 border border-espresso/10 rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.bookId, -1)}
                            disabled={item.quantity <= 1}
                            className="p-1 hover:text-gold disabled:opacity-20"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.bookId, 1)}
                            className="p-1 hover:text-gold"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-espresso">${((item.book?.price || 0) * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.bookId)}
                      className="p-2 text-espresso/20 hover:text-vintage-red transition-colors self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-cream border-t border-espresso/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-espresso/60 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-xl font-display text-espresso">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full bg-espresso text-cream py-4 hover:bg-ink transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs"
                >
                  <CreditCard size={18} />
                  Proceed to Checkout
                </button>
                <p className="text-[10px] text-center text-espresso/40 uppercase tracking-tighter">
                  Complimentary luxury wrapping included with every order.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

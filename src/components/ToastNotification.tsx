import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, X } from 'lucide-react';

export default function ToastNotification() {
  const { toast, hideToast } = useCart();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-[150] bg-espresso text-cream shadow-2xl p-4 flex items-center gap-4 max-w-sm w-full"
        >
          {toast.image ? (
            <div className="w-12 h-16 bg-cream/10 shrink-0 overflow-hidden shadow-inner">
              <img src={toast.image} alt={toast.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-16 bg-cream/10 flex items-center justify-center shrink-0">
              <ShoppingBag className="text-gold" />
            </div>
          )}
          
          <div className="flex-grow min-w-0 pr-2">
            <p className="text-[10px] text-gold uppercase tracking-widest font-bold mb-1">Added to Library</p>
            <h4 className="text-sm font-display truncate">{toast.title}</h4>
          </div>

          <button 
            onClick={hideToast}
            className="p-2 hover:bg-cream/10 rounded-full transition-colors text-cream/60 hover:text-white shrink-0"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

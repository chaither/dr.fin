import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn } from 'lucide-react';
import { signInWithPopup, auth, googleProvider } from '../lib/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (error: any) {
      console.error('Login failed:', error);
      setError(error.message || 'Failed to log in with Google');
    }
  };

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-paper p-8 shadow-2xl z-[101] border-t-4 border-gold"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-espresso/40 hover:text-espresso transition-colors">
              <X size={20} />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display text-espresso mb-2">Welcome to <span className="text-gold">Fin Books</span></h2>
              <p className="text-espresso/60 font-serif italic text-sm">Join our sanctuary of stories and begin your journey.</p>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <button 
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 bg-white border border-espresso/10 p-4 hover:bg-cream transition-colors text-espresso font-medium"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>
              
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-espresso/5"></div></div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-paper px-2 text-espresso/30">Library Member Access</span></div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-espresso text-cream p-4 hover:bg-ink transition-colors font-medium">
                <LogIn size={18} />
                Stay Updated
              </button>
            </div>
            
            <p className="text-[10px] text-espresso/40 text-center mt-8 uppercase tracking-widest leading-relaxed">
              By entering, you agree to our terms of conduct and privacy protocols.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

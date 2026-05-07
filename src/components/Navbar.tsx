import { motion } from 'motion/react';
import { Search, ShoppingCart, User, Heart, Menu, Globe, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { signOut, auth } from '../lib/firebase';
import AuthModal from './AuthModal';
import CartOverlay from './CartOverlay';
import CheckoutModal from './CheckoutModal';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const { items } = useCart();
  const [showLangs, setShowLangs] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'العربية' },
    { code: 'sw', label: 'Kiswahili' }
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangs(false);
    document.dir = code === 'ar' ? 'rtl' : 'ltr';
  };

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'categories', label: t('nav.categories') },
    { key: 'bestSellers', label: t('nav.bestSellers') },
    { key: 'authors', label: t('nav.authors') },
    { key: 'journal', label: t('nav.journal') },
  ];

  return (
    <>
      <nav className="glass-navbar px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter text-espresso flex items-center gap-2"
          >
            <span className="text-gold"> DR.FINNIAN</span> BOOKS
          </motion.div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-espresso/80 hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <button
              onClick={() => setShowLangs(!showLangs)}
              className="p-2 hover:bg-espresso/5 rounded-full transition-colors text-espresso flex items-center gap-1"
            >
              <Globe size={20} />
              <span className="text-[10px] font-bold uppercase">{i18n.language.split('-')[0]}</span>
            </button>

            {showLangs && (
              <div className="absolute top-full right-0 mt-2 bg-cream border border-espresso/10 p-2 shadow-xl z-50 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-3 py-2 text-xs hover:bg-gold/10 transition-colors ${i18n.language === lang.code ? 'text-gold font-bold' : 'text-espresso'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="p-2 hover:bg-espresso/5 rounded-full transition-colors text-espresso">
            <Search size={20} />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-espresso/5 rounded-full transition-colors text-espresso relative"
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
            )}
          </button>

          <div className="h-6 w-[1px] bg-espresso/10 hidden sm:block mx-1" />

          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <p className="text-[10px] font-bold uppercase text-gold tracking-widest">{t('account') || 'Member'}</p>
                <p className="text-xs text-espresso/60 truncate max-w-[100px]">{user.displayName || user.email}</p>
              </div>
              <button
                onClick={() => signOut(auth)}
                className="p-2 hover:bg-espresso/5 rounded-full transition-colors text-espresso/40 hover:text-vintage-red"
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-4 py-2 border border-espresso/20 text-espresso text-xs font-bold uppercase tracking-widest hover:bg-espresso hover:text-cream transition-all hidden sm:block"
            >
              Log In
            </button>
          )}

          <button className="lg:hidden p-2 text-espresso">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <CartOverlay 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
}

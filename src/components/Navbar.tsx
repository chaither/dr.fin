import { motion } from 'motion/react';
import { Search, Heart, Menu, Globe, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { signOut, auth } from '../lib/firebase';
import AuthModal from './AuthModal';
import { getBooks } from '../constants';
import { Book } from '../types';
import BookDetailsModal from './BookDetailsModal';
import { useFavorites } from '../context/FavoritesContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  
  const books = getBooks(i18n.language);

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
    { key: 'authors', label: t('nav.authors') },
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
        </div>

        <div className="flex items-center gap-5">
          {/* Nav Items moved to the right */}
          <div className="hidden lg:flex items-center gap-6 mr-4">
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href="#"
                onClick={(e) => {
                  if (item.key === 'authors') {
                    e.preventDefault();
                    document.getElementById('author-spotlight')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (item.key === 'categories') {
                    e.preventDefault();
                    document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center gap-2 border border-espresso/10 rounded-full px-3 py-1 bg-cream/50">
              <Search size={16} className="text-espresso/60" />
              <input 
                type="text" 
                placeholder="Search books..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-espresso w-24 focus:w-40 transition-all"
              />
            </div>
            
            {searchQuery && (
              <div className="absolute top-full right-0 mt-2 bg-cream border border-espresso/10 p-2 shadow-xl z-50 min-w-[200px] max-h-[300px] overflow-y-auto">
                {books
                  .filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(book => (
                    <button
                      key={book.id}
                      onClick={() => {
                        setSelectedBook(book);
                        setSearchQuery('');
                      }}
                      className="block w-full text-left px-3 py-2 text-xs hover:bg-gold/10 transition-colors text-espresso truncate"
                    >
                      {book.title}
                    </button>
                  ))}
                {books.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <p className="text-xs text-espresso/40 p-2 italic">No books found.</p>
                )}
              </div>
            )}
          </div>

          {/* Favorites Icon and Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowFavorites(!showFavorites)}
              className="relative p-2 hover:bg-espresso/5 rounded-full transition-colors text-espresso"
            >
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>

            {showFavorites && (
              <div className="absolute top-full right-0 mt-2 bg-cream border border-espresso/10 p-4 shadow-xl z-50 min-w-[300px] max-h-[400px] overflow-y-auto">
                <h3 className="font-display text-lg text-espresso mb-3">Your Favorites</h3>
                
                {favorites.length === 0 ? (
                  <p className="text-xs text-espresso/40 italic">No favorites yet.</p>
                ) : (
                  <div className="space-y-3">
                    {favorites.map(bookId => {
                      const book = books.find(b => b.id === bookId);
                      if (!book) return null;
                      return (
                        <div key={bookId} className="flex items-center gap-3 border-b border-espresso/5 pb-2 last:border-0">
                          <div className="w-10 h-14 flex-shrink-0 cursor-pointer" onClick={() => setSelectedBook(book)}>
                            <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-sm" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="text-sm font-medium text-espresso truncate cursor-pointer" onClick={() => setSelectedBook(book)}>{book.title}</h4>
                            <p className="text-xs text-espresso/60">{book.author}</p>
                          </div>
                          <button 
                            onClick={() => toggleFavorite(bookId)}
                            className="text-gold hover:text-gold/70 transition-colors"
                            title="Remove from favorites"
                          >
                            <Heart size={16} fill="currentColor" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

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
      
      {selectedBook && (
        <BookDetailsModal 
          isOpen={true} 
          onClose={() => setSelectedBook(null)} 
          book={selectedBook} 
        />
      )}
    </>
  );
}

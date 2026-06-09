import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import FeaturedVideo from './components/FeaturedVideo';
import ParallaxStory, { AuthorSpotlight } from './components/AuthorSpotlight';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import BackgroundMusic from './components/BackgroundMusic';


export default function App() {
  const { t } = useTranslation();

  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
              <Hero />

              {/* Quote Tape */}
              <div className="bg-gold py-3 overflow-hidden whitespace-nowrap border-y border-espresso/10">
                <motion.div
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-20"
                >
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-[10px] font-bold text-espresso uppercase tracking-[0.4em]">
                      New Arrivals • Limited Editions • Rare Finds • Vintage Literary Journals • Curated Collections
                    </span>
                  ))}
                </motion.div>
              </div>

              <BestSellers />
              <FeaturedVideo />
              <ParallaxStory />
              <AuthorSpotlight />

              {/* Newsletter Section */}
              <section className="py-24 px-6 lg:px-20 bg-paper">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto bg-espresso p-12 lg:p-20 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/30" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/30" />

                  <h2 className="text-4xl lg:text-6xl text-cream mb-6">{t('newsletter.title')} <span className="italic text-gold italic">{t('newsletter.titleAccent')}</span></h2>
                  <p className="text-beige/60 mb-10 text-lg font-serif italic max-w-xl mx-auto">
                    {t('newsletter.subtitle')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder={t('newsletter.placeholder')}
                      className="bg-beige/5 border border-beige/20 text-cream px-6 py-4 outline-none focus:border-gold transition-colors w-full"
                    />
                    <button className="px-10 py-4 bg-gold text-espresso font-bold uppercase tracking-widest text-xs hover:bg-gold/90 transition-colors">
                      {t('newsletter.button')}
                    </button>
                  </div>

                  <p className="text-[10px] text-beige/30 uppercase tracking-widest mt-8">
                    By subscribing, you agree to our privacy policy.
                  </p>
                </motion.div>
              </section>
            </main>

            <Footer />
            <BackgroundMusic />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

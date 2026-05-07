import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-cream pt-24 pb-12 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative shelf background */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-display font-bold tracking-tighter mb-6">
              <span className="text-gold">A</span>ETHERIA
            </h3>
            <p className="text-beige/60 text-sm italic font-serif leading-relaxed mb-8">
              "Books are a uniquely portable magic." We curate stories that inspire, challenge, and transport you to worlds beyond your imagination.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-beige/10 hover:border-gold hover:text-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-beige/60">
              {['About Our Library', 'Membership', 'Gift Cards', 'Journal', 'Events Calendar'].map((link) => (
                <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-bold mb-8">Collections</h4>
            <ul className="space-y-4 text-sm text-beige/60">
              {['Rare Editions', 'Staff Picks', 'Bilingual Books', 'Poetry', 'Manuscripts'].map((link) => (
                <li key={link}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-bold mb-8">Subscribe to Our Letter</h4>
            <p className="text-sm text-beige/60 mb-6">Receive literary recommendations and event notices in your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-beige/5 border border-beige/10 py-3 px-4 text-sm outline-none w-full focus:border-gold/50 transition-colors"
              />
              <button className="bg-gold text-espresso px-4 hover:bg-gold/90 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-beige/5">
          <p className="text-[10px] text-beige/40 uppercase tracking-widest mb-4 md:mb-0">
            © {new Date().getFullYear()} Fin Books Sanctuary. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-beige/40 uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-gold transition-colors"
            >
              Back to Top
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

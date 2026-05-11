import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Star, Check, ChevronLeft, ChevronRight, ShieldCheck, Truck, Award, RotateCcw } from 'lucide-react';
import { Book } from '../types';
import bgImageModal from '../Pictures/new4.png';

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
}

export default function BookDetailsModal({ isOpen, onClose, book }: BookDetailsModalProps) {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Frosted Blurred Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/80 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl bg-cream rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-[101] border border-gold/20 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6 text-[#0A1128]/60 hover:text-[#0A1128] transition-colors z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-gold/10">
              <X size={20} />
            </button>

            {/* LEFT PANEL: BOOK SHOWCASE */}
            <div className="w-full md:w-1/2 relative overflow-hidden flex flex-col items-center justify-center p-12 text-cream min-h-[500px]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bgImageModal})` }}
                />
                <div className="absolute inset-0 bg-[#0A1128]/40" /> {/* Overlay for readability */}
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6 bg-gold/90 text-[#0A1128] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                {book.genre}
              </div>

              {/* Carousel Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gold z-20">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gold z-20">
                <ChevronRight size={24} />
              </button>

              {/* Massive 3D Book Mockup */}
              <div className="relative w-64 h-96 perspective-1000 z-10">
                <motion.div 
                  className="w-full h-full preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Front Cover */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-r-md shadow-2xl"
                    style={{ 
                      transform: 'translateZ(15px)',
                      backgroundImage: `url(${book.image})`, 
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="absolute inset-y-0 left-0 w-3 bg-black/30 blur-[1px]" />
                    <div className="absolute inset-y-0 left-3 w-1 bg-white/10" />
                  </div>
                  
                  {/* Back Cover */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-espresso rounded-l-md flex flex-col items-center justify-center p-6"
                    style={{ 
                      transform: 'translateZ(-15px) rotateY(180deg)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Minimal back cover design */}
                    <div className="border border-gold/30 w-full h-full flex flex-col items-center justify-center p-4 relative z-10">
                      <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Dr. Finnian Books</p>
                      <div className="w-8 h-[1px] bg-gold/50 mb-4" />
                      <p className="text-cream/80 text-xs font-serif text-center italic">{book.title}</p>
                    </div>
                  </div>

                  {/* Spine */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[30px] bg-espresso"
                    style={{ 
                      transform: 'translateX(-15px) rotateY(-90deg)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/20 via-white/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-cream/70 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ transform: 'rotateZ(-90deg)' }}>
                      {book.title.length > 20 ? book.title.substring(0, 20) + '...' : book.title}
                    </div>
                  </div>
                  
                  {/* Pages */}
                  <div 
                    className="absolute right-0 top-[3px] bottom-[3px] w-[30px] bg-beige"
                    style={{ 
                      transform: 'translateX(15px) rotateY(90deg)',
                      background: 'linear-gradient(to right, #f4ecd8, #e6dfd3)'
                    }}
                  >
                    <div className="w-full h-full bg-[linear-gradient(to_bottom,#d1c7bd_1px,transparent_1px)] bg-[size:100%_3px]" />
                  </div>
                </motion.div>
                
                {/* Marble Podium simulation */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-gradient-to-r from-gold/20 via-cream/30 to-gold/20 blur-sm rounded-full" />
              </div>

            </div>

            {/* RIGHT PANEL: BOOK DETAILS */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-between overflow-y-auto bg-cream">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-xs text-gold uppercase tracking-widest font-bold">First Edition</p>
                  <span className="text-espresso/20">•</span>
                  <div className="flex items-center gap-1 text-xs text-espresso/60">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-gold text-gold" />
                    ))}
                    <span className="ml-1">{book.rating}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-display text-[#0A1128] mb-2 leading-tight">{book.title}</h2>
                <p className="text-espresso/60 font-serif italic mb-6">by {book.author}</p>

                <div className="w-full h-[1px] bg-gold/20 mb-6" />

                {/* About Section */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A1128]">About the Work</h3>
                  <p className="text-espresso/80 leading-relaxed font-serif text-sm max-h-[150px] overflow-y-auto">
                    {book.description}
                  </p>
                </div>

                {/* Bullet point features */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-sm text-espresso/80 font-serif">
                    <Check size={14} className="text-gold" />
                    <span>Premium linen hardbound cover</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-espresso/80 font-serif">
                    <Check size={14} className="text-gold" />
                    <span>Gold foil title lettering</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-espresso/80 font-serif">
                    <Check size={14} className="text-gold" />
                    <span>Archival quality acid-free paper</span>
                  </div>
                </div>
              </div>

              {/* PRICE & CTA SECTION */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-espresso/40 uppercase tracking-widest mb-1">Price</span>
                    <span className="text-3xl font-bold text-[#0A1128]">${book.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-green-600 font-bold uppercase tracking-widest">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    In Stock (Limited)
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={book.stripeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#0A1128] text-white rounded-full px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-[#0A1128] transition-all duration-500 shadow-[0_5px_15px_rgba(10,17,40,0.1)] text-center"
                  >
                    Checkout Now
                  </a>
                 
                  <button className="p-4 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-[#0A1128]">
                    <Heart size={20} />
                  </button>
                </div>


              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

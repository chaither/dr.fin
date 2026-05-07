import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CreditCard, CheckCircle2, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = 'shipping' | 'payment' | 'success';

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: ''
  });

  const handleNext = () => {
    if (step === 'shipping') setStep('payment');
  };

  const handleBack = () => {
    if (step === 'payment') setStep('shipping');
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || items.length === 0) return;
    
    setIsProcessing(true);
    try {
      await addDoc(collection(db, 'orders'), {
        userId: user.uid,
        items: items.map(item => ({
          bookId: item.bookId,
          title: item.book?.title,
          price: item.book?.price,
          quantity: item.quantity
        })),
        total,
        shipping: shippingDetails,
        status: 'processing',
        createdAt: serverTimestamp()
      });
      
      await clearCart();
      setStep('success');
    } catch (error) {
      console.error('Checkout failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('shipping');
      setShippingDetails({ fullName: '', address: '', city: '', zip: '', country: '' });
      setPaymentDetails({ cardNumber: '', expiry: '', cvc: '', nameOnCard: '' });
    }, 500);
  };

  const inputClass = "w-full bg-transparent border-b border-espresso/20 text-espresso px-0 py-3 outline-none focus:border-gold transition-colors font-serif placeholder:italic placeholder:text-espresso/40";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex bg-paper"
        >
          {/* Close Button */}
          <button 
            onClick={handleClose} 
            className="absolute top-6 right-6 z-50 p-2 text-espresso mix-blend-difference hover:text-gold transition-colors"
          >
            <X size={24} />
          </button>

          {step === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-espresso text-cream"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mb-8"
              >
                <CheckCircle2 size={48} className="text-gold" />
              </motion.div>
              <h2 className="text-5xl font-display mb-4">Order Confirmed</h2>
              <p className="text-beige/60 font-serif italic text-xl max-w-lg mb-12">
                Thank you for your acquisition. Your literary journey is being prepared with the utmost care.
              </p>
              <button 
                onClick={handleClose}
                className="px-10 py-4 bg-gold text-espresso font-bold uppercase tracking-widest text-xs hover:bg-gold/90 transition-colors"
              >
                Return to Library
              </button>
            </motion.div>
          ) : (
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* Left Side - Forms */}
              <div className="w-full md:w-3/5 h-full overflow-y-auto p-8 md:p-16 lg:p-24">
                <div className="max-w-xl mx-auto">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between mb-16 relative">
                    <div className="absolute left-0 top-1/2 w-full h-[1px] bg-espresso/10 -z-10" />
                    <div className="flex flex-col items-center gap-2 bg-paper px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 'shipping' ? 'bg-gold text-espresso' : 'bg-espresso text-cream'}`}>1</div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-espresso">Shipping</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-paper px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 'payment' ? 'bg-gold text-espresso' : 'bg-espresso/20 text-espresso'}`}>2</div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-espresso">Payment</span>
                    </div>
                  </div>

                  {/* Forms */}
                  <AnimatePresence mode="wait">
                    {step === 'shipping' && (
                      <motion.form 
                        key="shipping"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={(e) => { e.preventDefault(); handleNext(); }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-3 mb-8">
                          <MapPin className="text-gold" size={24} />
                          <h2 className="text-3xl font-display text-espresso">Shipping Address</h2>
                        </div>
                        
                        <div className="space-y-6">
                          <input 
                            required
                            type="text" 
                            placeholder="Full Name" 
                            className={inputClass}
                            value={shippingDetails.fullName}
                            onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})}
                          />
                          <input 
                            required
                            type="text" 
                            placeholder="Street Address" 
                            className={inputClass}
                            value={shippingDetails.address}
                            onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
                          />
                          <div className="grid grid-cols-2 gap-6">
                            <input 
                              required
                              type="text" 
                              placeholder="City" 
                              className={inputClass}
                              value={shippingDetails.city}
                              onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                            />
                            <input 
                              required
                              type="text" 
                              placeholder="ZIP / Postal Code" 
                              className={inputClass}
                              value={shippingDetails.zip}
                              onChange={(e) => setShippingDetails({...shippingDetails, zip: e.target.value})}
                            />
                          </div>
                          <input 
                            required
                            type="text" 
                            placeholder="Country" 
                            className={inputClass}
                            value={shippingDetails.country}
                            onChange={(e) => setShippingDetails({...shippingDetails, country: e.target.value})}
                          />
                        </div>

                        <button 
                          type="submit"
                          className="mt-12 w-full bg-espresso text-cream py-5 hover:bg-ink transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs"
                        >
                          Continue to Payment <ArrowRight size={16} />
                        </button>
                      </motion.form>
                    )}

                    {step === 'payment' && (
                      <motion.form 
                        key="payment"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={handlePlaceOrder}
                        className="space-y-8"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-3">
                            <CreditCard className="text-gold" size={24} />
                            <h2 className="text-3xl font-display text-espresso">Payment Details</h2>
                          </div>
                          <button type="button" onClick={handleBack} className="text-xs uppercase tracking-widest font-bold text-espresso/60 hover:text-espresso flex items-center gap-2">
                            <ArrowLeft size={14} /> Back
                          </button>
                        </div>
                        
                        <div className="p-6 border border-espresso/10 bg-white/50 mb-8 flex flex-col gap-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs uppercase tracking-widest font-bold text-espresso/60">Credit Card</span>
                            <ShieldCheck className="text-gold" size={20} />
                          </div>
                          
                          <input 
                            required
                            type="text" 
                            placeholder="Card Number" 
                            className={inputClass}
                            maxLength={19}
                            value={paymentDetails.cardNumber}
                            onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                          />
                          <div className="grid grid-cols-2 gap-6">
                            <input 
                              required
                              type="text" 
                              placeholder="MM/YY" 
                              className={inputClass}
                              maxLength={5}
                              value={paymentDetails.expiry}
                              onChange={(e) => setPaymentDetails({...paymentDetails, expiry: e.target.value})}
                            />
                            <input 
                              required
                              type="text" 
                              placeholder="CVC" 
                              className={inputClass}
                              maxLength={4}
                              value={paymentDetails.cvc}
                              onChange={(e) => setPaymentDetails({...paymentDetails, cvc: e.target.value})}
                            />
                          </div>
                          <input 
                            required
                            type="text" 
                            placeholder="Name on Card" 
                            className={inputClass}
                            value={paymentDetails.nameOnCard}
                            onChange={(e) => setPaymentDetails({...paymentDetails, nameOnCard: e.target.value})}
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={isProcessing}
                          className="w-full bg-gold text-espresso py-5 hover:bg-gold/90 transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs disabled:opacity-50"
                        >
                          {isProcessing ? 'Processing Order...' : `Pay $${total.toFixed(2)}`}
                        </button>
                        <p className="text-[10px] text-center text-espresso/40 uppercase tracking-widest mt-4">
                          Payments are secure and encrypted.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Side - Order Summary */}
              <div className="w-full md:w-2/5 h-full bg-espresso text-cream p-8 md:p-12 lg:p-16 flex flex-col">
                <h3 className="text-2xl font-display mb-8 text-gold">Order Summary</h3>
                
                <div className="flex-grow overflow-y-auto space-y-6 pr-4 mb-8 custom-scrollbar">
                  {items.map((item) => (
                    <div key={item.bookId} className="flex gap-4">
                      <div className="w-16 aspect-[3/4] bg-espresso-light overflow-hidden shrink-0">
                        <img src={item.book?.image} alt={item.book?.title} className="w-full h-full object-cover opacity-80" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-cream font-display truncate">{item.book?.title}</h4>
                        <p className="text-xs text-beige/60 italic font-serif truncate">{item.book?.author}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-beige/40">Qty: {item.quantity}</span>
                          <span className="text-sm font-bold">${((item.book?.price || 0) * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-cream/10 pt-6 space-y-4">
                  <div className="flex items-center justify-between text-beige/60 text-sm">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-beige/60 text-sm">
                    <span className="flex items-center gap-2">Shipping <Truck size={14} className="text-gold" /></span>
                    <span className="text-gold italic font-serif">Complimentary</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                    <span className="text-sm uppercase tracking-widest font-bold">Total</span>
                    <span className="text-3xl font-display text-gold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

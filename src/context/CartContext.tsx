import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  collection, 
  onSnapshot, 
  setDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  increment,
  query,
  writeBatch
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';
import { Book } from '../types';
import { getBooks } from '../constants';
import { useTranslation } from 'react-i18next';

interface CartItem {
  bookId: string;
  quantity: number;
  book?: Book;
}

export interface ToastItem {
  id: string;
  title: string;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (bookId: string) => Promise<void>;
  removeFromCart: (bookId: string) => Promise<void>;
  updateQuantity: (bookId: string, delta: number) => Promise<void>;
  clearCart: () => Promise<void>;
  total: number;
  toast: ToastItem | null;
  hideToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<ToastItem | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!user) {
      setItems([]);
      return;
    }

    const cartRef = collection(db, 'users', user.uid, 'cart');
    const q = query(cartRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cartData: CartItem[] = [];
      const books = getBooks(i18n.language);
      snapshot.forEach((doc) => {
        const data = doc.data();
        const book = books.find(b => b.id === data.bookId);
        cartData.push({ 
          bookId: data.bookId, 
          quantity: data.quantity,
          book 
        });
      });
      setItems(cartData);
    });

    return unsubscribe;
  }, [user, i18n.language]);

  const addToCart = async (bookId: string) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'cart', bookId);
    await setDoc(itemRef, {
      bookId,
      quantity: increment(1)
    }, { merge: true });

    const books = getBooks(i18n.language);
    const book = books.find(b => b.id === bookId);
    if (book) {
      setToast({ id: Date.now().toString(), title: book.title, image: book.image });
      setTimeout(() => setToast(null), 3000);
    }
  };

  const hideToast = () => setToast(null);

  const removeFromCart = async (bookId: string) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'cart', bookId);
    await deleteDoc(itemRef);
  };

  const updateQuantity = async (bookId: string, delta: number) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'cart', bookId);
    await updateDoc(itemRef, {
      quantity: increment(delta)
    });
  };

  const clearCart = async () => {
    if (!user) return;
    const batch = writeBatch(db);
    items.forEach((item) => {
      const itemRef = doc(db, 'users', user!.uid, 'cart', item.bookId);
      batch.delete(itemRef);
    });
    await batch.commit();
  };

  const total = items.reduce((acc, item) => {
    return acc + (item.book?.price || 0) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total, toast, hideToast }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

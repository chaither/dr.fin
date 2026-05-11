import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  collection, 
  onSnapshot, 
  setDoc, 
  deleteDoc, 
  doc, 
  query
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

interface FavoritesContextType {
  favorites: string[]; // array of book IDs
  toggleFavorite: (bookId: string) => Promise<void>;
  isFavorite: (bookId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const favoritesRef = collection(db, 'users', user.uid, 'favorites');
    const q = query(favoritesRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favData: string[] = [];
      snapshot.forEach((doc) => {
        favData.push(doc.id); // Assuming doc ID is the book ID
      });
      setFavorites(favData);
    });

    return unsubscribe;
  }, [user]);

  const toggleFavorite = async (bookId: string) => {
    if (!user) return;
    const itemRef = doc(db, 'users', user.uid, 'favorites', bookId);
    
    if (favorites.includes(bookId)) {
      await deleteDoc(itemRef);
    } else {
      await setDoc(itemRef, { bookId });
    }
  };

  const isFavorite = (bookId: string) => favorites.includes(bookId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

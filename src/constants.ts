import { Book, Category, Author } from './types';

// Import local images eagerly
const englishImages = Object.values(import.meta.glob('./Pictures/ENGLISH/*.jpg', { eager: true, import: 'default' })) as string[];
const frenchImages = Object.values(import.meta.glob('./Pictures/FRENCH/*.jpg', { eager: true, import: 'default' })) as string[];
const spanishImages = Object.values(import.meta.glob('./Pictures/SPANISH/*.jpg', { eager: true, import: 'default' })) as string[];
const arabicImages = Object.values(import.meta.glob('./Pictures/ARABIC/*.jpg', { eager: true, import: 'default' })) as string[];
const swahiliImages = Object.values(import.meta.glob('./Pictures/SWAHILI/*.jpg', { eager: true, import: 'default' })) as string[];

const languageImages: Record<string, string[]> = {
  en: englishImages,
  fr: frenchImages,
  es: spanishImages,
  ar: arabicImages,
  sw: swahiliImages
};

const defaultImages = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1543004218-ee1411043384?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
];

export const getBooks = (lang: string = 'en'): Book[] => {
  const images = languageImages[lang] && languageImages[lang].length > 0 ? languageImages[lang] : defaultImages;

  const baseBooks = [
    { title: 'Who is this Jesus Christ? The Power of the Cross', author: 'Dr. Finnian Ebuehi', price: 18.99, rating: 4.8, genre: 'Theology', description: 'A deep dive into the identity of Jesus Christ and the transformative power of the cross.' },
    { title: 'Shattered and Consumed by the Holy Spirit', author: 'Dr. Finnian Ebuehi', price: 15.50, rating: 4.9, genre: 'Spiritual', description: 'An exploration of a life completely surrendered to and transformed by the fire of the Holy Spirit.' },
    { title: 'The Jezebel Spirit, The Ahab Spirit, And You.', author: 'Dr. Finnian Ebuehi', price: 17.99, rating: 4.7, genre: 'Christian Living', description: 'A practical guide to identifying, confronting, and overcoming destructive spiritual influences in your life.' },
    { title: 'Trauma Dilemma: Healing the Hurt, Restoring the Soul', author: 'Dr. Finnian Ebuehi', price: 19.99, rating: 4.9, genre: 'Healing', description: 'A compassionate approach to overcoming trauma, healing deep emotional wounds, and finding that victory is possible.' },
    { title: 'Maranatha: A Transformative Journey', author: 'Dr. Finnian Ebuehi', price: 16.50, rating: 4.8, genre: 'Faith', description: 'A transformative journey of faith, hope, and victory in Christ as we await His glorious return.' },
    { title: 'The Valley of Dry Bones', author: 'Dr. Finnian Ebuehi', price: 14.99, rating: 4.6, genre: 'Prophetic', description: 'Drawing inspiration from Ezekiel, this book explores how God brings life, revival, and restoration to dead situations.' },
    { title: 'Spiritual Warfare', author: 'Dr. Finnian Ebuehi', price: 21.00, rating: 4.9, genre: 'Spiritual Warfare', description: 'Arm yourself with biblical strategies to stand firm against spiritual attacks and secure your victory.' },
    { title: 'The Way Down is the Way Up', author: 'Dr. Finnian Ebuehi', price: 12.99, rating: 4.7, genre: 'Christian Living', description: 'Discover the profound biblical paradox that true humility and surrender are the pathways to spiritual elevation.' },
    { title: 'Grieving. Bereavement. & Dying.', author: 'Dr. Finnian Ebuehi', price: 18.50, rating: 4.8, genre: 'Comfort', description: 'A comforting and biblical guide through the difficult seasons of loss, mourning, and facing mortality.' },
    { title: 'Holy Spirit Calling: 40 Day Devotional', author: 'Dr. Finnian Ebuehi', price: 15.99, rating: 4.9, genre: 'Devotional', description: 'A 40-day devotional designed for children, youth, and families to grow together in the Holy Spirit.' },
    { title: 'Prayerless Prayers: Different Strokes', author: 'Dr. Finnian Ebuehi', price: 14.50, rating: 4.5, genre: 'Prayer', description: 'An eye-opening look into the nature of true prayer versus empty repetition, and how to connect genuinely with God.' },
    { title: 'Apologetics', author: 'Dr. Finnian Ebuehi', price: 22.99, rating: 4.8, genre: 'Apologetics', description: 'A practical guide to defending your faith with truth, love, and wisdom in a challenging world.' },
    { title: 'Nuggets of Faith: The Main Thing', author: 'Dr. Finnian Ebuehi', price: 13.99, rating: 4.6, genre: 'Inspirational', description: 'Bite-sized, powerful insights to keep your focus on what truly matters in your daily walk of faith.' }
  ];

  return images.map((image, index) => {
    const base = baseBooks[index % baseBooks.length];
    return {
      id: String(index + 1),
      title: base.title,
      author: base.author,
      price: base.price,
      rating: base.rating,
      genre: base.genre,
      image: image,
      description: base.description
    };
  });
};

export const BOOKS: Book[] = getBooks('en');

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Fiction', count: 1250, image: 'https://images.unsplash.com/photo-1474932430478-3a7fb9085ec4?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Mystery', count: 840, image: 'https://images.unsplash.com/photo-1587876222916-d410d851f61b?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Classic', count: 320, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Science', count: 560, image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Art', count: 210, image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'History', count: 480, image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=400' },
];

export const AUTHORS: Author[] = [
  {
    id: '1',
    name: 'Virginia Woolf',
    bio: 'One of the most important modernist 20th-century authors and a pioneer in the use of stream of consciousness.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400',
    books: ['To the Lighthouse', 'Mrs Dalloway', 'Orlando']
  }
];

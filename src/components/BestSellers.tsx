import { BookCard } from './BookCard';
import { getBooks } from '../constants';
import { useTranslation } from 'react-i18next';

export default function BestSellers() {
  const { t, i18n } = useTranslation();
  const books = getBooks(i18n.language);
  return (
    <section className="py-24 px-6 lg:px-20 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-espresso mb-4">{t('bestSellers.title')} <span className="italic text-gold">{t('bestSellers.titleAccent')}</span></h2>
          <p className="text-espresso/60 max-w-2xl mx-auto font-serif italic">
            {t('bestSellers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {books.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

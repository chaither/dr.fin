import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { useTranslation } from 'react-i18next';

export default function Categories() {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 lg:px-20 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-md">
            <h2 className="text-4xl lg:text-5xl text-espresso mb-4">{t('categories.title')} <span className="italic text-gold">{t('categories.titleAccent')}</span></h2>
            <p className="text-espresso/60 font-serif italic">{t('categories.subtitle')}</p>
          </div>
          <button className="text-espresso font-medium border-b border-gold pb-1 hover:text-gold transition-colors text-sm uppercase tracking-widest">
            {t('categories.viewAll')}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-sm">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/60 to-transparent">
                  <span className="text-cream text-[10px] uppercase tracking-widest font-bold">
                    {category.count} Books
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-display text-espresso group-hover:text-gold transition-colors">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        categories: 'Collections',
        bestSellers: 'Best Sellers',
        authors: 'Authors',
        journal: 'Journal'
      },
      hero: {

        titlePart1: 'Stories that',
        titlePart2: 'Inspire.',
        titlePart3: 'Truth that',
        titlePart4: 'Transforms.',
        subtitle: 'Timeless books for a life of faith, hope, healing, and purpose.',
        explore: 'Explore Collections',
        ourStory: 'Our Story'
      },
      categories: {
        title: 'Explore by',
        titleAccent: 'Genre',
        subtitle: 'Every genre holds a different universe waiting to be discovered.',
        viewAll: 'View All Categories'
      },
      bestSellers: {
        title: 'Timeless',
        titleAccent: 'Masterpieces',
        subtitle: 'Curating the finest literature that has stood the test of time.'
      },
      newsletter: {
        title: 'Join the',
        titleAccent: 'Inner Circle',
        subtitle: 'Subscribe to the Fin Books Chronicle for exclusive author interviews.',
        placeholder: 'Your email address',
        button: 'Subscribe'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        categories: 'Catégories',
        bestSellers: 'Meilleures Ventes',
        authors: 'Auteurs',
        journal: 'Journal'
      },
      hero: {
        est: 'Établi en 1924 • Sélection Premium',
        titlePart1: 'Où les Histoires',
        titlePart2: 'Prennent Vie',
        quote: '"Une bibliothèque n\'est pas un luxe mais une des nécessités de la vie."',
        subtitle: 'Découvrez un monde littéraire sélectionné dans notre sanctuaire numérique immersif.',
        explore: 'Explorer les Collections',
        ourStory: 'Notre Histoire'
      },
      categories: {
        title: 'Explorer par',
        titleAccent: 'Genre',
        subtitle: 'Chaque genre cache un univers différent qui n\'attend que d\'être découvert.',
        viewAll: 'Voir Toutes les Catégories'
      },
      bestSellers: {
        title: 'Chefs-d\'œuvre',
        titleAccent: 'Intemporels',
        subtitle: 'Sélection de la meilleure littérature qui a résisté à l\'épreuve du temps.'
      },
      newsletter: {
        title: 'Rejoindre le',
        titleAccent: 'Cercle Privé',
        subtitle: 'Abonnez-vous à la Chronique Fin Books pour des interviews exclusives d\'auteurs.',
        placeholder: 'Votre adresse e-mail',
        button: 'S\'abonner'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        categories: 'Categorías',
        bestSellers: 'Más Vendidos',
        authors: 'Autores',
        journal: 'Diario'
      },
      hero: {
        est: 'Est. 1924 • Curaduría Premium',
        titlePart1: 'Donde las Historias',
        titlePart2: 'Cobran Vida',
        quote: '"Una biblioteca no es un lujo sino una de las necesidades de la vida."',
        subtitle: 'Descubre un mundo curado de literatura en nuestro santuario digital inmersivo.',
        explore: 'Explorar Colecciones',
        ourStory: 'Nuestra Historia'
      },
      categories: {
        title: 'Explorar por',
        titleAccent: 'Género',
        subtitle: 'Cada género contiene un universo diferente esperando ser descubierto.',
        viewAll: 'Ver Todas las Categorías'
      },
      bestSellers: {
        title: 'Obras Maestras',
        titleAccent: 'Eternas',
        subtitle: 'Curando la mejor literatura que ha resistido la prueba del tiempo.'
      },
      newsletter: {
        title: 'Únete al',
        titleAccent: 'Círculo Interno',
        subtitle: 'Suscríbete a la Crónica de Fin Books para entrevistas exclusivas con autores.',
        placeholder: 'Tu correo electrónico',
        button: 'Suscribirse'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        categories: 'الفئات',
        bestSellers: 'الأكثر مبيعاً',
        authors: 'المؤلفون',
        journal: 'المجلة'
      },
      hero: {
        est: 'تأسست عام ١٩٢٤ • تنسيق متميز',
        titlePart1: 'حيث القصص',
        titlePart2: 'تنبض بالحياة',
        quote: '"المكتبة ليست رفاهية بل هي واحدة من ضروريات الحياة."',
        subtitle: 'اكتشف عالماً منسقاً من الأدب في ملاذنا الرقمي الغامر.',
        explore: 'استكشف المجموعات',
        ourStory: 'قصتنا'
      }
    }
  },
  sw: {
    translation: {
      nav: {
        home: 'Nyumbani',
        categories: 'Kategoria',
        bestSellers: 'Zinazouzwa Zaidi',
        authors: 'Waandishi',
        journal: 'Jarida'
      },
      hero: {
        est: 'Iliyoanzishwa 1924 • Uteuzi wa Premium',
        titlePart1: 'Ambapo Hadithi',
        titlePart2: 'Huchanua',
        quote: '"Maktaba si anasa bali ni mojawapo ya mahitaji ya maisha."',
        subtitle: 'Gundua ulimwengu wa fasihi ulioteuliwa katika patakatifu petu paimara.',
        explore: 'Gundua Mikusanyiko',
        ourStory: 'Hadithi Yetu'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

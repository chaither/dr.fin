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
        title: 'Masterpiece Books',
        titleAccent: 'Books',
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
      },
      categories: {
        title: 'استكشف حسب',
        titleAccent: 'النوع',
        subtitle: 'كل نوع يحمل كوناً مختلفاً ينتظر من يكتشفه.',
        viewAll: 'عرض جميع الفئات'
      },
      bestSellers: {
        title: 'روائع',
        titleAccent: 'خالدة',
        subtitle: 'ننتقي أفضل الأدب الذي صمد أمام اختبار الزمن.'
      },
      newsletter: {
        title: 'انضم إلى',
        titleAccent: 'الدائرة الداخلية',
        subtitle: 'اشترك في سجل كتب فين للحصول على مقابلات حصرية مع المؤلفين.',
        placeholder: 'عنوان بريدك الإلكتروني',
        button: 'اشترك'
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
      },
      categories: {
        title: 'Gundua kwa',
        titleAccent: 'Aina',
        subtitle: 'Kila aina ina ulimwengu tofauti unaongojea kugunduliwa.',
        viewAll: 'Tazama Kategoria Zote'
      },
      bestSellers: {
        title: 'Kazi Bora',
        titleAccent: 'Zisizo na Wakati',
        subtitle: 'Kuratibu fasihi bora zaidi ambayo imestahimili mtihani wa wakati.'
      },
      newsletter: {
        title: 'Jiunge na',
        titleAccent: 'Mzunguko wa Ndani',
        subtitle: 'Jiandikishe kwa Fin Books Chronicle kwa mahojiano ya kipekee ya waandishi.',
        placeholder: 'Barua pepe yako',
        button: 'Jiandikishe'
      }
    }
  },
  ha: {
    translation: {
      nav: {
        home: 'Gida',
        categories: 'Rukuni',
        bestSellers: 'Mafi Sayarwa',
        authors: 'Mawallafa',
        journal: 'Jarida'
      },
      hero: {
        titlePart1: 'Labaran da ke',
        titlePart2: 'Girma.',
        titlePart3: 'Gaskiya ta',
        titlePart4: 'Sauya.',
        subtitle: 'Littattafai maras lokaci don rayuwar bangaskiya, fata, warkarwa, da manufa.',
        explore: 'Bincika Tari',
        ourStory: 'Labarinmu'
      },
      categories: {
        title: 'Bincika ta',
        titleAccent: 'Rukuni',
        subtitle: 'Kowane rukuni yana riƙe da wata duniya daban da ke jiran a gano ta.',
        viewAll: 'Duba Duk Rukuni'
      },
      bestSellers: {
        title: 'Ayyukan Gwaninta',
        titleAccent: 'Maras Lokaci',
        subtitle: 'Zaɓar mafi kyawun adabi wanda ya jure gwajin lokaci.'
      },
      newsletter: {
        title: 'Shiga',
        titleAccent: 'Da\'irar Ciki',
        subtitle: 'Yi rijista ga Fin Books Chronicle don keɓantattun tattaunawa da marubuta.',
        placeholder: 'Adireshin imel ɗinka',
        button: 'Yi rijista'
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

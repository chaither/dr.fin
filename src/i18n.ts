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
        titleAccent: '',
        subtitle: 'Curating the finest literature that has stood the test of time.'
      },
      featuredVideo: {
        title: 'Featured',
        titleAccent: 'Media',
        subtitle: 'Watch exclusive interviews, follow piano sessions, and engage with transforming broadcasts.',
        trackInterview: 'Dr. Finnian Ebuehi with Benji Cole',
        descInterview: 'An exclusive, in-depth conversation between Dr. Finnian Ebuehi and Benji Cole from CBS Radio, presented by ARPress. Discover the deep inspirations, personal journey, and empowering messages of faith, hope, healing, and purpose embedded within the author\'s masterpiece books.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'A beautiful piano transcription and sheet music for "Spirit Lead Me" by Hillsong United. Let this serene piano melody bring peace, guidance, and spiritual clarity to your soul.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'An emotional and stirring piano cover of "Nuvole Bianche" by Ludovico Einaudi. One of the most famous modern classical pieces, evoking feelings of nostalgia, hope, and raw beauty.',
        trackName: 'What a Beautiful Name',
        descName: 'A comforting and glorious piano cover of "What a Beautiful Name" by Hillsong Worship. Watch the sheet music guide you through the soaring chorus and tranquil verses of worship.',
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
      featuredVideo: {
        title: 'Médias',
        titleAccent: 'En Vedette',
        subtitle: 'Regardez des interviews exclusives, suivez des sessions de piano et découvrez des émissions inspirantes.',
        trackInterview: 'Dr. Finnian Ebuehi avec Benji Cole',
        descInterview: 'Une conversation exclusive et approfondie entre le Dr Finnian Ebuehi et Benji Cole de CBS Radio, présentée par ARPress. Découvrez les inspirations profondes, le parcours personnel et les messages encourageants de foi, d\'espoir, de guérison et de but intégrés dans les livres de l\'auteur.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'Une magnifique transcription pour piano et partition de "Spirit Lead Me" par Hillsong United. Laissez cette mélodie sereine apporter paix et clarté à votre âme.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'Une reprise de piano émouvante de "Nuvole Bianche" par Ludovico Einaudi. Une pièce classique moderne évoquant la nostalgie, l\'espoir et la beauté.',
        trackName: 'What a Beautiful Name',
        descName: 'Une reprise de piano réconfortante de "What a Beautiful Name" par Hillsong Worship. Regardez la partition vous guider à travers le refrain et les couplets.',
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
      featuredVideo: {
        title: 'Medios',
        titleAccent: 'Destacados',
        subtitle: 'Vea entrevistas exclusivas, siga sesiones de piano y participe con transmisiones transformadoras.',
        trackInterview: 'Dr. Finnian Ebuehi con Benji Cole',
        descInterview: 'Una conversación exclusiva y profunda entre el Dr. Finnian Ebuehi y Benji Cole de CBS Radio, presentada por ARPress. Descubra las profundas inspiraciones, el viaje personal y los mensajes de fe, esperanza, sanación y propósito plasmados en los libros del autor.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'Una hermosa transcripción de piano y partitura de "Spirit Lead Me" por Hillsong United. Deja que esta serena melodía de piano traiga paz y claridad espiritual a tu alma.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'Una emotiva versión de piano de "Nuvole Bianche" de Ludovico Einaudi. Una de las piezas clásicas modernas más famosas, que evoca nostalgia, esperanza y belleza.',
        trackName: 'What a Beautiful Name',
        descName: 'Una versión de piano reconfortante de "What a Beautiful Name" por Hillsong Worship. Sigue la partitura a través del coro y los versos de adoración.',
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
      featuredVideo: {
        title: 'الوسائط',
        titleAccent: 'المميزة',
        subtitle: 'شاهد المقابلات الحصرية، وتابع جلسات البيانو، وتفاعل مع البث الملهم.',
        trackInterview: 'الدكتور فينيان إيبوهي مع بنجي كول',
        descInterview: 'محادثة حصرية ومتعمقة بين الدكتور فينيان إيبوهي وبنجي كول من راديو سي بي إس، بتقديم من إيه آر بريس. اكتشف الإلهامات العميقة والرحلة الشخصية ورسائل الإيمان والأمل والشفاء والغاية المضمنة في كتب المؤلف.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'عزف جميل على البيانو ونوتة موسيقية لأغنية "Spirit Lead Me" بواسطة Hillsong United. دع هذا اللحن الهادئ يجلب السلام لروحك.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'نسخة مؤثرة على البيانو لـ "Nuvole Bianche" للفنان لودوفيكو إيناودي. واحدة من أشهر المقطوعات الكلاسيكية الحديثة التي تثير مشاعر الأمل والجمال.',
        trackName: 'What a Beautiful Name',
        descName: 'نسخة مريحة ورائعة على البيانو لأغنية "What a Beautiful Name" بواسطة Hillsong Worship. شاهد النوتة الموسيقية وهي ترشدك للعبادة.',
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
      featuredVideo: {
        title: 'Vipindi vya',
        titleAccent: 'Habari na Ibada',
        subtitle: 'Tazama mahojiano ya kipekee, fuata vipindi vya piano, na ushiriki na matangazo yanayobadilisha maisha.',
        trackInterview: 'Dkt. Finnian Ebuehi akiwa na Benji Cole',
        descInterview: 'Mazungumzo ya kipekee na ya kina kati ya Dkt. Finnian Ebuehi na Benji Cole kutoka CBS Radio, yaliyowasilishwa na ARPress. Gundua msukumo wa ndani, safari ya kibinafsi, na ujumbe wa imani na tumaini uliopo katika vitabu vya mwandishi.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'Unukuzi mzuri wa piano na karatasi ya muziki ya "Spirit Lead Me" na Hillsong United. Acha sauti hii ya utulivu ya piano ilete amani na uwazi wa kiroho.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'Tafsiri ya kihisia ya piano ya "Nuvole Bianche" na Ludovico Einaudi. Moja ya nyimbo maarufu za kisasa za classical, zinazoamsha hisia za uzuri.',
        trackName: 'What a Beautiful Name',
        descName: 'Toleo la piano la kufariji la "What a Beautiful Name" na Hillsong Worship. Tazama karatasi ya muziki ikikuongoza kupitia kwaya.',
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
      featuredVideo: {
        title: 'Kade-kaden',
        titleAccent: 'Masu Muhimmanci',
        subtitle: 'Kalli tattaunawa ta musamman, saurari kade-kaden piano, kuma ku amfana da shirye-shirye masu kyau.',
        trackInterview: 'Dr. Finnian Ebuehi tare da Benji Cole',
        descInterview: 'Tattaunawa ta musamman tsakanin Dr. Finnian Ebuehi da Benji Cole na CBS Radio, wanda ARPress ya gabatar. Gano zurfafan wahayi, tafiyar rayuwa, da kuma saƙon bangaskiya da bege dake cikin littattafan marubucin.',
        trackSpirit: 'Spirit Lead Me',
        descSpirit: 'Kyakyawan sautin piano na "Spirit Lead Me" daga Hillsong United. Bari wannan sanyayyan sauti na piano ya kawo muku kwanciyar hangali.',
        trackNuvole: 'Nuvole Bianche',
        descNuvole: 'Wasan piano mai cike da nishadi na "Nuvole Bianche" na Ludovico Einaudi. Daya daga cikin fitattun kade-kaden zamani, yana motsa tunani na bege.',
        trackName: 'What a Beautiful Name',
        descName: 'Wasan piano mai sanyaya zuciya na "What a Beautiful Name" daga Hillsong Worship. Kalli takardar kida tana jagorantar ku.',
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

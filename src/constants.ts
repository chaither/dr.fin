import { Book, Category, Author } from './types';

// Import local images eagerly
const englishImagesGlob = import.meta.glob('./Pictures/ENGLISH/*.jpg', { eager: true, import: 'default' });
const frenchImagesGlob = import.meta.glob('./Pictures/FRENCH/*.jpg', { eager: true, import: 'default' });
const spanishImagesGlob = import.meta.glob('./Pictures/SPANISH/*.jpg', { eager: true, import: 'default' });
const arabicImagesGlob = import.meta.glob('./Pictures/ARABIC/*.jpg', { eager: true, import: 'default' });
const swahiliImagesGlob = import.meta.glob('./Pictures/SWAHILI/*.jpg', { eager: true, import: 'default' });
const hausaImagesGlob = import.meta.glob('./Pictures/HAUSA/*.jpg', { eager: true, import: 'default' });

const languageGlobs: Record<string, Record<string, any>> = {
  en: englishImagesGlob,
  fr: frenchImagesGlob,
  es: spanishImagesGlob,
  ar: arabicImagesGlob,
  sw: swahiliImagesGlob,
  ha: hausaImagesGlob
};

const defaultImages = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1543004218-ee1411043384?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
];

const bookKeywords = [
  'shattered', 'trauma', 'maranatha', 'valley', 'warfare', 'jesus christ',
  'way down', 'grieving', 'calling', 'prayerless', 'apologetics', 'nuggets', 'jezebel'
];

const bookMetadata: Record<string, { price: number, rating: number, genre: string }> = {
  shattered: { price: 18.99, rating: 4.8, genre: 'Theology' },
  trauma: { price: 15.50, rating: 4.9, genre: 'Spiritual' },
  maranatha: { price: 17.99, rating: 4.7, genre: 'Christian Living' },
  valley: { price: 19.99, rating: 4.9, genre: 'Healing' },
  warfare: { price: 16.50, rating: 4.8, genre: 'Faith' },
  'jesus christ': { price: 14.99, rating: 4.6, genre: 'Prophetic' },
  'way down': { price: 21.00, rating: 4.9, genre: 'Spiritual Warfare' },
  grieving: { price: 12.99, rating: 4.7, genre: 'Christian Living' },
  calling: { price: 18.50, rating: 4.8, genre: 'Comfort' },
  prayerless: { price: 15.99, rating: 4.9, genre: 'Devotional' },
  apologetics: { price: 14.50, rating: 4.5, genre: 'Prayer' },
  nuggets: { price: 22.99, rating: 4.8, genre: 'Apologetics' },
  jezebel: { price: 13.99, rating: 4.6, genre: 'Inspirational' }
};

const bookTranslations: Record<string, Record<string, { title: string, description: string }>> = {
  en: {
    shattered: { title: 'Shattered and Consumed by the Holy Spirit', description: 'An exploration of a life completely surrendered to and transformed by the fire of the Holy Spirit.' },
    trauma: { title: 'Trauma Dilemma: Healing the Hurt, Restoring the Soul', description: 'A compassionate approach to overcoming trauma, healing deep emotional wounds, and finding that victory is possible.' },
    maranatha: { title: 'Maranatha: A Transformative Journey', description: 'A transformative journey of faith, hope, and victory in Christ as we await His glorious return.' },
    valley: { title: 'The Valley of Dry Bones', description: 'Drawing inspiration from Ezekiel, this book explores how God brings life, revival, and restoration to dead situations.' },
    warfare: { 
      title: 'Spiritual Warfare', 
      description: `This book exposed Satan's war as primarily waged over his lust for God's glory.
Since we are made in God's image, are the representative of God on earth, and have the potential for eternal glory, humankind has become the target of the devil's envy and the battle has shifted from heaven to earth.
GiddyMedia.

This book demonstrated to believers in Christ that the decisive battle has already been fought and won at the Cross. The resurrection followed immediately as a demonstration of the power to be made available to the Church for its battle with Satan and his forces. To be Holy Spirit filled is to have all areas of life under His direction.
CHC.

In a transition from defense to offense, this book challenges Christ's followers to obey our Lord's commission and invade enemy territory to turn people “from darkness to light, and from the power of Satan to God.”
(Acts 26:18). God points to Israel's conquest of Canaan as an illustration of our doubting, fearful tendencies, but also as a model for the battle.
CHM

Saints of God, watch out as this book opens your inner eye. Satan's primary tactic is deception. Satan is the father of lies. The degree to which we believe any of his lies is the degree to which Satan or demons have control of our lives.
CHCM

Who and whose are you? This is a must-read book for every believer. Our tendency to focus on methods, media, certain cultural/diversity rituals, strategies, techniques, formulas, and the like betrays our failure to root out ministries in reliance upon demonstration of the power of God.
EstyMedia` 
    },
    'jesus christ': { 
      title: 'Who is this Jesus Christ? The Power of the Cross', 
      description: `What you are about to commence on is actually “theology”—the study of God.
Of course, there'll be some overlap and repetition, since these names and themes are interwoven, with several often mentioned in the same passage. But that’s fine. We’re going swimming together, and though we’ll try to keep the study organized, the most important thing is to enjoy the water.
I don’t want this to be merely academic or head knowledge. My goal doing this study is to help you enter a deeper relationship with Jesus.` 
    },
    'way down': { title: 'The Way Down is the Way Up', description: 'Discover the profound biblical paradox that true humility and surrender are the pathways to spiritual elevation.' },
    grieving: { 
      title: 'Grieving. Bereavement. & Dying.', 
      description: `Finding Hope and Healing Through the Valley of Loss

Grieving the death of a loved one is something every one of us will face in life. There is no shortcut through the pain—but there is a way through it.

When loss strikes, the heart cries out, “Why?” and the body bears the weight of sorrow. The grief that follows can feel unpredictable and unending, especially when others expect healing to come quickly. But grief is not an illness—it is a natural, sacred journey of love, memory, and letting go.

Grieving, Bereavement, & Dying offers gentle guidance for navigating that journey. With compassion and clarity, this book provides practical tools for easing stress, calming anxiety, and improving rest as you process deep loss. It reminds you that even in the darkest moments, hope can rise again.

Whether you are mourning a parent, spouse, partner, child, sibling, or dear friend, this book is a steady companion for the soul.

“Jesus told her, ‘I am the resurrection and the life. Anyone who believes in Me will live, even after dying.’”
— John 11:25 (NLT)` 
    },
    calling: { title: 'Holy Spirit Calling: 40 Day Devotional', description: 'A 40-day devotional designed for children, youth, and families to grow together in the Holy Spirit.' },
    prayerless: { title: 'Prayerless Prayers: Different Strokes', description: 'An eye-opening look into the nature of true prayer versus empty repetition, and how to connect genuinely with God.' },
    apologetics: { title: 'Apologetics', description: 'A practical guide to defending your faith with truth, love, and wisdom in a challenging world.' },
    nuggets: { title: 'Nuggets of Faith: The Main Thing', description: 'Bite-sized, powerful insights to keep your focus on what truly matters in your daily walk of faith.' },
    jezebel: { title: 'The Jezebel Spirit, The Ahab Spirit, And You.', description: 'A practical guide to identifying, confronting, and overcoming destructive spiritual influences in your life.' }
  },
  ar: {
    shattered: { title: 'محطم ومستهلك بالروح القدس', description: 'استكشاف لحياة مستسلمة تمامًا ومتحولة بنار الروح القدس.' },
    trauma: { title: 'معضلة الصدمة: شفاء الألم، استعادة الروح', description: 'نهج رحيم للتغلب على الصدمات، وشفاء الجروح العاطفية العميقة، واكتشاف أن النصر ممكن.' },
    maranatha: { title: 'ماراناثا: رحلة تحولية', description: 'رحلة تحولية من الإيمان والرجاء والنصر في المسيح بينما ننتظر عودته المجيدة.' },
    valley: { title: 'وادي العظام اليابسة', description: 'مستوحى من حزقيال، يستكشف هذا الكتاب كيف يجلب الله الحياة والإحياء والاستعادة للمواقف الميتة.' },
    warfare: { title: 'الحرب الروحية', description: 'سلح نفسك بالاستراتيجيات الكتابية للوقوف بثبات ضد الهجمات الروحية وتأمين نصرك.' },
    'jesus christ': { title: 'من هو يسوع المسيح هذا؟ قوة الصليب', description: 'غوص عميق في هوية يسوع المسيح وقوة الصليب التحويلية.' },
    'way down': { title: 'الطريق إلى الأسفل هو الطريق إلى الأعلى', description: 'اكتشف المفارقة الكتابية العميقة بأن التواضع الحقيقي والاستسلام هما الطريقان للرفعة الروحية.' },
    grieving: { title: 'الحزن. الفقد. والموت.', description: 'دليل معزٍ وكتابي عبر مواسم الخسارة والحزن ومواجهة الموت الصعبة.' },
    calling: { title: 'نداء الروح القدس: تعبد لمدة 40 يومًا', description: 'تعبد لمدة 40 يومًا مصمم للأطفال والشباب والعائلات للنمو معًا في الروح القدس.' },
    prayerless: { title: 'صلوات بلا صلاة: ضربات مختلفة', description: 'نظرة تفتح العين على طبيعة الصلاة الحقيقية مقابل التكرار الفارغ، وكيفية التواصل بصدق مع الله.' },
    apologetics: { title: 'الدفاعيات', description: 'دليل عملي للدفاع عن إيمانك بالحق والمحبة والحكمة في عالم مليء بالتحديات.' },
    nuggets: { title: 'شذرات الإيمان: الشيء الأساسي', description: 'رؤى قوية وصغيرة الحجم للحفاظ على تركيزك على ما يهم حقًا في مسيرتك اليومية للإيمان.' },
    jezebel: { title: 'روح إيزابل، روح أخاب، وأنت.', description: 'دليل عملي لتحديد ومواجهة والتغلب على التأثيرات الروحية المدمرة في حياتك.' }
  },
  es: {
    shattered: { title: 'Destrozado y Consumido por el Espíritu Santo', description: 'Una exploración de una vida completamente rendida y transformada por el fuego del Espíritu Santo.' },
    trauma: { title: 'Dilema del Trauma: Sanando el Dolor, Restaurando el Alma', description: 'Un enfoque compasivo para superar el trauma, sanar heridas emocionales profundas y descubrir que la victoria es posible.' },
    maranatha: { title: 'Maranatha: Un Viaje Transformador', description: 'Un viaje transformador de fe, esperanza y victoria en Cristo mientras esperamos Su glorioso regreso.' },
    valley: { title: 'El Valle de los Huesos Secos', description: 'Inspirado en Ezequiel, este libro explora cómo Dios trae vida, avivamiento y restauración a situaciones muertas.' },
    warfare: { title: 'Guerra Espiritual', description: 'Ármate con estrategias bíblicas para mantenerte firme contra los ataques espirituales y asegurar tu victoria.' },
    'jesus christ': { title: '¿Quién es este Jesucristo? El Poder de la Cruz', description: 'Una inmersión profunda en la identidad de Jesucristo y el poder transformador de la cruz.' },
    'way down': { title: 'El Camino Hacia Abajo es el Camino Hacia Arriba', description: 'Descubre la profunda paradoja bíblica de que la verdadera humildad y la rendición son los caminos hacia la elevación espiritual.' },
    grieving: { title: 'Duelo. Pérdida. y Muerte.', description: 'Una guía reconfortante y bíblica a través de las difíciles temporadas de pérdida, luto y enfrentamiento a la mortalidad.' },
    calling: { title: 'El Llamado del Espíritu Santo: Devocional de 40 Días', description: 'Un devocional de 40 días diseñado para que niños, jóvenes y familias crezcan juntos en el Espíritu Santo.' },
    prayerless: { title: 'Oraciones sin Oración: Diferentes Estilos', description: 'Una mirada reveladora sobre la naturaleza de la verdadera oración frente a la repetición vacía, y cómo conectar genuinamente con Dios.' },
    apologetics: { title: 'Apologética', description: 'Una guía práctica para defender tu fe con verdad, amor y sabiduría en un mundo desafiante.' },
    nuggets: { title: 'Pepitas de Fe: Lo Principal', description: 'Perspicacias poderosas y en porciones pequeñas para mantener tu enfoque en lo que realmente importa en tu caminar diario de fe.' },
    jezebel: { title: 'El Espíritu de Jezabel, El Espíritu de Acab, y Tú.', description: 'Una guía práctica para identificar, confrontar y superar las influencias espirituales destructivas en tu vida.' }
  },
  fr: {
    shattered: { title: 'Brisé et Consumé par le Saint-Esprit', description: 'Une exploration d\'une vie complètement abandonnée et transformée par le feu du Saint-Esprit.' },
    trauma: { title: 'Le Dilemme du Traumatisme : Guérir la Blessure, Restaurer l\'Âme', description: 'Une approche compatissante pour surmonter le traumatisme, guérir les blessures émotionnelles profondes et découvrir que la victoire est possible.' },
    maranatha: { title: 'Maranatha : Un Voyage Transformateur', description: 'Un voyage transformateur de foi, d\'espérance et de victoire en Christ alors que nous attendons Son retour glorieux.' },
    valley: { title: 'La Vallée des Ossements Desséchés', description: 'S\'inspirant d\'Ézéchiel, ce livre explore comment Dieu apporte la vie, le réveil et la restauration dans les situations mortes.' },
    warfare: { title: 'Combat Spirituel', description: 'Armez-vous de stratégies bibliques pour tenir ferme contre les attaques spirituelles et assurer votre victoire.' },
    'jesus christ': { title: 'Qui est ce Jésus-Christ ? La Puissance de la Croix', description: 'Une plongée profonde dans l\'identité de Jésus-Christ et la puissance transformatrice de la croix.' },
    'way down': { title: 'Le Chemin du Bas est le Chemin du Haut', description: 'Découvrez le profond paradoxe biblique selon lequel la vraie humilité et l\'abandon sont les voies de l\'élévation spirituelle.' },
    grieving: { title: 'Deuil. Perte. & Mort.', description: 'Un guide réconfortant et biblique à travers les saisons difficiles de la perte, du deuil et face à la mortalité.' },
    calling: { title: 'L\'Appel du Saint-Esprit : Dévotionnel de 40 Jours', description: 'Un dévotionnel de 40 jours conçu pour que les enfants, les jeunes et les familles grandissent ensemble dans le Saint-Esprit.' },
    prayerless: { title: 'Prières sans Prière : Différentes Approches', description: 'Un regard éclairant sur la nature de la vraie prière par rapport à la vaine répétition, et sur la façon de se connecter véritablement avec Dieu.' },
    apologetics: { title: 'Apologétique', description: 'Un guide pratique pour défendre votre foi avec vérité, amour et sagesse dans un monde difficile.' },
    nuggets: { title: 'Pépites de Foi : L\'Essentiel', description: 'Des idées puissantes et concises pour garder votre attention sur ce qui compte vraiment dans votre marche quotidienne de foi.' },
    jezebel: { title: 'L\'Esprit de Jézabel, L\'Esprit d\'Achab, et Vous.', description: 'Un guide pratique pour identifier, affronter et surmonter les influences spirituelles destructrices dans votre vie.' }
  },
  ha: {
    shattered: { title: 'Karye da Cinyewa ta wurin Ruhu Mai Tsarki', description: 'Binciken rayuwar da aka mika gaba daya kuma aka canza ta ta wutar Ruhu Mai Tsarki.' },
    trauma: { title: 'Maganar Matsalar Hargitsi: Warkar da Rauni, Mayar da Kurwa', description: 'Hanya mai tausayi don shawo kan hargitsi, warkar da raunuka masu zurfi na zuciya, da gano cewa nasara mai yiwuwa ce.' },
    maranatha: { title: 'Maranatha: Tafiya mai Canzawa', description: 'Tafiya mai canza bangaskiya, fata, da nasara cikin Almasihu yayin da muke jiran dawowarsa mai girma.' },
    valley: { title: 'Kwarin busassun Kasusuwa', description: 'Zana kwarin gwiwa daga Ezekiel, wannan littafin yana bincika yadda Allah yake kawo rai, farfadowa, da maido da matattu yanayi.' },
    warfare: { title: 'Yakin Ruhu', description: 'Hada kanka da dabarun nassosi don tsayawa tsayin daka gaban hare-haren ruhaniya da tabbatar da nasararka.' },
    'jesus christ': { title: 'Wane ne wannan Yesu Almasihu? Ikon Gicciye', description: 'Zurfin nutsewa cikin asalin Yesu Almasihu da ikon canzawa na gicciye.' },
    'way down': { title: 'Hanyar Kasa ita ce Hanyar Sama', description: 'Gano babban paradox na nassosi cewa gaskiya tawali\'u da mika wuya sune hanyoyin daukaka ta ruhaniya.' },
    grieving: { title: 'Bakin Ciki. Rasuwa. & Mutuwa.', description: 'Jagora mai sanyaya zuciya da nassosi ta cikin mawuyacin lokaci na rashi, makoki, da fuskantar mutuwa.' },
    calling: { title: 'Kiran Ruhu Mai Tsarki: Bauta ta Kwanaki 40', description: 'Bauta ta kwanaki 40 da aka tsara don yara, matasa, da iyalai su yi girma tare cikin Ruhu Mai Tsarki.' },
    prayerless: { title: 'Addu\'o\'i marasa Addu\'a: Daban-daban Bugun jini', description: 'Kallo mai bude ido kan yanayin addu\'a ta gaskiya sabanin maimaitawa mara amfani, da yadda ake haduwa da Allah da gaske.' },
    apologetics: { title: 'Apologetics (Kariya ga Addini)', description: 'Jagora mai amfani don kare bangaskiyarka da gaskiya, ƙauna, da hikima a cikin duniyar da ke da kalubale.' },
    nuggets: { title: 'Nuggets na Imani: Babban Abu', description: 'Bayanai masu iko da girman cizo don kiyaye mayar da hankali kan abin da ke da mahimmanci a cikin tafiyarku ta yau da kullun ta imani.' },
    jezebel: { title: 'Ruhun Jezebel, Ruhun Ahab, Da Kai.', description: 'Jagora mai amfani don ganowa, fuskantar, da kuma shawo kan tasirin ruhaniya mai barna a rayuwarka.' }
  },
  sw: {
    shattered: { title: 'Kuvunjika na Kuteketezwa na Roho Mtakatifu', description: 'Uchunguzi wa maisha yaliyosalimishwa kabisa na kubadilishwa na moto wa Roho Mtakatifu.' },
    trauma: { title: 'Utata wa Kiwewe: Kuponya Maumivu, Kurejesha Nafsi', description: 'Njia ya huruma ya kushinda kiwewe, kuponya majeraha ya kina ya kihemko, da kugundua kuwa ushindi unawezekana.' },
    maranatha: { title: 'Maranatha: Safari ya Mabadiliko', description: 'Safari ya mabadiliko ya imani, tumaini, na ushindi katika Kristo tunapongojea kurudi Kwake kwa utukufu.' },
    valley: { title: 'Bonde la Mifupa Mikavu', description: 'Kukopa msukumo kutoka kwa Ezekieli, kitabu hiki kinachunguza jinsi Mungu huleta uzima, uamsho, na urejesho kwa hali zilizokufa.' },
    warfare: { title: 'Vita vya Kiroho', description: 'Jihami kwa mikakati ya kibiblia ili kusimama imara dhidi ya mashambulizi ya kiroho na kupata ushindi wako.' },
    'jesus christ': { title: 'Huyu Yesu Kristo ni Nani? Nguvu ya Msalaba', description: 'Kuzama kwa kina katika utambulisho wa Yesu Kristo na nguvu ya mabadiliko ya msalaba.' },
    'way down': { title: 'Njia ya Chini ndiyo Njia ya Juu', description: 'Gundua kitendawili kikuu cha kibiblia kwamba unyenyekevu wa kweli na kujisalimisha ndio njia za kuinuliwa kiroho.' },
    grieving: { title: 'Kuhuzunika. Kufiwa. & Kufa.', description: 'Mwongozo wa kufariji na wa kibiblia kupitia misimu migumu ya kufiwa, kuomboleza, da kukabiliana na kifo.' },
    calling: { title: 'Wito wa Roho Mtakatifu: Ibada ya Siku 40', description: 'Ibada ya siku 40 iliyoundwa kwa ajili ya watoto, vijana, na familia kukua pamoja katika Roho Mtakatifu.' },
    prayerless: { title: 'Maombi yasiyo na Maombi: Mitindo Tofauti', description: 'Mtazamo wa kufungua macho juu ya asili ya maombi ya kweli dhidi ya marudio tupu, da jinsi ya kuungana kikweli na Mungu.' },
    apologetics: { title: 'Apologetics (Kutetea Imani)', description: 'Mwongozo wa vitendo wa kutetea imani yako kwa kweli, upendo, da hekima katika ulimwengu wenye changamoto.' },
    nuggets: { title: 'Vito vya Imani: Jambo Kuu', description: 'Mawao yenye nguvu da madogo ili kuweka umakini wako kwenye kile ambacho ni muhimu sana katika matembezi yako ya kila siku ya imani.' },
    jezebel: { title: 'Roho ya Yezebeli, Roho ya Ahabu, Na Wewe.', description: 'Mwongozo wa vitendo wa kutambua, kukabiliana, da kushinda ushawishi mbaya wa kiroho katika maisha yako.' }
  }
};

const getBookImage = (globObj: Record<string, any>, keyword: string): string => {
  const keys = Object.keys(globObj);
  const key = keys.find(k => k.toLowerCase().includes(keyword.toLowerCase()));
  return key ? globObj[key] as string : '';
};

export const getBooks = (lang: string = 'en'): Book[] => {
  const baseLang = lang.split('-')[0];
  const globObj = languageGlobs[baseLang] || languageGlobs['en'];
  const translations = bookTranslations[baseLang] || bookTranslations['en'];

  return bookKeywords.map((keyword, index) => {
    const trans = translations[keyword] || bookTranslations['en'][keyword];
    const meta = bookMetadata[keyword];
    const image = getBookImage(globObj, keyword) || getBookImage(languageGlobs['en'], keyword) || defaultImages[index % defaultImages.length];

    return {
      id: String(index + 1),
      title: trans.title,
      author: 'Dr. Finnian Ebuehi',
      price: meta.price,
      rating: meta.rating,
      genre: meta.genre,
      image: image,
      description: trans.description,
      stripeLink: ''
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

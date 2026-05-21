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

const bookMetadata: Record<string, { price: number, genre: string }> = {
  shattered: { price: 10.00, genre: 'Must-Read' },
  trauma: { price: 9.51, genre: 'Must-Read' },
  maranatha: { price: 3.00, genre: 'Must-Read' },
  valley: { price: 3.99, genre: 'Must-Read' },
  warfare: { price: 3.00, genre: 'Must-Read' },
  'jesus christ': { price: 2.99, genre: 'Must-Read' },
  'way down': { price: 12.54, genre: 'Must-Read' },
  grieving: { price: 2.99, genre: 'Must-Read' },
  calling: { price: 3.99, genre: 'Must-Read' },
  prayerless: { price: 3.99, genre: 'Must-Read' },
  apologetics: { price: 3.00, genre: 'Must-Read' },
  nuggets: { price: 3.99, genre: 'Must-Read' },
  jezebel: { price: 3.00, genre: 'Must-Read' }
};

const bookTranslations: Record<string, Record<string, { title: string, description: string }>> = {
  en: {
    shattered: { 
      title: 'Shattered and Consumed by the Holy Spirit', 
      description: `Why the conflicts with the Holy Spirit? Why all these splits, power struggles, controls, among brethren in the Churches/Body of Christ? The Apostle Paul declared, “I have planted, Apollo watered, but God gave the increase….” (1Corinthians 3: 6-9). These fragmentations are huge and obvious on every Church or fellowships worship days besides Sundays. Sometimes it’s chaos or crisis in and more chaos or crisis out. Garbage in and garbage out in the name of “The Holy Spirit”. Unfortunately, some brethren made themselves irreconcilable and unforgiving and still parade themselves as saints. “Do you really witness the Holy Spirit walking in such lives?” The Holy Spirit works in us through the Holy Scriptures. He uses the Holy Scriptures to convict us and influence our way of thinking and open the way to shape us into godly people. The Holy Spirit gives believers the power to live like Jesus Christ and be bold witnesses for God.The Holy Spirit helps Jesus Christ’s followers in our weakness and intercede for us with the Heavenly Father. He leads, speaks, fills, reveals, teaches, and helps. The Holy Spirit sends, forbids, constrains, convicts, and warns. The Holy Spirit gives new birth, empowers, sanctifies, and loves. He gives gifts, seals, and grieves with us.Therefore, my friend, this book “Shattered and Consumed by the Holy Spirit”, is yours to enjoy and to be passed on, please.Finn.`
    },
    trauma: { 
      title: 'Trauma Dilemma: Healing the Hurt, Restoring the Soul', 
      description: `Take it or leave it, the reality is that TRAUMA leaves scars far beyond the mind – its residual reverberates through our spirit, relationships, soul, and body itself.
Yet standard therapy/counseling often overlooks somatic aspects where trauma silently dwells.
For those who are spiritually minded or clients, when an event triggers – you pray first. Having a root holistic approach and not merely dealing with symptoms is what I call a surface or superficial approach which never solves the main issues. The best way to completely banish the disorder is to get deep into the root of the issue. You get rid of the tree by uprooting it from the root and not by cutting the leaves/branches.
Do you get it? Invariably, post-traumatic stress, anxiety, low self-esteem, substance abuse, depression, complicated bereavements, prolonged grieving, depression, a lack of confidence, lack of self-worth, and many other mental/physical ailments may be a result of childhood traumas you have endured. Worldview’s applications of different mindsets, coupled with cultural and religious backgrounds, may tend to brush relevant professional treatment aside. Here we go.
“Ok, things will take care of themselves. Do not rock the boat. Leave things under the carpet or simply get spiritual.”
“Get the one-shot prayer deliverance deal from the minister.”
“Get it over with.”
“Stomach it.”
“Behave like an adult.”
“Pretend and move on.”
“No problem. With time, it will go away.”
“Or get on with certain kind of drugs to numb it.”
None of these negatives will remedy your condition. The best approach in my professional approach is to go back to basics – uncovering, accepting and healing childhood traumas. They will allow you to let go of the pain. In effect, it enables you to release yourself from the guilt, shame, and self-destruction you have been living in.
This book will help you to cut across every barrier, regardless of your age and the season/phase of life you are in. The book provides a strategic effective plan that will take you from struggle to success.`
    },
    maranatha: {
      title: 'Maranatha: A Transformative Journey',
      description: `This book breathes a “source of hope and victory over sin.” It helps disciples of Christ strengthen their faith and deepens their dependence on God.
Giddy.Media

Maranatha and You will challenge you to develop a spirit of discernment, grounded in the Holy Scriptures and guided by the Holy Spirit. This book will help you navigate the complexities of modern life with greater clarity and confidence.
CHC

A must-read and highly recommended book for every believer. Reading this book gave me a transformative experience. It deepened my faith, renewed my hope, and challenged me to live a life pleasing to God.
Osaro

This book will take you there! For Evangelism and Missions, choose this book. In addition, I highly recommend it to anyone seeking a deeper understanding of Christian eschatology or simply wanting to be inspired to live with purpose and passion. CHCM`
    },
    valley: {
      title: 'The Valley of Dry Bones',
      description: `When it comes to the Book of Ezekiel, for many people, this is the only part of the book they know–the Valley of the Dry Bones— which is a great pity and concern. But what does it mean? Let’s go deeper. To get clarity, this is the book. – CHCM.

☆ There is no hope for humanity. But these dry bones can live. By the Word, and the Spirit of God, humans can be reborn, and at last healed of their separations, and united under one King. — CHC.

☆ No condition is hopeless. Do not give up on yourself or give in to depression. There is no finer illustration of life-changing power of the preached word that the Prophet saw in his vision. It has the power to transform those who are in trespasses and sins (Ephesians 2:1- 22,) to new, living in Christ, 2 Cor. 5: 17. — Media-Osaro.

☆ Without internal and external pressures, readers will not want to put this book down until it is finished. – CHM.

☆ This book would help you to explore how this seemingly impossible vision offers hope, comfort, and is a reminder that God can transform hopelessness into vibrant life. — Es. Best. Media.`
    },
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
    calling: {
      title: 'Holy Spirit Calling: 40 Day Devotional',
      description: `This book, Holy Spirit Calling: 40 Days Devotional 4 Children, Youth, and Family engages you. Reflection! At the bottom of prayer items or on separate piece of paper, draw a simple picture of you, or show love to someone in your family, neighbors ,etc. Now, draw a picture of your faith in God. This anointed book reminds you of the hope in God, even during times when you do not feel hopeful or helpless. This 40 Days Devotional will help you to learn about God’s love, kindness, patience, and forgiveness, and about helping others to join His family.`
    },
    prayerless: {
      title: 'Prayerless Prayers: Different Strokes',
      description: `The prayer has a living quality characterized by warmth and freedom and a sense that we are in God’s presence speaking to our Heavenly Father. Interact and involve Him reaching in and out by confessing, “Come and breathe into me, Holy Spirit. Come, Holy Spirit.”
Dear friend, I invite you to come along on a journey with me. This great book will unlock your inner heart that releases your inner eye to fill those voids in your life. We have got nothing to fear. We’re only getting joys, to be discovered when we follow His lead.`
    },
    apologetics: {
      title: 'Apologetics',
      description: `Through the power of the Holy Spirit, believers have their spiritual eyes opened and come to acknowledge the evidence. Jesus Christ makes Himself known as One who is the Way, the Truth and the Life, (John 14: 6) distinct from all other false ways and counterfeit truths. This book will help you to discover—not all religious commitments are “equal”. – CHM—

We know we should know what to believe, but how should we communicate that to our lost friends and neighbors? What we believe is the content, how we share it is the method. This book gives you that breakfast and breakthrough. —CHCM. — Get it right with this book and stop beating around the bush.

Apologetic methodology is similar to woodworking – just as the same tool can be used in several projects, so too the same method can be used in different conversations. However, there are times where only one tool is needed, the task determines the tool. No tool can accomplish every task. The same is true of our approach to apologetics. — CHC. —

For the person with the hammer, everything looks like a nail. Some people are easier to talk to than others and there is not a “one way” approach that works with everyone. This Apologetics book provides you with the mechanism. — MediaGiddy`
    },
    nuggets: {
      title: 'Nuggets of Faith: The Main Thing',
      description: `Whether you are asking the questions yourself or want to respond to others who are here— this resource book, Nuggets of Faith. The Main Thing The Main Thing is yours and for others.

No matter what the world teaches, no local Church or denomination has it all. A part is never more than the whole. The Holy Scripture is truth, clear, concrete, and perfect. This book—Nuggets of Faith. The Main Thing The Main Thing will encourage you to root your beliefs in the truth, confident that Christ has an answer to any issue you face today.`
    },
    jezebel: {
      title: 'The Jezebel Spirit, The Ahab Spirit, And You.',
      description: `In the Holy Scriptures, Jezebel was married to Ahab, King of Israel. Ahab ceded his power to his wife, acquiescing to her control and the kingdom becoming passive.

In the same way today, people demonstrating control and domination of a Jezebel spirit compel people into the passivity of an Ahab spirit, whether in a marital situation, a church, any other relationship or government institutions/establishment.

Beloved, wait a minute! Where are you and how are you also caught up in this? This unique book—- Jezebel Spirit, Ahab Spirit and You —creates connection. Again, where are you in this maze and saga? What is your position? Any eternal perspective? Any Heavenly vision? Any passion for these compromising and perishing souls around you and beyond?

You might say, “Of course, it is business as usual. I am not called for this. Some others will do dirty confrontations with these evil spirits.”

Hear me as I hear from the Word of God.

The “spirit” of “Jezebel” was not unique to the church in Thyatira. It is alive and well in the body of Christ today. One needs only read the latest local and global headlines. It is an insidious, yet subtle spirit. It is destructive yet enticing. It typically gains momentum among those who are so fearful of quenching the Spirit (1 Thes. 5: 19) that they fail to rein in the flesh.

Come with me, dearly beloved. The solution is not to repudiate the prophetic altogether, or any spiritual gift for that matter. Rather we must become good Bereans “examining the Scriptures daily” (Acts 17:11) to see if these things are of God or not. In summary, we would do well to heed Apostle Paul’s counsel…

Prove all things; hold fast that which is good. Abstain from all appearance of evil. And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.
—1 Thessalonians 5:21-23`
    }
  },
  ar: {
    shattered: {
      title: 'محطم ومستهلك بالروح القدس',
      description: `لماذا الصراعات مع الروح القدس؟ لماذا كل هذه الانقسامات، وصراعات القوة، والسيطرة بين الإخوة في الكنائس/جسد المسيح؟ أعلن الرسول بولس: "أنا غرست وأبلوس سقى، لكن الله كان ينمي..." (1 كورنثوس 3: 6-9). هذه التجزئة ضخمة وواضحة في أيام عبادة كل كنيسة أو زمالة إلى جانب أيام الأحد. في بعض الأحيان تكون الفوضى أو الأزمة في الداخل والمزيد من الفوضى أو الأزمة في الخارج. مدخلات فاسدة ومخرجات فاسدة باسم "الروح القدس". لسوء الحظ، جعل بعض الإخوة أنفسهم غير قابلين للمصالحة وغير غفورين، ومع ذلك لا يزالون يستعرضون أنفسهم كقديسين. "هل تشهد حقًا عمل الروح القدس في مثل هذه الحيوات؟" الروح القدس يعمل فينا من خلال الكتب المقدسة. إنه يستخدم الكتب المقدسة ليبكتنا ويؤثر على طريقة تفكيرنا ويفتح الطريق لتشكيلنا كأشخاص أتقياء. الروح القدس يمنح المؤمنين القوة للعيش مثل يسوع المسيح والشهادة بجرأة لله. الروح القدس يساعد أتباع يسوع المسيح في ضعفنا ويشفع لنا عند الآب السماوي. إنه يقود، ويتحدث، ويملأ، ويكشف، ويعلم، ويساعد. الروح القدس يرسل، ويمنع، ويقيد، ويبكت، ويحذر. الروح القدس يمنح الولادة الجديدة، ويمكّن، ويقدس، ويحب. إنه يمنح المواهب، ويختم، ويحزن معنا. لذلك، يا صديقي، هذا الكتاب "محطم ومستهلك بالروح القدس" هو لك لتستمتع به وتنقله للآخرين، من فضلك. فين.`
    },
    trauma: {
      title: 'معضلة الصدمة: شفاء الألم، استعادة الروح',
      description: `سواء قبلت ذلك أم لا، فإن الحقيقة هي أن الصدمة تترك ندوبًا تتجاوز العقل بكثير - إذ يتردد صداها المتبقي عبر روحنا، وعلاقاتنا، ونفسنا، وجسدنا نفسه.
ومع ذلك، فإن العلاج أو الاستشارات القياسية غالبًا ما تغفل الجوانب الجسدية حيث تسكن الصدمة بصمت.
بالنسبة لأولئك الذين يركزون على الجانب الروحي أو العملاء، عندما يحدث محفز ما - فإنك تصلي أولاً. إن اعتماد نهج جذري شمولي وعدم التعامل مجرد مع الأعراض هو ما أسميه نهجًا سطحيًا لا يحل المشكلات الرئيسية أبدًا. أفضل طريقة للقضاء على الاضطراب تمامًا هي التغلغل عميقًا في جذر المشكلة. إنك تتخلص من الشجرة باقتلاعها من جذورها وليس بقطع أوراقها أو أغصانها.
هل تفهم ذلك؟ بطبيعة الحال، قد يكون اضطراب ما بعد الصدمة، والقلق، وانخفاض تقدير الذات، وإساءة استخدام المواد، والاكتئاب، وحالات الفقد المعقدة، والحزن الطويل، والاكتئاب، ونقص الثقة، ونقص تقدير الذات، والعديد من الأمراض العقلية والجسدية الأخرى نتيجة لصدمات الطفولة التي عانيت منها. قد تميل تطبيقات وجهات النظر العالمية لمختلف العقليات، إلى جانب الخلفيات الثقافية والدينية، إلى تنحية العلاج المهني المناسب جانبًا. ها نحن ذا:
"حسناً، الأمور ستعتني بنفسها. لا تثر المشاكل. اترك الأمور تحت السجادة أو ببساطة كن روحيًا."
"احصل على صلاة خلاص بلمسة واحدة من الخادم."
"تجاوز الأمر."
"تحمله."
"تصرف كشخص بالغ."
"تظاهر وامضِ قدمًا."
"لا مشكلة. مع الوقت، سيختفي."
"أو تناول نوعًا معينًا من الأدوية لتخديره."
لا يوجد أي من هذه السلبيات سيعالج حالتك. أفضل نهج في أسلوبي المهني هو العودة إلى الأساسيات - كشف صدمات الطفولة وقبولها وشفائها. ستسمح لك بالتخلص من الألم. في الواقع، إنها تمكنك من تحرير نفسك من الذنب والخزي والتدمير الذاتي الذي كنت تعيش فيه.
سيساعدك هذا الكتاب على اجتياز كل الحواجز، بغض النظر عن عمرك والموسم أو مرحلة الحياة التي تمر بها. يوفر الكتاب خطة استراتيجية فعالة ستنقلك من المعاناة إلى النجاح.`
    },
    maranatha: {
      title: 'ماراناثا: رحلة تحولية',
      description: `ينبض هذا الكتاب بـ "مصدر رجاء ونصرة على الخطية". إنه يساعد تلاميذ المسيح على تقوية إيمانهم وتعميق اعتمادهم على الله.
ميديا جيدي

ماراناثا وأنت سوف يتحديانك لتطوير روح التمييز، المبنية على الكتب المقدسة والمسترشدة بالروح القدس. سيساعدك هذا الكتاب على التنقل في تعقيدات الحياة الحديثة بمزيد من الوضوح والثقة.
سي إتش سي

كتاب يجب قراءته وموصى به للغاية لكل مؤمن. قراءة هذا الكتاب أعطتني تجربة تحولية. لقد عمق إيماني، وجدد رجائي، وتحداني لأعيش حياة ترضي الله.
أوسارو

هذا الكتاب سيأخذك إلى هناك! بالنسبة للكرازة والإرساليات، اختر هذا الكتاب. بالإضافة إلى ذلك، أوصي به بشدة لأي شخص يبحث عن فهم أعمق لعلم اللاهوت الآخر المسيحي أو يريد ببلاق الحث على العيش بهدف وشغف. سي إتش سي إم`
    },
    valley: {
      title: 'وادي العظام اليابسة',
      description: `عندما يتعلق الأمر بسفر حزقيال، بالنسبة لكثير من الناس، هذا هو الجزء الوحيد من السفر الذي يعرفونه - وادي العظام اليابسة - وهو أمر يدعو للأسف الشديد والقلق. ولكن ماذا يعني ذلك؟ دعونا نذهب أعمق. للحصول على الوضوح، هذا هو الكتاب المناسب. – سي إتش سي إم.

☆ لا يوجد أمل للبشرية. ولكن يمكن لهذه العظام اليابسة أن تحيا. بالكلمة وبروح الله، يمكن للبشر أن يولدوا من جديد، ويشفوا أخيرًا من انقساماتهم، ويتحدوا تحت ملك واحد. — سي إتش سي.

☆ لا توجد حالة ميؤوس منها. لا تيأس من نفسك ولا تستسلم للاكتئاب. لا يوجد تصوير أروع للقوة المغيرة للحياة للكلمة المبشر بها مما رآه النبي في رؤياه. إنها تملك القوة لتحويل أولئك الذين هم في التعديات والخطايا (أفسس 2: 1-22) إلى جدد، أحياء في المسيح، 2 كورنثوس 5: 17. — ميديا أوسارو.

☆ بدون ضغوط داخلية وخارجية، لن يرغب القراء في ترك هذا الكتاب حتى ينتهوا منه. – سي إتش إم.

☆ سيساعدك هذا الكتاب على استكشاف كيف تقدم هذه الرؤية التي تبدو مستحيلة الرجاء والتعزية، وتذكرنا بأن الله قادر على تحويل اليأس إلى حياة مفعمة بالحيوية. — إس. بيست. ميديا.`
    },
    warfare: {
      title: 'الحرب الروحية',
      description: `كشف هذا الكتاب أن حرب الشيطان تشن أساسًا بسبب شهوته لمجد الله.
بما أننا خلقنا على صورة الله، وممثلين لله على الأرض، ولدينا القدرة على المجد الأبدي، فقد أصبحت البشرية هدفًا لحسد إبليس وانتقلت المعركة من السماء إلى الأرض.
ميديا جيدي.

أثبت this الكتاب للمؤمنين بالمسيح أن المعركة الحاسمة قد خيضت بالفعل وانتصر فيها على الصليب. وتبع ذلك القيامة مباشرة كإظهار للقوة التي ستتاح للكنيسة لمعركتها مع الشيطان وقواته. أن تكون ممتلئًا بالروح القدس يعني أن تكون كل مجالات حياتك تحت توجيهه.
سي إتش سي.

في الانتقال من الدفاع إلى الهجوم، يتحدى هذا الكتاب أتباع المسيح لإطاعة تكليف ربنا وغزو أراضي العدو لتحويل الناس "من الظلمة إلى النور، ومن سلطان الشيطان إلى الله."
(أعمال 26: 18). يشير الله إلى غزو إسرائيل لكنعان كتوضيح لميولنا الشكاكة والخائفة، وأيضًا كنموذج للمعركة.
سي إتش إم.

يا قديسي الله، انتبهوا لأن هذا الكتاب يفتح عينكم الداخلية. التكتيك الأساسي للشيطان هو الخداع. الشيطان هو أبو الكذابين. الدرجة التي نصدق بها أيًا من أكاذيبه هي الدرجة التي يسيطر بها الشيطان أو الشياطين على حياتنا.
سي إتش سي إم.

من أنت ولمن أنت؟ هذا كتاب يجب قراءته لكل مؤمن. إن ميلنا للتركيز على الأساليب، والوسائط، وبعض طقوس الثقافة والتنوع، والاستراتيجيات، والتقنيات، والصيغ، وما شابه ذلك يكشف فشلنا في ترسيخ الخدمات بالاعتماد على إظهار قوة الله.
إستي ميديا`
    },
    'jesus christ': {
      title: 'من هو يسوع المسيح هذا؟ قوة الصليب',
      description: `ما أنت على وشك البدء فيه هو في الواقع "علم اللاهوت" - دراسة الله.
بالطبع، سيكون هناك بعض التداخل والتكرار، لأن هذه الأسماء والموضوعات متشابكة، وغالبًا ما يُذكر العديد منها في نفس المقطع. لكن هذا لا بأس به. نحن ذاهبون للسباحة معًا، وعلى الرغم من أننا سنحاول إبقاء الدراسة منظمة، فإن الشيء الأكثر أهمية هو الاستمتاع بالماء.
لا أريد أن يكون هذا مجرد معرفة أكاديمية أو عقلية. هدفي من إجراء هذه الدراسة هو مساعدتك على الدخول في علاقة أعمق مع يسوع.`
    },
    'way down': {
      title: 'الطريق إلى الأسفل هو الطريق إلى الأعلى',
      description: `اكتشف المفارقة الكتابية العميقة بأن التواضع الحقيقي والاستسلام هما الطريقان للرفعة الروحية.`
    },
    grieving: {
      title: 'الحزن. الفقد. والموت.',
      description: `إيجاد الرجاء والشفاء عبر وادي الخسارة

إن الحزن على وفاة شخص عزيز هو أمر سيواجهه كل منا في الحياة. لا يوجد طريق مختصر للألم - ولكن هناك طريق للمرور عبره.

عندما تضرب الخسارة، يصرخ القلب: "لماذا؟" ويتحمل الجسد ثقل الحزن. يمكن أن يبدو الحزن الذي يتبع ذلك غير متوقع ولا ينتهي، خاصة عندما يتوقع الآخرون أن يأتي الشفاء سريعًا. لكن الحزن ليس مرضًا - إنه رحلة طبيعية مقدسة من الحب والذاكرة والتخلي.

يقدم كتاب "الحزن والفقد والموت" إرشادات لطيفة للتنقل في تلك الرحلة. وبكثير من التعاطف والوضوح، يوفر هذا الكتاب أدوات عملية لتخفيف التوتر، وتهدئة القلق، وتحسين الراحة أثناء معالجة الخسارة العميقة. يذكرك أنه حتى في أحلك اللحظات، يمكن للرجاء أن يشرق من جديد.

سواء كنت تحزن على والد، أو زوج، أو شريك، أو طفل، أو شقيق، أو صديق عزيز، فإن هذا الكتاب هو رفيق ثابت للروح.

"قال لها يسوع: أنا هو القيامة والحياة. من آمن بي ولو مات فسيحيا."
— يوحنا 11: 25`
    },
    calling: {
      title: 'نداء الروح القدس: تعبد لمدة 40 يومًا',
      description: `يشركك هذا الكتاب، "نداء الروح القدس: تعبد لمدة 40 يومًا للأطفال والشباب والعائلات". تأمل! في الجزء السفلي من بنود الصلاة أو على ورقة منفصلة، ارسم صورة بسيطة لنفسك، أو أظهر الحب لشخص ما في عائلتك، أو جيرانك، إلخ. الآن، ارسم صورة لإيمانك بالله. هذا الكتاب الممسوح يذكرك بالرجاء في الله، حتى في الأوقات التي لا تشعر فيها بالأمل أو العجز. سيساعدك هذا التعبد الممتد لـ 40 يومًا على التعرف على محبة الله ولطفه وصبره وغفرانه، ومساعدة الآخرين على الانضمام إلى عائلته.`
    },
    prayerless: {
      title: 'صلوات بلا صلاة: ضربات مختلفة',
      description: `تتميز الصلاة بجودة حية تتسم بالدفء والحرية والشعور بأننا في محضر الله نتحدث إلى أبينا السماوي. تفاعل معه وأشركه في حياتك من خلال الاعتراف قائلًا: "تعال وانفخ فيّ يا روح الله. تعال يا روح الله."
صديقي العزيز، أدعوك لمرافقتي في رحلة معي. سيفتح هذا الكتاب العظيم قلبك الداخلي الذي يطلق عينك الداخلية لملء تلك الفراغات في حياتك. ليس لدينا ما نخافه. نحن لا نحصل إلا على الأفراح التي سنكتشفها عندما نتبع قيادته.`
    },
    apologetics: {
      title: 'الدفاعيات',
      description: `من خلال قوة الروح القدس، تنفتح العيون الروحية للمؤمنين ويأتون للإقرار بالأدلة. يعلن يسوع المسيح عن نفسه بأنه هو الطريق والحق والحياة (يوحنا 14: 6) متميزًا عن كل الطرق الباطلة الأخرى والحقائق المزيفة. سيساعدك هذا الكتاب على اكتشاف أنه ليست كل الالتزامات الدينية "متساوية". – سي إتش إم—

نحن نعلم أنه يجب علينا معرفة ما نؤمن به، ولكن كيف ينبغي لنا أن ننقل ذلك إلى أصدقائنا وجيراننا الضالين؟ ما نؤمن به هو المحتوى، وكيفية مشاركته هي الطريقة. هذا الكتاب يمنحك ذلك الإفطار والاختراق. — سي إتش سي إم. — افعلها بشكل صحيح مع هذا الكتاب وتوقف عن الدوران حول الموضوع.

منهجية الدفاعيات تشبه الأعمال الخشبية - تمامًا كما يمكن استخدام نفس الأداة في عدة مشاريع، كذلك يمكن استخدام نفس الطريقة في محادثات مختلفة. ومع ذلك، هناك أوقات تكون فيها أداة واحدة فقط هي المطلوبة، فالمهمة هي التي تحدد الأداة. لا يمكن لأي أداة إنجاز كل المهام. والشيء نفسه ينطبق على نهجنا في الدفاعيات. — سي إتش سي. —

بالنسبة للشخص الذي يملك مطرقة، يبدو كل شيء مثل مسمار. يسهل التحدث إلى بعض الأشخاص أكثر من غيرهم، ولا يوجد نهج "طريق واحد" ينفع مع الجميع. يوفر لك كتاب الدفاعيات هذا الآلية المناسبة. — ميديا جيدي`
    },
    nuggets: {
      title: 'شذرات الإيمان: الشيء الأساسي',
      description: `سواء كنت تطرح الأسئلة بنفسك أو تريد الرد على الآخرين الموجودين هنا - فإن كتاب المصادر هذا، شذرات الإيمان: الشيء الأساسي هو لك وللآخرين.

بغض النظر عما يعلمه العالم، لا توجد كنيسة محلية أو طائفة لديها كل شيء. الجزء لا يكون أبدًا أكبر من الكل. الكتاب المقدس هو الحق، واضح وملموس وكامل. هذا الكتاب - شذرات الإيمان: الشيء الأساسي - سيشجعك على ترسيخ معتقداتك في الحق، واثقًا من أن المسيح لديه إجابة لأي مشكلة تواجهها اليوم.`
    },
    jezebel: {
      title: 'روح إيزابل، روح أخاب، وأنت.',
      description: `في الكتب المقدسة، كانت إيزابل متزوجة من أخاب، ملك إسرائيل. تنازل أخاب عن سلطته لزوجته، مذعنًا لسيطرتها وأصبح الملك سلبيًا.

بالطريقة نفسها اليوم، فإن الأشخاص الذين يظهرون السيطرة والهيمنة بروح إيزابل يدفعون الناس إلى سلبية روح أخاب، سواء في وضع زوجي، أو كنيسة، أو أي علاقة أخرى أو مؤسسات/أجهزة حكومية.

أيها الأحباء، انتظروا لحظة! أين أنتم وكيف تورطتم أنتم أيضًا في هذا؟ هذا الكتاب الفريد - روح إيزابل، روح أخاب، وأنت - يخلق صلة. مرة أخرى، أين أنت في هذه المتاهة والملحمة؟ ما هو موقفك؟ أي منظور أبدي؟ أي رؤية سماوية؟ أي شغف بهذه النفوس المساومة والهالكة من حولك وما وراء ذلك؟

قد تقول: "بالطبع، الأمور تسير كالمعتاد. أنا لست مدعوًا لهذا. سيقوم آخرون بمواجهات صعبة مع هذه الأرواح الشريرة."

اسمعني كما أسمع من كلمة الله.

لم تكن "روح" "إيزابل" فريدة لكنيسة ثياتيرا. إنها حية وتعمل في جسد المسيح اليوم. يحتاج المرء فقط إلى قراءة آخر العناوين المحلية والعالمية. إنها روح خبيثة ولكنها خفية. إنها مدمرة ولكنها مغرية. وعادة ما تكتسب زخمًا بين أولئك الذين يخافون جدًا من إطفاء الروح (1 تسالونيكي 5: 19) لدرجة أنهم يفشلون في كبح الجسد.

تعالوا معي يا أحبائي. الحل ليس في رفض النبوة تمامًا، أو أي موهبة روحية في هذا الشأن. بل يجب أن نصبح مثل أهل بيرية الأبرار "فاحصين الكتب كل يوم" (أعمال 17: 11) لنرى ما إذا كانت هذه الأمور من الله أم لا. في النهاية، يحسن بنا أن نصغي إلى نصيحة الرسول بولس...

امتحنوا كل شيء. تمسكوا بالحسن. امتنعوا عن كل شبه شر. وإله السلام نفسه يقدسكم بالتمام. ولتُحفظ روحكم ونفسكم وجسدكم كاملة بلا لوم عند مجيء ربنا يسوع المسيح.
— 1 تسالونيكي 5: 21-23`
    }
  },
  es: {
    shattered: {
      title: 'Destrozado y Consumido por el Espíritu Santo',
      description: `¿Por qué los conflictos con el Espíritu Santo? ¿Por qué todas estas divisiones, luchas de poder y controles entre hermanos en las Iglesias/Cuerpo de Cristo? El apóstol Pablo declaró: “Yo planté, Apolos regó, pero Dios dio el crecimiento...” (1 Corintios 3: 6-9). Estas fragmentaciones son enormes y obvias en los días de adoración de cada iglesia o congregación, además de los domingos. A veces es caos o crisis adentro y más caos o crisis afuera. Basura entra y basura sale en el nombre del “Espíritu Santo”. Desafortunadamente, algunos hermanos se muestran irreconciliables y rencorosos, y aun así se presentan como santos. “¿Realmente presencias al Espíritu Santo caminando en tales vidas?” El Espíritu Santo obra en nosotros a través de las Sagradas Escrituras. Él usa las Sagradas Escrituras para convencernos, influir en nuestra forma de pensar y abrir el camino para moldearnos como personas piadosas. El Espíritu Santo da a los creyentes el poder para vivir como Jesucristo y ser testigos valientes de Dios. El Espíritu Santo ayuda a los seguidores de Jesucristo en nuestra debilidad e intercede por nosotros ante el Padre Celestial. Él guía, habla, llena, revela, educa y ayuda. El Espíritu Santo envía, prohíbe, restringe, convence y advierte. El Espíritu Santo da un nuevo nacimiento, empodera, santifica y ama. Él da dones, sella y se duele con nosotros. Por lo tanto, mi amigo, este libro “Destrozado y Consumido por el Espíritu Santo” es tuyo para disfrutarlo y compartirlo, por favor. Edición de Finn.`
    },
    trauma: {
      title: 'Dilema del Trauma: Sanando el Dolor, Restaurando el Alma',
      description: `Lo creas o no, la realidad es que el TRAUMA deja cicatrices mucho más allá de la mente: su residuo reverbera a través de nuestro espíritu, relaciones, alma y el cuerpo mismo.
Sin embargo, la terapia/consejería estándar a menudo pasa por alto los aspectos somáticos donde el trauma habita silenciosamente.
Para aquellos con mentalidad espiritual o clientes, cuando ocurre un desencadenante, primero se ora. Tener un enfoque holístico desde la raíz y no simplemente tratar los síntomas es lo que yo llamo un enfoque superficial, el cual nunca resuelve los problemas principales. La mejor manera de desterrar por completo el trastorno es profundizar en la raíz del problema. Te deshaces del árbol arrancándolo de raíz y no cortando las hojas o las ramas.
¿Lo entiendes? Invariablemente, el estrés postraumático, la ansiedad, la baja autoestima, el abuso de sustancias, la depresión, los duelos complicados, el duelo prolongado, la falta de confianza, la falta de amor propio y muchas otras dolencias mentales y físicas pueden ser el resultado de traumas infantiles que has soportado. La aplicación de diferentes mentalidades en el mundo, junto con los antecedentes culturales y religiosos, pueden tender a descartar el tratamiento profesional pertinente. Así es como reaccionamos:
“Ok, las cosas se solucionarán solas. No hagas olas. Deja las cosas bajo la alfombra o simplemente ponte espiritual”.
“Consigue una oración de liberación de una sola sesión con el ministro”.
“Superalo”.
“Aguántalo”.
“Compórtate como un adulto”.
“Finge y sigue adelante”.
“No hay problema. Con el tiempo, se pasará”.
“O toma ciertos tipos de medicamentos para adormecerlo”.
Ninguna de estas actitudes negativas solucionará tu condición. El mejor enfoque, según mi experiencia profesional, es volver a lo básico: descubrir, aceptar y sanar los traumas infantiles. Te permitirán dejar ir el dolor. En efecto, te capacita para liberarte de la culpa, la vergüenza y la autodestrucción en las que has estado viviendo.
Este libro te ayudará a atravesar cualquier barrera, independientemente de tu edad y de la temporada o fase de la vida en la que te encuentres. El libro proporciona un plan estratégico y eficaz que te llevará de la lucha al éxito.`
    },
    maranatha: {
      title: 'Maranatha: Un Viaje Transformador',
      description: `Este libro respira una “fuente de esperanza y victoria sobre el pecado”. Ayuda a los discípulos de Cristo a fortalecer su fe y profundiza su dependencia de Dios.
Giddy.Media

Maranatha y Tú te desafiará a desarrollar un espíritu de discernimiento, cimentado en las Sagradas Escrituras y guiado por el Espíritu Santo. Este libro te ayudará a navegar las complejidades de la vida moderna con mayor claridad y confianza.
CHC

Un libro de lectura obligada y muy recomendado para todo creyente. Leer este libro me brindó una experiencia transformadora. Profundizó mi fe, renovó mi esperanza y me desafió a vivir una vida agradable a Dios.
Osaro

¡Este libro te llevará allí! Para evangelización y misiones, elige este libro. Además, lo recomiendo ampliamente a cualquiera que busque una comprensión más profunda de la escatología cristiana o que simplemente desee inspirarse para vivir con propósito y pasión. CHCM`
    },
    valley: {
      title: 'El Valle de los Huesos Secos',
      description: `Cuando se trata del Libro de Ezequiel, para muchas personas, esta es la única parte del libro que conocen: el Valle de los Huesos Secos, lo cual es una gran lástima y preocupación. Pero ¿qué significa? Vayamos más profundo. Para obtener claridad, este es el libro. – CHCM.

☆ No hay esperanza para la humanidad. Pero estos huesos secos pueden vivir. Por la Palabra y el Espíritu de Dios, los humanos pueden renacer y, finalmente, ser sanados de sus divisiones y unidos bajo un solo Rey. — CHC.

☆ Ninguna condición es desesperada. No te rindas ni te entregues a la depresión. No hay mejor ilustración del poder transformador de la palabra predicada que la que el Profeta vio en su visión. Tiene el poder de transformar a los que están en delitos y pecados (Efesios 2:1-22) en personas nuevas, vivas en Cristo, 2 Cor. 5:17. — Media-Osaro.

☆ Sin presiones internas ni externas, los lectores no querrán soltar este libro hasta terminarlo. – CHM.

☆ Este libro te ayudará a explorar cómo esta visión aparentemente imposible ofrece esperanza, consuelo y es un recordatorio de que Dios puede transformar la desesperanza en una vida vibrante. — Es. Best. Media.`
    },
    warfare: {
      title: 'Guerra Espiritual',
      description: `Este libro expone que la guerra de Satanás se libra principalmente debido a su codicia por la gloria de Dios.
Dado que fuimos creados a la imagen de Dios, somos los representantes de Dios en la tierra y tenemos el potencial de la gloria eterna, la humanidad se ha convertido en el objetivo de la envidia del diablo y la batalla se ha trasladado del cielo a la tierra.
GiddyMedia.

Este libro demuestra a los creyentes en Cristo que la batalla decisiva ya ha sido librada y ganada en la Cruz. La resurrección siguió inmediatamente como una demostración del poder que se pondría a disposición de la Iglesia para su batalla contra Satanás y sus fuerzas. Estar lleno del Espíritu Santo es tener todas las áreas de la vida bajo Su dirección.
CHC.

En una transición de la defensa a la ofensiva, este libro desafía a los seguidores de Cristo a obedecer la comisión de nuestro Señor e invadir el territorio enemigo para convertir a las personas “de las tinieblas a la luz, y de la potestad de Satanás a Dios”.
(Hechos 26:18). Dios señala la conquista de Canaán por parte de Israel como una ilustración de nuestras tendencias dudosas y temerosas, pero también como un modelo para la batalla.
CHM

Santos de Dios, presten atención a cómo este libro abre los ojos de su entendimiento. La táctica principal de Satanás es el engaño. Satanás es el padre de la mentira. El grado en que creemos cualquiera de sus mentiras es el grado en que Satanás o los demonios tienen control sobre nuestras vidas.
CHCM

¿Quién eres y de quién eres? Este es un libro de lectura obligada para todo creyente. Nuestra tendencia a centrarnos en métodos, medios, ciertos rituales culturales o de diversidad, estrategias, técnicas, fórmulas y cosas similares delata nuestro fracaso en basar los ministerios en la demostración del poder de Dios.
EstyMedia`
    },
    'jesus christ': {
      title: '¿Quién es este Jesucristo? El Poder de la Cruz',
      description: `Lo que estás a punto de comenzar es en realidad “teología”: el estudio de Dios.
Por supuesto, habrá cierta superposición y repetición, ya que estos nombres y temas están entrelazados, y varios de ellos se mencionan a menudo en el mismo pasaje. Pero eso está bien. Vamos a nadar juntos y, aunque intentaremos mantener el estudio organizado, lo más importante es disfrutar del agua.
No quiero que esto sea meramente académico o conocimiento intelectual. Mi objetivo al realizar este estudio es ayudarte a entrar en una relación más profunda con Jesús.`
    },
    'way down': {
      title: 'El Camino Hacia Abajo es el Camino Hacia Arriba',
      description: `Descubre la profunda paradoja bíblica de que la verdadera humildad y la rendición son los caminos hacia la elevación espiritual.`
    },
    grieving: {
      title: 'Duelo. Pérdida. y Muerte.',
      description: `Encontrando Esperanza y Sanación a Través del Valle de la Pérdida

El duelo por la muerte de un ser querido es algo que cada uno de nosotros enfrentará en la vida. No hay atajos para evitar el dolor, pero sí una manera de atravesarlo.

Cuando la pérdida golpea, el corazón clama: “¿Por qué?” y el cuerpo soporta el peso del dolor. El duelo que sigue puede parecer impredecible e interminable, especialmente cuando otros esperan que la sanación llegue rápidamente. Pero el duelo no es una enfermedad: es un viaje natural y sagrado de amor, memoria y desapego.

Duelo, Pérdida y Muerte ofrece una guía tierna para navegar ese viaje. Con compasión y claridad, este libro brinda herramientas prácticas para aliviar el estrés, calmar la ansiedad y mejorar el descanso mientras procesas una pérdida profunda. Te recuerda que incluso en los momentos más oscuros, la esperanza puede volver a surgir.

Ya sea que estés de luto por un padre, cónyuge, pareja, hijo, hermano o un querido amigo, este libro es un compañero constante para el alma.

“Jesús le dijo: Yo soy la resurrección y la vida. El que cree en mí, aunque esté muerto, vivirá”.
— Juan 11:25 (Reina-Valera 1960)`
    },
    calling: {
      title: 'El Llamado del Espíritu Santo: Devocional de 40 Días',
      description: `Este libro, El Llamado del Espíritu Santo: Devocional de 40 Días para Niños, Jóvenes y Familias, te involucra. ¡Reflexión! Al final de los temas de oración o en una hoja de papel aparte, dibuja una imagen sencilla de ti mismo, o muestra amor a alguien de tu familia, vecinos, etc. Ahora, dibuja una imagen de tu fe en Dios. Este libro ungido te recuerda la esperanza en Dios, incluso en los momentos en que no te sientes optimista o desamparado. Este devocional de 40 días te ayudará a aprender sobre el amor, la bondad, la paciencia y el perdón de Dios, y sobre cómo ayudar a otros a unirse a Su familia.`
    },
    prayerless: {
      title: 'Oraciones sin Oración: Diferentes Estilos',
      description: `La oración tiene una cualidad viva caracterizada por la calidez y la libertad, y la sensación de que estamos en la presencia de Dios hablando con nuestro Padre Celestial. Interactúa e involúcralo confesando: “Ven y sopla en mí, Espíritu Santo. Ven, Espíritu Santo”.
Querido amigo, te invito a emprender un viaje conmigo. Este gran libro abrirá tu corazón y liberará tu ojo interior para llenar esos vacíos en tu vida. No tenemos nada que temer. Solo obtendremos alegrías, que descubriremos al seguir su guía.`
    },
    apologetics: {
      title: 'Apologética',
      description: `A través del poder del Espíritu Santo, a los creyentes se les abren los ojos espirituales y llegan a reconocer la evidencia. Jesucristo se da a conocer como Aquel que es el Camino, la Verdad y la Vida (Juan 14:6), diferente de todos los demás caminos falsos y verdades falsificadas. Este libro te ayudará a descubrir que no todos los compromisos religiosos son “iguales”. – CHM—

Sabemos que deberíamos saber qué creer, pero ¿cómo deberíamos comunicárselo a nuestros amigos y vecinos perdidos? Lo que creemos es el contenido, cómo lo compartimos es el método. Este libro te da ese sustento y ese avance. —CHCM. — Haz lo correcto con este libro y deja de andarte con rodeos.

La metodología del apologista es similar a la carpintería: así como la misma herramienta se puede utilizar en varios proyectos, el mismo método se puede utilizar en diferentes conversaciones. Sin embargo, hay ocasiones en las que solo se necesita una herramienta; la tarea determina la herramienta. Ninguna herramienta puede realizar todas las tareas. Lo mismo ocurre con nuestro enfoque de la apologética. — CHC. —

Para la persona que tiene un martillo, todo parece un clavo. Es más fácil hablar con algunas personas que con otras y no existe un enfoque de “única vía” que funcione con todos. Este libro de Apologética te proporciona el mecanismo. — MediaGiddy`
    },
    nuggets: {
      title: 'Pepitas de Fe: Lo Principal',
      description: `Ya sea que tú mismo te hagas las preguntas o quieras responder a otros que están aquí, este libro de recursos, Pepitas de Fe: Lo Principal, es tuyo y para los demás.

No importa lo que el mundo enseñe, ninguna Iglesia local o denominación lo tiene todo. Una parte nunca es más que el todo. La Sagrada Escritura es verdad, clara, concreta y perfecta. Este libro, Pepitas de Fe: Lo Principal, te animará a arraigar tus creencias en la verdad, confiando en que Cristo tiene una respuesta para cualquier problema al que te enfrentes hoy.`
    },
    jezebel: {
      title: 'El Espíritu de Jezabel, El Espíritu de Acab, y Tú.',
      description: `En las Sagradas Escrituras, Jezabel estaba casada con Acab, rey de Israel. Acab cedió su poder a su esposa, consintiendo a su control, con lo cual el reino se volvió pasivo.

De la misma manera hoy en día, las personas que demuestran el control y la dominación de un espíritu de Jezabel obligan a la gente a la pasividad de un espíritu de Acab, ya sea en una situación matrimonial, en una iglesia, en cualquier otra relación o en las instituciones y establecimientos gubernamentales.

¡Amados, esperen un minuto! ¿Dónde están y cómo se encuentran atrapados en esto? Este libro único, El Espíritu de Jezabel, el Espíritu de Acab y Tú, crea conexión. Nuevamente, ¿dónde estás en este laberinto y saga? ¿Cuál es tu posición? ¿Tienes alguna perspectiva eterna? ¿Alguna visión celestial? ¿Alguna pasión por estas almas comprometidas y que perecen a tu alrededor y más allá?

Podrías decir: “Por supuesto, todo sigue igual. Yo no soy llamado para esto. Otros harán confrontaciones difíciles con estos espíritus malignos”.

Escúchame como yo escucho de la Palabra de Dios.

El “espíritu” de “Jezabel” no era exclusivo de la iglesia en Tiatira. Está vivo y activo en el cuerpo de Cristo hoy. Solo basta leer los últimos titulares locales y mundiales. Es un espíritu insidioso pero sutil. Es destructivo pero atrayente. Por lo general, gana impulso entre aquellos que temen tanto apagar al Espíritu (1 Tes. 5:19) que no logran refrenar la carne.

Vengan conmigo, amados hermanos. La solución no es repudiar lo profético por completo, ni ningún don espiritual. Más bien debemos convertirnos en buenos bereanos “escudriñando cada día las Escrituras” (Hechos 17:11) para ver si estas cosas son de Dios o no. En resumen, haríamos bien en prestar atención al consejo del apóstol Pablo...

Examinadlo todo; retened lo bueno. Absteneos de toda especie de mal. Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.
— 1 Tesalonicenses 5:21-23`
    }
  },
  fr: {
    shattered: {
      title: 'Brisé et Consumé par le Saint-Esprit',
      description: `Pourquoi ces conflits avec le Saint-Esprit ? Pourquoi toutes ces divisions, luttes de pouvoir et de contrôle entre frères dans les Églises/le Corps du Christ ? L'apôtre Paul a déclaré : « J'ai planté, Apollos a arrosé, mais Dieu a fait croître... » (1 Corinthiens 3: 6-9). Ces fragmentations sont immenses et évidentes lors des jours de culte de chaque Église ou assemblée, en dehors des dimanches. Parfois, c'est le chaos ou la crise à l'intérieur, et encore plus de chaos ou de crise à l'extérieur. De l'impur à l'entrée, de l'impur à la sortie, tout cela au nom du « Saint-Esprit ». Malheureusement, certains frères se rendent irréconciliables et rancuniers, tout en continuant à se faire passer pour des saints. « Témoignez-vous vraiment de la présence du Saint-Esprit dans de telles vies ? » Le Saint-Esprit agit en nous à travers les Saintes Écritures. Il utilise les Saintes Écritures pour nous convaincre, influencer notre façon de penser et nous façonner à l'image de Dieu. Le Saint-Esprit donne aux croyants la puissance de vivre comme Jésus-Christ et d'être des témoins courageux pour Dieu. Le Saint-Esprit aide les disciples de Jésus-Christ dans nos faiblesses et intercède pour nous auprès du Père céleste. Il dirige, parle, remplit, révèle, enseigne et aide. Le Saint-Esprit envoie, interdit, contraint, convainc et avertit. Le Saint-Esprit donne une nouvelle naissance, fortifie, sanctifie et aime. Il donne des dons, scelle et s'afflige avec nous. C'est pourquoi, mon ami, ce livre « Brisé et Consumé par le Saint-Esprit » est à vous pour l'apprécier et le partager, s'il vous plaît. Édition de Finn.`
    },
    trauma: {
      title: 'Le Dilemme du Traumatisme : Guérir la Blessure, Restaurer l\'âme',
      description: `Croyez-le ou non, la réalité est que le TRAUMATISME laisse des cicatrices bien au-delà de l'esprit – ses résidus se répercutent dans notre esprit, nos relations, notre âme et notre corps lui-même.
Pourtant, la thérapie ou le conseil standard ignore souvent les aspects somatiques où le traumatisme réside silencieusement.
Pour les personnes spirituelles ou les clients, lorsqu'un événement déclencheur survient, on commence par prier. Avoir une approche holistique à la racine et ne pas se contenter de traiter les symptômes est ce que j'appelle une approche de surface ou superficielle qui ne résout jamais les problèmes principaux. La meilleure façon de bannir complètement le trouble est de plonger profondément dans la racine du problème. On se débarrasse d'un arbre en le déracinant, pas en coupant les feuilles ou les branches.
Le comprenez-vous ? Invariablement, le stress post-traumatique, l'anxiété, la faible estime de soi, l'abus de substances, la dépression, les deuils compliqués, le chagrin prolongé, le manque de confiance, le manque de valeur personnelle et de nombreux autres maux mentaux ou physiques peuvent être le résultat de traumatismes de l'enfance que vous avez subis. Les applications de différentes mentalités à travers le monde, associées à des contextes culturels et religieux, ont tendance à écarter le traitement professionnel approprié. Et c'est ainsi que l'on se dit :
« Bon, les choses s'arrangeront d'elles-mêmes. Ne faisons pas de vagues. Cachons les choses sous le tapis ou soyons simplement spirituels. »
« Demande une prière de délivrance unique au pasteur. »
« Passe à autre chose. »
« Prends sur toi. »
« Comporte-toi comme un adulte. »
« Fais semblant et avance. »
« Pas de problème. Avec le temps, ça passera. »
« Ou prends certains médicaments pour engourdir la douleur. »
Aucune de ces attitudes négatives ne remédiera à votre état. Selon mon expérience professionnelle, la meilleure approche consiste à revenir à l'essentiel : découvrir, accepter et guérir les traumatismes de l'enfance. Cela vous permettra de lâcher prise sur la douleur. En effet, cela vous permet de vous libérer de la culpabilité, de la honte et de l'autodestruction dans lesquelles vous vivez.
Ce livre vous aidera à franchir toutes les barrières, quels que soient votre âge et la saison ou phase de vie dans laquelle vous vous trouvez. Le livre propose un plan stratégique efficace qui vous mènera de la lutte vers le succès.`
    },
    maranatha: {
      title: 'Maranatha : Un Voyage Transformateur',
      description: `Ce livre insuffle une « source d'espoir et de victoire sur le péché ». Il aide les disciples de Christ à fortifier leur foi et à approfondir leur dépendance à l'égard de Dieu.
Giddy.Media

Maranatha et Vous vous mettra au défi de développer un esprit de discernement, ancré dans les Saintes Écritures et guidé par le Saint-Esprit. Ce livre vous aidera à naviguer dans les complexités de la vie moderne avec plus de clarté et de confiance.
CHC

Un livre incontournable et hautement recommandé pour chaque croyant. La lecture de ce livre a été pour moi une expérience transformatrice. Elle a approfondi ma foi, renouvelé mon espérance et m'a mis au défi de mener une vie agréable à Dieu.
Osaro

Ce livre vous y conduira ! Pour l'évangélisation et les missions, choisissez ce livre. De plus, je le recommande vivement à tous ceux qui cherchent à mieux comprendre l'eschatologie chrétienne ou qui veulent simplement être inspirés à vivre avec but et passion. CHCM`
    },
    valley: {
      title: 'La Vallée des Ossements Desséchés',
      description: `Quand il s'agit du Livre d'Ézéchiel, pour beaucoup de gens, c'est la seule partie du livre qu'ils connaissent – la Vallée des Ossements Desséchés – ce qui est vraiment dommage et préoccupant. Mais qu'est-ce que cela signifie ? Allons plus loin. Pour obtenir de la clarté, c'est le livre qu'il faut. – CHCM.

☆ Il n'y a pas d'espoir pour l'humanité. Mais ces ossements desséchés peuvent revivre. Par la Parole et l'Esprit de Dieu, les humains peuvent naître de nouveau, être enfin guéris de leurs divisions et unis sous un seul Roi. — CHC.

☆ Aucune situation n'est désespérée. Ne vous abandonnez pas et ne cédez pas à la dépression. Il n'y a pas de meilleure illustration de la puissance transformatrice de la parole proclamée que celle que le Prophète a vue dans sa vision. Elle a le pouvoir de transformer ceux qui vivent dans les transgressions et les péchés (Éphésiens 2:1-22) en êtres nouveaux, vivant en Christ, 2 Cor. 5:17. — Media-Osaro.

☆ Sans pressions internes ni externes, les lecteurs ne voudront pas fermer ce livre avant de l'avoir terminé. – CHM.

☆ Ce livre vous aidera à explorer comment cette vision apparemment impossible offre espoir et réconfort, et rappelle que Dieu peut transformer le désespoir en une vie vibrante. — Es. Best. Media.`
    },
    warfare: {
      title: 'Combat Spirituel',
      description: `Ce livre révèle que la guerre de Satan est principalement menée à cause de sa convoitise pour la gloire de Dieu.
Comme nous sommes faits à l'image de Dieu, ses représentants sur terre, et porteurs d'un potentiel de gloire éternelle, l'humanité est devenue la cible de la jalousie du diable, et la bataille s'est déplacée du ciel vers la terre.
GiddyMedia.

Ce livre démontre aux croyants en Christ que la bataille décisive a déjà été menée et remportée à la Croix. La résurrection a suivi immédiatement comme une démonstration de la puissance mise à la disposition de l'Église pour son combat contre Satan et ses forces. Être rempli du Saint-Esprit, c'est avoir tous les domaines de sa vie sous sa direction.
CHC.

Dans une transition de la défense à l'offensive, ce livre met les disciples de Christ au défi d'obéir à la grande commission de notre Seigneur et d'envahir le territoire ennemi pour amener les gens « des ténèbres à la lumière, et de la puissance de Satan à Dieu. »
(Actes 26:18). Dieu montre la conquête de Canaan par Israël comme une illustration de nos tendances douteuses et craintives, mais aussi comme un modèle pour la bataille.
CHM

Saints de Dieu, soyez vigilants car ce livre ouvre les yeux de votre cœur. La tactique principale de Satan est la tromperie. Satan est le père du mensonge. Le degré auquel nous croyons à ses mensonges est le degré auquel Satan ou les démons ont le contrôle sur nos vies.
CHCM

Qui êtes-vous et à qui appartenez-vous ? C'est un livre incontournable pour chaque croyant. Notre tendance à nous concentrer sur les méthodes, les médias, certains rituels culturels ou de diversité, les stratégies, les techniques, les formules et autres, trahit notre incapacité à ancrer les ministères dans la démonstration de la puissance de Dieu.
EstyMedia`
    },
    'jesus christ': {
      title: 'Qui est ce Jésus-Christ ? La Puissance de la Croix',
      description: `Ce que vous êtes sur le point de commencer est en réalité de la « théologie » — l'étude de Dieu.
Bien sûr, il y aura des chevauchements et des répétitions, car ces noms et thèmes sont étroitement liés, plusieurs étant souvent mentionnés dans le même passage. Mais ce n'est pas grave. Nous allons nager ensemble et, même si nous essaierons de garder cette étude organisée, le plus important est de profiter de l'eau.
Je ne veux pas que cela reste purement académique ou intellectuel. Mon but en menant cette étude est de vous aider à entrer dans une relation plus profonde avec Jésus.`
    },
    'way down': {
      title: 'Le Chemin du Bas est le Chemin du Haut',
      description: `Découvrez le profond paradoxe biblique selon lequel la véritable humilité et l'abandon sont les chemins menant à l'élévation spirituelle.`
    },
    grieving: {
      title: 'Deuil. Perte. & Mort.',
      description: `Trouver l'Espoir et la Guérison à Travers la Vallée de la Perte

Vivre le deuil d'un être cher est une chose à laquelle chacun d'entre nous sera confronté dans sa vie. Il n'y a pas de raccourci à travers la douleur, mais il y a un chemin pour la traverser.

Lorsque la perte frappe, le cœur crie « Pourquoi ? » et le corps porte le poids de la tristesse. Le deuil qui s'ensuit peut sembler imprévisible et sans fin, surtout lorsque les autres s'attendent à ce que la guérison vienne rapidement. Mais le deuil n'est pas une maladie : c'est un voyage naturel et sacré d'amour, de mémoire et d'acceptation.

Deuil, Perte et Mort offre des conseils bienveillants pour naviguer dans ce voyage. Avec compassion et clarté, ce livre fournit des outils pratiques pour atténuer le stress, calmer l'anxiété et améliorer le repos alors que vous traversez cette profonde perte. Il vous rappelle que même dans les moments les plus sombres, l'espoir peut renaître.

Que vous pleuriez un parent, un conjoint, un partenaire, un enfant, un frère ou une sœur, ou un ami cher, ce livre est un compagnon fidèle pour l'âme.

« Jésus lui dit : Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort. »
— Jean 11:25 (Louis Segond)`
    },
    calling: {
      title: 'L\'Appel du Saint-Esprit : Dévotionnel de 40 Jours',
      description: `Ce livre, L'Appel du Saint-Esprit : Dévotionnel de 40 Jours pour les enfants, les jeunes et les familles, vous engage. Réflexion ! Au bas des sujets de prière ou sur une feuille de papier séparée, dessinez une image simple de vous-même ou montrez de l'amour à un membre de votre famille, à vos voisins, etc. Maintenant, dessinez une image de votre foi en Dieu. Ce livre oint vous rappelle l'espoir en Dieu, même dans les moments où vous ne vous sentez pas optimiste ou démuni. Ce dévotionnel de 40 jours vous aidera à en savoir plus sur l'amour de Dieu, sa bonté, sa patience et son pardon, et sur la manière d'aider les autres à rejoindre sa famille.`
    },
    prayerless: {
      title: 'Prières sans Prière : Différentes Approches',
      description: `La prière possède une qualité vivante caractérisée par la chaleur et la liberté, et le sentiment que nous sommes en présence de Dieu, parlant à notre Père céleste. Interagissez avec Lui et impliquez-Le en confessant : « Viens et souffle en moi, Saint-Esprit. Viens, Saint-Esprit. »
Cher ami, je vous invite à faire ce voyage avec moi. Ce grand livre déverrouillera votre cœur profond et ouvrira les yeux de votre esprit pour combler ces vides dans votre vie. Nous n'avons rien à craindre. Nous ne récolterons que des joies, à découvrir en suivant sa direction.`
    },
    apologetics: {
      title: 'Apologétique',
      description: `Par la puissance du Saint-Esprit, les croyants voient leurs yeux spirituels s'ouvrir et en viennent à reconnaître les preuves. Jésus-Christ se fait connaître comme Celui qui est le Chemin, la Vérité et la Vie (Jean 14:6), distinct de toutes les autres voies mensongères et des vérités contrefaites. Ce livre vous aidera à découvrir que tous les engagements religieux ne sont pas « égaux ». – CHM —

Nous savons que nous devrions savoir quoi croire, mais comment devrions-nous communiquer cela à nos amis et voisins perdus ? Ce que nous croyons constitue le contenu, et la façon de le partager constitue la méthode. Ce livre vous apporte ce réveil et cette percée. — CHCM. — Faites le bon choix avec ce livre et arrêtez de tourner autour du pot.

La méthodologie apologétique est semblable au travail du bois : de même qu'un même outil peut être utilisé dans plusieurs projets, la même méthode peut être utilisée dans différentes conversations. Cependant, il y a des moments où un seul outil est nécessaire, la tâche déterminant l'outil. Aucun outil ne peut accomplir toutes les tâches. Il en va de même pour notre approche de l'apologétique. — CHC. —

Pour la personne avec un marteau, tout ressemble à un clou. Il est plus facile de parler à certaines personnes qu'à d'autres, et il n'y a pas d'approche unique qui fonctionne avec tout le monde. Ce livre d'apologétique vous fournit le mécanisme nécessaire. — MediaGiddy`
    },
    nuggets: {
      title: 'Pépites de Foi : L\'Essentiel',
      description: `Que vous posiez vous-même les questions ou que vous souhaitiez répondre à d'autres personnes présentes, ce livre de ressources, Pépites de Foi : L'Essentiel, est à vous et pour les autres.

Peu importe ce que le monde enseigne, aucune Église locale ou dénomination ne possède tout. Une partie n'est jamais plus grande que le tout. Les Saintes Écritures sont la vérité, claires, concrètes et parfaites. Ce livre — Pépites de Foi : L'Essentiel — vous encouragera à enraciner vos croyances dans la vérité, avec l'assurance que le Christ a une réponse à chaque problème auquel vous faites face aujourd'hui.`
    },
    jezebel: {
      title: 'L\'Esprit de Jézabel, L\'Esprit d\'Achab, et Vous.',
      description: `Dans les Saintes Écritures, Jézabel était mariée à Achab, roi d'Israël. Achab a cédé son pouvoir à sa femme, se pliant à son contrôle, ce qui a rendu le royaume passif.

De la même manière aujourd'hui, les personnes manifestant le contrôle et la domination d'un esprit de Jézabel contraignent les autres à adopter la passivité d'un esprit d'Achab, que ce soit dans le cadre du mariage, de l'église, de toute autre relation ou des institutions gouvernementales.

Bien-aimés, attendez un instant ! Où en êtes-vous et comment êtes-vous vous aussi pris dans cet engrenage ? Ce livre unique — L'Esprit de Jézabel, l'Esprit d'Achab et Vous — établit une connexion. Encore une fois, où vous situez-vous dans ce labyrinthe et cette saga ? Quelle est votre position ? Avez-vous une perspective éternelle ? Une vision céleste ? Une passion pour ces âmes compromises et mourantes autour de vous et au-delà ?

Vous pourriez dire : « Bien sûr, tout va comme d'habitude. Je ne suis pas appelé à cela. D'autres se chargeront des confrontations difficiles avec ces esprits mauvais. »

Écoutez-moi comme j'écoute la Parole de Dieu.

L'« esprit » de « Jézabel » n'était pas unique à l'église de Thyatire. Il est bien vivant dans le corps de Christ aujourd'hui. Il suffit de lire les derniers titres de l'actualité locale et mondiale. C'est un esprit insidieux, mais subtil. Il est destructeur mais séduisant. Il gagne généralement du terrain parmi ceux qui ont tellement peur d'éteindre l'Esprit (1 Thes. 5:19) qu'ils ne parviennent pas à maîtriser la chair.

Venez avec moi, bien-aimés. La solution n'est pas de rejeter le prophétique dans son ensemble, ni aucun don spirituel d'ailleurs. Nous devons plutôt devenir de bons Béréens, « examinant les Écritures chaque jour » (Actes 17:11) pour voir si ces choses viennent de Dieu ou non. En résumé, nous ferions bien de suivre le conseil de l'apôtre Paul...

Examinez toutes choses ; retenez ce qui est bon. Abstenez-vous de toute espèce de mal. Et que le Dieu de paix vous sanctifie lui-même tout entiers, et que tout votre être, l'esprit, l'âme et le corps, soit conservé irréprochable, lors de l'avènement de notre Seigneur Jésus-Christ !
— 1 Thessaloniciens 5:21-23`
    }
  },
  ha: {
    shattered: {
      title: 'POKONAYO NA GOKELEWA KE MOYA O MOYENG',
      description: `Me ya sa ake samun sabani da Ruhu Mai Tsarki? Me ya sa duk waɗannan rarrabuwar kawuna, fafutukar neman iko, da danniya a tsakanin ’yan’uwa a cikin Cococi/Jikin Kristi? Manzo Bulus ya bayyana cewa, “Ni na shuka, Afolos ya shayar, amma Allah ne ya yi girma….” (1 Korintiyawa 3:6-9). Waɗannan rarrabuwar kawuna suna da girma kuma a fili suke a kowace ranar bautar Coci ko tarayya ban da ranar Lahadi. Wani lokaci hargitsi ne ko rikici a ciki da ƙarin hargitsi ko rikici a waje. Shara a ciki da shara a waje da sunan “Ruhu Mai Tsarki”. Abin takaici, wasu ’yan’uwa sun mayar da kansu marasa jituwa da rashin gafartawa kuma har yanzu suna nuna kansu a matsayin tsarkaka. “Shin da gaske kuna shaida Ruhu Mai Tsarki yana tafiya a cikin irin waɗannan rayuka?” Ruhu Mai Tsarki yana aiki a cikinmu ta wurin Littattafai Masu Tsarki. Yana amfani da Littattafai Masu Tsarki don ya tabbatar mana da laifi, ya kuma rinjayi yadda muke tunani, kuma ya buɗe mana hanyar da zai karkatar da mu mu zama mutane masu tsoron Allah. Ruhu Mai Tsarki yana ba wa masu bi iko su yi rayuwa kamar Yesu Kristi kuma su zama shaidu masu gaba gaɗi ga Allah. Ruhu Mai Tsarki yana taimaka wa mabiyan Yesu Kristi a cikin rauninmu kuma yana yi mana ceto a gaban Ubanmu na Sama. Yana jagoranci, yana magana, yana cikawa, yana bayyanawa, yana koyarwa, kuma yana taimakawa. Ruhu Mai Tsarki yana aikawa, yana hanawa, yana takura, yana tabbatar da laifi, yana kuma gargaɗi. Ruhu Mai Tsarki yana ba da sabuwar haihuwa, yana ƙarfafawa, yana tsarkakewa, yana kuma ƙauna. Yana ba da kyautai, yana hatimi, kuma yana baƙin ciki tare da mu. Saboda haka, abokina, wannan littafi “Pokonayo na Gokelewa ke Moya o Moyeng”, naka ne don ka ji daɗi kuma ka ba wa wasu, don Allah. Finn.`
    },
    trauma: {
      title: 'Maganar Matsalar Hargitsi: Warkar da Rauni, Mayar da Kurwa',
      description: `Ko kun yarda ko a'a, gaskiyar ita ce HARGITSI (Trauma) yana barin tabo mai nisa bayan tunani - sauran abubuwan da ke tattare da shi suna ruri ta cikin ruhunmu, alaƙarmu, kurwarmu, da jikinmu kansa.
Duk da haka, jiyya ko shawarwari na yau da kullun sau da yawa suna yin watsi da abubuwan da suka shafi jiki inda hargitsi yake rayuwa a natse.
Ga waɗanda suke da tunani na ruhaniya ko abokan ciniki, lokacin da wani abu ya faru - kuna fara addu'a. Kasancewa da cikakkiyar hanya ta tushe ba wai kawai magance alamun ba shi ne abin da nake kira hanya mai sauƙi wacce ba za ta taɓa magance manyan matsalolin ba. Hanya mafi kyau don kawar da matsalar gaba ɗaya ita ce shiga cikin tushen matsalar. Kuna kawar da bishiya ta hanyar tumɓuke ta daga tushe ba ta hynar yanke ganye ko rassa ba.
Kuna gane hakan? Hakika, damuwa bayan hargitsi, fargaba, rashin girman kai, shan miyagun ƙwayoyi, baƙin ciki, rikice-rikice na rashi, baƙin ciki mai tsawo, rashin amincewa da kai, rashin darajar kai, da sauran cututtuka na tunani ko na jiki na iya zama sakamakon hargitsin lokacin ƙuruciya da kuka jimre. Aikace-aikacen ra'ayoyin duniya na tunani daban-daban, haɗe da al'adu da addinai, na iya sa mutane su yi watsi da magani na ƙwararru. Ga yadda abin yake faruwa:
“Ok, abubuwa za su daidaita kansu. Kar ka tayar da tarzoma. Bar abubuwa a ƙarƙashin kafet ko kuma kawai ka zama na ruhaniya.”
“Sami addu'ar neman tsira ta lokaci guda daga wajen minista.”
“Kammala da shi.”
“Haƙura da shi.”
“Yi hali kamar babba.”
“Yi riya kuma ka ci gaba.”
“Babu matsala. Da shigewar lokaci, zai tafi.”
“Ko kuma ka sha wasu nau'ikan magunguna don rage zafinsa.”
Babu ɗayan waɗannan abubuwa marasa kyau da zai warkar da yanayinku. Mafi kyau hanya a cikin tsarin ƙwararruna ita ce komawa ga abubuwan yau da kullun - gano, karɓa da warkar da hargitsin ƙuruciya. Za su ba ku damar barin zafin ya tafi. A sakamakon haka, yana ba ku damar 'yantar da kanku daga laifi, kunya, da lalata kai da kuke rayuwa a ciki.
Wannan littafi zai taimake ku wajen ketare kowane shinge, ba tare da la'akari da shekarunku da lokaci ko matakin rayuwa da kuke ciki ba. Littafin yana ba da ingantaccen tsari mai kyau wanda zai kai ku ga nasara daga kokawa.`
    },
    maranatha: {
      title: 'Maranatha: Tafiya mai Canzawa',
      description: `Wannan littafin yana hura “tushen fata da nasara akan zunubi.” Yana taimaka wa almajiran Kristi su ƙarfafa bangaskiyarsu kuma ya zurfafa dogaro ga Allah.
Giddy.Media

Maranatha da Kai zai ƙalubalance ku don haɓaka ruhun fahimi, wanda ya kafu a cikin Littattafai Masu Tsarki kuma Ruhu Mai Tsarki ya jagorance shi. Wannan littafi zai taimake ku wajen gudanar da al'amuran rayuwar yau da kullum cikin ƙarin haske da amincewa.
CHC

Littafin da ya kamata kowa ya karanta kuma ana ba da shawararsa sosai ga kowane mai bi. Karanta wannan littafin ya ba ni kyakkyawar ƙwarewa ta canji. Ya zurfafa bangaskiyata, ya sabunta fawata, kuma ya ƙalubalance ni in yi rayuwar da ta faranta wa Allah rai.
Osaro

Wannan littafin zai kai ku can! Don bishara da ayyukan mishan, zaɓi wannan littafin. Bugu da ƙari, ina ba da shawararsa sosai ga duk wanda ke neman zurfafa fahimtar eschatology na Kirista ko kuma ƙalubalanci don yin rayuwa mai manufa da sha'awa. CHCM`
    },
    valley: {
      title: 'Kwarin busassun Kasusuwa',
      description: `Idan ana maganar Littafin Ezekiel, ga mutane da yawa, wannan shi ne kaɗai ɓangaren littafin da suka sani - watau Kwarin busassun ƙasusuwa - wanda abin baƙin ciki ne da damuwa ƙwarai. Amma me yake nufi? Bari mu zurfafa. Don samun haske, wannan shi ne littafin. – CHCM.

☆ Babu fata ga bil'adama. Amma waɗannan busassun ƙasusuwan za su iya rayuwa. Ta wurin Magana, da Ruhu na Allah, ana iya sake haifar da mutane, kuma a ƙarshe a warkar da su daga rarrabuwar kawuna, kuma su haɗu a ƙarƙashin Sarki guda. — CHC.

☆ Babu wani yanayi da babu fata a cikinsa. Kada ka karaya a kanka ko ka shiga cikin damuwa. Babu wani misali mafi kyau na ikon canza rayuwa na kalmar da aka yi wa'azinta da Annabin ya gani a cikin wahayinsa. Yana da ikon canza waɗanda ke cikin laifuffuka da zunubai (Afisawa 2: 1- 22,) zuwa sababbi, masu rayuwa cikin Kristi, 2 Kor. 5: 17. — Media-Osaro.

☆ Ba tare da matsin lamba na ciki da na waje ba, masu karatu ba za su so su ajiye wannan littafin ba har sai an gama shi. – CHM.

☆ Wannan littafin zai taimake ku ku bincika yadda wannan wahayi da ake gani ba zai yiwu ba yake ba da fata, ta'aziyya, kuma tunatarwa ne cewa Allah zai iya canza rashin fata zuwa rayuwa mai ban sha'awa. — Es. Mafi kyau. Media.`
    },
    warfare: {
      title: 'Yakin Ruhu',
      description: `Wannan littafin ya bayyana yaƙin Shaidan a matsayin wanda aka kafa shi musamman saboda sha'awarsa ga ɗaukakar Allah.
Tunda an halicce mu cikin surar Allah, mu ne wakilan Allah a duniya, kuma muna da damar samun madawwamiyar ɗaukaka, ɗan adam ya zama makasudin kishin Iblis kuma yaƙin ya tashi daga sama zuwa duniya.
GiddyMedia.

Wannan littafin ya nuna wa masu bi ga Kristi cewa an riga an yi yaƙi na ƙarshe kuma an yi nasara a kan Gicciye. Tashin matattu ya biyo baya nan take a matsayin nuni na ikon da za a samar wa Coci don yaƙinta da Shaidan da rundunoninsa. Kasancewa cike da Ruhu Mai Tsarki shi ne a sami dukkan sassan rayuwa a ƙarƙashin jagorancinsa.
CHC.

A cikin sauyin sheka daga tsaro zuwa kai hari, wannan littafi ya ƙalubalanci mabiyan Kristi su yi biyayya ga umurnin Ubangijinmu kuma su mamaye yankin maƙiyi don juyar da mutane “daga duhu zuwa haske, da kuma daga ikon Shaidan zuwa ga Allah.”
(Ayyukan Manzanni 26:18). Allah ya nuna nasarar da Isra'ilawa suka yi a kan Kan'ana a matsayin misali na shakkunmu da tsoronmu, amma kuma a matsayin abin koyi ga yaƙin.
CHM

Tsarkaka na Allah, ku yi hankali domin wannan littafin yana buɗe idonku na ciki. Dabarar Shaidan ta farko ita ce yaudara. Shaidan ne uban ƙarya. Matakin da muka yi imani da duk wata ƙaryarsa shi ne matakin da Shaidan ko aljanu ke da iko a kan rayuwarmu.
CHCM

Wane ne kai kuma na wane ne kai? Wannan littafi ne da ya kamata kowane mai bi ya karanta. Halinmu na mayar da hankali kan hanyoyi, kafofin watsa labarai, wasu al'adu/bambancin al'adu, dabarun aiki, dabarun fasaha, dabaru, da makamantansu yana nuna gazawarmu na gina ma'aikatunmu ta hanyar dogara ga nunin ikon Allah.
EstyMedia`
    },
    'jesus christ': {
      title: 'Wane ne wannan Yesu Almasihu? Ikon Gicciye',
      description: `Abin da kuke shirin farawa da shi a zahiri “tunanin Allah” ne (theology) - watau nazarin Allah.
Tabbas, za a sami ɗan daidaituwa da maimaitawa, tunda waɗannan sunayen da jigogi suna haɗe da juna, da yawa ana ambaton su sau da yawa a cikin aya ɗaya. Amma hakan yana da kyau. Za mu yi iyo tare, kuma ko da yake za mu yi ƙoƙari mu tsara binciken da kyau, mafi mahimmanci shi ne mu ji daɗin ruwan.
Ba na son wannan ya zama ilimi kawai na makaranta ko na ka. Burina na yin wannan binciken shi ne in taimake ku shiga cikin dangantaka mai zurfi da Yesu.`
    },
    'way down': {
      title: 'Hanyar Kasa ita ce Hanyar Sama',
      description: `Gano babban paradox na nassosi cewa gaskiya tawali'u da mika wuya sune hanyoyin daukaka ta ruhaniya.`
    },
    grieving: {
      title: 'Bakin Ciki. Rasuwa. & Mutuwa.',
      description: `Neman Fata da Warkarwa ta Kwarin Rashi

Yin makoki game da mutuwar masoyi wani abu ne da kowannenmu zai fuskanta a rayuwa. Babu wata gajeriyar hanya ta cikin zafin - amma akwai hanyar da za a bi ta ciki.

Lokacin da rashi ya faru, zuciya tana kuka, “Don me?” kuma jiki yana ɗaukar nauyin baƙin ciki. Baƙin cikin da ke biyo baya zai iya zama mara tabbas kuma mara ƙarshe, musamman lokacin da wasu ke tsammanin waraka za ta zo da sauri. Baƙin ciki ba cuta ba ne - tafiya ce ta halitta, mai tsarki ta ƙauna, ƙwaƙwalwa, da barin abubuwa su wuce.

Wannan littafin, “Bakin Ciki, Rasuwa, & Mutuwa”, yana ba da jagora mai kyau don tafiyar da wannan tafiya. Cikin tausayi da haske, wannan littafin yana ba da kayan aiki masu amfani don rage damuwa, kwantar da hangen nesa, da inganta hutu yayin da kuke cikin babban rashi. Yana tunatar da ku kaɗai a cikin mafi duhun lokuta, fata za ta iya sake tashi.

Ko kuna makoki ga mahaifi, mata ko miji, abokin tarayya, yaro, ɗan'uwa, ko aboki na kusa, wannan littafin abokin tarayya ne na kurwarku.

“Yesu ya ce mata, ‘Ni ne tashin matattu, ni ne kuma rai. Duk wanda ya gaskata da ni zai rayu, ko da ya mutu.’”
— Yohanna 11:25`
    },
    calling: {
      title: 'Kiran Ruhu Mai Tsarki: Bauta ta Kwanaki 40',
      description: `Wannan littafin, “Kiran Ruhu Mai Tsarki: Bauta ta Kwanaki 40 ga Yara, Matasa, da Iyali”, yana sa ku shiga ciki. Tunani! A ƙasan abubuwan addu'a ko a kan wata takarda daban, zana hoto mai sauƙi na kanka, ko ka nuna ƙauna ga wani a cikin iyalinka, maƙwabta, da dai sau sauran. Yanzu, zana hoton bangaskiyarka ga Allah. Wannan littafi mai albarka yana tunatar da ku fata ga Allah, har ma a lokutan da ba ku da fata ko kuke jin babu taimako. Wannan Bauta ta kwanaki 40 za ta taimake ku ku koyi game da ƙaunar Allah, alheri, haƙuri, da gafara, da kuma taimaka wa wasu su shiga cikin iyalinsa.`
    },
    prayerless: {
      title: 'Addu\'o\'i marasa Addu\'a: Daban-daban Bugun jini',
      description: `Addu'ar tana da inganci mai rai wanda ke da dumi da 'yanci da kuma jin cewa muna gaban Allah muna magana da Ubanmu na Sama. Kasance da shi kuma ka sa shi shiga ta hanyar furtawa, “Zo ka hura mini, Ruhu Mai Tsarki. Zo, Ruhu Mai Tsarki.”
Ya aboki na kusa, ina gayyatar ka da ka zo tare da ni a wannan tafiya. Wannan babban littafi zai buɗe zuciyarka ta ciki wacce za ta saki idonka na ciki don cika waɗancan guraben a rayuwarka. Ba mu da abin tsoro. Muna samun farin ciki ne kawai, wanda za a gano lokacin da muka bi jagorancinsa.`
    },
    apologetics: {
      title: 'Apologetics (Kariya ga Addini)',
      description: `Ta wurin ikon Ruhu Mai Tsarki, masu bi suna buɗe idanunsu na ruhaniya kuma suna amincewa da shaidar. Yesu Kristi yana bayyana kansa a matsayin wanda shi ne Hanya, Gaskiya da Rai, (Yohanna 14:6) daban da duk sauran hanyoyin ƙarya da gaskiyar jabu. Wannan littafin zai taimake ku ku gano cewa ba duk alkawuran addini ne suke da “daidai” ba. – CHM—

Mun san ya kamata mu san abin da za mu yi imani da shi, amma ta yaya za mu isar da hakan ga abokanmu da maƙwabtanmu da suka ɓace? Abin da muka gaskata shi ne abin da ke ciki, yadda muke raba shi kuma ita ce hanya. Wannan littafi yana ba ku wannan karin kumallo da nasara. —CHCM. — Yi daidai da wannan littafin kuma ka daina dukan daji.

Hanyar apologetics tana kama da aikin kafinta - kamar yadda za a iya amfani da kayan aiki guda ɗaya a ayyuka da yawa, haka nan za a iya amfani da hanya ɗaya a tattaunawa daban-daban. Koyaya, akwai lokutan da kayan aiki guda ɗaya kawai ake buƙata, aikin yana ƙayyade kayan aiki. Babu wani kayan aiki da zai iya cika kowane aiki. Haka yake da tsarinmu na kare bangaskiya. — CHC. —

Ga mutumin da yake da guduma, komai yana kama da ƙusa. Wasu mutane sun fi sauƙi a yi magana da su fiye da wasu kuma babu wani tsari na “hanya ɗaya” da ke aiki da kowa. Wannan littafin na Apologetics yana ba ku tsarin yin hakan. — MediaGiddy`
    },
    nuggets: {
      title: 'Nuggets na Imani: Babban Abu',
      description: `Ko kuna yin tambayoyin da kanku ko kuna son ba wa wasu da ke nan amsa - wannan littafin albarkatun, Nuggets na Imani: Babban Abu, naku ne da na wasu.

Ko mene ne duniya ke koyarwa, babu wata Coci ta gida ko ƙungiya da ke da shi duka. Sashe ba ya taɓa zama fiye da duka. Littafi Mai Tsarki gaskiya ne, a fili, tabbatacce, kuma cikakke. Wannan littafi - Nuggets na Imani: Babban Abu - zai ƙarfafa ku ku kafa imaninku a cikin gaskiya, da tabbacin cewa Kristi yana da amsa ga kowace irin matsala da kuke fuskanta a yau.`
    },
    jezebel: {
      title: 'Ruhun Jezebel, Ruhun Ahab, Da Kai.',
      description: `A cikin Littattafai Masu Tsarki, Jezebel ta auri Ahab, Sarkin Isra'ila. Ahab ya mika ikonsa ga matarsa, ya amince da ikonta kuma mulkin ya zama mai biyayya kawai.

Haka nan a yau, mutanen da ke nuna iko da mulki na ruhun Jezebel suna tilasta wa mutane shiga cikin halin ruhun Ahab, ko a cikin yanayin aure, coci, kowace irin alaƙa ko hukumomin gwamati.

Masu ƙauna, jira minti ɗaya! A ina kuke kuma ta yaya kuka tsinci kanku a cikin wannan? Wannan littafi na musamman - Ruhun Jezebel, Ruhun Ahab, da Kai - yana haifar da alaƙa. Bugu da ƙari, a ina kuke a cikin wannan rukunin da saga? Menene matsayinku? Wani hangen nesa na har abada? Wani hangen nesa na Sama? Wata sha'awa ga waɗannan rayukan da ke yin sulhu da lalacewa a kusa da ku da kuma bayanta?

Kuna iya cewa, “Tabbas, kasuwanci kamar yadda aka saba. Ba a kira ni don wannan ba. Wasu za su yi fito-na-fito da waɗannan munanan ruhohi.”

Ku saurare ni yayin da nake ji daga Maganar Allah.

“Ruhun” “Jezebel” ba na cocin Tiyatira ne kaɗai ba. Yana da rai kuma yana aiki a cikin jikin Kristi a yau. Mutum yana bukatar kawai ya karanta sabbin labaran gida da na duniya. Ruhu ne mai haɗari, amma mai sauƙi. Yana da ban tsoro duk da yana da ban sha'awa. Yawancin lokaci yana samun ƙarfi a tsakanin waɗanda ke jin tsoron kashe Ruhu (1 Tas. 5:19) ta yadda sun kasa kame jiki.

Ku zo tare da ni, ƙaunatattuna. Mafita ba ita ce a yi watsi da annabci gaba ɗaya ba, ko wata kyauta ta ruhaniya. Maimakon haka dole ne mu zama mutanen Berea nagari “muna bincika Littattafai kowace rana” (Ayyukan Manzanni 17:11) don mu ga ko waɗannan abubuwan na Allah ne ko a'a. A taƙaice, za mu yi kyau mu kiyaye shawarar Manzo Bulus...

Gwajin kowane abu; riƙe abin da yake da kyau. Ku guje wa kowane irin mugunta. Kuma Allah na salama da kansa ya tsarkake ku sarai; kuma ina rokon Allah gaba dayan ruhunka da kurwarka da jikinka su kiyaye marasa aibi har zuwa ranar dawowar Ubangijinmu Yesu Kristi.
— 1 Tasalonikawa 5:21-23`
    }
  },
  sw: {
    shattered: {
      title: 'Kuvunjika na Kuteketezwa na Roho Mtakatifu',
      description: `Kwa nini kuna migogoro na Roho Mtakatifu? Kwa nini kuna migawanyiko yote hii, mapambano ya madaraka, na udhibiti miongoni mwa ndugu katika Makanisa/Mwili wa Kristo? Mtume Paulo alitangaza, “Mimi nilipanda, Apolo akamwagilia maji; bali Mwenyezi Mungu ndiye aliyekuza...” (1 Wakorintho 3:6-9). Migawanyiko hii ni mikubwa na iliyo wazi katika kila siku ya ibada ya Kanisa au ushirika mbali na Jumapili. Wakati mwingine ni machafuko au shida ndani na machafuko au shida zaidi nje. Uozo unaoigizwa ndio uozo unaotoka kwa jina la “Roho Mtakatifu”. Kwa bahati mbaya, baadhi ya ndugu wamejifanya kutopatanishwa na wasiosamehe na bado wanajionyesha kama watakatifu. “Je, kweli unamshuhudia Roho Mtakatifu akitembea katika maisha kama haya?” Roho Mtakatifu hufanya kazi ndani yetu kupitia Maandiko Matakatifu. Yeye hutumia Maandiko Matakatifu kutuhukumu na kuathiri njia yetu ya kufikiri na kufungua njia ya kutufanya kuwa watu wamchao Mungu. Roho Mtakatifu anawapa waumini nguvu ya kuishi kama Yesu Kristo na kuwa mashahidi wajasiri wa Mungu. Roho Mtakatifu huwasaidia wafuasi wa Yesu Kristo katika udhaifu wetu na kutuombea kwa Baba wa Mbinguni. Anaongoza, anazungumza, anajaza, anafunua, anafundisha, na anasaidia. Roho Mtakatifu anatuma, anakataza, analazimisha, anahukumu, na anaonya. Roho Mtakatifu anatoa uzazi mpya, anawezesha, anatenga, na anapenda. Yeye hutoa karama, anapiga muhuri, na anahuzunika pamoja nasi. Kwa hiyo, rafiki yangu, kitabu hiki “Kuvunjika na Kuteketezwa na Roho Mtakatifu”, ni chako ili ufurahie na kukipitisha kwa wengine, tafadhali. Finn.`
    },
    trauma: {
      title: 'Utata wa Kiwewe: Kuponya Maumivu, Kurejesha Nafsi',
      description: `Kubali au ukataa, ukweli ni kwamba KIWEWE huacha makovu mbali zaidi ya akili – mabaki yake huvuma kupitia roho yetu, mahusiano, nafsi, na mwili wenyewe.
Hata hivyo, tiba/ushauri wa kawaida mara nyingi hupuuza vipengele vya mwili ambapo kiwewe hukaa kimya.
Kwa wale wenye nia ya kiroho au wateja, tukio linapochochea – unaomba kwanza. Kuwa na mtazamo wa msingi wa jumla na si kushughulika tu na dalili ndiko ninakoita mtazamo wa juu juu ambao kamwe hautatui masuala makuu. Njia bora ya kukomesha kabisa tatizo hili ni kuingia ndani kabisa ya kiini cha suala hilo. Unauondoa mti kwa kuung'oa kutoka kwenye mzizi na sio kwa kukata majani/matawi.
Je, unaelewa? Bila shaka, msongo wa mawazo baada ya kiwewe, wasiwasi, kujidharau, matumizi mabaya ya dawa za kulevya, unyogovu, kufiwa ngumu, kuomboleza kwa muda mrefu, unyogovu, ukosefu wa kujiamini, ukosefu wa kujiona una thamani, na magonjwa mengine mengi ya kiakili/kimwili yanaweza kuwa matokeo ya majeraha ya utotoni uliyovumilia. Matumizi ya mitazamo tofauti ya ulimwengu, pamoja na asili ya kitamaduni na kidini, yanaweza kuwa na tabia ya kupuuza matibabu sahihi ya kitaaluma. Ndio haya sasa.
“Sawa, mambo yatajishughulikia yenyewe. Usilete taabu. Acha mambo chini ya zulia au tu kuwa wa kiroho.”
“Pata maombi ya ukombozi wa mara moja tu kutoka kwa mhudumu.”
“Maliza nayo.”
“Vumilia.”
“Jiendeshe kama mtu mzima.”
“Jifanye na uendelee mbele.”
“Hakuna shida. Baada ya muda, itaisha.”
“Au tumia aina fulani ya dawa za kulevya ili kuipunguza makali.”
Hakuna hata moja ya mambo haya mabaya yatakayorekebisha hali yako. Mtazamo bora katika mtazamo wangu wa kitaaluma ni kurudi kwenye misingi – kufunua, kukubali na kuponya majeraha ya utotoni. Yatakuruhusu kuacha maumivu yaende. Kwa kweli, inakuwezesha kujiondoa kutoka kwa hatia, aibu, na uharibifu wa kibinafsi ambao umekuwa ukiishi nao.
Kitabu hiki kitakusaidia kuvuka kila kizuizi, bila kujali umri wako na msimu/awamu ya maisha uliyonayo. Kitabu hiki kinatoa mpango mkakati madhubuti utakaokutoa kwenye mapambano hadi kwenye mafanikio.`
    },
    maranatha: {
      title: 'Maranatha: Safari ya Mabadiliko',
      description: `Kitabu hiki kinapumua “chanzo cha tumaini na ushindi juu ya dhambi.” Kinawasaidia wanafunzi wa Kristo kuimarisha imani yao na kuongeza utegemezi wao kwa Mungu.
Giddy.Media

Maranatha na Wewe kitakupa changamoto ya kukuza roho ya utambuzi, iliyoanzishwa katika Maandiko Matakatifu na kuongozwa na Roho Mtakatifu. Kitabu hiki kitakusaidia kupitia ugumu wa maisha ya sasa kwa uwazi na ujasiri mkubwa zaidi.
CHC

Kitabu ambacho lazima kisomwe na kinachopendekezwa sana kwa kila mwamini. Kusoma kitabu hiki kulinipa uzoefu wa mabadiliko. Kiliimarisha imani yangu, kilifanya upya tumaini langu, na kilinipa changamoto ya kuishi maisha yanayompendeza Mungu.
Osaro

Kitabu hiki kitakufikisha huko! Kwa Uinjilisti na Misheni, chagua kitabu hiki. Aidha, ninakipendekeza sana kwa mtu yeyote anayetafuta uelewa wa kina wa eskatolojia ya Kikristo au anayetaka tu kuhamasishwa kuishi kwa kusudi na shauku. CHCM`
    },
    valley: {
      title: 'Bonde la Mifupa Mikavu',
      description: `Linapokuja suala la Kitabu cha Ezekieli, kwa watu wengi, hii ndiyo sehemu pekee ya kitabu wanayoijua–Bonde la Mifupa Mikavu— jambo ambalo ni la kusikitisha na la kutia wasiwasi sana. Lakini inamaanisha nini? Hebu twende ndani zaidi. Ili kupata uwazi, hiki ndicho kitabu chenyewe. – CHCM.

☆ Hakuna tumaini kwa wanadamu. Lakini mifupa hii mikavu inaweza kuishi. Kwa Neno, na Roho wa Mungu, wanadamu wanaweza kuzaliwa upya, na hatimaye kuponywa kutokana na kutengana kwao, na kuunganishwa chini ya Mfalme mmoja. — CHC.

☆ Hakuna hali isiyo na matumaini. Usijikate tamaa au kujisalimisha kwa unyogovu. Hakuna kielelezo kizuri zaidi cha nguvu inayobadilisha maisha ya neno lililohubiriwa ambalo Nabii aliona katika maono yake. Lina nguvu ya kuwabadilisha wale walio katika makosa na dhambi (Waefeso 2:1-22,) kuwa wapya, wanaoishi ndani ya Kristo, 2 Kor. 5:17. — Media-Osaro.

☆ Bila shinikizo la ndani na nje, wasomaji hawatataka kukiweka chini kitabu hiki hadi kitakapokamilika. – CHM.

☆ Kitabu hiki kitakusaidia kuchunguza jinsi maono haya yanayoonekana kuwa hayawezekani yanatoa tumaini, faraja, na ni ukumbusho kwamba Mungu anaweza kubadilisha kutokuwa na tumaini kuwa maisha yenye nguvu. — Es. Best. Media.`
    },
    warfare: {
      title: 'Vita vya Kiroho',
      description: `Kitabu hiki kilifichua vita vya Shetani kama vilivyopiganwa hasa kutokana na tamaa yake ya utukufu wa Mungu.
Kwa kuwa tuliumbwa kwa mfano wa Mungu, sisi ni wawakilishi wa Mungu duniani, na tuna uwezo wa kupata utukufu wa milele, wanadamu wamekuwa shabaha ya wivu wa ibilisi na vita vimehamia kutoka mbinguni kwenda duniani.
GiddyMedia.

Kitabu hiki kiliwaonyesha waumini katika Kristo kwamba vita vya uamuzi tayari vimepiganwa na kushindwa pale Msalabani. Kufufuka kulifuata mara moja kama wonyesho wa nguvu zitakazopatikana kwa Kanisa kwa ajili ya vita vyake na Shetani na majeshi yake. Kujazwa na Roho Mtakatifu ni kuwa na maeneo yote ya maisha chini ya mwongozo Wake.
CHC.

Katika mpito kutoka ulinzi kwenda mashambulizi, kitabu hiki kinawapa changamoto wafuasi wa Kristo kutii agizo la Bwana wetu na kuvamai eneo la adui ili kuwageuza watu “kutoka gizani kwenda kwenye nuru, na kutoka kwa nguvu za Shetani kwenda kwa Mungu.”
(Matendo 26:18). Mungu anaonyesha ushindi wa Israeli wa Kanaani kama mfano wa tabia zetu za kutilia shaka, na uoga, lakini pia kama mfano wa vita hivyo.
CHM

Watakatifu wa Mungu, jihadharini kwani kitabu hiki kinafungua jicho lenu la ndani. Mbinu kuu ya Shetani ni udanganyifu. Shetani ndiye baba wa uongo. Kiasi tunachoamini uongo wake wowote ndicho kiasi ambacho Shetani au pepo wana udhibiti wa maisha yetu.
CHCM

Wewe ni nani na wewe ni wa nani? Hiki ni kitabu cha lazima kusomwa na kila mwamini. Tabia yetu ya kuzingatia mbinu, vyombo vya habari, tamaduni fulani/mila mbalimbali, mikakati, mbinu, fomula, na kadhalika inasaliti kushindwa kwetu kuanzisha huduma kwa kutegemea udhihirisho wa nguvu za Mungu.
EstyMedia`
    },
    'jesus christ': {
      title: 'Huyu Yesu Kristo ni Nani? Nguvu ya Msalaba',
      description: `Unachokaribia kuanza nacho kwa kweli ni “theolojia” – somo kuhusu Mungu.
Bila shaka, kutakuwa na mwingiliano na kurudiarudia, kwa kuwa majina haya na mada hizi zimeunganishwa, na mengi yanatajwa mara kwa mara katika kifungu kimoja. Lakini hiyo ni sawa. Tunaenda kuogelea pamoja, na ingawa tutajaribu kufanya utafiti huo kuwa na mpangilio, jambo muhimu zaidi ni kufurahia maji.
Sitaki hii iwe ya kitaaluma tu au ujuzi wa kichwa pekee. Lengo langu la kufanya utafiti huu ni kukusaidia kuingia katika uhusiano wa kina zaidi na Yesu.`
    },
    'way down': {
      title: 'Njia ya Chini ndiyo Njia ya Juu',
      description: `Gundua kitendawili kikuu cha kibiblia kwamba unyenyekevu wa kweli na kujisalimisha ndio njia za kuinuliwa kiroho.`
    },
    grieving: {
      title: 'Kuhuzunika. Kufiwa. & Kufa.',
      description: `Kupata Tumaini na Kupona Kupitia Bonde la Kupoteza

Kuomboleza kifo cha mpendwa ni jambo ambalo kila mmoja wetu atakumbana nalo maishani. Hakuna njia ya mkato kupitia maumivu – lakini kuna njia ya kupita humo.

Wakati msiba unapotokea, moyo hulia, “Kwa nini?” na mwili hubeba uzito wa huzuni. Huzuni inayofuata inaweza kuhisiwa kutotabirika na isiyo na mwisho, hasa pale wengine wanapotarajia uponyaji uje haraka. Lakini kuomboleza sio ugonjwa – ni safari ya asili, takatifu ya upendo, kumbukumbu, na kuachilia.

Kuomboleza, Kufiwa, & Kufa kinatoa mwongozo mpole wa kupitia safari hiyo. Kwa huruma na uwazi, kitabu hiki kinatoa zana za vitendo za kupunguza msongo wa mawazo, kutuliza wasiwasi, na kuboresha mapumziko wakati unashughulikia msiba mzito. Kinakukumbusha kwamba hata katika nyakati za giza kuu, tumaini linaweza kuinuka tena.

Iwe unaomboleza mzazi, mke au mume, mwenzi, mtoto, ndugu, au rafiki mpendwa, kitabu hiki ni rafiki thabiti wa nafsi yako.

“Yesu akamwambia, ‘Mimi ndimi huo ufufuo na uzima. Kila aniaminiye mimi atakuwa anaishi, hata akifa.’”
— Yohana 11:25`
    },
    calling: {
      title: 'Wito wa Roho Mtakatifu: Ibada ya Siku 40',
      description: `Kitabu hiki, Wito wa Roho Mtakatifu: Ibada ya Siku 40 kwa Watoto, Vijana, na Familia kinakushirikisha. Tafakari! Chini ya sehemu za maombi au kwenye karatasi tofauti, chora picha rahisi yako, au onyesha upendo kwa mtu katika familia yako, majirani, nk. Sasa, chora picha ya imani yako kwa Mungu. Kitabu hiki kilichopakwa mafuta kinakukumbusha tumaini lililopo kwa Mungu, hata wakati ambapo hujisikii kuwa na tumaini au unajiona huna msaada. Ibada hii ya Siku 40 itakusaidia kujifunza kuhusu upendo wa Mungu, wema, subira, na msamaha, na kuhusu kuwasaidia wengine kujiunga na familia Yake.`
    },
    prayerless: {
      title: 'Maombi yasiyo na Maombi: Mitindo Tofauti',
      description: `Sala ina ubora wa uzima unaoainishwa na uchangamfu na uhuru na hisia kwamba tupo mbele za Mungu tukizungumza na Baba yetu wa Mbinguni. Shirikiana na umhusishe Yeye akiingia ndani na nje kwa kukiri, “Njoo upumue ndani yangu, Roho Mtakatifu. Njoo, Roho Mtakatifu.”
Rafiki mpendwa, nakualika uje pamoja nami kwenye safari hii. Kitabu hiki kikubwa kitafungua moyo wako wa ndani ambao utafungua jicho lako la ndani ili kujaza nafasi hizo zilizo wazi katika maisha yako. Hatuna chochote cha kuogopa. Tunapata tu furaha, zitakazogunduliwa tunapofuata uongozi Wake.`
    },
    apologetics: {
      title: 'Apologetics (Kutetea Imani)',
      description: `Kupitia nguvu ya Roho Mtakatifu, macho ya kiroho ya waumini yanafunguliwa na kuja kukiri ushahidi. Yesu Kristo anajidhihirisha mwenyewe kama Yule aliye Njia, Ukweli na Uzima, (Yohana 14:6) tofauti na njia zingine zote za uongo na ukweli wa bandia. Kitabu hiki kitakusaidia kugundua—si ahadi zote za kidini ambazo ni “sawa”. – CHM—

Tunajua tunapaswa kujua nini cha kuamini, lakini tunapaswa kuwasilishaje hilo kwa marafiki na majirani zetu waliopotea? Tunachoamini ndio maudhui, jinsi tunavyoshiriki ndiyo njia. Kitabu hiki kinakupa kiamsha kinywa hicho na mafanikio makubwa. —CHCM. — Fanya vizuri kwa kitabu hiki na uache kupiga kichaka.

Mbinu ya utetezi wa imani (apologetics) ni sawa na uhunzi au useremala – kama vile chombo kimoja kinaweza kutumika katika miradi kadhaa, ndivyo njia ile ile inavyoweza kutumika katika mazungumzo tofauti. Hata hivyo, kuna nyakati ambapo zana moja tu inahitajika, kazi ndiyo inayopangia chombo. Hakuna chombo kinachoweza kukamilisha kila kazi. Ndivyo ilivyo kwa mtazamo wetu wa utetezi wa imani. — CHC. —

Kwa mtu mwenye nyundo, kila kitu kinaonekana kama msumari. Baadhi ya watu ni rahisi kuzungumza nao kuliko wengine na hakuna mtazamo wa “njia moja” unaofanya kazi na kila mtu. Kitabu hiki cha Apologetics kinakupa mfumo wa kufanya hivyo. — MediaGiddy`
    },
    nuggets: {
      title: 'Vito vya Imani: Jambo Kuu',
      description: `Iwe unauliza maswali mwenyewe au unataka kuwajibu wengine waliopo hapa— kitabu hiki cha rejea, Vito vya Imani: Jambo Kuu ndicho chako na cha wengine pia.

Bila kujali kile ulimwengu unachofundisha, hakuna Kanisa la mahali au dhehebu ambalo lina kila kitu. Sehemu haiwezi kamwe kuwa kubwa kuliko nzima. Maandiko Matakatifu ni ukweli, wazi, thabiti, na kamili. Kitabu hiki—Vito vya Imani: Jambo Kuu kitakuhimiza kuweka mizizi ya imani yako katika ukweli, ukiwa na hakika kwamba Kristo ana jibu la suala lolote unalokabiliana nalo leo.`
    },
    jezebel: {
      title: 'Roho ya Yezebeli, Roho ya Ahabu, Na Wewe.',
      description: `Katika Maandiko Matakatifu, Yezebeli aliolewa na Ahabu, Mfalme wa Israeli. Ahabu alimwachia mkewe mamlaka yake, akikubali udhibiti wake na kuufanya ufalme kuwa tegemezi/kuganda.

Vivyo hivyo leo, watu wanaoonyesha udhibiti na utawala wa roho ya Yezebeli huwalazimisha watu kuingia katika unyonge wa roho ya Ahabu, iwe katika ndoa, kanisa, uhusiano mwingine wowote au taasisi/idara za serikali.

Wapendwa, subirini kidogo! Uko wapi na unawezaje kunaswa katika jambo hili? Kitabu hiki cha kipekee—- Roho ya Yezebeli, Roho ya Ahabu, na Wewe —kinajenga uhusiano. Tena, uko wapi katika mtego huu na sakata hii? Msimamo wako ni upi? Je, una mtazamo wowote wa milele? Je, una maono yoyote ya Mbinguni? Je, una shauku yoyote kwa ajili ya roho hizi zinazokubaliana na uovu na zinazoangamia karibu nawe na kwingineko?

Unaweza kusema, “Bila shaka, mambo ni kama kawaida. Sijaitwa kwa ajili ya hili. Wengine watafanya makabiliano magumu na roho hizi mbaya.”

Nisikie mimi ninavyosikia kutoka kwa Neno la Mungu.

“Roho” ya “Yezebeli” haikuwa ya kipekee kwa kanisa la Thiatira pekee. Iko hai na inafanya kazi katika mwili wa Kristo leo. Mtu anahitaji tu kusoma vichwa vya habari vya hivi karibuni vya ndani na vya kimataifa. Ni roho yenye hila lakini yenye ujanja. Ni haribifu lakini yenye kuvutia. Kawaida hupata nguvu miongoni mwa wale ambao wanaogopa sana kuizima Roho (1 Thes. 5:19) kiasi kwamba wanashindwa kuzuia mwili.

Njoo pamoja nami, wapendwa wangu. Suluhisho sio kukataa unabii kabisa, au karama yoyote ya kiroho kwa suala hilo. Badala yake lazima tuwe Waberoya wema “tunayachunguza Maandiko kila siku” (Matendo 17:11) ili kuona kama mambo haya ni ya Mungu au la. Kwa muhtasari, tungefanya vyema kutii ushauri wa Mtume Paulo…

Jaribuni mambo yote; lishikeni sana lililo jema. Jitengeni na kila namna ya uovu. Na Mungu wa amani mwenyewe awatakase kabisa; nanyi mlinzi roho zenu, na nafsi zenu, na miili yenu mhifadhiwe mkiwa hamna hatia hadi kuja kwake Bwana wetu Yesu Kristo.
— 1 Wathesalonike 5:21-23`
    }
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
      rating: 4.8,
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

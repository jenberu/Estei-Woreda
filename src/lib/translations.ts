export type Language = "en" | "am";

export interface Translations {
  nav: {
    home: string;
    about: string;
    kebeles: string;
    admin: string;
    tourism: string;
    news: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    explore: string;
  };
  about: {
    title: string;
    history: string;
    culture: string;
    economy: string;
    historyText: string;
    cultureText: string;
    economyText: string;
    overviewTitle: string;
    overviewText: string;
    bridgeTitle: string;
    bridgeText: string;
    incidentTitle: string;
    incidentText: string;
    huletepetrosText: string;
    huletepetrosTitle: string;
  };
  kebeles: {
    title: string;
    subtitle: string;
    population: string;
    landmarks: string;
    personalities: string;
    mapView: string;
    listView: string;
    demographicsTitle: string;
    totalPopulation: string;
    men: string;
    women: string;
    urbanDwellers: string;
    density: string;
    ethnicity: string;
    language: string;
    religion: string;
    muslim: string;
    stats2005: string;
    stats1994: string;
  };
  tourism: {
    title: string;
    gallery: string;
    attractions: string;
    heritage: string;
  };
  admin: {
    title: string;
    offices: string;
    services: string;
    health: string;
    education: string;
    agriculture: string;
  };
  news: {
    title: string;
    latest: string;
    events: string;
  };
  contact: {
    title: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    send: string;
    info: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Estie",
      kebeles: "Kebeles",
      admin: "Administration",
      tourism: "Tourism",
      news: "News",
      contact: "Contact",
    },
    hero: {
      title: "Welcome to Estie Woreda",
      subtitle:
        "The Heart of the Ethiopian Highlands - A Region of Rich Heritage, Agriculture, and Community.",
      explore: "Explore Estie",
    },
    about: {
      title: "About Estie Woreda",
      history: "Our History",
      culture: "Our Culture",
      economy: "Economy",
      historyText:
        "Estie Woreda, located in the South Gondar Zone of the Amhara Region, has a history rooted in the Ethiopian Orthodox Church and the ancient traditions of the Amhara people. It has been a strategic hub for trade and religious learning for centuries.",
      cultureText:
        "The culture is defined by communal living, traditional music (Azmari), and the celebrated white cotton clothing. Religious holidays like Timkat , Merkoriwos and Meskel are central to community life.",
      economyText:
        "Agriculture is the backbone of Estie, with a focus on barley, wheat, and teff production. The region is also known for its cattle breeding and high-altitude honey.",
      overviewTitle: "Strategic Overview",
      overviewText:
        "Estie is known for its agricultural products and huge market. Estie Densa, a mountain just outside Mekane Eyesus city, is the brand of the woreda, with Chena and Wanka, the two year-round rivers, flowing through its valleys. Despite being relatively underdeveloped compared to the national average, the region possesses immense potential for growth.",
      bridgeTitle:
        "History of Re-ese Adbarat we-Gedamat Qoma Saint Fasilides Church",
      bridgeText: `Re-ese Adbarat we-Gedamat Qoma Saint Fasilides is an ancient church located in the Estie District of the South Gondar Diocese.

The church was founded in 1604/1605 GC (1597 EC) by Queen Wold Sahla, the wife of King Susenyos and the mother of Emperor Fasil (Fasilides).

When Emperor Susenyos converted his religion (to Catholicism), Queen Wold Sahla refused to change her faith. She declared, "I must establish a monastery and strengthen the Ethiopian faith," and traveled to a place called Bradge (Biru Adege) to build a church.

After the construction was completed, a white bull was slaughtered for the inaugural ceremony. Remarkably, the slaughtered bull rose and began to run. As the people rushed to catch it, the Queen commanded them, "Do not catch it; simply follow it to the place where it stops." The people followed the bull, and when the Queen asked where it had reached, they replied, "Koma" (meaning "it has stopped"). Consequently, the place where the bull stopped was named Qoma.

Believing it was the will of God, the Queen first ordered the construction of a perimeter wall and a storehouse using lime and stone at that site. She then began building the church itself. After building the walls halfway up with lime and stone, a hermit told her, "Your life is short; finish it with mud." Following this advice, the upper half of the church was completed using mud.
      `,
      incidentTitle: "Historical Incident (2002)",
      incidentText:
        "On 15 October 2002, a gathering of 4,000 farmers in Dankura Maryam faced a historical event when police intervened during a political meeting. This event remains a part of the local community's memory regarding political development.",

      huletepetrosTitle:"Saga Mekane Qidusian Walatta Petros Monastic Union of Mothers and Fathers",
      huletepetrosText: `This monastery is an ancient and historical site established in the 16th century by Saint Walatta Petros.

Location and Landscape
The monastery is located in the South Gondar Zone Diocese, specifically in the Estie District within the Gena Memcha sub-district (Kebele). To reach this historic site, one travels along the road leading to the ancient Qoma Fasilides Church, gets off at the rural town of Gena Memcha, and completes the journey with a one-hour trek on foot.

Situated along the Saga River, the monastery is nestled within a dense forest. It is positioned between two mountain chains, creating a breathtaking landscape that remains green year-round and offers a soul-refreshing atmosphere for visitors.

Early Life of Saint Walatta Petros
The founder, our mother Saint Walatta Petros, was born in the Simada District of South Gondar at a place called Beles Michael. Her father’s name was Bahre Seged and her mother’s name was Kristos Abaya (Theowobista). Both were devout, God-fearing people.

Saint Walatta Petros grew up disciplined in her parents' home, learning the laws of God. She lived a life dedicated to fasting, prayer, and prostration. When she reached adulthood, she was given in marriage to a wealthy man named Melka Kristos, who, according to her hagiography (Gadl), was a military commander for Emperor Susenyos.

Her Spiritual Journey
Despite her worldly status, Saint Walatta Petros recognized the vanity of earthly life and prayed constantly. She famously prayed:

"O my Lord Jesus Christ, if I am to bear children who will deny You or persecute the Church, let them pass away while still in my womb."

She subsequently gave birth to three children who all died in infancy. Seeing this as God answering her prayer, she took the opportunity when her husband went on a military campaign to leave her wealth behind. Without packing food or extra clothing, and accompanied only by her maidservant, she left her home. Her hagiography records that she traveled on foot from Simada Beles Michael to a place called Shewa Robit in a single day.

The Pursuit and the Miracle of Saga
When Melka Kristos heard of her departure, he led his army to search for her. Upon learning she had entered the Lake Tana region, he inflicted great suffering on the local residents and monks to force her out.

To end their suffering, Saint Walatta Petros revealed herself and moved to the Gumuz region. Later, she entered the Saga Desert—a wilderness bordering 44 different churches in the Estie District—where she prayed for eight years.

When Melka Kristos heard she was there, he sent his entire army to surround the area. One soldier spotted her and shouted to the others, "Saga alechi!" (meaning, "She is there in the 'Saga' [brush/thicket]!"). As they moved to capture her, she prayed to God, and a miraculous, deadly frost (ameday) fell upon the site, wiping out the army. According to her Gadl, the name of the monastery, Saga, is derived from that soldier’s cry, "Saga alechi."

The Monastery Today
The Saga Mekane Qidusian Walatta Petros Unity Monastery is a place where many miracles have occurred and where numerous sacred relics are preserved. It also possesses great potential for development.

Today, the annual feast of Saint Walatta Petros is celebrated colorfully on Hidar 17 (November 26/27). The festivities begin on the eve and draw many scholars (Liqawunt) and faithful pilgrims from various regions.`,
    },
    kebeles: {
      title: "Our Kebeles",
      subtitle: "Discover the diverse sub-districts of Estie Woreda.",
      population: "Population",
      landmarks: "Key Landmarks",
      personalities: "Prominent Personalities",
      mapView: "Map View",
      listView: "List View",
      demographicsTitle: "Demographics & Statistics",
      totalPopulation: "Total Population",
      men: "Men",
      women: "Women",
      urbanDwellers: "Urban Dwellers",
      density: "Population Density",
      ethnicity: "Ethnic Groups (Amhara)",
      language: "Primary Language (Amharic)",
      religion: "Religion (Orthodox)",
      muslim: "Muslim",
      stats2005:
        "Based on 2005 CSA estimates, Estie has a population of 403,956. The urban population stands at 3.96%, lower than the zone average of 8.3%.",
      stats1994:
        "The 1994 census reported 296,978 inhabitants. The region is almost entirely Amhara (99.98%) with a predominant Orthodox Christian community (96.53%).",
    },
    tourism: {
      title: "Tourism & Heritage",
      gallery: "Photo Gallery",
      attractions: "Main Attractions",
      heritage: "Cultural Heritage",
    },
    admin: {
      title: "Public Services & Admin",
      offices: "Government Offices",
      services: "Our Services",
      health: "Healthcare",
      education: "Education",
      agriculture: "Agricultural Support",
    },
    news: {
      title: "News & Events",
      latest: "Latest Updates",
      events: "Upcoming Events",
    },
    contact: {
      title: "Contact Us",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Your Message",
      send: "Send Message",
      info: "Contact Information",
    },
  },
  am: {
    nav: {
      home: "ዋና ገጽ",
      about: "ስለ እስቴ",
      kebeles: "ቀበሌዎች",
      admin: "አስተዳደር",
      tourism: "ቱሪዝም",
      news: "ዜና",
      contact: "እውቂያ",
    },
    hero: {
      title: "እንኳን ወደ እስቴ ወረዳ በደህና መጡ",
      subtitle: "የኢትዮጵያ ደጋማ አካባቢዎች እምብርት - የታሪክ፣ የእርሻ እና የማህበረሰብ ምድር።",
      explore: "እስቴን ይጎብኙ",
    },
    about: {
      title: "ስለ እስቴ ወረዳ",
      history: "ታሪካችን",
      culture: "ባህላችን",
      economy: "ኢኮኖሚ",
      historyText:
        "በደቡብ ጎንደር ዞን የአማራ ክልል የሚገኘው እስቴ ወረዳ፣ ታሪኩ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን እና በጥንታዊው የአማራ ህዝብ ወግ ላይ የተመሰረተ ነው። ለዘመናት የንግድ እና የሃይማኖት ትምህርት ማዕከል ሆኖ ቆይቷል።",
      cultureText:
        "ባህሉ በጋራ መኖር፣ በባህላዊ ሙዚቃ (አዝማሪ) እና በታወቀው የነጭ ጥጥ ልብስ ይገለጻል። እንደ ጥምቀት፣መርቆሪወስ  እና መስቀል ያሉ የሃይማኖት በዓላት የማህበረሰቡ ህይወት ማዕከል ናቸው።",
      economyText:
        "ግብርና የእስቴ የጀርባ አጥንት ሲሆን ገብስ፣ ስንዴ እና ጤፍ ምርት ላይ ያተኩራል። ክልሉ በከብት እርባታ እና በከፍተኛ ጥራት ማርም ይታወቃል።",
      overviewTitle: "አጠቃላይ እይታ",
      overviewText:
        "እስቴ በግብርና ምርቶቿ እና በታላቅ ገበያዋ ትታወቃለች። ከመካነ ኢየሱስ ከተማ ወጣ ብሎ የሚገኘው እስቴ ደንሳ ተራራ የወረዳው መለያ ሲሆን፣ ቸና እና ዋንካ የተባሉ ዓመቱን ሙሉ የሚፈሱ ወንዞች በሸለቆዎቿ ውስጥ ይፈሳሉ። ከአገር አቀፍ አማካይ ጋር ሲነፃፀር አሁንም በአንጻራዊ ሁኔታ ወደ ኋላ የቀረች ብትሆንም፣ ክልሉ ትልቅ የእድገት አቅም አለው።",
      bridgeTitle: "ርእሰ አድባራት ወገዳማት ቆማ ቅዱስ ፋሲለደስ ቤተ ክርስቲያን",
      bridgeText: `ርእሰ አድባራት ወገዳማት ቆማ ቅዱስ ፋሲለደስ ቤተ ክርስቲያን በደቡብ ጎንደር ሀገረ  ስብከት በእስቴ ወረዳ የሚገኝ ጥንታዊ ቤተ  ክርስቲያን ነው፡፡ቤተ ክርስትያኑ በ1597 ዓ.ም በንጉሥ ሱስኒዮስ ሚስት በአፄ ፋሲል እናት በንግሥት  ወልደሳህላ የተመሰረተ ቤተ ክርስቲያን ነው፡፡

ንግሥት ወልደሣህላ አፄ ሱስኒዮስ ሃይማኖታቸውን ሲቀይሩ ሃይማኖቴን አልቀይርም ገዳም መስርቸ የኢትዮጰያን  ሃይማኖት ማፅናት አለብኝ ብለዉ ብራደጌ (ብሩ አደጌ) ወደ ተባለ ቦታ በመምጣት ቤተ ክርስትያን ይሰራሉ፡፡ንግሥት ወልደሣህላ አፄ ሱስኒዮስ ሃይማኖታቸውን ሲቀይሩ ሃይማኖቴን አልቀይርም ገዳም መስርቸ የኢትዮጰያን  ሃይማኖት ማፅናት አለብኝ ብለዉ ብራደጌ (ብሩ አደጌ) ወደ ተባለ ቦታ በመምጣት ቤተ ክርስትያን ይሰራሉ፡፡

 ቤተ ክርስቲያኑ ተሰርቶ ካልቀ በኋላ ለክብረ በዓሉ ነጭ በሬ ታርዶ እያለ የታረደው በሬ ተነስቶ ይሮጣል ህዝቡም በሬዉን ለመያዝ ሲሮጥ ንግስቲቱ በሬዉን አትያዙት ዝምብላችሁ የሚቆምበትን ቦታ ተከተሉት ይሎቸዋል ህዝቡም በሬውን ይከተሉታል በመቀጠል ንግስቲቱ በሬው የት ደረሰ ብለው ይጠይቃሉ ህዝቡም ቆመ ይላል፡፡  በዚህ ምክንያት በሬው የቆመበት ቦታ ስያሜ ቆማ ይባላል፡፡  ንግስቲቱ በሬው የቆመበትን ቦታ ላይ ፈቃደ እግዚአብሔር ሆኖ ነው ብለዉ በመጀመሪያ እድሞ(አጥር) እና እቃ ቤት በኖራና በድንጋይ አሰሩ በመቀጠል ቤተክርስቲያን አሰርተዋል፡፡ቤተ ክርስቲያን ሲሰሩ እስከ ግማሽ ድረስ በኖራና በድንጋይ እንዳሰሩ አንድ ባህታዊ እድሜሽ አጭር ነው በጭቃ አስጨርሽው ብለዋት ከግማሽ በላይ በጭቃ ነው  ያሰሩት፡፡ ቤተ  ክርስቲያኑን በ1624ዓ.ም. አፄ ፋሲል የደብርና የገዳም ሥርዓት እንዲፈፀምበት ርዕሰ አድባራት ወገዳማት ቆማ ቅዱስ ፋሲለደስ ብለው ሰይመውታል፡፡ በደብርነቱ ዓመት እስከ ዓመት አገልግሎት እንዲሰጥ በገዳምነቱ ደግሞ በመቁንን እንዲኖር አድርገውታል፡፡በተጨማሪም በገዳሙ ዙርያ ያሉ 44 አድባራት የሚገኙ ምእመናን ለገዳሙ ግብር እንዲያስገቡ  በ318 አገልጋዮች እንዲገለገል ፤ በደናግል መነኮሳት እና አስራ ስምንት ዓመት ባልሞላቸው ዲያቆናት አገልገሎት እንዲሰጥ አድርገውታል፡፡ እንዲሁም በንግሥቲቱ የተሰጠ ሰፊ የእርሻ መሬት የነበረ ሲሆን የድመት መሬት (ለእቃ  ቤት ጠባቂዋ ድመት የእርሻ መሬት ተዘጋጅቶ ኑግ እየተዘራ ትመገብ ነበር) ፤ለጠራጊዎች ፤ለብረት ባለሙያዎች ፤ለሸማኔዎች መሬት ነበራቸው፡፡`,
      incidentTitle: "ታሪካዊ ክስተት (1995)",
      incidentText:
        "ጥቅምት 5 ቀን 1995 ዓ.ም በዳንኩራ ማርያም የተሰበሰቡ 4,000 ገበሬዎች በፖለቲካዊ ስብሰባ ወቅት የፖሊስ ጣልቃ ገብነት የገጠማቸው ታሪካዊ ክስተት ነበር። ይህ ክስተት በአካባቢው ማህበረሰብ ትውስታ ውስጥ ይገኛል።",
      
      huletepetrosTitle: "ሳጋ መካነ ቅዱስያን ወልደ ፐትሮስ የእናቶችና የአባቶች ማኅበር",
      huletepetrosText: `የሳጋ መካነ ቅዱሳን ወለተ ጴጥሮስ የእናቶች እና የአባቶች አንድነት ገዳም ታሪክ ይህ ገዳም ጥንታዊና ታሪካዊ ሲሆን በ16ኛው  መቶ ክፍለ ዘመን በቅድስት ወለተ ጴጥሮስ አማካኝነት ተገደመ።ገዳሙ የሚገኘው በደቡብ ጎንደር ዞን ሀገረ ስብከት በእስቴ ወረዳ በገና መምቻ ቀበሌ ውስጥ ነው። ወደ ጥንታዊና ባለታሪኩ የቆማ ፋሲለደስ ቤተክረስቲያን ወደ ሚወስደው የመኪና መንገድ ገና መምቻ ከተባለችው የገጠር ከተማ በመውረድ ከ1:00 የእግር ጉዞ በኋላ ከቦታው ይደረሳል።
ገዳሙ የሳጋ ወንዝን በመከተል ጥቅጥቅ ካለ ጫካ ውስጥ የሚገኝ ነው። የቦታው አቀማመጥ በሁለት ሰንሰላታማ ተራሮች መካከል ሲሆን አመቱን በሙሉ አረንጓዴ እንዲሁም ከቦታው ሲደረሱ መንፈስን የሚያድስ እጅግ ማራኪ ነው።
ገዳሙን የገደመችው እናታችን ቅድስት ወለተ ጴጥሮስ ስትሆን በደቡብ ጎንደር ዞን ሀገረ ስብከት በስማዳ ወረዳ ልዩ ስሙ በለስ ሜካኤል በሚባል ቦታ ተወለደች። የአባቷ ስም ባህር ሰገድ የእናቷ ስም ክረስቶስ እበያ (ቴወብስታ) ይባላል። ሁለቱም እግዚአብሄርን የሚፈሩ ደጋግ ሰዎች ነበሩ ።    
እናታችን ቅድስት ወለተ ጴጥሮስ በእናት በአባቷ ቤት ህገ እግዚአብሔርን እየተማረች በስርዓት አደገች። ዘወትር በፆም በፀሎትና በስግደት ተወስና ስትኖር ለአካለ መጠን ስትደርስ መልክዓ ክርስቶስ ለሚባል አንድ የባለፀጋ ልጅ አጋቧት። መልክዓ ክርስቶስ የአጼ ሱስንዮስ የጦር አዛዥ እንደነበረ መጽሀፈ ገድሏ ይናገራል። ነገር ግን ቅድስት ወለተ ጴጥሮስ የዓለምን ከንቱነት በመረዳት ሁልጊዜ ወደ እግዚአብሔር ትለምን ነበር።
ጌታየ ኢየሱስ ክርስቶስ ሆይ አንተን የሚከዱ ቤተክረስቲያን የሚያሳድዱ ልጆች ከምትሰጠኝ ከማህፀኔ እያሉ አጥፋልኝ እያለች ትፀልይ ነበር። በተከታታይ ሶስት ልጆችን ወልዳ ወዲያውኑ አርፈዋል። እርሷም ጌታየ ልመናየን ተቀብሎኛል በማለት ባሏ መልክዓ ክርስቶስ ለዘመቻ እንደሄደ ሀብት ንብረቷን ጥላ የእለት ስንቅ የአመት ልብስ ሳትል አንድ ደንገጡሯን አስከትላ ከቤቷ ወጣች። በአንድ ቀን ከስማዳ በለስ ሚካኤል ሸዋ ሮቢት ከሚባል ቦታ እንደ ደረሰች ገድሏ ይናገራል። ይህ ጉዞም በባዶ እግሯ ነበር።
ባለቤቷ መልክዓ ክርስቶስ ቅድስት ወለተ ጴጥሮስ እንደ ጠፋች በሰማ ጊዜ ሰራዊቱን አስከትሎ ለፍለጋ ሲነሳ ወደ ጣና ሀይቅ እንደገባች ሰማ። በዚህ ጊዜ በአካባቢው ባሉ  ነዋሪዎችና መነኮሳት ላይ ጽኑ በደል አደረሰባቸው።

ነገር ግን እናታችን ይህን መከራ ስታይ ካለችበት  በመውጣት ወደ ጉምዝ ሄዳ ከቆየች በኃላ በደቡብ ጎንደር ዞን እስቴ ወረዳ የ44ቱም ደብር አዋሳኝ በሆነው ሳጋ በረሀ በመግባት 8 ዓመት ፀለየች። መልክዓ ክርስቶስም ወደዚህ ስፍራ እንደሄደች ሲሰማ ሙሉ ሰራዊት ልኮ ዙሪያውን ሲያስጠብቅ ለአንዱ ወታደር ተገልፃለት  እዩአት እያለ ለሌሎች ሲያሳይ እየው በዚያ ሳጋ አለች በማለት ሲያሳይ ሲያዋት ወደ እግዚአብሔር ብታመለክት በቦታው ላይ የአመዳይ ውርጭ ወረደ። ሰራዊቱም ሁሉ አለቁ። የዚህ ቅዱስ ገዳም ስም ሳጋ አለች ከሚለው ተነስቶ ሳጋ እንደተባለ ገድሏ ይናገራል።
የሳጋ መካነ ቅዱሳን ወለተ ጴጥሮስ አንድነት ገዳም በርካታ ገድላት እና ታምራት የተፈፀመበት በርካታ ንዋየ ቅድሳት የሚገኝበት እና ለልማት ምቹ የሆነ ገዳም ነው። በገዳሙ ዛሬም የእናታችን ቅድስት ወለተ ጴጥሮስ ዓመታዊ የእረፍት በዓል አስመልክቶ በየአመቱ ህዳር 17 ቀን ከዋዜማው ጀምሮ ከተለያዩ አድባራት በሚመጡ ሊቃውንትና ምዕመናን በድምቀት ይከብራል።
`,
    },
    kebeles: {
      title: "ቀበሌዎቻችን",
      subtitle: "የእስቴ ወረዳን የተለያዩ ንዑስ ወረዳዎችን ያግኙ።",
      population: "የህዝብ ብዛት",
      landmarks: "ታዋቂ ቦታዎች",
      personalities: "ታዋቂ ግለሰቦች",
      mapView: "ካርታ",
      listView: "ዝርዝር",
      demographicsTitle: "የስነ-ህዝብ መረጃ እና ስታቲስቲክስ",
      totalPopulation: "ጠቅላላ ህዝብ",
      men: "ወንዶች",
      women: "ሴቶች",
      urbanDwellers: "የከተማ ነዋሪዎች",
      density: "የህዝብ ጥግግት",
      ethnicity: "የብሄር ስብጥር (አማራ)",
      language: "ዋና ቋንቋ (አማርኛ)",
      religion: "ሃይማኖት (ኦርቶዶክስ)",
      muslim: "ሙስሊም",
      stats2005:
        "በ1997 ዓ.ም በማዕከላዊ ስታቲስቲክስ ኤጀንሲ ግምት መሰረት እስቴ 403,956 ህዝብ አላት። የከተማው ህዝብ 3.96% ሲሆን ይህም ከዞኑ አማካይ 8.3% ያነሰ ነው።",
      stats1994:
        "እ.ኤ.አ. በ1994 በተካሄደው ቆጠራ 296,978 ነዋሪዎች ተመዝግበዋል። ክልሉ ሙሉ በሙሉ በሚባል ደረጃ አማራ (99.98%) ሲሆን የኦርቶዶክስ ክርስትና እምነት ተከታዮች (96.53%) ይበዛሉ።",
    },
    tourism: {
      title: "ቱሪዝም እና ቅርስ",
      gallery: "የፎቶ ጋለሪ",
      attractions: "ዋና ዋና መስህቦች",
      heritage: "ባህላዊ ቅርሶች",
    },
    admin: {
      title: "የህዝብ አገልግሎት እና አስተዳደር",
      offices: "የመንግስት ቢሮዎች",
      services: "አገልግሎቶቻችን",
      health: "ጤና ጥበቃ",
      education: "ትምህርት",
      agriculture: "የግብርና ድጋፍ",
    },
    news: {
      title: "ዜና እና ክስተቶች",
      latest: "የቅርብ ጊዜ ዜናዎች",
      events: "መጪ ክስተቶች",
    },
    contact: {
      title: "እውቂያ",
      formName: "ሙሉ ስም",
      formEmail: "ኢሜይል",
      formMessage: "መልእክትዎ",
      send: "መልእክት ላክ",
      info: "የእውቂያ መረጃ",
    },
  },
};

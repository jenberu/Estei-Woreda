export type Language = 'en' | 'am';

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
      subtitle: "The Heart of the Ethiopian Highlands - A Region of Rich Heritage, Agriculture, and Community.",
      explore: "Explore Estie",
    },
    about: {
      title: "About Estie Woreda",
      history: "Our History",
      culture: "Our Culture",
      economy: "Economy",
      historyText: "Estie Woreda, located in the South Gondar Zone of the Amhara Region, has a history rooted in the Ethiopian Orthodox Church and the ancient traditions of the Amhara people. It has been a strategic hub for trade and religious learning for centuries.",
      cultureText: "The culture is defined by communal living, traditional music (Azmari), and the celebrated white cotton clothing. Religious holidays like Timkat and Meskel are central to community life.",
      economyText: "Agriculture is the backbone of Estie, with a focus on barley, wheat, and teff production. The region is also known for its cattle breeding and high-altitude honey.",
      overviewTitle: "Strategic Overview",
      overviewText: "Estie is known for its agricultural products and huge market. Estie Densa, a mountain just outside Mekane Eyesus city, is the brand of the woreda, with Chena and Wanka, the two year-round rivers, flowing through its valleys. Despite being relatively underdeveloped compared to the national average, the region possesses immense potential for growth.",
      bridgeTitle: "The Sabero Dilde (Broken Bridge)",
      bridgeText: "The Sabero Dilde, also known as the Second Portuguese Bridge, crosses the Abay River, connecting Estie with Hulet Ej Enese in Misraq Gojjam. This historic structure remains a significant landmark in the region.",
      incidentTitle: "Historical Incident (2002)",
      incidentText: "On 15 October 2002, a gathering of 4,000 farmers in Dankura Maryam faced a historical event when police intervened during a political meeting. This event remains a part of the local community's memory regarding political development.",
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
      stats2005: "Based on 2005 CSA estimates, Estie has a population of 403,956. The urban population stands at 3.96%, lower than the zone average of 8.3%.",
      stats1994: "The 1994 census reported 296,978 inhabitants. The region is almost entirely Amhara (99.98%) with a predominant Orthodox Christian community (96.53%).",
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
      historyText: "በደቡብ ጎንደር ዞን የአማራ ክልል የሚገኘው እስቴ ወረዳ፣ ታሪኩ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን እና በጥንታዊው የአማራ ህዝብ ወግ ላይ የተመሰረተ ነው። ለዘመናት የንግድ እና የሃይማኖት ትምህርት ማዕከል ሆኖ ቆይቷል።",
      cultureText: "ባህሉ በጋራ መኖር፣ በባህላዊ ሙዚቃ (አዝማሪ) እና በታወቀው የነጭ ጥጥ ልብስ ይገለጻል። እንደ ጥምቀት እና መስቀል ያሉ የሃይማኖት በዓላት የማህበረሰቡ ህይወት ማዕከል ናቸው።",
      economyText: "ግብርና የእስቴ የጀርባ አጥንት ሲሆን ገብስ፣ ስንዴ እና ጤፍ ምርት ላይ ያተኩራል። ክልሉ በከብት እርባታ እና በከፍተኛ ጥራት ማርም ይታወቃል።",
      overviewTitle: "አጠቃላይ እይታ",
      overviewText: "እስቴ በግብርና ምርቶቿ እና በታላቅ ገበያዋ ትታወቃለች። ከመካነ ኢየሱስ ከተማ ወጣ ብሎ የሚገኘው እስቴ ደንሳ ተራራ የወረዳው መለያ ሲሆን፣ ቸና እና ዋንካ የተባሉ ዓመቱን ሙሉ የሚፈሱ ወንዞች በሸለቆዎቿ ውስጥ ይፈሳሉ። ከአገር አቀፍ አማካይ ጋር ሲነፃፀር አሁንም በአንጻራዊ ሁኔታ ወደ ኋላ የቀረች ብትሆንም፣ ክልሉ ትልቅ የእድገት አቅም አለው።",
      bridgeTitle: "የሰበሮ ድልድይ (የተሰበረው ድልድይ)",
      bridgeText: "የሰበሮ ድልድይ (በተጨማሪም ሁለተኛው የፖርቹጋል ድልድይ በመባል የሚታወቀው) አባይን ያቋርጣል፣ እስቴን በምስራቅ ጎጃም ከሚገኘው ሁለት እጅ እነሴ ጋር ያገናኛል። ይህ ታሪካዊ ግንባታ በክልሉ ውስጥ ትልቅ መለያ ሆኖ ይቆያል።",
      incidentTitle: "ታሪካዊ ክስተት (1995)",
      incidentText: "ጥቅምት 5 ቀን 1995 ዓ.ም በዳንኩራ ማርያም የተሰበሰቡ 4,000 ገበሬዎች በፖለቲካዊ ስብሰባ ወቅት የፖሊስ ጣልቃ ገብነት የገጠማቸው ታሪካዊ ክስተት ነበር። ይህ ክስተት በአካባቢው ማህበረሰብ ትውስታ ውስጥ ይገኛል።",
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
      stats2005: "በ1997 ዓ.ም በማዕከላዊ ስታቲስቲክስ ኤጀንሲ ግምት መሰረት እስቴ 403,956 ህዝብ አላት። የከተማው ህዝብ 3.96% ሲሆን ይህም ከዞኑ አማካይ 8.3% ያነሰ ነው።",
      stats1994: "እ.ኤ.አ. በ1994 በተካሄደው ቆጠራ 296,978 ነዋሪዎች ተመዝግበዋል። ክልሉ ሙሉ በሙሉ በሚባል ደረጃ አማራ (99.98%) ሲሆን የኦርቶዶክስ ክርስትና እምነት ተከታዮች (96.53%) ይበዛሉ።",
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
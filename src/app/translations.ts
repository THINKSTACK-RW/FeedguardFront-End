export type Language = 'rw' | 'en' | 'fr';

export interface Translations {
  // Common
  common: {
    feedguard: string;
    tagline: string;
    loading: string;
    submit: string;
    cancel: string;
    save: string;
    back: string;
    next: string;
    close: string;
    confirm: string;
    search: string;
    filter: string;
    download: string;
    export: string;
  };

  // Language selector
  language: {
    label: string;
    kinyarwanda: string;
    english: string;
    french: string;
    selectLanguage: string;
    continue: string;
  };

  // Splash screen
  splash: {
    tagline: string;
  };

  // Onboarding
  onboarding: {
    slide1Title: string;
    slide1Text: string;
    slide2Title: string;
    slide2Text: string;
    slide3Title: string;
    slide3Text: string;
    getStarted: string;
    skip: string;
  };

  // Registration
  registration: {
    title: string;
    phoneLabel: string;
    phonePlaceholder: string;
    otpLabel: string;
    otpPlaceholder: string;
    sendOTP: string;
    verifyOTP: string;
    privacyNote: string;
  };

  // Home Dashboard
  home: {
    greeting: string;
    noReportToday: string;
    lastReportToday: string;
    reportButton: string;
    viewReports: string;
    help: string;
    alerts: string;
    profile: string;
  };

  // Mobile Welcome
  welcome: {
    title: string;
    subtitle: string;
    message: string;
    reportButton: string;
    householdsReporting: string;
    communitiesProtected: string;
  };

  // Mobile Food Report
  report: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;

    // Step 1 - Meals
    mealsTitle: string;
    mealsQuestion: string;
    meals0: string;
    meals1: string;
    meals2: string;
    meals3: string;

    // Step 2 - Food Availability
    availabilityTitle: string;
    availabilityQuestion: string;
    days0: string;
    days1: string;
    days3: string;
    days7: string;

    // Step 3 - Food Change
    changeTitle: string;
    changeQuestion: string;
    changeNone: string;
    changeQuantity: string;
    changeQuality: string;
    changeBoth: string;

    // Step 4 - Shocks
    shocksTitle: string;
    shocksQuestion: string;
    shockIncome: string;
    shockDrought: string;
    shockFlood: string;
    shockIllness: string;
    shockOther: string;

    // Old fields for compatibility
    locationTitle: string;
    locationDescription: string;
    districtLabel: string;
    districtPlaceholder: string;
    villageLabel: string;
    villagePlaceholder: string;
    householdSizeLabel: string;
    householdSizePlaceholder: string;
    statusTitle: string;
    statusDescription: string;
    mealsLabel: string;
    mealsPlaceholder: string;
    daysOfFoodLabel: string;
    daysOfFoodPlaceholder: string;
    concernsTitle: string;
    concernsDescription: string;
    mainConcernLabel: string;
    mainConcernPlaceholder: string;
    additionalNotesLabel: string;
    additionalNotesPlaceholder: string;
    concernShortage: string;
    concernAfford: string;
    concernCrop: string;
    concernNone: string;
    submitReport: string;
  };

  // Confirmation
  confirmation: {
    title: string;
    subtitle: string;
    message: string;
    whatNext: string;
    whatNextText: string;
    needHelp: string;
    needHelpText: string;
    reportAnother: string;
    backToHome: string;
  };

  // Reports History
  reportsHistory: {
    title: string;
    subtitle: string;
    noReports: string;
    date: string;
    status: string;
    normal: string;
    warning: string;
    critical: string;
    monitoringMessage: string;
  };

  // Alerts
  alerts: {
    title: string;
    noAlerts: string;
    reviewMessage: string;
    supportMessage: string;
  };

  // Help & Education
  helpEducation: {
    title: string;
    whatIsFoodSecurity: string;
    whatIsFoodSecurityText: string;
    whyReporting: string;
    whyReportingText: string;
    howDataUsed: string;
    howDataUsedText: string;
    emergencyContacts: string;
    emergencyContactsText: string;
  };

  // Profile & Settings
  profileSettings: {
    title: string;
    phoneNumber: string;
    location: string;
    languagePreference: string;
    notifications: string;
    logout: string;
  };

  // Web Dashboard Navigation
  navigation: {
    dashboard: string;
    reports: string;
    map: string;
    alerts: string;
    insights: string;
    settings: string;
  };

  // Dashboard Page
  dashboard: {
    title: string;
    subtitle: string;

    // Time filters
    last24Hours: string;
    last7Days: string;
    last30Days: string;
    last90Days: string;

    // Metrics
    totalHouseholds: string;
    criticalAlerts: string;
    atRiskHouseholds: string;
    coverageRate: string;

    // Status labels
    stable: string;
    atRisk: string;
    critical: string;

    // Chart titles
    trendOverTime: string;
    statusDistribution: string;
    mealsPerDay: string;
    topConcerns: string;

    // Meals
    meals3Plus: string;
    meals2: string;
    meals1: string;
    meals0: string;

    // Concerns
    foodShortage: string;
    cannotAfford: string;
    cropFailure: string;
    noConcerns: string;

    // Regional section
    regionalBreakdown: string;
    region: string;
    households: string;
    status: string;
    viewDetails: string;

    // Quick Insights
    quickInsights: string;
    insight1: string;
    insight2: string;
    insight3: string;
  };

  // Reports Page
  reportsPage: {
    title: string;
    subtitle: string;

    // Filters
    allRegions: string;
    allStatuses: string;
    statusStable: string;
    statusAtRisk: string;
    statusCritical: string;

    // Time ranges
    today: string;
    thisWeek: string;
    thisMonth: string;
    last3Months: string;

    // Table headers
    household: string;
    location: string;
    status: string;
    meals: string;
    daysOfFood: string;
    concern: string;
    reportedAt: string;

    // Analytics
    analyticsTitle: string;
    totalReports: string;
    avgHouseholdSize: string;
    responseRate: string;
    lastUpdated: string;

    // Detailed charts
    mealsDistribution: string;
    regionalComparison: string;
    concernsBreakdown: string;

    noResults: string;
  };

  // Landing Page
  landing: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    register: string;
    learnMore: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutDescription: string;
    howItWorksTitle: string;
    how1Title: string;
    how1Desc: string;
    how2Title: string;
    how2Desc: string;
    how3Title: string;
    how3Desc: string;
    how4Title: string;
    how4Desc: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    impactTitle: string;
    impactSubtitle: string;
    impactDesc: string;
    faqTitle: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    contactTitle: string;
    contactSubtitle: string;
    contactAddressTitle: string;
    contactAddressValue: string;
    contactPhoneTitle: string;
    contactPhoneValue: string;
    contactEmailTitle: string;
    contactEmailValue: string;
    contactNamePlaceholder: string;
    contactEmailPlaceholder: string;
    contactMessagePlaceholder: string;
    contactSend: string;
    footerAbout: string;
    footerLinks: string;
    footerContact: string;
    footerCopyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  rw: {
    common: {
      feedguard: 'FeedGuard',
      tagline: 'Sisitemu y\'Umutekano w\'Ibiryo mu Muryango',
      loading: 'Iratwara...',
      submit: 'Ohereza',
      cancel: 'Hagarika',
      save: 'Bika',
      back: 'Subira',
      next: 'Komeza',
      close: 'Funga',
      confirm: 'Emeza',
      search: 'Shakisha',
      filter: 'Shyungura',
      download: 'Kurura',
      export: 'Ohereza hanze',
    },

    language: {
      label: 'Ururimi',
      kinyarwanda: 'Ikinyarwanda',
      english: 'Icyongereza',
      french: 'Igifaransa',
      selectLanguage: 'Hitamo ururimi rwawe',
      continue: 'Komeza',
    },

    splash: {
      tagline: 'Sisitemu y\'Umutekano w\'Ibiryo mu Muryango',
    },

    onboarding: {
      slide1Title: 'Murakoze!',
      slide1Text: 'FeedGuard y\'izina ry\'umutekano w\'ibiryo mu muryango. Fasha kurinda abaturanyi bawe inzara mu gutanga amakuru ku bijyanye n\'ibiryo mu rugo rwawe.',
      slide2Title: 'Kubira ibiryo',
      slide2Text: 'Tubwire icyo kiguteye impungenge cyane n\'ibiryo mu rugo rwawe. Fasha kugira ngo abe amakuru yumvikana.',
      slide3Title: 'Imiterere y\'Ibiryo',
      slide3Text: 'Tubwire uko ibiryo bimeze mu rugo rwawe. Fasha kugira ngo abe amakuru yumvikana.',
      getStarted: 'Komeza',
      skip: 'Hagarika',
    },

    registration: {
      title: 'Kureba Namba ya Telefoni',
      phoneLabel: 'Namba ya Telefoni',
      phonePlaceholder: 'Andika namba ya telefoni yawe',
      otpLabel: 'OTP',
      otpPlaceholder: 'Andika OTP',
      sendOTP: 'Ohereza OTP',
      verifyOTP: 'Siba OTP',
      privacyNote: 'Nimwe mu bafasha umuryango wawe cyangwa hamagara 119.',
    },

    home: {
      greeting: 'Murakoze!',
      noReportToday: 'Nta raporo y\'ibiryo yanzwe mu uyu munsi',
      lastReportToday: 'Raporo y\'ibiryo yanzwe mu uyu munsi',
      reportButton: 'Tanga Raporo y\'Ibiryo',
      viewReports: 'Reba Raporo Zose',
      help: 'Ukeneye ubufasha bwihutirwa?',
      alerts: 'Imenyesha',
      profile: 'Profil',
    },

    welcome: {
      title: 'FeedGuard',
      subtitle: 'Sisitemu y\'Umutekano w\'Ibiryo mu Muryango',
      message: 'Fasha kurinda abaturanyi bawe inzara mu gutanga amakuru ku bijyanye n\'ibiryo mu rugo rwawe',
      reportButton: 'Tanga Raporo y\'Ibiryo',
      householdsReporting: 'Imiryango Itanze Raporo',
      communitiesProtected: 'Imiturire Irinzwe',
    },

    report: {
      title: 'Raporo y\'Ibiryo',
      step1: 'Intebe 1: Ifunguro',
      step2: 'Intebe 2: Ibiryo',
      step3: 'Intebe 3: Ibibazo',
      step4: 'Intebe 4: Ibisaruro',

      mealsTitle: 'Ifunguro',
      mealsQuestion: 'Igitekerezo cy\'ifunguro cy\'ibiryo cyawe?',
      meals0: 'Nta funguro',
      meals1: 'Ifunguro 1',
      meals2: 'Ifunguro 2',
      meals3: '3+ ifunguro',

      availabilityTitle: 'Ibiryo',
      availabilityQuestion: 'Igitekerezo cy\'ibiryo cyawe?',
      days0: 'Nta biryo tubifite',
      days1: '1-2 iminsi',
      days3: '3-7 iminsi',
      days7: '7+ iminsi',

      changeTitle: 'Ibiryo',
      changeQuestion: 'Igitekerezo cy\'ibiryo cyawe?',
      changeNone: 'Nta kubadilika',
      changeQuantity: 'Kubadilika umubare',
      changeQuality: 'Kubadilika ubuzima',
      changeBoth: 'Kubadilika umubare na ubuzima',

      shocksTitle: 'Ibisaruro',
      shocksQuestion: 'Igitekerezo cy\'ibisaruro cyawe?',
      shockIncome: 'Kubadilika ubuzima bw\'umugabo',
      shockDrought: 'Igihutirwa',
      shockFlood: 'Igihutirwa',
      shockIllness: 'Igihutirwa',
      shockOther: 'Ibisaruro bishya',

      locationTitle: 'Aho Utuye',
      locationDescription: 'Tubwire aho utuye kugira ngo tudufashe neza',
      districtLabel: 'Akarere',
      districtPlaceholder: 'Hitamo akarere kawe',
      villageLabel: 'Umudugudu',
      villagePlaceholder: 'Andika izina ry\'umudugudu wawe',
      householdSizeLabel: 'Umubare w\'abantu mu rugo',
      householdSizePlaceholder: 'Andika umubare w\'abantu',

      statusTitle: 'Imiterere y\'Ibiryo',
      statusDescription: 'Tubwire uko ibiryo bimeze mu rugo rwawe',
      mealsLabel: 'Ifunguro rya buri munsi',
      mealsPlaceholder: 'Hitamo umubare w\'ifunguro',
      daysOfFoodLabel: 'Iminsi y\'ibiryo ubifite',
      daysOfFoodPlaceholder: 'Hitamo iminsi',

      concernsTitle: 'Ibibazo n\'Impungenge',
      concernsDescription: 'Tubwire icyo kiguteye impungenge cyane',
      mainConcernLabel: 'Ikibazo cyawe gikomeye',
      mainConcernPlaceholder: 'Hitamo ikibazo',
      additionalNotesLabel: 'Ibindi bivuze (bitari ngombwa)',
      additionalNotesPlaceholder: 'Andika ibindi byose ushaka kubwira...',

      concernShortage: 'Kubura ibiryo',
      concernAfford: 'Kudashobora kugura ibiryo',
      concernCrop: 'Umusaruro wangirijwe',
      concernNone: 'Nta kibazo',

      submitReport: 'Ohereza Raporo',
    },

    confirmation: {
      title: 'Murakoze!',
      subtitle: 'Raporo yawe yoherejwe neza',
      message: 'Amakuru yawe azafasha imiturire yawe kwirinda inzara. Raporo yawe izasuzumwa na bamwe mu bafasha umuryango.',
      whatNext: 'Iki gikurikira?',
      whatNextText: 'Imiturire izakugera igihe haciyeho impinduka zikomeye. Komeza gukora raporo buri cyumweru kugira ngo abe amakuru yumvikana.',
      needHelp: 'Ukeneye ubufasha bwihutirwa?',
      needHelpText: 'Niba ukeneye ubufasha bw\'ibiryo bwihutirwa, hamagara umuryango wawe cyangwa hamagara 119.',
      reportAnother: 'Tanga Raporo Yindi',
      backToHome: 'Subira Ahabanza',
    },

    reportsHistory: {
      title: 'Raporo Zose',
      subtitle: 'Kureba no gusesengura raporo zose z\'ibiryo',
      noReports: 'Nta raporo zabonetse',
      date: 'Itariki',
      status: 'Imiterere',
      normal: 'Bihamye',
      warning: 'Muri Akaga',
      critical: 'Byihutirwa',
      monitoringMessage: 'Raporo zose zasuzumwa na bamwe mu bafasha umuryango.',
    },

    alerts: {
      title: 'Imenyesha',
      noAlerts: 'Nta imenyesha zabonetse',
      reviewMessage: 'Imenyesha zose zasuzumwa na bamwe mu bafasha umuryango.',
      supportMessage: 'Nimwe mu bafasha umuryango wawe cyangwa hamagara 119.',
    },

    helpEducation: {
      title: 'Ukeneye ubufasha bwihutirwa?',
      whatIsFoodSecurity: 'Nini ni umutekano w\'ibiryo?',
      whatIsFoodSecurityText: 'Umutekano w\'ibiryo ni kubera inzara mu gutanga ibiryo mu muryango mu kubera inzara mu gutanga ibiryo mu muryango.',
      whyReporting: 'Nini iyo kugira raporo?',
      whyReportingText: 'Kugira raporo y\'ibiryo yafasha imiturire yawe kwirinda inzara mu gutanga ibiryo mu muryango.',
      howDataUsed: 'Amakuru azasuzumwa?',
      howDataUsedText: 'Amakuru azasuzumwa na bamwe mu bafasha umuryango mu kubera inzara mu gutanga ibiryo mu muryango.',
      emergencyContacts: 'Amakuru y\'ubufasha bwihutirwa?',
      emergencyContactsText: 'Nimwe mu bafasha umuryango wawe cyangwa hamagara 119.',
    },

    profileSettings: {
      title: 'Profil',
      phoneNumber: 'Namba ya Telefoni',
      location: 'Aho Utuye',
      languagePreference: 'Ururimi rwawe',
      notifications: 'Imenyesha',
      logout: 'Subira',
    },

    navigation: {
      dashboard: 'Ikibaho',
      reports: 'Raporo',
      map: 'Ikarita',
      alerts: 'Imenyesha',
      insights: 'Isesengura',
      settings: 'Igenamiterere',
    },

    dashboard: {
      title: 'Ikibaho',
      subtitle: 'Gukurikirana umutekano w\'ibiryo mu gihe nyacyo',

      last24Hours: 'Amasaha 24 ashize',
      last7Days: 'Iminsi 7 ishize',
      last30Days: 'Iminsi 30 ishize',
      last90Days: 'Iminsi 90 ishize',

      totalHouseholds: 'Imiryango Yose',
      criticalAlerts: 'Imenyesha Yihutirwa',
      atRiskHouseholds: 'Imiryango Ifite Ingaruka',
      coverageRate: 'Igipimo cy\'Ibikorwa',

      stable: 'Bihamye',
      atRisk: 'Muri Akaga',
      critical: 'Byihutirwa',

      trendOverTime: 'Imiterere y\'Igihe',
      statusDistribution: 'Ikigabanywa cy\'Imiterere',
      mealsPerDay: 'Ifunguro ku Munsi',
      topConcerns: 'Ibibazo Bikomeye',

      meals3Plus: '3+ ifunguro',
      meals2: 'Ifunguro 2',
      meals1: 'Ifunguro 1',
      meals0: 'Nta funguro',

      foodShortage: 'Kubura ibiryo',
      cannotAfford: 'Kudashobora kugura',
      cropFailure: 'Umusaruro wangirijwe',
      noConcerns: 'Nta kibazo',

      regionalBreakdown: 'Imiterere ku Turere',
      region: 'Akarere',
      households: 'Imiryango',
      status: 'Imiterere',
      viewDetails: 'Reba Birambuye',

      quickInsights: 'Amakuru Yihuta',
      insight1: '82 imiryango yashyize raporo nyuma y\'isaha 24 ishize',
      insight2: 'Imiterere y\'ibiryo yateye imbere 5% mu cyumweru gishize',
      insight3: 'Akarere ka Kibera gikenera ubufasha bw\'ibiryo',
    },

    reportsPage: {
      title: 'Raporo Zirambuye',
      subtitle: 'Kureba no gusesengura raporo zose z\'ibiryo',

      allRegions: 'Uturere twose',
      allStatuses: 'Imiterere yose',
      statusStable: 'Bihamye',
      statusAtRisk: 'Muri Akaga',
      statusCritical: 'Byihutirwa',

      today: 'Uyu munsi',
      thisWeek: 'Iki cyumweru',
      thisMonth: 'Uku kwezi',
      last3Months: 'Amezi 3 ashize',

      household: 'Urugo',
      location: 'Aho Utuye',
      status: 'Imiterere',
      meals: 'Ifunguro',
      daysOfFood: 'Iminsi y\'Ibiryo',
      concern: 'Ikibazo',
      reportedAt: 'Yatanzwe',

      analyticsTitle: 'Isesengura ry\'Amakuru',
      totalReports: 'Raporo Zose',
      avgHouseholdSize: 'Umubare w\'Abantu mu Rugo',
      responseRate: 'Igipimo cy\'Ibisubizo',
      lastUpdated: 'Byahinduwe Bwa Nyuma',

      mealsDistribution: 'Ikigabanywa cy\'Ifunguro',
      regionalComparison: 'Igereranya ry\'Uturere',
      concernsBreakdown: 'Isesengura ry\'Ibibazo',

      noResults: 'Nta makuru yabonetse',
    },

    landing: {
      heroTitle: 'FeedGuard',
      heroSubtitle: 'Kwitegura Hakiri Kare ku Mutekano w\'Ibiryo',
      heroDescription: 'FeedGuard ifasha imiryango n\'abayobozi gukurikirana uko ibiryo bihagaze no gukumira inzara binyuze mu makuru yizewe.',
      register: 'Kwiyandikisha',
      learnMore: 'Menya Byinshi',
      aboutTitle: 'Turi Ba Nde',
      aboutSubtitle: 'Kuki FeedGuard Yaremwe',
      aboutDescription: 'FeedGuard yashyiriweho kugabanya ikibazo cy\'inzara. Dukoresha amakuru y\'ako kanya mu gufasha ibyemezo byihuse no kurinda imiryango.',
      howItWorksTitle: 'Uko Bikora',
      how1Title: 'Kuzuza Raporo',
      how1Desc: 'Imiryango itanga amakuru y\'uko ibiryo bihagaze buri gihe.',
      how2Title: 'Kusanya Amakuru',
      how2Desc: 'Amakuru yerekana ibyago by\'inzara m\'uturere twose.',
      how3Title: 'Icyiciro cy\'Ibyago',
      how3Desc: 'Uturere dushyirwa mu byiciro bitewe n\'ibibazo by\'ibiryo bihari.',
      how4Title: 'Fata Ibyemezo',
      how4Desc: 'Abayobozi babona amakuru n\'impuruza kugira ngo batange ubufasha.',
      featuresTitle: 'Ibyiza Bya FeedGuard',
      feature1Title: 'Gusesengura Ibyago Ako Kanya',
      feature1Desc: 'Menya uturere dufite ibibazo byihutirwa.',
      feature2Title: 'Ikarita Yerekana Amakuru',
      feature2Desc: 'Reba amakuru y\'igihugu cyangwa uturere ku ikarita nyobora.',
      feature3Title: 'Porogaramu y\'Indimi Nyinshi',
      feature3Desc: 'Ifasha kwakira amakuru mu ndimi zitandukanye zirimo Ikinyarwanda.',
      feature4Title: 'Impuruza Zihuse',
      feature4Desc: 'Kohereza impuruza zihuse kubayobozi n\'abafatanyabikorwa.',
      impactTitle: 'Impamvu Bikenewe',
      impactSubtitle: 'Kurinda Imiryango, Guteza Imbere Igihugu',
      impactDesc: 'Binyuze mu makuru ahagije, dushobora gukumira ibihe by\'inzara no kubaka igihugu giteye imbere.',
      faqTitle: 'Ibibazo Bikunze Kubazwa',
      faq1Q: 'FeedGuard yakoreshwa na nde?',
      faq1A: 'FeedGuard yakoreshwa n\'imiryango itanga amakuru, n\'abayobozi bayakurikiranira hafi.',
      faq2Q: 'Ese amakuru yanjye atekanye?',
      faq2A: 'Yego. Tugira ibanga rikomeye ku makuru y\'abantu kugiti cyabo ndetse akoreshwa byihariye mu bikorwa byo kurwanya inzara.',
      faq3Q: 'Hakorwa bite kwerekana ibyago by\'inzara?',
      faq3A: 'Hakoreshwa algorithm ziterura raporo z\'imiryango noneho ikagaragaza niba bameze neza cyangwa bari mu kaga.',
      faq4Q: 'Ese iki gikorwa kigera mu gihugu hose?',
      faq4A: 'Tugamije kugera ku rwego rw\'igihugu kugira ngo dutange ubufasha m\'uturere twose.',
      contactTitle: 'Twandikire',
      contactSubtitle: 'Turi hano kugira tufatanye n\'inzego zose.',
      contactAddressTitle: 'Aderesi',
      contactAddressValue: 'Kigali, Rwanda',
      contactPhoneTitle: 'Telefoni',
      contactPhoneValue: '+250 780 000 000',
      contactEmailTitle: 'Imeyili',
      contactEmailValue: 'info@feedguard.rw',
      contactNamePlaceholder: 'Izina ryawe',
      contactEmailPlaceholder: 'Imeyili yawe',
      contactMessagePlaceholder: 'Ubutumwa bwawe...',
      contactSend: 'Ohereza Ubutumwa',
      footerAbout: 'FeedGuard ifasha uturere kwirinda ibura ry\'ibiryo. Turi ku ruhembe rw\'ikoranabuhanga n\'ubugiraneza.',
      footerLinks: 'Aho Wakanda',
      footerContact: 'Twandikire',
      footerCopyright: '© 2026 FeedGuard. Uburenganzira bwose burabitswe.',
    },
  },

  en: {
    common: {
      feedguard: 'FeedGuard',
      tagline: 'Smart Community Food Security System',
      loading: 'Loading...',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      back: 'Back',
      next: 'Next',
      close: 'Close',
      confirm: 'Confirm',
      search: 'Search',
      filter: 'Filter',
      download: 'Download',
      export: 'Export',
    },

    language: {
      label: 'Language',
      kinyarwanda: 'Kinyarwanda',
      english: 'English',
      french: 'French',
      selectLanguage: 'Select your language',
      continue: 'Continue',
    },

    splash: {
      tagline: 'Smart Community Food Security System',
    },

    onboarding: {
      slide1Title: 'Welcome!',
      slide1Text: 'FeedGuard is a food security monitoring system for communities. Help protect your community from hunger by sharing your household\'s food status.',
      slide2Title: 'Food Shortage',
      slide2Text: 'Tell us what worries you most about food shortage in your community. Help us by sharing accurate information.',
      slide3Title: 'Food Status',
      slide3Text: 'Tell us about your household\'s food situation. Help us by sharing accurate information.',
      getStarted: 'Get Started',
      skip: 'Skip',
    },

    registration: {
      title: 'Enter Your Phone Number',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Enter your phone number',
      otpLabel: 'OTP',
      otpPlaceholder: 'Enter OTP',
      sendOTP: 'Send OTP',
      verifyOTP: 'Verify OTP',
      privacyNote: 'Contact your community leader or call 119 for immediate assistance.',
    },

    home: {
      greeting: 'Welcome!',
      noReportToday: 'No food status report submitted today',
      lastReportToday: 'Last food status report submitted today',
      reportButton: 'Report Food Status',
      viewReports: 'View Reports',
      help: 'Need immediate help?',
      alerts: 'Alerts',
      profile: 'Profile',
    },

    welcome: {
      title: 'FeedGuard',
      subtitle: 'Smart Community Food Security System',
      message: 'Help protect your community from hunger by sharing your household\'s food status',
      reportButton: 'Report Food Status',
      householdsReporting: 'Households Reporting',
      communitiesProtected: 'Communities Protected',
    },

    report: {
      title: 'Food Status Report',
      step1: 'Step 1: Meals',
      step2: 'Step 2: Food Availability',
      step3: 'Step 3: Food Change',
      step4: 'Step 4: Shocks',

      mealsTitle: 'Meals',
      mealsQuestion: 'How many meals do you have per day?',
      meals0: 'No meals',
      meals1: '1 meal',
      meals2: '2 meals',
      meals3: '3+ meals',

      availabilityTitle: 'Food Availability',
      availabilityQuestion: 'How many days of food do you have remaining?',
      days0: 'No food available',
      days1: '1-2 days',
      days3: '3-7 days',
      days7: '7+ days',

      changeTitle: 'Food Change',
      changeQuestion: 'How has your food situation changed?',
      changeNone: 'No change',
      changeQuantity: 'Change in quantity',
      changeQuality: 'Change in quality',
      changeBoth: 'Change in quantity and quality',

      shocksTitle: 'Shocks',
      shocksQuestion: 'What shocks have affected your household?',
      shockIncome: 'Income shock',
      shockDrought: 'Drought',
      shockFlood: 'Flood',
      shockIllness: 'Illness',
      shockOther: 'Other',

      locationTitle: 'Your Location',
      locationDescription: 'Tell us where you live so we can help better',
      districtLabel: 'District',
      districtPlaceholder: 'Select your district',
      villageLabel: 'Village',
      villagePlaceholder: 'Enter your village name',
      householdSizeLabel: 'Household size',
      householdSizePlaceholder: 'Enter number of people',

      statusTitle: 'Food Status',
      statusDescription: 'Tell us about your household\'s food situation',
      mealsLabel: 'Meals per day',
      mealsPlaceholder: 'Select number of meals',
      daysOfFoodLabel: 'Days of food remaining',
      daysOfFoodPlaceholder: 'Select days',

      concernsTitle: 'Concerns & Notes',
      concernsDescription: 'Tell us what worries you most',
      mainConcernLabel: 'Main concern',
      mainConcernPlaceholder: 'Select your main concern',
      additionalNotesLabel: 'Additional notes (optional)',
      additionalNotesPlaceholder: 'Share anything else you\'d like us to know...',

      concernShortage: 'Food shortage',
      concernAfford: 'Cannot afford food',
      concernCrop: 'Crop failure',
      concernNone: 'No concerns',

      submitReport: 'Submit Report',
    },

    confirmation: {
      title: 'Thank You!',
      subtitle: 'Your report has been submitted successfully',
      message: 'Your information will help protect your community from hunger. Your report will be reviewed by community leaders.',
      whatNext: 'What happens next?',
      whatNextText: 'Community leaders will reach out if there are significant concerns. Keep reporting weekly for accurate data.',
      needHelp: 'Need immediate help?',
      needHelpText: 'If you need urgent food assistance, contact your community leader or call 119.',
      reportAnother: 'Report Another Status',
      backToHome: 'Back to Home',
    },

    reportsHistory: {
      title: 'Detailed Reports',
      subtitle: 'View and analyze all food security reports',
      noReports: 'No reports found',
      date: 'Date',
      status: 'Status',
      normal: 'Stable',
      warning: 'At Risk',
      critical: 'Critical',
      monitoringMessage: 'All reports are reviewed by community leaders.',
    },

    alerts: {
      title: 'Alerts',
      noAlerts: 'No alerts found',
      reviewMessage: 'All alerts are reviewed by community leaders.',
      supportMessage: 'Contact your community leader or call 119 for immediate assistance.',
    },

    helpEducation: {
      title: 'Need immediate help?',
      whatIsFoodSecurity: 'What is food security?',
      whatIsFoodSecurityText: 'Food security is the state of having reliable access to sufficient quantities of affordable, nutritious food to maintain a healthy life.',
      whyReporting: 'Why report food status?',
      whyReportingText: 'Reporting food status helps protect your community from hunger by providing accurate information about food availability.',
      howDataUsed: 'How is data used?',
      howDataUsedText: 'Data is used by community leaders to make informed decisions about food security measures.',
      emergencyContacts: 'Emergency Contacts',
      emergencyContactsText: 'Contact your community leader or call 119 for immediate assistance.',
    },

    profileSettings: {
      title: 'Profile',
      phoneNumber: 'Phone Number',
      location: 'Location',
      languagePreference: 'Language Preference',
      notifications: 'Notifications',
      logout: 'Logout',
    },

    navigation: {
      dashboard: 'Dashboard',
      reports: 'Reports',
      map: 'Map',
      alerts: 'Alerts',
      insights: 'Insights',
      settings: 'Settings',
    },

    dashboard: {
      title: 'Dashboard Overview',
      subtitle: 'Real-time food security monitoring and insights',

      last24Hours: 'Last 24 Hours',
      last7Days: 'Last 7 Days',
      last30Days: 'Last 30 Days',
      last90Days: 'Last 90 Days',

      totalHouseholds: 'Total Households',
      criticalAlerts: 'Critical Alerts',
      atRiskHouseholds: 'At-Risk Households',
      coverageRate: 'Coverage Rate',

      stable: 'Stable',
      atRisk: 'At Risk',
      critical: 'Critical',

      trendOverTime: 'Food Security Trend Over Time',
      statusDistribution: 'Current Status Distribution',
      mealsPerDay: 'Meals Per Day Distribution',
      topConcerns: 'Top Reported Concerns',

      meals3Plus: '3+ meals',
      meals2: '2 meals',
      meals1: '1 meal',
      meals0: 'No meals',

      foodShortage: 'Food shortage',
      cannotAfford: 'Cannot afford',
      cropFailure: 'Crop failure',
      noConcerns: 'No concerns',

      regionalBreakdown: 'Regional Breakdown',
      region: 'Region',
      households: 'Households',
      status: 'Status',
      viewDetails: 'View Details',

      quickInsights: 'Quick Insights',
      insight1: '82 households reported in the last 24 hours',
      insight2: 'Food security improved by 5% this week',
      insight3: 'Kibera District needs immediate food assistance',
    },

    reportsPage: {
      title: 'Detailed Reports',
      subtitle: 'View and analyze all food security reports',

      allRegions: 'All regions',
      allStatuses: 'All statuses',
      statusStable: 'Stable',
      statusAtRisk: 'At Risk',
      statusCritical: 'Critical',

      today: 'Today',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      last3Months: 'Last 3 Months',

      household: 'Household',
      location: 'Location',
      status: 'Status',
      meals: 'Meals',
      daysOfFood: 'Days of Food',
      concern: 'Concern',
      reportedAt: 'Reported At',

      analyticsTitle: 'Data Analytics',
      totalReports: 'Total Reports',
      avgHouseholdSize: 'Avg. Household Size',
      responseRate: 'Response Rate',
      lastUpdated: 'Last Updated',

      mealsDistribution: 'Meals Distribution',
      regionalComparison: 'Regional Comparison',
      concernsBreakdown: 'Concerns Breakdown',

      noResults: 'No results found',
    },

    landing: {
      heroTitle: 'FeedGuard',
      heroSubtitle: 'Smart Early Warning for Food Security',
      heroDescription: 'FeedGuard empowers communities and leaders to track food status and prevent food insecurity through reliable, real-time data.',
      register: 'Register',
      learnMore: 'Learn More',
      aboutTitle: 'About Us',
      aboutSubtitle: 'Why FeedGuard was created',
      aboutDescription: 'FeedGuard was created to address the critical issue of food insecurity before it becomes a crisis. We use real-time data to drive responsive actions and protect vulnerable communities.',
      howItWorksTitle: 'How It Works',
      how1Title: 'Submit Reports',
      how1Desc: 'Households regularly submit updates on their food availability and supply.',
      how2Title: 'Aggregate Data',
      how2Desc: 'Data is instantly analyzed to track risks across regions and communities.',
      how3Title: 'Risk Classification',
      how3Desc: 'Regions are dynamically classified based on their food shortage vulnerabilities.',
      how4Title: 'Actionable Alerts',
      how4Desc: 'Leaders receive alerts to provide targeted assistance where it is needed most.',
      featuresTitle: 'Key Features',
      feature1Title: 'Real-time Risk Detection',
      feature1Desc: 'Identify critical regions before crises escalate.',
      feature2Title: 'Interactive Mapping',
      feature2Desc: 'Pinpoint affected areas on user-friendly map interfaces.',
      feature3Title: 'Multilingual Support',
      feature3Desc: 'Accessible to communities in multiple local languages including Kinyarwanda.',
      feature4Title: 'Early Alert System',
      feature4Desc: 'Automated warnings when a region crosses critical risk thresholds.',
      impactTitle: 'Why It Matters',
      impactSubtitle: 'Protecting Communities, Strengthening Resilience',
      impactDesc: 'With actionable data, governments and NGOs can prevent crises, empower local communities, and support national resilience planning effectively.',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'Who can use FeedGuard?',
      faq1A: 'FeedGuard is used by both the households submitting food situation reports, and local/national leaders monitoring the security status.',
      faq2Q: 'Is the data secure?',
      faq2A: 'Yes, we follow strict privacy regulations. Individual data is aggregated and used exclusively for organizing food security assistance.',
      faq3Q: 'How does risk classification work?',
      faq3A: 'Our system uses an algorithm that analyzes household submissions (such as meals per day and available food days) to output a regional status level.',
      faq4Q: 'Are all regions covered?',
      faq4A: 'FeedGuard is designed for national-level deployment and aims to cover every region continuously.',
      contactTitle: 'Get in Touch',
      contactSubtitle: 'We are ready to partner globally and locally.',
      contactAddressTitle: 'Office',
      contactAddressValue: 'Kigali, Rwanda (Placeholder)',
      contactPhoneTitle: 'Phone',
      contactPhoneValue: '+250 780 000 000',
      contactEmailTitle: 'Email',
      contactEmailValue: 'info@feedguard.org',
      contactNamePlaceholder: 'Your Name',
      contactEmailPlaceholder: 'Your Email',
      contactMessagePlaceholder: 'Your Message...',
      contactSend: 'Send Message',
      footerAbout: 'FeedGuard ensures food security by providing a smart early warning system for communities globally.',
      footerLinks: 'Quick Links',
      footerContact: 'Contact Us',
      footerCopyright: '© 2026 FeedGuard. All rights reserved.',
    },
  },

  fr: {
    common: {
      feedguard: 'FeedGuard',
      tagline: 'Système Intelligent de Sécurité Alimentaire Communautaire',
      loading: 'Chargement...',
      submit: 'Soumettre',
      cancel: 'Annuler',
      save: 'Enregistrer',
      back: 'Retour',
      next: 'Suivant',
      close: 'Fermer',
      confirm: 'Confirmer',
      search: 'Rechercher',
      filter: 'Filtrer',
      download: 'Télécharger',
      export: 'Exporter',
    },

    language: {
      label: 'Langue',
      kinyarwanda: 'Kinyarwanda',
      english: 'Anglais',
      french: 'Français',
      selectLanguage: 'Sélectionnez votre langue',
      continue: 'Continuer',
    },

    splash: {
      tagline: 'Système Intelligent de Sécurité Alimentaire Communautaire',
    },

    onboarding: {
      slide1Title: 'Bienvenue!',
      slide1Text: 'FeedGuard est un système de surveillance de la sécurité alimentaire pour les communautés. Aidez à protéger votre communauté de la faim en partageant le statut alimentaire de votre ménage.',
      slide2Title: 'Pénurie alimentaire',
      slide2Text: 'Dites-nous ce qui vous préoccupe le plus concernant la pénurie alimentaire dans votre communauté. Aidez-nous en partageant des informations précises.',
      slide3Title: 'Statut Alimentaire',
      slide3Text: 'Parlez-nous de la situation alimentaire de votre ménage. Aidez-nous en partageant des informations précises.',
      getStarted: 'Commencer',
      skip: 'Passer',
    },

    registration: {
      title: 'Entrez votre numéro de téléphone',
      phoneLabel: 'Numéro de Téléphone',
      phonePlaceholder: 'Entrez votre numéro de téléphone',
      otpLabel: 'OTP',
      otpPlaceholder: 'Entrez OTP',
      sendOTP: 'Envoyer OTP',
      verifyOTP: 'Vérifier OTP',
      privacyNote: 'Contactez votre responsable communautaire ou appelez le 119 pour une assistance immédiate.',
    },

    home: {
      greeting: 'Bienvenue!',
      noReportToday: 'Aucun rapport de statut alimentaire soumis aujourd\'hui',
      lastReportToday: 'Dernier rapport de statut alimentaire soumis aujourd\'hui',
      reportButton: 'Signaler le Statut Alimentaire',
      viewReports: 'Voir les Rapports',
      help: 'Besoin d\'aide immédiate?',
      alerts: 'Alertes',
      profile: 'Profil',
    },

    welcome: {
      title: 'FeedGuard',
      subtitle: 'Système Intelligent de Sécurité Alimentaire Communautaire',
      message: 'Aidez à protéger votre communauté de la faim en partageant le statut alimentaire de votre ménage',
      reportButton: 'Signaler le Statut Alimentaire',
      householdsReporting: 'Ménages Signalant',
      communitiesProtected: 'Communautés Protégées',
    },

    report: {
      title: 'Rapport de Statut Alimentaire',
      step1: 'Étape 1: Repas',
      step2: 'Étape 2: Disponibilité des Aliments',
      step3: 'Étape 3: Changement des Aliments',
      step4: 'Étape 4: Chocs',

      mealsTitle: 'Repas',
      mealsQuestion: 'Combien de repas avez-vous par jour?',
      meals0: 'Aucun repas',
      meals1: '1 repas',
      meals2: '2 repas',
      meals3: '3+ repas',

      availabilityTitle: 'Disponibilité des Aliments',
      availabilityQuestion: 'Combien de jours de nourriture avez-vous restants?',
      days0: 'Pas de nourriture disponible',
      days1: '1-2 jours',
      days3: '3-7 jours',
      days7: '7+ jours',

      changeTitle: 'Changement des Aliments',
      changeQuestion: 'Comment a changé votre situation alimentaire?',
      changeNone: 'Aucun changement',
      changeQuantity: 'Changement de quantité',
      changeQuality: 'Changement de qualité',
      changeBoth: 'Changement de quantité et de qualité',

      shocksTitle: 'Chocs',
      shocksQuestion: 'Quels chocs ont affecté votre ménage?',
      shockIncome: 'Choc de revenus',
      shockDrought: 'Sécheresse',
      shockFlood: 'Inondation',
      shockIllness: 'Maladie',
      shockOther: 'Autre',

      locationTitle: 'Votre Localisation',
      locationDescription: 'Dites-nous où vous vivez pour mieux vous aider',
      districtLabel: 'District',
      districtPlaceholder: 'Sélectionnez votre district',
      villageLabel: 'Village',
      villagePlaceholder: 'Entrez le nom de votre village',
      householdSizeLabel: 'Taille du ménage',
      householdSizePlaceholder: 'Entrez le nombre de personnes',

      statusTitle: 'Statut Alimentaire',
      statusDescription: 'Parlez-nous de la situation alimentaire de votre ménage',
      mealsLabel: 'Repas par jour',
      mealsPlaceholder: 'Sélectionnez le nombre de repas',
      daysOfFoodLabel: 'Jours de nourriture restants',
      daysOfFoodPlaceholder: 'Sélectionnez les jours',

      concernsTitle: 'Préoccupations et Notes',
      concernsDescription: 'Dites-nous ce qui vous inquiète le plus',
      mainConcernLabel: 'Préoccupation principale',
      mainConcernPlaceholder: 'Sélectionnez votre préoccupation principale',
      additionalNotesLabel: 'Notes supplémentaires (facultatif)',
      additionalNotesPlaceholder: 'Partagez tout ce que vous aimeriez que nous sachions...',

      concernShortage: 'Pénurie alimentaire',
      concernAfford: 'Impossible d\'acheter de la nourriture',
      concernCrop: 'Échec des récoltes',
      concernNone: 'Aucune préoccupation',

      submitReport: 'Soumettre le Rapport',
    },

    confirmation: {
      title: 'Merci!',
      subtitle: 'Votre rapport a été soumis avec succès',
      message: 'Vos informations aideront à protéger votre communauté de la faim. Votre rapport sera examiné par les responsables communautaires.',
      whatNext: 'Que se passe-t-il ensuite?',
      whatNextText: 'Les responsables communautaires vous contacteront s\'il y a des préoccupations importantes. Continuez à signaler chaque semaine pour des données précises.',
      needHelp: 'Besoin d\'aide immédiate?',
      needHelpText: 'Si vous avez besoin d\'une aide alimentaire urgente, contactez votre responsable communautaire ou appelez le 119.',
      reportAnother: 'Signaler un Autre Statut',
      backToHome: 'Retour à l\'Accueil',
    },

    reportsHistory: {
      title: 'Rapports Détaillés',
      subtitle: 'Voir et analyser tous les rapports de sécurité alimentaire',
      noReports: 'Aucun rapport trouvé',
      date: 'Date',
      status: 'Statut',
      normal: 'Stable',
      warning: 'À Risque',
      critical: 'Critique',
      monitoringMessage: 'Tous les rapports sont examinés par les responsables communautaires.',
    },

    alerts: {
      title: 'Alertes',
      noAlerts: 'Aucune alerte trouvée',
      reviewMessage: 'Toutes les alertes sont examinées par les responsables communautaires.',
      supportMessage: 'Contactez votre responsable communautaire ou appelez le 119 pour une assistance immédiate.',
    },

    helpEducation: {
      title: 'Besoin d\'aide immédiate?',
      whatIsFoodSecurity: 'Qu\'est-ce que la sécurité alimentaire?',
      whatIsFoodSecurityText: 'La sécurité alimentaire est l\'état d\'avoir un accès fiable à des quantités suffisantes de nourriture abordable et nutritive pour maintenir une vie saine.',
      whyReporting: 'Pourquoi signaler le statut alimentaire?',
      whyReportingText: 'Signaler le statut alimentaire aide à protéger votre communauté de la faim en fournissant des informations précises sur la disponibilité des aliments.',
      howDataUsed: 'Comment les données sont-elles utilisées?',
      howDataUsedText: 'Les données sont utilisées par les responsables communautaires pour prendre des décisions éclairées sur les mesures de sécurité alimentaire.',
      emergencyContacts: 'Contacts d\'urgence',
      emergencyContactsText: 'Contactez votre responsable communautaire ou appelez le 119 pour une assistance immédiate.',
    },

    profileSettings: {
      title: 'Profil',
      phoneNumber: 'Numéro de Téléphone',
      location: 'Localisation',
      languagePreference: 'Préférence de Langue',
      notifications: 'Notifications',
      logout: 'Déconnexion',
    },

    navigation: {
      dashboard: 'Tableau de Bord',
      reports: 'Rapports',
      map: 'Carte',
      alerts: 'Alertes',
      insights: 'Insights',
      settings: 'Paramètres',
    },

    dashboard: {
      title: 'Aperçu du Tableau de Bord',
      subtitle: 'Surveillance et informations sur la sécurité alimentaire en temps réel',

      last24Hours: 'Dernières 24 Heures',
      last7Days: 'Derniers 7 Jours',
      last30Days: 'Derniers 30 Jours',
      last90Days: 'Derniers 90 Jours',

      totalHouseholds: 'Total des Ménages',
      criticalAlerts: 'Alertes Critiques',
      atRiskHouseholds: 'Ménages à Risque',
      coverageRate: 'Taux de Couverture',

      stable: 'Stable',
      atRisk: 'À Risque',
      critical: 'Critique',

      trendOverTime: 'Tendance de la Sécurité Alimentaire dans le Temps',
      statusDistribution: 'Distribution Actuelle du Statut',
      mealsPerDay: 'Distribution des Repas Par Jour',
      topConcerns: 'Principales Préoccupations Signalées',

      meals3Plus: '3+ repas',
      meals2: '2 repas',
      meals1: '1 repas',
      meals0: 'Aucun repas',

      foodShortage: 'Pénurie alimentaire',
      cannotAfford: 'Impossible d\'acheter',
      cropFailure: 'Échec des récoltes',
      noConcerns: 'Aucune préoccupation',

      regionalBreakdown: 'Répartition Régionale',
      region: 'Région',
      households: 'Ménages',
      status: 'Statut',
      viewDetails: 'Voir les Détails',

      quickInsights: 'Informations Rapides',
      insight1: '82 ménages ont signalé au cours des dernières 24 heures',
      insight2: 'La sécurité alimentaire s\'est améliorée de 5% cette semaine',
      insight3: 'Le district de Kibera a besoin d\'une aide alimentaire immédiate',
    },

    reportsPage: {
      title: 'Rapports Détaillés',
      subtitle: 'Voir et analyser tous les rapports de sécurité alimentaire',

      allRegions: 'Toutes les régions',
      allStatuses: 'Tous les statuts',
      statusStable: 'Stable',
      statusAtRisk: 'À Risque',
      statusCritical: 'Critique',

      today: 'Aujourd\'hui',
      thisWeek: 'Cette Semaine',
      thisMonth: 'Ce Mois',
      last3Months: '3 Derniers Mois',

      household: 'Ménage',
      location: 'Localisation',
      status: 'Statut',
      meals: 'Repas',
      daysOfFood: 'Jours de Nourriture',
      concern: 'Préoccupation',
      reportedAt: 'Signalé le',

      analyticsTitle: 'Analyse des Données',
      totalReports: 'Total des Rapports',
      avgHouseholdSize: 'Taille Moyenne du Ménage',
      responseRate: 'Taux de Réponse',
      lastUpdated: 'Dernière Mise à Jour',

      mealsDistribution: 'Distribution des Repas',
      regionalComparison: 'Comparaison Régionale',
      concernsBreakdown: 'Répartition des Préoccupations',

      noResults: 'Aucun résultat trouvé',
    },

    landing: {
      heroTitle: 'FeedGuard',
      heroSubtitle: 'Alerte Rapide Intelligente pour la Sécurité Alimentaire',
      heroDescription: 'FeedGuard permet aux communautés et aux dirigeants de suivre le statut alimentaire et de prévenir l\'insécurité alimentaire grâce à des données fiables et en temps réel.',
      register: 'S\'inscrire',
      learnMore: 'En Savoir Plus',
      aboutTitle: 'À Propos de Nous',
      aboutSubtitle: 'Pourquoi FeedGuard a été créé',
      aboutDescription: 'FeedGuard a été créé pour résoudre le problème critique de l\'insécurité alimentaire avant qu\'il ne devienne une crise. Nous utilisons des données en temps réel pour mener des actions réactives et protéger les communautés vulnérables.',
      howItWorksTitle: 'Comment Ça Marche',
      how1Title: 'Soumettre des Rapports',
      how1Desc: 'Les ménages soumettent régulièrement des mises à jour sur leur disponibilité alimentaire et leur approvisionnement.',
      how2Title: 'Agréger les Données',
      how2Desc: 'Les données sont instantanément analysées pour suivre les risques dans les régions et les communautés.',
      how3Title: 'Classification des Risques',
      how3Desc: 'Les régions sont classées dynamiquement en fonction de leurs vulnérabilités face à la pénurie alimentaire.',
      how4Title: 'Alertes Actionnables',
      how4Desc: 'Les dirigeants reçoivent des alertes pour fournir une assistance ciblée là où elle est le plus nécessaire.',
      featuresTitle: 'Fonctionnalités Clés',
      feature1Title: 'Détection des Risques en Temps Réel',
      feature1Desc: 'Identifiez les régions critiques avant que la crise ne s\'aggrave.',
      feature2Title: 'Cartographie Interactive',
      feature2Desc: 'Localisez les zones concernées sur des interfaces de cartes conviviales.',
      feature3Title: 'Support Multilingue',
      feature3Desc: 'Accessible aux communautés dans plusieurs langues locales dont le Kinyarwanda.',
      feature4Title: 'Système d\'Alerte Précoce',
      feature4Desc: 'Avertissements automatisés lorsqu\'une région franchit des seuils de risque critiques.',
      impactTitle: 'Pourquoi C\'est Important',
      impactSubtitle: 'Protéger les Communautés, Renforcer la Résilience',
      impactDesc: 'Avec des données exploitables, les gouvernements et les ONG peuvent prévenir les crises, autonomiser les communautés locales et soutenir efficacement la planification nationale de la résilience.',
      faqTitle: 'Foire Aux Questions',
      faq1Q: 'Qui peut utiliser FeedGuard?',
      faq1A: 'FeedGuard est utilisé à la fois par les ménages qui soumettent des rapports de situation alimentaire, et par les dirigeants locaux/nationaux qui surveillent l\'état de sécurité.',
      faq2Q: 'Les données sont-elles sécurisées?',
      faq2A: 'Oui, nous respectons strictement la réglementation sur la confidentialité. Les données individuelles sont agrégées et utilisées exclusivement pour organiser l\'assistance à la sécurité alimentaire.',
      faq3Q: 'Comment fonctionne la classification des risques?',
      faq3A: 'Notre système utilise un algorithme qui analyse les soumissions des ménages (comme les repas par jour et les jours de nourriture disponibles) pour émettre un niveau de statut régional.',
      faq4Q: 'Toutes les régions sont-elles couvertes?',
      faq4A: 'FeedGuard est conçu pour un déploiement au niveau national et vise à couvrir toutes les régions en permanence.',
      contactTitle: 'Prendre Contact',
      contactSubtitle: 'Nous sommes prêts à établir des partenariats à l\'échelle mondiale et locale.',
      contactAddressTitle: 'Bureau',
      contactAddressValue: 'Kigali, Rwanda (Espace réservé)',
      contactPhoneTitle: 'Téléphone',
      contactPhoneValue: '+250 780 000 000',
      contactEmailTitle: 'E-mail',
      contactEmailValue: 'info@feedguard.org',
      contactNamePlaceholder: 'Votre Nom',
      contactEmailPlaceholder: 'Votre E-mail',
      contactMessagePlaceholder: 'Votre Message...',
      contactSend: 'Envoyer le Message',
      footerAbout: 'FeedGuard assure la sécurité alimentaire en fournissant un système intelligent d\'alerte précoce pour les communautés du monde entier.',
      footerLinks: 'Liens Rapides',
      footerContact: 'Nous Contacter',
      footerCopyright: '© 2026 FeedGuard. Tous droits réservés.',
    },
  },
};
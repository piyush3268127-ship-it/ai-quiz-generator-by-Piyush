/**
 * NCERT MasterQuiz - Comprehensive Multilingual Syllabus & Concept Engine
 * Strictly aligned with NCERT Curriculum for Classes 10th, 11th, and 12th
 * Full Bilingual Support: English & हिंदी (Hindi)
 */

const NCERT_DATA = {
  // Bilingual UI Translations
  translations: {
    en: {
      appName: "NCERT MasterQuiz",
      appTagline: "Strict NCERT Curriculum & Exemplar Aligned",
      streak: "Streak",
      quizzes: "Quizzes",
      accuracy: "Acc",
      level: "Level",
      formulaSheet: "Formula Sheet",
      flashcards: "Flashcards",
      deeperKnowledge: "Deeper Knowledge",
      lastMinuteNotes: "Last-Minute Notes",
      bookmarks: "Bookmarks",
      history: "History",
      aiGenerator: "AI Generator",
      heroBadge: "Academic Session 2026-27 Aligned",
      heroTitle: "Master Every NCERT Concept With Interactive Quizzes",
      heroDesc: "Select your class, choose custom sub-subjects, practice chapter-wise, flip interactive flashcards, and master weak points with targeted remedial notes.",
      step1Title: "Choose Your Class",
      step1Desc: "Step 1 of 4",
      step2Title: "Select Subject & Custom Stream",
      step2Desc: "Step 2 of 4",
      subDisciplineTitle: "Choose Sub-Section / Discipline:",
      allSubSections: "🌟 All Sub-Sections (Full Integrated Syllabus)",
      step3Title: "Chapter Focus",
      selectChapter: "Select Specific Chapter or Practice Full Syllabus:",
      allChapters: "🌟 All Chapters (Full Syllabus Coverage)",
      step4Title: "Difficulty Level",
      step4Desc: "Step 4 of 4",
      easyTitle: "Direct Recall",
      easyDesc: "Fundamental definitions, standard formulas & direct NCERT textbook statements.",
      mediumTitle: "Conceptual",
      mediumDesc: "NCERT exemplar problems, application questions & standard numericals.",
      hardTitle: "HOTS & Multi-step",
      hardDesc: "Assertion-Reasoning, competitive edge & higher order analytical questions.",
      questionsCount: "Questions:",
      timerLabel: "Timer:",
      untimed: "Untimed",
      startQuizBtn: "Start NCERT Quiz",
      generatingAI: "⚡ Generating with Gemini AI...",
      aiToggleLabel: "⚡ Generate Fresh Questions with Gemini AI",
      aiKeyConnected: "API Key Connected & Protected",
      aiKeyMissing: "No Key Detected (Click AI Generator)",
      questionOf: "Question",
      of: "of",
      score: "Score",
      saveQuestion: "Save",
      savedQuestion: "Saved",
      skipBtn: "Skip Question",
      nextBtn: "Next Question",
      seeResultsBtn: "Complete Quiz & See Report",
      ncertExplanation: "NCERT Concept Explanation",
      quizCompleted: "Quiz Completed!",
      totalScore: "Total Score",
      correct: "Correct",
      incorrect: "Incorrect",
      timeTaken: "Time Taken",
      weakPointsTitle: "🚨 Weak Areas Analysis & Remedial Notes",
      chapterMastery: "Chapter Mastery Breakdown",
      reviewAnswersBtn: "Review All Answers",
      restartQuizBtn: "Restart Same Quiz",
      newSubjectBtn: "Choose New Subject",
      printReportBtn: "Print / Save Scorecard as PDF",
      comprehensiveReview: "Comprehensive Quiz Review",
      allFilter: "All Questions",
      incorrectFilter: "Incorrect Only",
      correctFilter: "Correct Only",
      bookmarkedFilter: "Bookmarked",
      backToReport: "← Back to Report Card",
      answerCorrectBadge: "✓ Correct",
      answerIncorrectBadge: "✗ Incorrect",
      answerSkippedBadge: "⊘ Skipped",
      yourPick: "✗ Your pick",
      correctAnswer: "✓ Answer"
    },
    hi: {
      appName: "एनसीईआरटी मास्टर क्विज",
      appTagline: "सख्त एनसीईआरटी पाठ्यक्रम और एग्जेंपलर आधारित",
      streak: "लगातार सही",
      quizzes: "कुल क्विज",
      accuracy: "सटीकता",
      level: "लेवल",
      formulaSheet: "सूत्र तालिका (Formulas)",
      flashcards: "फ्लैशकार्ड्स",
      deeperKnowledge: "गहन ज्ञान (Deep Notes)",
      lastMinuteNotes: "अंतिम समय के नोट्स",
      bookmarks: "सुरक्षित प्रश्न",
      history: "इतिहास",
      aiGenerator: "एआई जनरेटर",
      heroBadge: "शैक्षणिक सत्र 2026-27 के अनुसार",
      heroTitle: "इंटरैक्टिव क्विज के साथ एनसीईआरटी की हर अवधारणा में महारत हासिल करें",
      heroDesc: "अपनी कक्षा चुनें, कस्टम विषय और अध्याय चुनें, 3D फ्लैशकार्ड से दोहराएं और कमजोर विषयों के लिए तुरंत समाधान नोट्स प्राप्त करें।",
      step1Title: "अपनी कक्षा चुनें",
      step1Desc: "चरण 1 / 4",
      step2Title: "विषय और कस्टम शाखा चुनें",
      step2Desc: "चरण 2 / 4",
      subDisciplineTitle: "उप-विषय / शाखा चुनें:",
      allSubSections: "🌟 सभी उप-विषय (सम्पूर्ण एकीकृत पाठ्यक्रम)",
      step3Title: "अध्याय का चयन",
      selectChapter: "विशिष्ट अध्याय चुनें या संपूर्ण पाठ्यक्रम का अभ्यास करें:",
      allChapters: "🌟 सभी अध्याय (संपूर्ण पाठ्यक्रम)",
      step4Title: "कठिनाई का स्तर",
      step4Desc: "चरण 4 / 4",
      easyTitle: "प्रत्यक्ष स्मृतियाँ (Easy)",
      easyDesc: "मूलभूत परिभाषाएं, मानक सूत्र और सीधी एनसीईआरटी पाठ्यपुस्तक पंक्तियाँ।",
      mediumTitle: "अवधारणात्मक (Medium)",
      mediumDesc: "एनसीईआरटी एग्जेंपलर प्रश्न, अनुप्रयोग और 2-चरणीय आंकिक प्रश्न।",
      hardTitle: "उच्च बौद्धिक स्तर (Hard)",
      hardDesc: "अभिकथन-कारण (Assertion-Reason), विश्लेषणात्मक प्रश्न और प्रतियोगी स्तर।",
      questionsCount: "प्रश्नों की संख्या:",
      timerLabel: "समय सीमा:",
      untimed: "बिना समय",
      startQuizBtn: "क्विज शुरू करें",
      generatingAI: "⚡ जेमिनी एआई प्रश्न बना रहा है...",
      aiToggleLabel: "⚡ जेमिनी एआई द्वारा नए प्रश्न उत्पन्न करें",
      aiKeyConnected: "एपीआई कुंजी सुरक्षित रूप से सक्रिय है",
      aiKeyMissing: "कुंजी नहीं मिली (एआई जनरेटर पर क्लिक करें)",
      questionOf: "प्रश्न",
      of: "कुल",
      score: "अंक",
      saveQuestion: "सेव करें",
      savedQuestion: "सहेजा गया",
      skipBtn: "प्रश्न छोड़ें",
      nextBtn: "अगला प्रश्न",
      seeResultsBtn: "क्विज समाप्त करें व परिणाम देखें",
      ncertExplanation: "एनसीईआरटी अवधारणा स्पष्टीकरण",
      quizCompleted: "क्विज पूर्ण हुआ!",
      totalScore: "कुल प्राप्तांक",
      correct: "सही उत्तर",
      incorrect: "गलत उत्तर",
      timeTaken: "लिया गया समय",
      weakPointsTitle: "🚨 कमजोर क्षेत्रों का विश्लेषण और उपचारात्मक नोट्स",
      chapterMastery: "अध्यायवार महारत विश्लेषण",
      reviewAnswersBtn: "सभी उत्तरों की समीक्षा करें",
      restartQuizBtn: "यही क्विज दोबारा दें",
      newSubjectBtn: "नया विषय चुनें",
      printReportBtn: "स्कोरकार्ड पीडीएफ प्रिंट / सेव करें",
      comprehensiveReview: "विस्तृत क्विज समीक्षा",
      allFilter: "सभी प्रश्न",
      incorrectFilter: "केवल गलत",
      correctFilter: "केवल सही",
      bookmarkedFilter: "बुकमार्क किए गए",
      backToReport: "← परिणाम पर वापस जाएं",
      answerCorrectBadge: "✓ सही उत्तर",
      answerIncorrectBadge: "✗ गलत उत्तर",
      answerSkippedBadge: "⊘ छोड़ा गया",
      yourPick: "✗ आपका चयन",
      correctAnswer: "✓ सही विकल्प"
    }
  },

  classes: [
    {
      id: "10",
      name: "Class 10th",
      name_hi: "कक्षा 10वीं",
      badge: "Secondary Board Foundation",
      badge_hi: "माध्यमिक बोर्ड नीव",
      description: "CBSE & State Boards: Mathematics, Science (Physics/Chemistry/Biology), Social Science (History/Geo/Civics/Eco), Hindi & English.",
      description_hi: "सीबीएसई और राज्य बोर्ड: गणित, विज्ञान (भौतिक/रसायन/जीव), सामाजिक विज्ञान (इतिहास/भूगोल/नागरिक/अर्थशास्त्र), हिंदी और अंग्रेजी।",
      icon: "graduation-cap",
      subjects: ["maths_10", "science_10", "social_science_10", "hindi_10", "english_10"]
    },
    {
      id: "11",
      name: "Class 11th",
      name_hi: "कक्षा 11वीं",
      badge: "Senior Secondary Core",
      badge_hi: "उच्च माध्यमिक मूल अवधारणाएं",
      description: "Science & Non-Medical Core: Physics, Chemistry, Mathematics, English Core, Computer Science & Biology.",
      description_hi: "विज्ञान और नॉन-मेडिकल/मेडिकल: भौतिक विज्ञान, रसायन विज्ञान, गणित, अंग्रेजी, कंप्यूटर साइंस और जीव विज्ञान।",
      icon: "atom",
      subjects: ["physics_11", "chemistry_11", "maths_11", "english_11", "cs_11", "biology_11"]
    },
    {
      id: "12",
      name: "Class 12th",
      name_hi: "कक्षा 12वीं",
      badge: "Non-Medical / Board & JEE Prep",
      badge_hi: "बोर्ड परीक्षा और जेईई/सीयूईटी तैयारी",
      description: "Non-Medical PCM + Entrance Excellence: Advanced Physics, Chemistry, Mathematics, Computer Science, English Core & Biology.",
      description_hi: "नॉन-मेडिकल पीसीएम: उन्नत भौतिक विज्ञान, रसायन विज्ञान, उच्च गणित, कंप्यूटर विज्ञान, अंग्रेजी और जीव विज्ञान।",
      icon: "award",
      subjects: ["physics_12", "chemistry_12", "maths_12", "cs_12", "english_12", "biology_12"]
    }
  ],

  subjects: {
    // ----------------------------------------
    // CLASS 10 SUBJECTS
    // ----------------------------------------
    maths_10: {
      id: "maths_10",
      classId: "10",
      name: "Mathematics",
      name_hi: "गणित",
      tagline: "Algebra, Trigonometry, Geometry & Statistics",
      tagline_hi: "बीजगणित, त्रिकोणमिति, ज्यामिति और सांख्यिकी",
      theme: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-500",
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
        gradient: "from-blue-600 to-indigo-600"
      },
      chapters: [
        { en: "Real Numbers", hi: "वास्तविक संख्याएँ" },
        { en: "Polynomials", hi: "बहुपद" },
        { en: "Pair of Linear Equations in Two Variables", hi: "दो चर वाले रैखिक समीकरण युग्म" },
        { en: "Quadratic Equations", hi: "द्विघात समीकरण" },
        { en: "Arithmetic Progressions", hi: "समानांतर श्रेणियाँ (AP)" },
        { en: "Triangles", hi: "त्रिभुज" },
        { en: "Coordinate Geometry", hi: "निर्देशांक ज्यामिति" },
        { en: "Introduction to Trigonometry", hi: "त्रिकोणमिति का परिचय" },
        { en: "Some Applications of Trigonometry", hi: "त्रिकोणमिति के कुछ अनुप्रयोग (ऊंचाई और दूरी)" },
        { en: "Circles", hi: "वृत्त" },
        { en: "Areas Related to Circles", hi: "वृत्तों से संबंधित क्षेत्रफल" },
        { en: "Surface Areas & Volumes", hi: "पृष्ठीय क्षेत्रफल और आयतन" },
        { en: "Statistics", hi: "सांख्यिकी" },
        { en: "Probability", hi: "प्रायिकता" }
      ]
    },

    science_10: {
      id: "science_10",
      classId: "10",
      name: "Science",
      name_hi: "विज्ञान",
      tagline: "Physics, Chemistry & Biology integrated",
      tagline_hi: "भौतिक, रसायन और जीव विज्ञान एकीकृत",
      theme: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-500",
        badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
        gradient: "from-emerald-500 to-teal-600"
      },
      hasSubSections: true,
      subSections: [
        {
          id: "physics_10",
          name: "Physics (भौतिक विज्ञान)",
          chapters: [
            { en: "Light - Reflection & Refraction", hi: "प्रकाश - परावर्तन तथा अपवर्तन" },
            { en: "Human Eye & Colorful World", hi: "मानव नेत्र तथा रंगबिरंगा संसार" },
            { en: "Electricity", hi: "विद्युत" },
            { en: "Magnetic Effects of Electric Current", hi: "विद्युत धारा के चुंबकीय प्रभाव" }
          ]
        },
        {
          id: "chemistry_10",
          name: "Chemistry (रसायन विज्ञान)",
          chapters: [
            { en: "Chemical Reactions & Equations", hi: "रासायनिक अभिक्रियाएं एवं समीकरण" },
            { en: "Acids, Bases & Salts", hi: "अम्ल, क्षारक एवं लवण" },
            { en: "Metals & Non-metals", hi: "धातु एवं अधातु" },
            { en: "Carbon & its Compounds", hi: "कार्बन एवं उसके यौगिक" }
          ]
        },
        {
          id: "biology_10",
          name: "Biology (जीव विज्ञान)",
          chapters: [
            { en: "Life Processes", hi: "जैव प्रक्रम" },
            { en: "Control & Coordination", hi: "नियंत्रण एवं समन्वय" },
            { en: "How do Organisms Reproduce?", hi: "जीव जनन कैसे करते हैं?" },
            { en: "Heredity & Evolution", hi: "आनुवंशिकता एवं जैव विकास" },
            { en: "Our Environment", hi: "हमारा पर्यावरण" }
          ]
        }
      ]
    },

    social_science_10: {
      id: "social_science_10",
      classId: "10",
      name: "Social Science",
      name_hi: "सामाजिक विज्ञान",
      tagline: "History, Geography, Civics & Economics",
      tagline_hi: "इतिहास, भूगोल, नागरिक शास्त्र और अर्थशास्त्र",
      theme: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-500",
        badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
        gradient: "from-amber-500 to-orange-600"
      },
      hasSubSections: true,
      subSections: [
        {
          id: "history_10",
          name: "History (इतिहास)",
          chapters: [
            { en: "The Rise of Nationalism in Europe", hi: "यूरोप में राष्ट्रवाद का उदय" },
            { en: "Nationalism in India", hi: "भारत में राष्ट्रवाद" },
            { en: "The Making of a Global World", hi: "भूमंडलीकृत विश्व का बनना" },
            { en: "The Age of Industrialisation", hi: "औद्योगीकरण का युग" },
            { en: "Print Culture & Modern World", hi: "मुद्रण संस्कृति और आधुनिक दुनिया" }
          ]
        },
        {
          id: "geography_10",
          name: "Geography (भूगोल)",
          chapters: [
            { en: "Resources & Development", hi: "संसाधन एवं विकास" },
            { en: "Forest & Wildlife Resources", hi: "वन एवं वन्य जीव संसाधन" },
            { en: "Water Resources", hi: "जल संसाधन" },
            { en: "Agriculture", hi: "कृषि" },
            { en: "Minerals & Energy Resources", hi: "खनिज तथा ऊर्जा संसाधन" },
            { en: "Manufacturing Industries", hi: "विनिर्माण उद्योग" },
            { en: "Lifelines of National Economy", hi: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएँ" }
          ]
        },
        {
          id: "civics_10",
          name: "Civics / Pol Science (नागरिक शास्त्र)",
          chapters: [
            { en: "Power Sharing", hi: "सत्ता की साझेदारी" },
            { en: "Federalism", hi: "संघवाद" },
            { en: "Gender, Religion & Caste", hi: "जाति, धर्म और लैंगिक मसले" },
            { en: "Political Parties", hi: "राजनीतिक दल" },
            { en: "Outcomes of Democracy", hi: "लोकतंत्र के परिणाम" }
          ]
        },
        {
          id: "economics_10",
          name: "Economics (अर्थशास्त्र)",
          chapters: [
            { en: "Development", hi: "विकास" },
            { en: "Sectors of the Indian Economy", hi: "भारतीय अर्थव्यवस्था के क्षेत्रक" },
            { en: "Money & Credit", hi: "मुद्रा और साख" },
            { en: "Globalisation and the Indian Economy", hi: "वैश्वीकरण और भारतीय अर्थव्यवस्था" },
            { en: "Consumer Rights", hi: "उपभोक्ता अधिकार" }
          ]
        }
      ]
    },

    hindi_10: {
      id: "hindi_10",
      classId: "10",
      name: "Hindi",
      name_hi: "हिंदी",
      tagline: "Kshitij, Sparsh, Grammar & Composition",
      tagline_hi: "क्षितिज, स्पर्श, व्याकरण और रचना",
      theme: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        text: "text-red-500",
        badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
        gradient: "from-red-500 to-rose-600"
      },
      chapters: [
        { en: "Vyakaran: Vakya Bhed (Syntax)", hi: "रचना के आधार पर वाक्य भेद" },
        { en: "Vyakaran: Vachya (Voice)", hi: "वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)" },
        { en: "Vyakaran: Pad Parichay", hi: "पद-परिचय" },
        { en: "Vyakaran: Alankar (Figures of Speech)", hi: "अलंकार (श्लेष, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)" },
        { en: "Vyakaran: Samas (Compound Words)", hi: "समास (तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि)" },
        { en: "Kshitij: Surdas ke Pad", hi: "सूरदास के पद" },
        { en: "Kshitij: Netaji ka Chashma", hi: "नेताजी का चश्मा (स्वयं प्रकाश)" },
        { en: "Kshitij: Balgobin Bhagat", hi: "बालगोबिन भगत (रामवृक्ष बेनीपुरी)" },
        { en: "Kshitij: Utsah & Att Nahi Rahi", hi: "उत्साह और अट नहीं रही (सूर्यकांत त्रिपाठी निराला)" }
      ]
    },

    english_10: {
      id: "english_10",
      classId: "10",
      name: "English",
      name_hi: "अंग्रेजी",
      tagline: "First Flight, Footprints & Advanced Grammar",
      tagline_hi: "फर्स्ट फ्लाइट, फुटप्रिंट्स और व्यावहारिक व्याकरण",
      theme: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/30",
        text: "text-teal-500",
        badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
        gradient: "from-teal-500 to-cyan-600"
      },
      chapters: [
        { en: "A Letter to God (G.L. Fuentes)", hi: "ए लेटर टू गॉड (ईश्वर के नाम पत्र)" },
        { en: "Nelson Mandela: Long Walk to Freedom", hi: "नेल्सन मंडेला: आज़ादी की लंबी यात्रा" },
        { en: "Two Stories about Flying", hi: "उड़ान की दो कहानियाँ (सीगल और ब्लैक एरोप्लेन)" },
        { en: "From the Diary of Anne Frank", hi: "ऐनी फ्रैंक की डायरी से" },
        { en: "Glimpses of India (Baker, Coorg, Tea)", hi: "भारत की झलकियाँ (गोवा, कूर्ग, असम)" },
        { en: "Madam Rides the Bus", hi: "मैडम राइड्स द बस (वल्ली की यात्रा)" },
        { en: "Grammar: Tenses & Subject-Verb Agreement", hi: "व्याकरण: टेन्स और कर्ता-क्रिया संगति" },
        { en: "Grammar: Reported Speech (Direct & Indirect)", hi: "व्याकरण: प्रत्यक्ष और अप्रत्यक्ष कथन" },
        { en: "Grammar: Modals & Determiners", hi: "व्याकरण: मॉडल्स और निर्धारक" }
      ]
    },

    // ----------------------------------------
    // CLASS 11 SUBJECTS (PCM & Non-Medical Core)
    // ----------------------------------------
    physics_11: {
      id: "physics_11",
      classId: "11",
      name: "Physics",
      name_hi: "भौतिक विज्ञान",
      tagline: "Mechanics, Rotational Motion, Thermodynamics & Waves",
      tagline_hi: "यांत्रिकी, घूर्णन गति, ऊष्मागतिकी और तरंगें",
      theme: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-500",
        badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
        gradient: "from-cyan-500 to-blue-600"
      },
      chapters: [
        { en: "Units & Measurements", hi: "मात्रक और मापन" },
        { en: "Motion in a Straight Line", hi: "सरल रेखा में गति" },
        { en: "Motion in a Plane (Vectors & Projectile)", hi: "समतल में गति (सदिश एवं प्रक्षेप्य गति)" },
        { en: "Laws of Motion (Friction & Dynamics)", hi: "गति के नियम (घर्षण और गतिविज्ञान)" },
        { en: "Work, Energy & Power", hi: "कार्य, ऊर्जा और शक्ति" },
        { en: "System of Particles & Rotational Motion", hi: "कणों के निकाय तथा घूर्णी गति" },
        { en: "Gravitation", hi: "गुरुत्वाकर्षण" },
        { en: "Mechanical Properties of Solids & Fluids", hi: "ठोसों एवं तरलों के यांत्रिक गुण" },
        { en: "Thermal Properties & Thermodynamics", hi: "ऊष्मागतिकी और द्रव्य के तापीय गुण" },
        { en: "Kinetic Theory of Gases", hi: "अणुगति सिद्धांत" },
        { en: "Oscillations & Simple Harmonic Motion", hi: "दोलन एवं सरल आवर्त गति" },
        { en: "Waves & Sound", hi: "तरंगें और ध्वनि" }
      ]
    },

    chemistry_11: {
      id: "chemistry_11",
      classId: "11",
      name: "Chemistry",
      name_hi: "रसायन विज्ञान",
      tagline: "Atomic Structure, Bonding, Equilibrium & Organic Basics",
      tagline_hi: "परमाणु संरचना, रासायनिक आबंधन, साम्यावस्था और कार्बनिक मूल",
      theme: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-500",
        badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
        gradient: "from-violet-600 to-purple-600"
      },
      chapters: [
        { en: "Some Basic Concepts of Chemistry (Mole Concept)", hi: "रसायन विज्ञान की कुछ मूल अवधारणाएं (मोल संकल्पना)" },
        { en: "Structure of Atom (Quantum Mechanics)", hi: "परमाणु की संरचना (क्वांटम यांत्रिकी)" },
        { en: "Classification of Elements & Periodicity", hi: "तत्वों का वर्गीकरण एवं आवर्तिता" },
        { en: "Chemical Bonding & Molecular Structure", hi: "रासायनिक आबंधन तथा आण्विक संरचना" },
        { en: "Thermodynamics (Enthalpy & Gibbs Free Energy)", hi: "ऊष्मागतिकी (एंथैल्पी एवं गिब्स मुक्त ऊर्जा)" },
        { en: "Equilibrium (Chemical & Ionic)", hi: "साम्यावस्था (रासायनिक एवं आयनिक)" },
        { en: "Redox Reactions", hi: "अपचयोपचय अभिक्रियाएं (रेडॉक्स)" },
        { en: "Organic Chemistry: Some Basic Principles", hi: "कार्बनिक रसायन: कुछ आधारभूत सिद्धांत तथा तकनीकें" },
        { en: "Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatic)", hi: "हाइड्रोकार्बन (एल्केन, एल्कीन, एल्काइन, एरोमैटिक)" }
      ]
    },

    maths_11: {
      id: "maths_11",
      classId: "11",
      name: "Mathematics",
      name_hi: "गणित",
      tagline: "Trig Functions, Sequences, Conics & Limits",
      tagline_hi: "त्रिकोणमितीय फलन, अनुक्रम, शंकु परिच्छेद और सीमाएं",
      theme: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-500",
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
        gradient: "from-blue-600 to-indigo-600"
      },
      chapters: [
        { en: "Sets & Relations", hi: "समुच्चय और संबंध" },
        { en: "Trigonometric Functions", hi: "त्रिकोणमितीय फलन" },
        { en: "Complex Numbers & Quadratic Equations", hi: "सम्मिश्र संख्याएं और द्विघात समीकरण" },
        { en: "Linear Inequalities", hi: "रैखिक असमिकाएं" },
        { en: "Permutations & Combinations", hi: "क्रमचय और संचय" },
        { en: "Binomial Theorem", hi: "द्विपद प्रमेय" },
        { en: "Sequences & Series (AP & GP)", hi: "अनुक्रम तथा श्रेणी (समानांतर एवं गुणोत्तर श्रेणी)" },
        { en: "Straight Lines", hi: "सरल रेखाएं" },
        { en: "Conic Sections (Circle, Parabola, Ellipse, Hyperbola)", hi: "शंकु परिच्छेद (वृत्त, परवलय, दीर्घवृत्त, अतिपरवलय)" },
        { en: "Limits & Derivatives", hi: "सीमा और अवकलज" },
        { en: "Probability & Statistics", hi: "प्रायिकता और सांख्यिकी" }
      ]
    },

    english_11: {
      id: "english_11",
      classId: "11",
      name: "English Core",
      name_hi: "अंग्रेजी कोर",
      tagline: "Hornbill, Snapshots & Reading Comprehension",
      tagline_hi: "हॉर्नबिल, स्नैपशॉट्स और व्याकरण",
      theme: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-500",
        badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
        gradient: "from-amber-500 to-orange-600"
      },
      chapters: [
        { en: "The Portrait of a Lady (Khushwant Singh)", hi: "द पोर्ट्रेट ऑफ अ लेडी" },
        { en: "\"We're Not Afraid to Die...\"", hi: "\"वी आर नॉट अफ्रैड टू डाई...\"" },
        { en: "Discovering Tut: The Saga Continues", hi: "डिस्कवरिंग तूत: सागा कंटीन्यूज" },
        { en: "The Summer of the Beautiful White Horse", hi: "द समर ऑफ द ब्यूटीफुल व्हाइट हॉर्स" },
        { en: "The Address (Marga Minco)", hi: "द एड्रेस" },
        { en: "Grammar & Note Making Skills", hi: "नोट मेकिंग और उन्नत व्याकरण" }
      ]
    },

    cs_11: {
      id: "cs_11",
      classId: "11",
      name: "Computer Science",
      name_hi: "कंप्यूटर विज्ञान",
      tagline: "Python Fundamentals, Logic Gates & Data Representation",
      tagline_hi: "पायथन प्रोग्रामिंग, लॉजिक गेट्स और डेटा निरूपण",
      theme: {
        bg: "bg-sky-500/10",
        border: "border-sky-500/30",
        text: "text-sky-500",
        badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
        gradient: "from-sky-600 to-blue-700"
      },
      chapters: [
        { en: "Computer System Overview & Boolean Logic", hi: "कंप्यूटर सिस्टम और बूलियन लॉजिक" },
        { en: "Python Basics & Flow of Control", hi: "पायथन मूल सिद्धांत और नियंत्रण प्रवाह" },
        { en: "Strings, Lists, Tuples & Dictionaries", hi: "स्ट्रिंग्स, लिस्ट, टपल और डिक्शनरी" },
        { en: "Python Modules & Functions", hi: "पायथन मॉड्यूल्स और फ़ंक्शन" },
        { en: "Cyber Safety & Ethics", hi: "साइबर सुरक्षा और नीतिशास्त्र" }
      ]
    },

    biology_11: {
      id: "biology_11",
      classId: "11",
      name: "Biology",
      name_hi: "जीव विज्ञान",
      tagline: "Cell Biology, Plant & Human Physiology",
      tagline_hi: "कोशिका विज्ञान, पादप एवं मानव शरीर क्रिया विज्ञान",
      theme: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        text: "text-rose-500",
        badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
        gradient: "from-rose-500 to-pink-600"
      },
      chapters: [
        { en: "The Living World & Biological Classification", hi: "जीव जगत और जीव जगत का वर्गीकरण" },
        { en: "Plant & Animal Kingdom", hi: "वनस्पति और प्राणी जगत" },
        { en: "Cell: The Unit of Life & Cell Cycle", hi: "कोशिका: जीवन की इकाई एवं कोशिका चक्र" },
        { en: "Photosynthesis & Respiration in Plants", hi: "उच्च पादपों में प्रकाश संश्लेषण एवं श्वसन" },
        { en: "Human Physiology: Breathing & Circulation", hi: "मानव शरीर क्रिया विज्ञान: श्वसन और परिसंचरण" }
      ]
    },

    // ----------------------------------------
    // CLASS 12 SUBJECTS (Non-Medical PCM + Core)
    // ----------------------------------------
    physics_12: {
      id: "physics_12",
      classId: "12",
      name: "Physics",
      name_hi: "भौतिक विज्ञान",
      tagline: "Electromagnetism, Optics, Modern Physics & Semiconductors",
      tagline_hi: "विद्युत चुंबकत्व, प्रकाशिकी, आधुनिक भौतिकी और अर्धचालक",
      theme: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-500",
        badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
        gradient: "from-cyan-500 to-blue-600"
      },
      chapters: [
        { en: "Electric Charges & Fields", hi: "विद्युत आवेश तथा क्षेत्र (गाउस का नियम)" },
        { en: "Electrostatic Potential & Capacitance", hi: "स्थिरवैद्युत विभव तथा धारिता" },
        { en: "Current Electricity (Kirchhoff's Laws & Potentiometer)", hi: "विद्युत धारा (किरचॉफ के नियम)" },
        { en: "Moving Charges & Magnetism (Biot-Savart & Ampere)", hi: "गतिमान आवेश और चुंबकत्व" },
        { en: "Magnetism & Matter", hi: "चुंबकत्व एवं द्रव्य" },
        { en: "Electromagnetic Induction (Faraday & Lenz)", hi: "विद्युतचुंबकीय प्रेरण (फैराडे और लेन्ज का नियम)" },
        { en: "Alternating Current (LCR Circuits & Resonance)", hi: "प्रत्यावर्ती धारा (LCR परिपथ और अनुनाद)" },
        { en: "Electromagnetic Waves", hi: "विद्युतचुंबकीय तरंगें" },
        { en: "Ray Optics & Optical Instruments", hi: "किरण प्रकाशिकी एवं प्रकाशिक यंत्र" },
        { en: "Wave Optics (Huygens, Interference & Diffraction)", hi: "तरंग प्रकाशिकी (व्यतिकरण और विवर्तन)" },
        { en: "Dual Nature of Radiation & Matter (Photoelectric)", hi: "विकिरण तथा द्रव्य की द्वैत प्रकृति" },
        { en: "Atoms & Nuclei (Bohr Model & Radioactivity)", hi: "परमाणु और नाभिक" },
        { en: "Semiconductor Electronics (p-n Junction & Logic)", hi: "अर्धचालक इलेक्ट्रॉनिकी (डायोड और अनुप्रयोग)" }
      ]
    },

    chemistry_12: {
      id: "chemistry_12",
      classId: "12",
      name: "Chemistry",
      name_hi: "रसायन विज्ञान",
      tagline: "Physical, Coordination & Organic Reaction Mechanisms",
      tagline_hi: "भौतिक, उपसहसंयोजन और कार्बनिक अभिक्रिया क्रियाविधि",
      theme: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-500",
        badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
        gradient: "from-violet-600 to-purple-600"
      },
      chapters: [
        { en: "Solutions (Colligative Properties & Raoult's Law)", hi: "विलयन (अणुसंख्य गुणधर्म और राउल्ट का नियम)" },
        { en: "Electrochemistry (Nernst Equation & Kohlrausch)", hi: "विद्युतरसायन (नेर्नस्ट समीकरण एवं कोलराउश नियम)" },
        { en: "Chemical Kinetics (Rate Laws & Arrhenius Equation)", hi: "रासायनिक बलगतिकी (अभिक्रिया की कोटि और आरहिनियस)" },
        { en: "The d- and f-Block Elements", hi: "d- एवं f-ब्लॉक के तत्व (संक्रमण तत्व और लैंथेनाइड)" },
        { en: "Coordination Compounds (VBT & CFT Theory)", hi: "उपसहसंयोजन यौगिक (CFT और समावयवता)" },
        { en: "Haloalkanes & Haloarenes (SN1 & SN2 Mechanisms)", hi: "हैलोएल्केन तथा हैलोएरीन (SN1 और SN2 क्रियाविधि)" },
        { en: "Alcohols, Phenols & Ethers", hi: "ऐल्कोहॉल, फीनॉल एवं ईथर" },
        { en: "Aldehydes, Ketones & Carboxylic Acids", hi: "ऐल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल" },
        { en: "Amines & Diazonium Salts", hi: "ऐमीन तथा डाइऐज़ोनियम लवण" },
        { en: "Biomolecules (Carbohydrates, Proteins & Nucleic Acids)", hi: "जैव-अणु (कार्बोहाइड्रेट, प्रोटीन एवं न्यूक्लिक अम्ल)" }
      ]
    },

    maths_12: {
      id: "maths_12",
      classId: "12",
      name: "Mathematics",
      name_hi: "गणित",
      tagline: "Calculus, Matrices, Vectors, 3D Geometry & Probability",
      tagline_hi: "कलन (Calculus), आव्यूह, सदिश, त्रिविमीय ज्यामिति और प्रायिकता",
      theme: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-500",
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
        gradient: "from-blue-600 to-indigo-600"
      },
      chapters: [
        { en: "Relations & Functions", hi: "संबंध एवं फलन" },
        { en: "Inverse Trigonometric Functions", hi: "प्रतिलोम त्रिकोणमितीय फलन" },
        { en: "Matrices", hi: "आव्यूह" },
        { en: "Determinants", hi: "सारणिक" },
        { en: "Continuity & Differentiability", hi: "सांतत्य तथा अवकलनीयता" },
        { en: "Application of Derivatives (Maxima & Minima)", hi: "अवकलज के अनुप्रयोग (उच्चिष्ठ एवं निम्निष्ठ)" },
        { en: "Integrals (Definite & Indefinite)", hi: "समाकलन (निश्चित एवं अनिश्चित)" },
        { en: "Application of Integrals (Area under Curves)", hi: "समाकलनों के अनुप्रयोग (क्षेत्रफल)" },
        { en: "Differential Equations", hi: "अवकल समीकरण" },
        { en: "Vector Algebra", hi: "सदिश बीजगणित" },
        { en: "Three-Dimensional Geometry (Lines & Planes)", hi: "त्रिविमीय ज्यामिति" },
        { en: "Linear Programming", hi: "रैखिक प्रोग्रामन" },
        { en: "Probability (Bayes' Theorem & Distributions)", hi: "प्रायिकता (बेज़ प्रमेय और यादृच्छिक चर)" }
      ]
    },

    cs_12: {
      id: "cs_12",
      classId: "12",
      name: "Computer Science",
      name_hi: "कंप्यूटर विज्ञान",
      tagline: "Python OOP, Data Structures, SQL & Computer Networks",
      tagline_hi: "पायथन ऊप्स, डेटा संरचनाएं, एसक्यूएल और कंप्यूटर नेटवर्क",
      theme: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-500",
        badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
        gradient: "from-emerald-600 to-teal-700"
      },
      chapters: [
        { en: "Python Functions & File Handling (Text, Binary, CSV)", hi: "पायथन फ़ंक्शंस और फ़ाइल हैंडलिंग" },
        { en: "Data Structures (Stack using Lists)", hi: "डेटा संरचनाएं (स्टैक)" },
        { en: "Computer Networks & Topologies", hi: "कंप्यूटर नेटवर्क और टोपोलॉजी" },
        { en: "Database Concepts & Structured Query Language (SQL)", hi: "डेटाबेस अवधारणाएं और एसक्यूएल" },
        { en: "Interface Python with SQL Databases", hi: "पायथन और एसक्यूएल डेटाबेस इंटरफ़ेस" }
      ]
    },

    english_12: {
      id: "english_12",
      classId: "12",
      name: "English Core",
      name_hi: "अंग्रेजी कोर",
      tagline: "Flamingo, Vistas & Advanced Writing Skills",
      tagline_hi: "फ्लेमिंगो, विस्टास और उन्नत लेखन कौशल",
      theme: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-500",
        badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
        gradient: "from-amber-500 to-orange-600"
      },
      chapters: [
        { en: "The Last Lesson (Alphonse Daudet)", hi: "द लास्ट लेसन (फ्रांसीसी भाषा का महत्व)" },
        { en: "Lost Spring (Stories of Stolen Childhood)", hi: "लॉस्ट स्प्रिंग (साहिब और मुकेश की कहानी)" },
        { en: "Deep Water (William Douglas)", hi: "डीप वॉटर (पानी के डर पर विजय)" },
        { en: "The Rattrap (Selma Lagerlöf)", hi: "द रैटट्रैप (दयालुता का प्रभाव)" },
        { en: "Indigo (Louis Fischer - Gandhi in Champaran)", hi: "इंडिगो (चंपारण सत्याग्रह)" },
        { en: "The Tiger King & The Enemy (Vistas)", hi: "द टाइगर किंग और द एनिमी" }
      ]
    },

    biology_12: {
      id: "biology_12",
      classId: "12",
      name: "Biology",
      name_hi: "जीव विज्ञान",
      tagline: "Genetics, Molecular Biology, Biotech & Ecology",
      tagline_hi: "आनुवंशिकी, आणविक जीव विज्ञान, जैव प्रौद्योगिकी और पारिस्थितिकी",
      theme: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        text: "text-rose-500",
        badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
        gradient: "from-rose-500 to-pink-600"
      },
      chapters: [
        { en: "Sexual Reproduction in Flowering Plants", hi: "पुष्पी पादपों में लैंगिक जनन" },
        { en: "Human Reproduction & Reproductive Health", hi: "मानव जनन एवं जनन स्वास्थ्य" },
        { en: "Principles of Inheritance & Variation (Genetics)", hi: "वंशागति तथा विविधता के सिद्धांत (मेंडल के नियम)" },
        { en: "Molecular Basis of Inheritance (DNA & Replication)", hi: "वंशागति के आणविक आधार (डीएनए और प्रतिकृतियन)" },
        { en: "Biotechnology: Principles & Applications", hi: "जैव प्रौद्योगिकी: सिद्धांत एवं अनुप्रयोग" },
        { en: "Organisms, Ecosystem & Biodiversity", hi: "पारिस्थितिकी, पारितंत्र एवं जैव विविधता" }
      ]
    }
  },

  // ----------------------------------------
  // INTERACTIVE 3D FLASHCARDS & SNAPSHOT NOTES
  // ----------------------------------------
  flashcards: [
    {
      id: "fc_1",
      classId: "10",
      subjectId: "science_10",
      chapter: "Chemical Reactions & Equations",
      front: "What is the difference between Exothermic and Endothermic reactions?",
      front_hi: "ऊष्माक्षेपी (Exothermic) और ऊष्माशोषी (Endothermic) अभिक्रिया में क्या अंतर है?",
      back: "Exothermic releases heat (ΔH < 0, e.g., Respiration, CaO + H₂O). Endothermic absorbs heat (ΔH > 0, e.g., Photosynthesis, Decomposition of CaCO₃).",
      back_hi: "ऊष्माक्षेपी अभिक्रिया में ऊष्मा उत्सर्जित होती है (जैसे श्वसन, बिना बुझा चूना + पानी)। ऊष्माशोषी में ऊष्मा अवशोषित होती है (जैसे प्रकाश संश्लेषण, चूना पत्थर का अपघटन)।",
      tag: "Chemistry Core"
    },
    {
      id: "fc_2",
      classId: "10",
      subjectId: "science_10",
      chapter: "Electricity",
      front: "State Ohm's Law and its mathematical formula.",
      front_hi: "ओम का नियम और इसका गणितीय सूत्र बताइए।",
      back: "At constant temperature, potential difference V across a conductor is directly proportional to current I: V = I × R. Resistance R depends on length, cross-sectional area, and material resistivity.",
      back_hi: "नियत ताप पर चालक के सिरों का विभवांतर (V) उसमें प्रवाहित धारा (I) के समानुपाती होता है: V = I × R। प्रतिरोध R = ρ(L/A)।",
      tag: "Physics Law"
    },
    {
      id: "fc_3",
      classId: "10",
      subjectId: "maths_10",
      chapter: "Quadratic Equations",
      front: "What does the Discriminant D = b² - 4ac tell us about the roots?",
      front_hi: "विविक्तकर (Discriminant) D = b² - 4ac मूलों की प्रकृति के बारे में क्या बताता है?",
      back: "• D > 0: Two distinct real roots.\n• D = 0: Two equal real roots (x = -b/2a).\n• D < 0: No real roots (imaginary roots).",
      back_hi: "• D > 0: दो भिन्न वास्तविक मूल।\n• D = 0: दो बराबर वास्तविक मूल।\n• D < 0: कोई वास्तविक मूल नहीं।",
      tag: "Math Formula"
    },
    {
      id: "fc_4",
      classId: "10",
      subjectId: "social_science_10",
      chapter: "The Rise of Nationalism in Europe",
      front: "What were the three key features of the Napoleonic Code of 1804?",
      front_hi: "1804 की नेपोलियन संहिता (सिविल कोड) की तीन मुख्य विशेषताएं क्या थीं?",
      back: "1. Abolished all feudal privileges based on birth.\n2. Established equality before the law.\n3. Secured right to property and standardized weights and measures.",
      back_hi: "1. जन्म पर आधारित सभी विशेषाधिकार समाप्त किए।\n2. कानून के समक्ष सभी को समानता दी।\n3. संपत्ति के अधिकार को सुरक्षित किया और मानक नाप-तौल लागू किया।",
      tag: "History Milestone"
    },
    {
      id: "fc_5",
      classId: "12",
      subjectId: "physics_12",
      chapter: "Electrostatic Potential & Capacitance",
      front: "How does capacitance and stored energy change when dielectric slab (K) is inserted with battery disconnected?",
      front_hi: "बैटरी हटाने के बाद परावैद्युत (Dielectric K) डालने पर धारिता और ऊर्जा पर क्या प्रभाव पड़ता है?",
      back: "• Charge Q remains CONSTANT.\n• Capacitance increases: C' = K × C.\n• Potential difference decreases: V' = V / K.\n• Stored energy decreases: U' = U / K (field does work).",
      back_hi: "• आवेश (Q) नियत रहता है।\n• धारिता K गुना बढ़ती है: C' = K·C।\n• विभवांतर घटता है: V' = V/K।\n• संचित ऊर्जा घटती है: U' = U/K।",
      tag: "Board HOTS"
    },
    {
      id: "fc_6",
      classId: "12",
      subjectId: "chemistry_12",
      chapter: "Chemical Kinetics",
      front: "What is the half-life formula and unit of rate constant for a First-Order Reaction?",
      front_hi: "प्रथम कोटि की अभिक्रिया के लिए अर्ध-आयु का सूत्र और वेग स्थिरांक (k) का मात्रक क्या है?",
      back: "• Half-life t_½ = 0.693 / k (independent of initial concentration!).\n• Unit of k: s⁻¹ or min⁻¹.\n• Integrated equation: k = (2.303 / t) log([A]₀ / [A]).",
      back_hi: "• अर्ध-आयु t_½ = 0.693 / k (प्रारंभिक सांद्रता पर निर्भर नहीं करती!)।\n• k का मात्रक: s⁻¹।\n• समीकरण: k = (2.303 / t) log([A]₀ / [A])।",
      tag: "Physical Chemistry"
    },
    {
      id: "fc_7",
      classId: "12",
      subjectId: "maths_12",
      chapter: "Matrices & Determinants",
      front: "What is the theorem relation between Matrix A and its Adjoint?",
      front_hi: "आव्यूह A और उसके सहखंडज (Adjoint) के बीच महत्वपूर्ण प्रमेय क्या है?",
      back: "• A · adj(A) = adj(A) · A = |A| · I.\n• |adj(A)| = |A|^(n - 1) for n×n matrix.\n• A is invertible (A⁻¹ exists) if and only if |A| ≠ 0.",
      back_hi: "• A · adj(A) = |A| · I।\n• n कोटि के आव्यूह के लिए |adj(A)| = |A|^(n - 1)।\n• A⁻¹ = adj(A) / |A| (यदि |A| ≠ 0)।",
      tag: "Pure Math"
    }
  ],

  // ----------------------------------------
  // DEEPER KNOWLEDGE & CONCEPT NUANCES (गहन ज्ञान)
  // ----------------------------------------
  deeperKnowledge: {
    "10": [
      {
        title: "Why does Graphite conduct electricity while Diamond does not?",
        title_hi: "ग्रेफाइट विद्युत का सुचालक क्यों होता है जबकि हीरा नहीं?",
        subject: "Science - Carbon & Compounds",
        concept: "In diamond, each carbon atom is tetrahedrally bonded to 4 other carbons with strong sp³ covalent bonds, leaving ZERO free delocalized electrons. In graphite, each carbon bonds to only 3 carbons in hexagonal layers (sp²), leaving one free unhybridized π-electron per carbon atom. These free electrons move easily across layers, conducting electricity efficiently.",
        concept_hi: "हीरे में प्रत्येक कार्बन परमाणु 4 अन्य कार्बनों से चतुष्फलकीय sp³ सहसंयोजक बंध बनाता है, जिससे कोई मुक्त इलेक्ट्रॉन नहीं बचता। जबकि ग्रेफाइट में प्रत्येक कार्बन केवल 3 कार्बनों से sp² बंध बनाता है और एक इलेक्ट्रॉन मुक्त रहता है, जो परतों के बीच गति कर विद्युत धारा प्रवाहित करता है।"
      },
      {
        title: "Why is danger signal light always red in color?",
        title_hi: "खतरे का संकेत हमेशा लाल रंग का ही क्यों होता है?",
        subject: "Science - Human Eye",
        concept: "According to Rayleigh Scattering law: Intensity of scattered light is inversely proportional to the 4th power of wavelength (I ∝ 1/λ⁴). Red light has the longest wavelength in the visible spectrum (~700 nm). Therefore, it scatters the least by smoke or fog and travels maximum distance without losing intensity.",
        concept_hi: "रैले के प्रकीर्णन नियम के अनुसार, प्रकीर्णित प्रकाश की तीव्रता तरंगदैर्घ्य के चतुर्थ घात के व्युत्क्रमानुपाती होती है (I ∝ 1/λ⁴)। लाल रंग की तरंगदैर्घ्य सबसे अधिक होती है, अतः इसका प्रकीर्णन कोहरे या धुएं में सबसे कम होता है और यह दूर से भी स्पष्ट दिखाई देता है।"
      },
      {
        title: "Why Belgium's Power Sharing worked while Sri Lanka suffered Civil War?",
        title_hi: "बेल्जियम का सत्ता बंटवारा क्यों सफल रहा जबकि श्रीलंका में गृहयुद्ध हुआ?",
        subject: "Social Science - Civics",
        concept: "Belgium amended its constitution 4 times to accommodate Dutch and French communities equally in central government and gave Brussels a separate equal setup. Sri Lanka adopted majoritarianism (Sinhala Only Act 1956) which alienated Sri Lankan Tamils, showing that tyranny of the majority threatens national unity.",
        concept_hi: "बेल्जियम ने संविधान में 4 संशोधन कर डच और फ्रेंच दोनों को केंद्र में समान भागीदारी दी। इसके विपरीत श्रीलंका ने बहुसंख्यकवाद थोपा जिससे तमिलों में अलगाव पैदा हुआ और गृहयुद्ध छिड़ गया।"
      }
    ],
    "11": [
      {
        title: "Why do raindrops fall with constant terminal velocity instead of accelerating?",
        title_hi: "बारिश की बूंदें त्वरित होने के बजाय सीमांत वेग (Terminal Velocity) से क्यों गिरती हैं?",
        subject: "Physics - Fluid Mechanics",
        concept: "As a drop falls, viscous drag force increases with speed (Stokes' Law: F_v = 6πηrv). When downward gravity is balanced by upward buoyant force plus viscous drag (mg = F_b + 6πηrv_t), net acceleration becomes ZERO, and the drop moves at constant terminal velocity v_t = 2r²(ρ - σ)g / 9η.",
        concept_hi: "गिरती हुई बूंद पर श्यान बल (स्टोक्स नियम: 6πηrv) वेग के साथ बढ़ता है। जब नीचे का गुरुत्व बल ऊपर के उत्प्लावन बल और श्यान बल के बराबर हो जाता है, तब परिणामी त्वरण शून्य हो जाता है और बूंद नियत सीमांत वेग से गिरती है।"
      },
      {
        title: "Why is Chlorine's electron gain enthalpy more negative than Fluorine's?",
        title_hi: "क्लोरीन की इलेक्ट्रॉन लब्धि एंथैल्पी फ्लोरीन से अधिक ऋणात्मक क्यों है?",
        subject: "Chemistry - Periodicity",
        concept: "Fluorine has an extremely compact 2p-subshell. Adding an electron produces strong inter-electronic repulsions that resist the incoming electron. Chlorine has a more spacious 3p-subshell where inter-electronic repulsions are significantly weaker, releasing more energy (-349 kJ/mol vs -328 kJ/mol).",
        concept_hi: "फ्लोरीन का 2p कोश अत्यधिक छोटा होने के कारण आने वाले इलेक्ट्रॉन को प्रबल अंतर-इलेक्ट्रॉनिक प्रतिकर्षण का सामना करना पड़ता है, जबकि क्लोरीन के 3p कोश में स्थान अधिक होने से प्रतिकर्षण कम होता है।"
      }
    ],
    "12": [
      {
        title: "Why are transformers laminated instead of made from solid iron cores?",
        title_hi: "ट्रांसफॉर्मर की क्रोड ठोस लोहे की न होकर पटलित (Laminated) क्यों बनाई जाती है?",
        subject: "Physics - EMI & AC",
        concept: "Varying magnetic flux induces swirling Eddy Currents inside solid conductors, causing enormous Joule heating loss (H = I²Rt). Laminating the core with thin sheets insulated by varnish breaks continuous conductive loops, drastically reducing Eddy currents and core losses.",
        concept_hi: "बदलते चुंबकीय फ्लक्स से ठोस लोहे में भंवर धाराएं (Eddy Currents) उत्पन्न होती हैं, जिससे ऊष्मा के रूप में भारी ऊर्जा हानि होती है। वार्निश युक्त पतली पट्टियों से बनी पटलित क्रोड भंवर धाराओं के बंद परिपथ को तोड़कर ऊर्जा हानि को न्यूनतम कर देती है।"
      },
      {
        title: "Why does Racemization occur in SN1 reactions but Inversion in SN2?",
        title_hi: "SN1 अभिक्रिया में रेसीमीकरण (Racemization) और SN2 में प्रतिलोमन (Inversion) क्यों होता है?",
        subject: "Chemistry - Haloalkanes",
        concept: "SN1 forms a planar sp² carbocation intermediate, allowing the nucleophile equal 50% probability to attack from either side (front or back), yielding a racemic mixture. In SN2, the leaving group and nucleophile react in a concerted single step with mandatory backside attack, resulting in complete Walden Inversion.",
        concept_hi: "SN1 में एक समतलीय sp² कार्बोकेटायन मध्यवर्ती बनता है, जिससे नाभिकरागी दोनों ओर से आक्रमण कर सकता है (रेसीमिक मिश्रण)। SN2 एक-पदीय अभिक्रिया है जिसमें नाभिकरागी केवल पीछे से आक्रमण करता है, जिससे वाल्डेन प्रतिलोमन होता है।"
      }
    ]
  },

  // ----------------------------------------
  // LAST-MINUTE EXAM REVISION NOTES (अंतिम समय के नोट्स)
  // ----------------------------------------
  lastMinuteNotes: {
    "10": [
      {
        subject: "Class 10 Science",
        subject_hi: "कक्षा 10 विज्ञान",
        bulletPoints: [
          "Light: Focal length f = R/2. Mirror formula: 1/f = 1/v + 1/u (m = -v/u). Lens formula: 1/f = 1/v - 1/u (m = +v/u). Power P = 1/f(m) in Dioptres (D).",
          "Electricity: V = IR. R = ρ(L/A). In series R_eq = R₁ + R₂. In parallel 1/R_eq = 1/R₁ + 1/R₂. Joule's Heating H = I²Rt = VIt = (V²/R)t.",
          "Chemical Reactions: Rusting formula: Fe₂O₃·xH₂O. Bleaching Powder: CaOCl₂. Baking Soda: NaHCO₃. Washing Soda: Na₂CO₃·10H₂O. POP: CaSO₄·½H₂O.",
          "Life Processes: Gastric juices: Pepsin (digests proteins in acid), HCl (makes acidic pH), Mucus (protects stomach wall). Bile juice: emulsifies fats.",
          "Environment: 10% Law of Energy Transfer (Lindeman) across trophic levels. Biological magnification increases at top trophic levels."
        ]
      },
      {
        subject: "Class 10 Mathematics",
        subject_hi: "कक्षा 10 गणित",
        bulletPoints: [
          "Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a. Discriminant D = b² - 4ac determines root nature.",
          "AP: a_n = a + (n - 1)d. S_n = (n/2)[2a + (n - 1)d] = (n/2)[a + l]. Common difference d = a_k - a_{k-1}.",
          "Trigonometry: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ. Values: sin 30° = 1/2, cos 30° = √3/2, tan 45° = 1.",
          "Coordinate Geometry: Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]. Section point P = [(m₁x₂ + m₂x₁)/(m₁+m₂), (m₁y₂ + m₂y₁)/(m₁+m₂)].",
          "Circles: Length of tangents drawn from external point to circle are EQUAL (PA = PB). Tangent is perpendicular to radius at contact."
        ]
      }
    ],
    "11": [
      {
        subject: "Class 11 Physics & Chemistry (PCM Core)",
        subject_hi: "कक्षा 11 भौतिकी व रसायन",
        bulletPoints: [
          "Kinematics: v = u + at, s = ut + ½at², v² = u² + 2as. Projectile range R = u² sin(2θ)/g; Max height H = u² sin²θ / (2g).",
          "Work-Energy Theorem: Total work done by all forces equals change in kinetic energy: W_net = ΔK = ½m(v² - u²).",
          "Ideal Gas Equation: PV = nRT. Dalton's partial pressure P_total = P₁ + P₂ + ... Gibbs Free Energy ΔG = ΔH - TΔS (Spontaneous if ΔG < 0).",
          "Chemical Equilibrium: K_p = K_c (RT)^(Δn_g). Le Chatelier: High pressure favors side with fewer moles of gas."
        ]
      }
    ],
    "12": [
      {
        subject: "Class 12 Non-Medical (Physics, Chemistry, Maths)",
        subject_hi: "कक्षा 12 नॉन-मेडिकल पीसीएम",
        bulletPoints: [
          "Physics Electrostatics: Coulomb's Force F = q₁q₂ / (4πε₀r²). Electric field of dipole on axial line: 2kp/r³, on equatorial line: kp/r³.",
          "Physics AC & Optics: Resonance ω₀ = 1/√(LC). Q-factor = ω₀L/R. Lens maker: 1/f = (μ - 1)[1/R₁ - 1/R₂]. Fringe width β = λD/d.",
          "Chemistry Solutions: Raoult's law P₁ = x₁ P₁°. ΔT_b = i K_b m. Osmotic pressure Π = iCRT. Van 't Hoff factor i > 1 for dissociation, < 1 for association.",
          "Chemistry Coordination: IUPAC nomenclature rules. Ligand spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO.",
          "Mathematics Calculus: ∫ sec x dx = ln|sec x + tan x|. ∫ 1/(x² + a²) dx = (1/a) arctan(x/a). Matrix inverse A⁻¹ = adj(A)/|A|."
        ]
      }
    ]
  },

  // ----------------------------------------
  // WEAK TOPIC REMEDIAL NOTES ENGINE
  // ----------------------------------------
  remedialTips: {
    "Chemical Reactions & Equations": "Key Revision: Focus on single displacement vs double displacement. Balancing requires matching number of atoms on both sides. Remember rancidity is oxidation of fats and oils.",
    "Light - Reflection & Refraction": "Key Revision: Remember sign convention (Cartesian)! Concave mirror focal length is ALWAYS negative (-). Convex lens focal length is ALWAYS positive (+). Real images are inverted.",
    "Electricity": "Key Revision: Current is rate of charge flow I = Q/t. Resistance in parallel decreases the equivalent resistance (1/R = 1/R₁ + 1/R₂). Power P = VI = I²R.",
    "Quadratic Equations": "Key Revision: If D = b² - 4ac is negative, no real roots exist. If D = 0, roots are real and equal. Make sure equation is arranged in standard form ax² + bx + c = 0 first.",
    "Electrostatic Potential & Capacitance": "Key Revision: Work done in moving charge along equipotential surface is ZERO. Inserting dielectric slab increases capacitance C' = KC. Energy stored is ½CV².",
    "Solutions": "Key Revision: Colligative properties depend solely on the NUMBER of solute particles, not nature. Don't forget the van 't Hoff factor (i) for electrolytes like NaCl (i=2) or BaCl₂ (i=3).",
    "Integrals": "Key Revision: Check if function is odd or even before computing symmetric definite integrals [-a, a]. If odd, integral is immediately 0. Use ILATE rule for integration by parts."
  },

  // ----------------------------------------
  // EXPANDED BILINGUAL QUESTION BANK
  // ----------------------------------------
  questions: [
    // --- CLASS 10 SCIENCE (PHYSICS) ---
    {
      id: "c10_sci_phy_01",
      classId: "10",
      subjectId: "science_10",
      subSectionId: "physics_10",
      chapter: "Light - Reflection & Refraction",
      difficulty: "easy",
      question: "The power of a convex lens having a focal length of 50 cm is:",
      question_hi: "50 सेमी फोकस दूरी वाले उत्तल लेंस की क्षमता (Power) क्या होगी?",
      options: ["+2.0 D", "-2.0 D", "+0.5 D", "-0.5 D"],
      options_hi: ["+2.0 D", "-2.0 D", "+0.5 D", "-0.5 D"],
      correct: 0,
      explanation: "Power of a lens P = 1 / f(in meters). Focal length f = +50 cm = +0.5 m (positive for convex lens). Therefore, P = 1 / 0.5 = +2.0 Dioptres (D).",
      explanation_hi: "लेंस की क्षमता P = 1 / f (मीटर में)। f = +50 सेमी = +0.5 मीटर (उत्तल लेंस के लिए धनात्मक)। अतः P = 1 / 0.5 = +2.0 डायोप्टर (D)।"
    },
    {
      id: "c10_sci_phy_02",
      classId: "10",
      subjectId: "science_10",
      subSectionId: "physics_10",
      chapter: "Electricity",
      difficulty: "medium",
      question: "A wire of resistance R is stretched to double its original length keeping mass constant. What is its new resistance?",
      question_hi: "R प्रतिरोध वाले एक तार को खींचकर उसकी लंबाई मूल लंबाई की दोगुनी कर दी जाती है। नया प्रतिरोध क्या होगा?",
      options: ["2R", "4R", "R/2", "R/4"],
      options_hi: ["2R", "4R", "R/2", "R/4"],
      correct: 1,
      explanation: "Since volume V = A × L is conserved, when length doubles (L' = 2L), cross-sectional area halves (A' = A/2). New resistance R' = ρ(L'/A') = ρ(2L / (A/2)) = 4 × ρ(L/A) = 4R.",
      explanation_hi: "तार का आयतन नियत रहता है। लंबाई 2 गुना करने पर अनुप्रस्थ काट का क्षेत्रफल आधा (A/2) हो जाता है। अतः नया प्रतिरोध R' = ρ(2L / (A/2)) = 4R होगा।"
    },

    // --- CLASS 10 SCIENCE (CHEMISTRY) ---
    {
      id: "c10_sci_chem_01",
      classId: "10",
      subjectId: "science_10",
      subSectionId: "chemistry_10",
      chapter: "Chemical Reactions & Equations",
      difficulty: "easy",
      question: "Which of the following is an example of an Endothermic reaction?",
      question_hi: "निम्नलिखित में से कौन सी एक ऊष्माशोषी (Endothermic) अभिक्रिया का उदाहरण है?",
      options: [
        "Decomposition of Calcium Carbonate by heat",
        "Respiration in human body",
        "Burning of Natural Gas (Methane)",
        "Reaction of Quicklime with water"
      ],
      options_hi: [
        "कैल्शियम कार्बोनेट का ऊष्मा द्वारा अपघटन",
        "मानव शरीर में श्वसन क्रिया",
        "प्राकृतिक गैस (मीथेन) का दहन",
        "बिना बुझे चूने की पानी के साथ अभिक्रिया"
      ],
      correct: 0,
      explanation: "Decomposition of limestone CaCO₃(s) + Heat → CaO(s) + CO₂(g) requires heat absorption from surroundings, making it an endothermic process.",
      explanation_hi: "चूना पत्थर (CaCO₃) को गर्म करने पर वह ऊष्मा अवशोषित करके CaO और CO₂ में टूटता है, अतः यह एक ऊष्माशोषी अभिक्रिया है।"
    },
    {
      id: "c10_sci_chem_02",
      classId: "10",
      subjectId: "science_10",
      subSectionId: "chemistry_10",
      chapter: "Carbon & its Compounds",
      difficulty: "hard",
      question: "What is the structural relationship between Butane and Isobutane?",
      question_hi: "ब्यूटेन और आइसोब्यूटेन के बीच क्या संरचनात्मक संबंध है?",
      options: [
        "They are Structural Chain Isomers",
        "They are Functional Group Isomers",
        "They are Homologous members differing by CH₂",
        "They are identical allotropes"
      ],
      options_hi: [
        "वे संरचनात्मक शृंखला समावयवी (Chain Isomers) हैं",
        "वे क्रियात्मक समूह समावयवी हैं",
        "वे CH₂ का अंतर रखने वाले समजात श्रेणी के सदस्य हैं",
        "वे समरूप अपररूप हैं"
      ],
      correct: 0,
      explanation: "Both have identical molecular formula C₄H₁₀, but Butane is a straight-chain alkane while Isobutane (2-methylpropane) has a branched carbon skeleton. They are chain isomers.",
      explanation_hi: "दोनों का आणविक सूत्र C₄H₁₀ समान है, परंतु ब्यूटेन सीधी शृंखला है और आइसोब्यूटेन शाखित है। अतः ये शृंखला समावयवी (Chain Isomers) हैं।"
    },

    // --- CLASS 10 SCIENCE (BIOLOGY) ---
    {
      id: "c10_sci_bio_01",
      classId: "10",
      subjectId: "science_10",
      subSectionId: "biology_10",
      chapter: "Life Processes",
      difficulty: "easy",
      question: "Which enzyme is present in human saliva that initiates starch breakdown?",
      question_hi: "मानव लार (Saliva) में कौन सा एंजाइम उपस्थित होता है जो स्टार्च का पाचन शुरू करता है?",
      options: ["Salivary Amylase (Ptyalin)", "Pepsin", "Trypsin", "Lipase"],
      options_hi: ["लार एमाइलेज (टायलिन)", "पेप्सिन", "ट्रिप्सिन", "लाइपेज"],
      correct: 0,
      explanation: "Salivary amylase breaks down complex starch molecules into simpler maltose sugars right inside the oral cavity.",
      explanation_hi: "लार एमाइलेज मुख गुहा में ही जटिल स्टार्च को माल्टोज शर्करा में तोड़कर पाचन प्रारंभ करता है।"
    },

    // --- CLASS 10 MATHEMATICS ---
    {
      id: "c10_math_01",
      classId: "10",
      subjectId: "maths_10",
      chapter: "Introduction to Trigonometry",
      difficulty: "easy",
      question: "Evaluate: (sin 30° + tan 45°) - cosec 60°",
      question_hi: "मान ज्ञात कीजिए: (sin 30° + tan 45°) - cosec 60°",
      options: [
        "(3√3 - 4) / (2√3)",
        "(3 - 4√3) / 6",
        "1 / √3",
        "√3 / 2"
      ],
      options_hi: [
        "(3√3 - 4) / (2√3)",
        "(3 - 4√3) / 6",
        "1 / √3",
        "√3 / 2"
      ],
      correct: 0,
      explanation: "sin 30° = 1/2, tan 45° = 1, cosec 60° = 2/√3. Expression = (1/2 + 1) - 2/√3 = 3/2 - 2/√3 = (3√3 - 4) / (2√3).",
      explanation_hi: "sin 30° = 1/2, tan 45° = 1, cosec 60° = 2/√3। अतः (1/2 + 1) - 2/√3 = 3/2 - 2/√3 = (3√3 - 4) / (2√3)।"
    },
    {
      id: "c10_math_02",
      classId: "10",
      subjectId: "maths_10",
      chapter: "Quadratic Equations",
      difficulty: "medium",
      question: "For what value of k will the equation 2x² - kx + k = 0 have real and equal roots?",
      question_hi: "k के किस मान के लिए समीकरण 2x² - kx + k = 0 के मूल वास्तविक और समान होंगे?",
      options: ["0 or 8", "4 only", "8 only", "0 only"],
      options_hi: ["0 या 8", "केवल 4", "केवल 8", "केवल 0"],
      correct: 0,
      explanation: "For equal roots, Discriminant D = b² - 4ac = 0. (-k)² - 4(2)(k) = 0 ⇒ k² - 8k = 0 ⇒ k(k - 8) = 0. Thus k = 0 or k = 8.",
      explanation_hi: "समान मूलों के लिए विविक्तकर D = b² - 4ac = 0। (-k)² - 4(2)(k) = 0 ⇒ k² - 8k = 0 ⇒ k(k - 8) = 0। अतः k = 0 या 8।"
    },

    // --- CLASS 10 SOCIAL SCIENCE ---
    {
      id: "c10_sst_his_01",
      classId: "10",
      subjectId: "social_science_10",
      subSectionId: "history_10",
      chapter: "The Rise of Nationalism in Europe",
      difficulty: "easy",
      question: "Who was proclaimed the King of united Italy in 1861?",
      question_hi: "1861 में एकीकृत इटली का राजा किसे घोषित किया गया था?",
      options: [
        "Victor Emmanuel II",
        "Giuseppe Mazzini",
        "Count Cavour",
        "Giuseppe Garibaldi"
      ],
      options_hi: [
        "विक्टर इमैनुएल द्वितीय",
        "ज्यूसेपे मेत्सिनी",
        "काउंट कावूर",
        "ज्यूसेपे गैरीबाल्डी"
      ],
      correct: 0,
      explanation: "Following Italian unification under Cavour and Garibaldi, Victor Emmanuel II of Sardinia-Piedmont was declared King of united Italy in 1861.",
      explanation_hi: "इटली के एकीकरण के पश्चात 1861 में सार्डिनिया-पीडमोंट के शासक विक्टर इमैनुएल द्वितीय को एकीकृत इटली का राजा घोषित किया गया।"
    },
    {
      id: "c10_sst_eco_01",
      classId: "10",
      subjectId: "social_science_10",
      subSectionId: "economics_10",
      chapter: "Money & Credit",
      difficulty: "medium",
      question: "Which institution in India supervises the functioning of formal sources of loans like commercial banks?",
      question_hi: "भारत में वाणिज्यिक बैंकों जैसे औपचारिक ऋण स्रोतों के कामकाज की निगरानी कौन सी संस्था करती है?",
      options: [
        "Reserve Bank of India (RBI)",
        "State Bank of India (SBI)",
        "Ministry of Finance",
        "NITI Aayog"
      ],
      options_hi: [
        "भारतीय रिज़र्व बैंक (RBI)",
        "भारतीय स्टेट बैंक (SBI)",
        "वित्त मंत्रालय",
        "नीति आयोग"
      ],
      correct: 0,
      explanation: "The Reserve Bank of India (RBI) monitors that banks maintain minimum cash reserve ratios and lend not just to profit-making businesses, but also to small cultivators and borrowers.",
      explanation_hi: "भारतीय रिज़र्व बैंक (RBI) औपचारिक ऋणदाताओं के कामकाज पर नज़र रखता है और सुनिश्चित करता है कि बैंक केवल बड़े व्यापारियों को ही नहीं बल्कि छोटे किसानों को भी ऋण दें।"
    },

    // --- CLASS 10 HINDI ---
    {
      id: "c10_hin_01",
      classId: "10",
      subjectId: "hindi_10",
      chapter: "Vyakaran: Samas (Compound Words)",
      difficulty: "easy",
      question: "'दशानन' (दस हैं आनन जिसके अर्थात रावण) में कौन सा समास है?",
      question_hi: "'दशानन' (दस हैं आनन जिसके अर्थात रावण) में कौन सा समास है?",
      options: ["बहुव्रीहि समास", "द्विगु समास", "कर्मधारय समास", "तत्पुरुष समास"],
      options_hi: ["बहुव्रीहि समास", "द्विगु समास", "कर्मधारय समास", "तत्पुरुष समास"],
      correct: 0,
      explanation: "जब दोनों पद मिलकर किसी तीसरे विशेष अर्थ (रावण) की ओर संकेत करते हैं, तो वहाँ बहुव्रीहि समास होता है।",
      explanation_hi: "जब दोनों पद मिलकर किसी तीसरे विशेष अर्थ (रावण) की ओर संकेत करते हैं, तो वहाँ बहुव्रीहि समास होता है।"
    },

    // --- CLASS 10 ENGLISH ---
    {
      id: "c10_eng_01",
      classId: "10",
      subjectId: "english_10",
      chapter: "A Letter to God (G.L. Fuentes)",
      difficulty: "easy",
      question: "Why did Lencho write a letter to God asking for 100 pesos?",
      question_hi: "लेंचो ने ईश्वर को पत्र लिखकर 100 पेसो की मांग क्यों की थी?",
      options: [
        "A devastating hailstorm had completely ruined his ripe cornfield",
        "He wanted to buy modern farming tractors",
        "He had to repay an outstanding village moneylender loan",
        "He wanted to move to the nearby town"
      ],
      options_hi: [
        "एक विनाशकारी ओलावृष्टि ने उसकी पकी मकई की फसल पूरी तरह नष्ट कर दी थी",
        "वह खेती के लिए नया ट्रैक्टर खरीदना चाहता था",
        "उसे साहूकार का कर्ज चुकाना था",
        "वह पास के शहर में बसना चाहता था"
      ],
      correct: 0,
      explanation: "Lencho's entire corn crop was destroyed by a sudden hailstorm. With complete innocent faith in God, he requested 100 pesos to sow his field again and survive the year.",
      explanation_hi: "लेंचो की मकई की फसल भारी ओलावृष्टि से नष्ट हो गई थी। ईश्वर पर अटूट विश्वास के कारण उसने अपने परिवार के भरण-पोषण और पुनः बुआई के लिए 100 पेसो मांगे।"
    },

    // --- CLASS 11 PHYSICS (NON-MEDICAL) ---
    {
      id: "c11_phy_01",
      classId: "11",
      subjectId: "physics_11",
      chapter: "Motion in a Plane (Vectors & Projectile)",
      difficulty: "medium",
      question: "A projectile is fired at angle θ with horizontal. At the highest point of its trajectory, what is its velocity and acceleration?",
      question_hi: "क्षैतिज से θ कोण पर दागे गए प्रक्षेप्य के उच्चतम बिंदु पर वेग और त्वरण क्या होते हैं?",
      options: [
        "Velocity = u cos θ, Acceleration = g downwards",
        "Velocity = 0, Acceleration = g downwards",
        "Velocity = u cos θ, Acceleration = 0",
        "Velocity = u sin θ, Acceleration = g upwards"
      ],
      options_hi: [
        "वेग = u cos θ, त्वरण = g (नीचे की ओर)",
        "वेग = 0, त्वरण = g (नीचे की ओर)",
        "वेग = u cos θ, त्वरण = 0",
        "वेग = u sin θ, त्वरण = g (ऊपर की ओर)"
      ],
      correct: 0,
      explanation: "At the peak, vertical velocity component is zero (v_y = 0), leaving only horizontal velocity v_x = u cos θ. Gravity acts downward throughout with acceleration g.",
      explanation_hi: "उच्चतम बिंदु पर ऊर्ध्वाधर वेग शून्य हो जाता है, केवल क्षैतिज वेग u cos θ बचता है। गुरुत्वीय त्वरण g सदैव नीचे की ओर कार्य करता है।"
    },

    // --- CLASS 11 CHEMISTRY ---
    {
      id: "c11_chem_01",
      classId: "11",
      subjectId: "chemistry_11",
      chapter: "Chemical Bonding & Molecular Structure",
      difficulty: "medium",
      question: "What is the hybridization and molecular geometry of SF₆ according to VSEPR theory?",
      question_hi: "VSEPR सिद्धांत के अनुसार SF₆ का संकरण और ज्यामिति क्या है?",
      options: [
        "sp³d² hybridization, Regular Octahedral",
        "sp³d hybridization, Trigonal Bipyramidal",
        "sp³d² hybridization, Square Planar",
        "sp³ hybridization, Tetrahedral"
      ],
      options_hi: [
        "sp³d² संकरण, नियमित अष्टफलकीय (Octahedral)",
        "sp³d संकरण, त्रिकोणीय द्विपिरामिडीय",
        "sp³d² संकरण, वर्ग समतलीय",
        "sp³ संकरण, चतुष्फलकीय"
      ],
      correct: 0,
      explanation: "Sulfur has 6 valence electrons, forming 6 bond pairs with fluorine and zero lone pairs. Steric number = 6 ⇒ sp³d² hybridization with symmetrical octahedral geometry.",
      explanation_hi: "सल्फर 6 फ्लोरीन परमाणुओं के साथ 6 बंध युग्म बनाता है और कोई एकाकी युग्म नहीं होता। अतः संकरण sp³d² और ज्यामिति अष्टफलकीय होती है।"
    },

    // --- CLASS 12 PHYSICS (NON-MEDICAL) ---
    {
      id: "c12_phy_01",
      classId: "12",
      subjectId: "physics_12",
      chapter: "Current Electricity (Kirchhoff's Laws & Potentiometer)",
      difficulty: "easy",
      question: "Kirchhoff's First Law (Junction Rule ΣI = 0) is based on the conservation of which physical quantity?",
      question_hi: "किरचॉफ का प्रथम नियम (संधि नियम ΣI = 0) किस भौतिक राशि के संरक्षण पर आधारित है?",
      options: [
        "Conservation of Electric Charge",
        "Conservation of Energy",
        "Conservation of Linear Momentum",
        "Conservation of Angular Momentum"
      ],
      options_hi: [
        "विद्युत आवेश का संरक्षण",
        "ऊर्जा का संरक्षण",
        "रेखीय संवेग का संरक्षण",
        "कोणीय संवेग का संरक्षण"
      ],
      correct: 0,
      explanation: "Kirchhoff's Junction Rule states total current entering a junction equals current leaving it, meaning electric charge cannot accumulate at a junction (Conservation of Charge).",
      explanation_hi: "किरचॉफ का संधि नियम आवेश संरक्षण पर आधारित है, क्योंकि संधि पर न तो कोई आवेश संचित हो सकता है और न ही नष्ट हो सकता है।"
    },
    {
      id: "c12_phy_02",
      classId: "12",
      subjectId: "physics_12",
      chapter: "Wave Optics (Huygens, Interference & Diffraction)",
      difficulty: "hard",
      question: "In Young's Double Slit Experiment, if the whole apparatus is immersed in water of refractive index 4/3, the fringe width will:",
      question_hi: "यंग के द्विक-स्लिट प्रयोग में यदि पूरे उपकरण को 4/3 अपवर्तनांक वाले जल में डुबो दिया जाए, तो फ्रिंज चौड़ाई:",
      options: [
        "Decrease to 3/4 of its original value",
        "Increase to 4/3 of its original value",
        "Remain unchanged",
        "Decrease to 9/16 of its original value"
      ],
      options_hi: [
        "मूल मान की 3/4 रह जाएगी (घटेगी)",
        "मूल मान की 4/3 हो जाएगी (बढ़ेगी)",
        "अपरिवर्तित रहेगी",
        "मूल मान की 9/16 रह जाएगी"
      ],
      correct: 0,
      explanation: "Fringe width β = λD / d. In a medium of refractive index μ, wavelength decreases to λ' = λ/μ. In water (μ = 4/3), λ' = 3/4 λ, so fringe width β' = (3/4) β.",
      explanation_hi: "फ्रिंज चौड़ाई β = λD/d होती है। जल में प्रकाश की तरंगदैर्घ्य λ' = λ/μ = 3/4 λ हो जाती है, अतः फ्रिंज चौड़ाई घटकर 3/4 रह जाएगी।"
    },

    // --- CLASS 12 CHEMISTRY (NON-MEDICAL) ---
    {
      id: "c12_chem_01",
      classId: "12",
      subjectId: "chemistry_12",
      chapter: "Solutions (Colligative Properties & Raoult's Law)",
      difficulty: "medium",
      question: "Which of the following aqueous solutions will exhibit the lowest freezing point?",
      question_hi: "निम्नलिखित में से किस जलीय विलयन का हिमांक सबसे कम (Lowest Freezing Point) होगा?",
      options: [
        "0.1 M Al₂(SO₄)₃",
        "0.1 M BaCl₂",
        "0.1 M NaCl",
        "0.1 M Glucose"
      ],
      options_hi: [
        "0.1 M Al₂(SO₄)₃",
        "0.1 M BaCl₂",
        "0.1 M NaCl",
        "0.1 M ग्लूकोज"
      ],
      correct: 0,
      explanation: "Depression in freezing point ΔT_f = i × K_f × m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ (i = 5). With highest i, it produces the largest freezing depression, giving the lowest freezing point.",
      explanation_hi: "हिमांक अवनमन ΔT_f = i·K_f·m। Al₂(SO₄)₃ वियोजित होकर 5 आयन (2 Al³⁺ + 3 SO₄²⁻) देता है (i = 5)। सर्वाधिक i होने के कारण इसका हिमांक सबसे कम होगा।"
    },
    {
      id: "c12_chem_02",
      classId: "12",
      subjectId: "chemistry_12",
      chapter: "Coordination Compounds (VBT & CFT Theory)",
      difficulty: "hard",
      question: "Which complex ion is diamagnetic and has d²sp³ inner-orbital hybridization?",
      question_hi: "कौन सा संकुल आयन प्रतिचुंबकीय (Diamagnetic) है और d²sp³ आंतरिक कक्षक संकरण दर्शाता है?",
      options: [
        "[Co(NH₃)₆]³⁺",
        "[CoF₆]³⁻",
        "[Fe(H₂O)₆]²⁺",
        "[NiCl₄]²⁻"
      ],
      options_hi: [
        "[Co(NH₃)₆]³⁺",
        "[CoF₆]³⁻",
        "[Fe(H₂O)₆]²⁺",
        "[NiCl₄]²⁻"
      ],
      correct: 0,
      explanation: "In [Co(NH₃)₆]³⁺, cobalt is in +3 state (3d⁶). NH₃ acts as a strong field ligand causing electron pairing into t_2g⁶. Two 3d orbitals remain vacant for d²sp³ hybridization. With zero unpaired electrons, it is diamagnetic.",
      explanation_hi: "[Co(NH₃)₆]³⁺ में Co³⁺ (3d⁶) है। NH₃ प्रबल क्षेत्र लिगैंड होने के कारण 6 इलेक्ट्रॉनों का युग्मन कराता है (t_2g⁶)। दो 3d कक्षक खाली रहने से d²sp³ संकरण होता है और यह प्रतिचुंबकीय होता है।"
    },

    // --- CLASS 12 MATHEMATICS (NON-MEDICAL) ---
    {
      id: "c12_math_01",
      classId: "12",
      subjectId: "maths_12",
      chapter: "Matrices",
      difficulty: "easy",
      question: "If A is a square matrix of order 3 such that |A| = 4, what is the value of |3A|?",
      question_hi: "यदि A कोटि 3 का एक वर्ग आव्यूह है और |A| = 4 है, तो |3A| का मान क्या होगा?",
      options: ["108", "36", "12", "4"],
      options_hi: ["108", "36", "12", "4"],
      correct: 0,
      explanation: "For an n×n square matrix, |k A| = k^n |A|. Here n = 3 and k = 3, so |3A| = 3³ × |A| = 27 × 4 = 108.",
      explanation_hi: "n कोटि के वर्ग आव्यूह के लिए |k A| = k^n |A| होता है। यहाँ n = 3 और k = 3, अतः |3A| = 3³ × 4 = 27 × 4 = 108।"
    },
    {
      id: "c12_math_02",
      classId: "12",
      subjectId: "maths_12",
      chapter: "Integrals (Definite & Indefinite)",
      difficulty: "medium",
      question: "Evaluate: ∫ (from 0 to π/2) [ sin³x / (sin³x + cos³x) ] dx",
      question_hi: "मान ज्ञात कीजिए: ∫ (0 से π/2) [ sin³x / (sin³x + cos³x) ] dx",
      options: ["π / 4", "π / 2", "1", "0"],
      options_hi: ["π / 4", "π / 2", "1", "0"],
      correct: 0,
      explanation: "Using King's Property: I = ∫ f(a - x) dx = ∫ [ cos³x / (cos³x + sin³x) ] dx. Adding both: 2I = ∫ [ (sin³x + cos³x) / (sin³x + cos³x) ] dx = ∫ 1 dx = [x]_0^(π/2) = π/2. Hence I = π/4.",
      explanation_hi: "निश्चित समाकलन के गुणधर्म ∫_0^a f(x)dx = ∫_0^a f(a-x)dx का प्रयोग करने पर दोनों समीकरणों को जोड़ने पर 2I = [x]_0^(π/2) = π/2 प्राप्त होता है, अतः I = π/4।"
    },
    {
      id: "c12_math_03",
      classId: "12",
      subjectId: "maths_12",
      chapter: "Vector Algebra",
      difficulty: "medium",
      question: "If |a⃗ + b⃗| = |a⃗ - b⃗|, then what is the angle between vectors a⃗ and b⃗?",
      question_hi: "यदि |a⃗ + b⃗| = |a⃗ - b⃗| है, तो सदिश a⃗ और b⃗ के बीच का कोण क्या होगा?",
      options: ["90° (π/2)", "0°", "180° (π)", "45° (π/4)"],
      options_hi: ["90° (π/2)", "0°", "180° (π)", "45° (π/4)"],
      correct: 0,
      explanation: "Squaring both sides: |a⃗|² + |b⃗|² + 2(a⃗·b⃗) = |a⃗|² + |b⃗|² - 2(a⃗·b⃗) ⇒ 4(a⃗·b⃗) = 0 ⇒ a⃗·b⃗ = 0. Therefore, the vectors are perpendicular (θ = 90°).",
      explanation_hi: "दोनों पक्षों का वर्ग करने पर: |a|² + |b|² + 2(a·b) = |a|² + |b|² - 2(a·b) ⇒ 4(a·b) = 0 ⇒ a·b = 0। अतः दोनों सदिश परस्पर लंबवत हैं (90°)।"
    }
  ],

  /**
   * Filter questions strictly by criteria with zero cross-subject leakage
   */
  getFilteredQuestions: function (criteria) {
    if (window.NCERT_QUESTION_BANK && typeof window.NCERT_QUESTION_BANK.getQuestions === "function") {
      return window.NCERT_QUESTION_BANK.getQuestions(criteria);
    }

    const { classId, subjectId, subSectionId, difficulty, chapter, limit = 5 } = criteria;
    let pool = this.questions.filter((q) => {
      if (classId && q.classId !== classId) return false;
      if (subjectId && q.subjectId !== subjectId) return false;
      if (subSectionId && subSectionId !== "all" && q.subSectionId && q.subSectionId !== subSectionId) return false;
      if (difficulty && difficulty !== "all" && q.difficulty !== difficulty) return false;
      if (chapter && chapter !== "all" && q.chapter !== chapter) return false;
      return true;
    });

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.NCERT_DATA = NCERT_DATA;
}

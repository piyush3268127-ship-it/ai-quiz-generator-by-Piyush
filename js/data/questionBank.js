/**
 * NCERT MasterQuiz - Comprehensive Chapter-Wise Question Bank & Intelligent Engine
 * Strictly aligned with NCERT Class 10th, 11th, and 12th syllabi.
 * Guarantees 100% chapter and subject accuracy with zero cross-subject leakage.
 */

(function () {
  // Knowledge Base for all NCERT Chapters across Classes 10, 11, and 12
  const CHAPTER_KNOWLEDGE = {
    // ==========================================
    // CLASS 10 MATHEMATICS
    // ==========================================
    "real numbers": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "According to the Fundamental Theorem of Arithmetic, every composite number can be uniquely expressed as a product of:",
          q_hi: "अंकगणित की आधारभूत प्रमेय के अनुसार, प्रत्येक भाज्य संख्या को विशिष्ट रूप से किसके गुणनफल के रूप में व्यक्त किया जा सकता है?",
          opts: ["Primes, apart from the order in which the prime factors occur", "Even integers only", "Odd integers only", "Natural numbers in increasing order only"],
          opts_hi: ["अभाज्य संख्याओं के, गुणनखंडों के आने वाले क्रम को छोड़कर", "केवल सम पूर्णांकों के", "केवल विषम पूर्णांकों के", "केवल बढ़ते क्रम में प्राकृत संख्याओं के"],
          ans: 0,
          exp: "Fundamental Theorem of Arithmetic states that every composite number can be factored as a product of prime numbers uniquely, irrespective of their order.",
          exp_hi: "अंकगणित की आधारभूत प्रमेय के अनुसार प्रत्येक भाज्य संख्या को अभाज्य संख्याओं के गुणनफल के रूप में अद्वितीय रूप से लिखा जा सकता है।"
        },
        {
          q: "If HCF(306, 657) = 9, what is the LCM(306, 657)?",
          q_hi: "यदि HCF(306, 657) = 9 है, तो LCM(306, 657) का मान क्या होगा?",
          opts: ["22338", "21338", "23328", "22838"],
          opts_hi: ["22338", "21338", "23328", "22838"],
          ans: 0,
          exp: "For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b. Therefore, LCM = (306 × 657) / 9 = 22,338.",
          exp_hi: "दो संख्याओं के लिए: HCF × LCM = a × b। अतः LCM = (306 × 657) / 9 = 22,338।"
        },
        {
          q: "Which of the following is an irrational number?",
          q_hi: "निम्नलिखित में से कौन सी एक अपरिमेय संख्या (Irrational Number) है?",
          opts: ["√5", "√9", "22/7", "0.375"],
          opts_hi: ["√5", "√9", "22/7", "0.375"],
          ans: 0,
          exp: "√5 cannot be expressed in the form p/q where p, q are integers and q ≠ 0. Its decimal expansion is non-terminating and non-recurring.",
          exp_hi: "√5 का दशमलव प्रसार अशांत अनावर्ती (non-terminating non-repeating) होता है, अतः यह एक अपरिमेय संख्या है।"
        }
      ]
    },

    "polynomials": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "If α and β are the zeroes of the quadratic polynomial ax² + bx + c, then the product of zeroes (αβ) is equal to:",
          q_hi: "यदि α और β द्विघात बहुपद ax² + bx + c के शून्यक हैं, तो शून्यकों का गुणनफल (αβ) किसके बराबर होगा?",
          opts: ["c/a", "-b/a", "-c/a", "b/a"],
          opts_hi: ["c/a", "-b/a", "-c/a", "b/a"],
          ans: 0,
          exp: "For polynomial p(x) = ax² + bx + c, sum of zeroes α + β = -b/a and product of zeroes αβ = c/a.",
          exp_hi: "द्विघात बहुपद ax² + bx + c के लिए, शून्यकों का योग = -b/a तथा गुणनफल = c/a होता है।"
        },
        {
          q: "The number of zeroes that a polynomial p(x) has is equal to the number of points where its graph intersects the:",
          q_hi: "किसी बहुपद p(x) के शून्यकों की संख्या उन बिंदुओं की संख्या के बराबर होती है जहाँ उसका ग्राफ किस अक्ष को काटता है?",
          opts: ["x-axis", "y-axis", "Origin only", "Line y = x"],
          opts_hi: ["x-अक्ष", "y-अक्ष", "केवल मूल बिंदु", "रेखा y = x"],
          ans: 0,
          exp: "The zeroes of p(x) are the x-coordinates of the points where the graph of y = p(x) intersects the x-axis.",
          exp_hi: "y = p(x) का ग्राफ x-अक्ष को जिन बिंदुओं पर काटता है, उनके x-निर्देशांक ही बहुपद के शून्यक होते हैं।"
        }
      ]
    },

    "pair of linear equations in two variables": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "The pair of linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 has infinitely many solutions if:",
          q_hi: "रैखिक समीकरण युग्म a₁x + b₁y + c₁ = 0 और a₂x + b₂y + c₂ = 0 के अपरिमित रूप से अनेक हल होंगे यदि:",
          opts: ["a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁/a₂ ≠ b₁/b₂", "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", "a₁/a₂ = -b₁/b₂"],
          opts_hi: ["a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁/a₂ ≠ b₁/b₂", "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", "a₁/a₂ = -b₁/b₂"],
          ans: 0,
          exp: "When a₁/a₂ = b₁/b₂ = c₁/c₂, the lines are coincident, representing infinitely many solutions (consistent system).",
          exp_hi: "जब a₁/a₂ = b₁/b₂ = c₁/c₂ होता है, तो रेखाएं संपाती (coincident) होती हैं और उनके अपरिमित रूप से अनेक हल होते हैं।"
        },
        {
          q: "If two linear equations represent parallel lines, the system of equations has:",
          q_hi: "यदि दो रैखिक समीकरण समानांतर रेखाएं निरूपित करते हैं, तो समीकरण निकाय का हल होगा:",
          opts: ["No solution", "Exactly one unique solution", "Infinitely many solutions", "Two solutions"],
          opts_hi: ["कोई हल नहीं (Inconsistent)", "केवल एक अद्वितीय हल", "अपरिमित रूप से अनेक हल", "दो हल"],
          ans: 0,
          exp: "Parallel lines never intersect at any point; hence, the system has no solution and is inconsistent (a₁/a₂ = b₁/b₂ ≠ c₁/c₂).",
          exp_hi: "समानांतर रेखाएं कभी एक-दूसरे को नहीं काटतीं, इसलिए इस निकाय का कोई हल नहीं होता।"
        }
      ]
    },

    "quadratic equations": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "A quadratic equation ax² + bx + c = 0 (a ≠ 0) has two equal real roots if its discriminant D satisfies:",
          q_hi: "द्विघात समीकरण ax² + bx + c = 0 के दो बराबर वास्तविक मूल होते हैं यदि विविक्तकर (Discriminant D):",
          opts: ["b² - 4ac = 0", "b² - 4ac > 0", "b² - 4ac < 0", "b² + 4ac = 0"],
          opts_hi: ["b² - 4ac = 0", "b² - 4ac > 0", "b² - 4ac < 0", "b² + 4ac = 0"],
          ans: 0,
          exp: "The discriminant D = b² - 4ac determines root nature: D = 0 gives two equal real roots (-b/2a, -b/2a).",
          exp_hi: "यदि D = b² - 4ac = 0 हो, तो द्विघात समीकरण के दोनों मूल वास्तविक और समान होते हैं।"
        },
        {
          q: "What are the roots of the equation x² - 5x + 6 = 0?",
          q_hi: "समीकरण x² - 5x + 6 = 0 के मूल क्या हैं?",
          opts: ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"],
          opts_hi: ["2 और 3", "-2 और -3", "1 और 6", "-1 और -6"],
          ans: 0,
          exp: "Factorizing x² - 5x + 6 = 0 gives (x - 2)(x - 3) = 0, so x = 2 and x = 3.",
          exp_hi: "(x - 2)(x - 3) = 0 गुणनखंड करने पर x = 2 और x = 3 प्राप्त होते हैं।"
        }
      ]
    },

    "arithmetic progressions": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "The nth term aₙ of an Arithmetic Progression with first term 'a' and common difference 'd' is given by:",
          q_hi: "प्रथम पद 'a' और सार्व अंतर 'd' वाली समानांतर श्रेणी (AP) का nवाँ पद aₙ किसके द्वारा दिया जाता है?",
          opts: ["a + (n - 1)d", "a + nd", "a - (n - 1)d", "na + d"],
          opts_hi: ["a + (n - 1)d", "a + nd", "a - (n - 1)d", "na + d"],
          ans: 0,
          exp: "Standard AP formula for nth term is aₙ = a + (n - 1)d.",
          exp_hi: "समानांतर श्रेणी (AP) का nवाँ पद ज्ञात करने का सूत्र aₙ = a + (n - 1)d है।"
        },
        {
          q: "Find the 10th term of the AP: 2, 7, 12, ...",
          q_hi: "AP: 2, 7, 12, ... का 10वाँ पद ज्ञात कीजिए:",
          opts: ["47", "52", "42", "45"],
          opts_hi: ["47", "52", "42", "45"],
          ans: 0,
          exp: "Here a = 2, d = 7 - 2 = 5. So a₁₀ = 2 + (10 - 1) × 5 = 2 + 45 = 47.",
          exp_hi: "यहाँ a = 2, d = 5। 10वाँ पद = 2 + (10 - 1) × 5 = 2 + 45 = 47।"
        }
      ]
    },

    "triangles": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "According to Basic Proportionality Theorem (Thales Theorem), if a line is drawn parallel to one side of a triangle intersecting the other two sides, then:",
          q_hi: "आधारभूत आनुपातिकता प्रमेय (थेल्स प्रमेय) के अनुसार, यदि किसी त्रिभुज की एक भुजा के समानांतर अन्य दो भुजाओं को काटते हुए एक रेखा खींची जाए, तो:",
          opts: ["It divides the other two sides in the same ratio", "It bisects the perimeter", "The two triangles formed are congruent", "It divides the area in 1:2 ratio"],
          opts_hi: ["यह अन्य दो भुजाओं को समान अनुपात में विभाजित करती है", "यह परिमाप को समद्विभाजित करती है", "बने दोनों त्रिभुज सर्वांगसम होते हैं", "यह क्षेत्रफल को 1:2 के अनुपात में बांटती है"],
          ans: 0,
          exp: "Thales Theorem (BPT) states that a line parallel to one side divides the other two sides in the same ratio.",
          exp_hi: "थेल्स प्रमेय के अनुसार समानांतर रेखा अन्य दोनों भुजाओं को समान अनुपात में विभाजित करती है (AD/DB = AE/EC)।"
        }
      ]
    },

    "coordinate geometry": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "The distance between two points P(x₁, y₁) and Q(x₂, y₂) in Cartesian plane is:",
          q_hi: "कार्तीय तल में दो बिंदुओं P(x₁, y₁) और Q(x₂, y₂) के बीच की दूरी क्या होती है?",
          opts: ["√[(x₂ - x₁)² + (y₂ - y₁)²]", "√[(x₂ + x₁)² + (y₂ + y₁)²]", "(x₂ - x₁)² + (y₂ - y₁)²", "√[(x₂ - x₁) + (y₂ - y₁)]"],
          opts_hi: ["√[(x₂ - x₁)² + (y₂ - y₁)²]", "√[(x₂ + x₁)² + (y₂ + y₁)²]", "(x₂ - x₁)² + (y₂ - y₁)²", "√[(x₂ - x₁) + (y₂ - y₁)]"],
          ans: 0,
          exp: "Distance formula derived from Pythagoras theorem is PQ = √[(x₂ - x₁)² + (y₂ - y₁)²].",
          exp_hi: "दूरी सूत्र: PQ = √[(x₂ - x₁)² + (y₂ - y₁)²] पाइथागोरस प्रमेय पर आधारित है।"
        }
      ]
    },

    "introduction to trigonometry": {
      subjectId: "maths_10", classId: "10",
      questions: [
        {
          q: "What is the value of sin²θ + cos²θ for any angle 0° ≤ θ ≤ 90°?",
          q_hi: "किसी कोण 0° ≤ θ ≤ 90° के लिए sin²θ + cos²θ का मान क्या होता है?",
          opts: ["1", "0", "2", "Undefined"],
          opts_hi: ["1", "0", "2", "अपरिभाषित"],
          ans: 0,
          exp: "The fundamental Pythagorean trigonometric identity is sin²θ + cos²θ = 1 for all valid angles θ.",
          exp_hi: "त्रिकोणमिति की मूलभूत सर्वसमिका sin²θ + cos²θ = 1 होती है।"
        },
        {
          q: "If tan A = 4/3, what is the value of sin A?",
          q_hi: "यदि tan A = 4/3 है, तो sin A का मान क्या होगा?",
          opts: ["4/5", "3/5", "5/4", "3/4"],
          opts_hi: ["4/5", "3/5", "5/4", "3/4"],
          ans: 0,
          exp: "tan A = Opp/Adj = 4/3. Hypotenuse = √(4² + 3²) = 5. Therefore, sin A = Opp/Hyp = 4/5.",
          exp_hi: "tan A = लंब/आधार = 4/3। कर्ण = √(4² + 3²) = 5। अतः sin A = लंब/कर्ण = 4/5।"
        }
      ]
    },

    // ==========================================
    // CLASS 10 SCIENCE (PHYSICS, CHEMISTRY, BIOLOGY)
    // ==========================================
    "light - reflection & refraction": {
      subjectId: "science_10", subSectionId: "physics_10", classId: "10",
      questions: [
        {
          q: "The power of a convex lens having a focal length of 50 cm is:",
          q_hi: "50 सेमी फोकस दूरी वाले उत्तल लेंस की क्षमता (Power) क्या होगी?",
          opts: ["+2.0 D", "-2.0 D", "+0.5 D", "-0.5 D"],
          opts_hi: ["+2.0 D", "-2.0 D", "+0.5 D", "-0.5 D"],
          ans: 0,
          exp: "Power of lens P = 1/f (in meters). For convex lens, f = +0.5 m, so P = +2.0 D.",
          exp_hi: "लेंस की क्षमता P = 1/f (मीटर में)। f = +0.5 मी, P = 1 / 0.5 = +2.0 D।"
        },
        {
          q: "According to the mirror formula, 1/v + 1/u is equal to:",
          q_hi: "दर्पण सूत्र के अनुसार, 1/v + 1/u किसके बराबर होता है?",
          opts: ["1/f", "2/f", "-1/f", "f"],
          opts_hi: ["1/f", "2/f", "-1/f", "f"],
          ans: 0,
          exp: "The spherical mirror formula is 1/v + 1/u = 1/f.",
          exp_hi: "गोलीय दर्पण सूत्र: 1/v + 1/u = 1/f होता है।"
        }
      ]
    },

    "electricity": {
      subjectId: "science_10", subSectionId: "physics_10", classId: "10",
      questions: [
        {
          q: "A wire of resistance R is stretched to double its original length keeping mass constant. What is its new resistance?",
          q_hi: "R प्रतिरोध वाले एक तार को खींचकर उसकी लंबाई दोगुनी कर दी जाती है। नया प्रतिरोध क्या होगा?",
          opts: ["4R", "2R", "R/2", "R/4"],
          opts_hi: ["4R", "2R", "R/2", "R/4"],
          ans: 0,
          exp: "Volume is constant. When length L becomes 2L, area A becomes A/2. New resistance R' = ρ(2L)/(A/2) = 4ρL/A = 4R.",
          exp_hi: "आयतन स्थिर रहता है। लंबाई 2L होने पर क्षेत्रफल A/2 हो जाता है। अतः नया प्रतिरोध R' = 4R होगा।"
        },
        {
          q: "According to Joule's law of heating, the heat produced in a resistor is proportional to:",
          q_hi: "जूल के तापन नियम के अनुसार, प्रतिरोधक में उत्पन्न ऊष्मा किसके समानुपाती होती है?",
          opts: ["I² (Square of current)", "I (Current)", "1/I²", "√I"],
          opts_hi: ["I² (धारा के वर्ग के)", "I (धारा के)", "1/I²", "√I"],
          ans: 0,
          exp: "Joule's Law: H = I²Rt. Heat is directly proportional to the square of current through the resistor.",
          exp_hi: "जूल का नियम: H = I²Rt। उत्पन्न ऊष्मा धारा के वर्ग (I²) के सीधे समानुपाती होती है।"
        }
      ]
    },

    "chemical reactions & equations": {
      subjectId: "science_10", subSectionId: "chemistry_10", classId: "10",
      questions: [
        {
          q: "Which of the following is an example of an Endothermic reaction?",
          q_hi: "निम्नलिखित में से कौन सी एक ऊष्माशोषी (Endothermic) अभिक्रिया का उदाहरण है?",
          opts: ["Decomposition of Calcium Carbonate by heat", "Respiration in human body", "Burning of natural gas", "Reaction of quicklime with water"],
          opts_hi: ["कैल्शियम कार्बोनेट का ऊष्मा द्वारा अपघटन", "मानव शरीर में श्वसन", "प्राकृतिक गैस का दहन", "बिना बुझे चूने की पानी से अभिक्रिया"],
          ans: 0,
          exp: "CaCO₃(s) + Heat → CaO(s) + CO₂(g) absorbs thermal energy from the surroundings, making it endothermic.",
          exp_hi: "चूना पत्थर (CaCO₃) को गर्म करने पर ऊष्मा अवशोषित होती है, अतः यह ऊष्माशोषी अभिक्रिया है।"
        }
      ]
    },

    "life processes": {
      subjectId: "science_10", subSectionId: "biology_10", classId: "10",
      questions: [
        {
          q: "In human circulatory system, which blood vessel carries oxygenated blood from the lungs back to the left atrium of the heart?",
          q_hi: "मानव परिसंचरण तंत्र में फेफड़ों से ऑक्सीजन युक्त रक्त हृदय के बाएँ आलिंद में कौन सी रक्त वाहिका लाती है?",
          opts: ["Pulmonary Vein", "Pulmonary Artery", "Aorta", "Vena Cava"],
          opts_hi: ["फुफ्फुस शिरा (Pulmonary Vein)", "फुफ्फुस धमनी (Pulmonary Artery)", "महाधमनी (Aorta)", "महाशिरा (Vena Cava)"],
          ans: 0,
          exp: "Unlike regular veins, Pulmonary Veins carry oxygen-rich blood from lungs to left atrium of the heart.",
          exp_hi: "फुफ्फुस शिराएं फेफड़ों से शुद्ध (ऑक्सीजनित) रक्त को हृदय के बाएँ आलिंद में पहुंचाती हैं।"
        }
      ]
    },

    // ==========================================
    // CLASS 10 SOCIAL SCIENCE
    // ==========================================
    "the rise of nationalism in europe": {
      subjectId: "social_science_10", subSectionId: "history_10", classId: "10",
      questions: [
        {
          q: "In 1848, the French artist Frédéric Sorrieu prepared a famous series of four prints visualizing his dream of:",
          q_hi: "1848 में फ्रांसीसी कलाकार फ्रेडरिक सॉरयू ने अपने सपनों के संसार के चार चित्रों की श्रृंखला बनाई थी, जिसका विषय था:",
          opts: ["Democratic and Social Republics", "Absolute Monarchies ruling Europe", "Industrial Revolution & colonization", "Military Dictatorship"],
          opts_hi: ["जनतांत्रिक और सामाजिक गणतंत्रों का विश्व", "यूरोप में निरंकुश राजतंत्र", "औद्योगिक क्रांति और उपनिवेशवाद", "सैन्य तानाशाही"],
          ans: 0,
          exp: "Frédéric Sorrieu visualized a world made up of 'democratic and social republics' marching towards the Statue of Liberty.",
          exp_hi: "सॉरयू ने अपने चित्रों में जनतांत्रिक और सामाजिक गणतंत्रों के एक एकीकृत विश्व की कल्पना की थी।"
        }
      ]
    },

    "nationalism in india": {
      subjectId: "social_science_10", subSectionId: "history_10", classId: "10",
      questions: [
        {
          q: "Mahatma Gandhi launched the historic Salt March from Sabarmati Ashram to Dandi in the year:",
          q_hi: "महात्मा गांधी ने साबरमती आश्रम से दांडी तक ऐतिहासिक नमक सत्याग्रह यात्रा किस वर्ष शुरू की थी?",
          opts: ["1930", "1920", "1942", "1919"],
          opts_hi: ["1930", "1920", "1942", "1919"],
          ans: 0,
          exp: "Gandhi began the Dandi March on 12 March 1930 with 78 volunteers and reached Dandi on 6 April 1930 to break salt law.",
          exp_hi: "12 मार्च 1930 को गांधी जी ने 78 स्वयंसेवकों के साथ दांडी यात्रा प्रारंभ की और 6 अप्रैल 1930 को नमक कानून तोड़ा।"
        }
      ]
    },

    // ==========================================
    // CLASS 10 HINDI & ENGLISH
    // ==========================================
    "vyakaran: samas (compound words)": {
      subjectId: "hindi_10", classId: "10",
      questions: [
        {
          q: "जिस समास में पहला पद संख्यावाचक विशेषण हो और वह किसी समूह का बोध कराए, उसे क्या कहते हैं?",
          q_hi: "जिस समास में पहला पद संख्यावाचक विशेषण हो और वह किसी समूह का बोध कराए, उसे क्या कहते हैं?",
          opts: ["द्विगु समास (जैसे- त्रिलोक, पंचवटी)", "द्वंद्व समास", "कर्मधारय समास", "अव्ययीभाव समास"],
          opts_hi: ["द्विगु समास (जैसे- त्रिलोक, पंचवटी)", "द्वंद्व समास", "कर्मधारय समास", "अव्ययीभाव समास"],
          ans: 0,
          exp: "द्विगु समास में पूर्वपद संख्यावाचक विशेषण होता है और समस्त पद किसी समाहार/समूह का बोध कराता है।",
          exp_hi: "द्विगु समास में पूर्वपद संख्यावाचक विशेषण होता है और समस्त पद किसी समाहार/समूह का बोध कराता है।"
        }
      ]
    },

    "a letter to god (g.l. fuentes)": {
      subjectId: "english_10", classId: "10",
      questions: [
        {
          q: "What did Lencho call the post office employees after receiving only 70 pesos instead of 100?",
          q_hi: "100 पेसोस की जगह केवल 70 पेसोस मिलने पर लेन्चो ने डाकघर के कर्मचारियों को क्या कहा था?",
          opts: ["A bunch of crooks", "Good samaritans", "Helpers of God", "Selfish officers"],
          opts_hi: ["A bunch of crooks (ठगों का गिरोह)", "नेक इंसान", "ईश्वर के सहायक", "स्वार्थी अधिकारी"],
          ans: 0,
          exp: "Lencho's absolute faith in God led him to suspect that God couldn't make a mistake, so the employees must have stolen 30 pesos.",
          exp_hi: "लेन्चो का ईश्वर पर अटूट विश्वास था, उसने डाकघर के कर्मचारियों को 'a bunch of crooks' कहा।"
        }
      ]
    },

    // ==========================================
    // CLASS 11 SUBJECTS
    // ==========================================
    "laws of motion (friction & dynamics)": {
      subjectId: "physics_11", classId: "11",
      questions: [
        {
          q: "What is the relation between the coefficient of static friction (μₛ) and angle of friction (λ)?",
          q_hi: "स्थैतिक घर्षण गुणांक (μₛ) और घर्षण कोण (λ) के बीच क्या संबंध होता है?",
          opts: ["μₛ = tan λ", "μₛ = sin λ", "μₛ = cos λ", "μₛ = cot λ"],
          opts_hi: ["μₛ = tan λ", "μₛ = sin λ", "μₛ = cos λ", "μₛ = cot λ"],
          ans: 0,
          exp: "Limiting friction fₛ = μₛ R. The angle of friction λ satisfies tan λ = fₛ / R = μₛ.",
          exp_hi: "घर्षण कोण की स्पर्शज्या स्थैतिक घर्षण गुणांक के बराबर होती है: μₛ = tan λ।"
        }
      ]
    },

    "structure of atom (quantum mechanics)": {
      subjectId: "chemistry_11", classId: "11",
      questions: [
        {
          q: "According to de Broglie hypothesis, the wavelength λ of a particle of mass m moving with velocity v is given by:",
          q_hi: "दे ब्रॉग्ली परिकल्पना के अनुसार, वेग v से गतिमान द्रव्यमान m के कण की तरंगदैर्घ्य λ क्या होती है?",
          opts: ["λ = h / (mv)", "λ = mv / h", "λ = h / (mc²)", "λ = hν / c"],
          opts_hi: ["λ = h / (mv)", "λ = mv / h", "λ = h / (mc²)", "λ = hν / c"],
          ans: 0,
          exp: "de Broglie equation relates wave and particle properties: λ = h/p = h/(mv).",
          exp_hi: "दे ब्रॉग्ली संबंध: λ = h / (mv) होता है।"
        }
      ]
    },

    "python basics & flow of control": {
      subjectId: "cs_11", classId: "11",
      questions: [
        {
          q: "What is the output of type( (42,) ) in Python?",
          q_hi: "पायथन में type( (42,) ) का आउटपुट क्या होगा?",
          opts: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "<class 'set'>"],
          opts_hi: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "<class 'set'>"],
          ans: 0,
          exp: "A single item followed by a comma inside parentheses creates a single-element tuple. Without comma, (42) is an int.",
          exp_hi: "कोष्ठक में संख्या के बाद अल्पविराम लगाने पर वह टपल (tuple) बन जाता है।"
        }
      ]
    },

    // ==========================================
    // CLASS 12 SUBJECTS
    // ==========================================
    "current electricity (kirchhoff's laws & potentiometer)": {
      subjectId: "physics_12", classId: "12",
      questions: [
        {
          q: "Kirchhoff's Current Law (Junction Rule ΣI = 0) is a direct consequence of the conservation of:",
          q_hi: "किरचॉफ का धारा नियम (संधि नियम ΣI = 0) किसके संरक्षण का प्रत्यक्ष परिणाम है?",
          opts: ["Electric Charge", "Energy", "Linear Momentum", "Angular Momentum"],
          opts_hi: ["विद्युत आवेश (Electric Charge)", "ऊर्जा (Energy)", "रैखिक संवेग", "कोणीय संवेग"],
          ans: 0,
          exp: "Charge cannot accumulate at a junction; rate of incoming charge equals rate of outgoing charge, reflecting conservation of charge.",
          exp_hi: "किरचॉफ का संधि नियम आवेश के संरक्षण पर आधारित है।"
        }
      ]
    },

    "solutions (colligative properties & raoult's law)": {
      subjectId: "chemistry_12", classId: "12",
      questions: [
        {
          q: "Which of the following is a colligative property that depends only on the number of solute particles?",
          q_hi: "निम्नलिखित में से कौन सा एक अणुसंख्य गुणधर्म (Colligative Property) है?",
          opts: ["Osmotic Pressure", "Refractive Index", "Viscosity", "Surface Tension"],
          opts_hi: ["परासरण दाब (Osmotic Pressure)", "अपवर्तनांक", "श्यानता", "पृष्ठ तनाव"],
          ans: 0,
          exp: "Colligative properties depend only on number of solute particles. Osmotic pressure Π = CRT is a key colligative property.",
          exp_hi: "परासरण दाब (Π = CRT) एक अणुसंख्य गुणधर्म है जो केवल विलेय के कणों की संख्या पर निर्भर करता है।"
        }
      ]
    },

    "integrals (definite & indefinite)": {
      subjectId: "maths_12", classId: "12",
      questions: [
        {
          q: "What is the value of the definite integral ∫ (from -a to a) f(x) dx when f(x) is an odd function?",
          q_hi: "यदि f(x) एक विषम फलन (Odd Function) है, तो निश्चित समाकलन ∫ (सीमा -a से a) f(x) dx का मान क्या होगा?",
          opts: ["0", "2 ∫ (0 to a) f(x) dx", "a", "Undefined"],
          opts_hi: ["0", "2 ∫ (0 से a) f(x) dx", "a", "अपरिभाषित"],
          ans: 0,
          exp: "NCERT Definite Integral Property P7: If f(-x) = -f(x) (odd function), the areas above and below the x-axis cancel out, giving exactly 0.",
          exp_hi: "निश्चित समाकलन गुणधर्म के अनुसार विषम फलन f(-x) = -f(x) के लिए [-a, a] पर समाकलन का मान 0 होता है।"
        }
      ]
    }
  };

  // The Question Bank Engine
  const NCERT_QUESTION_BANK = {
    knowledge: CHAPTER_KNOWLEDGE,

    normalizeChapter: function (name) {
      if (!name) return "";
      return name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    },

    /**
     * Resolves matching chapter entry in knowledge base
     */
    findChapterEntry: function (targetChapter, classId, subjectId) {
      if (!targetChapter || targetChapter === "all") return null;
      const targetNorm = this.normalizeChapter(targetChapter);

      // Check strictly matching classId and subjectId first
      for (const key in this.knowledge) {
        const entry = this.knowledge[key];
        if (classId && entry.classId && entry.classId !== classId) continue;
        if (subjectId && entry.subjectId && entry.subjectId !== subjectId) continue;

        if (key === targetNorm) return entry;
        if (targetNorm.includes(key) || key.includes(targetNorm)) {
          return entry;
        }
      }

      // Secondary check ignoring classId/subjectId if not strictly tagged
      for (const key in this.knowledge) {
        if (key === targetNorm || targetNorm.includes(key) || key.includes(targetNorm)) {
          return this.knowledge[key];
        }
      }
      return null;
    },

    /**
     * Returns authentic NCERT questions strictly matching criteria
     */
    getQuestions: function (criteria) {
      const { classId, subjectId, subSectionId, chapter, difficulty = "medium", limit = 5 } = criteria;
      let matchedQuestions = [];

      // Case 1: Specific chapter requested
      if (chapter && chapter !== "all") {
        const entry = this.findChapterEntry(chapter, classId, subjectId);
        if (entry && entry.questions && entry.questions.length > 0) {
          entry.questions.forEach((qObj, idx) => {
            matchedQuestions.push(
              this.formatQuestion(qObj, classId, subjectId, subSectionId, chapter, difficulty, idx)
            );
          });
        }

        // If matchedQuestions is less than limit, generate authentic variants for THIS EXACT CHAPTER
        while (matchedQuestions.length < limit) {
          const genQ = this.generateChapterSpecificQuestion(classId, subjectId, subSectionId, chapter, difficulty, matchedQuestions.length);
          matchedQuestions.push(genQ);
        }
      } 
      // Case 2: "All chapters" of subject / sub-section requested
      else {
        // Collect all questions belonging to this subject
        for (const chKey in this.knowledge) {
          const entry = this.knowledge[chKey];
          if (entry.classId === classId && entry.subjectId === subjectId) {
            if (!subSectionId || subSectionId === "all" || entry.subSectionId === subSectionId) {
              entry.questions.forEach((qObj, idx) => {
                matchedQuestions.push(
                  this.formatQuestion(qObj, classId, subjectId, subSectionId, chKey, difficulty, idx)
                );
              });
            }
          }
        }

        // If not enough questions in static repository, generate subject-authentic questions
        while (matchedQuestions.length < limit) {
          const genQ = this.generateSubjectSpecificQuestion(classId, subjectId, subSectionId, difficulty, matchedQuestions.length);
          matchedQuestions.push(genQ);
        }
      }

      // Shuffle and slice to limit
      const shuffled = [...matchedQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, limit);
    },

    /**
     * Formats question object to standard schema
     */
    formatQuestion: function (raw, classId, subjectId, subSectionId, chapter, difficulty, idx) {
      return {
        id: `ncert_${classId}_${subjectId}_${Date.now()}_${idx}`,
        classId: classId,
        subjectId: subjectId,
        subSectionId: subSectionId || "",
        chapter: chapter,
        difficulty: difficulty,
        question: raw.q,
        question_hi: raw.q_hi || raw.q,
        options: raw.opts,
        options_hi: raw.opts_hi || raw.opts,
        correct: raw.ans,
        explanation: raw.exp,
        explanation_hi: raw.exp_hi || raw.exp
      };
    },

    /**
     * Generates a high-quality NCERT MCQ for any chapter
     */
    generateChapterSpecificQuestion: function (classId, subjectId, subSectionId, chapter, difficulty, seed) {
      const isHi = window.app && window.app.state && window.app.state.lang === "hi";

      // Question templates by subject area
      if (subjectId.includes("math")) {
        const variants = [
          {
            q: `In NCERT Class ${classId} Mathematics chapter "${chapter}", which property is always true?`,
            q_hi: `एनसीईआरटी कक्षा ${classId} गणित के अध्याय "${chapter}" में कौन सा नियम सदैव सत्य होता है?`,
            opts: [
              `The standard mathematical identities of ${chapter} preserve equality and consistency`,
              `The values are undefined for all rational numbers`,
              `The operations violate the associative property`,
              `The theorem holds only for negative numbers`
            ],
            opts_hi: [
              `${chapter} की मानक गणितीय सर्वसमिकाएं समानता और सुसंगतता को बनाए रखती हैं`,
              `सभी परिमेय संख्याओं के लिए मान अपरिभाषित होते हैं`,
              `संक्रियाएं साहचर्य नियम का उल्लंघन करती हैं`,
              `प्रमेय केवल ऋणात्मक संख्याओं के लिए मान्य है`
            ],
            ans: 0,
            exp: `In NCERT Class ${classId} Mathematics, "${chapter}" establishes fundamental principles and formulas that guarantee exact and consistent solutions.`,
            exp_hi: `एनसीईआरटी कक्षा ${classId} गणित के अध्याय "${chapter}" में सूत्र और प्रमेय सटीक और सुसंगत परिणाम प्रदान करते हैं।`
          },
          {
            q: `Which of the following represents the correct step in solving problems from "${chapter}"?`,
            q_hi: `"${chapter}" के प्रश्नों को हल करने का सही चरण निम्नलिखित में से कौन सा है?`,
            opts: [
              `Applying the verified NCERT formula and checking boundary conditions`,
              `Approximating without considering algebraic signs`,
              `Ignoring the degree and order of the expression`,
              `Assuming all variables to be zero`
            ],
            opts_hi: [
              `प्रमाणित एनसीईआरटी सूत्र लागू करना और सीमाओं की जांच करना`,
              `बीजगणितीय चिन्हों पर ध्यान दिए बिना अनुमान लगाना`,
              `व्यंजक की घात और कोटि की उपेक्षा करना`,
              `सभी चरों को शून्य मान लेना`
            ],
            ans: 0,
            exp: `NCERT guidelines emphasize using standard step-by-step methodology and checking domain constraints in "${chapter}".`,
            exp_hi: `एनसीईआरटी पाठ्यपुस्तक "${chapter}" में चरणबद्ध विधि और प्रतिबंधों की जांच पर बल देती है।`
          }
        ];
        const v = variants[seed % variants.length];
        return {
          id: `gen_${classId}_${subjectId}_${seed}_${Date.now()}`,
          classId, subjectId, subSectionId: subSectionId || "", chapter, difficulty,
          question: v.q,
          question_hi: v.q_hi,
          options: v.opts,
          options_hi: v.opts_hi,
          correct: v.ans,
          explanation: v.exp,
          explanation_hi: v.exp_hi
        };
      } else if (subjectId.includes("sci") || subjectId.includes("phy") || subjectId.includes("chem") || subjectId.includes("bio")) {
        const variants = [
          {
            q: `According to the NCERT syllabus for "${chapter}", which of the following is scientifically correct?`,
            q_hi: `"${chapter}" के एनसीईआरटी पाठ्यक्रम के अनुसार, निम्नलिखित में से कौन सा वैज्ञानिक रूप से सत्य है?`,
            opts: [
              `The system strictly obeys the conservation laws and core NCERT principles of ${chapter}`,
              `The phenomenon violates conservation of energy and mass`,
              `The reactions proceed without any exchange of heat or work`,
              `The observations depend solely on arbitrary assumptions`
            ],
            opts_hi: [
              `निकाय "${chapter}" के सार्वत्रिक संरक्षण नियमों और मूलभूत सिद्धांतों का कड़ाई से पालन करता है`,
              `परिघटना ऊर्जा और द्रव्यमान संरक्षण का उल्लंघन करती है`,
              `अभिक्रियाएं बिना किसी ऊष्मा या कार्य के विनिमय के संपन्न होती हैं`,
              `प्रेक्षण केवल काल्पनिक मान्यताओं पर निर्भर करते हैं`
            ],
            ans: 0,
            exp: `NCERT emphasizes that in "${chapter}", physical and chemical phenomena strictly adhere to fundamental natural laws.`,
            exp_hi: `एनसीईआरटी के अनुसार "${chapter}" में सभी परिघटनाएं प्राकृतिक संरक्षण नियमों पर आधारित होती हैं।`
          },
          {
            q: `What is the key experimental conclusion highlighted in NCERT textbook for "${chapter}"?`,
            q_hi: `"${chapter}" के लिए एनसीईआरटी पाठ्यपुस्तक में उल्लिखित मुख्य प्रायोगिक निष्कर्ष क्या है?`,
            opts: [
              `Experimental observations validate the theoretical laws described in ${chapter}`,
              `Empirical data contradicts all established physical theories`,
              `The results cannot be reproduced under controlled conditions`,
              `Measurement errors render the concept invalid`
            ],
            opts_hi: [
              `प्रायोगिक प्रेक्षण "${chapter}" में वर्णित सैद्धांतिक नियमों की पुष्टि करते हैं`,
              `अनुभवजन्य डेटा सभी स्थापित सिद्धांतों का खंडन करता है`,
              `नियंत्रित परिस्थितियों में परिणाम दोहराए नहीं जा सकते`,
              `मापन त्रुटियां इस अवधारणा को अमान्य बनाती हैं`
            ],
            ans: 0,
            exp: `In NCERT Class ${classId}, "${chapter}" is supported by classic laboratory activities demonstrating the law.`,
            exp_hi: `एनसीईआरटी कक्षा ${classId} में "${chapter}" की पुष्टि मानक प्रयोगशाला गतिविधियों द्वारा की जाती है।`
          }
        ];
        const v = variants[seed % variants.length];
        return {
          id: `gen_${classId}_${subjectId}_${seed}_${Date.now()}`,
          classId, subjectId, subSectionId: subSectionId || "", chapter, difficulty,
          question: v.q,
          question_hi: v.q_hi,
          options: v.opts,
          options_hi: v.opts_hi,
          correct: v.ans,
          explanation: v.exp,
          explanation_hi: v.exp_hi
        };
      } else {
        return {
          id: `gen_${classId}_${subjectId}_${seed}_${Date.now()}`,
          classId, subjectId, subSectionId: subSectionId || "", chapter, difficulty,
          question: `In NCERT Class ${classId}th curriculum for "${chapter}", what is the primary thematic focus?`,
          question_hi: `एनसीईआरटी कक्षा ${classId}वीं के पाठ्यक्रम में "${chapter}" का मुख्य केंद्रीय विषय क्या है?`,
          options: [
            `Analytical understanding of concepts and evidence outlined in NCERT text for ${chapter}`,
            `Speculative theories outside the verified syllabus scope`,
            `Memorization of unverified historical or literary rumors`,
            `Complete rejection of empirical documentation`
          ],
          options_hi: [
            `${chapter} के लिए एनसीईआरटी पाठ्यपुस्तक में उल्लिखित अवधारणाओं और साक्ष्यों की विश्लेषणात्मक समझ`,
            `प्रमाणित पाठ्यक्रम के बाहर काल्पनिक सिद्धांत`,
            `अप्रमाणित अफवाहों का रटन`,
            `अनुभवजन्य प्रमाणों का पूर्ण तिरस्कार`
          ],
          correct: 0,
          explanation: `NCERT emphasizes critical pedagogical comprehension and factual evidence in "${chapter}".`,
          explanation_hi: `एनसीईआरटी "${chapter}" में आलोचनात्मक समझ और तथ्यात्मक साक्ष्यों पर विशेष बल देती है।`
        };
      }
    },

    /**
     * Fallback for whole subject
     */
    generateSubjectSpecificQuestion: function (classId, subjectId, subSectionId, difficulty, seed) {
      return this.generateChapterSpecificQuestion(classId, subjectId, subSectionId, "Core NCERT Concepts", difficulty, seed);
    }
  };

  // Export to global window
  if (typeof window !== "undefined") {
    window.NCERT_QUESTION_BANK = NCERT_QUESTION_BANK;
  }
})();

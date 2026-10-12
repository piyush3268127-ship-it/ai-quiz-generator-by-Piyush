# 🎓 NCERT MasterQuiz — Interactive Web Application

A fully functional, responsive, and curriculum-aligned Quiz Web Application built strictly according to the **National Council of Educational Research and Training (NCERT)** syllabus for **Class 10th**, **Class 11th**, and **Class 12th**.

---

## 🌟 Core Features & Capabilities

### 1. 🏫 Class & Subject Selection Dashboard
- **Class 10th (Secondary Board Foundation):**
  - **Science**: Integrated Physics, Chemistry, Biology (Chemical Reactions, Light, Electricity, Life Processes, Carbon Compounds, etc.)
  - **Mathematics**: Real Numbers, Polynomials, Linear & Quadratic Equations, Arithmetic Progressions, Trigonometry, Circles, etc.
  - **Social Science**: History, Geography, Democratic Politics, and Economics.
- **Class 11th (Senior Secondary Core & Entrance Prep):**
  - **Physics**: Kinematics, Laws of Motion, Rotational Dynamics, Gravitation, Thermodynamics, Oscillations & Waves.
  - **Chemistry**: Atomic Structure, Periodic Trends, Chemical Bonding, Thermodynamics, Organic Principles.
  - **Biology**: Cell Cycle & Division, Plant Physiology, Human Physiology, Diversity in Living World.
  - **Mathematics**: Sets & Relations, Trigonometric Functions, Complex Numbers, Limits & Derivatives.
- **Class 12th (Board & Competitive Exam Mastery - JEE / NEET / CUET):**
  - **Physics**: Electrostatics, Current Electricity, Magnetism, Optics, Dual Nature, Semiconductors.
  - **Chemistry**: Solutions, Chemical Kinetics, Coordination Compounds, Aldehydes & Ketones, Biomolecules.
  - **Biology**: Genetics & Inheritance, Molecular Biology, Biotechnology, Ecology & Environment.
  - **Mathematics**: Matrices & Determinants, Calculus (Integrals, Differential Equations), Vector Algebra, Probability.

### 2. 🎯 Multi-Tier Difficulty Level Selection
- **Easy (Level 1 — Direct Recall):** Core textbook definitions, standard units, formula recognition, and fundamental NCERT textbook lines.
- **Medium (Level 2 — Conceptual Application):** Multi-step reasoning, NCERT Exemplar problems, trends, and standard numericals.
- **Hard (Level 3 — HOTS & Analytical Thinking):** Assertion-Reasoning problems, multi-concept synthesis, higher-order problem solving, and competitive edge nuances.

### 3. ⚡ Interactive Quiz Arena & Instant Visual Feedback
- **Tailwind CSS Modern UI:** Fully responsive across mobile, tablet, laptop, and ultra-wide desktop monitors.
- **Live Progress & Counter:** Animated real-time progress bar with `Question X of Y` indicator.
- **Instant Visual Feedback:**
  - Selecting the correct option turns the card **emerald green** with a checkmark badge and affirmative chime.
  - Selecting an incorrect option turns the card **ruby red** with a soft shake animation and buzzer, while simultaneously illuminating the true correct option in green.
- **Web Audio API Feedback:** Built-in procedural sound synthesis (correct chime, incorrect buzz, timer tick, celebration fanfare) with zero external audio assets required.
- **Keyboard Shortcuts:** Fast accessibility with keys `1`, `2`, `3`, `4` or `A`, `B`, `C`, `D` to answer questions, and `Enter` / `Space` to advance.

### 4. 💡 Comprehensive NCERT Textbook Explanations
- Every question includes an in-depth **NCERT Reference & Concept Breakdown** explaining *why* the answer is scientifically/mathematically valid, citing relevant textbook chapters and formulas.
- Option to **Bookmark / Save Questions** for review later.

### 5. 📊 Real-Time Score Tracker & Final Report Card
- **Real-Time Score & Streak Tracker:** Multiplier badge displaying streaks (`🔥 3 in a row!`).
- **Comprehensive Final Report Card:**
  - Performance tier badge (`A+ • NCERT Exemplar Scholar`, `A • Proficient Learner`, `B • Developing Competence`, `C • Revision Recommended`).
  - Total score, accuracy percentage, time taken, correct count, incorrect count, and skipped count.
  - Detailed **Chapter Mastery Breakdown** showing topic-by-topic retention percentages.
  - Personalized pedagogical NCERT remarks tailored to the student's performance tier.
- **Interactive Review Mode:** Filter and inspect all answered questions with verified NCERT solutions (All, Incorrect Only, Correct Only, or Bookmarked).
- **Print / PDF Export:** Clean print stylesheet to save or export the scorecard.

### 7. ⚡ Real-Time AI NCERT Question Generator (Gemini Powered)
- **Dynamic On-Demand Questions:** Students can toggle "Generate Fresh Questions with Gemini AI" on the dashboard to generate brand-new, customized questions in real time.
- **Curriculum Calibration:** Prompts are calibrated to act as Senior NCERT Paper Setters, outputting 4 options, chapter metadata, and deep pedagogical explanations.
- **Fail-Safe Fallback:** If offline or if quota limits are reached, the system automatically falls back to the curated offline NCERT question bank without interrupting the student.

---

## 🔒 API Key Security & GitHub Protection

To ensure the private API key is **never uploaded or exposed to GitHub**, the project implements industry-standard secret management:

1. **`.gitignore` Configuration:**
   The `.gitignore` file explicitly blocks private configuration files:
   ```gitignore
   .env
   .env.local
   js/config.local.js
   js/secrets.js
   ```

2. **File Separation Strategy:**
   * **Private Files (Ignored by Git, stored locally only):**
     * [`js/config.local.js`](file:///c:/Users/Piyush%20Kumar/OneDrive/Desktop/quiz%20genrator/js/config.local.js) — Contains your actual private API key.
     * [`.env`](file:///c:/Users/Piyush%20Kumar/OneDrive/Desktop/quiz%20genrator/.env) — Contains environment variable copies.
   * **Public Template Files (Safe to push to GitHub):**
     * [`js/config.example.js`](file:///c:/Users/Piyush%20Kumar/OneDrive/Desktop/quiz%20genrator/js/config.example.js) — Clean template with placeholders (`YOUR_API_KEY_HERE`).
     * [`.env.example`](file:///c:/Users/Piyush%20Kumar/OneDrive/Desktop/quiz%20genrator/.env.example) — Clean environment template with placeholders.

3. **Uploading to GitHub Safely:**
   When you run `git add .` and `git commit`, Git will automatically omit `.env` and `js/config.local.js`. Your private key remains completely safe on your local computer.

---

## 🚀 How to Run the Application

### Option 1: Direct Double Click (Windows)
Double-click the included file:
```
start_app.bat
```
This will open the web application in your default web browser (Edge, Chrome, Brave, Firefox, etc.).

### Option 2: Open `index.html` Directly
Simply right-click `index.html` and select **Open with > Google Chrome** or **Microsoft Edge**.

---

## 📂 Project Architecture

```
quiz genrator/
│
├── .gitignore              # Protects API keys and private files from Git
├── .env                    # Local environment secrets (IGNORED BY GIT)
├── .env.example            # Safe environment template for GitHub
├── index.html              # Main Single Page Application structure
├── start_app.bat           # Windows quick launcher script
├── README.md               # Complete documentation & curriculum reference
│
├── css/
│   └── styles.css          # Custom animations, KaTeX tuning, glassmorphism
│
└── js/
    ├── config.local.js     # Private local API key configuration (IGNORED BY GIT)
    ├── config.example.js   # Safe config template for GitHub
    ├── aiService.js        # Gemini API live question generation service
    ├── data/
    │   └── ncertData.js    # Comprehensive NCERT syllabus dataset & question bank
    ├── audio.js            # Procedural Web Audio API sound synthesizer
    ├── storage.js          # LocalStorage persistence for stats, bookmarks, & history
    ├── quizEngine.js       # Quiz session logic, timer, scoring, and report card generator
    └── app.js              # UI controller, event bindings, KaTeX rendering, shortcuts
```

---

## 💻 Tech Stack
- **AI Engine:** Google Gemini Generative API (`gemini-1.5-flash`)
- **Structure:** HTML5 Semantic Markup
- **Styling:** Tailwind CSS (Modern Utility Framework) + Custom CSS3 Animations
- **Math & Science Typography:** KaTeX (LaTeX-grade rendering for formulas & chemical equations)
- **Audio:** Native HTML5 Web Audio API (zero audio file dependencies)
- **Effects:** Canvas Confetti Particle System
- **Persistence:** Browser `localStorage` API

- **Audio:** Native HTML5 Web Audio API (zero audio file dependencies)
- **Effects:** Canvas Confetti Particle System
- **Persistence:** Browser `localStorage` API

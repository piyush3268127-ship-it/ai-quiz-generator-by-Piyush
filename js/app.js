/**
 * NCERT MasterQuiz - Main Application Controller
 * Handles Bilingual UI (Hindi & English), Custom Sub-Sections, Flashcards,
 * Deeper Knowledge, Last-Minute Notes, Weak Points Remedial Engine, and Gamification
 */

document.addEventListener("DOMContentLoaded", () => {
  const App = {
    // Current application state
    state: {
      lang: (window.quizStorage && window.quizStorage.getLanguage()) || "en",
      selectedClass: "10",
      selectedSubject: "maths_10",
      selectedSubSection: "all",
      selectedDifficulty: "medium",
      selectedChapter: "all",
      questionCount: 5,
      timerMode: 30,
      activeView: "dashboard", // 'dashboard' | 'quiz' | 'results' | 'review'
      lastQuizReport: null,
      reviewFilter: "all",
      useAI: localStorage.getItem("ncert_use_ai") === "true",
      currentFlashcardIndex: 0
    },

    // UI DOM Elements
    elements: {
      // Containers / Views
      dashboardView: document.getElementById("dashboard-view"),
      quizView: document.getElementById("quiz-view"),
      resultsView: document.getElementById("results-view"),
      reviewView: document.getElementById("review-view"),

      // Global Header stats, badges & buttons
      statTotalQuizzes: document.getElementById("stat-total-quizzes"),
      statAccuracy: document.getElementById("stat-accuracy"),
      statStreak: document.getElementById("stat-streak"),
      statXpBadge: document.getElementById("stat-xp-badge"),
      statXpText: document.getElementById("stat-xp-text"),
      statLevelText: document.getElementById("stat-level-text"),
      langToggleBtn: document.getElementById("lang-toggle-btn"),
      langBtnLabel: document.getElementById("lang-btn-label"),
      themeToggleBtn: document.getElementById("theme-toggle-btn"),
      soundToggleBtn: document.getElementById("sound-toggle-btn"),
      bookmarksModalBtn: document.getElementById("bookmarks-modal-btn"),
      historyModalBtn: document.getElementById("history-modal-btn"),
      formulaSheetBtn: document.getElementById("formula-sheet-btn"),
      flashcardsBtn: document.getElementById("flashcards-btn"),
      deeperKnowledgeBtn: document.getElementById("deeper-knowledge-btn"),
      lastMinuteBtn: document.getElementById("last-minute-btn"),
      aiSettingsBtn: document.getElementById("ai-settings-btn"),
      aiStatusDot: document.getElementById("ai-status-dot"),

      // Header Labels
      labelFlashcards: document.getElementById("label-flashcards"),
      labelDeeper: document.getElementById("label-deeper"),
      labelLastminute: document.getElementById("label-lastminute"),
      labelFormulas: document.getElementById("label-formulas"),
      labelBookmarks: document.getElementById("label-bookmarks"),
      labelHistory: document.getElementById("label-history"),
      labelAi: document.getElementById("label-ai"),

      // Dashboard controls
      classButtonsContainer: document.getElementById("class-buttons-container"),
      subjectButtonsContainer: document.getElementById("subject-buttons-container"),
      subDisciplineContainer: document.getElementById("sub-discipline-container"),
      subDisciplineLabel: document.getElementById("sub-discipline-label"),
      subDisciplineButtons: document.getElementById("sub-discipline-buttons"),
      chapterSelect: document.getElementById("chapter-select"),
      difficultyButtons: document.querySelectorAll("[data-difficulty]"),
      countButtons: document.querySelectorAll("[data-count]"),
      timerButtons: document.querySelectorAll("[data-timer]"),
      startQuizBtn: document.getElementById("start-quiz-btn"),
      startBtnText: document.getElementById("start-btn-text"),
      aiModeToggle: document.getElementById("ai-mode-toggle"),
      aiApiStatusBadge: document.getElementById("ai-api-status-badge"),

      // Quiz Arena Elements
      quizClassBadge: document.getElementById("quiz-class-badge"),
      quizSubjectBadge: document.getElementById("quiz-subject-badge"),
      quizDifficultyBadge: document.getElementById("quiz-difficulty-badge"),
      quizProgressText: document.getElementById("quiz-progress-text"),
      quizProgressBar: document.getElementById("quiz-progress-bar"),
      quizLiveScore: document.getElementById("quiz-live-score"),
      quizStreakBadge: document.getElementById("quiz-streak-badge"),
      quizTimerContainer: document.getElementById("quiz-timer-container"),
      quizTimerText: document.getElementById("quiz-timer-text"),
      questionChapterBadge: document.getElementById("question-chapter-badge"),
      questionText: document.getElementById("question-text"),
      optionsContainer: document.getElementById("options-container"),
      explanationCard: document.getElementById("explanation-card"),
      explanationChapterText: document.getElementById("explanation-chapter-text"),
      explanationContentText: document.getElementById("explanation-content-text"),
      bookmarkQuestionBtn: document.getElementById("bookmark-question-btn"),
      quizSkipBtn: document.getElementById("quiz-skip-btn"),
      quizNextBtn: document.getElementById("quiz-next-btn"),
      quitQuizBtn: document.getElementById("quit-quiz-btn"),

      // Results Elements
      resultsBadge: document.getElementById("results-badge"),
      resultsScoreText: document.getElementById("results-score-text"),
      resultsAccuracyText: document.getElementById("results-accuracy-text"),
      resultsCorrectText: document.getElementById("results-correct-text"),
      resultsIncorrectText: document.getElementById("results-incorrect-text"),
      resultsTimeText: document.getElementById("results-time-text"),
      resultsRemarksText: document.getElementById("results-remarks-text"),
      chapterMasteryContainer: document.getElementById("chapter-mastery-container"),
      weakRemedialSection: document.getElementById("weak-remedial-section"),
      weakRemedialTitle: document.getElementById("weak-remedial-title"),
      weakRemedialContainer: document.getElementById("weak-remedial-container"),
      restartQuizBtn: document.getElementById("restart-quiz-btn"),
      newQuizBtn: document.getElementById("new-quiz-btn"),
      reviewQuizBtn: document.getElementById("review-quiz-btn"),
      printReportBtn: document.getElementById("print-report-btn"),

      // Review View Elements
      reviewBackBtn: document.getElementById("review-back-btn"),
      reviewQuestionsContainer: document.getElementById("review-questions-container"),
      reviewFilterBtns: document.querySelectorAll("[data-review-filter]"),

      // Modals
      formulaModal: document.getElementById("formula-modal"),
      closeFormulaModalBtn: document.getElementById("close-formula-modal-btn"),
      formulaModalContent: document.getElementById("formula-modal-content"),
      bookmarksModal: document.getElementById("bookmarks-modal"),
      closeBookmarksModalBtn: document.getElementById("close-bookmarks-modal-btn"),
      bookmarksModalContent: document.getElementById("bookmarks-modal-content"),
      historyModal: document.getElementById("history-modal"),
      closeHistoryModalBtn: document.getElementById("close-history-modal-btn"),
      historyModalContent: document.getElementById("history-modal-content"),
      aiSettingsModal: document.getElementById("ai-settings-modal"),
      closeAiSettingsBtn: document.getElementById("close-ai-settings-btn"),
      apiKeyDisplayInput: document.getElementById("api-key-display-input"),
      toggleKeyVisibilityBtn: document.getElementById("toggle-key-visibility-btn"),
      customApiKeyInput: document.getElementById("custom-api-key-input"),
      saveCustomKeyBtn: document.getElementById("save-custom-key-btn"),

      // New Study Modals
      flashcardsModal: document.getElementById("flashcards-modal"),
      closeFlashcardsModalBtn: document.getElementById("close-flashcards-modal-btn"),
      flashcard3dBox: document.getElementById("flashcard-3d-box"),
      flashcardInner: document.getElementById("flashcard-inner"),
      fcFrontText: document.getElementById("fc-front-text"),
      fcBackText: document.getElementById("fc-back-text"),
      fcTag: document.getElementById("fc-tag"),
      fcCounter: document.getElementById("fc-counter"),
      fcPrevBtn: document.getElementById("fc-prev-btn"),
      fcNextBtn: document.getElementById("fc-next-btn"),
      fcFlipBtn: document.getElementById("fc-flip-btn"),

      deeperKnowledgeModal: document.getElementById("deeper-knowledge-modal"),
      closeDeeperModalBtn: document.getElementById("close-deeper-modal-btn"),
      deeperModalContent: document.getElementById("deeper-modal-content"),

      lastMinuteModal: document.getElementById("last-minute-modal"),
      closeLastMinuteModalBtn: document.getElementById("close-last-minute-modal-btn"),
      lastMinuteModalContent: document.getElementById("last-minute-modal-content")
    },

    // Translation helper
    t: function (key) {
      const lang = this.state.lang || "en";
      const dict = (window.NCERT_DATA && window.NCERT_DATA.translations && window.NCERT_DATA.translations[lang])
        || (window.NCERT_DATA && window.NCERT_DATA.translations && window.NCERT_DATA.translations.en)
        || {};
      return dict[key] || key;
    },

    init: function () {
      this.initTheme();
      this.initSound();
      this.updateHeaderStats();
      this.applyLanguage();
      this.renderClassSelector();
      this.renderSubjectSelector();
      this.renderSubDisciplineSelector();
      this.renderChapterSelector();
      this.bindEvents();
      this.updateAiStatusUi();
    },

    // ==========================================
    // LANGUAGE MANAGEMENT
    // ==========================================
    toggleLanguage: function () {
      this.state.lang = this.state.lang === "en" ? "hi" : "en";
      window.quizStorage.setLanguage(this.state.lang);
      window.soundFx.playClick();
      this.applyLanguage();
      this.renderClassSelector();
      this.renderSubjectSelector();
      this.renderSubDisciplineSelector();
      this.renderChapterSelector();

      // If in quiz, re-render current question with active language
      if (this.state.activeView === "quiz") {
        this.renderCurrentQuestion();
      } else if (this.state.activeView === "results" && this.state.lastQuizReport) {
        this.showResults(this.state.lastQuizReport);
      }
    },

    applyLanguage: function () {
      const isHi = this.state.lang === "hi";
      if (this.elements.langBtnLabel) {
        this.elements.langBtnLabel.textContent = isHi ? "English" : "हिंदी";
      }

      // Update button labels in header
      if (this.elements.labelFlashcards) this.elements.labelFlashcards.textContent = isHi ? "फ्लैशकार्ड्स" : "Flashcards";
      if (this.elements.labelDeeper) this.elements.labelDeeper.textContent = isHi ? "गहन ज्ञान" : "Deep Notes";
      if (this.elements.labelLastminute) this.elements.labelLastminute.textContent = isHi ? "परीक्षा नोट्स" : "Exam Notes";
      if (this.elements.labelFormulas) this.elements.labelFormulas.textContent = isHi ? "सूत्र" : "Formulas";
      if (this.elements.labelBookmarks) this.elements.labelBookmarks.textContent = isHi ? "सुरक्षित" : "Saved";
      if (this.elements.labelHistory) this.elements.labelHistory.textContent = isHi ? "इतिहास" : "History";

      if (this.elements.startBtnText) {
        this.elements.startBtnText.textContent = this.t("startQuizBtn");
      }
    },

    // ==========================================
    // THEME & SOUND MANAGEMENT
    // ==========================================
    initTheme: function () {
      const settings = window.quizStorage.getSettings();
      if (settings.theme === "dark" || (!settings.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        this.updateThemeIcon(true);
      } else {
        document.documentElement.classList.remove("dark");
        this.updateThemeIcon(false);
      }
    },

    toggleTheme: function () {
      const isDark = document.documentElement.classList.toggle("dark");
      window.quizStorage.updateSettings("theme", isDark ? "dark" : "light");
      this.updateThemeIcon(isDark);
      window.soundFx.playClick();
    },

    updateThemeIcon: function (isDark) {
      if (!this.elements.themeToggleBtn) return;
      this.elements.themeToggleBtn.innerHTML = isDark
        ? `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        : `<svg class="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    },

    initSound: function () {
      this.updateSoundIcon(window.soundFx.isMuted());
    },

    toggleSound: function () {
      const isMuted = window.soundFx.toggleMute();
      this.updateSoundIcon(isMuted);
      if (!isMuted) window.soundFx.playClick();
    },

    updateSoundIcon: function (isMuted) {
      if (!this.elements.soundToggleBtn) return;
      this.elements.soundToggleBtn.innerHTML = isMuted
        ? `<svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>`
        : `<svg class="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>`;
    },

    updateHeaderStats: function () {
      const stats = window.quizStorage.getStats();
      if (this.elements.statTotalQuizzes) this.elements.statTotalQuizzes.textContent = stats.totalQuizzes;
      if (this.elements.statStreak) this.elements.statStreak.textContent = `🔥 ${stats.currentStreak} ${this.t("streak")}`;

      const accuracy =
        stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;
      if (this.elements.statAccuracy) this.elements.statAccuracy.textContent = `${accuracy}% ${this.t("accuracy")}`;

      // Gamification XP and Level
      if (this.elements.statXpText) this.elements.statXpText.textContent = `${stats.xp || 0} XP`;
      if (this.elements.statLevelText) this.elements.statLevelText.textContent = `Lv ${stats.level || 1}`;
    },

    // ==========================================
    // DASHBOARD RENDERING & SELECTIONS
    // ==========================================
    renderClassSelector: function () {
      const container = this.elements.classButtonsContainer;
      if (!container) return;

      const isHi = this.state.lang === "hi";
      container.innerHTML = window.NCERT_DATA.classes
        .map((cls) => {
          const isSelected = cls.id === this.state.selectedClass;
          const name = isHi && cls.name_hi ? cls.name_hi : cls.name;
          const badge = isHi && cls.badge_hi ? cls.badge_hi : cls.badge;
          const desc = isHi && cls.description_hi ? cls.description_hi : cls.description;

          return `
          <button type="button" data-class-id="${cls.id}" class="class-card group relative p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
            isSelected
              ? "border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-4 ring-blue-500/10 shadow-md"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
          }">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${
                isSelected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              }">
                ${badge}
              </span>
              ${
                isSelected
                  ? `<span class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    </span>`
                  : ""
              }
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ${name}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              ${desc}
            </p>
          </button>
        `;
        })
        .join("");

      // Bind class button clicks
      container.querySelectorAll("[data-class-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const classId = btn.getAttribute("data-class-id");
          if (this.state.selectedClass !== classId) {
            this.state.selectedClass = classId;
            const currentClassObj = window.NCERT_DATA.classes.find((c) => c.id === classId);
            this.state.selectedSubject = currentClassObj.subjects[0];
            this.state.selectedSubSection = "all";
            this.state.selectedChapter = "all";
            window.soundFx.playClick();
            this.renderClassSelector();
            this.renderSubjectSelector();
            this.renderSubDisciplineSelector();
            this.renderChapterSelector();
          }
        });
      });
    },

    renderSubjectSelector: function () {
      const container = this.elements.subjectButtonsContainer;
      if (!container) return;

      const isHi = this.state.lang === "hi";
      const currentClassObj = window.NCERT_DATA.classes.find((c) => c.id === this.state.selectedClass);
      const availableSubjects = currentClassObj ? currentClassObj.subjects : [];

      container.innerHTML = availableSubjects
        .map((subjId) => {
          const subj = window.NCERT_DATA.subjects[subjId];
          if (!subj) return "";
          const isSelected = subj.id === this.state.selectedSubject;
          const name = isHi && subj.name_hi ? subj.name_hi : subj.name;
          const tagline = isHi && subj.tagline_hi ? subj.tagline_hi : subj.tagline;

          return `
          <button type="button" data-subject-id="${subj.id}" class="subject-card group p-3.5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
            isSelected
              ? `${subj.theme.border} ${subj.theme.bg} ring-4 ring-current/10 shadow-sm font-semibold`
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
          }">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg bg-gradient-to-br ${subj.theme.gradient} text-white shadow-sm">
                ${this.getSubjectIconSvg(subj.id)}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">
                    ${name}
                  </h4>
                  ${
                    isSelected
                      ? `<span class="h-2 w-2 rounded-full ${subj.theme.badge} ring-4 ring-emerald-500/20"></span>`
                      : ""
                  }
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  ${tagline}
                </p>
              </div>
            </div>
          </button>
        `;
        })
        .join("");

      // Bind clicks
      container.querySelectorAll("[data-subject-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const subjId = btn.getAttribute("data-subject-id");
          if (this.state.selectedSubject !== subjId) {
            this.state.selectedSubject = subjId;
            this.state.selectedSubSection = "all";
            this.state.selectedChapter = "all";
            window.soundFx.playClick();
            this.renderSubjectSelector();
            this.renderSubDisciplineSelector();
            this.renderChapterSelector();
          }
        });
      });
    },

    renderSubDisciplineSelector: function () {
      const container = this.elements.subDisciplineContainer;
      const buttonsDiv = this.elements.subDisciplineButtons;
      if (!container || !buttonsDiv) return;

      const currentSubj = window.NCERT_DATA.subjects[this.state.selectedSubject];

      if (currentSubj && currentSubj.hasSubSections && Array.isArray(currentSubj.subSections)) {
        container.classList.remove("hidden");
        const allLabel = this.t("allSubSections");
        const isAllSelected = this.state.selectedSubSection === "all";

        buttonsDiv.innerHTML = `
          <button type="button" data-sub-id="all" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isAllSelected
              ? "bg-indigo-600 text-white shadow-sm"
              : "border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50"
          }">
            ${allLabel}
          </button>
          ${currentSubj.subSections
            .map((sub) => {
              const isSelected = sub.id === this.state.selectedSubSection;
              return `
                <button type="button" data-sub-id="${sub.id}" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50"
                }">
                  ${sub.name}
                </button>
              `;
            })
            .join("")}
        `;

        buttonsDiv.querySelectorAll("[data-sub-id]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const subId = btn.getAttribute("data-sub-id");
            this.state.selectedSubSection = subId;
            this.state.selectedChapter = "all";
            window.soundFx.playClick();
            this.renderSubDisciplineSelector();
            this.renderChapterSelector();
          });
        });
      } else {
        container.classList.add("hidden");
        this.state.selectedSubSection = "all";
      }
    },

    renderChapterSelector: function () {
      const select = this.elements.chapterSelect;
      if (!select) return;

      const isHi = this.state.lang === "hi";
      const subj = window.NCERT_DATA.subjects[this.state.selectedSubject];
      let chapters = [];

      if (subj) {
        if (subj.hasSubSections && Array.isArray(subj.subSections)) {
          if (this.state.selectedSubSection && this.state.selectedSubSection !== "all") {
            const foundSub = subj.subSections.find((s) => s.id === this.state.selectedSubSection);
            if (foundSub) chapters = foundSub.chapters;
          } else {
            // Aggregate all chapters from all subsections
            subj.subSections.forEach((sub) => {
              chapters = chapters.concat(sub.chapters);
            });
          }
        } else if (Array.isArray(subj.chapters)) {
          chapters = subj.chapters;
        }
      }

      select.innerHTML = `
        <option value="all">${this.t("allChapters")}</option>
        ${chapters
          .map((ch) => {
            const chTitle = typeof ch === "object" ? (isHi && ch.hi ? ch.hi : ch.en) : ch;
            const chValue = typeof ch === "object" ? ch.en : ch;
            return `<option value="${chValue}">${chTitle}</option>`;
          })
          .join("")}
      `;
      select.value = "all";
      this.state.selectedChapter = "all";
    },

    getSubjectIconSvg: function (subjectId) {
      if (subjectId.includes("math")) {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`;
      } else if (subjectId.includes("physics")) {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
      } else if (subjectId.includes("chem")) {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`;
      } else if (subjectId.includes("bio")) {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
      } else if (subjectId.includes("hindi")) {
        return `<span class="font-bold text-sm">हि</span>`;
      } else if (subjectId.includes("eng")) {
        return `<span class="font-bold text-sm">EN</span>`;
      } else if (subjectId.includes("cs")) {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
      } else {
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`;
      }
    },

    // ==========================================
    // EVENT BINDINGS
    // ==========================================
    bindEvents: function () {
      // Language Switcher
      if (this.elements.langToggleBtn) {
        this.elements.langToggleBtn.addEventListener("click", () => this.toggleLanguage());
      }

      // Header toggles
      if (this.elements.themeToggleBtn) {
        this.elements.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
      }
      if (this.elements.soundToggleBtn) {
        this.elements.soundToggleBtn.addEventListener("click", () => this.toggleSound());
      }

      // Study Modals
      if (this.elements.formulaSheetBtn) {
        this.elements.formulaSheetBtn.addEventListener("click", () => this.openFormulaModal());
      }
      if (this.elements.closeFormulaModalBtn) {
        this.elements.closeFormulaModalBtn.addEventListener("click", () => this.closeModals());
      }

      if (this.elements.flashcardsBtn) {
        this.elements.flashcardsBtn.addEventListener("click", () => this.openFlashcardsModal());
      }
      if (this.elements.closeFlashcardsModalBtn) {
        this.elements.closeFlashcardsModalBtn.addEventListener("click", () => this.closeModals());
      }
      if (this.elements.fcFlipBtn) {
        this.elements.fcFlipBtn.addEventListener("click", () => this.flipFlashcard());
      }
      if (this.elements.flashcard3dBox) {
        this.elements.flashcard3dBox.addEventListener("click", () => this.flipFlashcard());
      }
      if (this.elements.fcPrevBtn) {
        this.elements.fcPrevBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.prevFlashcard();
        });
      }
      if (this.elements.fcNextBtn) {
        this.elements.fcNextBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.nextFlashcard();
        });
      }

      if (this.elements.deeperKnowledgeBtn) {
        this.elements.deeperKnowledgeBtn.addEventListener("click", () => this.openDeeperKnowledgeModal());
      }
      if (this.elements.closeDeeperModalBtn) {
        this.elements.closeDeeperModalBtn.addEventListener("click", () => this.closeModals());
      }

      if (this.elements.lastMinuteBtn) {
        this.elements.lastMinuteBtn.addEventListener("click", () => this.openLastMinuteModal());
      }
      if (this.elements.closeLastMinuteModalBtn) {
        this.elements.closeLastMinuteModalBtn.addEventListener("click", () => this.closeModals());
      }

      if (this.elements.bookmarksModalBtn) {
        this.elements.bookmarksModalBtn.addEventListener("click", () => this.openBookmarksModal());
      }
      if (this.elements.closeBookmarksModalBtn) {
        this.elements.closeBookmarksModalBtn.addEventListener("click", () => this.closeModals());
      }

      if (this.elements.historyModalBtn) {
        this.elements.historyModalBtn.addEventListener("click", () => this.openHistoryModal());
      }
      if (this.elements.closeHistoryModalBtn) {
        this.elements.closeHistoryModalBtn.addEventListener("click", () => this.closeModals());
      }

      // AI Settings
      if (this.elements.aiSettingsBtn) {
        this.elements.aiSettingsBtn.addEventListener("click", () => this.openAiSettingsModal());
      }
      if (this.elements.closeAiSettingsBtn) {
        this.elements.closeAiSettingsBtn.addEventListener("click", () => this.closeModals());
      }
      if (this.elements.aiModeToggle) {
        this.elements.aiModeToggle.checked = this.state.useAI;
        this.elements.aiModeToggle.addEventListener("change", (e) => {
          this.state.useAI = e.target.checked;
          localStorage.setItem("ncert_use_ai", this.state.useAI);
          window.soundFx.playClick();
          this.updateAiStatusUi();
        });
      }
      if (this.elements.toggleKeyVisibilityBtn) {
        this.elements.toggleKeyVisibilityBtn.addEventListener("click", () => {
          const input = this.elements.apiKeyDisplayInput;
          if (input) {
            if (input.type === "password") {
              input.type = "text";
              this.elements.toggleKeyVisibilityBtn.textContent = "Hide";
            } else {
              input.type = "password";
              this.elements.toggleKeyVisibilityBtn.textContent = "Show";
            }
          }
        });
      }
      if (this.elements.saveCustomKeyBtn) {
        this.elements.saveCustomKeyBtn.addEventListener("click", () => {
          const val = this.elements.customApiKeyInput ? this.elements.customApiKeyInput.value.trim() : "";
          if (val) {
            window.aiService.setCustomApiKey(val);
            if (this.elements.apiKeyDisplayInput) this.elements.apiKeyDisplayInput.value = val;
            if (this.elements.customApiKeyInput) this.elements.customApiKeyInput.value = "";
            this.updateAiStatusUi();
            alert("Custom API Key saved successfully!");
          } else {
            alert("Please enter a valid API key string.");
          }
        });
      }

      // Chapter change
      if (this.elements.chapterSelect) {
        this.elements.chapterSelect.addEventListener("change", (e) => {
          this.state.selectedChapter = e.target.value;
        });
      }

      // Difficulty buttons
      this.elements.difficultyButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const diff = btn.getAttribute("data-difficulty");
          this.state.selectedDifficulty = diff;
          window.soundFx.playClick();
          this.elements.difficultyButtons.forEach((b) => {
            const isTarget = b.getAttribute("data-difficulty") === diff;
            b.classList.toggle("ring-2", isTarget);
            b.classList.toggle("ring-blue-600", isTarget);
            b.classList.toggle("bg-blue-50", isTarget);
            b.classList.toggle("dark:bg-blue-900/30", isTarget);
          });
        });
      });

      // Question count buttons
      this.elements.countButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const count = parseInt(btn.getAttribute("data-count"), 10);
          this.state.questionCount = count;
          window.soundFx.playClick();
          this.elements.countButtons.forEach((b) => {
            const isTarget = parseInt(b.getAttribute("data-count"), 10) === count;
            b.classList.toggle("border-blue-600", isTarget);
            b.classList.toggle("bg-blue-600", isTarget);
            b.classList.toggle("text-white", isTarget);
            b.classList.toggle("bg-white", !isTarget);
            b.classList.toggle("dark:bg-slate-900", !isTarget);
          });
        });
      });

      // Timer buttons
      this.elements.timerButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const timer = parseInt(btn.getAttribute("data-timer"), 10);
          this.state.timerMode = timer;
          window.soundFx.playClick();
          this.elements.timerButtons.forEach((b) => {
            const isTarget = parseInt(b.getAttribute("data-timer"), 10) === timer;
            b.classList.toggle("border-blue-600", isTarget);
            b.classList.toggle("bg-blue-600", isTarget);
            b.classList.toggle("text-white", isTarget);
            b.classList.toggle("bg-white", !isTarget);
            b.classList.toggle("dark:bg-slate-900", !isTarget);
          });
        });
      });

      // Start Quiz CTA
      if (this.elements.startQuizBtn) {
        this.elements.startQuizBtn.addEventListener("click", () => this.handleStartQuiz());
      }

      // Quiz Action Buttons
      if (this.elements.quizSkipBtn) {
        this.elements.quizSkipBtn.addEventListener("click", () => this.handleSkipQuestion());
      }
      if (this.elements.quizNextBtn) {
        this.elements.quizNextBtn.addEventListener("click", () => this.handleNextQuestion());
      }
      if (this.elements.quitQuizBtn) {
        this.elements.quitQuizBtn.addEventListener("click", () => this.handleQuitQuiz());
      }
      if (this.elements.bookmarkQuestionBtn) {
        this.elements.bookmarkQuestionBtn.addEventListener("click", () => this.handleBookmarkCurrent());
      }

      // Results Actions
      if (this.elements.restartQuizBtn) {
        this.elements.restartQuizBtn.addEventListener("click", () => this.handleStartQuiz());
      }
      if (this.elements.newQuizBtn) {
        this.elements.newQuizBtn.addEventListener("click", () => this.switchView("dashboard"));
      }
      if (this.elements.reviewQuizBtn) {
        this.elements.reviewQuizBtn.addEventListener("click", () => this.openReviewView());
      }
      if (this.elements.printReportBtn) {
        this.elements.printReportBtn.addEventListener("click", () => window.print());
      }

      // Review Actions
      if (this.elements.reviewBackBtn) {
        this.elements.reviewBackBtn.addEventListener("click", () => this.switchView("results"));
      }
      this.elements.reviewFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const filter = btn.getAttribute("data-review-filter");
          this.state.reviewFilter = filter;
          window.soundFx.playClick();
          this.elements.reviewFilterBtns.forEach((b) => {
            const isTarget = b.getAttribute("data-review-filter") === filter;
            b.classList.toggle("bg-blue-600", isTarget);
            b.classList.toggle("text-white", isTarget);
            b.classList.toggle("bg-slate-100", !isTarget);
            b.classList.toggle("dark:bg-slate-800", !isTarget);
          });
          this.renderReviewList();
        });
      });

      // Keyboard navigation support
      window.addEventListener("keydown", (e) => this.handleKeyboard(e));
    },

    // Keyboard Shortcuts
    handleKeyboard: function (e) {
      if (this.state.activeView !== "quiz") return;

      const currentQ = window.quizEngine.getCurrentQuestion();
      if (!currentQ) return;

      const isAnswered = !this.elements.explanationCard.classList.contains("hidden");

      if (!isAnswered) {
        const key = e.key.toUpperCase();
        let selectedIdx = -1;
        if (key === "1" || key === "A") selectedIdx = 0;
        else if (key === "2" || key === "B") selectedIdx = 1;
        else if (key === "3" || key === "C") selectedIdx = 2;
        else if (key === "4" || key === "D") selectedIdx = 3;

        if (selectedIdx >= 0 && selectedIdx < currentQ.options.length) {
          e.preventDefault();
          this.handleOptionSelected(selectedIdx);
        }
      } else {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.handleNextQuestion();
        }
      }
    },

    // ==========================================
    // QUIZ LIFECYCLE
    // ==========================================
    handleStartQuiz: async function () {
      const startBtn = this.elements.startQuizBtn;
      const originalText = this.elements.startBtnText ? this.elements.startBtnText.textContent : this.t("startQuizBtn");

      try {
        if (this.state.useAI && window.aiService && window.aiService.isAvailable()) {
          if (this.elements.startBtnText) {
            this.elements.startBtnText.textContent = this.t("generatingAI");
          }
          if (startBtn) startBtn.disabled = true;
        }

        await window.quizEngine.startQuiz(
          {
            classId: this.state.selectedClass,
            subjectId: this.state.selectedSubject,
            subSectionId: this.state.selectedSubSection,
            difficulty: this.state.selectedDifficulty,
            chapter: this.state.selectedChapter,
            questionCount: this.state.questionCount,
            timerMode: this.state.timerMode,
            useAI: this.state.useAI
          },
          {
            onTick: (remaining) => this.updateTimerDisplay(remaining),
            onTimeUp: () => this.handleTimeUp(),
            onAIFallback: (err) => {
              console.warn("AI generation note:", err);
            }
          }
        );

        window.soundFx.playClick();
        this.switchView("quiz");
        this.renderCurrentQuestion();
      } catch (err) {
        alert(err.message || "Could not start quiz. Please try different options.");
      } finally {
        if (this.elements.startBtnText) {
          this.elements.startBtnText.textContent = originalText;
        }
        if (startBtn) startBtn.disabled = false;
      }
    },

    renderCurrentQuestion: function () {
      const q = window.quizEngine.getCurrentQuestion();
      if (!q) return;

      const isHi = this.state.lang === "hi";
      const classObj = window.NCERT_DATA.classes.find((c) => c.id === this.state.selectedClass);
      const subjObj = window.NCERT_DATA.subjects[this.state.selectedSubject];

      // Update quiz header badges
      if (this.elements.quizClassBadge) {
        this.elements.quizClassBadge.textContent = classObj ? (isHi && classObj.name_hi ? classObj.name_hi : classObj.name) : "NCERT";
      }
      if (this.elements.quizSubjectBadge) {
        this.elements.quizSubjectBadge.textContent = subjObj ? (isHi && subjObj.name_hi ? subjObj.name_hi : subjObj.name) : "Subject";
      }
      if (this.elements.quizDifficultyBadge) {
        this.elements.quizDifficultyBadge.textContent = q.difficulty.toUpperCase();
        this.elements.quizDifficultyBadge.className = `text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
          q.difficulty === "easy"
            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
            : q.difficulty === "medium"
            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
            : "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300"
        }`;
      }

      // Progress bar and counter
      const currentNum = window.quizEngine.currentIndex + 1;
      const totalQ = window.quizEngine.questions.length;
      if (this.elements.quizProgressText) {
        this.elements.quizProgressText.textContent = `${this.t("questionOf")} ${currentNum} ${this.t("of")} ${totalQ}`;
      }
      if (this.elements.quizProgressBar) {
        const pct = Math.round(((currentNum - 1) / totalQ) * 100);
        this.elements.quizProgressBar.style.width = `${pct}%`;
      }

      // Real-time score & streak
      if (this.elements.quizLiveScore) {
        this.elements.quizLiveScore.textContent = `${this.t("score")}: ${window.quizEngine.score}`;
      }
      if (this.elements.quizStreakBadge) {
        if (window.quizEngine.currentStreak > 1) {
          this.elements.quizStreakBadge.textContent = `🔥 ${window.quizEngine.currentStreak} ${this.t("streak")}!`;
          this.elements.quizStreakBadge.classList.remove("hidden");
        } else {
          this.elements.quizStreakBadge.classList.add("hidden");
        }
      }

      // Question chapter badge and statement (Bilingual)
      const qText = isHi && q.question_hi ? q.question_hi : q.question;
      if (this.elements.questionChapterBadge) {
        this.elements.questionChapterBadge.textContent = `NCERT Chapter: ${q.chapter}`;
      }
      if (this.elements.questionText) {
        this.elements.questionText.innerHTML = this.renderMathText(qText);
      }

      // Hide explanation card & reset buttons
      this.elements.explanationCard.classList.add("hidden");
      this.elements.quizNextBtn.classList.add("hidden");
      this.elements.quizSkipBtn.classList.remove("hidden");

      // Render Options (Bilingual)
      this.renderOptions(q);

      // Update bookmark button state
      this.updateBookmarkButtonState(q.id);
    },

    renderOptions: function (question) {
      const container = this.elements.optionsContainer;
      if (!container) return;

      const isHi = this.state.lang === "hi";
      const optionsArray = isHi && Array.isArray(question.options_hi) ? question.options_hi : question.options;
      const letters = ["A", "B", "C", "D"];

      container.innerHTML = optionsArray
        .map((opt, idx) => {
          return `
          <button type="button" data-option-index="${idx}" class="option-btn w-full text-left p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all flex items-start space-x-3 group cursor-pointer">
            <span class="flex-shrink-0 w-8 h-8 rounded-xl font-bold flex items-center justify-center text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              ${letters[idx]}
            </span>
            <div class="flex-1 pt-1 text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed option-text font-medium">
              ${this.renderMathText(opt)}
            </div>
            <span class="option-feedback-icon hidden flex-shrink-0 w-7 h-7 rounded-full items-center justify-center"></span>
          </button>
        `;
        })
        .join("");

      // Bind option clicks
      container.querySelectorAll("[data-option-index]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-option-index"), 10);
          this.handleOptionSelected(idx);
        });
      });
    },

    handleOptionSelected: function (selectedIndex) {
      const evalResult = window.quizEngine.submitAnswer(selectedIndex);
      if (!evalResult) return;

      const { isCorrect, correctIndex } = evalResult;
      const currentQ = window.quizEngine.getCurrentQuestion();
      const optionButtons = this.elements.optionsContainer.querySelectorAll("[data-option-index]");

      // Disable all option buttons
      optionButtons.forEach((btn) => (btn.disabled = true));

      // Style selected button and correct button
      optionButtons.forEach((btn) => {
        const btnIdx = parseInt(btn.getAttribute("data-option-index"), 10);
        const iconSpan = btn.querySelector(".option-feedback-icon");

        if (btnIdx === selectedIndex) {
          if (isCorrect) {
            btn.className =
              "option-btn w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100 ring-4 ring-emerald-500/20 shadow-md animate-correct-pop flex items-start space-x-3";
            iconSpan.className = "option-feedback-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500 text-white";
            iconSpan.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
          } else {
            btn.className =
              "option-btn w-full text-left p-4 rounded-2xl border-2 border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-100 ring-4 ring-rose-500/20 shadow-md animate-soft-shake flex items-start space-x-3";
            iconSpan.className = "option-feedback-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-rose-500 text-white";
            iconSpan.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
          }
        } else if (btnIdx === correctIndex) {
          // Highlight correct answer if user got it wrong
          btn.className =
            "option-btn w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/40 flex items-start space-x-3";
          iconSpan.className = "option-feedback-icon flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500 text-white";
          iconSpan.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
        } else {
          btn.classList.add("opacity-50");
        }
      });

      // Play sound
      if (isCorrect) {
        window.soundFx.playCorrect();
      } else {
        window.soundFx.playWrong();
      }

      // Show NCERT Explanation
      const isHi = this.state.lang === "hi";
      const expl = isHi && currentQ.explanation_hi ? currentQ.explanation_hi : currentQ.explanation;
      this.showExplanation(expl);
    },

    handleTimeUp: function () {
      const q = window.quizEngine.getCurrentQuestion();
      if (!q) return;

      window.soundFx.playWrong();
      window.quizEngine.skipQuestion();

      const optionButtons = this.elements.optionsContainer.querySelectorAll("[data-option-index]");
      optionButtons.forEach((btn) => {
        btn.disabled = true;
        const btnIdx = parseInt(btn.getAttribute("data-option-index"), 10);
        if (btnIdx === q.correct) {
          btn.className =
            "option-btn w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/40 flex items-start space-x-3";
        } else {
          btn.classList.add("opacity-50");
        }
      });

      const isHi = this.state.lang === "hi";
      const expl = isHi && q.explanation_hi ? q.explanation_hi : q.explanation;
      this.showExplanation("⏱️ " + (isHi ? "समय समाप्त! " : "Time Expired! ") + expl);
    },

    handleSkipQuestion: function () {
      const q = window.quizEngine.getCurrentQuestion();
      if (!q) return;

      window.soundFx.playClick();
      window.quizEngine.skipQuestion();
      this.handleNextQuestion();
    },

    showExplanation: function (explanationText) {
      const q = window.quizEngine.getCurrentQuestion();
      if (this.elements.explanationChapterText) {
        this.elements.explanationChapterText.textContent = q ? q.chapter : "NCERT Reference";
      }
      if (this.elements.explanationContentText) {
        this.elements.explanationContentText.innerHTML = this.renderMathText(explanationText);
      }

      this.elements.explanationCard.classList.remove("hidden");
      this.elements.explanationCard.classList.add("animate-slide-up");

      this.elements.quizSkipBtn.classList.add("hidden");
      this.elements.quizNextBtn.classList.remove("hidden");

      // Update next button label if last question
      const isLast = window.quizEngine.currentIndex === window.quizEngine.questions.length - 1;
      this.elements.quizNextBtn.innerHTML = isLast
        ? `<span>${this.t("seeResultsBtn")}</span><svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        : `<span>${this.t("nextBtn")}</span><svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;
    },

    handleNextQuestion: function () {
      window.soundFx.playClick();
      const step = window.quizEngine.nextQuestion();
      if (step.hasNext) {
        this.renderCurrentQuestion();
      } else {
        this.showResults(step.report);
      }
    },

    handleQuitQuiz: function () {
      if (confirm("Are you sure you want to exit? Your current quiz progress will be discarded.")) {
        window.quizEngine.stopTimer();
        window.soundFx.playClick();
        this.switchView("dashboard");
      }
    },

    updateTimerDisplay: function (seconds) {
      if (!this.elements.quizTimerContainer || !this.elements.quizTimerText) return;

      if (this.state.timerMode === 0) {
        this.elements.quizTimerContainer.classList.add("hidden");
        return;
      }

      this.elements.quizTimerContainer.classList.remove("hidden");
      this.elements.quizTimerText.textContent = `${seconds}s`;

      if (seconds <= 5 && seconds > 0) {
        this.elements.quizTimerContainer.classList.add("animate-timer-warning", "text-rose-500");
        window.soundFx.playTick();
      } else {
        this.elements.quizTimerContainer.classList.remove("animate-timer-warning", "text-rose-500");
      }
    },

    handleBookmarkCurrent: function () {
      const q = window.quizEngine.getCurrentQuestion();
      if (!q) return;

      window.quizStorage.toggleBookmark(q);
      window.soundFx.playClick();
      this.updateBookmarkButtonState(q.id);
    },

    updateBookmarkButtonState: function (questionId) {
      if (!this.elements.bookmarkQuestionBtn) return;
      const isSaved = window.quizStorage.isBookmarked(questionId);
      this.elements.bookmarkQuestionBtn.innerHTML = isSaved
        ? `<svg class="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg><span class="text-xs font-semibold text-amber-600 dark:text-amber-400">${this.t("savedQuestion")}</span>`
        : `<svg class="w-5 h-5 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg><span class="text-xs font-medium text-slate-500 dark:text-slate-400">${this.t("saveQuestion")}</span>`;
    },

    // ==========================================
    // RESULTS & REPORT CARD
    // ==========================================
    showResults: function (report) {
      this.state.lastQuizReport = report;
      this.switchView("results");
      this.updateHeaderStats();

      // Trigger Confetti & Fanfare
      if (report.percentage >= 50) {
        window.soundFx.playFanfare();
        this.triggerConfetti();
      } else {
        window.soundFx.playClick();
      }

      // Populate Report Card
      if (this.elements.resultsBadge) {
        this.elements.resultsBadge.textContent = report.grade;
        this.elements.resultsBadge.className = `inline-flex items-center px-4 py-1.5 rounded-full text-sm font-extrabold border shadow-sm ${report.badgeColor}`;
      }
      if (this.elements.resultsScoreText) {
        this.elements.resultsScoreText.textContent = `${report.score} / ${report.maxPossibleScore}`;
      }
      if (this.elements.resultsAccuracyText) {
        this.elements.resultsAccuracyText.textContent = `${report.percentage}%`;
      }
      if (this.elements.resultsCorrectText) {
        this.elements.resultsCorrectText.textContent = `${report.correct} / ${report.total}`;
      }
      if (this.elements.resultsIncorrectText) {
        this.elements.resultsIncorrectText.textContent = `${report.incorrect + report.skipped} / ${report.total}`;
      }
      if (this.elements.resultsTimeText) {
        this.elements.resultsTimeText.textContent = report.timeSpentFormatted;
      }
      if (this.elements.resultsRemarksText) {
        this.elements.resultsRemarksText.textContent = report.remarks;
      }

      // Render Chapter Mastery Breakdown
      this.renderChapterMastery(report.chapterBreakdown);

      // Render Weak Areas & Remedial Notes
      this.renderWeakRemedialNotes(report.weakRemedialNotes);
    },

    renderChapterMastery: function (breakdown) {
      const container = this.elements.chapterMasteryContainer;
      if (!container) return;

      const chapters = Object.keys(breakdown);
      if (chapters.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 italic">No specific chapters recorded.</p>`;
        return;
      }

      container.innerHTML = chapters
        .map((ch) => {
          const item = breakdown[ch];
          const pct = Math.round((item.correct / item.total) * 100);
          return `
          <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div class="flex justify-between items-center mb-1 text-xs">
              <span class="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[70%]">${ch}</span>
              <span class="font-bold ${pct >= 70 ? "text-emerald-500" : pct >= 40 ? "text-amber-500" : "text-rose-500"}">${pct}% (${item.correct}/${item.total})</span>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500 ${pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-rose-500"}" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
        })
        .join("");
    },

    renderWeakRemedialNotes: function (weakNotes) {
      const section = this.elements.weakRemedialSection;
      const container = this.elements.weakRemedialContainer;
      if (!section || !container) return;

      if (!weakNotes || weakNotes.length === 0) {
        section.classList.add("hidden");
        return;
      }

      section.classList.remove("hidden");
      container.innerHTML = weakNotes
        .map((item) => `
          <div class="p-4 rounded-2xl border border-rose-500/20 bg-rose-50/50 dark:bg-rose-950/20 space-y-1.5">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-bold text-rose-800 dark:text-rose-300">
                ⚠️ ${item.chapter}
              </h5>
              <span class="text-[11px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200 font-bold">
                ${item.missedCount} Missed
              </span>
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              ${this.renderMathText(item.tip)}
            </p>
          </div>
        `)
        .join("");
    },

    // ==========================================
    // REVIEW VIEW
    // ==========================================
    openReviewView: function () {
      if (!this.state.lastQuizReport) return;
      window.soundFx.playClick();
      this.state.reviewFilter = "all";
      this.switchView("review");
      this.renderReviewList();
    },

    renderReviewList: function () {
      const container = this.elements.reviewQuestionsContainer;
      if (!container || !this.state.lastQuizReport) return;

      const isHi = this.state.lang === "hi";
      let history = this.state.lastQuizReport.answersHistory;

      if (this.state.reviewFilter === "incorrect") {
        history = history.filter((h) => !h.isCorrect);
      } else if (this.state.reviewFilter === "correct") {
        history = history.filter((h) => h.isCorrect);
      } else if (this.state.reviewFilter === "bookmarked") {
        history = history.filter((h) => window.quizStorage.isBookmarked(h.question.id));
      }

      if (history.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 text-slate-400">
            <p class="text-base font-semibold">No questions match the selected filter.</p>
          </div>
        `;
        return;
      }

      const letters = ["A", "B", "C", "D"];
      container.innerHTML = history
        .map((h, idx) => {
          const q = h.question;
          const userChose = h.selectedIndex !== null ? letters[h.selectedIndex] : "Skipped";
          const correctLetter = letters[q.correct];
          const qText = isHi && q.question_hi ? q.question_hi : q.question;
          const optionsList = isHi && Array.isArray(q.options_hi) ? q.options_hi : q.options;
          const explText = isHi && q.explanation_hi ? q.explanation_hi : q.explanation;

          return `
          <div class="p-5 rounded-2xl border-2 ${
            h.isCorrect
              ? "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20"
              : "border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20"
          } space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full ${
                h.isCorrect
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300"
              }">
                ${h.isCorrect ? this.t("answerCorrectBadge") : h.isSkipped ? this.t("answerSkippedBadge") : this.t("answerIncorrectBadge")}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Chapter: ${q.chapter}</span>
            </div>

            <h4 class="text-base font-bold text-slate-900 dark:text-white leading-relaxed">
              Q${idx + 1}. ${this.renderMathText(qText)}
            </h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              ${optionsList
                .map((opt, optIdx) => {
                  const isUserPick = optIdx === h.selectedIndex;
                  const isRight = optIdx === q.correct;
                  let optStyle = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300";
                  if (isRight) {
                    optStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold";
                  } else if (isUserPick && !isRight) {
                    optStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200";
                  }
                  return `
                    <div class="p-3 rounded-xl border text-xs leading-relaxed flex items-center space-x-2 ${optStyle}">
                      <span class="font-bold">${letters[optIdx]}.</span>
                      <span class="flex-1">${this.renderMathText(opt)}</span>
                      ${isRight ? `<span class="text-emerald-600 font-bold">${this.t("correctAnswer")}</span>` : ""}
                      ${isUserPick && !isRight ? `<span class="text-rose-600 font-bold">${this.t("yourPick")}</span>` : ""}
                    </div>
                  `;
                })
                .join("")}
            </div>

            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs leading-relaxed space-y-1">
              <span class="font-bold text-blue-600 dark:text-blue-400 block">💡 ${this.t("ncertExplanation")}:</span>
              <p class="text-slate-700 dark:text-slate-300">${this.renderMathText(explText)}</p>
            </div>
          </div>
        `;
        })
        .join("");
    },

    // ==========================================
    // 3D INTERACTIVE FLASHCARDS
    // ==========================================
    openFlashcardsModal: function () {
      const cls = this.state.selectedClass;
      let pool = (window.NCERT_DATA && window.NCERT_DATA.flashcards) || [];
      const classCards = pool.filter((c) => c.classId === cls);
      this.flashcardsList = classCards.length > 0 ? classCards : pool;
      this.state.currentFlashcardIndex = 0;

      this.renderFlashcard();
      if (this.elements.flashcardsModal) {
        this.elements.flashcardsModal.classList.remove("hidden");
        this.elements.flashcardsModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    renderFlashcard: function () {
      if (!this.flashcardsList || this.flashcardsList.length === 0) return;
      const card = this.flashcardsList[this.state.currentFlashcardIndex];
      const isHi = this.state.lang === "hi";

      // Reset flip to front
      if (this.elements.flashcardInner) {
        this.elements.flashcardInner.classList.remove("flashcard-flipped");
      }

      const front = isHi && card.front_hi ? card.front_hi : card.front;
      const back = isHi && card.back_hi ? card.back_hi : card.back;

      if (this.elements.fcFrontText) this.elements.fcFrontText.innerHTML = this.renderMathText(front);
      if (this.elements.fcBackText) this.elements.fcBackText.innerHTML = this.renderMathText(back);
      if (this.elements.fcTag) this.elements.fcTag.textContent = card.tag || card.chapter;
      if (this.elements.fcCounter) {
        this.elements.fcCounter.textContent = `${this.state.currentFlashcardIndex + 1} / ${this.flashcardsList.length}`;
      }
    },

    flipFlashcard: function () {
      if (this.elements.flashcardInner) {
        this.elements.flashcardInner.classList.toggle("flashcard-flipped");
        window.soundFx.playFlip();
      }
    },

    nextFlashcard: function () {
      if (!this.flashcardsList) return;
      this.state.currentFlashcardIndex = (this.state.currentFlashcardIndex + 1) % this.flashcardsList.length;
      window.soundFx.playClick();
      this.renderFlashcard();
    },

    prevFlashcard: function () {
      if (!this.flashcardsList) return;
      this.state.currentFlashcardIndex =
        (this.state.currentFlashcardIndex - 1 + this.flashcardsList.length) % this.flashcardsList.length;
      window.soundFx.playClick();
      this.renderFlashcard();
    },

    // ==========================================
    // DEEPER KNOWLEDGE (गहन ज्ञान) MODAL
    // ==========================================
    openDeeperKnowledgeModal: function () {
      const cls = this.state.selectedClass;
      const isHi = this.state.lang === "hi";
      const notes = (window.NCERT_DATA && window.NCERT_DATA.deeperKnowledge && window.NCERT_DATA.deeperKnowledge[cls]) || [];

      const container = this.elements.deeperModalContent;
      if (!container) return;

      if (notes.length === 0) {
        container.innerHTML = `<p class="text-sm text-slate-400 py-8 text-center">Deeper knowledge notes for this class are being prepared.</p>`;
      } else {
        container.innerHTML = notes
          .map((item, idx) => {
            const title = isHi && item.title_hi ? item.title_hi : item.title;
            const concept = isHi && item.concept_hi ? item.concept_hi : item.concept;

            return `
            <div class="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-50/40 dark:bg-slate-900/80 shadow-sm space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 font-bold uppercase">
                  ${item.subject}
                </span>
                <span class="text-xs font-mono text-slate-400">Deep Dive #${idx + 1}</span>
              </div>
              <h4 class="text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                ${title}
              </h4>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                ${this.renderMathText(concept)}
              </p>
            </div>
          `;
          })
          .join("");
      }

      if (this.elements.deeperKnowledgeModal) {
        this.elements.deeperKnowledgeModal.classList.remove("hidden");
        this.elements.deeperKnowledgeModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    // ==========================================
    // LAST-MINUTE RAPID EXAM REVISION MODAL
    // ==========================================
    openLastMinuteModal: function () {
      const cls = this.state.selectedClass;
      const isHi = this.state.lang === "hi";
      const sections = (window.NCERT_DATA && window.NCERT_DATA.lastMinuteNotes && window.NCERT_DATA.lastMinuteNotes[cls]) || [];

      const container = this.elements.lastMinuteModalContent;
      if (!container) return;

      if (sections.length === 0) {
        container.innerHTML = `<p class="text-sm text-slate-400 py-8 text-center">Last-minute exam notes are being prepared.</p>`;
      } else {
        container.innerHTML = sections
          .map((sec) => {
            const title = isHi && sec.subject_hi ? sec.subject_hi : sec.subject;
            return `
            <div class="p-5 rounded-2xl border border-rose-500/20 bg-rose-50/30 dark:bg-slate-900/80 space-y-3">
              <h4 class="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center space-x-1.5">
                <span>⚡</span><span>${title}</span>
              </h4>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                ${sec.bulletPoints
                  .map((bp) => `<li class="flex items-start space-x-2"><span class="text-rose-500 font-bold">•</span><span>${this.renderMathText(bp)}</span></li>`)
                  .join("")}
              </ul>
            </div>
          `;
          })
          .join("");
      }

      if (this.elements.lastMinuteModal) {
        this.elements.lastMinuteModal.classList.remove("hidden");
        this.elements.lastMinuteModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    // ==========================================
    // OTHER MODALS
    // ==========================================
    openFormulaModal: function () {
      const cls = this.state.selectedClass;
      const subj = this.state.selectedSubject;
      const notesObj = window.NCERT_DATA && window.NCERT_DATA.revisionNotes && window.NCERT_DATA.revisionNotes[cls];
      const formulas = notesObj ? notesObj[subj] || [] : [];

      const modalContent = this.elements.formulaModalContent;
      if (!modalContent) return;

      if (formulas.length === 0) {
        modalContent.innerHTML = `
          <div class="text-center py-8 text-slate-400">
            <p class="text-base font-medium">Quick formula revision sheet for this subject is available in the Last-Minute Notes tab.</p>
          </div>
        `;
      } else {
        modalContent.innerHTML = formulas
          .map(
            (item) => `
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white">${item.title}</h4>
                <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-mono">Formula</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-sm text-blue-700 dark:text-blue-300 overflow-x-auto border border-blue-500/10">
                ${this.renderMathText(item.formula)}
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${item.notes}</p>
            </div>
          `
          )
          .join("");
      }

      if (this.elements.formulaModal) {
        this.elements.formulaModal.classList.remove("hidden");
        this.elements.formulaModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    openBookmarksModal: function () {
      const bookmarks = window.quizStorage.getBookmarks();
      const container = this.elements.bookmarksModalContent;
      if (!container) return;

      if (bookmarks.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 text-slate-400 space-y-2">
            <svg class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            <p class="text-base font-semibold text-slate-600 dark:text-slate-300">No saved bookmarks yet</p>
            <p class="text-xs text-slate-400">Click the bookmark icon during a quiz to save questions for revision.</p>
          </div>
        `;
      } else {
        container.innerHTML = bookmarks
          .map(
            (b, idx) => `
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-bold uppercase">
                  Class ${b.classId} • ${b.subjectId}
                </span>
                <span class="text-slate-400 font-medium">${b.chapter}</span>
              </div>
              <h5 class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                ${idx + 1}. ${this.renderMathText(b.question)}
              </h5>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-800">
                <span class="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Answer: ${b.options[b.correct]}</span>
                ${this.renderMathText(b.explanation)}
              </div>
            </div>
          `
          )
          .join("");
      }

      if (this.elements.bookmarksModal) {
        this.elements.bookmarksModal.classList.remove("hidden");
        this.elements.bookmarksModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    openHistoryModal: function () {
      const history = window.quizStorage.getHistory();
      const container = this.elements.historyModalContent;
      if (!container) return;

      if (history.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 text-slate-400">
            <p class="text-base font-semibold text-slate-600 dark:text-slate-300">No quizzes completed yet</p>
            <p class="text-xs text-slate-400 mt-1">Start a quiz to track your progress and accuracy history.</p>
          </div>
        `;
      } else {
        container.innerHTML = history
          .map(
            (item) => `
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-center justify-between">
              <div>
                <div class="flex items-center space-x-2">
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">Class ${item.classId} • ${item.subjectId.toUpperCase()}</h5>
                  <span class="text-xs px-2 py-0.5 rounded-full font-bold uppercase ${
                    item.percentage >= 70
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                  }">
                    ${item.percentage}%
                  </span>
                </div>
                <p class="text-xs text-slate-400 mt-1">${item.date} • Time: ${item.timeSpent}</p>
              </div>
              <div class="text-right">
                <span class="text-base font-extrabold text-blue-600 dark:text-blue-400">${item.score} pts</span>
                <span class="block text-xs text-slate-400 font-medium">${item.difficulty}</span>
              </div>
            </div>
          `
          )
          .join("");
      }

      if (this.elements.historyModal) {
        this.elements.historyModal.classList.remove("hidden");
        this.elements.historyModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    openAiSettingsModal: function () {
      if (this.elements.apiKeyDisplayInput && window.aiService) {
        const key = window.aiService.getApiKey();
        this.elements.apiKeyDisplayInput.value = key || "";
      }
      if (this.elements.aiSettingsModal) {
        this.elements.aiSettingsModal.classList.remove("hidden");
        this.elements.aiSettingsModal.classList.add("flex");
      }
      window.soundFx.playClick();
    },

    updateAiStatusUi: function () {
      const isKeyAvail = window.aiService && window.aiService.isAvailable();
      if (this.elements.aiStatusDot) {
        this.elements.aiStatusDot.className = `w-2 h-2 rounded-full ${
          isKeyAvail ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
        }`;
      }
      if (this.elements.aiApiStatusBadge) {
        this.elements.aiApiStatusBadge.innerHTML = isKeyAvail
          ? `<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span>${this.t("aiKeyConnected")}</span>`
          : `<span class="w-2 h-2 rounded-full bg-amber-500"></span><span class="text-amber-600 dark:text-amber-400">${this.t("aiKeyMissing")}</span>`;
      }
    },

    closeModals: function () {
      if (this.elements.formulaModal) this.elements.formulaModal.classList.add("hidden");
      if (this.elements.bookmarksModal) this.elements.bookmarksModal.classList.add("hidden");
      if (this.elements.historyModal) this.elements.historyModal.classList.add("hidden");
      if (this.elements.aiSettingsModal) this.elements.aiSettingsModal.classList.add("hidden");
      if (this.elements.flashcardsModal) this.elements.flashcardsModal.classList.add("hidden");
      if (this.elements.deeperKnowledgeModal) this.elements.deeperKnowledgeModal.classList.add("hidden");
      if (this.elements.lastMinuteModal) this.elements.lastMinuteModal.classList.add("hidden");
      window.soundFx.playClick();
    },

    // ==========================================
    // VIEW SWITCHER
    // ==========================================
    switchView: function (viewName) {
      this.state.activeView = viewName;
      this.elements.dashboardView.classList.toggle("hidden", viewName !== "dashboard");
      this.elements.quizView.classList.toggle("hidden", viewName !== "quiz");
      this.elements.resultsView.classList.toggle("hidden", viewName !== "results");
      this.elements.reviewView.classList.toggle("hidden", viewName !== "review");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // ==========================================
    // UTILITIES & KATEX FORMATTING
    // ==========================================
    renderMathText: function (text) {
      if (!text) return "";
      return text.replace(/\n/g, "<br/>");
    },

    triggerConfetti: function () {
      if (typeof window.confetti === "function") {
        window.confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      }
    }
  };

  // Launch App
  window.app = App;
  App.init();
});

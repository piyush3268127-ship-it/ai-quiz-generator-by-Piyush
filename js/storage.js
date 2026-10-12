/**
 * NCERT MasterQuiz - Storage & State Persistence Manager
 * Manages stats, streak, history, bookmarks, language, XP gamification, and weak topics
 */

class StorageManager {
  constructor() {
    this.STORAGE_KEYS = {
      STATS: "ncert_quiz_user_stats",
      HISTORY: "ncert_quiz_history",
      BOOKMARKS: "ncert_quiz_bookmarks",
      SETTINGS: "ncert_quiz_settings",
      WEAK_TOPICS: "ncert_quiz_weak_topics"
    };

    this.initDefaults();
  }

  initDefaults() {
    if (!localStorage.getItem(this.STORAGE_KEYS.STATS)) {
      const defaultStats = {
        totalQuizzes: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        bestStreak: 0,
        currentStreak: 0,
        xp: 0,
        level: 1
      };
      this.saveStats(defaultStats);
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.HISTORY)) {
      localStorage.setItem(this.STORAGE_KEYS.HISTORY, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.BOOKMARKS)) {
      localStorage.setItem(this.STORAGE_KEYS.BOOKMARKS, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.WEAK_TOPICS)) {
      localStorage.setItem(this.STORAGE_KEYS.WEAK_TOPICS, JSON.stringify({}));
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.SETTINGS)) {
      const defaultSettings = {
        theme: "light",
        sound: true,
        defaultTimer: 30,
        language: "en" // 'en' | 'hi'
      };
      localStorage.setItem(this.STORAGE_KEYS.SETTINGS, JSON.stringify(defaultSettings));
    }
  }

  getStats() {
    try {
      const stats = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.STATS)) || {};
      return {
        totalQuizzes: stats.totalQuizzes || 0,
        totalQuestions: stats.totalQuestions || 0,
        totalCorrect: stats.totalCorrect || 0,
        totalIncorrect: stats.totalIncorrect || 0,
        bestStreak: stats.bestStreak || 0,
        currentStreak: stats.currentStreak || 0,
        xp: stats.xp || 0,
        level: stats.level || 1
      };
    } catch {
      return { totalQuizzes: 0, totalQuestions: 0, totalCorrect: 0, totalIncorrect: 0, bestStreak: 0, currentStreak: 0, xp: 0, level: 1 };
    }
  }

  saveStats(stats) {
    localStorage.setItem(this.STORAGE_KEYS.STATS, JSON.stringify(stats));
  }

  addXP(amount) {
    const stats = this.getStats();
    stats.xp = (stats.xp || 0) + amount;
    // Every 100 XP is 1 level up
    const newLevel = Math.floor(stats.xp / 100) + 1;
    const leveledUp = newLevel > stats.level;
    stats.level = newLevel;
    this.saveStats(stats);
    return { xp: stats.xp, level: stats.level, leveledUp };
  }

  recordQuizCompletion(result) {
    const stats = this.getStats();
    stats.totalQuizzes += 1;
    stats.totalQuestions += result.total;
    stats.totalCorrect += result.correct;
    stats.totalIncorrect += result.incorrect;

    // Gamification XP: 10 XP per correct + 20 bonus for completion + streak bonus
    const earnedXP = (result.correct * 10) + 20 + ((result.maxStreak || 0) * 5);
    stats.xp += earnedXP;
    stats.level = Math.floor(stats.xp / 100) + 1;

    if (result.maxStreak > stats.bestStreak) {
      stats.bestStreak = result.maxStreak;
    }

    // Daily streak increment if scored >= 50%
    if (result.percentage >= 50) {
      stats.currentStreak += 1;
    } else {
      stats.currentStreak = 0;
    }

    this.saveStats(stats);

    // Save weak topics from incorrect and skipped questions
    const weakTopics = this.getWeakTopics();
    if (result.answersHistory) {
      result.answersHistory.forEach((h) => {
        if (!h.isCorrect) {
          const ch = h.question.chapter || "General";
          if (!weakTopics[ch]) {
            weakTopics[ch] = {
              chapter: ch,
              classId: h.question.classId,
              subjectId: h.question.subjectId,
              mistakeCount: 0,
              lastMissedAt: Date.now()
            };
          }
          weakTopics[ch].mistakeCount += 1;
          weakTopics[ch].lastMissedAt = Date.now();
        }
      });
      this.saveWeakTopics(weakTopics);
    }

    // Save to history (keep latest 25)
    const history = this.getHistory();
    history.unshift({
      id: "quiz_" + Date.now(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      classId: result.classId,
      subjectId: result.subjectId,
      difficulty: result.difficulty,
      score: result.score,
      total: result.total,
      percentage: result.percentage,
      timeSpent: result.timeSpentFormatted,
      xpEarned: earnedXP
    });

    localStorage.setItem(this.STORAGE_KEYS.HISTORY, JSON.stringify(history.slice(0, 25)));
    return { earnedXP, stats };
  }

  getWeakTopics() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.WEAK_TOPICS)) || {};
    } catch {
      return {};
    }
  }

  saveWeakTopics(topics) {
    localStorage.setItem(this.STORAGE_KEYS.WEAK_TOPICS, JSON.stringify(topics));
  }

  clearWeakTopic(chapterName) {
    const topics = this.getWeakTopics();
    if (topics[chapterName]) {
      delete topics[chapterName];
      this.saveWeakTopics(topics);
    }
  }

  getHistory() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.HISTORY)) || [];
    } catch {
      return [];
    }
  }

  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.BOOKMARKS)) || [];
    } catch {
      return [];
    }
  }

  toggleBookmark(question) {
    let bookmarks = this.getBookmarks();
    const index = bookmarks.findIndex((b) => b.id === question.id);
    let isBookmarked = false;

    if (index >= 0) {
      bookmarks.splice(index, 1);
      isBookmarked = false;
    } else {
      bookmarks.push({
        id: question.id,
        classId: question.classId,
        subjectId: question.subjectId,
        chapter: question.chapter,
        question: question.question,
        question_hi: question.question_hi || question.question,
        options: question.options,
        options_hi: question.options_hi || question.options,
        correct: question.correct,
        explanation: question.explanation,
        explanation_hi: question.explanation_hi || question.explanation,
        difficulty: question.difficulty,
        savedAt: Date.now()
      });
      isBookmarked = true;
    }

    localStorage.setItem(this.STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return isBookmarked;
  }

  isBookmarked(questionId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.some((b) => b.id === questionId);
  }

  getSettings() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.SETTINGS)) || { theme: "light", sound: true, language: "en" };
    } catch {
      return { theme: "light", sound: true, language: "en" };
    }
  }

  updateSettings(key, value) {
    const settings = this.getSettings();
    settings[key] = value;
    localStorage.setItem(this.STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }

  getLanguage() {
    const settings = this.getSettings();
    return settings.language || "en";
  }

  setLanguage(lang) {
    this.updateSettings("language", lang);
  }
}

// Global instance
window.quizStorage = new StorageManager();

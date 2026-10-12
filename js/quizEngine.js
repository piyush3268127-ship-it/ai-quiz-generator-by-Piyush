/**
 * NCERT MasterQuiz - Core Quiz Session Engine
 * Handles question state, timer, scoring, evaluation, and report card generation
 */

class QuizEngine {
  constructor() {
    this.reset();
  }

  reset() {
    this.classId = null;
    this.subjectId = null;
    this.difficulty = "medium";
    this.chapter = "all";
    this.questionCount = 5;
    this.timerMode = 30; // 0 = untimed, 30 = 30s per q, 60 = 60s per q

    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.skippedCount = 0;
    this.currentStreak = 0;
    this.maxStreak = 0;

    this.answersHistory = []; // { question, selectedIndex, isCorrect, isSkipped, timeSpent }
    this.sessionStartTime = null;
    this.questionStartTime = null;

    this.timerInterval = null;
    this.remainingSeconds = 0;
    this.onTickCallback = null;
    this.onTimeUpCallback = null;
  }

  async startQuiz(options, callbacks = {}) {
    this.reset();
    this.classId = options.classId || "10";
    this.subjectId = options.subjectId || "maths_10";
    this.subSectionId = options.subSectionId || "all";
    this.difficulty = options.difficulty || "medium";
    this.chapter = options.chapter || "all";
    this.questionCount = options.questionCount || 5;
    this.timerMode = options.timerMode !== undefined ? options.timerMode : 30;

    this.onTickCallback = callbacks.onTick || null;
    this.onTimeUpCallback = callbacks.onTimeUp || null;

    // AI Generation option
    if (options.useAI && window.aiService && window.aiService.isAvailable()) {
      try {
        this.questions = await window.aiService.generateQuestions({
          classId: this.classId,
          subjectId: this.subjectId,
          subSectionId: this.subSectionId,
          difficulty: this.difficulty,
          chapter: this.chapter,
          count: this.questionCount
        });
      } catch (err) {
        console.warn("AI generation failed, reverting to NCERT question bank:", err);
        if (callbacks.onAIFallback) callbacks.onAIFallback(err);
        this.questions = window.NCERT_DATA.getFilteredQuestions({
          classId: this.classId,
          subjectId: this.subjectId,
          subSectionId: this.subSectionId,
          difficulty: this.difficulty,
          chapter: this.chapter,
          limit: this.questionCount
        });
      }
    } else {
      // Load questions from verified NCERT bank
      this.questions = window.NCERT_DATA.getFilteredQuestions({
        classId: this.classId,
        subjectId: this.subjectId,
        subSectionId: this.subSectionId,
        difficulty: this.difficulty,
        chapter: this.chapter,
        limit: this.questionCount
      });
    }

    if (this.questions.length === 0) {
      throw new Error("No questions available for the selected criteria.");
    }

    this.sessionStartTime = Date.now();
    this.currentIndex = 0;
    this.startQuestionTimer();
    return this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    if (this.currentIndex < this.questions.length) {
      return this.questions[this.currentIndex];
    }
    return null;
  }

  startQuestionTimer() {
    this.stopTimer();
    this.questionStartTime = Date.now();

    if (this.timerMode > 0) {
      this.remainingSeconds = this.timerMode;
      if (this.onTickCallback) {
        this.onTickCallback(this.remainingSeconds);
      }

      this.timerInterval = setInterval(() => {
        this.remainingSeconds -= 1;
        if (this.onTickCallback) {
          this.onTickCallback(this.remainingSeconds);
        }

        if (this.remainingSeconds <= 0) {
          this.stopTimer();
          if (this.onTimeUpCallback) {
            this.onTimeUpCallback();
          }
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  submitAnswer(selectedIndex) {
    this.stopTimer();
    const currentQ = this.getCurrentQuestion();
    if (!currentQ) return null;

    const timeSpent = Math.max(1, Math.round((Date.now() - this.questionStartTime) / 1000));
    const isCorrect = selectedIndex === currentQ.correct;

    if (isCorrect) {
      this.score += 10;
      this.correctCount += 1;
      this.currentStreak += 1;
      if (this.currentStreak > this.maxStreak) {
        this.maxStreak = this.currentStreak;
      }
    } else {
      this.incorrectCount += 1;
      this.currentStreak = 0;
    }

    const record = {
      question: currentQ,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect,
      isSkipped: false,
      timeSpent: timeSpent
    };
    this.answersHistory.push(record);

    return {
      isCorrect: isCorrect,
      correctIndex: currentQ.correct,
      explanation: currentQ.explanation,
      streak: this.currentStreak,
      score: this.score,
      totalQuestions: this.questions.length,
      currentQuestionNumber: this.currentIndex + 1
    };
  }

  skipQuestion() {
    this.stopTimer();
    const currentQ = this.getCurrentQuestion();
    if (!currentQ) return null;

    const timeSpent = Math.max(1, Math.round((Date.now() - this.questionStartTime) / 1000));
    this.skippedCount += 1;
    this.currentStreak = 0;

    const record = {
      question: currentQ,
      selectedIndex: null,
      isCorrect: false,
      isSkipped: true,
      timeSpent: timeSpent
    };
    this.answersHistory.push(record);

    return {
      isCorrect: false,
      correctIndex: currentQ.correct,
      explanation: currentQ.explanation,
      streak: 0,
      score: this.score,
      isSkipped: true
    };
  }

  nextQuestion() {
    this.currentIndex += 1;
    if (this.currentIndex < this.questions.length) {
      this.startQuestionTimer();
      return { hasNext: true, question: this.getCurrentQuestion() };
    }
    return { hasNext: false, report: this.generateReport() };
  }

  generateReport() {
    this.stopTimer();
    const totalTimeSeconds = Math.max(1, Math.round((Date.now() - this.sessionStartTime) / 1000));
    const minutes = Math.floor(totalTimeSeconds / 60);
    const seconds = totalTimeSeconds % 60;
    const timeSpentFormatted = `${minutes > 0 ? minutes + "m " : ""}${seconds}s`;

    const total = this.questions.length;
    const percentage = total > 0 ? Math.round((this.correctCount / total) * 100) : 0;

    let grade = "";
    let remarks = "";
    let badgeColor = "";

    if (percentage >= 90) {
      grade = "A+ • NCERT Exemplar Scholar";
      remarks = "Outstanding conceptual clarity! You demonstrate textbook-perfect understanding and are thoroughly prepared for CBSE Board and competitive entrance standards.";
      badgeColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/30";
    } else if (percentage >= 75) {
      grade = "A • Proficient Learner";
      remarks = "Strong grasp of NCERT fundamental principles! Review the specific tricky questions you missed to achieve absolute mastery.";
      badgeColor = "text-blue-500 bg-blue-500/10 border-blue-500/30";
    } else if (percentage >= 50) {
      grade = "B • Developing Competence";
      remarks = "Good attempt! You have a decent conceptual baseline, but need closer reading of NCERT definitions, chemical reactions, and mathematical proofs.";
      badgeColor = "text-amber-500 bg-amber-500/10 border-amber-500/30";
    } else {
      grade = "C • Revision Recommended";
      remarks = "Review the NCERT textbook chapters thoroughly. Pay special attention to highlighted formulas, summary boxes, and in-chapter solved examples.";
      badgeColor = "text-rose-500 bg-rose-500/10 border-rose-500/30";
    }

    // Topic mastery analysis & Weak Areas Identification
    const chapterBreakdown = {};
    const weakRemedialNotes = [];

    this.answersHistory.forEach((h) => {
      const ch = h.question.chapter || "General";
      if (!chapterBreakdown[ch]) {
        chapterBreakdown[ch] = { correct: 0, total: 0 };
      }
      chapterBreakdown[ch].total += 1;
      if (h.isCorrect) chapterBreakdown[ch].correct += 1;
    });

    Object.keys(chapterBreakdown).forEach((ch) => {
      const item = chapterBreakdown[ch];
      if (item.correct < item.total) {
        const tip = (window.NCERT_DATA && window.NCERT_DATA.remedialTips && window.NCERT_DATA.remedialTips[ch])
          || `Key Concept Revision: Review definitions, core formulas, and in-chapter examples for ${ch}.`;
        weakRemedialNotes.push({
          chapter: ch,
          missedCount: item.total - item.correct,
          total: item.total,
          tip: tip
        });
      }
    });

    const report = {
      classId: this.classId,
      subjectId: this.subjectId,
      subSectionId: this.subSectionId,
      difficulty: this.difficulty,
      chapter: this.chapter,
      total: total,
      correct: this.correctCount,
      incorrect: this.incorrectCount,
      skipped: this.skippedCount,
      score: this.score,
      maxPossibleScore: total * 10,
      percentage: percentage,
      maxStreak: this.maxStreak,
      totalTimeSeconds: totalTimeSeconds,
      timeSpentFormatted: timeSpentFormatted,
      grade: grade,
      remarks: remarks,
      badgeColor: badgeColor,
      chapterBreakdown: chapterBreakdown,
      weakRemedialNotes: weakRemedialNotes,
      answersHistory: this.answersHistory
    };

    // Save to localStorage
    if (window.quizStorage) {
      const savedInfo = window.quizStorage.recordQuizCompletion(report);
      if (savedInfo) {
        report.xpEarned = savedInfo.earnedXP;
      }
    }

    return report;
  }
}

// Global instance
window.quizEngine = new QuizEngine();

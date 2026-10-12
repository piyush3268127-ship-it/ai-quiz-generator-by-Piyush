/**
 * NCERT MasterQuiz - AI Question Generator Service
 * Powered by Gemini API to generate real-time, on-demand NCERT questions
 */

class AIService {
  constructor() {
    this.defaultModel = "gemini-1.5-flash";
  }

  getApiKey() {
    // 1. Check local configuration file (config.local.js)
    if (
      window.APP_CONFIG &&
      window.APP_CONFIG.API_KEY &&
      window.APP_CONFIG.API_KEY !== "YOUR_API_KEY_HERE"
    ) {
      return window.APP_CONFIG.API_KEY.trim();
    }

    // 2. Fallback to localStorage if user configured via UI
    const customKey = localStorage.getItem("ncert_custom_api_key");
    if (customKey && customKey.trim().length > 0) {
      return customKey.trim();
    }

    return null;
  }

  setCustomApiKey(key) {
    if (key && key.trim().length > 0) {
      localStorage.setItem("ncert_custom_api_key", key.trim());
    } else {
      localStorage.removeItem("ncert_custom_api_key");
    }
  }

  isAvailable() {
    const key = this.getApiKey();
    return Boolean(key && key.length > 5);
  }

  getModel() {
    return (window.APP_CONFIG && window.APP_CONFIG.AI_MODEL) || this.defaultModel;
  }

  /**
   * Generates NCERT Multiple Choice Questions via Gemini API
   */
  async generateQuestions(criteria) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error("No API Key detected. Please configure your key in js/config.local.js or UI settings.");
    }

    const { classId, subjectId, difficulty, chapter, count } = criteria;
    const model = this.getModel();

    const subjectObj = window.NCERT_DATA.subjects[subjectId];
    const subjectName = subjectObj ? subjectObj.name : subjectId;
    const chapterName = chapter && chapter !== "all" ? `Chapter: ${chapter}` : "Full Syllabus";

    const prompt = `You are a Senior NCERT Curriculum Specialist and CBSE Board Exam Paper Setter.
Generate exactly ${count || 5} unique, high-quality Multiple Choice Questions (MCQs) for:
- Class: Class ${classId}th
- Subject: ${subjectName}
- Scope/Chapter: ${chapterName}
- Difficulty Level: ${difficulty.toUpperCase()} (Easy = direct textbook facts/definitions, Medium = application/exemplar/standard numericals, Hard = HOTS/assertion-reasoning/complex multi-step problems)

STRICT REQUIREMENTS:
1. Every question must adhere strictly to NCERT textbooks for Class ${classId}th.
2. Provide exactly 4 distinct options per question.
3. Provide the 0-indexed integer of the correct option (0, 1, 2, or 3).
4. Provide a thorough, pedagogically sound NCERT explanation citing textbook principles, formulas, and laws.

Return ONLY a valid JSON array of objects with the following schema, and NO markdown code block or extra conversational text:
[
  {
    "id": "ai_${Date.now()}_1",
    "classId": "${classId}",
    "subjectId": "${subjectId}",
    "chapter": "Name of exact NCERT chapter",
    "difficulty": "${difficulty}",
    "question": "Question statement here",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0,
    "explanation": "NCERT conceptual explanation explaining why the answer is correct."
  }
]`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.3,
        topP: 0.9,
        maxOutputTokens: 2048
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg = errorData.error?.message || `HTTP ${response.status} ${response.statusText}`;
      throw new Error(`AI Generation API Error: ${msg}`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error("No response generated from AI API.");
    }

    // Clean markdown code blocks if returned
    let cleanJson = rawText.trim();
    if (cleanJson.startsWith("```json")) {
      cleanJson = cleanJson.slice(7);
    } else if (cleanJson.startsWith("```")) {
      cleanJson = cleanJson.slice(3);
    }
    if (cleanJson.endsWith("```")) {
      cleanJson = cleanJson.slice(0, -3);
    }
    cleanJson = cleanJson.trim();

    try {
      const parsed = JSON.parse(cleanJson);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((item, idx) => ({
          id: item.id || `ai_${Date.now()}_${idx}`,
          classId: item.classId || classId,
          subjectId: item.subjectId || subjectId,
          chapter: item.chapter || chapterName,
          difficulty: item.difficulty || difficulty,
          question: item.question,
          options: item.options,
          correct: typeof item.correct === "number" ? item.correct : 0,
          explanation: item.explanation
        }));
      }
      throw new Error("Invalid format received from AI.");
    } catch (parseErr) {
      console.error("JSON parse error:", cleanJson, parseErr);
      throw new Error("Failed to parse questions generated by AI. Reverting to verified question bank.");
    }
  }
}

// Global instance
window.aiService = new AIService();

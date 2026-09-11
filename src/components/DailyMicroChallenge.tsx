"use client";

import React, { useState, useEffect } from 'react';
import { SupportedLang, translations } from '@/lib/i18n';
import { playNaturalKorean } from '@/lib/audio';

interface DailyMicroChallengeProps {
  lang: SupportedLang;
}

interface QuizQuestion {
  id: number;
  koreanText: string;
  question: Record<SupportedLang, string>;
  options: {
    id: string;
    korean: string;
    roman: string;
    meaning: Record<SupportedLang, string>;
  }[];
  correctId: string;
  explanation: Record<SupportedLang, string>;
}

const DAILY_QUIZZES: QuizQuestion[] = [
  {
    id: 1,
    koreanText: "안녕하세요",
    question: {
      en: "Listen to the audio. What is this standard Korean greeting?",
      ja: "音声を聞いてください。この最も基本的な韓国語の挨拶は何ですか？",
      es: "Escucha el audio. ¿Cuál es este saludo estándar en coreano?",
      ko: "음성을 들으세요. 이 표준 한국어 인사말은 무엇인가요?"
    },
    options: [
      { id: "a", korean: "안녕하세요", roman: "An-nyeong-ha-se-yo", meaning: { en: "Hello / Good day", ja: "こんにちは", es: "Hola / Buenos días", ko: "안녕하세요" } },
      { id: "b", korean: "감사합니다", roman: "Gam-sa-ham-ni-da", meaning: { en: "Thank you", ja: "ありがとうございます", es: "Gracias", ko: "감사합니다" } },
      { id: "c", korean: "죄송합니다", roman: "Joe-song-ham-ni-da", meaning: { en: "I am sorry", ja: "すみません / ごめんなさい", es: "Lo siento", ko: "죄송합니다" } }
    ],
    correctId: "a",
    explanation: {
      en: "'안녕하세요' (An-nyeong-ha-se-yo) is the universal respectful greeting in Korea.",
      ja: "「안녕하세요」は韓国で最も広く使われる丁寧な挨拶表現です。",
      es: "'안녕하세요' es el saludo formal y respetuoso más común en Corea.",
      ko: "'안녕하세요'는 한국에서 가장 널리 쓰이는 정중한 표준 인사말입니다."
    }
  },
  {
    id: 2,
    koreanText: "맛있어요",
    question: {
      en: "What do you say when the food is delicious?",
      ja: "料理がとても美味しいとき、何と言いますか？",
      es: "¿Qué dices cuando la comida está deliciosa?",
      ko: "음식이 정말 맛있을 때 사용하는 표현은 무엇인가요?"
    },
    options: [
      { id: "a", korean: "배고파요", roman: "Bae-go-pa-yo", meaning: { en: "I'm hungry", ja: "お腹が空きました", es: "Tengo hambre", ko: "배고파요" } },
      { id: "b", korean: "맛있어요", roman: "Ma-si-sseo-yo", meaning: { en: "It's delicious", ja: "美味しいです", es: "Está delicioso", ko: "맛있어요" } },
      { id: "c", korean: "잘 먹겠습니다", roman: "Jal meok-ge-sseum-ni-da", meaning: { en: "I will eat well", ja: "いただきます", es: "Buen provecho", ko: "잘 먹겠습니다" } }
    ],
    correctId: "b",
    explanation: {
      en: "'맛있어요' (Ma-si-sseo-yo) means 'It's delicious!' in polite Korean.",
      ja: "「맛있어요」は食事中に『美味しいです！』と伝える定番フレーズです。",
      es: "'맛있어요' significa '¡Está delicioso!' en coreano educado.",
      ko: "'맛있어요'는 식사 중 맛을 칭찬하는 가장 대표적인 존댓말 표현입니다."
    }
  },
  {
    id: 3,
    koreanText: "얼마예요?",
    question: {
      en: "How do you ask 'How much is it?' while shopping in Seoul?",
      ja: "ソウルでお買い物をするとき、「いくらですか？」と尋ねる表現は？",
      es: "¿Cómo preguntas '¿Cuánto cuesta?' al ir de compras en Seúl?",
      ko: "쇼핑할 때 '얼마예요?'라고 가격을 묻는 질문은?"
    },
    options: [
      { id: "a", korean: "어디예요?", roman: "Eo-di-ye-yo?", meaning: { en: "Where is it?", ja: "どこですか？", es: "¿Dónde está?", ko: "어디예요?" } },
      { id: "b", korean: "주세요", roman: "Ju-se-yo", meaning: { en: "Please give me", ja: "ください", es: "Por favor deme", ko: "주세요" } },
      { id: "c", korean: "얼마예요?", roman: "Eol-ma-ye-yo?", meaning: { en: "How much is it?", ja: "いくらですか？", es: "¿Cuánto cuesta?", ko: "얼마예요?" } }
    ],
    correctId: "c",
    explanation: {
      en: "'얼마예요?' (Eol-ma-ye-yo?) is the essential phrase to ask prices anywhere in Korea.",
      ja: "「얼마예요?」は市場やショップで値段を尋ねる必須フレーズです。",
      es: "'얼마예요?' es la frase indispensable para preguntar precios en cualquier tienda.",
      ko: "'얼마예요?'는 매장이나 시장에서 가격을 물을 때 쓰는 필수 표현입니다."
    }
  }
];

export default function DailyMicroChallenge({ lang }: DailyMicroChallengeProps) {
  const t = translations[lang] || translations.en;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const savedStreak = localStorage.getItem('hg_daily_streak');
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    }
  }, []);

  const currentQ = DAILY_QUIZZES[currentStep];

  const handleSelectOption = (optId: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(optId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    const correct = selectedOption === currentQ.correctId;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
    if (correct) {
      playNaturalKorean(currentQ.koreanText);
    }
  };

  const handleNextQuestion = () => {
    if (currentStep < DAILY_QUIZZES.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('hg_daily_streak', newStreak.toString());
      localStorage.setItem('hg_last_completed_date', new Date().toISOString().split('T')[0]);
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setIsCompleted(false);
  };

  const handleShare = () => {
    const text = `🔥 I just completed today's 30-Second Korean Challenge on Hangul Global!\nCurrent Streak: ${streak} Days! 🚀\nLearn Korean at https://korean.ipclub29.com`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="daily-challenge" className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>⚡</span> {t.challenge_badge}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {t.challenge_title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              {t.challenge_subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold shadow-md shrink-0">
            <span>🔥</span>
            <span>{streak} {t.challenge_streak_count}</span>
          </div>
        </div>

        {!isCompleted ? (
          <div>
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
              <span>Question {currentStep + 1} of {DAILY_QUIZZES.length}</span>
              <span>{Math.round(((currentStep + 1) / DAILY_QUIZZES.length) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / DAILY_QUIZZES.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Card */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'ko' ? "문제" : lang === 'ja' ? "問題" : lang === 'es' ? "Pregunta" : "Challenge"} #{currentStep + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => playNaturalKorean(currentQ.koreanText)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-cardano-cyan text-xs font-bold transition-all"
                  >
                    <span>🔊</span> {t.challenge_btn_listen}
                  </button>
                </div>
                <div className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                  {currentQ.question[lang] || currentQ.question.en}
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((opt) => {
                  let optStyle = "bg-slate-800/50 border-slate-700 text-slate-200 hover:bg-slate-800";
                  if (selectedOption === opt.id) {
                    if (isAnswerChecked) {
                      optStyle = isCorrect && opt.id === currentQ.correctId
                        ? "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/20"
                        : "bg-rose-950/80 border-rose-500 text-rose-200 shadow-md shadow-rose-500/20";
                    } else {
                      optStyle = "bg-emerald-900/40 border-emerald-500 text-white shadow-md";
                    }
                  } else if (isAnswerChecked && opt.id === currentQ.correctId) {
                    optStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200";
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-4 rounded-2xl border transition-all text-left flex items-center justify-between gap-4 ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0">
                          {opt.id.toUpperCase()}
                        </span>
                        <div>
                          <div className="font-bold text-white text-base sm:text-lg">
                            {opt.korean}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            [{opt.roman}] · {opt.meaning[lang] || opt.meaning.en}
                          </div>
                        </div>
                      </div>
                      <span className="text-slate-500">➜</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Actions */}
              {isAnswerChecked && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-fade-in ${isCorrect ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-200" : "bg-rose-950/60 border-rose-500/50 text-rose-200"}`}>
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <span>{isCorrect ? "✅ 정답입니다! (Correct!)" : "💡 다시 확인해 보세요 (Review)"}</span>
                  </div>
                  <div>{currentQ.explanation[lang] || currentQ.explanation.en}</div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                {!isAnswerChecked ? (
                  <button
                    type="button"
                    disabled={!selectedOption}
                    onClick={handleCheckAnswer}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 disabled:opacity-50 disabled:pointer-events-none text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    {lang === 'ko' ? "정답 확인하기" : lang === 'ja' ? "回答を確認" : lang === 'es' ? "Verificar Respuesta" : "Check Answer"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{currentStep < DAILY_QUIZZES.length - 1 ? (lang === 'ko' ? "다음 문제 ➜" : lang === 'ja' ? "次の問題 ➜" : lang === 'es' ? "Siguiente ➜" : "Next Question ➜") : (lang === 'ko' ? "결과 보기 🎉" : lang === 'ja' ? "結果を見る 🎉" : lang === 'es' ? "Ver Resultados 🎉" : "Finish Sprint 🎉")}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Completion State */
          <div className="text-center py-6 space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-0.5 mx-auto shadow-xl shadow-emerald-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-4xl">
                🏆
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t.challenge_completed_title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
                {t.challenge_completed_desc}
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-base">
              <span>🔥 {t.challenge_streak_label}:</span>
              <span className="text-xl font-black text-white">{streak} {t.challenge_streak_count}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleShare}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>📤</span> {copied ? t.challenge_share_copied : t.challenge_btn_share}
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-sm transition-all"
              >
                🔄 {t.challenge_btn_retry}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

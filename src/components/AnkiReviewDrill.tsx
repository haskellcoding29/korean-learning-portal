'use client';

import React, { useState } from 'react';
import { Volume2, RotateCcw, Check, X, Award } from 'lucide-react';
import { SupportedLang, translations } from '@/lib/i18n';
import { playNaturalKorean } from '@/lib/audio';

interface AnkiCardItem {
  front: string;
  pronunciation: string;
  back: { en: string; ja: string; es: string; ko?: string };
}

interface AnkiProps {
  cards: AnkiCardItem[];
  currentLang: SupportedLang;
}

export default function AnkiReviewDrill({ cards, currentLang }: AnkiProps) {
  const t = translations[currentLang];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentCard = cards[currentIndex] || cards[0];

  const handlePlayVoice = (text: string) => {
    playNaturalKorean(text, { pitch: 1.12, rate: 0.95 });
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore((prev) => prev + 10);
    }
    setFlipped(false);
    if (currentIndex + 1 < cards.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const restartDrill = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="p-8 rounded-3xl glass-card border border-emerald-500/40 text-center space-y-4 glow-cyan">
        <Award className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
        <h3 className="text-2xl font-black text-white">{t.anki_completed_title}</h3>
        <p className="text-slate-300 text-sm">{t.anki_score} <strong className="text-emerald-400 text-xl font-mono">{score} / {cards.length * 10}</strong></p>
        <button
          onClick={restartDrill}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-black text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.anki_btn_restart}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between text-xs font-bold text-slate-400">
        <span>Round {currentIndex + 1} / {cards.length}</span>
        <span>Score: <strong className="text-cyan-400 font-mono">{score}</strong></span>
      </div>

      {/* Flip Card */}
      <div
        onClick={() => {
          setFlipped(!flipped);
          if (!flipped) handlePlayVoice(currentCard.front);
        }}
        className="min-h-[220px] p-8 rounded-3xl glass border border-slate-700 hover:border-cyan-500/50 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-2xl relative select-none"
      >
        {!flipped ? (
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">Korean Prompt</span>
            <h4 className="text-4xl sm:text-5xl font-black text-white mb-2">{currentCard.front}</h4>
            <p className="text-xs font-mono text-slate-400">[{currentCard.pronunciation}]</p>
            <p className="text-[11px] text-slate-500 mt-4">{t.anki_flip_hint}</p>
          </div>
        ) : (
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Meaning / Translation</span>
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {(currentCard.back as any)[currentLang] || currentCard.back.en}
            </h4>
            <p className="text-xs text-slate-400 font-mono">{currentCard.front} · [{currentCard.pronunciation}]</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {flipped && (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAnswer(false)}
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-sm transition-all cursor-pointer"
          >
            <X className="w-4 h-4 text-rose-400" />
            <span>{t.anki_btn_review}</span>
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>{t.anki_btn_know}</span>
          </button>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { BASIC_CONSONANTS, BASIC_VOWELS, HangulLetter } from '@/data/hangulData';
import { SupportedLang } from '@/lib/i18n';
import { playNaturalKorean } from '@/lib/audio';

export default function HangulChart({ currentLang }: { currentLang: SupportedLang }) {
  const [selectedTab, setSelectedTab] = useState<'consonants' | 'vowels'>('consonants');
  const [activeLetter, setActiveLetter] = useState<HangulLetter>(BASIC_CONSONANTS[0]);
  const [playing, setPlaying] = useState<string | null>(null);

  const letters = selectedTab === 'consonants' ? BASIC_CONSONANTS : BASIC_VOWELS;

  const handlePlayAudio = (text: string) => {
    setPlaying(text);
    playNaturalKorean(text, {
      pitch: 1.15,
      rate: 0.92,
      onEnd: () => setPlaying(null),
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
          <button
            onClick={() => {
              setSelectedTab('consonants');
              setActiveLetter(BASIC_CONSONANTS[0]);
            }}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${selectedTab === 'consonants' ? 'bg-cyan-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'}`}
          >
            기본 자음 (14 Consonants)
          </button>
          <button
            onClick={() => {
              setSelectedTab('vowels');
              setActiveLetter(BASIC_VOWELS[0]);
            }}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${selectedTab === 'vowels' ? 'bg-cyan-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'}`}
          >
            기본 모음 (6 Vowels)
          </button>
        </div>
      </div>

      {/* Grid of Letters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {letters.map((item) => {
          const isSelected = activeLetter.char === item.char;
          return (
            <button
              key={item.char}
              onClick={() => {
                setActiveLetter(item);
                handlePlayAudio(item.char);
              }}
              className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center cursor-pointer ${isSelected ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10 scale-105' : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'}`}
            >
              <span className="text-3xl font-black mb-1">{item.char}</span>
              <span className="text-[11px] font-mono text-slate-400">{item.roman}</span>
            </button>
          );
        })}
      </div>

      {/* Active Letter Detail Inspector */}
      {activeLetter && (
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 glow-cyan relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* Big Char & Audio */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-5xl sm:text-6xl font-black shadow-xl shadow-cyan-500/25 mb-4">
                {activeLetter.char}
              </div>
              <button
                onClick={() => handlePlayAudio(activeLetter.char)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>{playing === activeLetter.char ? 'Playing...' : 'Bright Voice 🔊'}</span>
              </button>
            </div>

            {/* Linguistic Details */}
            <div className="flex-1 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{activeLetter.name}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800 text-cyan-400 border border-slate-700">
                    IPA: {activeLetter.ipa}
                  </span>
                </div>
                <p className="text-sm text-cyan-300 font-medium">
                  {currentLang === 'ja' && activeLetter.tips.ja}
                  {currentLang === 'es' && activeLetter.tips.es}
                  {(currentLang === 'en' || currentLang === 'ko') && activeLetter.tips.en}
                </p>
              </div>

              {/* Example Word */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Example Word:</span>
                  <span className="text-base font-bold text-white">{activeLetter.example_word}</span>
                  <span className="text-xs text-slate-300 ml-2">
                    ({(activeLetter.example_meaning as any)[currentLang] || activeLetter.example_meaning.en})
                  </span>
                </div>
                <button
                  onClick={() => handlePlayAudio(activeLetter.example_word.split(' ')[0])}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

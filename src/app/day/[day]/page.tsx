'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Volume2, ShieldCheck, Sparkles, BookOpen, Layers, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnkiReviewDrill from '@/components/AnkiReviewDrill';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState } from '@/lib/cardano';
import { CURRICULUM_LESSONS } from '@/data/curriculumData';
import { playNaturalKorean } from '@/lib/audio';

export default function LessonPage() {
  const params = useParams();
  const dayNum = parseInt(params.day as string, 10) || 1;

  const [lang, setLang] = useState<SupportedLang>('en');
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    walletName: null,
    stakeAddress: null,
    balanceAda: 0,
    isVipStaking: false,
    delegatedPoolTicker: null,
    unlockedDays: Array.from({ length: 30 }, (_, i) => i + 1), // 100% Free Open
  });

  useEffect(() => {
    setWallet(loadSavedWalletState());
  }, []);

  const t = translations[lang];
  const lesson = CURRICULUM_LESSONS.find((l) => l.day === dayNum) || CURRICULUM_LESSONS[0];

  const handlePlayVoice = (text: string) => {
    playNaturalKorean(text, { pitch: 1.12, rate: 0.95 });
  };

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        {/* Top Header */}
        <div>
          <Link href="/#curriculum" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to 30-Day Curriculum
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 inline-block bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono">
                100% FREE OPEN · Day {dayNum} of 30
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-white">{(lesson.title as any)[lang] || lesson.title.en}</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{(lesson.summary as any)[lang] || lesson.summary.en}</p>
            </div>
          </div>
        </div>

        {/* 1. Dialogue Section */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              {t.dialogue_title}
            </h2>
            <span className="text-xs text-cyan-400 font-medium">✨ Bright Native Voice Enabled</span>
          </div>

          <div className="space-y-4">
            {lesson.dialogue.map((d, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{d.speaker}</span>
                  <button
                    onClick={() => handlePlayVoice(d.korean)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors cursor-pointer"
                    title="Listen bright native pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-lg font-bold text-white">{d.korean}</p>
                <p className="text-xs font-mono text-slate-400">[{d.roman}]</p>
                <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">
                  {(d.translations as any)[lang] || d.translations.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Vocabulary Section */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
            <Layers className="w-5 h-5 text-blue-400" />
            {t.vocab_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lesson.vocabulary.map((v, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-white block">{v.korean}</span>
                  <span className="text-[11px] font-mono text-slate-400">[{v.roman}]</span>
                  <span className="text-xs text-slate-300 block mt-0.5">
                    {(v.meaning as any)[lang] || v.meaning.en}
                  </span>
                </div>
                <button
                  onClick={() => handlePlayVoice(v.korean)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Grammar Notes */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
            {t.grammar_title}
          </h2>
          {lesson.grammarNotes.map((g, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base font-bold text-cyan-300">{g.point}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {(g.explanation as any)[lang] || g.explanation.en}
              </p>
              <p className="text-xs font-mono text-slate-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                Example: {g.example}
              </p>
            </div>
          ))}
        </div>

        {/* 4. 10-Round Anki Drill */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/30 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1 block">Active Recall</span>
            <h2 className="text-2xl font-black text-white">{t.anki_title}</h2>
          </div>
          <AnkiReviewDrill cards={lesson.ankiCards} currentLang={lang} />
        </div>

        {/* Bottom Support Callout */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
          <p className="text-xs text-slate-400">
            Enjoying this free lesson? Support our education platform by delegating your Cardano (ADA) to <strong>JOY & HOPE</strong> stake pools!
          </p>
          <a
            href="https://cardano.ipclub29.com/#delegation-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-cyan-400 font-bold hover:underline"
          >
            <span>Learn about JOY & HOPE Pools</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </main>

      <Footer currentLang={lang} />
    </>
  );
}

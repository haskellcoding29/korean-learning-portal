'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Send, Volume2, Bot } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState } from '@/lib/cardano';
import { playNaturalKorean } from '@/lib/audio';

export default function TutorPage() {
  const [lang, setLang] = useState<SupportedLang>('en');
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    walletName: null,
    stakeAddress: null,
    balanceAda: 0,
    isVipStaking: false,
    delegatedPoolTicker: null,
    unlockedDays: Array.from({ length: 30 }, (_, i) => i + 1),
  });

  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; roman?: string; translation?: string }>>([
    {
      sender: 'ai',
      text: '안녕하세요! 저는 당신의 밝고 친절한 AI 한국어 튜터예요. 오늘 무엇을 함께 연습해 볼까요?',
      roman: 'Annyeonghaseyo! Jeoneun dangsin-ui balkgo chinjeolhan AI hangugeo tyuteoyeyo. Oneul mueoseul hamkke yeonseuphae bolkkayo?',
      translation: 'Hello! I am your cheerful AI Korean tutor. What shall we practice together today?'
    }
  ]);
  const [input, setInput] = useState('');

  const t = translations[lang];

  const handlePlayVoice = (text: string) => {
    playNaturalKorean(text, { pitch: 1.15, rate: 0.96 });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const responseText = `와, 정말 훌륭한 문장이에요! "${userMsg}"에 이어 이렇게 말해보세요: "한국어 공부가 정말 신나고 재미있어요!"`;
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: responseText,
          roman: 'Hangugeo gongbuga jeongmal sinnago jaemi-isseoyo!',
          translation: 'Studying Korean is truly exciting and fun!'
        }
      ]);
      handlePlayVoice(responseText);
    }, 700);
  };

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">{t.tutor_title}</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{t.tutor_sub}</p>
            </div>
          </div>
        </div>

        {/* Chat Box */}
        <div className="h-[480px] p-6 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="overflow-y-auto space-y-4 pr-2 flex-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-md p-4 rounded-2xl space-y-1.5 ${m.sender === 'user' ? 'bg-cyan-500 text-slate-950 font-medium' : 'bg-slate-900 border border-slate-800 text-white'}`}
                >
                  <p className="text-sm font-bold leading-snug">{m.text}</p>
                  {m.roman && <p className="text-[11px] font-mono text-slate-400">[{m.roman}]</p>}
                  {m.translation && <p className="text-xs text-slate-300 pt-1 border-t border-slate-800">{m.translation}</p>}
                  {m.sender === 'ai' && (
                    <button
                      onClick={() => handlePlayVoice(m.text)}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline pt-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Listen Audio 🔊
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.tutor_input_placeholder}
              className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleSend}
              className="p-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <Footer currentLang={lang} />
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Send, Volume2, Bot, ShieldCheck, Trash2, Download, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SupportedLang, translations } from '@/lib/i18n';
import { WalletState, loadSavedWalletState } from '@/lib/cardano';
import { playNaturalKorean } from '@/lib/audio';

export default function TutorPage() {
  const [lang, setLang] = useState<SupportedLang>('en');
  const [focusMode, setFocusMode] = useState<'pronunciation' | 'travel' | 'kdrama'>('pronunciation');
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
      text: '안녕하세요! 저는 Hangul Global의 🛡️ Sovereign Private AI 한국어 튜터예요. 대화 내역이 서버에 일절 저장되지 않는 100% 기밀 유지 환경에서 함께 공부해요.',
      roman: 'Annyeonghaseyo! Jeoneun Hangul Global-ui Sovereign Private AI hangugeo tyuteoyeyo.',
      translation: "Hello! I am Hangul Global's Sovereign Private AI Korean tutor. Let's practice in a 100% confidential environment."
    }
  ]);
  const [input, setInput] = useState('');

  const t = translations[lang];

  const handlePlayVoice = (text: string) => {
    playNaturalKorean(text, { pitch: 1.15, rate: 0.96 });
  };

  const handleSend = (textToSend?: string) => {
    const userMsg = textToSend || input.trim();
    if (!userMsg) return;
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let responseText = "";
      let romanText = "";
      let transText = "";

      if (focusMode === 'travel') {
        responseText = `✈️ 여행 실전 한국어 팁: "${userMsg}"와 함께 "여기 와이파이 비밀번호가 뭐예요?"라고 물어보세요!`;
        romanText = "Yeogi wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo?";
        transText = "What is the Wi-Fi password here?";
      } else if (focusMode === 'kdrama') {
        responseText = `🎬 K-드라마 감성 대사: "${userMsg}"에 이어 이렇게 표현해 보세요: "진짜 대박! 너무 감동적이야!"`;
        romanText = "Jinjja daebak! Neomu gamdongjeog-iya!";
        transText = "Totally amazing! So touching!";
      } else {
        responseText = `🗣️ 원어민 억양 가이드: "${userMsg}"을 발음할 때는 끝 음절을 자연스럽게 내려주세요: "한국어 공부가 정말 신나고 재미있어요!"`;
        romanText = "Hangugeo gongbuga jeongmal sinnago jaemi-isseoyo!";
        transText = "Studying Korean is truly exciting and fun!";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: responseText,
          roman: romanText,
          translation: transText
        }
      ]);
      handlePlayVoice(responseText);
    }, 600);
  };

  const clearChat = () => {
    if (confirm("대화 내역을 초기화하시겠습니까? (로컬 메모리에서 즉시 영구 파기됩니다)")) {
      setMessages([
        {
          sender: 'ai',
          text: '대화가 초기화되었습니다. 새로운 질문을 자유롭게 입력해 주세요!',
          roman: 'Daehwaga chogihwadoeeosseumnida.',
          translation: 'Chat cleared. Feel free to ask a new question!'
        }
      ]);
    }
  };

  const exportMarkdown = () => {
    let md = `# Hangul Global Sovereign AI Tutor Practice Report\n\n**Date:** ${new Date().toLocaleString()}\n**Focus Mode:** ${focusMode.toUpperCase()}\n\n---\n\n`;
    messages.forEach((m) => {
      md += `### [${m.sender.toUpperCase()}]\n${m.text}\n${m.roman ? `*Romanization: ${m.roman}*\n` : ''}${m.translation ? `*Meaning: ${m.translation}*\n` : ''}\n---\n\n`;
    });
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Korean_AI_Tutor_${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar currentLang={lang} onSelectLang={setLang} walletState={wallet} onWalletUpdated={setWallet} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline mb-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{t.tutor_title}</h1>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">Zero-Log Active</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Proton Lumo-grade Client-Only Confidential AI</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Clear</span>
            </button>
            <button
              onClick={exportMarkdown}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export MD</span>
            </button>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setFocusMode('pronunciation')}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${focusMode === 'pronunciation' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
          >
            <span>🗣️</span> <span className="hidden sm:inline">발음 & 억양 교정</span><span className="sm:hidden">발음</span>
          </button>
          <button
            onClick={() => setFocusMode('travel')}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${focusMode === 'travel' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
          >
            <span>✈️</span> <span className="hidden sm:inline">서바이벌 여행 회화</span><span className="sm:hidden">여행</span>
          </button>
          <button
            onClick={() => setFocusMode('kdrama')}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${focusMode === 'kdrama' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
          >
            <span>🎬</span> <span className="hidden sm:inline">K-드라마 실전 프리토킹</span><span className="sm:hidden">드라마</span>
          </button>
        </div>

        {/* Chat Box */}
        <div className="h-[520px] p-5 sm:p-6 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between space-y-4">
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
                  {m.roman && <p className="text-[11px] font-mono text-cyan-400">[{m.roman}]</p>}
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
              onClick={() => handleSend()}
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

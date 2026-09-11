"use client";

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, X, Send, Volume2, Lock } from 'lucide-react';
import { playNaturalKorean } from '@/lib/audio';

export default function SovereignAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; roman?: string; audio?: string }>>([
    {
      sender: 'bot',
      text: "안녕하세요! 저는 Hangul Global의 🛡️ Sovereign Private AI 튜터예요. 대화 내역이 서버에 일절 저장되지 않는 100% 기밀 유지 환경에서 한국어 발음과 회화를 도와드립니다.",
      roman: "Annyeonghaseyo! Jeoneun Hangul Global-ui Sovereign Private AI tyuteoyeyo.",
      audio: "안녕하세요! 저는 한글 글로벌의 소버린 프라이빗 AI 튜터예요."
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    { label: "🗣️ 발음 교정: 안녕하세요", text: "안녕하세요의 정확한 발음과 억양을 알려주세요.", audio: "안녕하세요. 안-녕-하-세-요." },
    { label: "☕ 카페 주문: 아이스 아메리카노", text: "카페에서 아이스 아메리카노 주문하는 법을 알려주세요.", audio: "아이스 아메리카노 한 잔 주세요." },
    { label: "🏷️ 쇼핑 필수: 얼마예요?", text: "쇼핑할 때 가격 묻는 자연스러운 한국어 표현은?", audio: "이거 얼마예요? 조금만 깎아주세요." },
    { label: "🎬 K-드라마 인기 명대사", text: "K-드라마에서 자주 나오는 감정 표현 하나 추천해줘.", audio: "보고 싶었어. 우리 다시 시작하자." }
  ];

  const handleSend = (userText?: string) => {
    const textToSend = userText || input.trim();
    if (!textToSend) return;

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    if (!userText) setInput('');

    setTimeout(() => {
      let replyText = "";
      let romanText = "";
      let audioText = "";

      const lower = textToSend.toLowerCase();
      if (lower.includes('안녕') || lower.includes('hello') || lower.includes('발음')) {
        replyText = "💡 '안녕하세요'는 [An-nyeong-ha-se-yo]로 발음하며, 끝 음절 '요'를 부드럽게 올려 말하면 더욱 친절하게 들립니다.";
        romanText = "[An-nyeong-ha-se-yo]";
        audioText = "안녕하세요. 만나서 반갑습니다.";
      } else if (lower.includes('카페') || lower.includes('아메리카노') || lower.includes('주문')) {
        replyText = "☕ 실전 카페 주문 문장:\n\"아이스 아메리카노 한 잔 포장해 주세요.\" (Takeout iced Americano, please!)";
        romanText = "[A-i-seu a-me-ri-ka-no han jan po-jang-hae ju-se-yo]";
        audioText = "아이스 아메리카노 한 잔 포장해 주세요.";
      } else if (lower.includes('얼마') || lower.includes('쇼핑') || lower.includes('price')) {
        replyText = "🏷️ 쇼핑 핵심 회화:\n\"이거 얼마예요?\" (How much is this?)\n\"카드로 결제할게요.\" (I will pay by card.)";
        romanText = "[I-geo eol-ma-ye-yo? Ka-deu-ro gyeol-je-hal-ge-yo]";
        audioText = "이거 얼마예요? 카드로 결제할게요.";
      } else {
        replyText = `와, 훌륭한 한국어 문장이에요! \"${textToSend}\"에 이어서 자연스럽게 표현해 보세요.`;
        romanText = "[Dae-bak! Cham jal-ha-syeo-sseo-yo]";
        audioText = textToSend;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: replyText,
          roman: romanText,
          audio: audioText
        }
      ]);
      if (audioText) {
        playNaturalKorean(audioText);
      }
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 border border-cyan-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Open Sovereign AI Language Tutor"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <Sparkles className="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform" />
        <span>Sovereign AI Tutor</span>
      </button>

      {/* Modal Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[440px] h-[580px] max-h-[82vh] bg-slate-950/95 border border-cyan-500/40 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-fade-in z-50">
          {/* Header */}
          <div className="px-5 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-white">Sovereign AI Korean Tutor</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-bold">Zero-Log</span>
                </div>
                <p className="text-[10px] text-slate-400">Proton Lumo-grade Client-Only · 100% Confidential</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Privacy Banner */}
          <div className="px-4 py-2 bg-cyan-950/40 border-b border-cyan-500/20 flex items-center justify-between text-[10px] text-cyan-300 font-mono shrink-0">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>No server logging · Zero AI training on your voice</span>
            </span>
            <span className="text-slate-500">100% Private</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${m.sender === 'user' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'}`}>
                  {m.sender === 'user' ? 'You' : '🤖'}
                </div>
                <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line shadow-md ${m.sender === 'user' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-sm font-medium' : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-sm'}`}>
                  <p>{m.text}</p>
                  {m.roman && <p className="text-[11px] font-mono text-cyan-300/80 mt-1">{m.roman}</p>}
                  {m.audio && (
                    <button
                      type="button"
                      onClick={() => playNaturalKorean(m.audio!)}
                      className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline mt-2 pt-1.5 border-t border-slate-800/80 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Listen Bright Voice 🔊
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <span className="text-[10px] text-slate-400 font-bold block mb-1">Quick Practice Prompts:</span>
                {quickPrompts.map((qp, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(qp.text)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-cyan-300 text-[11px] transition flex items-center justify-between cursor-pointer"
                  >
                    <span>{qp.label}</span>
                    <span className="text-slate-500 text-[10px]">Send ➜</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-900/95 border-t border-slate-800 shrink-0">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Korean phrase or grammar (Zero-Log)..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
              />
              <button
                type="submit"
                className="px-3.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md flex items-center justify-center shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

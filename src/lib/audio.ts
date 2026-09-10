// High-Definition Natural Korean Neural Voice Engine for Hangul Global

let cachedKoreanVoice: SpeechSynthesisVoice | null = null;

export function getBestKoreanVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  if (cachedKoreanVoice) return cachedKoreanVoice;

  const voices = window.speechSynthesis.getVoices();
  const koreanVoices = voices.filter((v) => v.lang.startsWith('ko') || v.lang.includes('KR'));

  if (koreanVoices.length === 0) return null;

  // 1. Prioritize ultra-natural / neural online voices (Edge Natural / Google Korean)
  const premiumVoice = koreanVoices.find(
    (v) =>
      v.name.includes('Natural') ||
      v.name.includes('Neural') ||
      v.name.includes('Online') ||
      v.name.includes('Google') ||
      v.name.includes('SunHi') ||
      v.name.includes('YuJin') ||
      v.name.includes('Yuna')
  );

  if (premiumVoice) {
    cachedKoreanVoice = premiumVoice;
    return premiumVoice;
  }

  // 2. Fallback to any Korean voice
  cachedKoreanVoice = koreanVoices[0];
  return cachedKoreanVoice;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedKoreanVoice = null;
    getBestKoreanVoice();
  };
}

export function playNaturalKorean(
  text: string,
  options?: { rate?: number; pitch?: number; onEnd?: () => void }
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestKoreanVoice();

  if (voice) {
    utterance.voice = voice;
  }
  utterance.lang = 'ko-KR';

  // Bright, cheerful, fresh Seoul native accent settings
  utterance.rate = options?.rate ?? 0.95; // Natural conversational speed
  utterance.pitch = options?.pitch ?? 1.12; // Cheerful, crisp, warm tone
  utterance.volume = 1.0;

  if (options?.onEnd) {
    utterance.onend = options.onEnd;
    utterance.onerror = options.onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

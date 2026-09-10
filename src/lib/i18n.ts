export type SupportedLang = 'en' | 'ja' | 'es' | 'ko';

export interface Translations {
  brand_name: string;
  brand_tagline: string;
  nav_alphabet: string;
  nav_curriculum: string;
  nav_tutor: string;
  nav_pricing: string;
  nav_connect_wallet: string;
  nav_connected: string;
  nav_vip_badge: string;
  hero_badge: string;
  hero_title_prefix: string;
  hero_title_highlight: string;
  hero_title_suffix: string;
  hero_desc: string;
  hero_btn_start: string;
  hero_btn_alphabet: string;
  hero_stat_lessons: string;
  hero_stat_lessons_sub: string;
  hero_stat_web3: string;
  hero_stat_web3_sub: string;
  hero_stat_vip: string;
  hero_stat_vip_sub: string;
  sec_features_title: string;
  sec_features_sub: string;
  f1_title: string;
  f1_desc: string;
  f2_title: string;
  f2_desc: string;
  f3_title: string;
  f3_desc: string;
  curriculum_title: string;
  curriculum_sub: string;
  free_tier_badge: string;
  premium_tier_badge: string;
  btn_start_lesson: string;
  btn_unlock_ada: string;
  btn_vip_unlocked: string;
  tutor_title: string;
  tutor_sub: string;
  tutor_input_placeholder: string;
  tutor_btn_send: string;
  tutor_voice_start: string;
  tutor_voice_stop: string;
  pricing_title: string;
  pricing_sub: string;
  pricing_free_title: string;
  pricing_free_price: string;
  pricing_free_desc: string;
  pricing_free_btn: string;
  pricing_ada_title: string;
  pricing_ada_price: string;
  pricing_ada_desc: string;
  pricing_ada_btn: string;
  pricing_vip_title: string;
  pricing_vip_price: string;
  pricing_vip_desc: string;
  pricing_vip_btn: string;
  anki_title: string;
  anki_flip_hint: string;
  anki_btn_know: string;
  anki_btn_review: string;
  anki_completed_title: string;
  anki_score: string;
  anki_btn_restart: string;
  dialogue_title: string;
  vocab_title: string;
  grammar_title: string;
  btn_listen: string;
}

export const translations: Record<SupportedLang, Translations> = {
  en: {
    brand_name: "Hangul Global",
    brand_tagline: "Master Korean with Web3 Micropayments & Staking VIP",
    nav_alphabet: "Hangul Alphabet",
    nav_curriculum: "30-Day Course",
    nav_tutor: "AI Voice Tutor",
    nav_pricing: "ADA Pricing & VIP",
    nav_connect_wallet: "Connect Cardano Wallet",
    nav_connected: "Connected",
    nav_vip_badge: "🌟 JOY/HOPE Staking VIP (100% Free Access)",
    hero_badge: "The Next-Gen Korean Learning Portal for Global Citizens",
    hero_title_prefix: "Master Real Korean in 30 Days with",
    hero_title_highlight: "Hangul Global & Web3",
    hero_title_suffix: "",
    hero_desc: "Tailored specifically for English, Japanese, and Spanish speakers. Learn scientifically designed Hangul, real K-Drama conversations, and unlock premium lessons with Cardano (ADA) or stake with JOY/HOPE for 100% free VIP access.",
    hero_btn_start: "Start Free Lessons (Day 1~5)",
    hero_btn_alphabet: "Learn Hangul Alphabet (24 Letters)",
    hero_stat_lessons: "30 Days Curriculum",
    hero_stat_lessons_sub: "Day 1-5 Free / Day 6-30 Premium",
    hero_stat_web3: "2~5 ADA per Course",
    hero_stat_web3_sub: "Instant Web3 Cardano Micro-pay",
    hero_stat_vip: "JOY / HOPE VIP Pass",
    hero_stat_vip_sub: "Free Access for Pool Delegators",
    sec_features_title: "Why Learn with Hangul Global?",
    sec_features_sub: "Bridging East Asian linguistics with cutting-edge Web3 and AI pronunciation technology.",
    f1_title: "Native Comparative Linguistics",
    f1_desc: "Clear comparative explanations specifically addressing the phonetic and grammatical differences for English, Japanese, and Spanish speakers.",
    f2_title: "Web3 Cardano Micropayments",
    f2_desc: "No expensive credit card subscriptions. Pay as little as 2~5 ADA (~$0.50) per lesson directly from your Lace or Eternl wallet.",
    f3_title: "JOY / HOPE Staking VIP Gate",
    f3_desc: "Delegate your ADA to JOY, JOY2, HOPE, or HOPE2 bare-metal stake pools and unlock all 30 days and AI voice tutors for 100% FREE!",
    curriculum_title: "30-Day Real-World Korean Curriculum",
    curriculum_sub: "From basic Hangul and cafe ordering to advanced K-drama slang and business etiquette.",
    free_tier_badge: "FREE TIER",
    premium_tier_badge: "PREMIUM (ADA / VIP)",
    btn_start_lesson: "Start Lesson ➔",
    btn_unlock_ada: "Unlock for 2 ADA 🔓",
    btn_vip_unlocked: "VIP Unlocked ✨",
    tutor_title: "24/7 AI 1:1 Korean Voice Tutor",
    tutor_sub: "Practice real-time speaking and listening with our native Korean conversational AI.",
    tutor_input_placeholder: "Type a message or click the microphone to speak...",
    tutor_btn_send: "Send",
    tutor_voice_start: "Voice Mode",
    tutor_voice_stop: "Stop Listening",
    pricing_title: "Transparent & Fair Web3 Pricing",
    pricing_sub: "Choose the learning path that fits your budget or stake to learn for free.",
    pricing_free_title: "Starter Free Tier",
    pricing_free_price: "0 ADA / $0",
    pricing_free_desc: "Full access to Hangul alphabet master + Day 1~5 essential survival conversations.",
    pricing_free_btn: "Start Learning Now",
    pricing_ada_title: "Cardano Micropayment",
    pricing_ada_price: "2~5 ADA / Lesson",
    pricing_ada_desc: "Pay only for what you learn using Cardano CIP-30 browser wallets (Lace, Eternl, Yoroi). Lifetime ownership.",
    pricing_ada_btn: "Connect Wallet to Pay",
    pricing_vip_title: "JOY & HOPE Staking VIP",
    pricing_vip_price: "100% FREE",
    pricing_vip_desc: "Delegate your ADA to JOY, JOY2, HOPE, or HOPE2 stake pools to enjoy 100% free lifetime access while earning 3.5% staking rewards!",
    pricing_vip_btn: "Delegate to JOY / HOPE",
    anki_title: "10-Round Active Recall Anki Drill",
    anki_flip_hint: "Click card or 'Show Answer' to flip",
    anki_btn_know: "I Know This (+10)",
    anki_btn_review: "Need Review (+0)",
    anki_completed_title: "🎉 Drill Completed!",
    anki_score: "Final Recall Score:",
    anki_btn_restart: "Restart 10-Round Drill",
    dialogue_title: "Real-Life Korean Dialogue",
    vocab_title: "Essential Core Vocabulary",
    grammar_title: "Linguistic Breakdown & Grammar Notes",
    btn_listen: "Listen"
  },
  ja: {
    brand_name: "Hangul Global",
    brand_tagline: "Web3マイクロペイメント＆ステーキングVIPで学ぶ韓国語",
    nav_alphabet: "ハングル基本文字",
    nav_curriculum: "30日完成コース",
    nav_tutor: "AI音声チューター",
    nav_pricing: "ADA決済＆VIP特典",
    nav_connect_wallet: "Cardanoウォレット接続",
    nav_connected: "接続済み",
    nav_vip_badge: "🌟 JOY/HOPE ステーキングVIP (全講座無料開放)",
    hero_badge: "日本人・アメリカ人・スペイン語圏のための次世代韓国語ポータル",
    hero_title_prefix: "語順と漢字の親和性を活かして30日でマスターする",
    hero_title_highlight: "Hangul Global ＆ Web3",
    hero_title_suffix: "",
    hero_desc: "日本語話者に最も学びやすい文法構造をベースに、24個のハングル基本字母からK-Drama実戦会話まで。Cardano(ADA)による2〜5 ADAの少額決済、またはJOY/HOPEプールへの委任で全講座が完全無料VIPになります。",
    hero_btn_start: "無料体験講座を始める (Day 1〜5)",
    hero_btn_alphabet: "ハングル字母表 (24文字・発音付)",
    hero_stat_lessons: "30日集中カリキュラム",
    hero_stat_lessons_sub: "Day 1-5 無料 / Day 6-30 プレミアム",
    hero_stat_web3: "1講座 2〜5 ADA",
    hero_stat_web3_sub: "超低手数料のWeb3オンチェーン決済",
    hero_stat_vip: "JOY / HOPE VIPパス",
    hero_stat_vip_sub: "プール委任者は全講座完全無料",
    sec_features_title: "なぜ Hangul Global なのか？",
    sec_features_sub: "日韓の言語学的親和性と最先端Web3・AI発音テクノロジーの融合。",
    f1_title: "日本語話者専用の比較言語学解説",
    f1_desc: "助詞の使い方や語順(SOV)、漢字語の共通語源を活かし、日本語話者が最も効率的に最短で習得できる解説を提供。",
    f2_title: "Cardano(ADA)による少額決済",
    f2_desc: "高額なサブスクやクレジットカード不要。LaceやEternlウォレットから1講座わずか2〜5 ADA(約80〜200円)で即時購入可能。",
    f3_title: "JOY / HOPE ステーキングVIP連携",
    f3_desc: "保有するADAをJOY、JOY2、HOPE、HOPE2ステークプールに委任するだけで、ステーキング報酬を得ながら全講座を完全無料で受講可能！",
    curriculum_title: "30日実戦韓国語カリキュラム",
    curriculum_sub: "ハングル読み書きからカフェ・旅行での注文、K-Dramaの名セリフ、ビジネス表現まで。",
    free_tier_badge: "無料体験",
    premium_tier_badge: "プレミアム (ADA / VIP)",
    btn_start_lesson: "講座を始める ➔",
    btn_unlock_ada: "2 ADAでロック解除 🔓",
    btn_vip_unlocked: "VIP解除済み ✨",
    tutor_title: "24/7 AI 1:1 韓国語音声チューター",
    tutor_sub: "ネイティブAIとリアルタイムで会話練習し、発音とイントネーションを即時チェック。",
    tutor_input_placeholder: "メッセージを入力するかマイクをクリックして話してください...",
    tutor_btn_send: "送信",
    tutor_voice_start: "音声対話モード",
    tutor_voice_stop: "音声入力停止",
    pricing_title: "透明でフェアなWeb3料金体系",
    pricing_sub: "ご自身の学習ペースに合わせた少額決済、またはステーキングで完全無料受講。",
    pricing_free_title: "スターター無料プラン",
    pricing_free_price: "0 ADA / 0円",
    pricing_free_desc: "ハングル字母完全マスター ＋ Day 1〜5の必須サバイバル日常会話。",
    pricing_free_btn: "今すぐ無料で学ぶ",
    pricing_ada_title: "Cardano マイクロ決済",
    pricing_ada_price: "2〜5 ADA / 1講座",
    pricing_ada_desc: "Cardano CIP-30ウォレット(Lace, Eternl, Yoroi)で必要な講座だけを即時購入。永久閲覧権付与。",
    pricing_ada_btn: "ウォレットを接続して決済",
    pricing_vip_title: "JOY & HOPE ステーキングVIP",
    pricing_vip_price: "完全無料 (100% FREE)",
    pricing_vip_desc: "JOY, JOY2, HOPE, HOPE2プールにADAを委任するだけで、年約3.5%の報酬を得つつ全講座が永久無料！",
    pricing_vip_btn: "JOY / HOPE プールに委任する",
    anki_title: "10ラウンド集中 Anki 単語ドリル",
    anki_flip_hint: "カードまたは「答えを見る」をクリックして裏返す",
    anki_btn_know: "覚えた (+10点)",
    anki_btn_review: "復習が必要 (+0点)",
    anki_completed_title: "🎉 ドリル完了！",
    anki_score: "最終スコア:",
    anki_btn_restart: "もう一度ドリルを行う",
    dialogue_title: "実戦韓国語ダイアログ",
    vocab_title: "必須重要単語",
    grammar_title: "文法解説＆日本語との比較ポイント",
    btn_listen: "発音を聞く"
  },
  es: {
    brand_name: "Hangul Global",
    brand_tagline: "Aprende Coreano con Micropagos Web3 y Staking VIP",
    nav_alphabet: "Alfabeto Hangul",
    nav_curriculum: "Curso de 30 Días",
    nav_tutor: "Tutor de Voz IA",
    nav_pricing: "Precios ADA y VIP",
    nav_connect_wallet: "Conectar Billetera Cardano",
    nav_connected: "Conectado",
    nav_vip_badge: "🌟 JOY/HOPE Staking VIP (Acceso 100% Gratuito)",
    hero_badge: "El portal de coreano de nueva generación para hispanohablantes y el mundo",
    hero_title_prefix: "Domina el Coreano Real en 30 Días con",
    hero_title_highlight: "Hangul Global y Web3",
    hero_title_suffix: "",
    hero_desc: "Diseñado especialmente para hispanohablantes. Aprende el alfabeto científico Hangul, conversaciones de K-Dramas y desbloquea lecciones con Cardano (ADA) o delega en los pools JOY/HOPE para acceso VIP 100% gratis.",
    hero_btn_start: "Comenzar Lecciones Gratuitas (Día 1~5)",
    hero_btn_alphabet: "Alfabeto Hangul (24 Letras con Audio)",
    hero_stat_lessons: "Curso de 30 Días",
    hero_stat_lessons_sub: "Día 1-5 Gratis / Día 6-30 Premium",
    hero_stat_web3: "2~5 ADA por Lección",
    hero_stat_web3_sub: "Micropagos instantáneos en Cardano",
    hero_stat_vip: "Pase VIP JOY / HOPE",
    hero_stat_vip_sub: "Acceso gratis para delegadores de pools",
    sec_features_title: "¿Por qué aprender con Hangul Global?",
    sec_features_sub: "Uniendo la lingüística coreana con la vanguardia de Web3 y la tecnología de pronunciación con IA.",
    f1_title: "Lingüística Comparada para Hispanohablantes",
    f1_desc: "Explicaciones claras adaptadas a la fonética y gramática del español (distinción de vocales, conjugaciones y partículas).",
    f2_title: "Micropagos Web3 en Cardano",
    f2_desc: "Sin suscripciones costosas de tarjetas de crédito. Paga tan solo 2~5 ADA (~$0.50) por lección directamente desde tu billetera Lace o Eternl.",
    f3_title: "Pase VIP por Staking en JOY / HOPE",
    f3_desc: "Delega tu ADA en los pools bare-metal JOY, JOY2, HOPE o HOPE2 y desbloquea todo el curso y el tutor de voz IA de forma 100% GRATIS.",
    curriculum_title: "Currículo de Coreano Práctico de 30 Días",
    curriculum_sub: "Desde el Hangul básico y pedidos en cafeterías hasta expresiones de K-Dramas y etiqueta de negocios.",
    free_tier_badge: "GRATIS",
    premium_tier_badge: "PREMIUM (ADA / VIP)",
    btn_start_lesson: "Iniciar Lección ➔",
    btn_unlock_ada: "Desbloquear por 2 ADA 🔓",
    btn_vip_unlocked: "VIP Desbloqueado ✨",
    tutor_title: "Tutor de Voz IA 1:1 las 24 Horas",
    tutor_sub: "Practica conversación en tiempo real con nuestra inteligencia artificial nativa en coreano.",
    tutor_input_placeholder: "Escribe un mensaje o haz clic en el micrófono para hablar...",
    tutor_btn_send: "Enviar",
    tutor_voice_start: "Modo Voz",
    tutor_voice_stop: "Detener Voz",
    pricing_title: "Precios Web3 Transparentes y Justos",
    pricing_sub: "Elige el camino que mejor se adapte a ti o haz staking para estudiar gratis.",
    pricing_free_title: "Nivel Inicial Gratuito",
    pricing_free_price: "0 ADA / $0",
    pricing_free_desc: "Acceso total al alfabeto Hangul + Conversaciones esenciales de supervivencia (Día 1~5).",
    pricing_free_btn: "Aprender Gratis Ahora",
    pricing_ada_title: "Micropago con Cardano",
    pricing_ada_price: "2~5 ADA / Lección",
    pricing_ada_desc: "Paga solo por lo que estudias usando billeteras CIP-30 (Lace, Eternl, Yoroi). Propiedad de por vida.",
    pricing_ada_btn: "Conectar Billetera y Pagar",
    pricing_vip_title: "VIP por Staking JOY & HOPE",
    pricing_vip_price: "100% GRATIS",
    pricing_vip_desc: "Delega en los pools JOY, JOY2, HOPE o HOPE2 para disfrutar de acceso ilimitado de por vida mientras ganas un 3.5% anual en recompensas.",
    pricing_vip_btn: "Delegar en JOY / HOPE",
    anki_title: "Taladro de Memoria Activa Anki de 10 Rondas",
    anki_flip_hint: "Haz clic en la tarjeta o en 'Ver Respuesta' para voltear",
    anki_btn_know: "Lo Sé (+10 pts)",
    anki_btn_review: "Repasar (+0 pts)",
    anki_completed_title: "🎉 ¡Taladro Completado!",
    anki_score: "Puntuación Final:",
    anki_btn_restart: "Reiniciar Taladro",
    dialogue_title: "Diálogo de la Vida Real",
    vocab_title: "Vocabulario Clave",
    grammar_title: "Desglose Lingüístico y Notas Gramaticales",
    btn_listen: "Escuchar"
  },
  ko: {
    brand_name: "Hangul Global",
    brand_tagline: "Web3 에이다 소액 결제 & 스테이킹 VIP 기반 한국어 교육 포털",
    nav_alphabet: "한글 자모음",
    nav_curriculum: "30일 완성 코스",
    nav_tutor: "AI 음성 튜터",
    nav_pricing: "ADA 결제 & VIP",
    nav_connect_wallet: "카르다노 지갑 연결",
    nav_connected: "연결됨",
    nav_vip_badge: "🌟 JOY/HOPE 스테이킹 VIP (전 강좌 100% 무료 개방)",
    hero_badge: "미국·일본·스페인어권 글로벌 학습자를 위한 차세대 한국어 포털",
    hero_title_prefix: "30일 만에 실전 한국어를 마스터하는",
    hero_title_highlight: "Hangul Global & Web3",
    hero_title_suffix: "",
    hero_desc: "영어·일본어·스페인어 화자별 음운/문법 비교 해설 탑재. 과학적인 한글 24자모음부터 K-드라마 실전 회화까지, 카르다노(ADA) 2~5 ADA 소액 결제 또는 JOY/HOPE 풀 위임 시 전 강좌 100% 무료 VIP 개방!",
    hero_btn_start: "무료 체험 강좌 시작 (Day 1~5)",
    hero_btn_alphabet: "한글 자모음 마스터 (24자·원어민 음성)",
    hero_stat_lessons: "30일 집중 커리큘럼",
    hero_stat_lessons_sub: "Day 1-5 무료 / Day 6-30 프리미엄",
    hero_stat_web3: "강좌당 2~5 ADA",
    hero_stat_web3_sub: "초간편 Web3 온체인 마이크로 결제",
    hero_stat_vip: "JOY / HOPE VIP 패스",
    hero_stat_vip_sub: "스테이크 풀 위임자 전원 무료",
    sec_features_title: "왜 Hangul Global인가요?",
    sec_features_sub: "한국어의 언어학적 과학성과 최첨단 Web3 및 AI 음성 훈련 기술의 융합.",
    f1_title: "원어민 맞춤 비교 언어학 해설",
    f1_desc: "영어, 일본어, 스페인어 각 언어의 구조적 차이에 맞춰 발음 원리와 문법을 가장 직관적으로 설명합니다.",
    f2_title: "카르다노(ADA) 소액 결제",
    f2_desc: "비싼 신용카드 수수료나 월간 구독 없이, Lace나 Eternl 지갑으로 강좌당 2~5 ADA로 평생 소장하세요.",
    f3_title: "JOY / HOPE 스테이킹 VIP 게이트",
    f3_desc: "JOY, JOY2, HOPE, HOPE2 스테이크 풀에 ADA를 위임하기만 하면, 연 3.5% 보상을 받으며 전 강좌를 100% 무료로 수강할 수 있습니다!",
    curriculum_title: "30일 실전 한국어 마스터 커리큘럼",
    curriculum_sub: "한글 읽기부터 카페/식당 주문, K-드라마 명대사, 비즈니스 에티켓까지.",
    free_tier_badge: "무료 체험",
    premium_tier_badge: "프리미엄 (ADA / VIP)",
    btn_start_lesson: "강좌 시작 ➔",
    btn_unlock_ada: "2 ADA로 열기 🔓",
    btn_vip_unlocked: "VIP 잠금해제 ✨",
    tutor_title: "24/7 AI 1:1 한국어 음성 튜터",
    tutor_sub: "원어민 AI와 실시간으로 대화하며 발음과 억양을 실시간으로 교정하세요.",
    tutor_input_placeholder: "메시지를 입력하거나 마이크 버튼을 눌러 말씀하세요...",
    tutor_btn_send: "전송",
    tutor_voice_start: "음성 대화 모드",
    tutor_voice_stop: "음성 인식 정지",
    pricing_title: "투명하고 공정한 Web3 요금 정책",
    pricing_sub: "합리적인 소액 결제 또는 스테이킹을 통해 스마트하게 학습하세요.",
    pricing_free_title: "스타터 무료 플랜",
    pricing_free_price: "0 ADA / 0원",
    pricing_free_desc: "한글 자모음 완전 마스터 + Day 1~5 서바이벌 필수 회화 전편 무료.",
    pricing_free_btn: "지금 무료로 학습하기",
    pricing_ada_title: "카르다노 마이크로 결제",
    pricing_ada_price: "2~5 ADA / 강좌당",
    pricing_ada_desc: "Cardano CIP-30 지갑으로 필요한 강좌만 즉시 결제하여 영구 소장.",
    pricing_ada_btn: "지갑 연결하고 결제하기",
    pricing_vip_title: "JOY & HOPE 스테이킹 VIP",
    pricing_vip_price: "100% 완전 무료",
    pricing_vip_desc: "JOY, JOY2, HOPE, HOPE2 풀에 ADA를 위임하면 5일마다 에포크 보상을 받으면서 전 강좌를 평생 무료로 수강!",
    pricing_vip_btn: "JOY / HOPE 풀에 위임하기",
    anki_title: "10라운드 능동 회상 Anki 단어 드릴",
    anki_flip_hint: "카드를 클릭하거나 '정답 확인'을 눌러 뒤집으세요",
    anki_btn_know: "알고 있음 (+10점)",
    anki_btn_review: "복습 필요 (+0점)",
    anki_completed_title: "🎉 드릴 완료!",
    anki_score: "최종 회상 점수:",
    anki_btn_restart: "10라운드 다시 시작",
    dialogue_title: "실전 한국어 대화문",
    vocab_title: "핵심 필수 어휘",
    grammar_title: "언어학적 문법 해설 & 비교 포인트",
    btn_listen: "발음 듣기"
  }
};

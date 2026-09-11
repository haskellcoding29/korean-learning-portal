export type SupportedLang = 'en' | 'ja' | 'es' | 'ko';

export interface Translations {
  brand_name: string;
  brand_tagline: string;
  nav_alphabet: string;
  nav_curriculum: string;
  nav_tutor: string;
  nav_pricing: string;
  nav_challenge: string;
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
  challenge_badge: string;
  challenge_title: string;
  challenge_subtitle: string;
  challenge_streak_label: string;
  challenge_btn_listen: string;
  challenge_completed_title: string;
  challenge_completed_desc: string;
  challenge_streak_count: string;
  challenge_btn_share: string;
  challenge_btn_retry: string;
  challenge_share_copied: string;
}

export const translations: Record<SupportedLang, Translations> = {
  en: {
    brand_name: "Hangul Global",
    brand_tagline: "Master Korean with Web3 Micropayments & Staking VIP",
    nav_alphabet: "Hangul Alphabet",
    nav_curriculum: "30-Day Course",
    nav_tutor: "AI Voice Tutor",
    nav_pricing: "ADA Pricing & VIP",
    nav_challenge: "Daily 30s Challenge",
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
    f1_desc: "Direct phonetic and grammatical comparisons tailored for English, Japanese, and Spanish speakers to accelerate natural comprehension.",
    f2_title: "Cardano (ADA) Micropayments",
    f2_desc: "No expensive recurring subscriptions or high credit card fees. Pay 2~5 ADA per advanced lesson with instant CIP-30 wallet connection.",
    f3_title: "JOY / HOPE Staking VIP Gate",
    f3_desc: "Delegate ADA to JOY, JOY2, HOPE, or HOPE2 pools to unlock 100% full access to all 30 days of curriculum while earning ~3.5% staking rewards!",
    curriculum_title: "30-Day Master Korean Curriculum",
    curriculum_sub: "From zero reading to natural K-drama dialogues, survival travel phrases, and business etiquette.",
    free_tier_badge: "Free Starter Tier",
    premium_tier_badge: "Premium (ADA / VIP)",
    btn_start_lesson: "Start Lesson ➔",
    btn_unlock_ada: "Unlock for 2 ADA 🔓",
    btn_vip_unlocked: "VIP Unlocked ✨",
    tutor_title: "24/7 AI 1-on-1 Korean Voice Tutor",
    tutor_sub: "Practice real conversations and receive instant pronunciation feedback with our AI native tutor.",
    tutor_input_placeholder: "Type a Korean phrase or click microphone to speak...",
    tutor_btn_send: "Send",
    tutor_voice_start: "Start Voice Mode",
    tutor_voice_stop: "Stop Listening",
    pricing_title: "Transparent & Fair Web3 Pricing",
    pricing_sub: "Choose flexible Cardano micropayments or enjoy lifetime free access via stake pool delegation.",
    pricing_free_title: "Starter Free Tier",
    pricing_free_price: "0 ADA / $0",
    pricing_free_desc: "Full Hangul 24 letters audio chart + Day 1 to 5 essential survival conversation modules.",
    pricing_free_btn: "Start Free Today",
    pricing_ada_title: "Cardano Micro-Pay",
    pricing_ada_price: "2~5 ADA / lesson",
    pricing_ada_desc: "Instant unlock with Cardano CIP-30 web wallets (Lace, Eternl, Nami). Lifetime access.",
    pricing_ada_btn: "Connect Wallet to Buy",
    pricing_vip_title: "JOY & HOPE Staking VIP",
    pricing_vip_price: "100% Free Forever",
    pricing_vip_desc: "Delegate your ADA to JOY, JOY2, HOPE, or HOPE2 pool. Earn regular rewards and enjoy full free course access.",
    pricing_vip_btn: "Delegate on Cardano Sarangbang",
    anki_title: "10-Round Active Recall Anki Drill",
    anki_flip_hint: "Click the card or press 'Check Answer' to reveal",
    anki_btn_know: "I Know This (+10)",
    anki_btn_review: "Need Review (+0)",
    anki_completed_title: "🎉 Drill Completed!",
    anki_score: "Final Recall Score:",
    anki_btn_restart: "Restart 10-Card Drill",
    dialogue_title: "Real-Life Dialogue",
    vocab_title: "Core Vocabulary",
    grammar_title: "Grammar & Linguistics Breakdown",
    btn_listen: "Listen",
    challenge_badge: "Daily 30-Second Micro-Wins",
    challenge_title: "Today's 30-Second Hangul Micro-Challenge",
    challenge_subtitle: "Build your 0-to-1 language habit! Solve 3 quick questions, hear native pronunciation, and earn your daily streak stamp.",
    challenge_streak_label: "Current Streak",
    challenge_btn_listen: "Listen (Bright TTS)",
    challenge_completed_title: "🎉 Today's Micro-Win Achieved!",
    challenge_completed_desc: "Consistency beats perfection! You've completed today's 30-second sprint and leveled up your Korean mastery.",
    challenge_streak_count: "Day Streak 🔥",
    challenge_btn_share: "Share My Achievement",
    challenge_btn_retry: "Practice Again",
    challenge_share_copied: "Achievement copied to clipboard!"
  },
  ja: {
    brand_name: "Hangul Global",
    brand_tagline: "Web3マイクロペイメント＆ステーキングVIPで学ぶ韓国語",
    nav_alphabet: "ハングル字母表",
    nav_curriculum: "30日完成コース",
    nav_tutor: "AI音声チューター",
    nav_pricing: "ADA料金＆VIP",
    nav_challenge: "30秒デイリー挑戦",
    nav_connect_wallet: "Cardanoウォレット接続",
    nav_connected: "接続済み",
    nav_vip_badge: "🌟 JOY/HOPE ステーキングVIP (全講座無料開放)",
    hero_badge: "世界の学習者のための次世代韓国語学習ポータル",
    hero_title_prefix: "30日で実践韓国語をマスターする",
    hero_title_highlight: "Hangul Global & Web3",
    hero_title_suffix: "",
    hero_desc: "日本語・英語・スペイン語話者向けに最適化された対照言語学解説。科学的なハングル24文字から実践K-Drama会話まで、Cardano(ADA) 2〜5 ADAの少額決済またはJOY/HOPEプール委任で全講座100%無料開放！",
    hero_btn_start: "無料体験講座を始める (Day 1〜5)",
    hero_btn_alphabet: "ハングル字母をマスター (24文字・ネイティブ音声)",
    hero_stat_lessons: "30日集中カリキュラム",
    hero_stat_lessons_sub: "Day 1-5 無料 / Day 6-30 プレミアム",
    hero_stat_web3: "1講座あたり 2〜5 ADA",
    hero_stat_web3_sub: "超高速 Web3 オンチェーン少額決済",
    hero_stat_vip: "JOY / HOPE VIPパス",
    hero_stat_vip_sub: "プール委任者は全講座完全無料",
    sec_features_title: "Hangul Globalが選ばれる理由",
    sec_features_sub: "東アジア言語学の科学性と最先端Web3＆AI音声技術の融合。",
    f1_title: "母国語に合わせた対照言語学",
    f1_desc: "日本語、英語、スペイン語の文法・発音との比較を通じて、最も直感的かつ体系的に韓国語を理解できます。",
    f2_title: "Cardano (ADA) 少額決済",
    f2_desc: "高額な月額サブスクやカード手数料なし。CIP-30ウォレットで必要な講座だけを2〜5 ADAで即座に永久アンロック。",
    f3_title: "JOY / HOPE ステーキングVIP",
    f3_desc: "JOY、JOY2、HOPE、HOPE2プールにADAを委任するだけで、約3.5%の報酬を得ながら全30日分の講座が永久無料！",
    curriculum_title: "30日実践韓国語マスターカリキュラム",
    curriculum_sub: "ハングルの読み書きから、カフェ・食堂での注文、K-Dramaの名セリフ、ビジネス会話まで。",
    free_tier_badge: "無料スターター",
    premium_tier_badge: "プレミアム (ADA / VIP)",
    btn_start_lesson: "講座を開始 ➔",
    btn_unlock_ada: "2 ADAでアンロック 🔓",
    btn_vip_unlocked: "VIPアンロック済み ✨",
    tutor_title: "24/7 AI 1対1 韓国語音声チューター",
    tutor_sub: "ネイティブAIとリアルタイムで対話し、発音やイントネーションをその場で修正できます。",
    tutor_input_placeholder: "韓国語の文章を入力するか、マイクを押して話しかけてください...",
    tutor_btn_send: "送信",
    tutor_voice_start: "音声対話モード開始",
    tutor_voice_stop: "音声認識停止",
    pricing_title: "透明で公正なWeb3料金体系",
    pricing_sub: "柔軟な少額決済またはステークプール委任による完全無料アクセスをお選びください。",
    pricing_free_title: "無料スタータープラン",
    pricing_free_price: "0 ADA / 0円",
    pricing_free_desc: "ハングル24字母完全マスタリー ＋ Day 1〜5 必須サバイバル会話全編無料。",
    pricing_free_btn: "今すぐ無料で学ぶ",
    pricing_ada_title: "Cardano マイクロペイ",
    pricing_ada_price: "2〜5 ADA / 講座",
    pricing_ada_desc: "Cardano CIP-30ウォレットで必要な講座のみを即時決済して永久保有。",
    pricing_ada_btn: "ウォレット接続して決済",
    pricing_vip_title: "JOY & HOPE ステーキングVIP",
    pricing_vip_price: "完全無料 (永久)",
    pricing_vip_desc: "JOY、JOY2、HOPE、HOPE2プールにADAを委任すれば、5日ごとの報酬を受け取りながら全講座が永久無料！",
    pricing_vip_btn: "カルダノ愛の部屋で委任する",
    anki_title: "10ラウンド 能動想起 Anki 単語ドリル",
    anki_flip_hint: "カードをクリックまたは『正解確認』でめくります",
    anki_btn_know: "覚えている (+10点)",
    anki_btn_review: "要復習 (+0点)",
    anki_completed_title: "🎉 ドリル完了！",
    anki_score: "最終想起スコア:",
    anki_btn_restart: "10ラウンド再挑戦",
    dialogue_title: "実践韓国語ダイアログ",
    vocab_title: "重要必須ボキャブラリー",
    grammar_title: "言語学的文法解説＆比較ポイント",
    btn_listen: "音声を聞く",
    challenge_badge: "1日30秒・小さな成功体験",
    challenge_title: "今日の30秒・ハングル マイクロチャレンジ",
    challenge_subtitle: "完璧を求めず、毎日30秒で0→1の達成感を！3問のミニクイズでネイティブ音声を聞き、デイリー出席スタンプを獲得しましょう。",
    challenge_streak_label: "連続達成記録",
    challenge_btn_listen: "ネイティブ音声を聞く",
    challenge_completed_title: "🎉 今日の小さな勝利を達成！",
    challenge_completed_desc: "継続は力なり！今日の30秒スプリントを完了し、韓国語の実力が確実にステップアップしました。",
    challenge_streak_count: "日連続達成中 🔥",
    challenge_btn_share: "達成をシェアする",
    challenge_btn_retry: "もう一度練習する",
    challenge_share_copied: "達成記録をクリップボードにコピーしました！"
  },
  es: {
    brand_name: "Hangul Global",
    brand_tagline: "Domina el Coreano con Micropagos Web3 y Staking VIP",
    nav_alphabet: "Alfabeto Hangul",
    nav_curriculum: "Curso de 30 Días",
    nav_tutor: "Tutor de Voz IA",
    nav_pricing: "Precios ADA y VIP",
    nav_challenge: "Reto Diario de 30s",
    nav_connect_wallet: "Conectar Billetera Cardano",
    nav_connected: "Conectado",
    nav_vip_badge: "🌟 Staking VIP JOY/HOPE (Acceso 100% Gratuito)",
    hero_badge: "El Portal de Coreano de Próxima Generación para Ciudadanos Globales",
    hero_title_prefix: "Domina el Coreano Real en 30 Días con",
    hero_title_highlight: "Hangul Global y Web3",
    hero_title_suffix: "",
    hero_desc: "Diseñado específicamente para hispanohablantes, angloparlantes y japoneses. Aprende el alfabeto Hangul, diálogos de K-Dramas y desbloquea lecciones con Cardano (ADA) o delega en JOY/HOPE para acceso VIP 100% gratis.",
    hero_btn_start: "Comenzar Lecciones Gratis (Día 1~5)",
    hero_btn_alphabet: "Aprender Alfabeto Hangul (24 Letras)",
    hero_stat_lessons: "30 Días de Currículo",
    hero_stat_lessons_sub: "Día 1-5 Gratis / Día 6-30 Premium",
    hero_stat_web3: "2~5 ADA por Curso",
    hero_stat_web3_sub: "Micropagos Web3 Instantáneos",
    hero_stat_vip: "Pase VIP JOY / HOPE",
    hero_stat_vip_sub: "Acceso Gratuito para Delegadores",
    sec_features_title: "¿Por Qué Elegir Hangul Global?",
    sec_features_sub: "Fusionando la ciencia lingüística con tecnología de vanguardia Web3 y pronunciación por IA.",
    f1_title: "Lingüística Comparativa Nativa",
    f1_desc: "Comparaciones fonéticas y gramaticales directas adaptadas al español, inglés y japonés para acelerar la comprensión.",
    f2_title: "Micropagos Cardano (ADA)",
    f2_desc: "Sin suscripciones mensuales costosas ni comisiones de tarjetas. Paga 2~5 ADA por lección avanzada con tu billetera CIP-30.",
    f3_title: "Comunidad de Staking VIP JOY / HOPE",
    f3_desc: "¡Delega tus ADA a los pools JOY, JOY2, HOPE o HOPE2 para desbloquear el 100% del curso mientras ganas ~3.5% de rendimiento!",
    curriculum_title: "Currículo de 30 Días de Coreano Práctico",
    curriculum_sub: "Desde la lectura básica hasta diálogos de K-Drama, frases de supervivencia y etiqueta de negocios.",
    free_tier_badge: "Nivel Gratuito",
    premium_tier_badge: "Premium (ADA / VIP)",
    btn_start_lesson: "Iniciar Lección ➔",
    btn_unlock_ada: "Desbloquear por 2 ADA 🔓",
    btn_vip_unlocked: "VIP Desbloqueado ✨",
    tutor_title: "Tutor de Voz IA 1 a 1 24/7",
    tutor_sub: "Practica conversaciones reales y recibe correcciones de pronunciación al instante con nuestro tutor nativo de IA.",
    tutor_input_placeholder: "Escribe una frase en coreano o presiona el micrófono para hablar...",
    tutor_btn_send: "Enviar",
    tutor_voice_start: "Iniciar Modo de Voz",
    tutor_voice_stop: "Detener Micrófono",
    pricing_title: "Precios Web3 Transparentes y Justos",
    pricing_sub: "Elige micropagos flexibles en Cardano o disfruta de acceso gratuito permanente delegando en el stake pool.",
    pricing_free_title: "Nivel Inicial Gratuito",
    pricing_free_price: "0 ADA / $0",
    pricing_free_desc: "Tabla de 24 letras Hangul con audio nativo + Módulos de conversación de supervivencia Día 1 al 5.",
    pricing_free_btn: "Aprender Gratis Hoy",
    pricing_ada_title: "Micropagos Cardano",
    pricing_ada_price: "2~5 ADA / lección",
    pricing_ada_desc: "Desbloqueo instantáneo con billeteras CIP-30 de Cardano (Lace, Eternl, Nami). Acceso de por vida.",
    pricing_ada_btn: "Conectar Billetera y Pagar",
    pricing_vip_title: "Staking VIP JOY y HOPE",
    pricing_vip_price: "100% Gratis Siempre",
    pricing_vip_desc: "Delega tus ADA en los pools JOY, JOY2, HOPE o HOPE2. Recibe tus recompensas de época y accede a todo el curso gratis.",
    pricing_vip_btn: "Delegar en Cardano Sarangbang",
    anki_title: "Taladro Anki de Recuerdo Activo de 10 Rondas",
    anki_flip_hint: "Haz clic en la tarjeta o presiona 'Ver Respuesta' para voltear",
    anki_btn_know: "Me lo sé (+10)",
    anki_btn_review: "Repasar (+0)",
    anki_completed_title: "🎉 ¡Taladro Completado!",
    anki_score: "Puntuación Final de Recuerdo:",
    anki_btn_restart: "Reiniciar Taladro de 10 Tarjetas",
    dialogue_title: "Diálogo de la Vida Real",
    vocab_title: "Vocabulario Clave",
    grammar_title: "Explicación Gramatical y Puntos de Comparación",
    btn_listen: "Escuchar",
    challenge_badge: "Micro-Victorias de 30 Segundos",
    challenge_title: "Micro-Reto Diario de Hangul en 30 Segundos",
    challenge_subtitle: "¡Desarrolla el hábito de 0 a 1! Resuelve 3 preguntas rápidas, escucha pronunciación nativa y gana tu sello de racha diaria.",
    challenge_streak_label: "Racha Actual",
    challenge_btn_listen: "Escuchar Audio Nativo",
    challenge_completed_title: "🎉 ¡Micro-Victoria de Hoy Lograda!",
    challenge_completed_desc: "¡La constancia supera a la perfección! Has completado tu reto de 30 segundos y mejorado tu dominio del coreano.",
    challenge_streak_count: "Días de Racha 🔥",
    challenge_btn_share: "Compartir Mi Logro",
    challenge_btn_retry: "Practicar de Nuevo",
    challenge_share_copied: "¡Logro copiado al portapapeles!"
  },
  ko: {
    brand_name: "Hangul Global",
    brand_tagline: "Web3 마이크로 결제 & 스테이킹 VIP로 배우는 실전 한국어",
    nav_alphabet: "한글 자모음",
    nav_curriculum: "30일 완성 코스",
    nav_tutor: "AI 음성 튜터",
    nav_pricing: "ADA 결제 & VIP",
    nav_challenge: "30초 데일리 챌린지",
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
    btn_listen: "발음 듣기",
    challenge_badge: "하루 30초 성취감 퀘스트",
    challenge_title: "오늘의 30초 한글 마이크로 챌린지",
    challenge_subtitle: "완벽주의를 버리고 하루 30초로 0에서 1의 성취감을! 3가지 미니 퀴즈를 풀고 고음질 발음을 들으며 오늘의 출석 도장을 찍으세요.",
    challenge_streak_label: "연속 출석 기록",
    challenge_btn_listen: "원어민 음성 듣기",
    challenge_completed_title: "🎉 오늘의 한글 1승 달성!",
    challenge_completed_desc: "완벽함보다 중요한 것은 매일의 작은 실천입니다! 오늘의 30초 챌린지를 완료하고 한국어 마스터에 한 걸음 더 다가섰습니다.",
    challenge_streak_count: "일 연속 달성 중 🔥",
    challenge_btn_share: "나의 성취 공유하기",
    challenge_btn_retry: "다시 연습하기",
    challenge_share_copied: "성취 기록이 클립보드에 복사되었습니다!"
  }
};

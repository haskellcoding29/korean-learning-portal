export interface HangulLetter {
  char: string;
  name: string;
  type: 'consonant' | 'vowel' | 'double_consonant' | 'compound_vowel';
  ipa: string;
  roman: string;
  example_word: string;
  example_meaning: {
    en: string;
    ja: string;
    es: string;
    ko: string;
  };
  tips: {
    en: string;
    ja: string;
    es: string;
  };
}

export const BASIC_CONSONANTS: HangulLetter[] = [
  {
    char: "ㄱ",
    name: "기역 (Giyeok)",
    type: "consonant",
    ipa: "[k] / [g]",
    roman: "g / k",
    example_word: "가방 (gabang)",
    example_meaning: { en: "Bag", ja: "かばん", es: "Bolso / Mochila", ko: "가방" },
    tips: {
      en: "Sounds like 'g' in 'go' between vowels, and 'k' at the beginning of a word.",
      ja: "語頭では清音の「カ行」、母音間では濁音の「ガ行」に近い発音になります。",
      es: "Suena como la 'g' suave de 'gato' entre vocales, o 'k' suave al inicio."
    }
  },
  {
    char: "ㄴ",
    name: "니은 (Nieun)",
    type: "consonant",
    ipa: "[n]",
    roman: "n",
    example_word: "나무 (namu)",
    example_meaning: { en: "Tree", ja: "木", es: "Árbol", ko: "나무" },
    tips: {
      en: "Pronounced just like the English 'n' in 'nose'. Tongue touches upper teeth ridge.",
      ja: "日本語の「ナ行」と全く同じです。舌先を上の歯茎につけます。",
      es: "Idéntica a la 'n' del español en 'nube'. La punta de la lengua toca el paladar superior."
    }
  },
  {
    char: "ㄷ",
    name: "디귿 (Digeut)",
    type: "consonant",
    ipa: "[t] / [d]",
    roman: "d / t",
    example_word: "다리 (dari)",
    example_meaning: { en: "Bridge / Leg", ja: "橋 / 足", es: "Puente / Pierna", ko: "다리" },
    tips: {
      en: "Soft 'd' or 't'. Never heavily aspirated like English 'tea'.",
      ja: "語頭では「タ行」、母音間では「ダ行」に変化します。",
      es: "Suave como la 'd' de 'dedo' o 't' suave. Sin aspiración fuerte."
    }
  },
  {
    char: "ㄹ",
    name: "리을 (Rieul)",
    type: "consonant",
    ipa: "[ɾ] / [l]",
    roman: "r / l",
    example_word: "라디오 (radio)",
    example_meaning: { en: "Radio", ja: "ラジオ", es: "Radio", ko: "라디오" },
    tips: {
      en: "A light flap 'r' between vowels (like 'butter'), and a clear 'l' at the end of syllables.",
      ja: "語頭・母音間では「ラ行」の軽い弾き音、パッチム（終声）では「L」になります。",
      es: "Similar a la 'r' suave española en 'pero'. Al final de sílaba suena como 'l'."
    }
  },
  {
    char: "ㅁ",
    name: "미음 (Mieum)",
    type: "consonant",
    ipa: "[m]",
    roman: "m",
    example_word: "모자 (moja)",
    example_meaning: { en: "Hat / Cap", ja: "帽子", es: "Sombrero / Gorra", ko: "모자" },
    tips: {
      en: "Shaped like closed lips! Pronounced like 'm' in 'mother'.",
      ja: "口を閉じる形を模しています。日本語の「マ行」と同じです。",
      es: "Representa los labios cerrados. Idéntica a la 'm' en 'mamá'."
    }
  },
  {
    char: "ㅂ",
    name: "비읍 (Bieup)",
    type: "consonant",
    ipa: "[p] / [b]",
    roman: "b / p",
    example_word: "바다 (bada)",
    example_meaning: { en: "Sea / Ocean", ja: "海", es: "Mar", ko: "바다" },
    tips: {
      en: "Soft 'b' or 'p'. Relax your lips without bursting air.",
      ja: "語頭では「パ行」寄り、母音間では「バ行」に変化します。",
      es: "Suena como la 'b' en 'barco' entre vocales, o 'p' suave al inicio."
    }
  },
  {
    char: "ㅅ",
    name: "시옷 (Siot)",
    type: "consonant",
    ipa: "[s] / [ɕ]",
    roman: "s / sh",
    example_word: "사랑 (sarang)",
    example_meaning: { en: "Love", ja: "愛", es: "Amor", ko: "사랑" },
    tips: {
      en: "Sounds like 's' in 'sun'. Before 'ㅣ' (i) or 'ㅑ, ㅕ, ㅛ, ㅠ', it becomes 'sh'.",
      ja: "基本は「サ行」。「い・や・ゆ・よ」の前では「シャ・シ・シュ・ショ」になります。",
      es: "Suena como la 's' de 'sol'. Delante de 'i' o semivocales suena como 'sh'."
    }
  },
  {
    char: "ㅇ",
    name: "이응 (Ieung)",
    type: "consonant",
    ipa: "[Ø] / [ŋ]",
    roman: "silent / ng",
    example_word: "아이 (ai)",
    example_meaning: { en: "Child / Baby", ja: "子ども", es: "Niño / Bebé", ko: "아이" },
    tips: {
      en: "Silent placeholder when at the top of a block! Sounds like 'ng' in 'sing' at the bottom.",
      ja: "初声（頭）にある時は無音（母音のみ発音）。終声（パッチム）では鼻音「ng」になります。",
      es: "Es muda al principio de la sílaba. Al final de la sílaba suena como 'ng' en 'canto'."
    }
  },
  {
    char: "ㅈ",
    name: "지읒 (Jieut)",
    type: "consonant",
    ipa: "[tɕ] / [dʑ]",
    roman: "j / ch",
    example_word: "지도 (jido)",
    example_meaning: { en: "Map", ja: "地図", es: "Mapa", ko: "지도" },
    tips: {
      en: "Soft 'j' or 'ch'. Tongue flat against the hard palate.",
      ja: "語頭では「チャ行」寄り、母音間では「ジャ行」になります。",
      es: "Suena como la 'ch' suave o la 'y' argentina suave."
    }
  },
  {
    char: "ㅊ",
    name: "치읓 (Chieut)",
    type: "consonant",
    ipa: "[tɕʰ]",
    roman: "ch",
    example_word: "친구 (chingu)",
    example_meaning: { en: "Friend", ja: "友達", es: "Amigo/a", ko: "친구" },
    tips: {
      en: "Strong aspirated 'ch' with a sharp burst of air (like in 'cheese').",
      ja: "息を強く吐き出す有気音の「チャ行」です。",
      es: "Es una 'ch' fuerte y aspirada, expulsando aire con energía."
    }
  },
  {
    char: "ㅋ",
    name: "키읔 (Kieuk)",
    type: "consonant",
    ipa: "[kʰ]",
    roman: "k",
    example_word: "커피 (keopi)",
    example_meaning: { en: "Coffee", ja: "コーヒー", es: "Café", ko: "커피" },
    tips: {
      en: "Aspirated 'k' with a puff of air, like 'key' or 'king'.",
      ja: "息を強く押し出す有気音の「カ行」です。",
      es: "Es una 'k' fuertemente aspirada con salida visible de aire."
    }
  },
  {
    char: "ㅌ",
    name: "티읕 (Tieut)",
    type: "consonant",
    ipa: "[tʰ]",
    roman: "t",
    example_word: "토마토 (tomato)",
    example_meaning: { en: "Tomato", ja: "トマト", es: "Tomate", ko: "토마토" },
    tips: {
      en: "Aspirated 't' with a strong puff of air, like 'top'.",
      ja: "息を強く押し出す有気音の「タ行」です。",
      es: "Es una 't' fuertemente aspirada (como en inglés 'take')."
    }
  },
  {
    char: "ㅍ",
    name: "피읖 (Pieup)",
    type: "consonant",
    ipa: "[pʰ]",
    roman: "p",
    example_word: "피자 (pija)",
    example_meaning: { en: "Pizza", ja: "ピザ", es: "Pizza", ko: "피자" },
    tips: {
      en: "Aspirated 'p' with an explosive puff of air, like 'park'.",
      ja: "息を強く破裂させる有気音の「パ行」です。",
      es: "Es una 'p' fuertemente aspirada con explosión de aire."
    }
  },
  {
    char: "ㅎ",
    name: "히읗 (Hieut)",
    type: "consonant",
    ipa: "[h]",
    roman: "h",
    example_word: "하늘 (haneul)",
    example_meaning: { en: "Sky", ja: "空", es: "Cielo", ko: "하늘" },
    tips: {
      en: "Gentle 'h' sound like in 'happy' or 'home'.",
      ja: "日本語の「ハ行」と同じく、息を吐きながら発音します。",
      es: "Suena como la 'j' suave latinoamericana o la 'h' del inglés 'hotel'."
    }
  }
];

export const BASIC_VOWELS: HangulLetter[] = [
  {
    char: "ㅏ",
    name: "아 (A)",
    type: "vowel",
    ipa: "[a]",
    roman: "a",
    example_word: "아버지 (abeoji)",
    example_meaning: { en: "Father", ja: "お父さん", es: "Padre", ko: "아버지" },
    tips: {
      en: "Open mouth wide: 'ah' as in 'father'.",
      ja: "口を大きく開けて日本語の「ア」と発音します。",
      es: "Abre bien la boca, igual que la 'a' española."
    }
  },
  {
    char: "ㅓ",
    name: "어 (Eo)",
    type: "vowel",
    ipa: "[ʌ]",
    roman: "eo",
    example_word: "어머니 (eomeoni)",
    example_meaning: { en: "Mother", ja: "お母さん", es: "Madre", ko: "어머니" },
    tips: {
      en: "Crucial! Drop your jaw, open throat: like 'uh' in 'sun' or 'cup'.",
      ja: "重要！口を「ア」の形に開けて喉の奥から「オ」と発音します。",
      es: "¡Muy importante! Abre la boca como para decir 'a', pero emite una 'o' desde la garganta."
    }
  },
  {
    char: "ㅗ",
    name: "오 (O)",
    type: "vowel",
    ipa: "[o]",
    roman: "o",
    example_word: "오빠 (oppa)",
    example_meaning: { en: "Older brother / Boyfriend", ja: "お兄さん", es: "Hermano mayor / Pareja", ko: "오빠" },
    tips: {
      en: "Round your lips tightly into an 'O' shape, like in 'boat'.",
      ja: "唇を前に突き出して丸くすぼめて「オ」と発音します。",
      es: "Redondea los labios hacia adelante en un círculo perfecto como la 'o' española."
    }
  },
  {
    char: "ㅜ",
    name: "우 (U)",
    type: "vowel",
    ipa: "[u]",
    roman: "u",
    example_word: "우리 (uri)",
    example_meaning: { en: "We / Our", ja: "私たち", es: "Nosotros", ko: "우리" },
    tips: {
      en: "Tight rounded lips, like 'oo' in 'moon'.",
      ja: "唇をすぼめて「ウ」と発音します。",
      es: "Labios apretados y redondeados hacia afuera, como la 'u' en 'uva'."
    }
  },
  {
    char: "ㅡ",
    name: "으 (Eu)",
    type: "vowel",
    ipa: "[ɯ]",
    roman: "eu",
    example_word: "음악 (eum-ak)",
    example_meaning: { en: "Music", ja: "音楽", es: "Música", ko: "음악" },
    tips: {
      en: "Smile wide! Pull lip corners back and say 'uh' without rounding lips.",
      ja: "口を横に大きく引いて（イの口の形）「ウ」と発音します。",
      es: "Sonríe ampliamente estirando las comisuras hacia los lados y pronuncia 'u' sin redondear los labios."
    }
  },
  {
    char: "ㅣ",
    name: "이 (I)",
    type: "vowel",
    ipa: "[i]",
    roman: "i",
    example_word: "이름 (ireum)",
    example_meaning: { en: "Name", ja: "名前", es: "Nombre", ko: "이름" },
    tips: {
      en: "Like 'ee' in 'see' or 'machine'.",
      ja: "日本語の「イ」と全く同じです。",
      es: "Idéntica a la 'i' en 'isla'."
    }
  }
];

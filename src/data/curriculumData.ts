export interface LessonItem {
  day: number;
  tier: 'free' | 'premium';
  priceAda: number;
  title: {
    en: string;
    ja: string;
    es: string;
    ko: string;
  };
  category: {
    en: string;
    ja: string;
    es: string;
    ko: string;
  };
  summary: {
    en: string;
    ja: string;
    es: string;
    ko: string;
  };
  dialogue: Array<{
    speaker: string;
    role: { en: string; ja: string; es: string };
    korean: string;
    roman: string;
    translations: { en: string; ja: string; es: string; ko: string };
  }>;
  vocabulary: Array<{
    korean: string;
    roman: string;
    meaning: { en: string; ja: string; es: string; ko: string };
  }>;
  grammarNotes: Array<{
    point: string;
    explanation: { en: string; ja: string; es: string; ko: string };
    example: string;
  }>;
  ankiCards: Array<{
    front: string;
    pronunciation: string;
    back: { en: string; ja: string; es: string; ko: string };
  }>;
}

export const CURRICULUM_LESSONS: LessonItem[] = [
  {
    "day": 1,
    "title": {
      "en": "Day 1: Essential Greetings & Politeness",
      "ja": "Day 1: 基本の挨拶と丁寧な表現",
      "es": "Día 1: Saludos Esenciales y Cortesía",
      "ko": "Day 1: 필수 한국어 인사와 존댓말의 기초"
    },
    "category": {
      "en": "Survival Korean",
      "ja": "サバイバル",
      "es": "Supervivencia",
      "ko": "생존 한국어"
    },
    "summary": {
      "en": "Say hello, thank you, and goodbye naturally like a native Seoul speaker.",
      "ja": "ソウルのネイティブのように自然な挨拶と感謝、別れの言葉を習得します。",
      "es": "Aprende a saludar, agradecer y despedirte como un hablante nativo.",
      "ko": "자연스러운 안녕, 감사, 작별 인사를 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "민호 (Minho)",
        "role": {
          "en": "Korean Native",
          "ja": "韓国人",
          "es": "Coreano"
        },
        "korean": "안녕하세요! 만나서 반가워요.",
        "roman": "Annyeonghaseyo! Mannaseo bangawoyo.",
        "translations": {
          "en": "Hello! Nice to meet you.",
          "ja": "こんにちは！お会いできて嬉しいです。",
          "es": "¡Hola! Mucho gusto en conocerte.",
          "ko": "안녕하세요! 만나서 반가워요."
        }
      },
      {
        "speaker": "알렉스 (Alex)",
        "role": {
          "en": "Student",
          "ja": "留学生",
          "es": "Estudiante"
        },
        "korean": "안녕하세요! 저는 알렉스예요. 감사합니다.",
        "roman": "Annyeonghaseyo! Jeoneun Alex-yeyo. Gamsahamnida.",
        "translations": {
          "en": "Hello! I am Alex. Thank you.",
          "ja": "こんにちは！私はアレックスです。ありがとうございます。",
          "es": "¡Hola! Yo soy Alex. Muchas gracias.",
          "ko": "안녕하세요! 저는 알렉스예요. 감사합니다."
        }
      },
      {
        "speaker": "민호 (Minho)",
        "role": {
          "en": "Korean Native",
          "ja": "韓国人",
          "es": "Coreano"
        },
        "korean": "네, 안녕히 가세요!",
        "roman": "Ne, annyeonghi gaseyo!",
        "translations": {
          "en": "Yes, goodbye! (Go peacefully)",
          "ja": "はい、さようなら！（お気をつけて）",
          "es": "¡Sí, adiós! (Que te vaya bien)",
          "ko": "네, 안녕히 가세요!"
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "안녕하세요",
        "roman": "Annyeonghaseyo",
        "meaning": {
          "en": "Hello / Good day",
          "ja": "こんにちは",
          "es": "Hola / Buenos días",
          "ko": "안녕하세요"
        }
      },
      {
        "korean": "감사합니다",
        "roman": "Gamsahamnida",
        "meaning": {
          "en": "Thank you (Formal)",
          "ja": "ありがとうございます",
          "es": "Muchas gracias",
          "ko": "감사합니다"
        }
      },
      {
        "korean": "반가워요",
        "roman": "Bangawoyo",
        "meaning": {
          "en": "Nice to meet you",
          "ja": "お会いできて嬉しいです",
          "es": "Mucho gusto",
          "ko": "반가워요"
        }
      },
      {
        "korean": "안녕히 가세요",
        "roman": "Annyeonghi gaseyo",
        "meaning": {
          "en": "Goodbye (To someone leaving)",
          "ja": "さようなら（去る人へ）",
          "es": "Adiós (Al que se va)",
          "ko": "안녕히 가세요"
        }
      },
      {
        "korean": "안녕히 계세요",
        "roman": "Annyeonghi gyeseyo",
        "meaning": {
          "en": "Goodbye (To someone staying)",
          "ja": "さようなら（残る人へ）",
          "es": "Adiós (Al que se queda)",
          "ko": "안녕히 계세요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "-요 / -습니다 (Politeness Levels)",
        "explanation": {
          "en": "Adding '-요' (yo) creates standard polite speech, while '-습니다' (seumnida) is formal.",
          "ja": "「〜요（ヨ）」は丁寧な日常敬語（〜です・ます）、「〜습니다（スムニダ）」はフォーマル敬語です。",
          "es": "Añadir '-요' (yo) crea el nivel educado estándar, y '-습니다' (seumnida) es formal.",
          "ko": "격식체와 비격식 존댓말의 차이를 배웁니다."
        },
        "example": "감사합니다 (Formal) / 고마워요 (Standard Polite)"
      }
    ],
    "ankiCards": [
      {
        "front": "안녕하세요",
        "pronunciation": "Annyeonghaseyo",
        "back": {
          "en": "Hello / Good day",
          "ja": "こんにちは",
          "es": "Hola / Buenos días",
          "ko": "안녕하세요"
        }
      },
      {
        "front": "감사합니다",
        "pronunciation": "Gamsahamnida",
        "back": {
          "en": "Thank you",
          "ja": "ありがとうございます",
          "es": "Muchas gracias",
          "ko": "감사합니다"
        }
      },
      {
        "front": "만나서 반가워요",
        "pronunciation": "Mannaseo bangawoyo",
        "back": {
          "en": "Nice to meet you",
          "ja": "お会いできて嬉しいです",
          "es": "Mucho gusto",
          "ko": "만나서 반가워요"
        }
      },
      {
        "front": "안녕히 가세요",
        "pronunciation": "Annyeonghi gaseyo",
        "back": {
          "en": "Goodbye (To person leaving)",
          "ja": "さようなら（去る人へ）",
          "es": "Adiós (Al que se va)",
          "ko": "안녕히 가세요"
        }
      },
      {
        "front": "안녕히 계세요",
        "pronunciation": "Annyeonghi gyeseyo",
        "back": {
          "en": "Goodbye (To person staying)",
          "ja": "さようなら（残る人へ）",
          "es": "Adiós (Al que se queda)",
          "ko": "안녕히 계세요"
        }
      }
    ],
    "tier": "free",
    "priceAda": 0
  },
  {
    "day": 2,
    "title": {
      "en": "Day 2: Ordering at Cafes & Restaurants",
      "ja": "Day 2: カフェや食堂でスムーズに注文する",
      "es": "Día 2: Pedir en Cafeterías y Restaurantes",
      "ko": "Day 2: 한국 카페와 식당에서 주문하기"
    },
    "category": {
      "en": "Daily Life",
      "ja": "日常会話",
      "es": "Vida Cotidiana",
      "ko": "일상 생활"
    },
    "summary": {
      "en": "Order Iced Americano, ask for prices, and request recommendations.",
      "ja": "アイスアメリカーノの注文や値段の聞き方をマスターします。",
      "es": "Pide café americano helado y pregunta precios con naturalidad.",
      "ko": "카페와 식당에서 자주 쓰는 필수 주문 표현을 배웁니다."
    },
    "dialogue": [
      {
        "speaker": "소피아 (Sofia)",
        "role": {
          "en": "Customer",
          "ja": "客",
          "es": "Cliente"
        },
        "korean": "사장님, 아이스 아메리카노 한 잔 주세요!",
        "roman": "Sajangnim, aiseu amerikano han jan juseyo!",
        "translations": {
          "en": "Excuse me/Boss, one iced Americano please!",
          "ja": "店長さん、アイスアメリカーノ1杯ください！",
          "es": "¡Disculpe, un café americano helado por favor!",
          "ko": "사장님, 아이스 아메리카노 한 잔 주세요!"
        }
      },
      {
        "speaker": "바리스타 (Barista)",
        "role": {
          "en": "Barista",
          "ja": "店員",
          "es": "Barista"
        },
        "korean": "네! 테이크아웃 하실 건가요?",
        "roman": "Ne! Teikeu-aut hasil geon-gayo?",
        "translations": {
          "en": "Sure! Is it for takeout?",
          "ja": "はい！お持ち帰りにされますか？",
          "es": "¡Claro! ¿Es para llevar?",
          "ko": "네! 테이크아웃 하실 건가요?"
        }
      },
      {
        "speaker": "소피아 (Sofia)",
        "role": {
          "en": "Customer",
          "ja": "客",
          "es": "Cliente"
        },
        "korean": "네, 테이크아웃 할게요. 얼마예요?",
        "roman": "Ne, teikeu-aut halgeyo. Eolmayeyo?",
        "translations": {
          "en": "Yes, takeout please. How much is it?",
          "ja": "はい、持ち帰りでお願いします。いくらですか？",
          "es": "Sí, para llevar. ¿Cuánto es?",
          "ko": "네, 테이크아웃 할게요. 얼마예요?"
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "사장님",
        "roman": "Sajangnim",
        "meaning": {
          "en": "Boss / Store Owner (Polite call)",
          "ja": "店長さん / 社長さん",
          "es": "Jefe / Dueño (Llamada educada)",
          "ko": "사장님"
        }
      },
      {
        "korean": "주세요",
        "roman": "Juseyo",
        "meaning": {
          "en": "Please give me...",
          "ja": "〜をください",
          "es": "Por favor deme...",
          "ko": "주세요"
        }
      },
      {
        "korean": "얼마예요?",
        "roman": "Eolmayeyo?",
        "meaning": {
          "en": "How much is it?",
          "ja": "いくらですか？",
          "es": "¿Cuánto cuesta?",
          "ko": "얼마예요?"
        }
      },
      {
        "korean": "테이크아웃",
        "roman": "Teikeu-aut",
        "meaning": {
          "en": "Takeout / To go",
          "ja": "テイクアウト",
          "es": "Para llevar",
          "ko": "테이크아웃"
        }
      },
      {
        "korean": "맛있어요",
        "roman": "Masisseoyo",
        "meaning": {
          "en": "It is delicious!",
          "ja": "美味しいです！",
          "es": "¡Está delicioso!",
          "ko": "맛있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Noun + 주세요 (Please give me [Noun])",
        "explanation": {
          "en": "The most versatile phrase in Korea. Just attach '주세요' (juseyo) to any item.",
          "ja": "名詞の後ろに「주세요（ジュセヨ）」を付けるだけで注文できます。",
          "es": "Añade '주세요' (juseyo) después de cualquier sustantivo para pedirlo.",
          "ko": "명사 뒤에 붙여 요청하는 만능 표현입니다."
        },
        "example": "물 주세요 (Water please) / 메뉴판 주세요 (Menu please)"
      }
    ],
    "ankiCards": [
      {
        "front": "이거 주세요",
        "pronunciation": "Igeo juseyo",
        "back": {
          "en": "Please give me this",
          "ja": "これをください",
          "es": "Deme esto por favor",
          "ko": "이거 주세요"
        }
      },
      {
        "front": "얼마예요?",
        "pronunciation": "Eolmayeyo?",
        "back": {
          "en": "How much is it?",
          "ja": "いくらですか？",
          "es": "¿Cuánto cuesta?",
          "ko": "얼마예요?"
        }
      },
      {
        "front": "물 좀 주세요",
        "pronunciation": "Mul jom juseyo",
        "back": {
          "en": "Water please",
          "ja": "お水をください",
          "es": "Agua por favor",
          "ko": "물 좀 주세요"
        }
      },
      {
        "front": "맛있게 드세요",
        "pronunciation": "Masitge deuseyo",
        "back": {
          "en": "Enjoy your meal!",
          "ja": "美味しく召し上がってください",
          "es": "¡Buen provecho!",
          "ko": "맛있게 드세요"
        }
      }
    ],
    "tier": "free",
    "priceAda": 0
  },
  {
    "day": 3,
    "title": {
      "en": "Day 3: Directions & Public Transportation",
      "ja": "Day 3: 道案内と地下鉄・タクシーの乗り方",
      "es": "Día 3: Direcciones y Transporte Público",
      "ko": "Day 3: 길찾기와 대중교통 이용하기"
    },
    "category": {
      "en": "Travel & Transit",
      "ja": "交通・移動",
      "es": "Transporte",
      "ko": "교통 및 길찾기"
    },
    "summary": {
      "en": "Ask where the subway station is and tell taxi drivers your destination.",
      "ja": "地下鉄の駅の場所を尋ね、タクシーで行き先を伝えます。",
      "es": "Pregunta dónde está el metro e indícale tu destino al taxista.",
      "ko": "지하철역 위치와 택시 목적지 전달 표현을 배웁니다."
    },
    "dialogue": [
      {
        "speaker": "다니엘 (Daniel)",
        "role": {
          "en": "Traveler",
          "ja": "旅行者",
          "es": "Viajero"
        },
        "korean": "실례합니다. 홍대입구역이 어디예요?",
        "roman": "Sillyehamnida. Hongdae-ipgu-yeogi eodiyeyo?",
        "translations": {
          "en": "Excuse me. Where is Hongik University Station?",
          "ja": "すみません。弘大入口駅はどこですか？",
          "es": "Disculpe. ¿Dónde está la estación de Hongdae?",
          "ko": "실례합니다. 홍대입구역이 어디예요?"
        }
      },
      {
        "speaker": "시민 (Citizen)",
        "role": {
          "en": "Passerby",
          "ja": "通りすがりの人",
          "es": "Transeúnte"
        },
        "korean": "저쪽으로 곧장 5분만 걸어가시면 돼요.",
        "roman": "Jeojjogeuro gotjang obunman georeogasimyeon dwaeyo.",
        "translations": {
          "en": "Just walk straight that way for 5 minutes.",
          "ja": "あちらへまっすぐ5分歩けばありますよ。",
          "es": "Solo camine derecho hacia allá por 5 minutos.",
          "ko": "저쪽으로 곧장 5분만 걸어가시면 돼요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "실례합니다",
        "roman": "Sillyehamnida",
        "meaning": {
          "en": "Excuse me",
          "ja": "すみません",
          "es": "Disculpe / Con permiso",
          "ko": "실례합니다"
        }
      },
      {
        "korean": "어디예요?",
        "roman": "Eodiyeyo?",
        "meaning": {
          "en": "Where is it?",
          "ja": "どこですか？",
          "es": "¿Dónde está?",
          "ko": "어디예요?"
        }
      },
      {
        "korean": "지하철역",
        "roman": "Jihacheol-yeok",
        "meaning": {
          "en": "Subway Station",
          "ja": "地下鉄駅",
          "es": "Estación de metro",
          "ko": "지하철역"
        }
      },
      {
        "korean": "여기서 세워주세요",
        "roman": "Yeogiseo sewojuseyo",
        "meaning": {
          "en": "Please stop here (Taxi)",
          "ja": "ここで降ろしてください",
          "es": "Por favor pare aquí",
          "ko": "여기서 세워주세요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Noun + 어디예요? (Where is [Noun]?)",
        "explanation": {
          "en": "Attach '어디예요?' to any location name to ask for directions.",
          "ja": "場所の名詞に「어디예요?（オディエヨ？）」を付けるだけで場所を聞けます。",
          "es": "Añade '어디예요?' a cualquier lugar para preguntar dónde queda.",
          "ko": "장소를 묻는 가장 기본적이고 핵심적인 의문형입니다."
        },
        "example": "화장실 어디예요? (Where is the restroom?)"
      }
    ],
    "ankiCards": [
      {
        "front": "실례합니다",
        "pronunciation": "Sillyehamnida",
        "back": {
          "en": "Excuse me",
          "ja": "すみません",
          "es": "Disculpe",
          "ko": "실례합니다"
        }
      },
      {
        "front": "어디예요?",
        "pronunciation": "Eodiyeyo?",
        "back": {
          "en": "Where is it?",
          "ja": "どこですか？",
          "es": "¿Dónde está?",
          "ko": "어디예요?"
        }
      },
      {
        "front": "여기서 세워주세요",
        "pronunciation": "Yeogiseo sewojuseyo",
        "back": {
          "en": "Please stop here",
          "ja": "ここで降ろしてください",
          "es": "Pare aquí por favor",
          "ko": "여기서 세워주세요"
        }
      }
    ],
    "tier": "free",
    "priceAda": 0
  },
  {
    "day": 4,
    "title": {
      "en": "Day 4: Korean Number Systems & Pricing",
      "ja": "Day 4: 韓国語の数字体系と値段の計算",
      "es": "Día 4: Los Dos Sistemas Numéricos y Precios",
      "ko": "Day 4: 한국의 숫자 체계와 가격 계산하기"
    },
    "category": {
      "en": "Numbers & Shopping",
      "ja": "数字・買い物",
      "es": "Números",
      "ko": "숫자와 쇼핑"
    },
    "summary": {
      "en": "Master Sino-Korean (prices/dates) vs Native Korean (counting items/hours).",
      "ja": "漢数字（値段・日付）と固有数字（個数・時間）の違いをマスター。",
      "es": "Domina los números sino-coreanos (precios) y nativos (cantidades).",
      "ko": "한자어 수사와 고유어 수사의 완벽한 구분법을 익힙니다."
    },
    "dialogue": [
      {
        "speaker": "마리아 (Maria)",
        "role": {
          "en": "Shopper",
          "ja": "買い物客",
          "es": "Compradora"
        },
        "korean": "이 티셔츠 얼마예요?",
        "roman": "I tisyeocheu eolmayeyo?",
        "translations": {
          "en": "How much is this T-shirt?",
          "ja": "このTシャツはいくらですか？",
          "es": "¿Cuánto cuesta esta camiseta?",
          "ko": "이 티셔츠 얼마예요?"
        }
      },
      {
        "speaker": "직원 (Staff)",
        "role": {
          "en": "Clerk",
          "ja": "店員",
          "es": "Vendedora"
        },
        "korean": "이만 오천 원이에요. 두 장 사시면 할인해 드려요!",
        "roman": "Iman ocheon-won-ieyo. Du jang sasimyeon harinhae deuryeoyo!",
        "translations": {
          "en": "It is 25,000 KRW. We give a discount if you buy two!",
          "ja": "2万5千ウォンです。2枚買われたら割引しますよ！",
          "es": "Son 25,000 wones. ¡Hacemos descuento si lleva dos!",
          "ko": "이만 오천 원이에요. 두 장 사시면 할인해 드려요!"
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "일, 이, 삼, 사, 오",
        "roman": "Il, i, sam, sa, o",
        "meaning": {
          "en": "1, 2, 3, 4, 5 (Sino)",
          "ja": "一、二、三、四、五",
          "es": "1, 2, 3, 4, 5 (Sino)",
          "ko": "일, 이, 삼, 사, 오"
        }
      },
      {
        "korean": "하나, 둘, 셋, 넷, 다섯",
        "roman": "Hana, dul, set, net, daseot",
        "meaning": {
          "en": "1, 2, 3, 4, 5 (Native)",
          "ja": "ひとつ、ふたつ、みっつ...",
          "es": "1, 2, 3, 4, 5 (Nativo)",
          "ko": "하나, 둘, 셋, 넷, 다섯"
        }
      },
      {
        "korean": "원",
        "roman": "Won",
        "meaning": {
          "en": "KRW (Currency)",
          "ja": "ウォン（通貨）",
          "es": "Won (Moneda)",
          "ko": "원"
        }
      },
      {
        "korean": "할인",
        "roman": "Harin",
        "meaning": {
          "en": "Discount",
          "ja": "割引",
          "es": "Descuento",
          "ko": "할인"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Sino-Korean (Money) vs Native Korean (Counters)",
        "explanation": {
          "en": "Use Sino-Korean for money (e.g., 만 원 = 10,000 won) and Native Korean for item counters (e.g., 두 개 = two items).",
          "ja": "お金の計算には漢数字（マンウォン）、個数を数える時は固有数字（トゥゲ＝2個）を使います。",
          "es": "Usa sino-coreano para dinero (man-won) y nativo para contar cosas (du-gae).",
          "ko": "가격 계산과 물건 세기의 수사 구분 규칙을 배웁니다."
        },
        "example": "만원 (10,000 won) / 커피 한 잔 (One cup of coffee)"
      }
    ],
    "ankiCards": [
      {
        "front": "이만 오천 원",
        "pronunciation": "Iman ocheon won",
        "back": {
          "en": "25,000 KRW",
          "ja": "2万5千ウォン",
          "es": "25,000 Wones",
          "ko": "이만 오천 원"
        }
      },
      {
        "front": "한 개 / 두 개",
        "pronunciation": "Han gae / Du gae",
        "back": {
          "en": "One item / Two items",
          "ja": "1個 / 2個",
          "es": "Un objeto / Dos objetos",
          "ko": "한 개 / 두 개"
        }
      }
    ],
    "tier": "free",
    "priceAda": 0
  },
  {
    "day": 5,
    "title": {
      "en": "Day 5: Survival Shopping & Payment Expressions",
      "ja": "Day 5: ショッピング・決済と緊急時のお願い",
      "es": "Día 5: Compras, Pagos y Pedir Ayuda",
      "ko": "Day 5: 쇼핑 결제와 긴급 도움 요청하기"
    },
    "category": {
      "en": "Shopping & Crisis",
      "ja": "買い物・緊急",
      "es": "Compras y Ayuda",
      "ko": "쇼핑 및 긴급 표현"
    },
    "summary": {
      "en": "Ask for receipts, pay with cards or crypto, and request polite discounts.",
      "ja": "領収書の依頼、カード決済、親しみやすい割引交渉を学びます。",
      "es": "Pide recibo, paga con tarjeta y pide descuentos amigablemente.",
      "ko": "영수증 요청과 카드 결제 및 가격 협상 표현을 익힙니다."
    },
    "dialogue": [
      {
        "speaker": "카를로스 (Carlos)",
        "role": {
          "en": "Shopper",
          "ja": "客",
          "es": "Comprador"
        },
        "korean": "카드 결제 되나요? 영수증도 주세요.",
        "roman": "Kadeu gyeolje doenayo? Yeongsujeungdo juseyo.",
        "translations": {
          "en": "Can I pay by card? Please give me a receipt too.",
          "ja": "カード決済はできますか？領収書もください。",
          "es": "¿Puedo pagar con tarjeta? Deme el recibo también por favor.",
          "ko": "카드 결제 되나요? 영수증도 주세요."
        }
      },
      {
        "speaker": "사장님 (Owner)",
        "role": {
          "en": "Owner",
          "ja": "店主",
          "es": "Dueño"
        },
        "korean": "그럼요! 카드 꽂아주세요. 조금 깎아드렸어요!",
        "roman": "Geureomyo! Kadeu kkojajuseyo. Jogeum kkakka-deuryeosseoyo!",
        "translations": {
          "en": "Of course! Please insert your card. I gave you a small discount!",
          "ja": "もちろんです！カードを挿してください。少しおまけしておきましたよ！",
          "es": "¡Por supuesto! Inserte la tarjeta. ¡Le hice un pequeño descuento!",
          "ko": "그럼요! 카드 꽂아주세요. 조금 깎아드렸어요!"
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "카드 결제",
        "roman": "Kadeu gyeolje",
        "meaning": {
          "en": "Card payment",
          "ja": "カード決済",
          "es": "Pago con tarjeta",
          "ko": "카드 결제"
        }
      },
      {
        "korean": "영수증",
        "roman": "Yeongsujeung",
        "meaning": {
          "en": "Receipt",
          "ja": "領収書 / レシート",
          "es": "Recibo / Factura",
          "ko": "영수증"
        }
      },
      {
        "korean": "깎아주세요",
        "roman": "Kkakka-juseyo",
        "meaning": {
          "en": "Please give me a discount",
          "ja": "まけてください / 割引してください",
          "es": "Haga un descuento por favor",
          "ko": "깎아주세요"
        }
      },
      {
        "korean": "화장실",
        "roman": "Hwajangsil",
        "meaning": {
          "en": "Restroom / Bathroom",
          "ja": "お手洗い / トイレ",
          "es": "Baño / Aseo",
          "ko": "화장실"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Verb stem + 되나요? (Is it possible to...?)",
        "explanation": {
          "en": "Ask if an action is available or allowed politely.",
          "ja": "「〜できますか？ / 可能ですか？」と丁寧に可能かどうかを尋ねる表現です。",
          "es": "Se usa para preguntar si algo es posible o está permitido educadamente.",
          "ko": "가능 여부를 정중하게 묻는 실전 표현입니다."
        },
        "example": "포장 되나요? (Is takeout possible?)"
      }
    ],
    "ankiCards": [
      {
        "front": "카드 결제 되나요?",
        "pronunciation": "Kadeu gyeolje doenayo?",
        "back": {
          "en": "Can I pay by card?",
          "ja": "カード決済はできますか？",
          "es": "¿Se puede pagar con tarjeta?",
          "ko": "카드 결제 되나요?"
        }
      },
      {
        "front": "영수증 주세요",
        "pronunciation": "Yeongsujeung juseyo",
        "back": {
          "en": "Receipt please",
          "ja": "レシートをください",
          "es": "El recibo por favor",
          "ko": "영수증 주세요"
        }
      },
      {
        "front": "화장실이 어디예요?",
        "pronunciation": "Hwajangsiri eodiyeyo?",
        "back": {
          "en": "Where is the restroom?",
          "ja": "トイレはどこですか？",
          "es": "¿Dónde está el baño?",
          "ko": "화장실이 어디예요?"
        }
      }
    ],
    "tier": "free",
    "priceAda": 0
  },
  {
    "day": 6,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 6: K-Drama Iconic Lines & Emotional Nuances",
      "ja": "Day 6: K-Dramaの名セリフと感情表現",
      "es": "Día 6: Frases Icónicas de K-Dramas y Emociones",
      "ko": "Day 6: K-드라마 명대사와 감정 표현"
    },
    "category": {
      "en": "K-Culture",
      "ja": "K-Culture",
      "es": "K-Culture",
      "ko": "K-Culture"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for K-Drama Iconic Lines & Emotional Nuances.",
      "ja": "K-Dramaの名セリフと感情表現に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Frases Icónicas de K-Dramas y Emociones.",
      "ko": "K-드라마 명대사와 감정 표현에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "대박! 진짜? 너 정말 날 사랑해? 하루 종일 보고 싶었어.",
        "roman": "Daebak! Jinjja? Neo jeongmal nal saranghae?",
        "translations": {
          "en": "Key conversational line for Day 6.",
          "ja": "Day 6の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 6.",
          "ko": "대박! 진짜? 너 정말 날 사랑해? 하루 종일 보고 싶었어."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "대박!",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 6 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for K-Drama Iconic Lines & Emotional Nuances.",
          "ja": "K-Dramaの名セリフと感情表現における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Frases Icónicas de K-Dramas y Emociones.",
          "ko": "Day 6의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "대박! 진짜? 너 정말 날 사랑해? 하루 종일 보고 싶었어."
      }
    ],
    "ankiCards": [
      {
        "front": "대박",
        "pronunciation": "Daebak! Jinjja? Neo jeongmal nal saranghae?",
        "back": {
          "en": "K-Drama Iconic Lines & Emotional Nuances",
          "ja": "K-Dramaの名セリフと感情表現",
          "es": "Frases Icónicas de K-Dramas y Emociones",
          "ko": "K-드라마 명대사와 감정 표현"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 7,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 7: Korean Dining Etiquette & Flavor Nuances",
      "ja": "Day 7: 韓国の食事マナーと味の表現",
      "es": "Día 7: Etiqueta en la Mesa y Sabores Coreanos",
      "ko": "Day 7: 한국의 식사 예절과 맛의 표현"
    },
    "category": {
      "en": "Dining & Food",
      "ja": "Dining & Food",
      "es": "Dining & Food",
      "ko": "Dining & Food"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Korean Dining Etiquette & Flavor Nuances.",
      "ja": "韓国の食事マナーと味の表現に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Etiqueta en la Mesa y Sabores Coreanos.",
      "ko": "한국의 식사 예절과 맛의 표현에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "잘 먹겠습니다! 맵지만 정말 맛있어요. 치맥 어때요?",
        "roman": "Jal meokgetseumnida! Maepjiman jeongmal masisseoyo.",
        "translations": {
          "en": "Key conversational line for Day 7.",
          "ja": "Day 7の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 7.",
          "ko": "잘 먹겠습니다! 맵지만 정말 맛있어요. 치맥 어때요?"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "잘",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 7 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Korean Dining Etiquette & Flavor Nuances.",
          "ja": "韓国の食事マナーと味の表現における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Etiqueta en la Mesa y Sabores Coreanos.",
          "ko": "Day 7의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "잘 먹겠습니다! 맵지만 정말 맛있어요. 치맥 어때요?"
      }
    ],
    "ankiCards": [
      {
        "front": "잘 먹겠습니다",
        "pronunciation": "Jal meokgetseumnida! Maepjiman jeongmal masisseoyo.",
        "back": {
          "en": "Korean Dining Etiquette & Flavor Nuances",
          "ja": "韓国の食事マナーと味の表現",
          "es": "Etiqueta en la Mesa y Sabores Coreanos",
          "ko": "한국의 식사 예절과 맛의 표현"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 8,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 8: Making Appointments & Time Expressions",
      "ja": "Day 8: 約束と時間・スケジュールの表現",
      "es": "Día 8: Hacer Citas y Expresar Horarios",
      "ko": "Day 8: 약속 잡기와 시간 표현하기"
    },
    "category": {
      "en": "Social Life",
      "ja": "Social Life",
      "es": "Social Life",
      "ko": "Social Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Making Appointments & Time Expressions.",
      "ja": "約束と時間・スケジュールの表現に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Hacer Citas y Expresar Horarios.",
      "ko": "약속 잡기와 시간 표현하기에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "이번 주말에 시간 있어? 토요일 오후 세 시에 강남역에서 만나자.",
        "roman": "Ibeon jumare sigan isseo? Toyoil ohu se sie mannaja.",
        "translations": {
          "en": "Key conversational line for Day 8.",
          "ja": "Day 8の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 8.",
          "ko": "이번 주말에 시간 있어? 토요일 오후 세 시에 강남역에서 만나자."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "이번",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 8 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Making Appointments & Time Expressions.",
          "ja": "約束と時間・スケジュールの表現における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Hacer Citas y Expresar Horarios.",
          "ko": "Day 8의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "이번 주말에 시간 있어? 토요일 오후 세 시에 강남역에서 만나자."
      }
    ],
    "ankiCards": [
      {
        "front": "이번 주말에 시간 있어? 토요일 오후 세 시에 강남역에서 만나자.",
        "pronunciation": "Ibeon jumare sigan isseo? Toyoil ohu se sie mannaja.",
        "back": {
          "en": "Making Appointments & Time Expressions",
          "ja": "約束と時間・スケジュールの表現",
          "es": "Hacer Citas y Expresar Horarios",
          "ko": "약속 잡기와 시간 표현하기"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 9,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 9: K-POP, Hobbies & Fan Culture",
      "ja": "Day 9: K-POPと趣味・推し活の会話",
      "es": "Día 9: K-POP, Pasatiempos y Cultura Fan",
      "ko": "Day 9: K-POP과 취미 이야기하기"
    },
    "category": {
      "en": "K-Culture",
      "ja": "K-Culture",
      "es": "K-Culture",
      "ko": "K-Culture"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for K-POP, Hobbies & Fan Culture.",
      "ja": "K-POPと趣味・推し活の会話に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre K-POP, Pasatiempos y Cultura Fan.",
      "ko": "K-POP과 취미 이야기하기에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "최애가 누구예요? 이번 신곡 무대 직캠 봤어요? 완전 레전드예요.",
        "roman": "Choeae-ga nuguyeyo? Ibeon singok jigkaem bwasseoyo?",
        "translations": {
          "en": "Key conversational line for Day 9.",
          "ja": "Day 9の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 9.",
          "ko": "최애가 누구예요? 이번 신곡 무대 직캠 봤어요? 완전 레전드예요."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "최애가",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 9 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for K-POP, Hobbies & Fan Culture.",
          "ja": "K-POPと趣味・推し活の会話における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para K-POP, Pasatiempos y Cultura Fan.",
          "ko": "Day 9의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "최애가 누구예요? 이번 신곡 무대 직캠 봤어요? 완전 레전드예요."
      }
    ],
    "ankiCards": [
      {
        "front": "최애가 누구예요? 이번 신곡 무대 직캠 봤어요? 완전 레전드예요.",
        "pronunciation": "Choeae-ga nuguyeyo? Ibeon singok jigkaem bwasseoyo?",
        "back": {
          "en": "K-POP, Hobbies & Fan Culture",
          "ja": "K-POPと趣味・推し活の会話",
          "es": "K-POP, Pasatiempos y Cultura Fan",
          "ko": "K-POP과 취미 이야기하기"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 10,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 10: Seasons, Weather & Wardrobe in Seoul",
      "ja": "Day 10: ソウルの四季・天気と服装",
      "es": "Día 10: Estaciones, Clima y Ropa en Seúl",
      "ko": "Day 10: 한국의 계절과 날씨 이야기"
    },
    "category": {
      "en": "Daily Life",
      "ja": "Daily Life",
      "es": "Daily Life",
      "ko": "Daily Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Seasons, Weather & Wardrobe in Seoul.",
      "ja": "ソウルの四季・天気と服装に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Estaciones, Clima y Ropa en Seúl.",
      "ko": "한국의 계절과 날씨 이야기에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "오늘 날씨가 너무 춥네요. 따뜻하게 입고 나가세요. 눈이 와요!",
        "roman": "Oneul nalssiga neomu chumneyo. Ttatteuthage ipgo nagaseyo.",
        "translations": {
          "en": "Key conversational line for Day 10.",
          "ja": "Day 10の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 10.",
          "ko": "오늘 날씨가 너무 춥네요. 따뜻하게 입고 나가세요. 눈이 와요!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "오늘",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 10 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Seasons, Weather & Wardrobe in Seoul.",
          "ja": "ソウルの四季・天気と服装における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Estaciones, Clima y Ropa en Seúl.",
          "ko": "Day 10의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "오늘 날씨가 너무 춥네요. 따뜻하게 입고 나가세요. 눈이 와요!"
      }
    ],
    "ankiCards": [
      {
        "front": "오늘 날씨가 너무 춥네요. 따뜻하게 입고 나가세요. 눈이 와요",
        "pronunciation": "Oneul nalssiga neomu chumneyo. Ttatteuthage ipgo nagaseyo.",
        "back": {
          "en": "Seasons, Weather & Wardrobe in Seoul",
          "ja": "ソウルの四季・天気と服装",
          "es": "Estaciones, Clima y Ropa en Seúl",
          "ko": "한국의 계절과 날씨 이야기"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 11,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 11: Pharmacy & Hospital Medical Korean",
      "ja": "Day 11: 薬局と病院での緊急体調表現",
      "es": "Día 11: Farmacia y Hospital en Corea",
      "ko": "Day 11: 병원과 약국에서 아픈 곳 설명하기"
    },
    "category": {
      "en": "Health & Crisis",
      "ja": "Health & Crisis",
      "es": "Health & Crisis",
      "ko": "Health & Crisis"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Pharmacy & Hospital Medical Korean.",
      "ja": "薬局と病院での緊急体調表現に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Farmacia y Hospital en Corea.",
      "ko": "병원과 약국에서 아픈 곳 설명하기에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "머리가 너무 아프고 열이 나요. 소화제와 진통제 좀 주세요.",
        "roman": "Meoriga neomu apeugo yeori nayo. Sohwaje jom juseyo.",
        "translations": {
          "en": "Key conversational line for Day 11.",
          "ja": "Day 11の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 11.",
          "ko": "머리가 너무 아프고 열이 나요. 소화제와 진통제 좀 주세요."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "머리가",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 11 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Pharmacy & Hospital Medical Korean.",
          "ja": "薬局と病院での緊急体調表現における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Farmacia y Hospital en Corea.",
          "ko": "Day 11의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "머리가 너무 아프고 열이 나요. 소화제와 진통제 좀 주세요."
      }
    ],
    "ankiCards": [
      {
        "front": "머리가 너무 아프고 열이 나요. 소화제와 진통제 좀 주세요.",
        "pronunciation": "Meoriga neomu apeugo yeori nayo. Sohwaje jom juseyo.",
        "back": {
          "en": "Pharmacy & Hospital Medical Korean",
          "ja": "薬局と病院での緊急体調表現",
          "es": "Farmacia y Hospital en Corea",
          "ko": "병원과 약국에서 아픈 곳 설명하기"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 12,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 12: Convenience Stores & 1+1 Deals",
      "ja": "Day 12: コンビニ文化とお得なプロモーション",
      "es": "Día 12: Tiendas de Conveniencia y Ofertas 1+1",
      "ko": "Day 12: 한국의 편의점 문화와 1+1 행사"
    },
    "category": {
      "en": "Daily Life",
      "ja": "Daily Life",
      "es": "Daily Life",
      "ko": "Daily Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Convenience Stores & 1+1 Deals.",
      "ja": "コンビニ文化とお得なプロモーションに関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Tiendas de Conveniencia y Ofertas 1+1.",
      "ko": "한국의 편의점 문화와 1+1 행사에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "이 삼각김밥 전자레인지에 돌려주세요. 이 음료수 1+1 행사 상품인가요?",
        "roman": "I samgak-gimbap jeonjareinjie dollyejuseyo.",
        "translations": {
          "en": "Key conversational line for Day 12.",
          "ja": "Day 12の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 12.",
          "ko": "이 삼각김밥 전자레인지에 돌려주세요. 이 음료수 1+1 행사 상품인가요?"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "이",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 12 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Convenience Stores & 1+1 Deals.",
          "ja": "コンビニ文化とお得なプロモーションにおける自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Tiendas de Conveniencia y Ofertas 1+1.",
          "ko": "Day 12의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "이 삼각김밥 전자레인지에 돌려주세요. 이 음료수 1+1 행사 상품인가요?"
      }
    ],
    "ankiCards": [
      {
        "front": "이 삼각김밥 전자레인지에 돌려주세요. 이 음료수 1+1 행사 상품인가요?",
        "pronunciation": "I samgak-gimbap jeonjareinjie dollyejuseyo.",
        "back": {
          "en": "Convenience Stores & 1+1 Deals",
          "ja": "コンビニ文化とお得なプロモーション",
          "es": "Tiendas de Conveniencia y Ofertas 1+1",
          "ko": "한국의 편의점 문화와 1+1 행사"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 13,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 13: Korean Age & Title Dynamics (Oppa/Hyung)",
      "ja": "Day 13: 年齢と呼称（オッパ・ヒョン・ヌナ）",
      "es": "Día 13: Títulos Sociales: Oppa, Hyung, Noona",
      "ko": "Day 13: 나이와 호칭의 과학"
    },
    "category": {
      "en": "Relationships",
      "ja": "Relationships",
      "es": "Relationships",
      "ko": "Relationships"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Korean Age & Title Dynamics (Oppa/Hyung).",
      "ja": "年齢と呼称（オッパ・ヒョン・ヌナ）に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Títulos Sociales: Oppa, Hyung, Noona.",
      "ko": "나이와 호칭의 과학에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "몇 년생이세요? 형이라고 불러도 돼요? 편하게 말 놓으세요.",
        "roman": "Myeot nyeonsaeng-iseyo? Hyeong-irago bulleodo dwaeyo?",
        "translations": {
          "en": "Key conversational line for Day 13.",
          "ja": "Day 13の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 13.",
          "ko": "몇 년생이세요? 형이라고 불러도 돼요? 편하게 말 놓으세요."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "몇",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 13 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Korean Age & Title Dynamics (Oppa/Hyung).",
          "ja": "年齢と呼称（オッパ・ヒョン・ヌナ）における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Títulos Sociales: Oppa, Hyung, Noona.",
          "ko": "Day 13의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "몇 년생이세요? 형이라고 불러도 돼요? 편하게 말 놓으세요."
      }
    ],
    "ankiCards": [
      {
        "front": "몇 년생이세요? 형이라고 불러도 돼요? 편하게 말 놓으세요.",
        "pronunciation": "Myeot nyeonsaeng-iseyo? Hyeong-irago bulleodo dwaeyo?",
        "back": {
          "en": "Korean Age & Title Dynamics (Oppa/Hyung)",
          "ja": "年齢と呼称（オッパ・ヒョン・ヌナ）",
          "es": "Títulos Sociales: Oppa, Hyung, Noona",
          "ko": "나이와 호칭의 과학"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 14,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 14: Praise, Compliments & Active Reactions",
      "ja": "Day 14: 褒め言葉とリアクションの技術",
      "es": "Día 14: Halagos y Reacciones Expresivas",
      "ko": "Day 14: 칭찬과 리액션의 마술"
    },
    "category": {
      "en": "Conversational Skills",
      "ja": "Conversational Skills",
      "es": "Conversational Skills",
      "ko": "Conversational Skills"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Praise, Compliments & Active Reactions.",
      "ja": "褒め言葉とリアクションの技術に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Halagos y Reacciones Expresivas.",
      "ko": "칭찬과 리액션의 마술에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "한국말 진짜 잘하시네요! 발음이 완전 원어민 같아요. 센스 대박!",
        "roman": "Hangukmal jinjja jalhasineyyo! Bareumi wanjeon woneomin gatayo.",
        "translations": {
          "en": "Key conversational line for Day 14.",
          "ja": "Day 14の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 14.",
          "ko": "한국말 진짜 잘하시네요! 발음이 완전 원어민 같아요. 센스 대박!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "한국말",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 14 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Praise, Compliments & Active Reactions.",
          "ja": "褒め言葉とリアクションの技術における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Halagos y Reacciones Expresivas.",
          "ko": "Day 14의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "한국말 진짜 잘하시네요! 발음이 완전 원어민 같아요. 센스 대박!"
      }
    ],
    "ankiCards": [
      {
        "front": "한국말 진짜 잘하시네요",
        "pronunciation": "Hangukmal jinjja jalhasineyyo! Bareumi wanjeon woneomin gatayo.",
        "back": {
          "en": "Praise, Compliments & Active Reactions",
          "ja": "褒め言葉とリアクションの技術",
          "es": "Halagos y Reacciones Expresivas",
          "ko": "칭찬과 리액션의 마술"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 15,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 15: Polite Requests & Graceful Refusals",
      "ja": "Day 15: 丁寧なお願いと角を立てない断り方",
      "es": "Día 15: Peticiones Educadas y Cómo Decir No",
      "ko": "Day 15: 부탁과 거절의 미학"
    },
    "category": {
      "en": "Social Skills",
      "ja": "Social Skills",
      "es": "Social Skills",
      "ko": "Social Skills"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Polite Requests & Graceful Refusals.",
      "ja": "丁寧なお願いと角を立てない断り方に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Peticiones Educadas y Cómo Decir No.",
      "ko": "부탁과 거절의 미학에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "죄송하지만 이번 주에는 조금 어려울 것 같아요. 다음 기회에 꼭 함께해요.",
        "roman": "Joesonghajiman ibeon jue-neun jogeum eoryeoul geot gatayo.",
        "translations": {
          "en": "Key conversational line for Day 15.",
          "ja": "Day 15の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 15.",
          "ko": "죄송하지만 이번 주에는 조금 어려울 것 같아요. 다음 기회에 꼭 함께해요."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "죄송하지만",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 15 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Polite Requests & Graceful Refusals.",
          "ja": "丁寧なお願いと角を立てない断り方における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Peticiones Educadas y Cómo Decir No.",
          "ko": "Day 15의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "죄송하지만 이번 주에는 조금 어려울 것 같아요. 다음 기회에 꼭 함께해요."
      }
    ],
    "ankiCards": [
      {
        "front": "죄송하지만 이번 주에는 조금 어려울 것 같아요. 다음 기회에 꼭 함께해요.",
        "pronunciation": "Joesonghajiman ibeon jue-neun jogeum eoryeoul geot gatayo.",
        "back": {
          "en": "Polite Requests & Graceful Refusals",
          "ja": "丁寧なお願いと角を立てない断り方",
          "es": "Peticiones Educadas y Cómo Decir No",
          "ko": "부탁과 거절의 미학"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 16,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 16: KakaoTalk Slang & Texting Abbreviations",
      "ja": "Day 16: カカオトークの略語とチャット用語",
      "es": "Día 16: Abreviaturas y Jerga de KakaoTalk",
      "ko": "Day 16: 카카오톡 채팅 용어와 신조어"
    },
    "category": {
      "en": "Digital Life",
      "ja": "Digital Life",
      "es": "Digital Life",
      "ko": "Digital Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for KakaoTalk Slang & Texting Abbreviations.",
      "ja": "カカオトークの略語とチャット用語に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Abreviaturas y Jerga de KakaoTalk.",
      "ko": "카카오톡 채팅 용어와 신조어에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "ㅋㅋㅋ 알겠어! ㅇㅇ 지금 출발함. 도착하면 톡해~",
        "roman": "Kkk algesseo! Eung jigeum chulbalham. Tochakamyeon tokhae~",
        "translations": {
          "en": "Key conversational line for Day 16.",
          "ja": "Day 16の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 16.",
          "ko": "ㅋㅋㅋ 알겠어! ㅇㅇ 지금 출발함. 도착하면 톡해~"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "ㅋㅋㅋ",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 16 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for KakaoTalk Slang & Texting Abbreviations.",
          "ja": "カカオトークの略語とチャット用語における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Abreviaturas y Jerga de KakaoTalk.",
          "ko": "Day 16의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "ㅋㅋㅋ 알겠어! ㅇㅇ 지금 출발함. 도착하면 톡해~"
      }
    ],
    "ankiCards": [
      {
        "front": "ㅋㅋㅋ 알겠어",
        "pronunciation": "Kkk algesseo! Eung jigeum chulbalham. Tochakamyeon tokhae~",
        "back": {
          "en": "KakaoTalk Slang & Texting Abbreviations",
          "ja": "カカオトークの略語とチャット用語",
          "es": "Abreviaturas y Jerga de KakaoTalk",
          "ko": "카카오톡 채팅 용어와 신조어"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 17,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 17: K-Delivery Food & App Orders (Baemin)",
      "ja": "Day 17: 韓国の出前文化と配達アプリ注文",
      "es": "Día 17: Comida a Domicilio (Delivery Coreano)",
      "ko": "Day 17: 한국의 배달 문화 주문하기"
    },
    "category": {
      "en": "Daily Life",
      "ja": "Daily Life",
      "es": "Daily Life",
      "ko": "Daily Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for K-Delivery Food & App Orders (Baemin).",
      "ja": "韓国の出前文化と配達アプリ注文に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Comida a Domicilio (Delivery Coreano).",
      "ko": "한국의 배달 문화 주문하기에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "문 앞에 두고 벨 눌러주세요. 배달 기사님 안전 운전하세요!",
        "roman": "Mun ape dugo bel nulleojuseyo. Baedal gisanim anjeon unjeonhaseyo!",
        "translations": {
          "en": "Key conversational line for Day 17.",
          "ja": "Day 17の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 17.",
          "ko": "문 앞에 두고 벨 눌러주세요. 배달 기사님 안전 운전하세요!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "문",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 17 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for K-Delivery Food & App Orders (Baemin).",
          "ja": "韓国の出前文化と配達アプリ注文における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Comida a Domicilio (Delivery Coreano).",
          "ko": "Day 17의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "문 앞에 두고 벨 눌러주세요. 배달 기사님 안전 운전하세요!"
      }
    ],
    "ankiCards": [
      {
        "front": "문 앞에 두고 벨 눌러주세요. 배달 기사님 안전 운전하세요",
        "pronunciation": "Mun ape dugo bel nulleojuseyo. Baedal gisanim anjeon unjeonhaseyo!",
        "back": {
          "en": "K-Delivery Food & App Orders (Baemin)",
          "ja": "韓国の出前文化と配達アプリ注文",
          "es": "Comida a Domicilio (Delivery Coreano)",
          "ko": "한국의 배달 문화 주문하기"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 18,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 18: K-Beauty, Skincare & Hair Salons",
      "ja": "Day 18: K-Beautyと美容院でのオーダー",
      "es": "Día 18: K-Beauty, Cuidado Facial y Peluquería",
      "ko": "Day 18: K-뷰티와 미용실 주문 표현"
    },
    "category": {
      "en": "K-Culture",
      "ja": "K-Culture",
      "es": "K-Culture",
      "ko": "K-Culture"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for K-Beauty, Skincare & Hair Salons.",
      "ja": "K-Beautyと美容院でのオーダーに関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre K-Beauty, Cuidado Facial y Peluquería.",
      "ko": "K-뷰티와 미용실 주문 표현에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "옆머리는 깔끔하게 다듬어 주시고, 자연스러운 브라운으로 염색해 주세요.",
        "roman": "Yeopmeorineun kkalgeumhage dadeumeo jusigo, yeomsaekhae juseyo.",
        "translations": {
          "en": "Key conversational line for Day 18.",
          "ja": "Day 18の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 18.",
          "ko": "옆머리는 깔끔하게 다듬어 주시고, 자연스러운 브라운으로 염색해 주세요."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "옆머리는",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 18 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for K-Beauty, Skincare & Hair Salons.",
          "ja": "K-Beautyと美容院でのオーダーにおける自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para K-Beauty, Cuidado Facial y Peluquería.",
          "ko": "Day 18의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "옆머리는 깔끔하게 다듬어 주시고, 자연스러운 브라운으로 염색해 주세요."
      }
    ],
    "ankiCards": [
      {
        "front": "옆머리는 깔끔하게 다듬어 주시고, 자연스러운 브라운으로 염색해 주세요.",
        "pronunciation": "Yeopmeorineun kkalgeumhage dadeumeo jusigo, yeomsaekhae juseyo.",
        "back": {
          "en": "K-Beauty, Skincare & Hair Salons",
          "ja": "K-Beautyと美容院でのオーダー",
          "es": "K-Beauty, Cuidado Facial y Peluquería",
          "ko": "K-뷰티와 미용실 주문 표현"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 19,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 19: Deep Emotional Nuances (Seounhada/Dapdap)",
      "ja": "Day 19: 「ソウンハダ」「タプタパダ」の深層心理",
      "es": "Día 19: Matices Emocionales Profundos",
      "ko": "Day 19: 감정의 깊은 뉘앙스 정복"
    },
    "category": {
      "en": "Advanced Expression",
      "ja": "Advanced Expression",
      "es": "Advanced Expression",
      "ko": "Advanced Expression"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Deep Emotional Nuances (Seounhada/Dapdap).",
      "ja": "「ソウンハダ」「タプタパダ」の深層心理に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Matices Emocionales Profundos.",
      "ko": "감정의 깊은 뉘앙스 정복에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "네가 약속을 잊어서 솔직히 조금 서운했어. 하지만 네 마음 다 이해해.",
        "roman": "Nega yaksogeul ijeoseo soljikhi jogeum seounhaesseo.",
        "translations": {
          "en": "Key conversational line for Day 19.",
          "ja": "Day 19の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 19.",
          "ko": "네가 약속을 잊어서 솔직히 조금 서운했어. 하지만 네 마음 다 이해해."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "네가",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 19 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Deep Emotional Nuances (Seounhada/Dapdap).",
          "ja": "「ソウンハダ」「タプタパダ」の深層心理における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Matices Emocionales Profundos.",
          "ko": "Day 19의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "네가 약속을 잊어서 솔직히 조금 서운했어. 하지만 네 마음 다 이해해."
      }
    ],
    "ankiCards": [
      {
        "front": "네가 약속을 잊어서 솔직히 조금 서운했어. 하지만 네 마음 다 이해해.",
        "pronunciation": "Nega yaksogeul ijeoseo soljikhi jogeum seounhaesseo.",
        "back": {
          "en": "Deep Emotional Nuances (Seounhada/Dapdap)",
          "ja": "「ソウンハダ」「タプタパダ」の深層心理",
          "es": "Matices Emocionales Profundos",
          "ko": "감정의 깊은 뉘앙스 정복"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 20,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 20: Korean Toast & After-Party Drinking Culture",
      "ja": "Day 20: 乾杯の音頭と飲み会文化（2次会へ）",
      "es": "Día 20: Cultura del Brindis y Cenas Coreanas",
      "ko": "Day 20: 한국의 회식과 건배 문화"
    },
    "category": {
      "en": "Social Life",
      "ja": "Social Life",
      "es": "Social Life",
      "ko": "Social Life"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Korean Toast & After-Party Drinking Culture.",
      "ja": "乾杯の音頭と飲み会文化（2次会へ）に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Cultura del Brindis y Cenas Coreanas.",
      "ko": "한국의 회식과 건배 문화에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "다 같이 짠! 오늘 정말 수고 많으셨습니다. 2차 노래방 달리자!",
        "roman": "Da gachi jjan! Oneul jeongmal sugo maneusyeotseumnida. Icha dalrija!",
        "translations": {
          "en": "Key conversational line for Day 20.",
          "ja": "Day 20の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 20.",
          "ko": "다 같이 짠! 오늘 정말 수고 많으셨습니다. 2차 노래방 달리자!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "다",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 20 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Korean Toast & After-Party Drinking Culture.",
          "ja": "乾杯の音頭と飲み会文化（2次会へ）における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Cultura del Brindis y Cenas Coreanas.",
          "ko": "Day 20의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "다 같이 짠! 오늘 정말 수고 많으셨습니다. 2차 노래방 달리자!"
      }
    ],
    "ankiCards": [
      {
        "front": "다 같이 짠",
        "pronunciation": "Da gachi jjan! Oneul jeongmal sugo maneusyeotseumnida. Icha dalrija!",
        "back": {
          "en": "Korean Toast & After-Party Drinking Culture",
          "ja": "乾杯の音頭と飲み会文化（2次会へ）",
          "es": "Cultura del Brindis y Cenas Coreanas",
          "ko": "한국의 회식과 건배 문화"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 21,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 21: Formal Business Self-Introductions",
      "ja": "Day 21: 公式なビジネス自己紹介と経歴発表",
      "es": "Día 21: Presentación de Negocios y CV",
      "ko": "Day 21: 격식 있는 비즈니스 자기소개"
    },
    "category": {
      "en": "Business Korean",
      "ja": "Business Korean",
      "es": "Business Korean",
      "ko": "Business Korean"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Formal Business Self-Introductions.",
      "ja": "公式なビジネス自己紹介と経歴発表に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Presentación de Negocios y CV.",
      "ko": "격식 있는 비즈니스 자기소개에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "안녕하십니까. GOH ASCENT 해외사업팀 팀장 김준우입니다. 잘 부탁드립니다.",
        "roman": "Annyeonghasimnikka. GOH ASCENT haewae saeop-tim timjang Kim Junwoo-imnida.",
        "translations": {
          "en": "Key conversational line for Day 21.",
          "ja": "Day 21の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 21.",
          "ko": "안녕하십니까. GOH ASCENT 해외사업팀 팀장 김준우입니다. 잘 부탁드립니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "안녕하십니까.",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 21 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Formal Business Self-Introductions.",
          "ja": "公式なビジネス自己紹介と経歴発表における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Presentación de Negocios y CV.",
          "ko": "Day 21의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "안녕하십니까. GOH ASCENT 해외사업팀 팀장 김준우입니다. 잘 부탁드립니다."
      }
    ],
    "ankiCards": [
      {
        "front": "안녕하십니까. GOH ASCENT 해외사업팀 팀장 김준우입니다. 잘 부탁드립니다.",
        "pronunciation": "Annyeonghasimnikka. GOH ASCENT haewae saeop-tim timjang Kim Junwoo-imnida.",
        "back": {
          "en": "Formal Business Self-Introductions",
          "ja": "公式なビジネス自己紹介と経歴発表",
          "es": "Presentación de Negocios y CV",
          "ko": "격식 있는 비즈니스 자기소개"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 22,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 22: Corporate Email & Messenger Etiquette",
      "ja": "Day 22: ビジネスメールと連絡の定型文",
      "es": "Día 22: Etiqueta en Correos Corporativos",
      "ko": "Day 22: 회사 업무 이메일과 메신저 에티켓"
    },
    "category": {
      "en": "Business Korean",
      "ja": "Business Korean",
      "es": "Business Korean",
      "ko": "Business Korean"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Corporate Email & Messenger Etiquette.",
      "ja": "ビジネスメールと連絡の定型文に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Etiqueta en Correos Corporativos.",
      "ko": "회사 업무 이메일과 메신저 에티켓에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "첨부파일 확인 부탁드립니다. 추가 문의사항 있으시면 언제든 회신 바랍니다.",
        "roman": "Cheombupail hwag-in butakdeurimnida. Hoesin baramnida.",
        "translations": {
          "en": "Key conversational line for Day 22.",
          "ja": "Day 22の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 22.",
          "ko": "첨부파일 확인 부탁드립니다. 추가 문의사항 있으시면 언제든 회신 바랍니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "첨부파일",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 22 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Corporate Email & Messenger Etiquette.",
          "ja": "ビジネスメールと連絡の定型文における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Etiqueta en Correos Corporativos.",
          "ko": "Day 22의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "첨부파일 확인 부탁드립니다. 추가 문의사항 있으시면 언제든 회신 바랍니다."
      }
    ],
    "ankiCards": [
      {
        "front": "첨부파일 확인 부탁드립니다. 추가 문의사항 있으시면 언제든 회신 바랍니다.",
        "pronunciation": "Cheombupail hwag-in butakdeurimnida. Hoesin baramnida.",
        "back": {
          "en": "Corporate Email & Messenger Etiquette",
          "ja": "ビジネスメールと連絡の定型文",
          "es": "Etiqueta en Correos Corporativos",
          "ko": "회사 업무 이메일과 메신저 에티켓"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 23,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 23: Leading Meetings & Presentations",
      "ja": "Day 23: 会議の進行とプレゼンテーション発表",
      "es": "Día 23: Liderar Reuniones y Presentaciones",
      "ko": "Day 23: 회의 진행 및 프레젠테이션 발표"
    },
    "category": {
      "en": "Business Korean",
      "ja": "Business Korean",
      "es": "Business Korean",
      "ko": "Business Korean"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Leading Meetings & Presentations.",
      "ja": "会議の進行とプレゼンテーション発表に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Liderar Reuniones y Presentaciones.",
      "ko": "회의 진행 및 프레젠테이션 발표에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "지금부터 2026년 3분기 글로벌 사업 계획 발표를 시작하겠습니다. 화면을 봐주십시오.",
        "roman": "Jigeumbuteo 2026-nyeon 3-bungi saeop gyehoek balpyoreul sijakhagesseumnida.",
        "translations": {
          "en": "Key conversational line for Day 23.",
          "ja": "Day 23の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 23.",
          "ko": "지금부터 2026년 3분기 글로벌 사업 계획 발표를 시작하겠습니다. 화면을 봐주십시오."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "지금부터",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 23 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Leading Meetings & Presentations.",
          "ja": "会議の進行とプレゼンテーション発表における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Liderar Reuniones y Presentaciones.",
          "ko": "Day 23의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "지금부터 2026년 3분기 글로벌 사업 계획 발표를 시작하겠습니다. 화면을 봐주십시오."
      }
    ],
    "ankiCards": [
      {
        "front": "지금부터 2026년 3분기 글로벌 사업 계획 발표를 시작하겠습니다. 화면을 봐주십시오.",
        "pronunciation": "Jigeumbuteo 2026-nyeon 3-bungi saeop gyehoek balpyoreul sijakhagesseumnida.",
        "back": {
          "en": "Leading Meetings & Presentations",
          "ja": "会議の進行とプレゼンテーション発表",
          "es": "Liderar Reuniones y Presentaciones",
          "ko": "회의 진행 및 프레젠테이션 발표"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 24,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 24: Contract Terms & Business Negotiations",
      "ja": "Day 24: 契約条件と交渉のスマートな表現",
      "es": "Día 24: Términos de Contratos y Negociación",
      "ko": "Day 24: 계약 조건과 비즈니스 협상"
    },
    "category": {
      "en": "Business Korean",
      "ja": "Business Korean",
      "es": "Business Korean",
      "ko": "Business Korean"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Contract Terms & Business Negotiations.",
      "ja": "契約条件と交渉のスマートな表現に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Términos de Contratos y Negociación.",
      "ko": "계약 조건과 비즈니스 협상에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "상호 윈윈할 수 있는 최적의 파트너십 조건을 제안드립니다. 긍정적 검토 부탁드립니다.",
        "roman": "Sangho win-winhal su inneun choejeogui pagteuneosip jogeoneul je-andeurimnida.",
        "translations": {
          "en": "Key conversational line for Day 24.",
          "ja": "Day 24の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 24.",
          "ko": "상호 윈윈할 수 있는 최적의 파트너십 조건을 제안드립니다. 긍정적 검토 부탁드립니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "상호",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 24 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Contract Terms & Business Negotiations.",
          "ja": "契約条件と交渉のスマートな表現における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Términos de Contratos y Negociación.",
          "ko": "Day 24의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "상호 윈윈할 수 있는 최적의 파트너십 조건을 제안드립니다. 긍정적 검토 부탁드립니다."
      }
    ],
    "ankiCards": [
      {
        "front": "상호 윈윈할 수 있는 최적의 파트너십 조건을 제안드립니다. 긍정적 검토 부탁드립니다.",
        "pronunciation": "Sangho win-winhal su inneun choejeogui pagteuneosip jogeoneul je-andeurimnida.",
        "back": {
          "en": "Contract Terms & Business Negotiations",
          "ja": "契約条件と交渉のスマートな表現",
          "es": "Términos de Contratos y Negociación",
          "ko": "계약 조건과 비즈니스 협상"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 25,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 25: Web3, Blockchain & AI Startup Lexicon",
      "ja": "Day 25: Web3・ブロックチェーン・AIスタートアップ用語",
      "es": "Día 25: Web3, Blockchain y Startups de IA",
      "ko": "Day 25: Web3 및 AI 스타트업 실전 용어"
    },
    "category": {
      "en": "Tech & Web3",
      "ja": "Tech & Web3",
      "es": "Tech & Web3",
      "ko": "Tech & Web3"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Web3, Blockchain & AI Startup Lexicon.",
      "ja": "Web3・ブロックチェーン・AIスタートアップ用語に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Web3, Blockchain y Startups de IA.",
      "ko": "Web3 및 AI 스타트업 실전 용어에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "카르다노 기반 탈중앙화 거버넌스와 스마트 컨트랙트를 통해 생태계를 확장합니다.",
        "roman": "Cardano giban taljung-anghwa geobeoneonseuwa seumateu keonteuraekteureul tonghae...",
        "translations": {
          "en": "Key conversational line for Day 25.",
          "ja": "Day 25の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 25.",
          "ko": "카르다노 기반 탈중앙화 거버넌스와 스마트 컨트랙트를 통해 생태계를 확장합니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "카르다노",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 25 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Web3, Blockchain & AI Startup Lexicon.",
          "ja": "Web3・ブロックチェーン・AIスタートアップ用語における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Web3, Blockchain y Startups de IA.",
          "ko": "Day 25의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "카르다노 기반 탈중앙화 거버넌스와 스마트 컨트랙트를 통해 생태계를 확장합니다."
      }
    ],
    "ankiCards": [
      {
        "front": "카르다노 기반 탈중앙화 거버넌스와 스마트 컨트랙트를 통해 생태계를 확장합니다.",
        "pronunciation": "Cardano giban taljung-anghwa geobeoneonseuwa seumateu keonteuraekteureul tonghae...",
        "back": {
          "en": "Web3, Blockchain & AI Startup Lexicon",
          "ja": "Web3・ブロックチェーン・AIスタートアップ用語",
          "es": "Web3, Blockchain y Startups de IA",
          "ko": "Web3 및 AI 스타트업 실전 용어"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 26,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 26: 10 Iconic Korean Idioms & Proverbs",
      "ja": "Day 26: 必ず役立つ韓国の重要ことわざ10選",
      "es": "Día 26: 10 Proverbios Coreanos Esenciales",
      "ko": "Day 26: 자주 쓰는 한국어 속담과 관용어"
    },
    "category": {
      "en": "Idioms & Wisdom",
      "ja": "Idioms & Wisdom",
      "es": "Idioms & Wisdom",
      "ko": "Idioms & Wisdom"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for 10 Iconic Korean Idioms & Proverbs.",
      "ja": "必ず役立つ韓国の重要ことわざ10選に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre 10 Proverbios Coreanos Esenciales.",
      "ko": "자주 쓰는 한국어 속담과 관용어에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "시작이 반이다! 가는 말이 고와야 오는 말이 곱다. 천 리 길도 한 걸음부터.",
        "roman": "Sijagi ban-ida! Ganeun mari gowaya oneun mari gopda.",
        "translations": {
          "en": "Key conversational line for Day 26.",
          "ja": "Day 26の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 26.",
          "ko": "시작이 반이다! 가는 말이 고와야 오는 말이 곱다. 천 리 길도 한 걸음부터."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "시작이",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 26 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for 10 Iconic Korean Idioms & Proverbs.",
          "ja": "必ず役立つ韓国の重要ことわざ10選における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para 10 Proverbios Coreanos Esenciales.",
          "ko": "Day 26의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "시작이 반이다! 가는 말이 고와야 오는 말이 곱다. 천 리 길도 한 걸음부터."
      }
    ],
    "ankiCards": [
      {
        "front": "시작이 반이다",
        "pronunciation": "Sijagi ban-ida! Ganeun mari gowaya oneun mari gopda.",
        "back": {
          "en": "10 Iconic Korean Idioms & Proverbs",
          "ja": "必ず役立つ韓国の重要ことわざ10選",
          "es": "10 Proverbios Coreanos Esenciales",
          "ko": "자주 쓰는 한국어 속담과 관용어"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 27,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 27: 2026 Gen-Z Slang & Trending Buzzwords",
      "ja": "Day 27: 2026年最新Z世代スラング＆流行語",
      "es": "Día 27: Jerga Gen-Z y Palabras de Moda 2026",
      "ko": "Day 27: 2026 최신 Z세대 신조어와 유행어"
    },
    "category": {
      "en": "Modern Slang",
      "ja": "Modern Slang",
      "es": "Modern Slang",
      "ko": "Modern Slang"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for 2026 Gen-Z Slang & Trending Buzzwords.",
      "ja": "2026年最新Z世代スラング＆流行語に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Jerga Gen-Z y Palabras de Moda 2026.",
      "ko": "2026 최신 Z세대 신조어와 유행어에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "오늘 스타일 완전 폼 미쳤다! 갓생 살자. 억까 당해도 꺾이지 않는 마음!",
        "roman": "Oneul seutail wanjeon pom michyeotda! Gat-saeng salja.",
        "translations": {
          "en": "Key conversational line for Day 27.",
          "ja": "Day 27の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 27.",
          "ko": "오늘 스타일 완전 폼 미쳤다! 갓생 살자. 억까 당해도 꺾이지 않는 마음!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "오늘",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 27 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for 2026 Gen-Z Slang & Trending Buzzwords.",
          "ja": "2026年最新Z世代スラング＆流行語における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Jerga Gen-Z y Palabras de Moda 2026.",
          "ko": "Day 27의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "오늘 스타일 완전 폼 미쳤다! 갓생 살자. 억까 당해도 꺾이지 않는 마음!"
      }
    ],
    "ankiCards": [
      {
        "front": "오늘 스타일 완전 폼 미쳤다",
        "pronunciation": "Oneul seutail wanjeon pom michyeotda! Gat-saeng salja.",
        "back": {
          "en": "2026 Gen-Z Slang & Trending Buzzwords",
          "ja": "2026年最新Z世代スラング＆流行語",
          "es": "Jerga Gen-Z y Palabras de Moda 2026",
          "ko": "2026 최신 Z세대 신조어와 유행어"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 28,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 28: Traditional Holidays (Chuseok & Seollal)",
      "ja": "Day 28: 伝統の祝日（秋夕・ソルラル）と挨拶",
      "es": "Día 28: Fiestas Tradicionales: Chuseok y Seollal",
      "ko": "Day 28: 전통 명절 문화와 따뜻한 덕담"
    },
    "category": {
      "en": "Culture & Tradition",
      "ja": "Culture & Tradition",
      "es": "Culture & Tradition",
      "ko": "Culture & Tradition"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Traditional Holidays (Chuseok & Seollal).",
      "ja": "伝統の祝日（秋夕・ソルラル）と挨拶に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Fiestas Tradicionales: Chuseok y Seollal.",
      "ko": "전통 명절 문화와 따뜻한 덕담에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "풍성한 한가위 보내세요! 새해 복 많이 받으시고 늘 건강하시길 바랍니다.",
        "roman": "Pungseonghan hangawi bonaeseyo! Saehae bok mani badeusigo...",
        "translations": {
          "en": "Key conversational line for Day 28.",
          "ja": "Day 28の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 28.",
          "ko": "풍성한 한가위 보내세요! 새해 복 많이 받으시고 늘 건강하시길 바랍니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "풍성한",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 28 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Traditional Holidays (Chuseok & Seollal).",
          "ja": "伝統の祝日（秋夕・ソルラル）と挨拶における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Fiestas Tradicionales: Chuseok y Seollal.",
          "ko": "Day 28의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "풍성한 한가위 보내세요! 새해 복 많이 받으시고 늘 건강하시길 바랍니다."
      }
    ],
    "ankiCards": [
      {
        "front": "풍성한 한가위 보내세요",
        "pronunciation": "Pungseonghan hangawi bonaeseyo! Saehae bok mani badeusigo...",
        "back": {
          "en": "Traditional Holidays (Chuseok & Seollal)",
          "ja": "伝統の祝日（秋夕・ソルラル）と挨拶",
          "es": "Fiestas Tradicionales: Chuseok y Seollal",
          "ko": "전통 명절 문화와 따뜻한 덕담"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 29,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 29: Advanced Pronunciation Rules (Liaison & Nasalization)",
      "ja": "Day 29: 発音の完全攻略（連音化・鼻音化）",
      "es": "Día 29: Reglas Avanzadas de Pronunciación",
      "ko": "Day 29: 한국어 고급 발음 법칙 (연음화와 비음화)"
    },
    "category": {
      "en": "Pronunciation Master",
      "ja": "Pronunciation Master",
      "es": "Pronunciation Master",
      "ko": "Pronunciation Master"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Advanced Pronunciation Rules (Liaison & Nasalization).",
      "ja": "発音の完全攻略（連音化・鼻音化）に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Reglas Avanzadas de Pronunciación.",
      "ko": "한국어 고급 발음 법칙 (연음화와 비음화)에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "국민 [궁민], 신라 [실라], 같이 [가치]. 규칙을 알면 한국어가 완벽히 들립니다.",
        "roman": "Gungmin, Silla, Gachi. Gu-chik-eul almyeon wanjeonhi deullimnida.",
        "translations": {
          "en": "Key conversational line for Day 29.",
          "ja": "Day 29の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 29.",
          "ko": "국민 [궁민], 신라 [실라], 같이 [가치]. 규칙을 알면 한국어가 완벽히 들립니다."
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "국민",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 29 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Advanced Pronunciation Rules (Liaison & Nasalization).",
          "ja": "発音の完全攻略（連音化・鼻音化）における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Reglas Avanzadas de Pronunciación.",
          "ko": "Day 29의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "국민 [궁민], 신라 [실라], 같이 [가치]. 규칙을 알면 한국어가 완벽히 들립니다."
      }
    ],
    "ankiCards": [
      {
        "front": "국민 [궁민], 신라 [실라], 같이 [가치]. 규칙을 알면 한국어가 완벽히 들립니다.",
        "pronunciation": "Gungmin, Silla, Gachi. Gu-chik-eul almyeon wanjeonhi deullimnida.",
        "back": {
          "en": "Advanced Pronunciation Rules (Liaison & Nasalization)",
          "ja": "発音の完全攻略（連音化・鼻音化）",
          "es": "Reglas Avanzadas de Pronunciación",
          "ko": "한국어 고급 발음 법칙 (연음화와 비음화)"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  },
  {
    "day": 30,
    "tier": "free",
    "priceAda": 0,
    "title": {
      "en": "Day 30: Grand Graduation & Conversational Mastery",
      "ja": "Day 30: 30日完走！総合会話ロールプレイングと卒業認定",
      "es": "Día 30: Graduación y Maestría Conversacional",
      "ko": "Day 30: 30일 완주! 종합 롤플레잉과 마스터 수료"
    },
    "category": {
      "en": "Master Graduation",
      "ja": "Master Graduation",
      "es": "Master Graduation",
      "ko": "Master Graduation"
    },
    "summary": {
      "en": "Master practical Korean speaking and listening for Grand Graduation & Conversational Mastery.",
      "ja": "30日完走！総合会話ロールプレイングと卒業認定に関する実戦的な韓国語表現を完全に習得します。",
      "es": "Domina las expresiones prácticas en coreano sobre Graduación y Maestría Conversacional.",
      "ko": "30일 완주! 종합 롤플레잉과 마스터 수료에 대한 실전 표현과 문법을 완벽히 마스터합니다."
    },
    "dialogue": [
      {
        "speaker": "원어민 (Native)",
        "role": {
          "en": "Korean Host",
          "ja": "ホスト",
          "es": "Anfitrión"
        },
        "korean": "축하합니다! 30일간의 여정을 완주하셨습니다. 이제 여러분은 당당한 한국어 구사자입니다!",
        "roman": "Chukahamnida! 30-ilganui yeojeongeul wanjuhasyeotseumnida!",
        "translations": {
          "en": "Key conversational line for Day 30.",
          "ja": "Day 30の重要実戦表現です。",
          "es": "Línea clave de conversación para el Día 30.",
          "ko": "축하합니다! 30일간의 여정을 완주하셨습니다. 이제 여러분은 당당한 한국어 구사자입니다!"
        }
      },
      {
        "speaker": "학습자 (Learner)",
        "role": {
          "en": "Global Student",
          "ja": "学習者",
          "es": "Estudiante"
        },
        "korean": "네, 이해했어요! 정말 재미있고 유익해요.",
        "roman": "Ne, ihaehaesseoyo! Jeongmal jaemi-itgo yuikaeyo.",
        "translations": {
          "en": "Yes, I understand! It is very fun and useful.",
          "ja": "はい、理解できました！とても面白くて役立ちます。",
          "es": "¡Sí, lo entiendo! Es muy divertido y útil.",
          "ko": "네, 이해했어요! 정말 재미있고 유익해요."
        }
      }
    ],
    "vocabulary": [
      {
        "korean": "축하합니다!",
        "roman": "Core Vocab",
        "meaning": {
          "en": "Key Lesson Vocabulary",
          "ja": "重要単語",
          "es": "Vocabulario Clave",
          "ko": "핵심 어휘"
        }
      },
      {
        "korean": "이해했어요",
        "roman": "Ihaehaesseoyo",
        "meaning": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      },
      {
        "korean": "재미있어요",
        "roman": "Jaemi-isseoyo",
        "meaning": {
          "en": "It is interesting/fun",
          "ja": "面白いです",
          "es": "Es divertido",
          "ko": "재미있어요"
        }
      }
    ],
    "grammarNotes": [
      {
        "point": "Day 30 Core Linguistic Pattern",
        "explanation": {
          "en": "Natural native Seoul phrasing and grammatical flow for Grand Graduation & Conversational Mastery.",
          "ja": "30日完走！総合会話ロールプレイングと卒業認定における自然なソウル方言の語法と文法ポイント。",
          "es": "Estructura gramatical y giros naturales en coreano para Graduación y Maestría Conversacional.",
          "ko": "Day 30의 핵심 문법 및 자연스러운 원어민 어법 해설입니다."
        },
        "example": "축하합니다! 30일간의 여정을 완주하셨습니다. 이제 여러분은 당당한 한국어 구사자입니다!"
      }
    ],
    "ankiCards": [
      {
        "front": "축하합니다",
        "pronunciation": "Chukahamnida! 30-ilganui yeojeongeul wanjuhasyeotseumnida!",
        "back": {
          "en": "Grand Graduation & Conversational Mastery",
          "ja": "30日完走！総合会話ロールプレイングと卒業認定",
          "es": "Graduación y Maestría Conversacional",
          "ko": "30일 완주! 종합 롤플레잉과 마스터 수료"
        }
      },
      {
        "front": "이해했어요",
        "pronunciation": "Ihaehaesseoyo",
        "back": {
          "en": "I understood",
          "ja": "理解しました",
          "es": "Entendí",
          "ko": "이해했어요"
        }
      }
    ]
  }
];

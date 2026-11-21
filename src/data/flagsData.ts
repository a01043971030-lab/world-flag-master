export interface FlagItem {
  id: string;
  code: string; // flagcdn 2-letter ISO code
  nameKo: string;
  nameEn: string;
  continentKo: string;
  difficulty: 1 | 2 | 3 | 4 | 5; // 5 is hardest/most obscure
  capitalKo: string;
  symbolism: string;
  funFact: string;
}

export const FLAGS_DATA: FlagItem[] = [
  // --- LEVEL 5: VERY HARD & OBSCURE FLAGS ---
  {
    id: "bh",
    code: "bh",
    nameKo: "부탄",
    nameEn: "Bhutan",
    continentKo: "아시아",
    difficulty: 5,
    capitalKo: "팀푸",
    symbolism: "대각선으로 나뉜 노란색과 주황색 배경 위에 용(Druk)이 그려져 있으며, 용은 국경을 지키는 번개(보석)를 쥐고 있습니다.",
    funFact: "세계에서 유일하게 국민총행복(GNH)을 국가 발전 지표로 삼는 히말라야의 불교 왕국입니다."
  },
  {
    id: "ki",
    code: "ki",
    nameKo: "키리바시",
    nameEn: "Kiribati",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "사우스타라와",
    symbolism: "붉은 배경 위 태평양의 일출과 날아오르는 군함조, 그리고 바다의 파도를 상징합니다.",
    funFact: "적도와 날짜변경선이 만나는 태평양의 섬나라로, 지구온난화로 인해 해수면 상승 위기를 겪고 있습니다."
  },
  {
    id: "sz",
    code: "sz",
    nameKo: "에스와티니",
    nameEn: "Eswatini",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "음바바네 / 로밤바",
    symbolism: "방패와 두 개의 창, 그리고 전통 흑백 소가 그려져 있어 평화와 국가 방위를 상징합니다.",
    funFact: "과거 국명은 '스와질랜드'였으며, 아프리카에 남은 몇 안 되는 절대군주제 국가입니다."
  },
  {
    id: "vu",
    code: "vu",
    nameKo: "바누아투",
    nameEn: "Vanuatu",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "포트빌라",
    symbolism: "검은색 삼각형과 Y자 모양의 노란색 테두리, 그리고 멧돼지 엄니와 고사리 잎이 그려져 있습니다.",
    funFact: "세계에서 번지점프의 기원이 된 곤돌(Land diving) 문화가 있는 아름다운 섬나라입니다."
  },
  {
    id: "lc",
    code: "lc",
    nameKo: "세인트루시아",
    nameEn: "Saint Lucia",
    continentKo: "북아메리카",
    difficulty: 5,
    capitalKo: "캐스트리스",
    symbolism: "하늘색 배경 위에 쌍둥이 화산(피톤즈)을 상징하는 삼각형이 겹쳐져 있습니다.",
    funFact: "카리브해의 섬나라로, 노벨상 수상자를 두 명이나 배출한 인구 대비 노벨상 수상자 1위 국가입니다."
  },
  {
    id: "km",
    code: "km",
    nameKo: "코모로",
    nameEn: "Comoros",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "모로니",
    symbolism: "초승달과 네 개의 별은 네 개의 주요 섬과 이슬람 문화를 상징합니다.",
    funFact: "바닐라, 정 cloves 등 향신료 수출로 유명하여 '향신료 섬'으로 불립니다."
  },
  {
    id: "st",
    code: "st",
    nameKo: "상투메 프린시페",
    nameEn: "São Tomé and Príncipe",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "상투메",
    symbolism: "두 개의 별은 두 주요 섬을, 적도를 상징하는 삼각형과 범아프리카 색상이 사용되었습니다.",
    funFact: "아프리카 서해안 기니만에 위치한 작고 평화로운 섬나라로 초콜릿 원료인 코코아 재배가 활발합니다."
  },
  {
    id: "tv",
    code: "tv",
    nameKo: "투발루",
    nameEn: "Tuvalu",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "푸나푸티",
    symbolism: "하늘색 배경에 영국의 유니언잭과 9개의 별이 배열되어 있습니다(9개 환초를 상징).",
    funFact: "인터넷 국가 도메인(.tv)을 임대해 얻는 수익이 국가 경제에 큰 비중을 차지합니다."
  },
  {
    id: "dj",
    code: "dj",
    nameKo: "지부티",
    nameEn: "Djibouti",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "지부티시",
    symbolism: "하늘색과 초록색 바탕에 흰색 삼각형과 붉은색 별이 그려져 있습니다.",
    funFact: "홍해와 아덴만이 만나는 전략적 요충지로, 세계 여러 나라의 군사 기지가 위치해 있습니다."
  },
  {
    id: "dm",
    code: "dm",
    nameKo: "도미니카 연방",
    nameEn: "Dominica",
    continentKo: "북아메리카",
    difficulty: 5,
    capitalKo: "로조",
    symbolism: "초록색 배경 위에 희귀 새인 '시사루 앵무새'가 그려져 있으며 10개의 별은 행정구를 상징합니다.",
    funFact: "카리브해의 '자연의 섬'이라 불릴 정도로 울창한 열대우림과 화산 온천이 가득합니다."
  },

  // --- LEVEL 4: HARD FLAGS ---
  {
    id: "lk",
    code: "lk",
    nameKo: "스리랑카",
    nameEn: "Sri Lanka",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "스리자야와르데네푸라코테",
    symbolism: "칼을 든 황금 사자와 네 개의 보리수 잎, 그리고 소수민족을 상징하는 주황/초록띠가 있습니다.",
    funFact: "인도양의 진주로 불리며 실론티와 세계적인 보석 산지로 유명합니다."
  },
  {
    id: "bn",
    code: "bn",
    nameKo: "브루나이",
    nameEn: "Brunei",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "반다르스리베가완",
    symbolism: "노란색 배경에 대각선 검은색/흰색 줄무늬와 중앙의 이슬람 왕실 문장이 있습니다.",
    funFact: "석유와 천연가스가 풍부하여 세계에서 손꼽히는 부유한 복지 국가입니다."
  },
  {
    id: "sc",
    code: "sc",
    nameKo: "세이셸",
    nameEn: "Seychelles",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "빅토리아",
    symbolism: "다섯 가지 밝은 색상의 방사형 띠가 퍼져나가는 독특하고 역동적인 디자인입니다.",
    funFact: "인도양의 지상 낙원으로 불리며 거대한 알다브라 육지거북의 서식지입니다."
  },
  {
    id: "mz",
    code: "mz",
    nameKo: "모잠비크",
    nameEn: "Mozambique",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "마푸투",
    symbolism: "열린 책 위에 놓인 AK-47 소총과 괭이가 그려진 세계 유일의 국기입니다.",
    funFact: "국기에 소총(AK-47)이 그려져 있는 독특한 역사적 배경(독립 전쟁)을 가지고 있습니다."
  },
  {
    id: "np",
    code: "np",
    nameKo: "네팔",
    nameEn: "Nepal",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "카트만두",
    symbolism: "세계에서 유일하게 사각형이 아닌 두 개의 삼각형이 겹쳐진 형태의 국기입니다.",
    funFact: "에베레스트산을 포함해 세계 최고봉 10개 중 8개가 위치한 산악 국가입니다."
  },
  {
    id: "kz",
    code: "kz",
    nameKo: "카자흐스탄",
    nameEn: "Kazakhstan",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "아스타나",
    symbolism: "하늘색 배경에 황금빛 태양과 날아오르는 독수리, 그리고 전통 유목민의 문양이 새겨져 있습니다.",
    funFact: "세계에서 내륙국 중 가장 넓은 영토를 가진 중앙아시아의 대국입니다."
  },
  {
    id: "kg",
    code: "kg",
    nameKo: "키르기스스탄",
    nameEn: "Kyrgyzstan",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "비슈케크",
    symbolism: "붉은색 바탕에 유르트(전통 가옥) 천장의 채광창(툰둑)을 형상화한 태양 모양이 그려져 있습니다.",
    funFact: "국토의 대부분이 톈산산맥 등 험준한 산악 지형으로 이루어져 '중앙아시아의 스위스'로 불립니다."
  },
  {
    id: "mu",
    code: "mu",
    nameKo: "모리셔스",
    nameEn: "Mauritius",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "포트루이스",
    symbolism: "빨강, 파랑, 노랑, 초록 네 가지 가로 줄무늬로 독립과 독립 후의 밝은 미래를 상징합니다.",
    funFact: "작가 마크 트웨인은 '천국이 있다면 모리셔스를 본떠 만들었을 것'이라고 극찬했습니다."
  },
  {
    id: "bb",
    code: "bb",
    nameKo: "바베이도스",
    nameEn: "Barbados",
    continentKo: "북아메리카",
    difficulty: 4,
    capitalKo: "브리지타운",
    symbolism: "파랑과 노랑 세로 줄무늬 중앙에 검은색 삼지창(넵튠의 창)이 그려져 있습니다.",
    funFact: "팝스타 리한나의 고향이며, 최근 공화국으로 전환하면서 큰 주목을 받았습니다."
  },
  {
    id: "gy",
    code: "gy",
    nameKo: "가이아나",
    nameEn: "Guyana",
    continentKo: "남아메리카",
    difficulty: 4,
    capitalKo: "조지타운",
    symbolism: "초록색 바탕에 겹쳐진 삼각형(황금 화살머리)이 그려져 있어 '황금 화살머리의 기'로 불립니다.",
    funFact: "남미에서 영어를 공공어로 사용하는 유일한 국가이며 아마존 열대우림이 펼쳐져 있습니다."
  },

  // --- LEVEL 3: MEDIUM FLAGS ---
  {
    id: "lb",
    code: "lb",
    nameKo: "레바논",
    nameEn: "Lebanon",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "베이루트",
    symbolism: "위아래 빨간 줄 사이에 하얀 바탕과 레바논 삼나무가 그려져 있습니다.",
    funFact: "고대 페니키아 문명의 발상지이자 중동의 금융·문화 중심지였습니다."
  },
  {
    id: "fj",
    code: "fj",
    nameKo: "피지",
    nameEn: "Fiji",
    continentKo: "오세아니아",
    difficulty: 3,
    capitalKo: "수바",
    symbolism: "하늘색 바탕에 유니언잭과 피지 방패(야자수, 바나나, 사탕수수 등)가 있습니다.",
    funFact: "300개가 넘는 아름다운 섬으로 이루어져 전 세계 신혼여행객들의 사랑을 받습니다."
  },
  {
    id: "me",
    code: "me",
    nameKo: "몬테네그로",
    nameEn: "Montenegro",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "포드고리차",
    symbolism: "붉은색 바탕에 금색 테두리와 황금빛 쌍두독수리 문장이 중앙에 있습니다.",
    funFact: "이름 자체가 '검은 산'을 뜻하며 발칸 반도의 숨겨진 보석 같은 해변을 자랑합니다."
  },
  {
    id: "uz",
    code: "uz",
    nameKo: "우즈베키스탄",
    nameEn: "Uzbekistan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "타슈켄트",
    symbolism: "하늘색, 흰색, 초록색 가로 줄무늬와 초승달, 12개의 별이 그려져 있습니다.",
    funFact: "실크로드의 중심지로 사마르칸트와 부하라 등 찬란한 이슬람 건축 유적들이 가득합니다."
  },
  {
    id: "tj",
    code: "tj",
    nameKo: "타지키스탄",
    nameEn: "Tajikistan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "두샨베",
    symbolism: "빨강, 하양, 초록 가로 줄무늬와 중앙의 금색 왕관 및 7개의 별이 있습니다.",
    funFact: "국토의 90% 이상이 산악 지형이며 파미르 고원은 '세상의 지붕'으로 불립니다."
  },
  {
    id: "hn",
    code: "hn",
    nameKo: "온두라스",
    nameEn: "Honduras",
    continentKo: "북아메리카",
    difficulty: 3,
    capitalKo: "테구시갈파",
    symbolism: "파랑, 하양, 파랑 가로 줄무늬와 중앙에 5개의 별이 배치되어 있습니다.",
    funFact: "고대 마야 문명의 유적지인 코판(Copán)이 위치해 있습니다."
  },
  {
    id: "cm",
    code: "cm",
    nameKo: "카메룬",
    nameEn: "Cameroon",
    continentKo: "아프리카",
    difficulty: 3,
    capitalKo: "야운데",
    symbolism: "초록, 빨강, 노랑 세로 줄무늬와 중앙의 노란 별이 범아프리카 색상을 나타냅니다.",
    funFact: "축구 강국으로 유명하며 아프리카의 축소판이라 불릴 만큼 다양한 지형과 문화가 공존합니다."
  },
  {
    id: "jm",
    code: "jm",
    nameKo: "자메이카",
    nameEn: "Jamaica",
    continentKo: "북아메리카",
    difficulty: 3,
    capitalKo: "킹스턴",
    symbolism: "노란색 대각선 십자가와 초록색, 검은색 삼각형 조합으로 이루어진 유일한 국기입니다.",
    funFact: "레게 음악의 거장 보브 말리의 고향이며 단거리 육상 세계 최고 선수들의 산실입니다."
  },
  {
    id: "ee",
    code: "ee",
    nameKo: "에스토니아",
    nameEn: "Estonia",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "탈린",
    symbolism: "파랑, 검정, 흰색의 가로 줄무늬는 하늘, 대지, 그리고 순결한 희망을 상징합니다.",
    funFact: "세계에서 가장 디지털화된 국가 중 하나로 전자 영주권(e-Residency) 제도가 유명합니다."
  },
  {
    id: "cy",
    code: "cy",
    nameKo: "키프로스",
    nameEn: "Cyprus",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "니코시아",
    symbolism: "하얀 바탕에 구리색 영토 지도와 평화를 상징하는 두 개의 올리브 나뭇가지가 그려져 있습니다.",
    funFact: "지중해 동부에 위치한 섬나라로 그리스와 터키의 문화가 독특하게 어우러져 있습니다."
  },

  // --- LEVEL 2: EASY / FAMILIAR FLAGS ---
  {
    id: "kr",
    code: "kr",
    nameKo: "대한민국",
    nameEn: "South Korea",
    continentKo: "아시아",
    difficulty: 2,
    capitalKo: "서울",
    symbolism: "흰색 바탕에 태극 문양과 네 건곤감리 괘가 조화를 이룹니다.",
    funFact: "역동적인 IT 강국이자 K-팝, K-드라마 등 전 세계를 매료시키는 문화 중심지입니다."
  },
  {
    id: "jp",
    code: "jp",
    nameKo: "일본",
    nameEn: "Japan",
    continentKo: "아시아",
    difficulty: 2,
    capitalKo: "도쿄",
    symbolism: "흰색 바탕 중앙에 붉은색 원(태양)이 그려져 있어 '일장기'로 불립니다.",
    funFact: "전통 문화와 최첨단 로봇 공학이 공존하며 독특한 미식 문화를 자랑합니다."
  },
  {
    id: "us",
    code: "us",
    nameKo: "미국",
    nameEn: "United States",
    continentKo: "북아메리카",
    difficulty: 2,
    capitalKo: "워싱턴 D.C.",
    symbolism: "13개의 줄무늬와 50개의 별은 각각 최초의 13개 주와 현재의 50개 주를 상징합니다.",
    funFact: "세계 최대의 경제 대국이자 다양한 인종과 문화가 어우러진 다문화 국가입니다."
  },
  {
    id: "fr",
    code: "fr",
    nameKo: "프랑스",
    nameEn: "France",
    continentKo: "유럽",
    difficulty: 2,
    capitalKo: "파리",
    symbolism: "파랑, 하양, 빨강의 삼색기는 자유, 평등, 박애의 정신을 나타냅니다.",
    funFact: "예술, 패션, 와인, 그리고 세계에서 가장 많은 관광객이 찾는 문화 강국입니다."
  },
  {
    id: "gb",
    code: "gb",
    nameKo: "영국",
    nameEn: "United Kingdom",
    continentKo: "유럽",
    difficulty: 2,
    capitalKo: "런던",
    symbolism: "잉글랜드, 스코틀랜드, 아일랜드의 수호성인 십자가가 결합된 유니언잭입니다.",
    funFact: "산업혁명의 발상지이자 축구 종가, 그리고 풍부한 역사적 유산을 지닌 국가입니다."
  },
  {
    id: "ca",
    code: "ca",
    nameKo: "캐나다",
    nameEn: "Canada",
    continentKo: "북아메리카",
    difficulty: 2,
    capitalKo: "오타와",
    symbolism: "빨간 바탕 양옆에 붉은 단풍잎(메이플)이 중앙에 큼직하게 그려져 있습니다.",
    funFact: "세계에서 두 번째로 넓은 영토를 가졌으며 광활한 대자연과 친절한 시민들로 유명합니다."
  },
  {
    id: "au",
    code: "au",
    nameKo: "호주",
    nameEn: "Australia",
    continentKo: "오세아니아",
    difficulty: 2,
    capitalKo: "캔버라",
    symbolism: "파란 배경에 유니언잭과 남십자자리 별들이 그려져 있습니다.",
    funFact: "캥거루, 코알라 등 독특한 고유 생태계와 시드니 오페라하우스로 유명합니다."
  },
  {
    id: "br",
    code: "br",
    nameKo: "브라질",
    nameEn: "Brazil",
    continentKo: "남아메리카",
    difficulty: 2,
    capitalKo: "브라질리아",
    symbolism: "초록색 바탕에 노란 마름모와 파란 별 무늬 구체가 '질서와 진보' 문구를 담고 있습니다.",
    funFact: "삼바와 축구의 고향이며 아마존 열대우림과 세계 최대의 커피 생산국입니다."
  },
  {
    id: "de",
    code: "de",
    nameKo: "독일",
    nameEn: "Germany",
    continentKo: "유럽",
    difficulty: 2,
    capitalKo: "베를린",
    symbolism: "검정, 빨강, 금색의 삼색 가로 줄무늬로 통일과 자유를 상징합니다.",
    funFact: "정밀 기계 공업, 자동차 산업의 중심지이며 철학, 클래식 음악의 거장들을 배출했습니다."
  },
  {
    id: "it",
    code: "it",
    nameKo: "이탈리아",
    nameEn: "Italy",
    continentKo: "유럽",
    difficulty: 2,
    capitalKo: "로마",
    symbolism: "초록, 하양, 빨강의 세로 삼색기로 이탈리아의 지형과 자연을 나타냅니다.",
    funFact: "고대 로마 문명의 중심지이자 피자, 파스타 등 세계 최고의 미식 문화를 자랑합니다."
  }
];

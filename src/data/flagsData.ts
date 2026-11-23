export interface FlagItem {
  id: string;
  code: string; // flagcdn 2-letter ISO code
  nameKo: string;
  nameEn: string;
  continentKo: string;
  difficulty: 1 | 2 | 3 | 4 | 5; // 5 is hardest/most obscure
  capitalKo: string;
  symbolism: string; // Location & characteristics
  funFact: string;
}

export const FLAGS_DATA: FlagItem[] = [
  // --- OBSCURE & RARE FLAGS (50 COUNTRIES) ---
  {
    id: "bh",
    code: "bh",
    nameKo: "부탄",
    nameEn: "Bhutan",
    continentKo: "아시아",
    difficulty: 5,
    capitalKo: "팀푸",
    symbolism: "히말라야 산맥에 위치한 내륙국으로, 국민총행복(GNH)을 국가 발전 지표로 삼는 청정 자연의 나라입니다.",
    funFact: "세계에서 유일하게 담배 판매가 금지되었던 국가이며 산악 지형의 아름다운 불교 왕국입니다."
  },
  {
    id: "ki",
    code: "ki",
    nameKo: "키리바시",
    nameEn: "Kiribati",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "사우스타라와",
    symbolism: "태평양 적도 부근에 흩어져 있는 33개의 산호섬으로 이루어진 섬나라입니다.",
    funFact: "지구에서 세계 시차가 가장 빠른 지역(UTC+14)에 속해 해가 가장 먼저 뜨는 국가입니다."
  },
  {
    id: "sz",
    code: "sz",
    nameKo: "에스와티니",
    nameEn: "Eswatini",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "음바바네 / 로밤바",
    symbolism: "아프리카 남부 내륙에 위치하며, 남아프리카공화국과 모잠비크 사이에 자리 잡은 소국입니다.",
    funFact: "아프리카에 남은 대표적인 절대군주제 국가로 고유의 전통 축제 문화가 매우 잘 보존되어 있습니다."
  },
  {
    id: "vu",
    code: "vu",
    nameKo: "바누아투",
    nameEn: "Vanuatu",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "포트빌라",
    symbolism: "남태평양 남서부에 위치한 80여 개의 화산섬으로 이루어진 아름다운 군도 국가입니다.",
    funFact: "세계에서 번지점프의 기원이 된 전통 성인식 문화가 전해 내려오는 곳입니다."
  },
  {
    id: "lc",
    code: "lc",
    nameKo: "세인트루시아",
    nameEn: "Saint Lucia",
    continentKo: "북아메리카",
    difficulty: 5,
    capitalKo: "캐스트리스",
    symbolism: "카리브해 동부에 위치한 섬나라로, 쌍둥이 화산(피톤즈)이 유명한 휴양지입니다.",
    funFact: "인구 대비 노벨상 수상자를 두 명이나 배출하여 세계에서 노벨상 수상 비율이 가장 높은 국가입니다."
  },
  {
    id: "km",
    code: "km",
    nameKo: "코모로",
    nameEn: "Comoros",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "모로니",
    symbolism: "아프리카 동부 인도양 모잠비크 해협 북쪽에 위치한 화산 섬나라입니다.",
    funFact: "향신료인 바닐라와 정향의 주요 수출국으로 '향신료의 섬'이라는 별칭을 가지고 있습니다."
  },
  {
    id: "st",
    code: "st",
    nameKo: "상투메 프린시페",
    nameEn: "São Tomé and Príncipe",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "상투메",
    symbolism: "아프리카 서해안 기니문에 위치한 두 개의 주요 섬으로 이루어진 작은 섬나라입니다.",
    funFact: "적도가 국토 바로 남쪽을 지나며, 과거 세계 최대의 코코아 생산지로 명성을 떨쳤습니다."
  },
  {
    id: "tv",
    code: "tv",
    nameKo: "투발루",
    nameEn: "Tuvalu",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "푸나푸티",
    symbolism: "남태평양 하와이와 호주 사이에 위치한 9개의 산호 환초로 이루어진 섬나라입니다.",
    funFact: "국토가 해수면과 매우 가까워 지구온난화로 인한 해수면 상승으로 큰 관심을 받는 국가입니다."
  },
  {
    id: "dj",
    code: "dj",
    nameKo: "지부티",
    nameEn: "Djibouti",
    continentKo: "아프리카",
    difficulty: 5,
    capitalKo: "지부티시",
    symbolism: "아프리카 뿔 지역 홍해와 아덴만이 만나는 전략적 요충지에 위치한 국가입니다.",
    funFact: "바다보다 해수면이 낮은 아살 호수가 있으며 전 세계 여러 열강의 군사 기지가 위치해 있습니다."
  },
  {
    id: "dm",
    code: "dm",
    nameKo: "도미니카 연방",
    nameEn: "Dominica",
    continentKo: "북아메리카",
    difficulty: 5,
    capitalKo: "로조",
    symbolism: "카리브해 소앤틸리스제도에 위치한 화산섬 국가로 울창한 열대우림이 특징입니다.",
    funFact: "카리브해의 '자연의 섬'이라 불리며 세계에서 두 번째로 큰 끓어오르는 온천 호수가 있습니다."
  },
  {
    id: "nr",
    code: "nr",
    nameKo: "나우루",
    nameEn: "Nauru",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "야렌",
    symbolism: "태평양 남서부에 위치한 세계에서 가장 작은 섬나라 공화국 중 하나입니다.",
    funFact: "과거 인광석 채굴로 세계에서 손꼽히는 부유한 국가였으나 현재는 독특한 자연환경을 지닌 소국입니다."
  },
  {
    id: "pw",
    code: "pw",
    nameKo: "팔라우",
    nameEn: "Palau",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "응글룸묵",
    symbolism: "태평양 서부 미크로네시아 지역에 위치한 수백 개의 아름다운 섬들로 이루어진 섬나라입니다.",
    funFact: "세계적인 스킨스쿠버 낙원이자 해파리 호수로 유명한 청정 자연의 생태 보물창고입니다."
  },
  {
    id: "fm",
    code: "fm",
    nameKo: "미크로네시아 연방",
    nameEn: "Micronesia",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "팔리키르",
    symbolism: "서태평양에 흩어져 있는 600여 개의 섬들로 이루어진 연방 섬나라입니다.",
    funFact: "고대 해상 유적지인 난마돌(Nan Madol)이라는 신비로운 바다 위의 거석 유적이 있습니다."
  },
  {
    id: "mh",
    code: "mh",
    nameKo: "마셜 제도",
    nameEn: "Marshall Islands",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "마주로",
    symbolism: "태평양 북부 하와이와 필리핀 사이에 위치한 산호초 환초 군도 국가입니다.",
    funFact: "과거 미국의 핵실험 장소였던 비키니 환초가 속해 있는 역사적인 섬나라입니다."
  },
  {
    id: "to",
    code: "to",
    nameKo: "통가",
    nameEn: "Tonga",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "누쿠알로파",
    symbolism: "남태평양에 위치한 170여 개의 섬으로 이루어진 폴리네시아의 왕국입니다.",
    funFact: "태평양에서 왕정이 유지되고 있는 유일한 전통 왕국으로 '친절한 섬'이라 불립니다."
  },
  {
    id: "ws",
    code: "ws",
    nameKo: "사모아",
    nameEn: "Samoa",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "아피아",
    symbolism: "남태평양 폴리네시아 지역에 위치하며 아름다운 화산섬들로 이루어진 국가입니다.",
    funFact: "소설가 로버트 루이스 스티븐슨이 말년을 보내며 작품을 집필했던 아름다운 섬입니다."
  },
  {
    id: "sb",
    code: "sb",
    nameKo: "솔로몬 제도",
    nameEn: "Solomon Islands",
    continentKo: "오세아니아",
    difficulty: 5,
    capitalKo: "호니아라",
    symbolism: "파푸아뉴기니 동쪽에 위치한 수백 개의 화산섬과 산호섬으로 이루어진 섬나라입니다.",
    funFact: "제2차 세계대전 당시 치열한 과달카날 전투가 벌어졌던 역사적인 장소입니다."
  },
  {
    id: "pg",
    code: "pg",
    nameKo: "파푸아뉴기니",
    nameEn: "Papua New Guinea",
    continentKo: "오세아니아",
    difficulty: 4,
    capitalKo: "포트모르즈비",
    symbolism: "오세아니아 북동부에 위치하며 뉴기니섬 동쪽 절반을 차지하는 대국입니다.",
    funFact: "수백 가지의 고유 언어와 독특한 원주민 문화가 공존하는 인류학의 보물창고입니다."
  },
  {
    id: "tl",
    code: "tl",
    nameKo: "동티모르",
    nameEn: "Timor-Leste",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "딜리",
    symbolism: "동남아시아 인도네시아 군도 최동단 티모르섬 동쪽에 위치한 신생 독립국입니다.",
    funFact: "21세기 최초로 독립한 아시아의 민주주의 국가로 아름다운 산과 바다를 품고 있습니다."
  },
  {
    id: "mv",
    code: "mv",
    nameKo: "몰디브",
    nameEn: "Maldives",
    continentKo: "아시아",
    difficulty: 4,
    capitalKo: "말레",
    symbolism: "인도양 남서부에 1,000개가 넘는 산호섬으로 이루어진 세계적인 휴양지입니다.",
    funFact: "평균 해발고도가 매우 낮아 '지구 온난화로 사라질 위기에 처한 낙원'으로 널리 알려져 있습니다."
  },
  {
    id: "sc",
    code: "sc",
    nameKo: "세이셸",
    nameEn: "Seychelles",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "빅토리아",
    symbolism: "아프리카 동쪽 인도양에 위치한 115개의 섬들로 이루어진 지상 낙원 같은 섬나라입니다.",
    funFact: "세계에서 가장 희귀한 야자수인 '코코 드 메르'와 거대한 알다브라 육지거북의 고향입니다."
  },
  {
    id: "mu",
    code: "mu",
    nameKo: "모리셔스",
    nameEn: "Mauritius",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "포트루이스",
    symbolism: "아프리카 동쪽 인도양 마다가스카르 동쪽에 위치한 화산 섬나라입니다.",
    funFact: "과거 멸종된 새 도도새의 고향이며 휴양지와 다국적 문화로 유명한 평화로운 국가입니다."
  },
  {
    id: "mg",
    code: "mg",
    nameKo: "마다가스카르",
    nameEn: "Madagascar",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "안타나나리보",
    symbolism: "아프리카 동해안 인도양에 위치한 세계에서 네 번째로 큰 거대한 섬나라입니다.",
    funFact: "전 세계 어디에도 없는 고유 동물인 여우원숭이와 독특한 바오바브나무의 자생지입니다."
  },
  {
    id: "ls",
    code: "ls",
    nameKo: "레소토",
    nameEn: "Lesotho",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "마세루",
    symbolism: "남아프리카공화국 영토 한가운데에 완전히 둘러싸여 있는 산악 내륙국입니다.",
    funFact: "국토 전역의 고도가 높아 '하늘 위의 왕국'이라 불리며 겨울에는 눈이 내려 스키를 즐길 수 있습니다."
  },
  {
    id: "bw",
    code: "bw",
    nameKo: "보츠와나",
    nameEn: "Botswana",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "가보로네",
    symbolism: "아프리카 남부 내륙에 위치하며 국토의 상당 부분이 칼라하리 사막인 국가입니다.",
    funFact: "세계 최대의 다이아몬드 생산국 중 하나이며 오카방고 삼각주의 야생동물 낙원으로 유명합니다."
  },
  {
    id: "na",
    code: "na",
    nameKo: "나미비아",
    nameEn: "Namibia",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "빈트후크",
    symbolism: "아프리카 남서부 대서양 연안에 위치하며 붉은 사막이 펼쳐진 국가입니다.",
    funFact: "세계에서 가장 오래된 나미브 사막과 사막 코끼리, 그리고 붉은 모래언덕 데스vlei가 있습니다."
  },
  {
    id: "cv",
    code: "cv",
    nameKo: "카보베르데",
    nameEn: "Cape Verde",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "프라야",
    symbolism: "아프리카 서북쪽 대서양 해상에 위치한 10개의 화산섬으로 이루어진 섬나라입니다.",
    funFact: "아프리카와 유럽, 아메리카의 문화가 독특하게 융합된 감미로운 모나 나이브 음악의 고향입니다."
  },
  {
    id: "gq",
    code: "gq",
    nameKo: "적도 기니",
    nameEn: "Equatorial Guinea",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "말라보",
    symbolism: "중앙아프리카 기니만에 위치하며 본토와 섬 지역으로 나뉘어 있는 국가입니다.",
    funFact: "아프리카에서 스페인어를 공공어로 사용하는 유일한 국가이며 풍부한 석유 자원을 자랑합니다."
  },
  {
    id: "ga",
    code: "ga",
    nameKo: "가봉",
    nameEn: "Gabon",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "리브르빌",
    symbolism: "중앙아프리카 서해안 적도 부근에 위치하며 울창한 열대우림이 국토를 덮고 있습니다.",
    funFact: "국토의 80% 이상이 정글과 숲으로 이루어져 있어 천혜의 자연과 야생 고릴라의 안식처입니다."
  },
  {
    id: "ao",
    code: "ao",
    nameKo: "앙골라",
    nameEn: "Angola",
    continentKo: "아프리카",
    difficulty: 4,
    capitalKo: "루안다",
    symbolism: "아프리카 서남부 대서양 연안에 위치하며 풍부한 광물 자원을 가진 국가입니다.",
    funFact: "포르투갈어권 아프리카 국가 중 경제적 잠재력이 매우 크며 아름다운 대서양 해변을 품고 있습니다."
  },
  {
    id: "lk",
    code: "lk",
    nameKo: "스리랑카",
    nameEn: "Sri Lanka",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "스리자야와르데네푸라코테",
    symbolism: "인도 남쪽 인도양에 위치한 물방울 모양의 섬나라로 '인도양의 진주'로 불립니다.",
    funFact: "세계적인 홍차(실론티) 산지이며 찬란한 불교 유적과 아름다운 해변을 자랑합니다."
  },
  {
    id: "bn",
    code: "bn",
    nameKo: "브루나이",
    nameEn: "Brunei",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "반다르스리베가완",
    symbolism: "동남아시아 보르네오섬 북부 해안에 위치한 이슬람 왕국입니다.",
    funFact: "풍부한 석유와 천연가스 매장량 덕분에 세금이 없고 복지가 훌륭한 부유한 국가입니다."
  },
  {
    id: "np",
    code: "np",
    nameKo: "네팔",
    nameEn: "Nepal",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "카트만두",
    symbolism: "중국과 인도 사이 히말라야산맥 중앙에 위치한 산악 내륙국입니다.",
    funFact: "세계 최고봉 에베레스트를 포함해 8천 미터 급 고산 8개가 위치한 산악인의 천국입니다."
  },
  {
    id: "kz",
    code: "kz",
    nameKo: "카자흐스탄",
    nameEn: "Kazakhstan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "아스타나",
    symbolism: "중앙아시아와 동유럽에 걸쳐 있는 세계에서 가장 큰 내륙 국가입니다.",
    funFact: "광활한 초원과 사막, 그리고 우주선 발사장(바이코누르 우주기지)으로 유명합니다."
  },
  {
    id: "kg",
    code: "kg",
    nameKo: "키르기스스탄",
    nameEn: "Kyrgyzstan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "비슈케크",
    symbolism: "중앙아시아 톈산산맥의 험준한 산악 지대에 위치한 내륙 국가입니다.",
    funFact: "국토의 대부분이 산악이라 '중앙아시아의 스위스'라 불리며 아름다운 고산 호수 이식쿨이 있습니다."
  },
  {
    id: "tj",
    code: "tj",
    nameKo: "타지키스탄",
    nameEn: "Tajikistan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "두샨베",
    symbolism: "중앙아시아 산악 지대에 위치하며 국토의 대부분이 높은 산으로 둘러싸인 내륙국입니다.",
    funFact: "'세상의 지붕'이라 불리는 파미르 고원이 위치해 있어 등산가들과 모험가들의 사랑을 받습니다."
  },
  {
    id: "uz",
    code: "uz",
    nameKo: "우즈베키스탄",
    nameEn: "Uzbekistan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "타슈켄트",
    symbolism: "중앙아시아 중심부에 위치하며 과거 실크로드의 교차로 역할을 한 내륙국입니다.",
    funFact: "사마르칸트와 부하라 등 찬란한 이슬람 건축 유적과 타일 예술로 유명합니다."
  },
  {
    id: "tm",
    code: "tm",
    nameKo: "투르크메니스탄",
    nameEn: "Turkmenistan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "아슈하바트",
    symbolism: "중앙아시아 서남부에 위치하며 국토 대부분이 가라쿰 사막인 국가입니다.",
    funFact: "꺼지지 않는 거대한 불타는 분화구인 '지옥의 문'이 위치한 신비로운 나라입니다."
  },
  {
    id: "az",
    code: "az",
    nameKo: "아제르바이잔",
    nameEn: "Azerbaijan",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "바쿠",
    symbolism: "동유럽과 서아시아의 경계인 캅카스 지역 카스피해 연안에 위치한 국가입니다.",
    funFact: "석유와 천연가스가 풍부하여 '불의 나라'로 불리며 현대적인 건축물과 고대 문화가 공존합니다."
  },
  {
    id: "ge",
    code: "ge",
    nameKo: "조지아",
    nameEn: "Georgia",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "트빌리시",
    symbolism: "캅카스산맥 남쪽 흑해 연안에 위치한 아름다운 산악 국가입니다.",
    funFact: "세계에서 가장 오래된 와인 양조 역사를 가진 와인의 발원지 중 하나입니다."
  },
  {
    id: "am",
    code: "am",
    nameKo: "아르메니아",
    nameEn: "Armenia",
    continentKo: "아시아",
    difficulty: 3,
    capitalKo: "예레반",
    symbolism: "캅카스 지역에 위치한 내륙국으로 성경 속 노아의 방주가 멈춘 아라라트산이 바라보이는 곳입니다.",
    funFact: "세계 최초로 기독교를 국교로 공인한 역사 깊은 문화유산을 가지고 있습니다."
  },
  {
    id: "me",
    code: "me",
    nameKo: "몬테네그로",
    nameEn: "Montenegro",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "포드고리차",
    symbolism: "발칸반도 아드리아해 연안에 위치하며 이름처럼 험준한 산악 지형이 특징인 국가입니다.",
    funFact: "아드리아해의 피오르드 협곡과 아름다운 중세 도시 코토르로 전 세계 여행객을 매료시킵니다."
  },
  {
    id: "ee",
    code: "ee",
    nameKo: "에스토니아",
    nameEn: "Estonia",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "탈린",
    symbolism: "발트해 동쪽에 위치한 북유럽의 발트 3국 중 가장 북쪽에 있는 국가입니다.",
    funFact: "세계에서 가장 혁신적인 IT 전자정부 시스템을 갖춘 디지털 강국이자 숲이 우거진 나라입니다."
  },
  {
    id: "lv",
    code: "lv",
    nameKo: "라트비아",
    nameEn: "Latvia",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "리가",
    symbolism: "발트해 연안에 위치한 북유럽 발트 3국 중 가운데에 있는 국가입니다.",
    funFact: "수도 리가는 아름다운 아르누보 건축물 유산으로 가득하며 국토의 절반이 숲입니다."
  },
  {
    id: "lt",
    code: "lt",
    nameKo: "리투아니아",
    nameEn: "Lithuania",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "빌뉴스",
    symbolism: "발트해 동남쪽 연안에 위치한 북유럽 발트 3국 중 가장 남쪽에 있는 국가입니다.",
    funFact: "중세 시대 유럽에서 가장 영토가 넓었던 대공국의 역사를 가지고 있으며 호수가 많습니다."
  },
  {
    id: "mt",
    code: "mt",
    nameKo: "몰타",
    nameEn: "Malta",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "발레타",
    symbolism: "지중해 남부 이탈리아 아래에 위치한 작고 햇살 가득한 섬나라입니다.",
    funFact: "기사단의 역사와 찬란한 중세 요새 도시가 보존되어 있어 영화 촬영지로 사랑받습니다."
  },
  {
    id: "ad",
    code: "ad",
    nameKo: "안도라",
    nameEn: "Andorra",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "안도라라벨랴",
    symbolism: "프랑스와 스페인 사이 피레네산맥 고산 지대에 위치한 작은 공국입니다.",
    funFact: "면적이 매우 작지만 수려한 산악 풍경과 면세 쇼핑, 스키 리조트로 유명합니다."
  },
  {
    id: "li",
    code: "li",
    nameKo: "리히텐슈타인",
    nameEn: "Liechtenstein",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "파두츠",
    symbolism: "스위스와 오스트리아 사이에 위치한 알프스 자락의 아름다운 내륙 소국입니다.",
    funFact: "세계에서 1인당 국민소득이 가장 높은 국가 중 하나이며 우표 수집가들에게 성지로 불립니다."
  },
  {
    id: "mc",
    code: "mc",
    nameKo: "모나코",
    nameEn: "Monaco",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "모나코",
    symbolism: "서유럽 지중해 연안 프랑스 국경에 인접한 세계에서 두 번째로 작은 독립 소국입니다.",
    funFact: "화려한 요트 항구와 F1 그랑프리 자동차 경주, 그리고 세계적인 부호들의 휴양지로 유명합니다."
  },
  {
    id: "sm",
    code: "sm",
    nameKo: "산마리노",
    nameEn: "San Marino",
    continentKo: "유럽",
    difficulty: 3,
    capitalKo: "산마리노",
    symbolism: "이탈리아 반도 북동부 산악 지대에 위치한 세계에서 가장 오래된 공화국입니다.",
    funFact: "나라 전체가 티타노산의 가파른 언덕 위에 요새처럼 세워져 있어 환상적인 전망을 자랑합니다."
  }
];

// ===== 你的 Telegram 链接在这里修改 =====
const TELEGRAM_LINK = "https://t.me/Joy_kup";

// ===== 状态管理 =====
const LANGUAGE_MAP = {
  all: null,
  hobo: "HOBO手袋",
  shoulder: "单肩包",
  backpack: "双肩包",
  mini: "迷你包",
  belt: "腰包",
  crossbody: "斜挎包",
  tote: "手提包",
  bucket: "水桶包",
  date: "相亲包"
};

const CATEGORY_KEY_MAP = {
  "HOBO手袋": "hobo",
  "单肩包": "shoulder",
  "双肩包": "backpack",
  "迷你包": "mini",
  "腰包": "belt",
  "斜挎包": "crossbody",
  "手提包": "tote",
  "水桶包": "bucket",
  "相亲包": "date"
};

const PRODUCT_DESC_TRANSLATIONS = {
  ko: {
    "HOBO手袋": "HOBO 핸드백",
    "单肩包": "숄더백",
    "双肩包": "백팩",
    "手袋": "토트백",
    "斜挎包": "크로스바디",
    "水桶包": "버킷백",
    "迷你包": "미니백"
  },
  en: {
    "HOBO手袋": "HOBO bag",
    "单肩包": "shoulder bag",
    "双肩包": "backpack",
    "手袋": "handbag",
    "斜挎包": "crossbody bag",
    "水桶包": "bucket bag",
    "迷你包": "mini bag"
  },
  zh: {
    "HOBO手袋": "HOBO手袋",
    "单肩包": "单肩包",
    "双肩包": "双肩包",
    "手袋": "手袋",
    "斜挎包": "斜挎包",
    "水桶包": "水桶包",
    "迷你包": "迷你包"
  },
  de: {
    "HOBO手袋": "HOBO Tasche",
    "单肩包": "Schultertasche",
    "双肩包": "Rucksack",
    "手袋": "Handtasche",
    "斜挎包": "Umhängetasche",
    "水桶包": "Bucket-Tasche",
    "迷你包": "Mini-Tasche"
  }
};

const IMAGE_LABEL_TRANSLATIONS = {
  ko: "이미지",
  en: "Image",
  zh: "图",
  de: "Bild"
};

const PRODUCT_NAME_TRANSLATIONS = {
  ko: {
    1: "ALL IN BB 백 모노그램 엠프렝뜨 패션 백 M13480",
    2: "ALL IN BB 백 바이컬러 모노그램 엠프렝뜨 가죽 패션 백 M13045",
    3: "CARRYALL 소형 백 바이컬러 모노그램 엠프렝뜨 가죽 패션 백 M27573",
    4: "LOOP HOBO 백 모노그램 패션 백 M46311",
    5: "X TM CARRYALL EAST WEST 백 기타 모노그램 캔버스 패션 백 M27578",
    6: "THE DROP 소형 백 모노그램 패션 백 M12940",
    7: "BACKUP 백팩 모노그램 엠프렝뜨 패션 백 M47106",
    8: "BACKUP 백팩 바이컬러 모노그램 엠프렝뜨 가죽 패션 백 M12987",
    9: "MONTSOURIS CARGO 백팩 모노그램 데님 패션 백 M27330",
    10: "MONTSOURIS 소형 백팩 기타 모노그램 캔버스 패션 백 M15135",
    11: "SOHO 중형 백팩 모노그램 패션 백 M14653",
    12: "CARRY IT 백 기타 모노그램 캔버스 패션 백 M15121",
    13: "NEVERFULL INSIDE OUT BB 백 기타 가죽 여성 백 M28336",
    14: "NEVERFULL INSIDE OUT 중형 백 기타 가죽 여성 백 M28352",
    15: "ONTHEGO EAST WEST 백 바이컬러 모노그램 엠프렝뜨 가죽 패션 백 M27577",
    16: "ONTHEGO 소형 백 기타 모노그램 캔버스 패션 백 M15121",
    17: "ONTHEGO 소형 백 바이컬러 모노그램 엠프렝뜨 가죽 패션 백 M28313",
    18: "ALL IN BB 크로스바디 백 기타 모노그램 캔버스 여성 백 M27529",
    19: "ALL IN BB 크로스바디 백 기타 모노그램 캔버스 패션 백 M28335",
    20: "ALMA BB 백 기타 모노그램 캔버스 여성 백 M27526",
    21: "ALMA BB 백 기타 모노그램 캔버스 여성 백 M27526",
    22: "LV x TM SPEEDY SOFT 30 백 기타 모노그램 캔버스 패션 백 M27789",
    23: "SPEEDY BANDOULIÈRE 20 백 기타 모노그램 캔버스 여성 백 M27530",
    24: "ALL IN BB 버킷 백 모노그램 데님 패션 백 M27626",
    25: "BLOSSOM 소형 버킷 백 mahina 패션 백 M27599",
    26: "NOÉ TRUNK 버킷 백 H27 패션 백 M29391",
    27: "PETIT NOÉ 버킷 백 모노그램 패션 백 M46984",
    28: "LV x TM NANO SPEEDY 백 기타 모노그램 캔버스 미니 백 M13391",
    29: "PETITE MALLE 백 모노그램 패션 백 M28243",
    30: "POCHETTE MIA 백 모노그램 소형 가죽 제품 M26191"
  },
  en: {
    1: "ALL IN BB bag Monogram Empreinte fashion bag M13480",
    2: "ALL IN BB bag Bicolor Monogram Empreinte leather fashion bag M13045",
    3: "CARRYALL small bag Bicolor Monogram Empreinte leather fashion bag M27573",
    4: "LOOP HOBO bag Monogram fashion bag M46311",
    5: "X TM CARRYALL EAST WEST bag Other Monogram canvas fashion bag M27578",
    6: "THE DROP small bag Monogram fashion bag M12940",
    7: "BACKUP backpack Monogram Empreinte fashion bag M47106",
    8: "BACKUP backpack Bicolor Monogram Empreinte leather fashion bag M12987",
    9: "MONTSOURIS CARGO backpack Monogram denim fashion bag M27330",
    10: "MONTSOURIS small backpack Other Monogram canvas fashion bag M15135",
    11: "SOHO medium backpack Monogram fashion bag M14653",
    12: "CARRY IT bag Other Monogram canvas fashion bag M15121",
    13: "NEVERFULL INSIDE OUT BB bag Other leathers women bag M28336",
    14: "NEVERFULL INSIDE OUT medium bag Other leathers women bag M28352",
    15: "ONTHEGO EAST WEST bag Bicolor Monogram Empreinte leather fashion bag M27577",
    16: "ONTHEGO small bag Other Monogram canvas fashion bag M15121",
    17: "ONTHEGO small bag Bicolor Monogram Empreinte leather fashion bag M28313",
    18: "ALL IN BB crossbody bag Other Monogram canvas women bag M27529",
    19: "ALL IN BB crossbody bag Other Monogram canvas fashion bag M28335",
    20: "ALMA BB bag Other Monogram canvas women bag M27526",
    21: "ALMA BB bag Other Monogram canvas women bag M27526",
    22: "LV x TM SPEEDY SOFT 30 bag Other Monogram canvas fashion bag M27789",
    23: "SPEEDY BANDOULIÈRE 20 bag Other Monogram canvas women bag M27530",
    24: "ALL IN BB bucket bag Monogram denim fashion bag M27626",
    25: "BLOSSOM small bucket bag Mahina fashion bag M27599",
    26: "NOÉ TRUNK bucket bag H27 fashion bag M29391",
    27: "PETIT NOÉ bucket bag Monogram fashion bag M46984",
    28: "LV x TM NANO SPEEDY bag Other Monogram canvas mini bag M13391",
    29: "PETITE MALLE bag Monogram fashion bag M28243",
    30: "POCHETTE MIA bag Monogram mini leather good M26191"
  },
  zh: {
    1: "all in bb 手袋 monogram empreinte 时尚手袋 M13480",
    2: "all in bb 手袋 bicolor monogram empreinte leather 时尚手袋 M13045",
    3: "carryall 小号手袋 bicolor monogram empreinte leather 时尚手袋 M27573",
    4: "loop hobo 手袋 monogram 时尚手袋 M46311",
    5: "x tm carryall east west 手袋 其他monogram 帆布 时尚手袋 M27578",
    6: "the drop 小号手袋 monogram 时尚手袋 M12940",
    7: "backup 双肩包 monogram empreinte 时尚手袋 M47106",
    8: "backup 双肩包 bicolor monogram empreinte leather 时尚手袋 M12987",
    9: "montsouris cargo 双肩包 monogram denim 时尚手袋 M27330",
    10: "montsouris 小号双肩包 其他monogram 帆布 时尚手袋 M15135",
    11: "soho 中号双肩包 monogram 时尚手袋 M14653",
    12: "carry it 手袋 其他monogram 帆布 时尚手袋 M15121",
    13: "neverfull inside out bb 手袋 other leathers 女士包袋 M28336",
    14: "neverfull inside out 中号手袋 other leathers 女士包袋 M28352",
    15: "onthego east west 手袋 bicolor monogram empreinte leather 时尚手袋 M27577",
    16: "carry it 手袋 其他monogram 帆布 时尚手袋 M15121",
    17: "onthego 小号手袋 bicolor monogram empreinte leather 时尚手袋 M28313",
    18: "all in bb 手袋 其他monogram 帆布 女士包袋 M27529",
    19: "all in bb 手袋 其他monogram 帆布 时尚手袋 M28335",
    20: "alma bb 手袋 其他monogram 帆布 女士包袋 M27526",
    21: "alma bb 手袋 其他monogram 帆布 女士包袋 M27526",
    22: "lv x tm speedy soft 30 手袋 其他monogram 帆布 时尚手袋 M27789",
    23: "speedy bandoulière 20 手袋 其他monogram 帆布 女士包袋 M27530",
    24: "all in bb 手袋 monogram denim 时尚手袋 M27626",
    25: "blossom 小号手袋 mahina 时尚手袋 M27599",
    26: "noé trunk 手袋 h27 时尚手袋 M29391",
    27: "petit noé 手袋 monogram 时尚手袋 M46984",
    28: "x tm nano speedy 手袋 其他monogram 帆布 小型皮具 M13391",
    29: "petite malle 手袋 monogram 时尚手袋 M28243",
    30: "pochette mia 手袋 monogram 小型皮具 M26191"
  },
  de: {
    1: "ALL IN BB Tasche Monogram Empreinte Fashion Tasche M13480",
    2: "ALL IN BB Tasche Bicolor Monogram Empreinte Leder Fashion Tasche M13045",
    3: "CARRYALL kleine Tasche Bicolor Monogram Empreinte Leder Fashion Tasche M27573",
    4: "LOOP HOBO Tasche Monogram Fashion Tasche M46311",
    5: "X TM CARRYALL EAST WEST Tasche Other Monogram Canvas Fashion Tasche M27578",
    6: "THE DROP kleine Tasche Monogram Fashion Tasche M12940",
    7: "BACKUP Rucksack Monogram Empreinte Fashion Tasche M47106",
    8: "BACKUP Rucksack Bicolor Monogram Empreinte Leder Fashion Tasche M12987",
    9: "MONTSOURIS CARGO Rucksack Monogram Denim Fashion Tasche M27330",
    10: "MONTSOURIS kleiner Rucksack Other Monogram Canvas Fashion Tasche M15135",
    11: "SOHO mittlerer Rucksack Monogram Fashion Tasche M14653",
    12: "CARRY IT Tasche Other Monogram Canvas Fashion Tasche M15121",
    13: "NEVERFULL INSIDE OUT BB Tasche Other Leathers Damen Tasche M28336",
    14: "NEVERFULL INSIDE OUT mittlere Tasche Other Leathers Damen Tasche M28352",
    15: "ONTHEGO EAST WEST Tasche Bicolor Monogram Empreinte Leder Fashion Tasche M27577",
    16: "ONTHEGO kleine Tasche Other Monogram Canvas Fashion Tasche M15121",
    17: "ONTHEGO kleine Tasche Bicolor Monogram Empreinte Leder Fashion Tasche M28313",
    18: "ALL IN BB Umhängetasche Other Monogram Canvas Damen Tasche M27529",
    19: "ALL IN BB Umhängetasche Other Monogram Canvas Fashion Tasche M28335",
    20: "ALMA BB Tasche Other Monogram Canvas Damen Tasche M27526",
    21: "ALMA BB Tasche Other Monogram Canvas Damen Tasche M27526",
    22: "LV x TM SPEEDY SOFT 30 Tasche Other Monogram Canvas Fashion Tasche M27789",
    23: "SPEEDY BANDOULIÈRE 20 Tasche Other Monogram Canvas Damen Tasche M27530",
    24: "ALL IN BB Bucket Tasche Monogram Denim Fashion Tasche M27626",
    25: "BLOSSOM kleine Bucket Tasche Mahina Fashion Tasche M27599",
    26: "NOÉ TRUNK Bucket Tasche H27 Fashion Tasche M29391",
    27: "PETIT NOÉ Bucket Tasche Monogram Fashion Tasche M46984",
    28: "LV x TM NANO SPEEDY Tasche Other Monogram Canvas Mini Tasche M13391",
    29: "PETITE MALLE Tasche Monogram Fashion Tasche M28243",
    30: "POCHETTE MIA Tasche Monogram Mini Lederartikel M26191"
  }
};

const TRANSLATIONS = {
  ko: {
    nav: { home: "홈", contact: "문의하기", theme: "테마 변경", menu: "메뉴" },
    page: { title: "프리미엄 가방 전문관", subtitle: "전 세계 고품질 패션 가방을 엄선하여 모든 스타일 요구를 만족시킵니다" },
    categories: {
      all: "전체",
      hobo: "HOBO 핸드백",
      shoulder: "숄더백",
      backpack: "백팩",
      mini: "미니백",
      belt: "벨트백",
      crossbody: "크로스바디",
      tote: "토트백",
      bucket: "버킷백",
      date: "데이트백"
    },
    filter: { priceLabel: "가격대", allPrices: "전체 가격", range1: "$0 - $500", range2: "$500 - $1000", range3: "$1000 - $2000", range4: "$2000 이상" },
    sort: { label: "정렬", manual: "기본", priceAsc: "가격 낮은 순", priceDesc: "가격 높은 순", new: "최신" },
    view: { gridTitle: "그리드 보기", listTitle: "리스트 보기" },
    loading: "로딩 중...",
    modal: { service1: "🚚 빠른 배송", service2: "🔄 30일 무료 반품", service3: "🔒 안전 결제", telegram: "Telegram 지원" }
  },
  en: {
    nav: { home: "Home", contact: "Contact", theme: "Toggle theme", menu: "Menu" },
    page: { title: "Luxury Bags Collection", subtitle: "Discover premium fashion handbags from around the world" },
    categories: {
      all: "All",
      hobo: "HOBO Bags",
      shoulder: "Shoulder Bags",
      backpack: "Backpacks",
      mini: "Mini Bags",
      belt: "Belt Bags",
      crossbody: "Crossbody",
      tote: "Tote Bags",
      bucket: "Bucket Bags",
      date: "Date Bags"
    },
    filter: { priceLabel: "Price range", allPrices: "All prices", range1: "$0 - $500", range2: "$500 - $1000", range3: "$1000 - $2000", range4: "$2000+" },
    sort: { label: "Sort", manual: "Default", priceAsc: "Price low to high", priceDesc: "Price high to low", new: "Newest" },
    view: { gridTitle: "Grid view", listTitle: "List view" },
    loading: "Loading...",
    modal: { service1: "🚚 Fast shipping", service2: "🔄 30-day worry-free returns", service3: "🔒 Secure payment", telegram: "Telegram support" }
  },
  zh: {
    nav: { home: "首页", contact: "联系我们", theme: "切换主题", menu: "菜单" },
    page: { title: "精品包包专区", subtitle: "精选全球高品质时尚包包，满足您的各种需求喜好" },
    categories: {
      all: "全部",
      hobo: "HOBO手袋",
      shoulder: "单肩包",
      backpack: "双肩包",
      mini: "迷你包",
      belt: "腰包",
      crossbody: "斜挎包",
      tote: "手提包",
      bucket: "水桶包",
      date: "相亲包"
    },
    filter: { priceLabel: "价格区间", allPrices: "全部价格", range1: "$0 - $500", range2: "$500 - $1000", range3: "$1000 - $2000", range4: "$2000以上" },
    sort: { label: "排序", manual: "默认", priceAsc: "价格低到高", priceDesc: "价格高到低", new: "最新" },
    view: { gridTitle: "网格视图", listTitle: "列表视图" },
    loading: "加载中...",
    modal: { service1: "🚚 极速发货", service2: "🔄 30天无忧退换", service3: "🔒 安全支付", telegram: "Telegram 支持" }
  },
  de: {
    nav: { home: "Startseite", contact: "Kontakt", theme: "Design wechseln", menu: "Menü" },
    page: { title: "Luxus Taschen Kollektion", subtitle: "Entdecken Sie hochwertige Designer-Handtaschen aus aller Welt" },
    categories: {
      all: "Alle",
      hobo: "HOBO Taschen",
      shoulder: "Schultertaschen",
      backpack: "Rucksäcke",
      mini: "Mini-Taschen",
      belt: "Gürteltaschen",
      crossbody: "Umhängetaschen",
      tote: "Taschen",
      bucket: "Bucket-Taschen",
      date: "Date Bags"
    },
    filter: { priceLabel: "Preisspanne", allPrices: "Alle Preise", range1: "$0 - $500", range2: "$500 - $1000", range3: "$1000 - $2000", range4: "$2000+" },
    sort: { label: "Sortieren", manual: "Standard", priceAsc: "Preis aufsteigend", priceDesc: "Preis absteigend", new: "Neueste" },
    view: { gridTitle: "Rasteransicht", listTitle: "Listenansicht" },
    loading: "Wird geladen...",
    modal: { service1: "🚚 Schneller Versand", service2: "🔄 30 Tage sorgenfreie Rückgabe", service3: "🔒 Sichere Bezahlung", telegram: "Telegram-Unterstützung" }
  }
};

let currentCat = "all";
let currentSort = "manual";
let currentPriceFilter = null;
let currentLang = localStorage.getItem("language") || "ko";
let displayedCount = 12; // 初始显示12个商品
let displayedProducts = [];
let filteredProducts = [];
let isLoading = false; // 加载状态标志
let scrollTimeout = null; // 节流计时器

function translate(key) {
  return key.split(".").reduce((obj, part) => (obj && obj[part] ? obj[part] : null), TRANSLATIONS[currentLang]) || "";
}

function formatPrice(price) {
  return `$${new Intl.NumberFormat(currentLang, { maximumFractionDigits: 0 }).format(price)}`;
}

function translateProductDesc(desc) {
  const match = desc.match(/^(.+?)[，,]\s*共\s*(\d+)\s*张图片$/);
  if (!match) return desc;
  const categoryText = match[1];
  const count = match[2];
  const categoryTranslation = PRODUCT_DESC_TRANSLATIONS[currentLang]?.[categoryText] || categoryText;
  if (currentLang === "ko") {
    return `${categoryTranslation}, 이미지 ${count}장`;
  }
  if (currentLang === "en") {
    return `${categoryTranslation}, ${count} images`;
  }
  if (currentLang === "de") {
    return `${categoryTranslation}, ${count} Bilder`;
  }
  return `${categoryTranslation}, 共 ${count} 张图片`;
}

function getProductDisplayName(p) {
  return PRODUCT_NAME_TRANSLATIONS[currentLang]?.[p.id] || p.name;
}

function getProductDisplayDesc(p) {
  return translateProductDesc(p.desc);
}

function getProductCategoryLabel(p) {
  const key = CATEGORY_KEY_MAP[p.category];
  return translate(`categories.${key}`) || p.category;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = translate("page.title") || "LOUISVUITTON";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = translate(el.dataset.i18n);
    if (text) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const text = translate(el.dataset.i18nTitle);
    if (text) el.title = text;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const text = translate(el.dataset.i18nAria);
    if (text) el.setAttribute("aria-label", text);
  });

  document.querySelectorAll(".tab-btn[data-cat]").forEach((btn) => {
    const key = btn.dataset.cat;
    const text = translate(`categories.${key}`);
    if (text) btn.textContent = text;
  });

  const priceSelect = document.querySelector(".filter-select");
  if (priceSelect) {
    const keys = ["filter.allPrices", "filter.range1", "filter.range2", "filter.range3", "filter.range4"];
    Array.from(priceSelect.options).forEach((option, index) => {
      const text = translate(keys[index]);
      if (text) option.textContent = text;
    });
  }

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    if (link.href.includes("t.me")) {
      link.textContent = `💬 ${translate("nav.contact")}`;
    } else {
      link.textContent = `🏠 ${translate("nav.home")}`;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href.includes("t.me")) {
      link.textContent = translate("nav.contact");
    } else {
      link.textContent = translate("nav.home");
    }
  });

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = currentLang;
  }
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = "ko";
  currentLang = lang;
  localStorage.setItem("language", lang);
  applyTranslations();
  const filtered = generateProducts();
  renderProducts(filtered);
}

function initializeLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }
  setLanguage(currentLang);
}

// ===== 渲染商品列表 =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function generateProducts() {
  let result = PRODUCTS;

  // 分类筛选
  if (currentCat !== "all") {
    result = result.filter((p) => p.category === LANGUAGE_MAP[currentCat]);
  }

  // 价格筛选
  if (currentPriceFilter) {
    const [min, max] = currentPriceFilter;
    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  // 排序
  if (currentSort === "price-asc") {
    result = result.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    result = result.sort((a, b) => b.price - a.price);
  } else if (currentSort === "new") {
    result = result.sort((a, b) => b.id - a.id);
  }

  filteredProducts = result;
  return result;
}

function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  const count = displayedCount;
  displayedProducts = products.slice(0, count);

  grid.innerHTML = "";
  displayedProducts.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-name">${getProductDisplayName(p)}</div>
        <div class="card-desc">${getProductDisplayDesc(p)}</div>
        <div class="card-footer">
          <div>
            <span class="card-price">${formatPrice(p.price)}</span>
          </div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

// ===== 增量加载（只添加新商品，不重新渲染所有） =====
function appendProducts(products) {
  const grid = document.getElementById("productGrid");
  const startIndex = displayedProducts.length;
  const endIndex = displayedCount;
  const newProducts = products.slice(startIndex, endIndex);

  newProducts.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <span class="card-fav">♡</span>
      </div>
      <div class="card-body">
        <div class="card-name">${getProductDisplayName(p)}</div>
        <div class="card-desc">${getProductDisplayDesc(p)}</div>
        <div class="card-footer">
          <div>
            <span class="card-price">${formatPrice(p.price)}</span>
          </div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });

  displayedProducts = products.slice(0, endIndex);
  isLoading = false;
}

// ===== 打开弹窗 =====
function openModal(p) {
  // 标题 & 描述
  document.getElementById("modalTitle").textContent = getProductDisplayName(p);
  document.getElementById("modalDesc").textContent = getProductDisplayDesc(p);

  // 价格
  document.getElementById("modalPrice").textContent = formatPrice(p.price);

  // 主图
  const mainImg = document.getElementById("modalMainImg");
  mainImg.src = p.images[0];
  mainImg.alt = p.name;


  // 缩略图
  const thumbsEl = document.getElementById("modalThumbs");
  thumbsEl.innerHTML = "";
  p.images.forEach((img, i) => {
    const t = document.createElement("img");
    t.className = `thumb-img ${i === 0 ? "active" : ""}`;
    t.src = img;
    t.alt = `${getProductDisplayName(p)} ${IMAGE_LABEL_TRANSLATIONS[currentLang] || "图"}${i + 1}`;
    t.loading = "lazy";
    t.addEventListener("click", () => {
      mainImg.src = img;
      thumbsEl.querySelectorAll(".thumb-img").forEach((el) => el.classList.remove("active"));
      t.classList.add("active");
    });
    thumbsEl.appendChild(t);
  });

  // Telegram 链接更新
  const msg = `
👜 商品咨询
名称：${getProductDisplayName(p)}
价格：${formatPrice(p.price)}
分类：${getProductCategoryLabel(p)}
`;

  const tgBtn = document.querySelector(".contact-btn.telegram");

  // 1. 设置跳转链接（直接进私聊）
  tgBtn.href = TELEGRAM_LINK;

  // 2. 点击时复制信息
  tgBtn.onclick = () => {
    navigator.clipboard.writeText(msg);
  };

  // 显示弹窗
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

// ===== 关闭弹窗 =====
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== Tab 切换 =====
function switchTab(tabId) {
  document.querySelectorAll(".modal-tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
  document.querySelector(`.modal-tab[data-tab="${tabId}"]`).classList.add("active");
  document.getElementById(`tab-${tabId}`).classList.add("active");
}
document.querySelectorAll(".modal-tab").forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

// ===== 分类 Tab 筛选 =====
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    displayedCount = 12; // 重置显示数量
    isLoading = false; // 重置加载状态
    const filtered = generateProducts();
    renderProducts(filtered);
  });
});

// ===== 视图切换 =====
document.getElementById("gridViewBtn").addEventListener("click", () => {
  document.getElementById("gridViewBtn").classList.add("active");
  document.getElementById("listViewBtn").classList.remove("active");
  document.getElementById("productGrid").style.gridTemplateColumns = "";
});
document.getElementById("listViewBtn").addEventListener("click", () => {
  document.getElementById("listViewBtn").classList.add("active");
  document.getElementById("gridViewBtn").classList.remove("active");
  document.getElementById("productGrid").style.gridTemplateColumns = "1fr";
});

// ===== 排序按钮 =====
document.querySelectorAll(".sort-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sort-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentSort = btn.dataset.sort;
    displayedCount = 12; // 重置显示数量
    isLoading = false; // 重置加载状态
    const filtered = generateProducts();
    renderProducts(filtered);
  });
});

// ===== 价格筛选 =====
// 为价格选择器添加标准属性和事件监听器
const priceSelect = document.querySelector(".filter-group select");
if (priceSelect) {
  priceSelect.setAttribute("title", "price");
  const options = priceSelect.querySelectorAll("option");
  if (options.length >= 5) {
    options[0].value = "";
    options[1].value = "0-500";
    options[2].value = "500-1000";
    options[3].value = "1000-2000";
    options[4].value = "2000+";
  }
  
  priceSelect.addEventListener("change", (e) => {
    const priceFilters = {
      "": null,
      "0-500": [0, 500],
      "500-1000": [500, 1000],
      "1000-2000": [1000, 2000],
      "2000+": [2000, Infinity]
    };
    currentPriceFilter = priceFilters[e.target.value];
    displayedCount = 12; // 重置显示数量
    isLoading = false; // 重置加载状态
    const filtered = generateProducts();
    renderProducts(filtered);
  });
}

// ===== 无限滚动加载 =====
window.addEventListener("scroll", () => {
  // 清除之前的计时器
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  // 使用节流，500ms 检查一次
  scrollTimeout = setTimeout(() => {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    
    // 避免重复加载，当滚动到85%且还有更多商品时加载
    if (scrollPercentage > 0.85 && displayedCount < filteredProducts.length && !isLoading) {
      isLoading = true;
      displayedCount += 6; // 每次加载6个
      
      // 使用 requestAnimationFrame 确保平滑加载
      requestAnimationFrame(() => {
        appendProducts(filteredProducts);
      });
    }
  }, 500); // 节流间隔500ms
});

// ===== 初始化渲染 =====
initializeLanguage();
isLoading = false;

// ===== 汉堡菜单 =====
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});
// 点击菜单链接后关闭
mobileMenu.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});

// ===== 主题切换 =====
const themeToggleBtn = document.getElementById("themeToggleBtn");
const html = document.documentElement;

// 从本地存储获取主题，默认为dark
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
updateThemeButton(savedTheme);

function updateThemeButton(theme) {
  themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeButton(newTheme);
});

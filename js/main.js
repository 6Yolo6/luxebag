// ===== 你的 Telegram 链接在这里修改 =====
const TELEGRAM_LINK = "https://t.me/Joy_kup";

// ===== 状态管理 =====
let currentCat = "all";
let currentSort = "manual";
let currentPriceFilter = null;
let displayedCount = 12; // 初始显示12个商品
let displayedProducts = [];
let filteredProducts = [];
let isLoading = false; // 加载状态标志
let scrollTimeout = null; // 节流计时器

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
    result = result.filter((p) => p.category === currentCat);
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
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div>
            <span class="card-price">$${p.price.toLocaleString()}</span>
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
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div>
            <span class="card-price">$${p.price.toLocaleString()}</span>
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
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;

  // 价格
  document.getElementById("modalPrice").textContent = `$${p.price.toLocaleString()}`;

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
    t.alt = `${p.name} 图${i + 1}`;
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
名称：${p.name}
价格：$${p.price}
分类：${p.category}
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
  const label = priceSelect.previousElementSibling;
  if (label && label.textContent.includes("价格")) {
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
generateProducts();
renderProducts(filteredProducts);
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

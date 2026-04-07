// ===== 你的 Telegram 链接在这里修改 =====
const TELEGRAM_LINK = "https://t.me/Joy_kup";

// ===== 渲染商品列表 =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function getBadgeClass(badge) {
  if (badge === "hot") return "badge-hot";
  if (badge === "new") return "badge-new";
  if (badge === "sale") return "badge-sale";
  return "";
}

function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="card-badge ${getBadgeClass(p.badge)}">${p.badgeText}</span>` : ""}
        <span class="card-fav">♡</span>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-score">${p.ratingScore}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="card-price">¥${p.price.toLocaleString()}</span>
            <span class="card-old-price">¥${p.oldPrice.toLocaleString()}</span>
          </div>
          <span class="card-sold">已售${p.sold > 999 ? (p.sold / 1000).toFixed(1) + "k" : p.sold}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

// ===== 打开弹窗 =====
function openModal(p) {
  // 标题 & 描述
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;

  // 评分
  document.getElementById("modalRating").innerHTML = `
    <span class="stars">${renderStars(p.rating)}</span>
    <span>${p.ratingScore} 分</span>
    <span style="color:var(--text-muted)">(${p.reviews} 条评价)</span>
    <span style="color:var(--text-muted)">已售 ${p.sold.toLocaleString()}</span>
  `;

  // 价格
  document.getElementById("modalPrice").textContent = `¥${p.price.toLocaleString()}`;
  document.getElementById("modalOldPrice").textContent = `¥${p.oldPrice.toLocaleString()}`;


  // 主图
  const mainImg = document.getElementById("modalMainImg");
  mainImg.src = p.images[0];
  mainImg.alt = p.name;

  // 徽章
  const badge = document.getElementById("modalBadge");
  if (p.badge) {
    badge.textContent = p.badgeText;
    badge.className = `modal-badge ${getBadgeClass(p.badge)}`;
  } else {
    badge.textContent = "";
    badge.className = "modal-badge";
  }

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

  // 颜色
  const colorsEl = document.getElementById("modalColors");
  colorsEl.innerHTML = "";
  p.colors.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = `modal-color-btn ${i === 0 ? "active" : ""}`;
    btn.style.background = c;
    btn.title = c;
    btn.addEventListener("click", () => {
      colorsEl.querySelectorAll(".modal-color-btn").forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
    });
    colorsEl.appendChild(btn);
  });

  // 尺码
  const sizesEl = document.getElementById("modalSizes");
  sizesEl.innerHTML = "";
  p.sizes.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = `modal-size-btn ${i === 0 ? "active" : ""}`;
    btn.textContent = s;
    btn.addEventListener("click", () => {
      sizesEl.querySelectorAll(".modal-size-btn").forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
    });
    sizesEl.appendChild(btn);
  });

  // Telegram 链接更新
  const msg = `
👜 商品咨询
名称：${p.name}
价格：¥${p.price}
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
let currentCat = "all";
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    const filtered =
      currentCat === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === currentCat);
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
  });
});

// ===== 初始化渲染 =====
renderProducts(PRODUCTS);

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

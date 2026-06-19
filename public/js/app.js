// ========== 塔罗牌占卜 - 应用逻辑 v4 (纯静态版，支持本地存储) ==========

var allCards = [];
var currentReading = null;
var history = [];
var cardBackDataURL = null;

var SUIT_ICONS = {
  wands: "🔥 权杖", cups: "💧 圣杯", swords: "⚔️ 宝剑", pentacles: "🪙 星币"
};

// ——— 初始化 ———
function initApp() {
  initCards();
  loadHistory();
  bindEvents();
  cardBackDataURL = renderCardBackToDataURL();

  // 引导弹窗：如果 localStorage 标记为已关闭则不显示
  try {
    if (localStorage.getItem("taluo_guide_shown")) {
      document.getElementById("guide-overlay").classList.add("hidden");
    }
  } catch(e) {}
}

function initCards() {
  var major = TAROT_DATA.major.map(function(c) { return Object.assign({}, c, { suit: "大阿尔卡纳", suitEn: "Major Arcana" }); });
  var wands = TAROT_DATA.wands.map(function(c) { return Object.assign({}, c); });
  var cups = TAROT_DATA.cups.map(function(c) { return Object.assign({}, c); });
  var swords = TAROT_DATA.swords.map(function(c) { return Object.assign({}, c); });
  var pentacles = TAROT_DATA.pentacles.map(function(c) { return Object.assign({}, c); });
  allCards = [].concat(major, wands, cups, swords, pentacles);
}

function bindEvents() {
  document.querySelectorAll(".spread-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".spread-btn").forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      resetDisplay();
    });
  });
  document.getElementById("draw-btn").addEventListener("click", startDraw);
  document.getElementById("guide-btn").addEventListener("click", closeGuide);
}

function closeGuide() {
  document.getElementById("guide-overlay").classList.add("hidden");
  try { localStorage.setItem("taluo_guide_shown", "true"); } catch(e) {}
}

function resetDisplay() {
  document.getElementById("cards-area").innerHTML =
    '<div class="empty-hint">' +
      '<div class="eh-icon">🃏</div>' +
      '<h3>已切换牌阵，点击抽牌开始</h3>' +
      '<p>卡牌将在这里依次展示</p>' +
    '</div>';
  document.getElementById("interpretation-area").classList.remove("visible");
}

// ——— 洗牌与抽卡 ———
function shuffle(arr) {
  var a = [].concat(arr);
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function getActiveSpread() {
  var active = document.querySelector(".spread-btn.active");
  return active ? active.dataset.spread : "single";
}

function startDraw() {
  var btn = document.getElementById("draw-btn");
  btn.disabled = true;
  btn.textContent = "🔮 命运螺旋中...";

  var spreadType = getActiveSpread();
  var counts = { single: 1, three: 3, cross: 10 };
  var count = counts[spreadType] || 1;
  var shuffled = shuffle(allCards);
  var drawn = shuffled.slice(0, count);

  currentReading = { spreadType: spreadType, cards: drawn.map(function(card, i) {
    return Object.assign({}, card, {
      position: Math.random() > 0.25 ? "upright" : "reversed",
      slotIndex: i,
      label: getSlotLabel(spreadType, i)
    });
  })};

  renderCards(currentReading.cards);
}

function getSlotLabel(type, i) {
  var m = {
    single: ["你的现状"],
    three: ["过去 · 缘起", "现在 · 当下", "未来 · 走向"],
    cross: ["1 现状", "2 挑战", "3 目标", "4 基础", "5 过去", "6 未来", "7 自我", "8 环境", "9 希望", "10 结果"]
  };
  return (m[type] || [])[i] || "第" + (i+1) + "张";
}

// ——— 渲染卡牌（带图版） ———
function renderCards(cards) {
  var area = document.getElementById("cards-area");
  area.innerHTML = "";

  cards.forEach(function(card, i) {
    var slot = document.createElement("div");
    slot.className = "card-slot";
    var frontURL = "";

    // 生成卡面图片（延迟渲染以保持流畅）
    setTimeout(function() {
      frontURL = renderCardToDataURL(card);
      var frontImg = slot.querySelector(".card-front-img");
      if (frontImg) frontImg.src = frontURL;
    }, 100);

    slot.innerHTML =
      '<div class="card-flipper" data-index="' + i + '">' +
        '<div class="card-face card-back">' +
          '<img class="card-back-img" src="' + cardBackDataURL + '" alt="卡背">' +
        '</div>' +
        '<div class="card-face card-front ' + (card.position === "reversed" ? "reversed" : "") + '">' +
          '<img class="card-front-img" src="" alt="' + card.name + '">' +
        '</div>' +
      '</div>' +
      '<div class="card-label">' + card.label + '</div>';

    area.appendChild(slot);

    setTimeout(function() {
      slot.querySelector(".card-flipper").classList.add("flipped");
    }, 500 + i * 350);
  });

  var totalWait = 500 + cards.length * 350 + 300;
  setTimeout(function() {
    document.getElementById("draw-btn").disabled = false;
    document.getElementById("draw-btn").textContent = "🔮 再次抽牌";
    showInterpretation();
  }, totalWait);
}

// ——— 解牌 ———
function showInterpretation() {
  var area = document.getElementById("interpretation-area");
  var content = document.getElementById("interpretation-content");
  var cards = currentReading.cards;
  var spreadType = currentReading.spreadType;

  var spreadName = { single: "单张占卜", three: "三张牌阵", cross: "凯尔特十字牌阵" }[spreadType] || spreadType;

  var html = '<h2>🔮 ' + spreadName + ' · 解牌</h2>';

  cards.forEach(function(card) {
    var rev = card.position === "reversed";
    var meaning = rev ? card.reversed : card.upright;
    var posText = rev ? "逆位" : "正位";
    var suitName = card.suit === "大阿尔卡纳" ? "大阿尔卡纳" : (SUIT_ICONS[card.suitEn ? card.suitEn.toLowerCase() : ""] || card.suit);

    html += '<div class="interp-card ' + (rev ? "reversed" : "") + '">' +
      '<h3>' + card.name + ' <span style="font-size:0.8rem;color:' + (rev ? "#7b5ea7" : "#d4a853") + '">（' + posText + '）</span></h3>' +
      '<div class="interp-suit">' + suitName + ' · ' + card.nameEn + ' · <strong>' + card.label + '</strong></div>' +
      '<div class="interp-section"><strong>🔮 关键词</strong><p>' + card.keywords + '</p></div>' +
      '<div class="interp-section"><strong>' + (rev ? "🌑 逆位含义" : "☀️ 正位含义") + '</strong><p>' + meaning + '</p></div>' +
      '<div class="interp-section"><strong>📖 牌面解读</strong><p>' + card.description + '</p></div>' +
    '</div>';
  });

  var majorN = cards.filter(function(c) { return c.suit === "大阿尔卡纳"; }).length;
  var upN = cards.filter(function(c) { return c.position === "upright"; }).length;
  var revN = cards.filter(function(c) { return c.position === "reversed"; }).length;

  var summary = "本次进行的是【" + spreadName + "】，共抽出 " + cards.length + " 张牌。";
  if (majorN > 0) summary += " 其中有 " + majorN + " 张大阿尔卡纳牌，预示这是一个重要的成长阶段。";
  else summary += " 以小阿尔卡纳为主，反映日常生活中的具体事务。";
  if (upN > revN) summary += " 正位牌较多，总体态势较为积极顺畅。";
  else if (revN > upN) summary += " 逆位牌较多，你可能需要反思和调整。";
  else summary += " 正逆位均衡，请同时关注有利与需要调整的方面。";
  summary += " 每张牌的具体含义请参见上方详细解读。记住，塔罗牌提供指引而非定数，真正的力量在你手中。✨";

  html += '<div class="interp-summary"><strong>🔯 综合解读</strong><p>' + summary + '</p></div>';
  content.innerHTML = html;
  area.classList.add("visible");
  setTimeout(function() { area.scrollIntoView({ behavior: "smooth", block: "start" }); }, 200);

  saveReading();
}

// ——— localStorage 历史记录（无需后端） ———
function saveReading() {
  if (!currentReading || !currentReading.cards) return;
  var r = currentReading;
  var record = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toISOString(),
    spreadType: r.spreadType,
    cards: r.cards.map(function(c) {
      return { name: c.name, nameEn: c.nameEn, position: c.position, label: c.label, suit: c.suit };
    })
  };

  try {
    var stored = JSON.parse(localStorage.getItem("taluo_history") || "[]");
    stored.unshift(record);
    if (stored.length > 50) stored = stored.slice(0, 50); // 最多 50 条
    localStorage.setItem("taluo_history", JSON.stringify(stored));
    history = stored;
    renderHistory();
  } catch(e) {}
}

function loadHistory() {
  try {
    var stored = JSON.parse(localStorage.getItem("taluo_history") || "[]");
    history = stored;
    renderHistory();
  } catch(e) {
    history = [];
    renderHistory();
  }
}

function renderHistory() {
  var el = document.getElementById("history-list");
  if (!history.length) {
    el.innerHTML = '<div class="no-history">暂无占卜记录，抽卡后将自动保存到本地</div>';
    return;
  }
  var typeNames = { single: "单张", three: "三张", cross: "凯尔特十字" };
  el.innerHTML = history.slice(0, 10).map(function(item) {
    var d = new Date(item.timestamp);
    var ts = (d.getMonth()+1) + "/" + d.getDate() + " " + String(d.getHours()).padStart(2,"0") + ":" + String(d.getMinutes()).padStart(2,"0");
    var names = item.cards.map(function(c) { return c.name; }).join("、");
    return '<div class="history-item" onclick="viewHistory(\'' + item.id + '\')">' +
      '<div><span class="h-type">' + (typeNames[item.spreadType] || item.spreadType) + '</span><span class="h-date">' + ts + '</span></div>' +
      '<div class="h-cards">' + names + '</div>' +
      '<button class="h-del" onclick="event.stopPropagation(); deleteHistory(\'' + item.id + '\')">✕</button></div>';
  }).join("");
}

function viewHistory(id) {
  var item = history.find(function(h) { return h.id === id; });
  if (!item) return;
  var fullCards = item.cards.map(function(c) {
    for (var k in TAROT_DATA) {
      var group = TAROT_DATA[k];
      var found = (group.find || function(){return false;}).call(group, function(g) { return g.name === c.name || g.id === c.id; });
      if (found) return Object.assign({}, found, c, { suit: c.suit || found.suit, suitEn: c.suitEn || found.suitEn });
    }
    return c;
  });
  currentReading = { spreadType: item.spreadType, cards: fullCards };
  renderCards(fullCards);
}

function deleteHistory(id) {
  history = history.filter(function(h) { return h.id !== id; });
  try {
    localStorage.setItem("taluo_history", JSON.stringify(history));
  } catch(e) {}
  renderHistory();
}

// ——— 启动 ———
document.addEventListener("DOMContentLoaded", initApp);

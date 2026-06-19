// ========== 塔罗牌面 Canvas 绘图引擎 ==========

const CARD_W = 300;
const CARD_H = 420;

// 颜色方案
const SUIT_COLORS = {
  wands:   { bg: ["#1a0a00", "#3d1c00"], accent: "#ff6b35", light: "#ff9a6c" },
  cups:    { bg: ["#001a2e", "#003d6b"], accent: "#4a9eff", light: "#7ab8ff" },
  swords:  { bg: ["#1a1a2e", "#2d2d4a"], accent: "#c0c0e0", light: "#e0e0f0" },
  pentacles: { bg: ["#1a2e1a", "#2d4a2d"], accent: "#4CAF50", light: "#81C784" },
  major:   { bg: ["#2e1a2e", "#4a2d4a"], accent: "#d4a853", light: "#e8c56a" }
};

// 绘制卡牌边框
function drawCardFrame(ctx, w, h, colors) {
  // 背景
  var grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, colors.bg[0]);
  grad.addColorStop(1, colors.bg[1]);
  ctx.fillStyle = grad;
  roundRect(ctx, 4, 4, w-8, h-8, 6);
  ctx.fill();

  // 外边框
  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 2;
  roundRect(ctx, 4, 4, w-8, h-8, 6);
  ctx.stroke();

  // 内边框
  ctx.strokeStyle = "rgba(212,168,83,0.3)";
  ctx.lineWidth = 1;
  roundRect(ctx, 10, 10, w-20, h-20, 4);
  ctx.stroke();

  // 角落装饰
  var corners = [[16,16],[w-16,16],[16,h-16],[w-16,h-16]];
  ctx.fillStyle = colors.accent;
  corners.forEach(function(p) {
    ctx.beginPath();
    ctx.arc(p[0], p[1], 3, 0, Math.PI*2);
    ctx.fill();
  });
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}

// 绘制星星
function drawStars(ctx, cx, cy, n, r1, r2, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (var i = 0; i < n*2; i++) {
    var r = i % 2 === 0 ? r1 : r2;
    var a = Math.PI * i / n - Math.PI/2;
    var x = cx + Math.cos(a) * r;
    var y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

// ——— 各卡牌插图绘制 ———

function drawMajorArt(ctx, card, w, h) {
  var colors = SUIT_COLORS.major;
  drawCardFrame(ctx, w, h, colors);
  var cx = w/2, cy = h/2 - 10;
  var id = card.id;

  // 根据卡牌 ID 绘制独特的插图
  switch (id) {
    case 0: // 愚人
      // 太阳
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy-30, 35, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ff8c00";
      ctx.beginPath(); ctx.arc(cx, cy-30, 28, 0, Math.PI*2); ctx.fill();
      // 小人物
      ctx.fillStyle = colors.light;
      ctx.beginPath(); ctx.arc(cx, cy+50, 10, 0, Math.PI*2); ctx.fill();
      ctx.fillRect(cx-1, cy+60, 2, 25);
      break;
    case 1: // 魔术师
      drawStars(ctx, cx, cy-10, 5, 8, 4, "#ffd700");
      // 桌上的四元素
      ctx.fillStyle = colors.accent;
      ctx.fillRect(cx-20, cy+40, 40, 3);
      var syms = ["🔥","💧","⚔️","🪙"];
      ctx.font = "14px serif"; ctx.textAlign = "center";
      syms.forEach(function(s,i){ ctx.fillText(s, cx-15+i*10, cy+55) });
      break;
    case 2: // 女祭司
      ctx.fillStyle = "#4a6fa5";
      ctx.fillRect(cx-5, cy-50, 10, 100);
      ctx.fillStyle = colors.light;
      ctx.beginPath(); ctx.arc(cx, cy-50, 15, Math.PI, 0); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.font = "12px serif"; ctx.textAlign = "center";
      ctx.fillText("☾", cx, cy-48);
      break;
    case 3: // 女皇
      drawStars(ctx, cx, cy-35, 6, 10, 5, "#ffd700");
      ctx.fillStyle = "#ff6b9d";
      ctx.beginPath(); ctx.arc(cx, cy+20, 30, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.font = "18px serif"; ctx.textAlign = "center";
      ctx.fillText("♡", cx, cy+26);
      break;
    case 4: // 皇帝
      ctx.fillStyle = "#8B0000";
      ctx.fillRect(cx-20, cy-30, 40, 60);
      ctx.fillStyle = "#ffd700";
      ctx.font = "20px serif"; ctx.textAlign = "center";
      ctx.fillText("♔", cx, cy-40);
      ctx.fillText("♔", cx, cy+40);
      break;
    case 5: // 教皇
      ctx.fillStyle = colors.accent;
      ctx.beginPath(); ctx.arc(cx, cy-25, 20, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "16px serif"; ctx.textAlign = "center";
      ctx.fillText("✝", cx, cy-21);
      ctx.fillStyle = colors.accent;
      ctx.fillRect(cx-15, cy-5, 30, 40);
      break;
    case 6: // 恋人
      ctx.fillStyle = "#ff6b9d";
      ctx.beginPath(); ctx.arc(cx-15, cy-5, 12, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#4a9eff";
      ctx.beginPath(); ctx.arc(cx+15, cy-5, 12, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.beginPath();
      ctx.arc(cx, cy-30, 8, 0, Math.PI*2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "10px serif"; ctx.textAlign = "center";
      ctx.fillText("❤", cx, cy-2);
      break;
    case 7: // 战车
      ctx.fillStyle = colors.accent;
      ctx.fillRect(cx-18, cy-20, 36, 40);
      ctx.beginPath(); ctx.arc(cx, cy-20, 18, Math.PI, 0); ctx.fill();
      // 轮子
      ctx.strokeStyle = "#ffd700"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx-12, cy+20, 8, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx+12, cy+20, 8, 0, Math.PI*2); ctx.stroke();
      break;
    case 8: // 力量
      ctx.fillStyle = "#ff8c00";
      ctx.beginPath(); ctx.arc(cx-12, cy-5, 18, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = colors.accent;
      ctx.font = "24px serif"; ctx.textAlign = "center";
      ctx.fillText("∞", cx+15, cy+5);
      break;
    case 9: // 隐士
      ctx.fillStyle = "#2a2a3e";
      ctx.fillRect(cx-8, cy-40, 16, 70);
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy-45, 12, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "10px serif"; ctx.textAlign = "center";
      ctx.fillText("★", cx, cy-42);
      break;
    case 10: // 命运之轮
      ctx.strokeStyle = "#ffd700"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI*2); ctx.stroke();
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 1;
      for (var i=0; i<8; i++) {
        var a = Math.PI*i/4;
        ctx.beginPath();
        ctx.moveTo(cx+Math.cos(a)*10, cy+Math.sin(a)*10);
        ctx.lineTo(cx+Math.cos(a)*28, cy+Math.sin(a)*28);
        ctx.stroke();
      }
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI*2); ctx.fill();
      break;
    case 11: // 正义
      ctx.fillStyle = "#ffd700";
      ctx.font = "28px serif"; ctx.textAlign = "center";
      ctx.fillText("⚖", cx, cy+8);
      break;
    case 12: // 倒吊人
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy-45);
      ctx.lineTo(cx, cy-15);
      ctx.lineTo(cx-5, cy+15);
      ctx.stroke();
      ctx.fillStyle = colors.light;
      ctx.beginPath(); ctx.arc(cx, cy-5, 10, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.font = "12px serif"; ctx.textAlign = "center";
      ctx.fillText("✧", cx, cy-2);
      break;
    case 13: // 死神
      ctx.fillStyle = "#1a0a0a";
      ctx.fillRect(cx-25, cy-40, 50, 80);
      ctx.fillStyle = "#ffd700";
      ctx.font = "32px serif"; ctx.textAlign = "center";
      ctx.fillText("♰", cx, cy+8);
      // 镰刀
      ctx.strokeStyle = "#888"; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx+15, cy-20, 15, -Math.PI/2, Math.PI/2);
      ctx.stroke();
      ctx.fillRect(cx+15, cy-20, 2, 30);
      break;
    case 14: // 节制
      ctx.fillStyle = "#4a9eff";
      ctx.beginPath();
      ctx.moveTo(cx-8, cy-30);
      ctx.lineTo(cx+8, cy-30);
      ctx.lineTo(cx+8, cy+30);
      ctx.lineTo(cx-8, cy+30);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "14px serif"; ctx.textAlign = "center";
      ctx.fillText("≈", cx, cy+5);
      break;
    case 15: // 恶魔
      ctx.fillStyle = "#8B0000";
      ctx.beginPath(); ctx.arc(cx, cy-20, 25, Math.PI, 0); ctx.fill();
      ctx.fillRect(cx-20, cy-20, 40, 30);
      ctx.fillStyle = "#ffd700";
      ctx.font = "10px serif"; ctx.textAlign = "center";
      ctx.fillText("⬡", cx, cy-25);
      ctx.fillStyle = "#4a0000";
      ctx.fillRect(cx-18, cy+10, 8, 20);
      ctx.fillRect(cx+10, cy+10, 8, 20);
      break;
    case 16: // 高塔
      ctx.fillStyle = "#4a4a5e";
      ctx.fillRect(cx-10, cy-40, 20, 70);
      ctx.fillRect(cx-15, cy-40, 30, 8);
      ctx.fillStyle = "#ff4444";
      ctx.beginPath(); ctx.moveTo(cx, cy-50); ctx.lineTo(cx-5, cy-40); ctx.lineTo(cx+5, cy-40); ctx.closePath(); ctx.fill();
      // 闪电
      ctx.fillStyle = "#ffd700";
      ctx.font = "14px serif"; ctx.textAlign = "center";
      ctx.fillText("⚡", cx, cy-30);
      break;
    case 17: // 星星
      drawStars(ctx, cx, cy, 5, 8, 4, "#ffd700");
      ctx.fillStyle = "#4a9eff";
      ctx.fillRect(cx-2, cy+15, 4, 20);
      ctx.fillStyle = "#fff";
      ctx.font = "8px serif"; ctx.textAlign = "center";
      ctx.fillText("✦", cx-10, cy+10);
      ctx.fillText("✦", cx+10, cy+5);
      ctx.fillText("✦", cx, cy-5);
      break;
    case 18: // 月亮
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy-5, 25, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = SUIT_COLORS.major.bg[0];
      ctx.beginPath(); ctx.arc(cx+5, cy-8, 22, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#4a6fa5";
      ctx.font = "12px serif"; ctx.textAlign = "center";
      ctx.fillText("☾", cx, cy-2);
      break;
    case 19: // 太阳
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy-5, 35, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ff8c00";
      ctx.beginPath(); ctx.arc(cx, cy-5, 28, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      // 光芒
      for (var i=0; i<12; i++) {
        var a = Math.PI*i/6;
        ctx.fillRect(cx+Math.cos(a)*35-2, cy+Math.sin(a)*35-1, 4, 2);
      }
      ctx.fillStyle = "#fff";
      ctx.font = "16px serif"; ctx.textAlign = "center";
      ctx.fillText("☀", cx, cy);
      break;
    case 20: // 审判
      ctx.fillStyle = "#ffd700";
      ctx.beginPath(); ctx.arc(cx, cy-25, 15, 0, Math.PI); ctx.fill();
      ctx.fillStyle = colors.light;
      ctx.fillRect(cx-2, cy-5, 4, 20);
      ctx.fillRect(cx-15, cy+15, 12, 3);
      ctx.fillRect(cx+3, cy+15, 12, 3);
      ctx.fillStyle = "#fff";
      ctx.font = "10px serif"; ctx.textAlign = "center";
      ctx.fillText("✿", cx-8, cy+3);
      ctx.fillText("✿", cx+8, cy+3);
      break;
    case 21: // 世界
      ctx.strokeStyle = "#ffd700"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI*2); ctx.stroke();
      ctx.fillStyle = colors.accent;
      ctx.beginPath(); ctx.arc(cx, cy, 28, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffd700";
      ctx.font = "18px serif"; ctx.textAlign = "center";
      ctx.fillText("◈", cx, cy+6);
      // 四角
      var angles = [[-35,-35],[35,-35],[-35,35],[35,35]];
      angles.forEach(function(p) {
        ctx.fillStyle = "#ffd700";
        ctx.font = "10px serif";
        ctx.fillText("✦", cx+p[0], cy+p[1]);
      });
      break;
    default:
      ctx.fillStyle = colors.accent;
      ctx.font = "24px serif"; ctx.textAlign = "center";
      ctx.fillText("✦", cx, cy);
      break;
  }

  // 卡牌编号和名称
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 11px serif"; ctx.textAlign = "left";
  ctx.fillText(card.id.toString(), 22, 26);
  ctx.textAlign = "right";
  ctx.fillText(card.id.toString(), w-22, 26);
}

// 绘制 Minor Arcana（小阿尔卡纳）
function drawMinorArt(ctx, card, w, h) {
  var suitKey = card.suitEn ? card.suitEn.toLowerCase() : "";
  var colors = SUIT_COLORS[suitKey] || SUIT_COLORS.major;
  drawCardFrame(ctx, w, h, colors);

  var cx = w/2, cy = h/2 - 10;
  var suitSymbols = { wands: "🔥", cups: "💧", swords: "⚔️", pentacles: "🪙" };
  var sym = suitSymbols[suitKey] || "🃏";

  // 大的花色符号在背景
  ctx.globalAlpha = 0.15;
  ctx.font = "80px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillStyle = colors.accent;
  ctx.fillText(sym, cx, cy);
  ctx.globalAlpha = 1;

  // 花色符号和关键词
  ctx.fillStyle = colors.accent;
  ctx.font = "28px serif"; ctx.textAlign = "center";
  ctx.fillText(sym, cx, cy-20);

  // 关键词显示
  ctx.fillStyle = colors.light;
  ctx.font = "0.6em serif"; ctx.textAlign = "center";
  var kw = card.keywords || "";
  ctx.fillText(kw, cx, cy+20);

  // 卡牌编号
  ctx.fillStyle = colors.accent;
  ctx.font = "bold 11px serif"; ctx.textAlign = "left";
  var numStr = card.name.replace(/[^零一二三四五六七八九十皇王后骑士侍从王牌]/g, "");
  ctx.fillText(numStr || card.id.toString(), 22, 26);
  ctx.textAlign = "right";
  ctx.fillText(numStr || card.id.toString(), w-22, 26);
}

// 渲染卡牌为 DataURL
function renderCardToDataURL(card) {
  var canvas = document.createElement("canvas");
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  var ctx = canvas.getContext("2d");

  if (card.suit === "大阿尔卡纳") {
    drawMajorArt(ctx, card, CARD_W, CARD_H);
  } else {
    drawMinorArt(ctx, card, CARD_W, CARD_H);
  }

  return canvas.toDataURL("image/png");
}

// 渲染卡背
function renderCardBackToDataURL() {
  var canvas = document.createElement("canvas");
  canvas.width = CARD_W;
  canvas.height = CARD_H;
  var ctx = canvas.getContext("2d");

  var grad = ctx.createLinearGradient(0, 0, 0, CARD_H);
  grad.addColorStop(0, "#1a1a2e");
  grad.addColorStop(0.5, "#2a1a3e");
  grad.addColorStop(1, "#1a1a2e");
  ctx.fillStyle = grad;
  roundRect(ctx, 4, 4, CARD_W-8, CARD_H-8, 6);
  ctx.fill();

  ctx.strokeStyle = "#b8862d";
  ctx.lineWidth = 2;
  roundRect(ctx, 4, 4, CARD_W-8, CARD_H-8, 6);
  ctx.stroke();

  ctx.strokeStyle = "rgba(212,168,83,0.3)";
  ctx.lineWidth = 1;
  roundRect(ctx, 10, 10, CARD_W-20, CARD_H-20, 4);
  ctx.stroke();

  // 中心装饰
  ctx.fillStyle = "rgba(212,168,83,0.4)";
  drawStars(ctx, CARD_W/2, CARD_H/2-10, 8, 20, 10, "rgba(212,168,83,0.4)");
  drawStars(ctx, CARD_W/2, CARD_H/2-10, 5, 12, 6, "rgba(212,168,83,0.6)");

  ctx.fillStyle = "rgba(212,168,83,0.5)";
  ctx.font = "14px serif"; ctx.textAlign = "center";
  ctx.fillText("✦ TAROT ✦", CARD_W/2, CARD_H/2+20);

  return canvas.toDataURL("image/png");
}

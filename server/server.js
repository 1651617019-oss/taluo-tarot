const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// 静态文件
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

// 读取记录
const HISTORY_FILE = path.join(__dirname, "..", "outputs", "history.json");

function readHistory() {
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      return JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
    }
  } catch (e) {}
  return [];
}

function saveHistory(records) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(records, null, 2), "utf-8");
}

// 保存抽卡记录
app.post("/api/save-reading", (req, res) => {
  const { spreadType, cards, interpretation } = req.body;
  if (!cards || !cards.length) {
    return res.status(400).json({ error: "缺少卡牌数据" });
  }
  const history = readHistory();
  const record = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    timestamp: new Date().toISOString(),
    spreadType: spreadType || "单张",
    cards,
    interpretation: interpretation || "",
  };
  history.unshift(record);
  saveHistory(history);
  res.json({ success: true, id: record.id });
});

// 获取历史记录
app.get("/api/history", (req, res) => {
  const history = readHistory();
  res.json(history);
});

// 删除记录
app.delete("/api/history/:id", (req, res) => {
  let history = readHistory();
  history = history.filter((r) => r.id !== req.params.id);
  saveHistory(history);
  res.json({ success: true });
});

// 所有路径回退到 index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🃏 塔罗牌占卜服务已启动: http://localhost:${PORT}`);
});

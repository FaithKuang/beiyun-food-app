const STORAGE_KEY = "fertility-food-app-v1";
const TODAY = new Date();
const dateKey = getLocalDateKey(TODAY);
const sessionStartedAt = Date.now();

const STAGES = [
  { id: "preconception_3m", label: "备孕前三个月" },
  { id: "cycle_window", label: "排卵/同房窗口" },
  { id: "pregnancy_early", label: "孕早期 1-12 周" },
  { id: "pregnancy_mid", label: "孕中期 13-27 周" },
  { id: "pregnancy_late", label: "孕晚期 28 周后" },
];

const GENDERS = [
  { id: "female", label: "女生" },
  { id: "male", label: "男生" },
];

const FOOD_DATA = {
  female: {
    preconception_3m: {
      title: "女生备孕前三个月",
      summary: "重点放在叶酸、优质蛋白、钙铁、抗氧化蔬果，帮助身体为怀孕做准备。",
      nutrients: [
        {
          name: "叶酸",
          short: "叶",
          benefit: "支持早期胚胎神经管发育准备，食物搭配叶酸补充更稳妥。",
          foods: ["菠菜", "小白菜", "空心菜", "芦笋", "黄豆", "橙子", "奇异果"],
        },
        {
          name: "优质蛋白",
          short: "蛋",
          benefit: "帮助维持卵泡发育所需的基础营养，也让餐食更有饱腹感。",
          foods: ["鸡蛋", "牛奶", "鱼", "虾", "豆腐", "瘦牛肉", "鸡胸肉"],
        },
        {
          name: "钙和铁",
          short: "钙",
          benefit: "备孕期提前打好骨骼和造血营养基础，避免只靠怀孕后补。",
          foods: ["牛奶", "酸奶", "牡蛎", "扇贝", "瘦牛肉", "黑豆", "芝麻"],
        },
        {
          name: "维生素 C / E",
          short: "抗",
          benefit: "来自水果、坚果和绿叶菜的抗氧化营养，适合作为每日加餐。",
          foods: ["猕猴桃", "草莓", "橙子", "核桃", "杏仁", "花生", "桑葚"],
        },
      ],
    },
    cycle_window: {
      title: "女生排卵/同房窗口",
      summary: "饮食保持稳定，不追求大补；重点是蛋白、深色蔬菜、水分和规律作息。",
      nutrients: [
        {
          name: "稳定能量",
          short: "稳",
          benefit: "规律三餐帮助身体少波动，不用临时吃偏方。",
          foods: ["燕麦", "红薯", "糙米", "鸡蛋", "牛奶", "苹果"],
        },
        {
          name: "深色蔬果",
          short: "蔬",
          benefit: "提供叶酸、维 C 和多酚，适合作为每天固定项。",
          foods: ["菠菜", "西兰花", "番茄", "蓝莓", "橙子", "葡萄柚"],
        },
        {
          name: "优质脂肪",
          short: "脂",
          benefit: "坚果和鱼类提供脂肪酸，注意份量即可。",
          foods: ["三文鱼", "鳕鱼", "核桃", "杏仁", "牛油果", "橄榄油"],
        },
      ],
    },
    pregnancy_early: {
      title: "孕早期 1-12 周",
      summary: "重点是叶酸、清淡易消化、少量多餐。孕吐明显时先保证能吃得下。",
      nutrients: [
        {
          name: "叶酸与 B 族",
          short: "叶",
          benefit: "孕早期尤其重要，补充剂剂量请按医生建议。",
          foods: ["菠菜", "西兰花", "芦笋", "橙子", "全麦面包", "鸡蛋"],
        },
        {
          name: "温和蛋白",
          short: "蛋",
          benefit: "少油、熟透、容易入口，减轻早孕期饮食压力。",
          foods: ["鸡蛋羹", "牛奶", "酸奶", "豆腐", "鱼肉", "鸡肉"],
        },
        {
          name: "缓解反胃的主食",
          short: "胃",
          benefit: "少量多餐，选择气味温和的碳水。",
          foods: ["苏打饼干", "馒头", "小米粥", "土豆", "香蕉", "苹果"],
        },
      ],
    },
    pregnancy_mid: {
      title: "孕中期 13-27 周",
      summary: "食欲通常回升，重点关注钙、铁、DHA、蛋白和膳食纤维。",
      nutrients: [
        {
          name: "钙",
          short: "钙",
          benefit: "支持母体和胎儿骨骼需求，牛奶酸奶最容易执行。",
          foods: ["牛奶", "酸奶", "奶酪", "豆腐", "小白菜", "芝麻酱"],
        },
        {
          name: "铁",
          short: "铁",
          benefit: "搭配维 C 食物有助于吸收，贫血需遵医嘱补铁。",
          foods: ["瘦牛肉", "动物肝脏", "鸡蛋", "黑豆", "菠菜", "橙子"],
        },
        {
          name: "DHA / Omega-3",
          short: "DHA",
          benefit: "优先选择低汞、熟透鱼类。",
          foods: ["三文鱼", "鳕鱼", "虾", "鸡蛋", "核桃", "亚麻籽"],
        },
      ],
    },
    pregnancy_late: {
      title: "孕晚期 28 周后",
      summary: "重点是高质量蛋白、钙铁、纤维和控糖控盐，避免一次吃太撑。",
      nutrients: [
        {
          name: "高质量蛋白",
          short: "蛋",
          benefit: "分散到三餐，比集中大补更舒服。",
          foods: ["鸡蛋", "牛奶", "鱼", "虾", "瘦牛肉", "豆腐"],
        },
        {
          name: "膳食纤维",
          short: "纤",
          benefit: "帮助维持肠道规律，主食和蔬菜一起调整。",
          foods: ["燕麦", "红薯", "西兰花", "菠菜", "苹果", "奇异果"],
        },
        {
          name: "低盐清淡",
          short: "淡",
          benefit: "减少重口味加工食品，关注水肿和血压变化。",
          foods: ["冬瓜", "番茄", "黄瓜", "鲜虾", "鸡胸肉", "无糖酸奶"],
        },
      ],
    },
  },
  male: {
    preconception_3m: {
      title: "男生备孕前三个月",
      summary: "精子生成周期较长，前三个月重点关注锌、硒、叶酸、优质蛋白和抗氧化食物。",
      nutrients: [
        {
          name: "锌",
          short: "锌",
          benefit: "参与男性生殖健康相关代谢，食物来源优先于盲目大剂量补剂。",
          foods: ["生蚝", "牡蛎", "扇贝", "瘦牛肉", "鸡蛋", "黑豆", "黄豆"],
        },
        {
          name: "硒",
          short: "硒",
          benefit: "与抗氧化系统相关，适量即可，不建议自行高剂量补充。",
          foods: ["鸡蛋", "鱼", "虾", "牛肉", "黑豆", "黄豆", "全麦面包"],
        },
        {
          name: "番茄红素",
          short: "茄",
          benefit: "来自红色果蔬的抗氧化营养，熟番茄更容易坚持。",
          foods: ["番茄", "西瓜", "葡萄柚", "红萝卜", "南瓜", "柿子"],
        },
        {
          name: "叶酸与蛋白",
          short: "叶",
          benefit: "和女生一样，规律吃绿叶菜和蛋白质比临时进补更重要。",
          foods: ["菠菜", "小白菜", "芦笋", "鸡蛋", "牛奶", "鱼", "豆腐"],
        },
      ],
    },
    cycle_window: {
      title: "男生排卵/同房窗口",
      summary: "保持清淡、规律、不过量饮酒，不熬夜；食物上继续锌、蛋白、抗氧化。",
      nutrients: [
        {
          name: "锌和蛋白",
          short: "锌",
          benefit: "简单稳定地吃，避免临时大补。",
          foods: ["牡蛎", "扇贝", "鸡蛋", "瘦牛肉", "鱼", "虾"],
        },
        {
          name: "抗氧化蔬果",
          short: "抗",
          benefit: "把番茄、深色蔬菜、水果放进每日清单。",
          foods: ["番茄", "菠菜", "西兰花", "蓝莓", "橙子", "奇异果"],
        },
      ],
    },
    pregnancy_early: {
      title: "男生陪伴孕早期",
      summary: "这一阶段更适合做家庭餐支持：清淡、少气味、保证蛋白和蔬果。",
      nutrients: [
        {
          name: "家庭清淡餐",
          short: "餐",
          benefit: "照顾孕早期反胃，减少油烟和重口味。",
          foods: ["小米粥", "鸡蛋羹", "豆腐", "鱼肉", "青菜", "苹果"],
        },
        {
          name: "共同补蛋白",
          short: "蛋",
          benefit: "家里常备易做蛋白食物，降低每天决策成本。",
          foods: ["鸡蛋", "牛奶", "酸奶", "虾", "鸡胸肉", "豆腐"],
        },
      ],
    },
    pregnancy_mid: {
      title: "男生陪伴孕中期",
      summary: "按家庭采购帮忙稳定补钙、补铁、补蛋白，少买高糖零食。",
      nutrients: [
        {
          name: "家庭常备",
          short: "备",
          benefit: "把牛奶、鸡蛋、蔬菜和低汞鱼虾变成固定采购项。",
          foods: ["牛奶", "鸡蛋", "三文鱼", "鳕鱼", "虾", "菠菜", "西兰花"],
        },
        {
          name: "健康加餐",
          short: "加",
          benefit: "用水果、酸奶、坚果替代高糖零食。",
          foods: ["无糖酸奶", "蓝莓", "苹果", "核桃", "杏仁", "奇异果"],
        },
      ],
    },
    pregnancy_late: {
      title: "男生陪伴孕晚期",
      summary: "帮助控制采购节奏，选择低盐、熟透、好消化的家庭餐。",
      nutrients: [
        {
          name: "低盐熟食材",
          short: "淡",
          benefit: "减少加工肉和重口调料，多做新鲜食材。",
          foods: ["鸡胸肉", "鱼", "虾", "豆腐", "冬瓜", "番茄"],
        },
        {
          name: "纤维和蛋白",
          short: "纤",
          benefit: "每餐兼顾蔬菜、主食和蛋白。",
          foods: ["燕麦", "红薯", "菠菜", "西兰花", "鸡蛋", "牛奶"],
        },
      ],
    },
  },
};

const SHOPPING_GROUPS = [
  { name: "蛋白质", foods: ["鸡蛋", "牛奶", "无糖酸奶", "酸奶", "豆腐", "鸡胸肉", "瘦牛肉", "虾", "鳕鱼", "三文鱼"] },
  { name: "绿叶菜和蔬菜", foods: ["菠菜", "小白菜", "西兰花", "芦笋", "番茄", "冬瓜", "红薯", "黄瓜"] },
  { name: "水果", foods: ["橙子", "奇异果", "苹果", "蓝莓", "草莓", "葡萄柚", "西瓜"] },
  { name: "坚果豆类和主食", foods: ["核桃", "杏仁", "黑豆", "黄豆", "燕麦", "糙米", "全麦面包"] },
  { name: "海鲜贝类", foods: ["生蚝", "牡蛎", "扇贝"] },
];

const AVOID_OPTIONS = ["动物肝脏", "海鲜贝类", "牛奶乳制品", "坚果", "牛肉", "豆类"];

const FOOD_ICONS = {
  菠菜: "🥬",
  小白菜: "🥬",
  空心菜: "🥬",
  青菜: "🥬",
  西兰花: "🥦",
  芦笋: "🌿",
  番茄: "🍅",
  红萝卜: "🥕",
  南瓜: "🎃",
  冬瓜: "🥒",
  黄瓜: "🥒",
  红薯: "🍠",
  土豆: "🥔",
  黄豆: "🫘",
  黑豆: "🫘",
  豆腐: "◻️",
  芝麻: "🌰",
  芝麻酱: "🌰",
  核桃: "🌰",
  杏仁: "🌰",
  花生: "🥜",
  桑葚: "🫐",
  鸡蛋: "🥚",
  鸡蛋羹: "🥚",
  牛奶: "🥛",
  酸奶: "🥛",
  无糖酸奶: "🥛",
  奶酪: "🧀",
  鱼: "🐟",
  鱼肉: "🐟",
  三文鱼: "🍣",
  鳕鱼: "🐟",
  虾: "🍤",
  鲜虾: "🍤",
  生蚝: "🦪",
  牡蛎: "🦪",
  扇贝: "🦪",
  瘦牛肉: "🥩",
  牛肉: "🥩",
  鸡胸肉: "🍗",
  鸡肉: "🍗",
  动物肝脏: "🥩",
  橙子: "🍊",
  奇异果: "🥝",
  猕猴桃: "🥝",
  草莓: "🍓",
  苹果: "🍎",
  蓝莓: "🫐",
  葡萄柚: "🍊",
  西瓜: "🍉",
  柿子: "🍅",
  香蕉: "🍌",
  燕麦: "🥣",
  糙米: "🍚",
  全麦面包: "🍞",
  小米粥: "🥣",
  馒头: "🍞",
  苏打饼干: "🍪",
  牛油果: "🥑",
  橄榄油: "🫒",
  亚麻籽: "🌾",
};

const state = loadState();
let deferredInstallPrompt = null;
let lastUsageTick = Date.now();
let lastVisibilityState = document.visibilityState;

const refs = {
  profileName: document.querySelector("#profileName"),
  genderSelect: document.querySelector("#genderSelect"),
  stageSelect: document.querySelector("#stageSelect"),
  saveStatus: document.querySelector("#saveStatus"),
  saveNow: document.querySelector("#saveNow"),
  saveToday: document.querySelector("#saveToday"),
  saveHistory: document.querySelector("#saveHistory"),
  todayDate: document.querySelector("#todayDate"),
  todayTitle: document.querySelector("#todayTitle"),
  todaySummary: document.querySelector("#todaySummary"),
  todayStats: document.querySelector("#todayStats"),
  scorePercent: document.querySelector("#scorePercent"),
  focusList: document.querySelector("#focusList"),
  checklist: document.querySelector("#checklist"),
  checkedCount: document.querySelector("#checkedCount"),
  resetToday: document.querySelector("#resetToday"),
  foodStageLabel: document.querySelector("#foodStageLabel"),
  nutrientCards: document.querySelector("#nutrientCards"),
  historySummary: document.querySelector("#historySummary"),
  historyList: document.querySelector("#historyList"),
  weeklyReport: document.querySelector("#weeklyReport"),
  shoppingList: document.querySelector("#shoppingList"),
  weeklyPlan: document.querySelector("#weeklyPlan"),
  copyShopping: document.querySelector("#copyShopping"),
  morningTime: document.querySelector("#morningTime"),
  eveningTime: document.querySelector("#eveningTime"),
  enableNotifications: document.querySelector("#enableNotifications"),
  notificationStatus: document.querySelector("#notificationStatus"),
  avoidList: document.querySelector("#avoidList"),
  saveSettings: document.querySelector("#saveSettings"),
  settingsSaveStatus: document.querySelector("#settingsSaveStatus"),
  installButton: document.querySelector("#installButton"),
};

init();

function init() {
  registerServiceWorker();
  ensureTodayMeta();
  renderControls();
  bindEvents();
  render();
  renderSaveStatus();
  startReminderLoop();
  startUsageTracking();
}

function loadState() {
  const fallback = {
    profileName: "我们家",
    gender: "female",
    stage: "preconception_3m",
    reminders: { morning: "09:00", evening: "18:30" },
    avoid: [],
    checks: {},
    usage: {},
    dailyMeta: {},
    manualSaves: {},
    notified: {},
    lastSavedAt: null,
  };

  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...fallback,
      ...raw,
      reminders: { ...fallback.reminders, ...(raw.reminders || {}) },
      avoid: Array.isArray(raw.avoid) ? raw.avoid : [],
      checks: raw.checks || {},
      usage: raw.usage || {},
      dailyMeta: raw.dailyMeta || {},
      manualSaves: raw.manualSaves || {},
      notified: raw.notified || {},
    };
  } catch {
    return fallback;
  }
}

function saveState({ manual = false, message = "" } = {}) {
  const now = new Date().toISOString();
  state.lastSavedAt = now;
  if (manual) {
    state.manualSaves[dateKey] = now;
  }
  ensureTodayMeta(now);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (message) {
    renderSaveStatus(message);
  }
}

function ensureTodayMeta(updatedAt = new Date().toISOString()) {
  state.dailyMeta[dateKey] = {
    gender: state.gender,
    stage: state.stage,
    foodCount: getVisibleFoods().length,
    updatedAt,
  };
}

function renderControls() {
  refs.profileName.value = state.profileName;
  refs.genderSelect.innerHTML = GENDERS.map(optionHtml(state.gender)).join("");
  refs.stageSelect.innerHTML = STAGES.map(optionHtml(state.stage)).join("");
  refs.morningTime.value = state.reminders.morning;
  refs.eveningTime.value = state.reminders.evening;
  refs.avoidList.innerHTML = AVOID_OPTIONS.map((item) => {
    const checked = state.avoid.includes(item) ? "checked" : "";
    return `<label class="avoid-chip"><input type="checkbox" value="${item}" ${checked} />${item}</label>`;
  }).join("");
}

function optionHtml(selectedId) {
  return (item) => `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${item.label}</option>`;
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  refs.profileName.addEventListener("input", () => {
    state.profileName = refs.profileName.value.trim() || "我们家";
    saveState({ message: "已自动保存使用者名称" });
  });

  refs.genderSelect.addEventListener("change", () => {
    state.gender = refs.genderSelect.value;
    saveState({ message: "已自动保存性别选择" });
    render();
  });

  refs.stageSelect.addEventListener("change", () => {
    state.stage = refs.stageSelect.value;
    saveState({ message: "已自动保存阶段选择" });
    render();
  });

  refs.resetToday.addEventListener("click", () => {
    state.checks[dateKey] = [];
    saveState({ manual: true, message: "已清空并保存今天的记录" });
    render();
  });

  refs.saveNow.addEventListener("click", () => manualSave("已保存当前所有内容"));
  refs.saveToday.addEventListener("click", () => manualSave("已保存今天的饮食记录"));
  refs.saveHistory.addEventListener("click", () => manualSave("已保存最近记录和周报告"));
  refs.saveSettings.addEventListener("click", () => manualSave("已保存设置与记录"));
  refs.copyShopping.addEventListener("click", copyShoppingList);

  refs.morningTime.addEventListener("change", () => updateReminder("morning", refs.morningTime.value));
  refs.eveningTime.addEventListener("change", () => updateReminder("evening", refs.eveningTime.value));
  refs.enableNotifications.addEventListener("click", enableNotifications);

  refs.avoidList.addEventListener("change", () => {
    state.avoid = [...refs.avoidList.querySelectorAll("input:checked")].map((input) => input.value);
    saveState({ message: "已自动保存忌口设置" });
    render();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    refs.installButton.hidden = false;
  });

  refs.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    refs.installButton.hidden = true;
  });
}

function manualSave(message) {
  flushUsage();
  saveState({ manual: true, message });
  render();
}

function switchView(viewId) {
  flushUsage();
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewId);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  render();
}

function getCurrentPlan() {
  return FOOD_DATA[state.gender][state.stage] || FOOD_DATA.female.preconception_3m;
}

function getFoods() {
  const foods = getCurrentPlan().nutrients.flatMap((item) => item.foods);
  return [...new Set(foods)];
}

function getVisibleFoods() {
  return getFoods().filter((food) => !isAvoided(food));
}

function render() {
  const plan = getCurrentPlan();
  const checked = state.checks[dateKey] || [];
  const visibleFoods = getVisibleFoods();
  const checkedVisible = checked.filter((food) => visibleFoods.includes(food));
  const percent = visibleFoods.length ? Math.round((checkedVisible.length / visibleFoods.length) * 100) : 0;

  refs.todayDate.textContent = TODAY.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  refs.todayTitle.textContent = plan.title;
  refs.todaySummary.textContent = plan.summary;
  refs.scorePercent.textContent = `${percent}%`;
  refs.checkedCount.textContent = `${checkedVisible.length}/${visibleFoods.length} 项`;
  refs.todayStats.innerHTML = [
    statPill(`${checkedVisible.length} 项`, "今日已打卡"),
    statPill(formatDuration(state.usage[dateKey] || 0), "今日使用时长"),
    statPill(formatDuration((Date.now() - sessionStartedAt) / 1000), "本次打开"),
  ].join("");

  refs.focusList.innerHTML = plan.nutrients.map((item) => `
    <article class="focus-item">
      <div class="badge">${item.short}</div>
      <div>
        <h4>${item.name}</h4>
        <p>${item.benefit}</p>
        <div class="sticker-row">${item.foods.slice(0, 5).map(foodSticker).join("")}</div>
      </div>
    </article>
  `).join("");

  refs.checklist.innerHTML = getFoods().map((food) => {
    const checkedAttr = checked.includes(food) ? "checked" : "";
    const avoided = isAvoided(food);
    const nutrientNames = nutrientsForFood(food).join(" / ");
    return `
      <label class="food-check ${checked.includes(food) ? "is-checked" : ""} ${avoided ? "is-avoided" : ""}">
        <input type="checkbox" value="${food}" ${checkedAttr} ${avoided ? "disabled" : ""} />
        <span class="food-art" aria-hidden="true">${foodIcon(food)}</span>
        <span class="food-copy">
          <strong>${food}</strong>
          <small>${avoided ? "已按忌口弱化" : nutrientNames}</small>
        </span>
      </label>
    `;
  }).join("");

  refs.checklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => toggleFood(input.value, input.checked));
  });

  refs.foodStageLabel.textContent = `${genderLabel()} / ${stageLabel()}`;
  refs.nutrientCards.innerHTML = plan.nutrients.map((item) => `
    <article class="nutrient-card">
      <h4>${item.name}</h4>
      <p>${item.benefit}</p>
      <div class="sticker-row">${item.foods.map(foodSticker).join("")}</div>
    </article>
  `).join("");

  renderShopping();
  renderWeeklyPlan();
  renderHistory();
  renderWeeklyReport();
  renderNotificationStatus();
  renderSaveStatus();
}

function statPill(value, label) {
  return `<div class="stat-pill"><strong>${value}</strong><span>${label}</span></div>`;
}

function foodSticker(food) {
  return `<span class="food-sticker"><b aria-hidden="true">${foodIcon(food)}</b>${food}</span>`;
}

function toggleFood(food, isChecked) {
  const current = new Set(state.checks[dateKey] || []);
  if (isChecked) current.add(food);
  else current.delete(food);
  state.checks[dateKey] = [...current];
  saveState({ message: isChecked ? `已自动保存：${food}` : `已自动保存：取消 ${food}` });
  render();
}

function isAvoided(food) {
  return state.avoid.some((avoid) => {
    if (avoid === "海鲜贝类") return ["生蚝", "牡蛎", "扇贝", "虾", "鲜虾"].includes(food);
    if (avoid === "牛奶乳制品") return ["牛奶", "酸奶", "无糖酸奶", "奶酪"].includes(food);
    if (avoid === "坚果") return ["核桃", "杏仁", "花生", "芝麻", "芝麻酱"].includes(food);
    if (avoid === "豆类") return ["黄豆", "黑豆", "豆腐"].includes(food);
    return food.includes(avoid) || avoid.includes(food);
  });
}

function renderShopping() {
  const foods = new Set(getVisibleFoods());
  refs.shoppingList.innerHTML = SHOPPING_GROUPS.map((group) => {
    const matched = group.foods.filter((food) => foods.has(food));
    if (!matched.length) return "";
    return `
      <article class="shopping-card">
        <h4>${group.name}</h4>
        <p>建议本周从这些里面选 2-4 个，不需要全部买。</p>
        <div class="chip-row">${matched.map(foodSticker).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderWeeklyPlan() {
  const foods = getVisibleFoods();
  const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  refs.weeklyPlan.innerHTML = days.map((day, index) => {
    const pick = [
      foods[index % foods.length],
      foods[(index + 3) % foods.length],
      foods[(index + 6) % foods.length],
    ].filter(Boolean);
    return `
      <article class="day-card">
        <h4>${day}</h4>
        <div class="chip-row">${pick.map(foodSticker).join("")}</div>
      </article>
    `;
  }).join("");
}

function renderHistory() {
  const entries = getRecentEntries();
  const activeDays = entries.filter((entry) => entry.checked.length).length;
  const totalChecks = entries.reduce((sum, entry) => sum + entry.checked.length, 0);
  const average = entries.length ? Math.round(entries.reduce((sum, entry) => sum + entry.percent, 0) / entries.length) : 0;

  refs.historySummary.innerHTML = [
    reportCard(`${activeDays} 天`, "本周有记录"),
    reportCard(`${average}%`, "平均完成度"),
    reportCard(formatDuration(totalUsage(entries)), "本周使用时长"),
  ].join("");

  refs.historyList.innerHTML = entries.map((entry) => `
    <article class="history-card">
      <div class="history-top">
        <div>
          <h4>${entry.label}</h4>
          <p>${entry.stageLabel} · ${entry.checked.length}/${entry.total} 项 · ${formatDuration(entry.usage)}</p>
        </div>
        <strong>${entry.percent}%</strong>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${entry.percent}%"></div></div>
      <div class="chip-row">${entry.checked.length ? entry.checked.slice(0, 8).map(foodSticker).join("") : "<span class=\"quiet\">这天还没有打卡</span>"}</div>
    </article>
  `).join("");
}

function renderWeeklyReport() {
  const entries = getRecentEntries();
  const checkedFoods = entries.flatMap((entry) => entry.checked);
  const topFoods = topItems(checkedFoods).slice(0, 5);
  const currentPlan = getCurrentPlan();
  const checkedSet = new Set(checkedFoods);
  const gaps = currentPlan.nutrients.filter((nutrient) => nutrient.foods.every((food) => !checkedSet.has(food)));
  const bestDay = [...entries].sort((a, b) => b.percent - a.percent)[0];

  refs.weeklyReport.innerHTML = [
    reportCard(bestDay ? `${bestDay.label}` : "暂无", bestDay ? `完成度最高：${bestDay.percent}%` : "开始打卡后会自动分析"),
    reportCard(topFoods.length ? topFoods.map(([food]) => food).join("、") : "暂无", "本周常吃食物"),
    reportCard(gaps.length ? gaps.map((item) => item.name).join("、") : "覆盖不错", "可以补上的营养方向"),
    reportCard(buildReportAdvice(entries, gaps), "下周建议"),
  ].join("");
}

function reportCard(value, label) {
  return `<article class="report-card"><strong>${value}</strong><span>${label}</span></article>`;
}

function buildReportAdvice(entries, gaps) {
  const activeDays = entries.filter((entry) => entry.checked.length).length;
  if (activeDays < 3) return "先把打卡稳定到每周 3 天";
  if (gaps.length) return `优先安排 ${gaps[0].foods.slice(0, 3).join("、")}`;
  return "继续保持，采购时轮换蔬果和蛋白";
}

async function copyShoppingList() {
  const text = [...refs.shoppingList.querySelectorAll(".shopping-card")].map((card) => {
    const title = card.querySelector("h4").textContent;
    const items = [...card.querySelectorAll(".food-sticker")].map((li) => li.textContent).join("、");
    return `${title}: ${items}`;
  }).join("\n");

  await navigator.clipboard.writeText(text || "本周暂无采购项");
  refs.copyShopping.textContent = "已复制";
  setTimeout(() => {
    refs.copyShopping.textContent = "复制";
  }, 1400);
}

function updateReminder(key, value) {
  state.reminders[key] = value;
  saveState({ message: "已自动保存提醒时间" });
}

async function enableNotifications() {
  if (!("Notification" in window)) {
    refs.notificationStatus.textContent = "这个浏览器不支持通知。";
    return;
  }

  const permission = await Notification.requestPermission();
  renderNotificationStatus(permission);

  if (permission === "granted") {
    sendNotification("提醒已开启", `${state.profileName}，之后按你设置的时间提醒打卡。`);
  }
}

function renderNotificationStatus(permission) {
  if (!("Notification" in window)) {
    refs.notificationStatus.textContent = "当前浏览器不支持通知。";
    return;
  }

  const currentPermission = permission || Notification.permission;
  const label = currentPermission === "granted" ? "已允许通知" : currentPermission === "denied" ? "通知被拒绝" : "尚未开启通知";
  refs.notificationStatus.textContent = `${label}。提醒时间：${state.reminders.morning}、${state.reminders.evening}`;
}

function renderSaveStatus(message) {
  const manual = state.manualSaves[dateKey];
  const text = message || (manual ? `今天已手动保存：${formatTime(manual)}` : `已自动保存到本机：${formatTime(state.lastSavedAt)}`);
  refs.saveStatus.textContent = text;
  refs.settingsSaveStatus.textContent = text;
}

function startReminderLoop() {
  setInterval(() => {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    const now = new Date();
    const current = now.toTimeString().slice(0, 5);
    const reminderKey = `${dateKey}-${current}`;
    const shouldNotify = Object.values(state.reminders).includes(current) && !state.notified[reminderKey];
    if (!shouldNotify) return;

    state.notified[reminderKey] = true;
    saveState();
    sendNotification("今天吃过哪些了？", `${stageLabel()}：打开备孕饭点，勾一下今天吃过的食物。`);
  }, 30000);
}

function startUsageTracking() {
  setInterval(() => {
    flushUsage();
    saveState();
    render();
  }, 60000);

  document.addEventListener("visibilitychange", () => {
    flushUsage();
    saveState();
  });

  window.addEventListener("beforeunload", () => {
    flushUsage();
    saveState();
  });
}

function flushUsage() {
  const now = Date.now();
  if (lastVisibilityState === "visible") {
    const delta = Math.max(0, Math.round((now - lastUsageTick) / 1000));
    state.usage[dateKey] = Math.round((state.usage[dateKey] || 0) + delta);
  }
  lastUsageTick = now;
  lastVisibilityState = document.visibilityState;
}

function sendNotification(title, body) {
  if (navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage({ type: "notify", title, body });
    return;
  }
  new Notification(title, { body });
}

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("./service-worker.js");
  }
}

function nutrientsForFood(food) {
  return getCurrentPlan().nutrients.filter((item) => item.foods.includes(food)).map((item) => item.name);
}

function foodIcon(food) {
  return FOOD_ICONS[food] || "🍽️";
}

function getRecentEntries() {
  return getRecentDateKeys(7).map((key) => {
    const checked = state.checks[key] || [];
    const meta = state.dailyMeta[key] || {};
    const total = meta.foodCount || (key === dateKey ? getVisibleFoods().length : Math.max(checked.length, getVisibleFoods().length));
    const percent = total ? Math.min(100, Math.round((checked.length / total) * 100)) : 0;
    return {
      key,
      label: formatDateLabel(key),
      checked,
      total,
      percent,
      usage: state.usage[key] || 0,
      stageLabel: stageLabel(meta.stage || state.stage),
    };
  });
}

function getRecentDateKeys(count) {
  return Array.from({ length: count }, (_, index) => {
    const day = new Date(TODAY);
    day.setDate(TODAY.getDate() - index);
    return getLocalDateKey(day);
  });
}

function topItems(items) {
  const counts = new Map();
  items.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function totalUsage(entries) {
  return entries.reduce((sum, entry) => sum + entry.usage, 0);
}

function genderLabel() {
  return GENDERS.find((item) => item.id === state.gender)?.label || "女生";
}

function stageLabel(stageId = state.stage) {
  return STAGES.find((item) => item.id === stageId)?.label || "备孕前三个月";
}

function formatDuration(seconds) {
  const total = Math.max(0, Math.round(seconds));
  if (total < 60) return `${total} 秒`;
  const minutes = Math.round(total / 60);
  if (minutes < 60) return `${minutes} 分钟`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} 小时 ${rest} 分钟` : `${hours} 小时`;
}

function formatTime(isoString) {
  if (!isoString) return "刚刚";
  return new Date(isoString).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}

function formatDateLabel(key) {
  const date = parseDateKey(key);
  const label = date.toLocaleDateString("zh-CN", { month: "numeric", day: "numeric", weekday: "short" });
  return key === dateKey ? `今天 ${label}` : label;
}

function parseDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

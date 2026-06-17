const STORAGE_KEY = "fertility-food-app-v1";
const TODAY = new Date();
const dateKey = getLocalDateKey(TODAY);

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
  { name: "蛋白质", foods: ["鸡蛋", "牛奶", "无糖酸奶", "豆腐", "鸡胸肉", "瘦牛肉", "虾", "鳕鱼", "三文鱼"] },
  { name: "绿叶菜和蔬菜", foods: ["菠菜", "小白菜", "西兰花", "芦笋", "番茄", "冬瓜", "红薯"] },
  { name: "水果", foods: ["橙子", "奇异果", "苹果", "蓝莓", "草莓", "葡萄柚", "西瓜"] },
  { name: "坚果豆类和主食", foods: ["核桃", "杏仁", "黑豆", "黄豆", "燕麦", "糙米", "全麦面包"] },
  { name: "海鲜贝类", foods: ["生蚝", "牡蛎", "扇贝"] },
];

const AVOID_OPTIONS = ["动物肝脏", "海鲜贝类", "牛奶乳制品", "坚果", "牛肉", "豆类"];

const state = loadState();
let deferredInstallPrompt = null;

const refs = {
  profileName: document.querySelector("#profileName"),
  genderSelect: document.querySelector("#genderSelect"),
  stageSelect: document.querySelector("#stageSelect"),
  todayDate: document.querySelector("#todayDate"),
  todayTitle: document.querySelector("#todayTitle"),
  todaySummary: document.querySelector("#todaySummary"),
  scorePercent: document.querySelector("#scorePercent"),
  focusList: document.querySelector("#focusList"),
  checklist: document.querySelector("#checklist"),
  checkedCount: document.querySelector("#checkedCount"),
  resetToday: document.querySelector("#resetToday"),
  foodStageLabel: document.querySelector("#foodStageLabel"),
  nutrientCards: document.querySelector("#nutrientCards"),
  shoppingList: document.querySelector("#shoppingList"),
  weeklyPlan: document.querySelector("#weeklyPlan"),
  copyShopping: document.querySelector("#copyShopping"),
  morningTime: document.querySelector("#morningTime"),
  eveningTime: document.querySelector("#eveningTime"),
  enableNotifications: document.querySelector("#enableNotifications"),
  notificationStatus: document.querySelector("#notificationStatus"),
  avoidList: document.querySelector("#avoidList"),
  installButton: document.querySelector("#installButton"),
};

init();

function init() {
  registerServiceWorker();
  renderControls();
  bindEvents();
  render();
  startReminderLoop();
}

function loadState() {
  const fallback = {
    profileName: "我们家",
    gender: "female",
    stage: "preconception_3m",
    reminders: { morning: "09:00", evening: "18:30" },
    avoid: [],
    checks: {},
    notified: {},
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    saveState();
  });

  refs.genderSelect.addEventListener("change", () => {
    state.gender = refs.genderSelect.value;
    saveState();
    render();
  });

  refs.stageSelect.addEventListener("change", () => {
    state.stage = refs.stageSelect.value;
    saveState();
    render();
  });

  refs.resetToday.addEventListener("click", () => {
    state.checks[dateKey] = [];
    saveState();
    render();
  });

  refs.copyShopping.addEventListener("click", copyShoppingList);

  refs.morningTime.addEventListener("change", () => updateReminder("morning", refs.morningTime.value));
  refs.eveningTime.addEventListener("change", () => updateReminder("evening", refs.eveningTime.value));
  refs.enableNotifications.addEventListener("click", enableNotifications);

  refs.avoidList.addEventListener("change", () => {
    state.avoid = [...refs.avoidList.querySelectorAll("input:checked")].map((input) => input.value);
    saveState();
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

function switchView(viewId) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewId);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
}

function getCurrentPlan() {
  return FOOD_DATA[state.gender][state.stage] || FOOD_DATA.female.preconception_3m;
}

function getFoods() {
  const foods = getCurrentPlan().nutrients.flatMap((item) => item.foods);
  return [...new Set(foods)];
}

function render() {
  const plan = getCurrentPlan();
  const checked = state.checks[dateKey] || [];
  const foods = getFoods();
  const visibleFoods = foods.filter((food) => !isAvoided(food));
  const percent = visibleFoods.length ? Math.round((checked.filter((food) => visibleFoods.includes(food)).length / visibleFoods.length) * 100) : 0;

  refs.todayDate.textContent = TODAY.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  refs.todayTitle.textContent = plan.title;
  refs.todaySummary.textContent = plan.summary;
  refs.scorePercent.textContent = `${percent}%`;
  refs.checkedCount.textContent = `${checked.length}/${visibleFoods.length} 项`;

  refs.focusList.innerHTML = plan.nutrients.map((item) => `
    <article class="focus-item">
      <div class="badge">${item.short}</div>
      <div>
        <h4>${item.name}</h4>
        <p>${item.benefit}</p>
      </div>
    </article>
  `).join("");

  refs.checklist.innerHTML = foods.map((food) => {
    const checkedAttr = checked.includes(food) ? "checked" : "";
    const avoided = isAvoided(food);
    return `
      <label class="food-check ${avoided ? "is-avoided" : ""}">
        <input type="checkbox" value="${food}" ${checkedAttr} ${avoided ? "disabled" : ""} />
        <span>${food}${avoided ? "<small>已按忌口弱化</small>" : ""}</span>
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
      <ul>${item.foods.map((food) => `<li>${food}</li>`).join("")}</ul>
    </article>
  `).join("");

  renderShopping();
  renderWeeklyPlan();
  renderNotificationStatus();
}

function toggleFood(food, isChecked) {
  const current = new Set(state.checks[dateKey] || []);
  if (isChecked) current.add(food);
  else current.delete(food);
  state.checks[dateKey] = [...current];
  saveState();
  render();
}

function isAvoided(food) {
  return state.avoid.some((avoid) => {
    if (avoid === "海鲜贝类") return ["生蚝", "牡蛎", "扇贝", "虾"].includes(food);
    if (avoid === "牛奶乳制品") return ["牛奶", "酸奶", "无糖酸奶", "奶酪"].includes(food);
    if (avoid === "坚果") return ["核桃", "杏仁", "花生", "芝麻", "芝麻酱"].includes(food);
    if (avoid === "豆类") return ["黄豆", "黑豆", "豆腐"].includes(food);
    return food.includes(avoid) || avoid.includes(food);
  });
}

function renderShopping() {
  const foods = new Set(getFoods().filter((food) => !isAvoided(food)));
  refs.shoppingList.innerHTML = SHOPPING_GROUPS.map((group) => {
    const matched = group.foods.filter((food) => foods.has(food));
    if (!matched.length) return "";
    return `
      <article class="shopping-card">
        <h4>${group.name}</h4>
        <p>建议本周从这些里面选 2-4 个，不需要全部买。</p>
        <ul>${matched.map((food) => `<li>${food}</li>`).join("")}</ul>
      </article>
    `;
  }).join("");
}

function renderWeeklyPlan() {
  const foods = getFoods().filter((food) => !isAvoided(food));
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
        <p>${pick.join(" + ")}</p>
      </article>
    `;
  }).join("");
}

async function copyShoppingList() {
  const text = [...refs.shoppingList.querySelectorAll(".shopping-card")].map((card) => {
    const title = card.querySelector("h4").textContent;
    const items = [...card.querySelectorAll("li")].map((li) => li.textContent).join("、");
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
  saveState();
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

function genderLabel() {
  return GENDERS.find((item) => item.id === state.gender)?.label || "女生";
}

function stageLabel() {
  return STAGES.find((item) => item.id === state.stage)?.label || "备孕前三个月";
}

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

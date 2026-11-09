const STORAGE_KEY = "dg1682_mixboard_portal_v2";
const THEME_KEY = "dg1682_mixboard_theme";
const SNAP_SIZE = 20;

// 초기 10개 깃허브 레포지토리 + 소제목 도형/구역 박스/텍스트 기본 배치
function getDefaultAssets() {
  return [
    {
      id: "shape-zone-1",
      type: "shape",
      title: "WORKSPACE & TOOLS",
      subtitle: "주요 업무 및 유틸리티 프로젝트",
      x: 40,
      y: 80,
      w: 440,
      h: 480,
      color: "blue",
      locked: false,
      z: 19
    },
    {
      id: "shape-zone-2",
      type: "shape",
      title: "MEDIA · LIVE · PLAY",
      subtitle: "미디어, 음악, 플레이어 및 소셜 레포지토리",
      x: 500,
      y: 80,
      w: 440,
      h: 480,
      color: "violet",
      locked: false,
      z: 28
    },
    {
      id: "text-welcome",
      type: "text",
      title: "🚀 GitHub Mixboard",
      subtitle: "",
      x: 40,
      y: 20,
      w: 520,
      h: 60,
      color: "default",
      locked: false,
      z: 106
    },
    {
      id: "repo-kjikjangin",
      type: "link",
      title: "K직장인키우기",
      subtitle: "dg1682-commits/kjikjangin",
      url: "https://github.com/dg1682-commits/kjikjangin",
      pagesUrl: "https://dg1682-commits.github.io/kjikjangin/",
      x: 980,
      y: 360,
      w: 380,
      h: 80,
      color: "blue",
      locked: false,
      z: 102
    },
    {
      id: "repo-vcl",
      type: "link",
      title: "대본 생성기 v1",
      subtitle: "아이템 추천 및 대본작성",
      url: "https://github.com/dg1682-commits/VCL",
      pagesUrl: "https://dg1682-commits.github.io/VCL/",
      x: 60,
      y: 360,
      w: 380,
      h: 80,
      color: "indigo",
      locked: false,
      z: 66
    },
    {
      id: "repo-vti",
      type: "link",
      title: "궁디스튜디오",
      subtitle: "이미지/영상/유튜브",
      url: "https://github.com/dg1682-commits/VTI",
      pagesUrl: "https://dg1682-commits.github.io/VTI/",
      x: 60,
      y: 160,
      w: 380,
      h: 80,
      color: "emerald",
      locked: false,
      z: 62
    },
    {
      id: "repo-pa",
      type: "link",
      title: "프롬프트 스튜디오",
      subtitle: "도대체 왜 프롬프트",
      url: "https://github.com/dg1682-commits/PA",
      pagesUrl: "https://dg1682-commits.github.io/PA/",
      x: 60,
      y: 260,
      w: 380,
      h: 80,
      color: "amber",
      locked: false,
      z: 64
    },
    {
      id: "repo-dnjfrmq",
      type: "link",
      title: "월급찍고갑니다",
      subtitle: "월찍가 어플",
      url: "https://github.com/dg1682-commits/dnjfrmq",
      pagesUrl: "https://dg1682-commits.github.io/dnjfrmq/",
      x: 520,
      y: 360,
      w: 380,
      h: 80,
      color: "violet",
      locked: false,
      z: 88
    },
    {
      id: "repo-goongdyplay",
      type: "link",
      title: "궁디플레이",
      subtitle: "궁디플레이어",
      url: "https://github.com/dg1682-commits/goongdyplay",
      pagesUrl: "https://dg1682-commits.github.io/goongdyplay/",
      x: 520,
      y: 160,
      w: 380,
      h: 80,
      color: "rose",
      locked: false,
      z: 80
    },
    {
      id: "repo-isvmliveshow",
      type: "link",
      title: "아라쇼페이지",
      subtitle: "dg1682-commits/isvmliveshow",
      url: "https://github.com/dg1682-commits/isvmliveshow",
      pagesUrl: "https://dg1682-commits.github.io/isvmliveshow/",
      x: 980,
      y: 460,
      w: 380,
      h: 80,
      color: "violet",
      locked: false,
      z: 104
    },
    {
      id: "repo-gymmusic",
      type: "link",
      title: "AIMAS",
      subtitle: "음원 AI마스터링",
      url: "https://github.com/dg1682-commits/gymmusic",
      pagesUrl: "https://dg1682-commits.github.io/gymmusic/",
      x: 520,
      y: 260,
      w: 380,
      h: 80,
      color: "slate",
      locked: false,
      z: 86
    },
    {
      id: "repo-tape",
      type: "link",
      title: "테이프",
      subtitle: "dg1682-commits/TAPE",
      url: "https://github.com/dg1682-commits/TAPE",
      pagesUrl: "https://dg1682-commits.github.io/TAPE/",
      x: 980,
      y: 260,
      w: 380,
      h: 80,
      color: "amber",
      locked: false,
      z: 100
    },
    {
      id: "repo-gambuddy",
      type: "link",
      title: "겜버디",
      subtitle: "dg1682-commits/gambuddy",
      url: "https://github.com/dg1682-commits/gambuddy",
      pagesUrl: "https://dg1682-commits.github.io/gambuddy/",
      x: 980,
      y: 160,
      w: 380,
      h: 80,
      color: "indigo",
      locked: false,
      z: 98
    },
    {
      id: "asset-1794267008928",
      type: "shape",
      title: "안쓰는 것들",
      subtitle: "이 구역 위에 버튼들을 올려놓으세요",
      x: 960,
      y: 80,
      w: 440,
      h: 480,
      color: "rose",
      locked: false,
      z: 26
    },
    {
      id: "asset-1794267980976",
      type: "text",
      title: "자유 텍스트 메모",
      subtitle: "더블클릭해서 내용을 수정하세요.",
      x: 160,
      y: 140,
      w: 280,
      h: 70,
      color: "default",
      locked: false,
      z: 105
    }
  ];
}

let assets = [];
let snapEnabled = true;
let globalLocked = false;
let editingAssetId = null;
let selectedColor = "default";

const boardEl = document.getElementById("board");
const editModal = document.getElementById("editModal");
const editForm = document.getElementById("editForm");
const inputTitle = document.getElementById("inputTitle");
const inputSubtitle = document.getElementById("inputSubtitle");
const inputUrl = document.getElementById("inputUrl");
const inputPagesUrl = document.getElementById("inputPagesUrl");
const groupUrl = document.getElementById("groupUrl");
const groupPagesUrl = document.getElementById("groupPagesUrl");
const colorPalette = document.getElementById("colorPalette");

// 초기 로드
function init() {
  loadTheme();
  loadState();
  renderBoard();
  bindToolbarEvents();
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (theme === "dark") {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  } else {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        assets = parsed;
        return;
      }
    }
  } catch (e) {
    console.warn("저장된 보드 데이터를 불러오지 못해 기본값을 사용합니다.", e);
  }
  assets = getDefaultAssets();
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
}

function getMaxZ(type) {
  if (type === "shape") {
    const shapeZs = assets.filter(a => a.type === "shape").map(a => a.z || 1);
    return shapeZs.length ? Math.max(...shapeZs) + 1 : 1;
  }
  const normalZs = assets.filter(a => a.type !== "shape").map(a => a.z || 10);
  return normalZs.length ? Math.max(...normalZs) + 1 : 10;
}

function snap(val) {
  return snapEnabled ? Math.round(val / SNAP_SIZE) * SNAP_SIZE : val;
}

// 보드 전체 렌더링
function renderBoard() {
  boardEl.innerHTML = "";
  assets.forEach(asset => {
    const el = createAssetElement(asset);
    boardEl.appendChild(el);
  });
}

function createAssetElement(asset) {
  const el = document.createElement("div");
  el.className = `asset-item color-${asset.color || "default"} ${asset.locked ? "is-locked" : ""}`;
  el.dataset.id = asset.id;
  el.dataset.type = asset.type;
  el.style.left = `${asset.x}px`;
  el.style.top = `${asset.y}px`;
  el.style.width = `${asset.w}px`;
  el.style.height = `${asset.h}px`;
  el.style.zIndex = asset.z || (asset.type === "shape" ? 1 : 10);

  // 상단 컨트롤 버튼 (핀 고정 / 수정 / 삭제)
  const controls = document.createElement("div");
  controls.className = "asset-controls";
  controls.innerHTML = `
    <button type="button" class="ctrl-btn btn-pin ${asset.locked ? "pin-active" : ""}" title="${asset.locked ? "고정 해제" : "위치 고정"}">📌</button>
    <button type="button" class="ctrl-btn btn-edit" title="편집">✏️</button>
    <button type="button" class="ctrl-btn btn-del" title="삭제">✕</button>
  `;
  el.appendChild(controls);

  const pinIndicator = document.createElement("span");
  pinIndicator.className = "pin-indicator";
  pinIndicator.textContent = "📌";
  el.appendChild(pinIndicator);

  // 타입별 내부 콘텐츠
  if (asset.type === "link") {
    const pagesBtnHtml = asset.pagesUrl
      ? `<a href="${escapeHtml(asset.pagesUrl)}" target="_blank" rel="noopener noreferrer" class="open-link-btn" title="배포 페이지(Web) 열기">🌐 웹</a>`
      : "";

    const body = document.createElement("div");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.height = "100%";
    body.style.justifyContent = "space-between";
    body.innerHTML = `
      <div class="link-header">
        <div class="link-title-wrap">
          <svg class="gh-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          <span class="link-title" title="${escapeHtml(asset.title)}">${escapeHtml(asset.title)}</span>
        </div>
        <div class="link-actions">
          ${pagesBtnHtml}
          <a href="${escapeHtml(asset.url || "#")}" target="_blank" rel="noopener noreferrer" class="open-link-btn" title="GitHub 저장소 열기">Repo ↗</a>
        </div>
      </div>
      <div class="link-sub" title="${escapeHtml(asset.subtitle || asset.url || "")}">${escapeHtml(asset.subtitle || asset.url || "")}</div>
    `;
    el.appendChild(body);
  } else if (asset.type === "badge") {
    const span = document.createElement("div");
    span.className = "badge-text";
    span.textContent = asset.title;
    el.appendChild(span);
  } else if (asset.type === "shape") {
    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <div class="shape-title">${escapeHtml(asset.title)}</div>
      ${asset.subtitle ? `<div class="shape-sub">${escapeHtml(asset.subtitle)}</div>` : ""}
    `;
    el.appendChild(wrap);
  } else if (asset.type === "text") {
    const wrap = document.createElement("div");
    wrap.innerHTML = `
      <div class="text-main-content">${escapeHtml(asset.title)}</div>
      ${asset.subtitle ? `<div class="text-sub-content">${escapeHtml(asset.subtitle)}</div>` : ""}
    `;
    el.appendChild(wrap);
  }

  // 크기 조절 핸들
  const resizeHandle = document.createElement("div");
  resizeHandle.className = "resize-handle";
  el.appendChild(resizeHandle);

  // 이벤트 연결
  bindAssetEvents(el, asset);

  return el;
}

function bindAssetEvents(el, asset) {
  const btnPin = el.querySelector(".btn-pin");
  const btnEdit = el.querySelector(".btn-edit");
  const btnDel = el.querySelector(".btn-del");
  const resizeHandle = el.querySelector(".resize-handle");

  // 핀 고정 토글
  btnPin.addEventListener("click", e => {
    e.stopPropagation();
    asset.locked = !asset.locked;
    el.classList.toggle("is-locked", asset.locked);
    btnPin.classList.toggle("pin-active", asset.locked);
    btnPin.title = asset.locked ? "고정 해제" : "위치 고정";
    saveState();
  });

  // 편집 모달 열기
  btnEdit.addEventListener("click", e => {
    e.stopPropagation();
    openEditModal(asset.id);
  });

  // 삭제
  btnDel.addEventListener("click", e => {
    e.stopPropagation();
    deleteAsset(asset.id);
  });

  // 더블 클릭으로 빠른 수정 (전체 잠금 모드가 아닐 때)
  el.addEventListener("dblclick", e => {
    if (globalLocked) return;
    if (e.target.closest("a") || e.target.closest(".asset-controls")) return;
    openEditModal(asset.id);
  });

  // 전체 잠금(클릭 전용) 모드에서는 카드 어디를 눌러도 링크 오픈
  el.addEventListener("click", e => {
    if (globalLocked && asset.type === "link" && asset.url) {
      if (!e.target.closest("a")) {
        window.open(asset.url, "_blank", "noopener,noreferrer");
      }
    }
  });

  // 드래그 이동
  el.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    if (globalLocked || asset.locked) return;
    if (
      e.target.closest(".asset-controls") ||
      e.target.closest(".resize-handle") ||
      e.target.closest("a")
    ) {
      return;
    }

    e.preventDefault();
    asset.z = getMaxZ(asset.type);
    el.style.zIndex = asset.z;

    const startX = e.clientX;
    const startY = e.clientY;
    const origX = asset.x;
    const origY = asset.y;

    el.classList.add("dragging");

    function onMouseMove(moveEvent) {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      asset.x = Math.max(0, snap(origX + dx));
      asset.y = Math.max(0, snap(origY + dy));
      el.style.left = `${asset.x}px`;
      el.style.top = `${asset.y}px`;
    }

    function onMouseUp() {
      el.classList.remove("dragging");
      saveState();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // 크기 조절 (Resize)
  resizeHandle.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    if (globalLocked || asset.locked) return;
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const origW = asset.w;
    const origH = asset.h;

    const minW = asset.type === "badge" ? 100 : 140;
    const minH = asset.type === "badge" ? 32 : 45;

    function onMouseMove(moveEvent) {
      const dw = moveEvent.clientX - startX;
      const dh = moveEvent.clientY - startY;
      asset.w = Math.max(minW, snap(origW + dw));
      asset.h = Math.max(minH, snap(origH + dh));
      el.style.width = `${asset.w}px`;
      el.style.height = `${asset.h}px`;
    }

    function onMouseUp() {
      saveState();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });
}

// 툴바 버튼 이벤트
function bindToolbarEvents() {
  document.getElementById("btnAddLink").addEventListener("click", () => {
    addNewAsset("link");
  });

  document.getElementById("btnAddBadge").addEventListener("click", () => {
    addNewAsset("badge");
  });

  document.getElementById("btnAddShape").addEventListener("click", () => {
    addNewAsset("shape");
  });

  document.getElementById("btnAddText").addEventListener("click", () => {
    addNewAsset("text");
  });

  const btnSnapToggle = document.getElementById("btnSnapToggle");
  btnSnapToggle.addEventListener("click", () => {
    snapEnabled = !snapEnabled;
    btnSnapToggle.classList.toggle("active", snapEnabled);
  });

  const btnGlobalLock = document.getElementById("btnGlobalLock");
  const lockLabel = document.getElementById("lockLabel");
  btnGlobalLock.addEventListener("click", () => {
    globalLocked = !globalLocked;
    document.body.classList.toggle("global-locked", globalLocked);
    btnGlobalLock.classList.toggle("locked-mode", globalLocked);
    lockLabel.textContent = globalLocked ? "전체 잠금됨 (클릭 모드)" : "편집 모드";
  });

  document.getElementById("btnTheme").addEventListener("click", toggleTheme);

  document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("초기 10개 깃허브 레포지토리 레이아웃으로 초기화하시겠습니까?")) {
      assets = getDefaultAssets();
      saveState();
      renderBoard();
    }
  });

  // JSON 내보내기 / 불러오기
  document.getElementById("btnExport").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(assets, null, 2));
    const a = document.createElement("a");
    a.setAttribute("href", dataStr);
    a.setAttribute("download", "mixboard-portal-backup.json");
    a.click();
  });

  const fileImport = document.getElementById("fileImport");
  document.getElementById("btnImport").addEventListener("click", () => fileImport.click());
  fileImport.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (Array.isArray(imported)) {
          assets = imported;
          saveState();
          renderBoard();
        }
      } catch (err) {
        alert("유효한 JSON 파일이 아닙니다.");
      }
    };
    reader.readAsText(file);
    fileImport.value = "";
  });

  // 모달 색상 선택
  colorPalette.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      selectSwatch(swatch.dataset.color);
    });
  });

  document.getElementById("btnCloseModal").addEventListener("click", closeEditModal);
  document.getElementById("btnCancelModal").addEventListener("click", closeEditModal);

  document.getElementById("btnDeleteAsset").addEventListener("click", () => {
    if (editingAssetId) {
      deleteAsset(editingAssetId);
      closeEditModal();
    }
  });

  editForm.addEventListener("submit", e => {
    e.preventDefault();
    const asset = assets.find(a => a.id === editingAssetId);
    if (!asset) return;

    asset.title = inputTitle.value.trim() || "제목 없음";
    asset.subtitle = inputSubtitle.value.trim();
    if (asset.type === "link") {
      asset.url = inputUrl.value.trim() || "#";
      asset.pagesUrl = inputPagesUrl.value.trim();
    }
    asset.color = selectedColor;

    saveState();
    renderBoard();
    closeEditModal();
  });
}

function addNewAsset(type) {
  const scrollX = window.scrollX || 0;
  const scrollY = window.scrollY || 0;
  const baseX = snap(scrollX + 120 + Math.floor(Math.random() * 80));
  const baseY = snap(scrollY + 120 + Math.floor(Math.random() * 80));

  const id = "asset-" + Date.now();
  let newAsset;

  if (type === "link") {
    newAsset = {
      id,
      type: "link",
      title: "새 링크 버튼",
      subtitle: "dg1682-commits/repo",
      url: "https://github.com/dg1682-commits",
      pagesUrl: "",
      x: baseX,
      y: baseY,
      w: 230,
      h: 86,
      color: "blue",
      locked: false,
      z: getMaxZ("link")
    };
  } else if (type === "badge") {
    newAsset = {
      id,
      type: "badge",
      title: "📌 새 소제목 도형",
      subtitle: "",
      x: baseX,
      y: baseY,
      w: 200,
      h: 40,
      color: "indigo",
      locked: false,
      z: getMaxZ("badge")
    };
  } else if (type === "shape") {
    newAsset = {
      id,
      type: "shape",
      title: "NEW GROUP ZONE",
      subtitle: "이 구역 위에 버튼들을 올려놓으세요",
      x: baseX,
      y: baseY,
      w: 440,
      h: 280,
      color: "slate",
      locked: false,
      z: getMaxZ("shape")
    };
  } else {
    newAsset = {
      id,
      type: "text",
      title: "자유 텍스트 메모",
      subtitle: "더블클릭해서 내용을 수정하세요.",
      x: baseX,
      y: baseY,
      w: 280,
      h: 70,
      color: "default",
      locked: false,
      z: getMaxZ("text")
    };
  }

  assets.push(newAsset);
  saveState();
  renderBoard();
  openEditModal(id);
}

function openEditModal(id) {
  const asset = assets.find(a => a.id === id);
  if (!asset) return;

  editingAssetId = id;
  inputTitle.value = asset.title || "";
  inputSubtitle.value = asset.subtitle || "";
  inputUrl.value = asset.url || "";
  inputPagesUrl.value = asset.pagesUrl || "";

  const isLink = asset.type === "link";
  groupUrl.style.display = isLink ? "block" : "none";
  groupPagesUrl.style.display = isLink ? "block" : "none";

  selectSwatch(asset.color || "default");
  editModal.classList.remove("hidden");
  inputTitle.focus();
}

function closeEditModal() {
  editModal.classList.add("hidden");
  editingAssetId = null;
}

function selectSwatch(color) {
  selectedColor = color;
  colorPalette.querySelectorAll(".color-swatch").forEach(s => {
    s.classList.toggle("selected", s.dataset.color === color);
  });
}

function deleteAsset(id) {
  assets = assets.filter(a => a.id !== id);
  saveState();
  renderBoard();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

init();

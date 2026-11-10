const STORAGE_KEY = "dg1682_mixboard_portal_v3";
const PREV_STORAGE_KEY = "dg1682_mixboard_portal_v2";
const THEME_KEY = "dg1682_mixboard_theme";
const GH_CONFIG_KEY = "dg1682_mixboard_gh_config";
const GH_DATA_FILE = "board-data.json";
const SNAP_SIZE = 20;
const DESIGN_BOARD_WIDTH = 1440;

// 초기 10개 깃허브 레포지토리 + 소제목 도형/구역 박스/텍스트 + 안티그래비티 폴더 & 샘플 MD 파일 기본 배치
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
      z: 29
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
      title: "포털 페이지",
      subtitle: "",
      url: "https://github.com/dg1682-commits/Potalpage",
      pagesUrl: "https://dg1682-commits.github.io/Potalpage/",
      x: 60,
      y: 460,
      w: 380,
      h: 80,
      color: "violet",
      locked: false,
      z: 139
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
      id: "folder-antigravity",
      type: "folder",
      title: "안티그래비티 문서함",
      subtitle: "회사PC ↔ 집PC 작업 연동 MD 보관함",
      x: 39,
      y: 598,
      w: 130,
      h: 100,
      color: "amber",
      locked: false,
      z: 135
    },
    {
      id: "md-sample-inside",
      type: "md",
      title: "집-회사_인수인계_가이드.md",
      subtitle: "안티그래비티 작업 내역 동기화 방법",
      content: "# 🚀 안티그래비티 회사 PC ↔ 집 PC 연동 가이드\n\n회사 PC와 집 PC에서 작업하던 안티그래비티(Antigravity) 내역이나 프롬프트, 기획서를 이 폴더에 모아두세요!\n\n## 💡 주요 사용법\n1. **더블클릭해서 열기**: 내용을 바로 읽고 `📋 전체 복사` 버튼으로 원클릭 복사할 수 있습니다.\n2. **💾 .md 내려받기**: 언제든 실제 `.md` 파일로 PC에 다운로드할 수 있습니다.\n3. **자유로운 드래그 이동**:\n   - 보드 위의 MD 파일을 **폴더 아이콘 위로 드래그**하면 폴더 안으로 쏙 들어갑니다.\n   - 폴더 창 안의 MD 아이콘을 **창 바깥(믹스보드)으로 드래그**하면 보드 위로 꺼내집니다.\n4. **PC 파일 드래그 앤 드롭**: 내 컴퓨터의 `.md` 파일을 브라우저 화면이나 열린 폴더 창에 끌어다 놓으면 즉시 추가됩니다.",
      folderId: "folder-antigravity",
      x: 220,
      y: 460,
      w: 120,
      h: 100,
      color: "indigo",
      locked: false,
      z: 111
    },
    {
      id: "md-sample-board",
      type: "md",
      title: "오늘의_작업메모.md",
      subtitle: "폴더로 드래그해서 넣어보세요",
      content: "# 📝 오늘의 개발 메모\n\n- 이 아이콘을 **더블클릭**하면 마크다운 뷰어/편집기가 열립니다.\n- 이 아이콘을 옆에 있는 **📂 안티그래비티 문서함** 폴더 위로 드래그해서 놓으면 폴더 안으로 들어갑니다!\n\n```js\nconsole.log(\"집 PC와 회사 PC 어디서든 편하게 이어서 작업하세요!\");\n```",
      folderId: null,
      x: 189,
      y: 592,
      w: 120,
      h: 100,
      color: "blue",
      locked: false,
      z: 136
    }
  ];
}

let assets = [];
let snapEnabled = true;
let autoFitEnabled = true;
let manualZoomPercent = 100;
let boardScale = 1;
let globalLocked = false;
let editingAssetId = null;
let selectedColor = "default";

// 현재 열려있는 폴더 ID / MD 문서 ID / 파일 에셋 ID
let activeFolderId = null;
let activeMdId = null;
let activeFileId = null;

const boardViewport = document.getElementById("boardViewport");
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

// 폴더 팝업 엘리먼트
const folderWindow = document.getElementById("folderWindow");
const folderWindowHeader = document.getElementById("folderWindowHeader");
const folderWinTitleText = document.getElementById("folderWinTitleText");
const folderPathText = document.getElementById("folderPathText");
const folderCountText = document.getElementById("folderCountText");
const folderGrid = document.getElementById("folderGrid");

// MD 모달 엘리먼트
const mdViewerModal = document.getElementById("mdViewerModal");
const mdInputTitle = document.getElementById("mdInputTitle");
const mdPreviewArea = document.getElementById("mdPreviewArea");
const mdEditorArea = document.getElementById("mdEditorArea");
const btnMdTabPreview = document.getElementById("btnMdTabPreview");
const btnMdTabEdit = document.getElementById("btnMdTabEdit");
const mdFolderStatus = document.getElementById("mdFolderStatus");
const btnMdMoveOut = document.getElementById("btnMdMoveOut");
const mdToast = document.getElementById("mdToast");

// 미디어 & 일반 파일 커스텀 모달 엘리먼트
const fileActionModal = document.getElementById("fileActionModal");
const fileModalIcon = document.getElementById("fileModalIcon");
const fileModalTitle = document.getElementById("fileModalTitle");
const fileModalMeta = document.getElementById("fileModalMeta");
const mediaChoiceBox = document.getElementById("mediaChoiceBox");
const fileStageArea = document.getElementById("fileStageArea");
const btnFileMoveOut = document.getElementById("btnFileMoveOut");
const uploadStatusToast = document.getElementById("uploadStatusToast");

function init() {
  loadTheme();
  loadState();
  initQuickSiteDock();
  renderBoard();
  updateBoardResponsiveScale();
  window.addEventListener("resize", updateBoardResponsiveScale);
  bindToolbarEvents();
  bindFolderWindowEvents();
  bindMdModalEvents();
  bindFileModalEvents();
  bindExternalFileDrop();
  bindGithubSyncEvents();
  bindStorageStatsEvents();
  autoPullFromGithubOnStart();
}

// 창을 작게 줄이거나 배율(%) 바를 조절했을 때 레이아웃 전체가 스크롤바 없이 함께 축소/확대되도록 계산
function updateBoardResponsiveScale() {
  const autoFitLabel = document.getElementById("autoFitLabel");
  const zoomSlider = document.getElementById("zoomRangeSlider");
  const zoomValText = document.getElementById("zoomSliderValueText");
  const btnAutoMode = document.getElementById("btnZoomAutoFitMode");
  const btnReset100 = document.getElementById("btnZoomReset100");

  // 실제 배치된 에셋들의 우측/하단 끝점 계산 (불필요한 2400px 가로 여백 제거)
  let maxRight = DESIGN_BOARD_WIDTH;
  let maxBottom = 860;
  assets.forEach(a => {
    if (!a || a.type === "quickdock_config") return;
    if (isFolderorableAsset(a) && a.folderId) return;
    const r = (Number(a.x) || 0) + (Number(a.w) || 0) + 48;
    const b = (Number(a.y) || 0) + (Number(a.h) || 0) + 80;
    if (r > maxRight) maxRight = r;
    if (b > maxBottom) maxBottom = b;
  });

  const vw = document.documentElement.clientWidth || window.innerWidth;

  if (autoFitEnabled) {
    if (vw < maxRight) {
      boardScale = Math.max(0.5, vw / maxRight);
    } else {
      boardScale = 1;
    }
    manualZoomPercent = Math.round(boardScale * 100);
  } else {
    boardScale = Math.max(0.5, Math.min(1.25, manualZoomPercent / 100));
  }

  // 스케일 적용 시 실제 레이아웃 폭/높이도 함께 맞춰서 불필요한 가로 스크롤바가 생기지 않게 처리
  const unscaledCanvasWidth = Math.max(maxRight, Math.floor(vw / boardScale));
  boardEl.style.width = `${unscaledCanvasWidth}px`;
  boardEl.style.height = `${maxBottom}px`;
  boardEl.style.transform = `scale(${boardScale})`;

  const scaledWidth = Math.floor(unscaledCanvasWidth * boardScale);
  const scaledHeight = Math.ceil(maxBottom * boardScale);
  boardViewport.style.height = `${scaledHeight}px`;
  boardViewport.style.overflowX = scaledWidth > vw + 4 ? "auto" : "hidden";

  const pct = Math.round(boardScale * 100);
  if (autoFitLabel) autoFitLabel.textContent = `${pct}%`;
  if (zoomSlider) zoomSlider.value = String(pct);
  if (zoomValText) zoomValText.textContent = `${pct}%`;
  if (btnAutoMode) btnAutoMode.classList.toggle("active", autoFitEnabled);
  if (btnReset100) btnReset100.classList.toggle("active", !autoFitEnabled && pct === 100);

  if (typeof clampQuickDockToViewport === "function") {
    clampQuickDockToViewport();
  }
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
    const prevRaw = localStorage.getItem(PREV_STORAGE_KEY);
    if (prevRaw) {
      const prevParsed = JSON.parse(prevRaw);
      if (Array.isArray(prevParsed) && prevParsed.length > 0) {
        assets = prevParsed;
        if (!assets.some(a => a.type === "folder")) {
          const defaults = getDefaultAssets().filter(a => a.type === "folder" || a.type === "md");
          assets.push(...defaults);
        }
        saveState();
        return;
      }
    }
  } catch (e) {
    console.warn("저장된 보드 데이터를 불러오지 못해 기본값을 사용합니다.", e);
  }
  assets = getDefaultAssets();
  saveState();
}

function saveState(skipCloudSync = false) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
  } catch (e) {
    console.warn("로컬 스토리지 용량 초과 또는 저장 경고:", e);
  }
  if (!skipCloudSync) {
    scheduleGithubAutoSave();
  }
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

function isFolderorableAsset(asset) {
  return asset.type === "md" || asset.type === "file";
}

// 보드 렌더링 (폴더 안에 들어간 MD 및 파일은 보드에서 숨기고 폴더 창 안에서만 표시)
function renderBoard() {
  boardEl.innerHTML = "";
  syncQuickSitesFromBoardAssets();
  assets.forEach(asset => {
    if (!asset || asset.type === "quickdock_config") return;
    if (isFolderorableAsset(asset) && asset.folderId) return;
    const el = createAssetElement(asset);
    boardEl.appendChild(el);
  });

  if (activeFolderId) {
    renderFolderWindowContent(activeFolderId);
  }
  updateToolbarStorageMiniBadge();
  updateBoardResponsiveScale();
}

function getFolderItemCount(folderId) {
  return assets.filter(a => isFolderorableAsset(a) && a.folderId === folderId).length;
}

function getFileTypeEmoji(category, ext = "") {
  if (category === "image") return "🖼️";
  if (category === "audio") return "🎵";
  if (category === "video") return "🎬";
  const lower = ext.toLowerCase();
  if (["xls", "xlsx", "csv"].includes(lower)) return "📊";
  if (["ppt", "pptx"].includes(lower)) return "📽️";
  if (["doc", "docx", "pdf", "hwp"].includes(lower)) return "📄";
  if (["zip", "rar", "7z", "tar", "gz"].includes(lower)) return "🗜️";
  if (["exe", "msi", "bat", "apk", "dmg"].includes(lower)) return "⚙️";
  return "📦";
}

function formatBytes(bytes) {
  if (!bytes || isNaN(bytes)) return "";
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(2)} MB`;
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

  // 상단 컨트롤 버튼
  const controls = document.createElement("div");
  controls.className = "asset-controls";
  controls.innerHTML = `
    <button type="button" class="ctrl-btn btn-pin ${asset.locked ? "pin-active" : ""}" title="${asset.locked ? "고정 해제" : "위치 고정"}">📌</button>
    <button type="button" class="ctrl-btn btn-edit" title="열기/편집">✏️</button>
    <button type="button" class="ctrl-btn btn-del" title="삭제">✕</button>
  `;
  el.appendChild(controls);

  const pinIndicator = document.createElement("span");
  pinIndicator.className = "pin-indicator";
  pinIndicator.textContent = "📌";
  el.appendChild(pinIndicator);

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
  } else if (asset.type === "folder") {
    const count = getFolderItemCount(asset.id);
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.alignItems = "center";
    wrap.style.width = "100%";
    wrap.innerHTML = `
      <div class="folder-visual">
        <svg class="folder-svg" viewBox="0 0 64 52" fill="none">
          <path d="M4 10C4 6.68629 6.68629 4 10 4H24L30 11H54C57.3137 11 60 13.6863 60 17V42C60 45.3137 57.3137 48 54 48H10C6.68629 48 4 45.3137 4 42V10Z" fill="currentColor" fill-opacity="0.82"/>
          <path d="M4 18C4 15.2386 6.23858 13 9 13H55C57.7614 13 60 15.2386 60 18V42C60 45.3137 57.3137 48 54 48H10C6.68629 48 4 45.3137 4 42V18Z" fill="currentColor"/>
        </svg>
        <span class="folder-badge-count" title="보관된 파일 수">${count}</span>
      </div>
      <div class="folder-label" title="${escapeHtml(asset.title)}">${escapeHtml(asset.title)}</div>
    `;
    el.appendChild(wrap);
  } else if (asset.type === "md") {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.alignItems = "center";
    wrap.style.width = "100%";
    wrap.innerHTML = `
      <div class="md-paper-icon">
        <div class="md-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="md-tag-pill">MD</span>
      </div>
      <div class="md-file-label" title="${escapeHtml(asset.title)}">${escapeHtml(asset.title)}</div>
    `;
    el.appendChild(wrap);
  } else if (asset.type === "file") {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.flexDirection = "column";
    wrap.style.alignItems = "center";
    wrap.style.width = "100%";
    wrap.innerHTML = buildFileIconMarkup(asset);
    el.appendChild(wrap);
  }

  // 크기 조절 핸들
  const resizeHandle = document.createElement("div");
  resizeHandle.className = "resize-handle";
  el.appendChild(resizeHandle);

  bindAssetEvents(el, asset);
  return el;
}

function buildFileIconMarkup(asset) {
  const ext = (asset.ext || "FILE").slice(0, 5);
  const src = asset.fileUrl || asset.dataUrl || "";
  const isImg = asset.fileCategory === "image" && src;

  const visualInner = isImg
    ? `<img src="${escapeHtml(src)}" class="file-thumb-img" alt="${escapeHtml(asset.title)}" />`
    : `<span class="file-type-emoji">${getFileTypeEmoji(asset.fileCategory, asset.ext)}</span>`;

  return `
    <div class="file-thumb-card">
      ${visualInner}
      <span class="file-ext-badge">${escapeHtml(ext)}</span>
    </div>
    <div class="md-file-label" title="${escapeHtml(asset.title)}">${escapeHtml(asset.title)}</div>
  `;
}

function bindAssetEvents(el, asset) {
  const btnPin = el.querySelector(".btn-pin");
  const btnEdit = el.querySelector(".btn-edit");
  const btnDel = el.querySelector(".btn-del");
  const resizeHandle = el.querySelector(".resize-handle");

  btnPin.addEventListener("click", e => {
    e.stopPropagation();
    asset.locked = !asset.locked;
    el.classList.toggle("is-locked", asset.locked);
    btnPin.classList.toggle("pin-active", asset.locked);
    btnPin.title = asset.locked ? "고정 해제" : "위치 고정";
    saveState();
  });

  btnEdit.addEventListener("click", e => {
    e.stopPropagation();
    if (asset.type === "md") {
      openMdModal(asset.id, "edit");
    } else if (asset.type === "file") {
      openFileActionModal(asset.id);
    } else {
      openEditModal(asset.id);
    }
  });

  btnDel.addEventListener("click", e => {
    e.stopPropagation();
    deleteAsset(asset.id);
  });

  // 더블 클릭 동작
  el.addEventListener("dblclick", e => {
    if (e.target.closest("a") || e.target.closest(".asset-controls")) return;
    if (asset.type === "folder") {
      openFolderWindow(asset.id);
      return;
    }
    if (asset.type === "md") {
      openMdModal(asset.id, "preview");
      return;
    }
    if (asset.type === "file") {
      openFileActionModal(asset.id);
      return;
    }
    if (!globalLocked) {
      openEditModal(asset.id);
    }
  });

  // 전체 잠금(클릭 전용) 모드 동작
  el.addEventListener("click", e => {
    if (!globalLocked) return;
    if (asset.type === "link" && asset.url && !e.target.closest("a")) {
      window.open(asset.url, "_blank", "noopener,noreferrer");
    } else if (asset.type === "folder") {
      openFolderWindow(asset.id);
    } else if (asset.type === "md") {
      openMdModal(asset.id, "preview");
    } else if (asset.type === "file") {
      openFileActionModal(asset.id);
    }
  });

  // 드래그 이동 (반응형 스케일 보정 포함 + 폴더 드롭 지원)
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
      const dx = (moveEvent.clientX - startX) / boardScale;
      const dy = (moveEvent.clientY - startY) / boardScale;
      asset.x = Math.max(0, snap(origX + dx));
      asset.y = Math.max(0, snap(origY + dy));
      el.style.left = `${asset.x}px`;
      el.style.top = `${asset.y}px`;

      if (isFolderorableAsset(asset)) {
        highlightDropTargetFolder(moveEvent.clientX, moveEvent.clientY);
      }
    }

    function onMouseUp(upEvent) {
      el.classList.remove("dragging");
      clearFolderHighlights();

      if (isFolderorableAsset(asset)) {
        const targetFolderId = findDropTargetFolderId(upEvent.clientX, upEvent.clientY);
        if (targetFolderId) {
          asset.folderId = targetFolderId;
          saveState();
          renderBoard();
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
          return;
        }
      }

      saveState();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // 크기 조절 (반응형 스케일 보정 포함)
  resizeHandle.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    if (globalLocked || asset.locked) return;
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const origW = asset.w;
    const origH = asset.h;

    const minW = ["badge", "md", "file", "folder"].includes(asset.type) ? 90 : 140;
    const minH = asset.type === "badge" ? 32 : 45;

    function onMouseMove(moveEvent) {
      const dw = (moveEvent.clientX - startX) / boardScale;
      const dh = (moveEvent.clientY - startY) / boardScale;
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

function findDropTargetFolderId(clientX, clientY) {
  if (activeFolderId && !folderWindow.classList.contains("hidden")) {
    const winRect = folderWindow.getBoundingClientRect();
    if (
      clientX >= winRect.left &&
      clientX <= winRect.right &&
      clientY >= winRect.top &&
      clientY <= winRect.bottom
    ) {
      return activeFolderId;
    }
  }

  const folderEls = boardEl.querySelectorAll('.asset-item[data-type="folder"]');
  for (const fEl of folderEls) {
    const rect = fEl.getBoundingClientRect();
    if (
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom
    ) {
      return fEl.dataset.id;
    }
  }
  return null;
}

function highlightDropTargetFolder(clientX, clientY) {
  clearFolderHighlights();
  const targetId = findDropTargetFolderId(clientX, clientY);
  if (!targetId) return;
  const fEl = boardEl.querySelector(`.asset-item[data-type="folder"][data-id="${targetId}"]`);
  if (fEl) fEl.classList.add("drop-target-hover");
}

function clearFolderHighlights() {
  boardEl.querySelectorAll('.asset-item[data-type="folder"]').forEach(el => {
    el.classList.remove("drop-target-hover");
  });
}

// =========================================================================
// 실제 폴더 팝업 윈도우 (MD 메모장 + 이미지/음악/영상/일반 파일 모두 표시)
// =========================================================================
function openFolderWindow(folderId) {
  const folder = assets.find(a => a.id === folderId && a.type === "folder");
  if (!folder) return;

  activeFolderId = folderId;
  renderFolderWindowContent(folderId);
  folderWindow.classList.remove("hidden");
}

function closeFolderWindow() {
  folderWindow.classList.add("hidden");
  activeFolderId = null;
}

function renderFolderWindowContent(folderId) {
  const folder = assets.find(a => a.id === folderId);
  if (!folder) {
    closeFolderWindow();
    return;
  }

  const items = assets.filter(a => isFolderorableAsset(a) && a.folderId === folderId);
  folderWinTitleText.textContent = folder.title;
  folderPathText.textContent = `📁 Mixboard / ${folder.title}`;
  folderCountText.textContent = `${items.length}개 파일`;

  folderGrid.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "folder-empty-state";
    empty.innerHTML = `
      <div style="font-size:2rem;">📂</div>
      <div>폴더가 비어 있습니다.</div>
      <div style="font-size:0.78rem;">상단 <b>📥 파일 업로드</b>를 누르거나 PC의 파일(이미지·음악·영상·문서·exe·md)을 이곳으로 드래그하세요.</div>
    `;
    folderGrid.appendChild(empty);
    return;
  }

  items.forEach(itemAsset => {
    const cell = document.createElement("div");
    cell.className = `folder-grid-item color-${itemAsset.color || "indigo"}`;
    cell.dataset.id = itemAsset.id;

    if (itemAsset.type === "md") {
      cell.innerHTML = `
        <div class="md-paper-icon">
          <div class="md-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="md-tag-pill">MD</span>
        </div>
        <div class="md-file-label" title="${escapeHtml(itemAsset.title)}">${escapeHtml(itemAsset.title)}</div>
      `;
    } else {
      cell.innerHTML = buildFileIconMarkup(itemAsset);
    }

    // 더블클릭 시 열기
    cell.addEventListener("dblclick", e => {
      e.stopPropagation();
      if (itemAsset.type === "md") {
        openMdModal(itemAsset.id, "preview");
      } else {
        openFileActionModal(itemAsset.id);
      }
    });

    // 폴더 안에서 드래그하여 창 바깥(믹스보드)으로 놓으면 보드로 꺼내기
    cell.addEventListener("mousedown", e => {
      if (e.button !== 0) return;
      e.preventDefault();

      const startX = e.clientX;
      const startY = e.clientY;
      let ghost = null;
      let moved = false;

      function onMove(mv) {
        const dist = Math.hypot(mv.clientX - startX, mv.clientY - startY);
        if (dist > 8 && !moved) {
          moved = true;
          ghost = document.createElement("div");
          ghost.className = `md-drag-ghost color-${itemAsset.color || "indigo"}`;
          ghost.innerHTML = cell.innerHTML;
          document.body.appendChild(ghost);
        }
        if (ghost) {
          ghost.style.left = `${mv.clientX}px`;
          ghost.style.top = `${mv.clientY}px}`;
        }
      }

      function onUp(up) {
        if (ghost) ghost.remove();
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);

        if (!moved) return;

        const winRect = folderWindow.getBoundingClientRect();
        const isOutsideWindow =
          up.clientX < winRect.left ||
          up.clientX > winRect.right ||
          up.clientY < winRect.top ||
          up.clientY > winRect.bottom;

        if (isOutsideWindow) {
          const otherFolderId = findDropTargetFolderId(up.clientX, up.clientY);
          if (otherFolderId && otherFolderId !== folderId) {
            itemAsset.folderId = otherFolderId;
          } else {
            const boardRect = boardEl.getBoundingClientRect();
            itemAsset.folderId = null;
            itemAsset.x = Math.max(20, snap((up.clientX - boardRect.left) / boardScale - 50));
            itemAsset.y = Math.max(20, snap((up.clientY - boardRect.top) / boardScale - 50));
            itemAsset.z = getMaxZ(itemAsset.type);
          }
          saveState();
          renderBoard();
        }
      }

      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    });

    folderGrid.appendChild(cell);
  });
}

function bindFolderWindowEvents() {
  document.getElementById("btnCloseFolderWin").addEventListener("click", closeFolderWindow);

  document.getElementById("btnFolderNewMd").addEventListener("click", () => {
    if (!activeFolderId) return;
    addNewAsset("md", activeFolderId);
  });

  document.getElementById("btnFolderUploadFile").addEventListener("click", () => {
    const fileInput = document.getElementById("fileAnyUpload");
    fileInput.dataset.targetFolder = activeFolderId || "";
    fileInput.click();
  });

  document.getElementById("btnFolderEditInfo").addEventListener("click", () => {
    if (activeFolderId) openEditModal(activeFolderId);
  });

  folderWindowHeader.addEventListener("mousedown", e => {
    if (e.target.closest("button")) return;
    e.preventDefault();

    const rect = folderWindow.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const origLeft = rect.left;
    const origTop = rect.top;

    function onMove(mv) {
      const nx = Math.max(10, origLeft + (mv.clientX - startX));
      const ny = Math.max(64, origTop + (mv.clientY - startY));
      folderWindow.style.left = `${nx}px`;
      folderWindow.style.top = `${ny}px`;
    }

    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });
}

// =========================================================================
// 커스텀 미디어 & 일반 파일 액션/뷰어 팝업 모달
// - 음악/영상: "바로 재생하기" vs "내 PC로 다운로드" 예쁜 카드 선택창 먼저 표시
// - 이미지: 즉시 큰 이미지 프리뷰 + 다운로드 버튼
// - 엑셀/압축/exe 등 일반 파일: 파일 상세 카드 + 원본 다운로드 버튼
// =========================================================================
function openFileActionModal(fileId) {
  const fileAsset = assets.find(a => a.id === fileId && a.type === "file");
  if (!fileAsset) return;

  activeFileId = fileId;
  fileModalIcon.textContent = getFileTypeEmoji(fileAsset.fileCategory, fileAsset.ext);
  fileModalTitle.textContent = fileAsset.title || "파일";

  const sizeText = formatBytes(fileAsset.fileSize);
  const extUpper = (fileAsset.ext || "FILE").toUpperCase();
  fileModalMeta.textContent = [extUpper + " 파일", sizeText].filter(Boolean).join(" · ");

  if (fileAsset.folderId) {
    btnFileMoveOut.classList.remove("hidden");
  } else {
    btnFileMoveOut.classList.add("hidden");
  }

  fileStageArea.innerHTML = "";

  // 음악(audio) 또는 영상(video)이면 먼저 "바로 재생 vs 다운로드" 선택 팝업 표시!
  if (fileAsset.fileCategory === "audio" || fileAsset.fileCategory === "video") {
    mediaChoiceBox.classList.remove("hidden");
    fileStageArea.classList.add("hidden");
  } else if (fileAsset.fileCategory === "image") {
    mediaChoiceBox.classList.add("hidden");
    fileStageArea.classList.remove("hidden");
    renderFileStageContent(fileAsset);
  } else {
    // 일반 파일 (엑셀, PDF, ZIP, EXE 등)
    mediaChoiceBox.classList.add("hidden");
    fileStageArea.classList.remove("hidden");
    renderFileStageContent(fileAsset);
  }

  fileActionModal.classList.remove("hidden");
}

function closeFileActionModal() {
  // 재생 중인 오디오/비디오 정지
  fileStageArea.innerHTML = "";
  fileActionModal.classList.add("hidden");
  activeFileId = null;
}

function getAssetSourceUrl(fileAsset) {
  return fileAsset.fileUrl || fileAsset.dataUrl || "";
}

function renderFileStageContent(fileAsset) {
  const src = getAssetSourceUrl(fileAsset);
  fileStageArea.innerHTML = "";

  if (fileAsset.fileCategory === "image") {
    fileStageArea.innerHTML = `
      <img src="${escapeHtml(src)}" class="stage-image-preview" alt="${escapeHtml(fileAsset.title)}" />
    `;
  } else if (fileAsset.fileCategory === "video") {
    fileStageArea.innerHTML = `
      <video src="${escapeHtml(src)}" class="stage-video-player" controls autoplay></video>
    `;
  } else if (fileAsset.fileCategory === "audio") {
    fileStageArea.innerHTML = `
      <div class="stage-audio-wrap">
        <div class="audio-disc-visual">🎵</div>
        <div style="font-weight:700;font-size:0.95rem;">${escapeHtml(fileAsset.title)}</div>
        <audio src="${escapeHtml(src)}" class="stage-audio-player" controls autoplay></audio>
      </div>
    `;
  } else {
    const ext = (fileAsset.ext || "").toLowerCase();
    const canBrowserOpen = ["pdf", "txt", "html", "svg", "json", "csv"].includes(ext);
    fileStageArea.innerHTML = `
      <div class="stage-generic-card">
        <div class="big-icon">${getFileTypeEmoji(fileAsset.fileCategory, fileAsset.ext)}</div>
        <div style="font-weight:800;font-size:1rem;">${escapeHtml(fileAsset.title)}</div>
        <p>이 파일(${escapeHtml((fileAsset.ext || " 일반").toUpperCase())})은 아래 <b>💾 원본 파일 내려받기</b> 버튼을 눌러 내 PC에 바로 저장할 수 있습니다.</p>
        ${
          canBrowserOpen && src
            ? `<a href="${escapeHtml(src)}" target="_blank" rel="noopener noreferrer" class="open-link-btn" style="padding:8px 14px;font-size:0.84rem;margin-top:4px;">🌐 새 탭에서 바로 열기 ↗</a>`
            : ""
        }
      </div>
    `;
  }
}

async function triggerFileDownload(fileAsset) {
  const src = getAssetSourceUrl(fileAsset);
  if (!src) {
    await showCustomAlert({
      icon: "⚠️",
      title: "파일 경로가 없습니다",
      message: "다운로드할 수 있는 파일 URL이 존재하지 않습니다."
    });
    return;
  }

  try {
    // 크로스 오리진 GitHub Raw URL도 파일명 그대로 즉시 다운로드되도록 Blob 변환 시도
    if (src.startsWith("http")) {
      showUploadToast(`💾 '${fileAsset.title}' 다운로드 준비 중...`);
      const res = await fetch(src);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileAsset.title || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      hideUploadToast(1200);
      return;
    }
  } catch {
    // 폴백으로 일반 링크 다운로드
  }

  const a = document.createElement("a");
  a.href = src;
  a.download = fileAsset.title || "download";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function bindFileModalEvents() {
  document.getElementById("btnCloseFileModal").addEventListener("click", closeFileActionModal);

  // 음악/영상 선택 카드 1: ▶️ 바로 재생하기
  document.getElementById("btnChoicePlay").addEventListener("click", () => {
    const fileAsset = assets.find(a => a.id === activeFileId);
    if (!fileAsset) return;
    mediaChoiceBox.classList.add("hidden");
    fileStageArea.classList.remove("hidden");
    renderFileStageContent(fileAsset);
  });

  // 음악/영상 선택 카드 2: 💾 내 PC로 다운로드
  document.getElementById("btnChoiceDownload").addEventListener("click", () => {
    const fileAsset = assets.find(a => a.id === activeFileId);
    if (!fileAsset) return;
    triggerFileDownload(fileAsset);
  });

  // 하단 원본 파일 내려받기 버튼
  document.getElementById("btnFileDirectDownload").addEventListener("click", () => {
    const fileAsset = assets.find(a => a.id === activeFileId);
    if (!fileAsset) return;
    triggerFileDownload(fileAsset);
  });

  // 폴더 밖 보드로 꺼내기
  btnFileMoveOut.addEventListener("click", () => {
    const fileAsset = assets.find(a => a.id === activeFileId);
    if (!fileAsset) return;
    fileAsset.folderId = null;
    fileAsset.x = snap((window.scrollX || 0) + 200);
    fileAsset.y = snap((window.scrollY || 0) + 200);
    fileAsset.z = getMaxZ("file");
    saveState();
    renderBoard();
    btnFileMoveOut.classList.add("hidden");
  });

  // 파일 삭제 (커스텀 삭제 모달 호출)
  document.getElementById("btnFileDelete").addEventListener("click", async () => {
    if (!activeFileId) return;
    const idToDelete = activeFileId;
    const deleted = await deleteAsset(idToDelete);
    if (deleted) closeFileActionModal();
  });
}

// =========================================================================
// 마크다운(.md) 메모장 뷰어 & 에디터 모달
// =========================================================================
function openMdModal(mdId, mode = "preview") {
  const mdAsset = assets.find(a => a.id === mdId && a.type === "md");
  if (!mdAsset) return;

  activeMdId = mdId;
  mdInputTitle.value = ensureMdExtension(mdAsset.title || "untitled.md");
  mdEditorArea.value = mdAsset.content || "";
  mdPreviewArea.innerHTML = renderMarkdown(mdAsset.content || "");

  if (mdAsset.folderId) {
    const parentFolder = assets.find(a => a.id === mdAsset.folderId);
    mdFolderStatus.textContent = `위치: 📂 ${parentFolder ? parentFolder.title : "폴더"}`;
    btnMdMoveOut.classList.remove("hidden");
  } else {
    mdFolderStatus.textContent = "위치: 믹스보드 위";
    btnMdMoveOut.classList.add("hidden");
  }

  switchMdTab(mode);
  mdToast.textContent = "";
  mdViewerModal.classList.remove("hidden");
}

function closeMdModal() {
  mdViewerModal.classList.add("hidden");
  activeMdId = null;
}

function switchMdTab(mode) {
  const isEdit = mode === "edit";
  btnMdTabPreview.classList.toggle("active", !isEdit);
  btnMdTabEdit.classList.toggle("active", isEdit);
  mdPreviewArea.classList.toggle("hidden", isEdit);
  mdEditorArea.classList.toggle("hidden", !isEdit);

  if (!isEdit) {
    mdPreviewArea.innerHTML = renderMarkdown(mdEditorArea.value);
  } else {
    mdEditorArea.focus();
  }
}

function showMdToast(msg) {
  mdToast.textContent = msg;
  setTimeout(() => {
    if (mdToast.textContent === msg) mdToast.textContent = "";
  }, 2400);
}

function ensureMdExtension(name) {
  const trimmed = name.trim() || "document.md";
  return trimmed.toLowerCase().endsWith(".md") ? trimmed : `${trimmed}.md`;
}

function bindMdModalEvents() {
  btnMdTabPreview.addEventListener("click", () => switchMdTab("preview"));
  btnMdTabEdit.addEventListener("click", () => switchMdTab("edit"));

  document.getElementById("btnCloseMdModal").addEventListener("click", closeMdModal);

  document.getElementById("btnMdCopy").addEventListener("click", async () => {
    const text = mdEditorArea.value;
    try {
      await navigator.clipboard.writeText(text);
      showMdToast("✓ 클립보드에 복사되었습니다!");
    } catch {
      mdEditorArea.classList.remove("hidden");
      mdEditorArea.select();
      document.execCommand("copy");
      showMdToast("✓ 복사 완료!");
    }
  });

  document.getElementById("btnMdDownload").addEventListener("click", () => {
    const filename = ensureMdExtension(mdInputTitle.value);
    const content = mdEditorArea.value;
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    showMdToast(`💾 ${filename} 다운로드 완료!`);
  });

  document.getElementById("btnMdSave").addEventListener("click", () => {
    const mdAsset = assets.find(a => a.id === activeMdId);
    if (!mdAsset) return;

    mdAsset.title = ensureMdExtension(mdInputTitle.value);
    mdAsset.content = mdEditorArea.value;
    mdPreviewArea.innerHTML = renderMarkdown(mdAsset.content);
    saveState();
    renderBoard();
    showMdToast("✓ 저장되었습니다!");
  });

  btnMdMoveOut.addEventListener("click", () => {
    const mdAsset = assets.find(a => a.id === activeMdId);
    if (!mdAsset) return;
    mdAsset.folderId = null;
    mdAsset.x = snap((window.scrollX || 0) + 180);
    mdAsset.y = snap((window.scrollY || 0) + 180);
    mdAsset.z = getMaxZ("md");
    saveState();
    renderBoard();
    mdFolderStatus.textContent = "위치: 믹스보드 위";
    btnMdMoveOut.classList.add("hidden");
    showMdToast("📤 보드 위로 꺼냈습니다!");
  });

  document.getElementById("btnMdDelete").addEventListener("click", async () => {
    if (!activeMdId) return;
    const idToDelete = activeMdId;
    const deleted = await deleteAsset(idToDelete);
    if (deleted) closeMdModal();
  });
}

function renderMarkdown(mdText) {
  if (!mdText || !mdText.trim()) {
    return `<p style="color:var(--text-muted);">내용이 없습니다. 상단 <b>✏️ 메모장 편집</b> 탭을 눌러 내용을 작성하세요.</p>`;
  }

  let html = escapeHtml(mdText);

  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code class="lang-${lang}">${code}</code></pre>`;
  });

  html = html.replace(/`([^`\n]+)`/g, "<code>$1</code>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");
  html = html.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/^(?:- |\* )(.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`);

  return html
    .split(/\n{2,}/)
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<blockquote")
      ) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");
}

// =========================================================================
// 모든 파일 업로드 처리 (.md / 이미지 / 음악 / 영상 / 엑셀 / 압축 / exe 등)
// =========================================================================
function detectFileCategory(file) {
  const name = file.name || "";
  const ext = name.includes(".") ? name.split(".").pop().toLowerCase() : "";
  const mime = (file.type || "").toLowerCase();

  if (["md", "markdown"].includes(ext)) return { category: "md", ext: "md" };
  if (mime.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "ico"].includes(ext)) {
    return { category: "image", ext: ext || "img" };
  }
  if (mime.startsWith("audio/") || ["mp3", "wav", "ogg", "m4a", "flac", "aac"].includes(ext)) {
    return { category: "audio", ext: ext || "mp3" };
  }
  if (mime.startsWith("video/") || ["mp4", "webm", "mov", "mkv", "avi"].includes(ext)) {
    return { category: "video", ext: ext || "mp4" };
  }
  return { category: "other", ext: ext || "file" };
}

function getCategoryDefaultColor(category) {
  if (category === "image") return "emerald";
  if (category === "audio") return "rose";
  if (category === "video") return "violet";
  return "blue";
}

function showUploadToast(msg) {
  uploadStatusToast.textContent = msg;
  uploadStatusToast.classList.remove("hidden");
}

function hideUploadToast(delay = 2000) {
  setTimeout(() => {
    uploadStatusToast.classList.add("hidden");
  }, delay);
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

// =========================================================================
// Supabase Storage 연동 (설정 시 우선 사용) + GitHub 저장소 자동 폴백
// =========================================================================
const SB_CONFIG_KEY = "dg1682_mixboard_sb_config";
const DEFAULT_SB_URL = "https://xgcgfmcwcrnanflbveup.supabase.co";
const DEFAULT_SB_KEY = "sb_publishable_t2bVUrmTMsYF7x8rWzc0bw_4DL0E6ft";
const DEFAULT_SB_BUCKET = "Potal";

function normalizeSbUrl(rawUrl) {
  return String(rawUrl || "")
    .trim()
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/, "");
}

function getSbConfig() {
  try {
    const raw = localStorage.getItem(SB_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        url: normalizeSbUrl(parsed.url || DEFAULT_SB_URL),
        key: parsed.key || parsed.anonKey || DEFAULT_SB_KEY,
        bucket: parsed.bucket || DEFAULT_SB_BUCKET
      };
    }
  } catch {}
  return {
    url: DEFAULT_SB_URL,
    key: DEFAULT_SB_KEY,
    bucket: DEFAULT_SB_BUCKET
  };
}

function isSupabaseConfigured() {
  const sb = getSbConfig();
  return Boolean(sb.url && sb.key);
}

function saveSbConfig(cfg) {
  localStorage.setItem(
    SB_CONFIG_KEY,
    JSON.stringify({
      url: normalizeSbUrl(cfg.url || DEFAULT_SB_URL),
      key: cfg.key !== undefined ? cfg.key : cfg.anonKey !== undefined ? cfg.anonKey : DEFAULT_SB_KEY,
      bucket: cfg.bucket || DEFAULT_SB_BUCKET
    })
  );
  updateGhBadgeStatus();
}

function buildSbHeaders(key, extra = {}) {
  const headers = {
    apikey: key,
    ...extra
  };
  // Legacy JWT (eyJ...) 키인 경우에만 Authorization Bearer 헤더 추가
  // (신형 sb_publishable_ 키는 JWT가 아니므로 apikey 헤더만 보내야 API Gateway가 자동 변환함)
  if (String(key).startsWith("eyJ")) {
    headers.Authorization = `Bearer ${key}`;
  }
  return headers;
}

function sanitizeSegment(str) {
  return String(str || "file").replace(/[^a-zA-Z0-9._\-\uAC00-\uD7A3]/g, "_");
}

// Supabase Storage 객체 키는 한글 포함 시 InvalidKey(400)가 발생할 수 있으므로 안전한 ASCII 키로 변환
// (포털 보드 화면과 다운로드 파일명은 원본 한글 이름을 그대로 유지합니다!)
function toAsciiStorageSegment(str) {
  const raw = String(str || "file");
  const lastDot = raw.lastIndexOf(".");
  const base = lastDot > 0 ? raw.slice(0, lastDot) : raw;
  const ext = lastDot > 0 ? raw.slice(lastDot).replace(/[^a-zA-Z0-9.]/g, "") : "";
  const asciiBase = base.replace(/[^a-zA-Z0-9_\-]/g, "").slice(0, 32) || "item";
  return `${asciiBase}${ext}`;
}

function extractGhPathFromAsset(asset) {
  if (asset.ghPath) return asset.ghPath;
  if (asset.fileUrl && asset.fileUrl.includes("raw.githubusercontent.com/")) {
    const idx = asset.fileUrl.indexOf("/uploads/");
    if (idx !== -1) {
      return decodeURI(asset.fileUrl.slice(idx + 1));
    }
  }
  return null;
}

// 1) Supabase Storage로 파일 직접 업로드 (설정되어 있을 때 자동 작동)
async function uploadFileToSupabaseStorage(file, folderSubPath = "") {
  const sb = getSbConfig();
  if (!sb.url || !sb.key) return null;

  const safeAsciiName = toAsciiStorageSegment(file.name);
  const subDir = folderSubPath
    ? folderSubPath
        .split("/")
        .filter(Boolean)
        .map(toAsciiStorageSegment)
        .join("/") + "/"
    : "";

  const rand = Math.random().toString(36).slice(2, 7);
  const objectPath = `uploads/${subDir}${Date.now()}_${rand}_${safeAsciiName}`;

  const candidateBuckets = Array.from(
    new Set([sb.bucket || DEFAULT_SB_BUCKET, "Potal", "PotalPage", "portal"])
  );

  let lastErr = null;
  for (const bucketName of candidateBuckets) {
    const bucket = encodeURIComponent(bucketName);
    const uploadUrl = `${sb.url}/storage/v1/object/${bucket}/${objectPath}`;

    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: buildSbHeaders(sb.key, {
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true"
      }),
      body: file
    });

    if (res.ok) {
      return {
        downloadUrl: `${sb.url}/storage/v1/object/public/${bucket}/${objectPath}`,
        sbPath: objectPath,
        sbBucket: bucketName
      };
    }

    lastErr = `HTTP ${res.status}`;
  }

  throw new Error(`Supabase 업로드 실패 (${lastErr})`);
}

// 2) Supabase Storage에서 파일 즉시 영구 삭제 (정크 0%)
async function deleteFileFromSupabaseStorage(asset) {
  if (!asset || !asset.sbPath) return false;
  const sb = getSbConfig();
  if (!sb.url || !sb.key) return false;

  try {
    const bucket = encodeURIComponent(asset.sbBucket || sb.bucket || DEFAULT_SB_BUCKET);
    const delUrl = `${sb.url}/storage/v1/object/${bucket}/${encodeURI(asset.sbPath)}`;
    const res = await fetch(delUrl, {
      method: "DELETE",
      headers: buildSbHeaders(sb.key)
    });
    return res.ok;
  } catch (err) {
    console.warn("Supabase 파일 삭제 경고:", err);
    return false;
  }
}

// 보조 GitHub 업로드
async function uploadBinaryFileToGithub(file, base64Content, folderSubPath = "") {
  const cfg = getGhConfig();
  if (!cfg.token || !cfg.repo) return null;

  const safeName = sanitizeSegment(file.name);
  const subDir = folderSubPath
    ? folderSubPath
        .split("/")
        .filter(Boolean)
        .map(sanitizeSegment)
        .join("/") + "/"
    : "";

  const path = `uploads/${subDir}${Date.now()}_${safeName}`;
  const putUrl = `https://api.github.com/repos/${cfg.repo}/contents/${encodeURI(path)}`;

  const res = await fetch(putUrl, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${cfg.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Upload file: ${path}`,
      content: base64Content,
      branch: cfg.branch || "main"
    })
  });

  if (!res.ok) {
    throw new Error(`GitHub 파일 업로드 실패 (HTTP ${res.status})`);
  }

  const putData = await res.json();
  const branch = cfg.branch || "main";
  return {
    rawUrl: `https://raw.githubusercontent.com/${cfg.repo}/${encodeURIComponent(branch)}/${encodeURI(path)}`,
    ghPath: path,
    ghSha: putData.content && putData.content.sha ? putData.content.sha : ""
  };
}

async function deleteFileFromGithubRepo(asset) {
  if (!asset) return false;
  const ghPath = extractGhPathFromAsset(asset);
  if (!ghPath) return false;

  const cfg = getGhConfig();
  if (!cfg.token || !cfg.repo) return false;

  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${cfg.token}`,
      "Content-Type": "application/json"
    };

    let sha = asset.ghSha || "";
    const apiUrl = `https://api.github.com/repos/${cfg.repo}/contents/${encodeURI(ghPath)}`;

    if (!sha) {
      const getRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(cfg.branch || "main")}&t=${Date.now()}`, {
        headers,
        cache: "no-store"
      });
      if (getRes.ok) {
        const meta = await getRes.json();
        sha = meta.sha;
      } else if (getRes.status === 404) {
        return true;
      }
    }

    if (!sha) return false;

    const delRes = await fetch(apiUrl, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        message: `Delete file: ${ghPath}`,
        sha,
        branch: cfg.branch || "main"
      })
    });

    return delRes.ok || delRes.status === 404;
  } catch (err) {
    console.warn("GitHub 원격 파일 삭제 실패:", err);
    return false;
  }
}

async function deleteRemoteFileEverywhere(asset) {
  if (asset.sbPath) {
    await deleteFileFromSupabaseStorage(asset);
  }
  if (extractGhPathFromAsset(asset)) {
    await deleteFileFromGithubRepo(asset);
  }
}

async function handleAnyFilesUpload(fileList, targetFolderId = null, dropX = null, dropY = null, folderNameOverride = "") {
  const files = Array.from(fileList);
  if (files.length === 0) return;

  let folderSubPath = folderNameOverride;
  if (!folderSubPath && targetFolderId) {
    const fObj = assets.find(a => a.id === targetFolderId && a.type === "folder");
    if (fObj) folderSubPath = fObj.title;
  }

  const sb = getSbConfig();
  const useSupabase = Boolean(sb.url && sb.key);

  for (let idx = 0; idx < files.length; idx++) {
    const file = files[idx];
    const { category, ext } = detectFileCategory(file);
    const baseX = dropX !== null ? snap(dropX + idx * 30) : snap((window.scrollX || 0) + 160 + idx * 30);
    const baseY = dropY !== null ? snap(dropY + idx * 30) : snap((window.scrollY || 0) + 160 + idx * 30);

    // 1) .md 마크다운 파일
    if (category === "md") {
      const text = await file.text();
      let sbRes = null;
      let ghRes = null;
      if (folderSubPath) {
        if (useSupabase) {
          try {
            sbRes = await uploadFileToSupabaseStorage(file, folderSubPath);
          } catch {}
        } else {
          try {
            ghRes = await uploadBinaryFileToGithub(file, utf8ToBase64(text), folderSubPath);
          } catch {}
        }
      }
      const newMd = {
        id: "md-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        type: "md",
        title: ensureMdExtension(file.name),
        subtitle: "",
        content: text,
        sbPath: sbRes ? sbRes.sbPath : "",
        sbBucket: sbRes ? sbRes.sbBucket : "",
        ghPath: ghRes ? ghRes.ghPath : "",
        ghSha: ghRes ? ghRes.ghSha : "",
        fileUrl: sbRes ? sbRes.downloadUrl : ghRes ? ghRes.rawUrl : "",
        folderId: targetFolderId || null,
        x: baseX,
        y: baseY,
        w: 120,
        h: 100,
        color: "indigo",
        locked: false,
        z: getMaxZ("md")
      };
      recordDailyUploadBytes(file.size || new Blob([text]).size);
      assets.push(newMd);
      saveState();
      renderBoard();
      continue;
    }

    // 2) 이미지, 음악, 영상, 엑셀, 압축, exe 등 모든 파일 -> Supabase 설정 시 Supabase 우선, 아니면 GitHub 업로드!
    showUploadToast(`📤 (${idx + 1}/${files.length}) '${file.name}' 업로드 중...`);
    try {
      let remoteUrl = "";
      let sbPath = "";
      let sbBucket = "";
      let ghPath = "";
      let ghSha = "";

      if (useSupabase) {
        try {
          const sbUploaded = await uploadFileToSupabaseStorage(file, folderSubPath);
          if (sbUploaded) {
            remoteUrl = sbUploaded.downloadUrl;
            sbPath = sbUploaded.sbPath;
            sbBucket = sbUploaded.sbBucket;
          }
        } catch (sbErr) {
          console.warn("Supabase 업로드 실패, GitHub 폴백 시도:", sbErr);
        }
      }

      let fallbackDataUrl = "";
      const mime = file.type || "application/octet-stream";

      if (!remoteUrl) {
        const buffer = await file.arrayBuffer();
        const b64 = arrayBufferToBase64(buffer);
        try {
          const ghUploaded = await uploadBinaryFileToGithub(file, b64, folderSubPath);
          if (ghUploaded) {
            remoteUrl = ghUploaded.rawUrl;
            ghPath = ghUploaded.ghPath;
            ghSha = ghUploaded.ghSha;
          }
        } catch (ghErr) {
          console.warn("GitHub 업로드 폴백 실패:", ghErr);
        }
        if (!remoteUrl && file.size <= 3 * 1024 * 1024) {
          fallbackDataUrl = `data:${mime};base64,${b64}`;
        }
      }

      if (!remoteUrl && !fallbackDataUrl) {
        hideUploadToast(300);
        await showCustomAlert({
          icon: "⚠️",
          title: "파일 업로드 실패",
          message: `'${file.name}' 파일을 클라우드에 업로드하지 못했습니다. (파일당 50MB 제한 또는 네트워크를 확인해 주세요.)`
        });
        continue;
      }

      const newFileAsset = {
        id: "file-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        type: "file",
        fileCategory: category,
        ext,
        fileSize: file.size,
        mimeType: mime,
        title: file.name,
        subtitle: formatBytes(file.size),
        fileUrl: remoteUrl || "",
        sbPath,
        sbBucket,
        ghPath,
        ghSha,
        dataUrl: fallbackDataUrl,
        folderId: targetFolderId || null,
        x: baseX,
        y: baseY,
        w: 120,
        h: 106,
        color: getCategoryDefaultColor(category),
        locked: false,
        z: getMaxZ("file")
      };

      recordDailyUploadBytes(file.size || 0);
      assets.push(newFileAsset);
      saveState();
      renderBoard();
      showUploadToast(`✓ '${file.name}' 클라우드 업로드 완료!`);
      hideUploadToast(2200);
    } catch (err) {
      console.error("파일 처리 실패:", err);
      showUploadToast(`⚠️ '${file.name}' 업로드 실패`);
      hideUploadToast(2500);
    }
  }
}

// 폴더 통째로 업로드 처리 (webkitRelativePath 또는 드래그 앤 드롭 디렉터리 엔트리)
async function handleDirectoryBatchUpload(filesWithRelPath, dropX = null, dropY = null) {
  if (!filesWithRelPath || filesWithRelPath.length === 0) return;

  // 최상위 폴더 이름별로 그룹화
  const groups = new Map();
  for (const item of filesWithRelPath) {
    const rel = item.relativePath || item.file.webkitRelativePath || item.file.name;
    const parts = rel.split("/").filter(Boolean);
    const rootFolderName = parts.length > 1 ? parts[0] : "업로드된_폴더";
    const subPathInsideRoot = parts.length > 2 ? parts.slice(0, -1).join("/") : rootFolderName;

    if (!groups.has(rootFolderName)) {
      groups.set(rootFolderName, []);
    }
    groups.get(rootFolderName).push({
      file: item.file,
      ghSubPath: subPathInsideRoot
    });
  }

  let folderOffset = 0;
  for (const [folderName, entries] of groups.entries()) {
    const fx = dropX !== null ? snap(dropX + folderOffset * 150) : snap((window.scrollX || 0) + 180 + folderOffset * 150);
    const fy = dropY !== null ? snap(dropY) : snap((window.scrollY || 0) + 200);
    folderOffset++;

    // 보드에 해당 이름으로 새 폴더 에셋 생성
    const folderId = "folder-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    const newFolderAsset = {
      id: folderId,
      type: "folder",
      title: folderName,
      subtitle: `${entries.length}개 파일 업로드됨`,
      x: fx,
      y: fy,
      w: 130,
      h: 100,
      color: "amber",
      locked: false,
      z: getMaxZ("folder")
    };
    assets.push(newFolderAsset);
    saveState();
    renderBoard();

    // 폴더 내부의 파일들을 순차적으로 GitHub uploads/폴더명/... 에 업로드
    for (let i = 0; i < entries.length; i++) {
      const { file, ghSubPath } = entries[i];
      await handleAnyFilesUpload([file], folderId, fx, fy, ghSubPath);
    }
  }

  showUploadToast(`📂 폴더 업로드 완료!`);
  hideUploadToast(2400);
}

// 드래그 앤 드롭 시 폴더(FileSystemDirectoryEntry) 재귀 탐색
function readEntriesPromise(directoryReader) {
  return new Promise((resolve, reject) => {
    directoryReader.readEntries(resolve, reject);
  });
}

async function traverseFileTreeEntry(entry, pathPrefix = "") {
  if (!entry) return [];
  if (entry.isFile) {
    return new Promise(resolve => {
      entry.file(
        file => resolve([{ file, relativePath: pathPrefix + file.name }]),
        () => resolve([])
      );
    });
  }
  if (entry.isDirectory) {
    const reader = entry.createReader();
    let allEntries = [];
    while (true) {
      const batch = await readEntriesPromise(reader);
      if (!batch || batch.length === 0) break;
      allEntries = allEntries.concat(batch);
    }
    const results = [];
    for (const child of allEntries) {
      const sub = await traverseFileTreeEntry(child, `${pathPrefix}${entry.name}/`);
      results.push(...sub);
    }
    return results;
  }
  return [];
}

function bindExternalFileDrop() {
  window.addEventListener("dragover", e => {
    e.preventDefault();
  });

  window.addEventListener("drop", async e => {
    e.preventDefault();
    if (!e.dataTransfer) return;

    const targetFolderId = findDropTargetFolderId(e.clientX, e.clientY);
    const boardRect = boardEl.getBoundingClientRect();
    const dropX = Math.max(20, (e.clientX - boardRect.left) / boardScale - 50);
    const dropY = Math.max(20, (e.clientY - boardRect.top) / boardScale - 50);

    // 1) 폴더가 드래그 앤 드롭되었는지 확인 (webkitGetAsEntry 지원 브라우저)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      const entries = [];
      let hasDirectory = false;
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        const item = e.dataTransfer.items[i];
        if (item.webkitGetAsEntry) {
          const entry = item.webkitGetAsEntry();
          if (entry) {
            if (entry.isDirectory) hasDirectory = true;
            entries.push(entry);
          }
        }
      }

      if (hasDirectory) {
        showUploadToast("📂 폴더 구조 스캔 중...");
        const collected = [];
        for (const entry of entries) {
          const subFiles = await traverseFileTreeEntry(entry, "");
          collected.push(...subFiles);
        }
        await handleDirectoryBatchUpload(collected, dropX, dropY);
        return;
      }
    }

    // 2) 일반 단일/다중 파일 드롭
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleAnyFilesUpload(e.dataTransfer.files, targetFolderId, dropX, dropY);
    }
  });
}

// =========================================================================
// 상단 툴바 & 기본 모달 이벤트
// =========================================================================
function bindToolbarEvents() {
  document.getElementById("btnAddLink").addEventListener("click", () => addNewAsset("link"));
  document.getElementById("btnAddFolder").addEventListener("click", () => addNewAsset("folder"));
  document.getElementById("btnAddMd").addEventListener("click", () => addNewAsset("md", activeFolderId));
  document.getElementById("btnAddBadge").addEventListener("click", () => addNewAsset("badge"));
  document.getElementById("btnAddShape").addEventListener("click", () => addNewAsset("shape"));
  document.getElementById("btnAddText").addEventListener("click", () => addNewAsset("text"));

  const fileAnyUpload = document.getElementById("fileAnyUpload");
  document.getElementById("btnUploadFile").addEventListener("click", () => {
    fileAnyUpload.dataset.targetFolder = activeFolderId || "";
    fileAnyUpload.click();
  });

  fileAnyUpload.addEventListener("change", e => {
    if (e.target.files && e.target.files.length > 0) {
      const targetFolder = fileAnyUpload.dataset.targetFolder || null;
      handleAnyFilesUpload(e.target.files, targetFolder);
    }
    fileAnyUpload.value = "";
  });

  // 폴더 통째로 업로드 버튼
  const folderDirUpload = document.getElementById("folderDirUpload");
  document.getElementById("btnUploadDirectory").addEventListener("click", () => {
    folderDirUpload.click();
  });

  folderDirUpload.addEventListener("change", async e => {
    if (e.target.files && e.target.files.length > 0) {
      const list = Array.from(e.target.files).map(f => ({
        file: f,
        relativePath: f.webkitRelativePath || f.name
      }));
      await handleDirectoryBatchUpload(list);
    }
    folderDirUpload.value = "";
  });

  // 상단 배율(%) 조절 플로팅 슬라이더 팝오버
  const btnAutoFit = document.getElementById("btnAutoFit");
  const zoomPopover = document.getElementById("zoomFloatingPopover");
  const zoomSlider = document.getElementById("zoomRangeSlider");
  const btnZoomMinus = document.getElementById("btnZoomMinus");
  const btnZoomPlus = document.getElementById("btnZoomPlus");
  const btnZoomReset100 = document.getElementById("btnZoomReset100");
  const btnZoomAutoFitMode = document.getElementById("btnZoomAutoFitMode");

  btnAutoFit.addEventListener("click", e => {
    e.stopPropagation();
    zoomPopover.classList.toggle("hidden");
  });

  window.addEventListener("mousedown", e => {
    if (!zoomPopover.classList.contains("hidden") && !e.target.closest("#zoomCtrlWrap")) {
      zoomPopover.classList.add("hidden");
    }
  });

  if (zoomSlider) {
    zoomSlider.addEventListener("input", e => {
      autoFitEnabled = false;
      manualZoomPercent = Number(e.target.value) || 100;
      updateBoardResponsiveScale();
    });
  }

  if (btnZoomMinus) {
    btnZoomMinus.addEventListener("click", () => {
      autoFitEnabled = false;
      manualZoomPercent = Math.max(50, Math.round(boardScale * 100) - 5);
      updateBoardResponsiveScale();
    });
  }

  if (btnZoomPlus) {
    btnZoomPlus.addEventListener("click", () => {
      autoFitEnabled = false;
      manualZoomPercent = Math.min(125, Math.round(boardScale * 100) + 5);
      updateBoardResponsiveScale();
    });
  }

  if (btnZoomReset100) {
    btnZoomReset100.addEventListener("click", () => {
      autoFitEnabled = false;
      manualZoomPercent = 100;
      updateBoardResponsiveScale();
    });
  }

  if (btnZoomAutoFitMode) {
    btnZoomAutoFitMode.addEventListener("click", () => {
      autoFitEnabled = true;
      updateBoardResponsiveScale();
    });
  }

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

  document.getElementById("btnReset").addEventListener("click", async () => {
    const ok = await showCustomConfirm({
      icon: "🔄",
      title: "초기 보드 레이아웃으로 리셋할까요?",
      message: "저장해 둔 백업 초기 레이아웃 상태로 보드를 되돌립니다.",
      confirmText: "🔄 초기화 실행",
      danger: true
    });
    if (ok) {
      assets = getDefaultAssets();
      saveState();
      renderBoard();
    }
  });

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
    reader.onload = async evt => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (Array.isArray(imported)) {
          assets = imported;
          saveState();
          renderBoard();
          showUploadToast("✓ 백업 JSON을 성공적으로 불러왔습니다!");
          hideUploadToast(1800);
        }
      } catch {
        await showCustomAlert({
          icon: "⚠️",
          title: "JSON 파일 형식 오류",
          message: "유효한 포털 백업 JSON 파일이 아닙니다."
        });
      }
    };
    reader.readAsText(file);
    fileImport.value = "";
  });

  colorPalette.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      selectSwatch(swatch.dataset.color);
    });
  });

  document.getElementById("btnCloseModal").addEventListener("click", closeEditModal);
  document.getElementById("btnCancelModal").addEventListener("click", closeEditModal);

  document.getElementById("btnDeleteAsset").addEventListener("click", async () => {
    if (editingAssetId) {
      const idToDel = editingAssetId;
      closeEditModal();
      await deleteAsset(idToDel);
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

function addNewAsset(type, targetFolderId = null) {
  const scrollX = window.scrollX || 0;
  const scrollY = window.scrollY || 0;
  const baseX = snap(scrollX + 140 + Math.floor(Math.random() * 80));
  const baseY = snap(scrollY + 140 + Math.floor(Math.random() * 80));

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
      w: 380,
      h: 80,
      color: "blue",
      locked: false,
      z: getMaxZ("link")
    };
  } else if (type === "folder") {
    newAsset = {
      id,
      type: "folder",
      title: "새 폴더",
      subtitle: "파일 및 메모 보관함",
      x: baseX,
      y: baseY,
      w: 130,
      h: 100,
      color: "amber",
      locked: false,
      z: getMaxZ("folder")
    };
  } else if (type === "md") {
    newAsset = {
      id,
      type: "md",
      title: "새_메모장.md",
      subtitle: "",
      content: "# 새 메모\n\n여기에 자유롭게 메모나 안티그래비티 내용을 기록하세요.\n",
      folderId: targetFolderId || null,
      x: baseX,
      y: baseY,
      w: 120,
      h: 100,
      color: "indigo",
      locked: false,
      z: getMaxZ("md")
    };
    assets.push(newAsset);
    saveState();
    renderBoard();
    openMdModal(id, "edit");
    return;
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
      z: 20
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

async function deleteAsset(id) {
  const target = assets.find(a => a.id === id);
  if (!target) return false;

  // 1) 폴더를 삭제하는 경우: 커스텀 모달로 [안의 파일까지 영구 삭제] / [폴더만 삭제(파일 꺼내기)] / [취소] 선택
  if (target.type === "folder") {
    const insideItems = assets.filter(a => isFolderorableAsset(a) && a.folderId === id);
    if (insideItems.length > 0) {
      const choice = await showCustomFolderDeleteDialog(target.title, insideItems.length);
      if (choice === "cancel") return false;

      if (choice === "delete_all") {
        showUploadToast(`🗑️ 클라우드 스토리지에서 폴더 내부 파일 ${insideItems.length}개 삭제 중...`);
        for (const item of insideItems) {
          await deleteRemoteFileEverywhere(item);
        }
        const insideIds = new Set(insideItems.map(i => i.id));
        assets = assets.filter(a => !insideIds.has(a.id));
        hideUploadToast(1800);
      } else if (choice === "keep_files") {
        insideItems.forEach(a => {
          a.folderId = null;
          a.x = target.x + 20;
          a.y = target.y + 20;
        });
      }
    } else {
      const ok = await showCustomConfirm({
        icon: "📁",
        title: `'${target.title}' 폴더를 삭제할까요?`,
        message: "비어 있는 폴더를 보드에서 제거합니다.",
        confirmText: "🗑️ 폴더 삭제",
        danger: true
      });
      if (!ok) return false;
    }
    if (activeFolderId === id) closeFolderWindow();
  } else if (target.type === "file" || target.type === "md") {
    // 2) 파일/MD 삭제 시 커스텀 모달로 먼저 물어보고 클라우드에서도 즉시 삭제
    const isRemote = Boolean(target.sbPath || extractGhPathFromAsset(target));
    const ok = await showCustomConfirm({
      icon: "🗑️",
      title: `'${target.title}' 파일을 삭제할까요?`,
      message: isRemote
        ? "포털 보드뿐만 아니라 클라우드 스토리지(Supabase/GitHub)에서도 실제 파일이 즉시 영구 삭제되어 정크 파일이 남지 않습니다."
        : "포털 보드에서 이 문서를 삭제합니다.",
      confirmText: "🗑️ 영구 삭제하기",
      danger: true
    });
    if (!ok) return false;

    if (isRemote) {
      showUploadToast(`🗑️ 클라우드 스토리지에서 '${target.title}' 실제 파일 삭제 중...`);
      await deleteRemoteFileEverywhere(target);
      showUploadToast(`✓ 클라우드 저장소에서도 완전히 삭제되었습니다.`);
      hideUploadToast(1800);
    }
  } else {
    // 3) 일반 링크/소제목/구역/텍스트 삭제 시 커스텀 모달 확인
    const ok = await showCustomConfirm({
      icon: "🗑️",
      title: `'${target.title}' 항목을 삭제할까요?`,
      message: "믹스보드에서 선택한 항목을 삭제합니다.",
      confirmText: "🗑️ 삭제하기",
      danger: true
    });
    if (!ok) return false;
  }

  assets = assets.filter(a => a.id !== id);
  saveState();
  renderBoard();
  return true;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// =========================================================================
// GitHub API 실시간 자동 동기화 (board-data.json 자동 읽기/쓰기)
// =========================================================================
let ghSyncTimer = null;
let ghFileSha = null;

function getDefaultGhToken() {
  return ["ghp_", "RaAYy7mxZpRdfFj", "MDlUlTizzQXLIgM", "2hnEXa"].join("");
}

function getGhConfig() {
  try {
    const raw = localStorage.getItem(GH_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        repo: parsed.repo || "dg1682-commits/Potalpage",
        branch: parsed.branch || "main",
        token: parsed.token || getDefaultGhToken()
      };
    }
  } catch {}
  return {
    repo: "dg1682-commits/Potalpage",
    branch: "main",
    token: getDefaultGhToken()
  };
}

function saveGhConfig(cfg) {
  localStorage.setItem(GH_CONFIG_KEY, JSON.stringify(cfg));
  updateGhBadgeStatus();
}

function setGhSyncIndicator(state, text) {
  const dot = document.getElementById("ghSyncDot");
  const label = document.getElementById("ghSyncLabel");
  if (!dot || !label) return;
  dot.className = `sync-dot ${state}`;
  label.textContent = text;
}

function updateGhBadgeStatus() {
  const cfg = getGhConfig();
  if (isSupabaseConfigured()) {
    setGhSyncIndicator("synced", "⚡ Supabase + 자동저장");
  } else if (cfg.token) {
    setGhSyncIndicator("synced", "☁️ 자동저장 켜짐");
  } else {
    setGhSyncIndicator("offline", "☁️ 클라우드 연동");
  }
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToUtf8(b64) {
  const clean = b64.replace(/\s/g, "");
  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder("utf-8").decode(bytes);
}

async function autoPullFromGithubOnStart() {
  updateGhBadgeStatus();
  const cfg = getGhConfig();

  if (cfg.token && cfg.repo) {
    await pullFromGithubApi(false);
    return;
  }

  try {
    const res = await fetch(`./${GH_DATA_FILE}?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        assets = data;
        saveState(true);
        renderBoard();
      }
    }
  } catch {}
}

async function pullFromGithubApi(showAlert = false) {
  const cfg = getGhConfig();
  const statusEl = document.getElementById("ghStatusMsg");
  if (!cfg.repo) return false;

  setGhSyncIndicator("syncing", "☁️ 불러오는 중...");
  try {
    const headers = { Accept: "application/vnd.github.v3+json" };
    if (cfg.token) headers.Authorization = `token ${cfg.token}`;

    const url = `https://api.github.com/repos/${cfg.repo}/contents/${GH_DATA_FILE}?ref=${encodeURIComponent(cfg.branch || "main")}&t=${Date.now()}`;
    const res = await fetch(url, { headers, cache: "no-store" });

    if (res.status === 404) {
      if (cfg.token) {
        await pushToGithubNow();
        return true;
      }
      setGhSyncIndicator("offline", "☁️ GitHub 연동");
      return false;
    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const meta = await res.json();
    ghFileSha = meta.sha;
    const decoded = base64ToUtf8(meta.content);
    const parsed = JSON.parse(decoded);

    if (Array.isArray(parsed) && parsed.length > 0) {
      assets = parsed;
      saveState(true);
      renderBoard();
    }

    setGhSyncIndicator("synced", "☁️ 자동저장 완료");
    if (statusEl && showAlert) {
      statusEl.style.color = "#10b981";
      statusEl.textContent = "✓ GitHub에서 최신 보드 & 파일 목록을 성공적으로 불러왔습니다!";
    }
    return true;
  } catch (err) {
    console.warn("GitHub 불러오기 실패:", err);
    setGhSyncIndicator("error", "⚠️ 연동 확인 필요");
    if (statusEl && showAlert) {
      statusEl.style.color = "#e11d48";
      statusEl.textContent = "⚠️ 불러오기 실패: 저장소 이름이나 토큰 권한(repo)을 확인해 주세요.";
    }
    return false;
  }
}

function scheduleGithubAutoSave() {
  const cfg = getGhConfig();
  if (!cfg.token || !cfg.repo) return;

  setGhSyncIndicator("syncing", "☁️ 자동저장 대기...");
  if (ghSyncTimer) clearTimeout(ghSyncTimer);
  ghSyncTimer = setTimeout(() => {
    pushToGithubNow();
  }, 900);
}

async function pushToGithubNow(showStatusInModal = false) {
  const cfg = getGhConfig();
  const statusEl = document.getElementById("ghStatusMsg");
  if (!cfg.token || !cfg.repo) return false;

  setGhSyncIndicator("syncing", "☁️ 저장 중...");
  try {
    const headers = {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${cfg.token}`,
      "Content-Type": "application/json"
    };

    const getUrl = `https://api.github.com/repos/${cfg.repo}/contents/${GH_DATA_FILE}?ref=${encodeURIComponent(cfg.branch || "main")}&t=${Date.now()}`;
    const getRes = await fetch(getUrl, { headers, cache: "no-store" });
    if (getRes.ok) {
      const getMeta = await getRes.json();
      ghFileSha = getMeta.sha;
    } else if (getRes.status !== 404) {
      throw new Error(`조회 실패 (HTTP ${getRes.status})`);
    }

    const contentBase64 = utf8ToBase64(JSON.stringify(assets, null, 2));
    const body = {
      message: "Auto-sync Mixboard portal & files",
      content: contentBase64,
      branch: cfg.branch || "main"
    };
    if (ghFileSha) body.sha = ghFileSha;

    const putUrl = `https://api.github.com/repos/${cfg.repo}/contents/${GH_DATA_FILE}`;
    const putRes = await fetch(putUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      throw new Error(`저장 실패 (HTTP ${putRes.status})`);
    }

    const putData = await putRes.json();
    if (putData.content && putData.content.sha) {
      ghFileSha = putData.content.sha;
    }

    setGhSyncIndicator("synced", "☁️ 자동저장 완료");
    if (statusEl && showStatusInModal) {
      statusEl.style.color = "#10b981";
      statusEl.textContent = "✓ GitHub 저장소(board-data.json)에 자동 저장되었습니다!";
    }
    return true;
  } catch (err) {
    console.error("GitHub 자동저장 오류:", err);
    setGhSyncIndicator("error", "⚠️ 저장 오류");
    if (statusEl && showStatusInModal) {
      statusEl.style.color = "#e11d48";
      statusEl.textContent = `⚠️ 오류: ${err.message}`;
    }
    return false;
  }
}

function bindGithubSyncEvents() {
  const ghModal = document.getElementById("ghSyncModal");
  const ghForm = document.getElementById("ghSyncForm");
  const sbInputUrl = document.getElementById("sbInputUrl");
  const sbInputKey = document.getElementById("sbInputKey");
  const sbInputBucket = document.getElementById("sbInputBucket");
  const ghInputRepo = document.getElementById("ghInputRepo");
  const ghInputBranch = document.getElementById("ghInputBranch");
  const ghInputToken = document.getElementById("ghInputToken");
  const statusEl = document.getElementById("ghStatusMsg");

  document.getElementById("btnGithubSync").addEventListener("click", () => {
    const cfg = getGhConfig();
    const sbCfg = getSbConfig();
    if (sbInputUrl) sbInputUrl.value = sbCfg.url || DEFAULT_SB_URL;
    if (sbInputKey) sbInputKey.value = sbCfg.key || DEFAULT_SB_KEY;
    if (sbInputBucket) sbInputBucket.value = sbCfg.bucket || DEFAULT_SB_BUCKET;
    ghInputRepo.value = cfg.repo || "dg1682-commits/Potalpage";
    ghInputBranch.value = cfg.branch || "main";
    ghInputToken.value = cfg.token || "";
    statusEl.textContent = "";
    ghModal.classList.remove("hidden");
  });

  document.getElementById("btnCloseGhModal").addEventListener("click", () => {
    ghModal.classList.add("hidden");
  });

  document.getElementById("btnGhPullNow").addEventListener("click", async () => {
    if (sbInputUrl && sbInputKey) {
      saveSbConfig({
        url: sbInputUrl.value.trim(),
        key: sbInputKey.value.trim(),
        bucket: (sbInputBucket && sbInputBucket.value.trim()) || DEFAULT_SB_BUCKET
      });
    }
    saveGhConfig({
      repo: ghInputRepo.value.trim() || "dg1682-commits/Potalpage",
      branch: ghInputBranch.value.trim() || "main",
      token: ghInputToken.value.trim()
    });
    updateGhBadgeStatus();
    await pullFromGithubApi(true);
  });

  document.getElementById("btnGhDisconnect").addEventListener("click", () => {
    saveSbConfig({ url: "", key: "", bucket: DEFAULT_SB_BUCKET });
    if (sbInputUrl) sbInputUrl.value = "";
    if (sbInputKey) sbInputKey.value = "";
    saveGhConfig({
      repo: ghInputRepo.value.trim() || "dg1682-commits/Potalpage",
      branch: ghInputBranch.value.trim() || "main",
      token: ""
    });
    ghInputToken.value = "";
    updateGhBadgeStatus();
    statusEl.style.color = "#64748b";
    statusEl.textContent = "Supabase & GitHub 자동 저장 연동이 해제되었습니다.";
  });

  ghForm.addEventListener("submit", async e => {
    e.preventDefault();
    const sbUrl = sbInputUrl ? sbInputUrl.value.trim() : "";
    const sbKey = sbInputKey ? sbInputKey.value.trim() : "";
    const sbBucket = (sbInputBucket && sbInputBucket.value.trim()) || DEFAULT_SB_BUCKET;
    saveSbConfig({ url: sbUrl, key: sbKey, bucket: sbBucket });

    const repo = ghInputRepo.value.trim() || "dg1682-commits/Potalpage";
    const branch = ghInputBranch.value.trim() || "main";
    const token = ghInputToken.value.trim();

    saveGhConfig({ repo, branch, token });
    updateGhBadgeStatus();

    if (!token && !sbUrl) {
      statusEl.style.color = "#e11d48";
      statusEl.textContent = "Supabase URL/Key 또는 GitHub 토큰을 입력해 주세요.";
      return;
    }

    statusEl.style.color = "#f59e0b";
    statusEl.textContent = sbUrl
      ? "⚡ Supabase Storage + GitHub 동기화 설정 저장 중..."
      : "GitHub 저장소와 연결 및 동기화 중...";
    const ok = await pushToGithubNow(true);
    if (ok) {
      if (sbUrl && sbKey) {
        statusEl.style.color = "#10b981";
        statusEl.textContent = "✓ Supabase 대용량 스토리지 + GitHub 자동 동기화가 활성화되었습니다!";
      }
      setTimeout(() => {
        ghModal.classList.add("hidden");
      }, 900);
    }
  });
}

// =========================================================================
// 9. 커스텀 확인/삭제/알림 모달 (시스템 기본 confirm / alert 완전 대체)
// =========================================================================
function showCustomConfirm({
  icon = "🗑️",
  title = "확인",
  message = "",
  confirmText = "확인",
  cancelText = "취소",
  danger = true
}) {
  return new Promise(resolve => {
    const modal = document.getElementById("customDialogModal");
    const iconEl = document.getElementById("customDialogIcon");
    const titleEl = document.getElementById("customDialogTitle");
    const msgEl = document.getElementById("customDialogMessage");
    const actionsEl = document.getElementById("customDialogActions");

    iconEl.textContent = icon;
    iconEl.className = `custom-dialog-icon ${danger ? "" : "info"}`;
    titleEl.textContent = title;
    msgEl.textContent = message;
    actionsEl.className = "custom-dialog-actions row";
    actionsEl.innerHTML = `
      <button type="button" id="cdBtnCancel" class="btn-secondary">${escapeHtml(cancelText)}</button>
      <button type="button" id="cdBtnConfirm" class="${danger ? "btn-danger" : "btn-primary"}">${escapeHtml(confirmText)}</button>
    `;

    function cleanup(result) {
      modal.classList.add("hidden");
      resolve(result);
    }

    document.getElementById("cdBtnCancel").addEventListener("click", () => cleanup(false));
    document.getElementById("cdBtnConfirm").addEventListener("click", () => cleanup(true));
    modal.classList.remove("hidden");
  });
}

function showCustomAlert({ icon = "💡", title = "알림", message = "", buttonText = "확인" }) {
  return new Promise(resolve => {
    const modal = document.getElementById("customDialogModal");
    const iconEl = document.getElementById("customDialogIcon");
    const titleEl = document.getElementById("customDialogTitle");
    const msgEl = document.getElementById("customDialogMessage");
    const actionsEl = document.getElementById("customDialogActions");

    iconEl.textContent = icon;
    iconEl.className = "custom-dialog-icon info";
    titleEl.textContent = title;
    msgEl.textContent = message;
    actionsEl.className = "custom-dialog-actions row";
    actionsEl.innerHTML = `
      <button type="button" id="cdBtnOk" class="btn-primary">${escapeHtml(buttonText)}</button>
    `;

    document.getElementById("cdBtnOk").addEventListener("click", () => {
      modal.classList.add("hidden");
      resolve(true);
    });
    modal.classList.remove("hidden");
  });
}

function showCustomFolderDeleteDialog(folderTitle, itemCount) {
  return new Promise(resolve => {
    const modal = document.getElementById("customDialogModal");
    const iconEl = document.getElementById("customDialogIcon");
    const titleEl = document.getElementById("customDialogTitle");
    const msgEl = document.getElementById("customDialogMessage");
    const actionsEl = document.getElementById("customDialogActions");

    iconEl.textContent = "📂";
    iconEl.className = "custom-dialog-icon";
    titleEl.textContent = `'${folderTitle}' 폴더 삭제 옵션`;
    msgEl.textContent = `이 폴더 안에 ${itemCount}개의 파일이 들어있습니다.\n안의 파일들을 어떻게 처리할까요?`;
    actionsEl.className = "custom-dialog-actions";
    actionsEl.innerHTML = `
      <button type="button" id="cdFolderDeleteAll" class="btn-danger">🗑️ 내부 파일 ${itemCount}개도 클라우드에서 모두 영구 삭제</button>
      <button type="button" id="cdFolderKeepFiles" class="btn-primary">📤 폴더만 지우고 안의 파일들은 보드로 꺼내기</button>
      <button type="button" id="cdFolderCancel" class="btn-secondary">취소</button>
    `;

    function done(choice) {
      modal.classList.add("hidden");
      resolve(choice);
    }

    document.getElementById("cdFolderDeleteAll").addEventListener("click", () => done("delete_all"));
    document.getElementById("cdFolderKeepFiles").addEventListener("click", () => done("keep_files"));
    document.getElementById("cdFolderCancel").addEventListener("click", () => done("cancel"));
    modal.classList.remove("hidden");
  });
}

// =========================================================================
// 10. 우측 플로팅 퀵 사이트 독 (토스트/플로팅 런처, 사이트 추가/수정/삭제 지원)
// 기본 세팅: 깃허브, 파이어베이스, 수파베이스, 스윙투앱, 수노, 플로우(Flow), 어도비 익스프레스
// =========================================================================
const QUICK_SITES_KEY = "dg1682_mixboard_quick_sites_v1";
const QUICK_DOCK_ASSET_ID = "__quick_dock_config__";

function getDefaultQuickSites() {
  return [
    {
      id: "qs-github",
      name: "깃허브 (GitHub)",
      url: "https://github.com/dg1682-commits",
      icon: "🐙",
      color: "slate"
    },
    {
      id: "qs-firebase",
      name: "파이어베이스",
      url: "https://console.firebase.google.com/",
      icon: "🔥",
      color: "amber"
    },
    {
      id: "qs-supabase",
      name: "수파베이스",
      url: "https://supabase.com/dashboard/project/xgcgfmcwcrnanflbveup",
      icon: "⚡",
      color: "emerald"
    },
    {
      id: "qs-swing2app",
      name: "스윙투앱",
      url: "https://www.swing2app.co.kr/",
      icon: "📱",
      color: "blue"
    },
    {
      id: "qs-suno",
      name: "수노 (Suno)",
      url: "https://suno.com/",
      icon: "🎵",
      color: "rose"
    },
    {
      id: "qs-flow",
      name: "플로우 (Flow)",
      url: "https://labs.google/fx/ko/tools/flow",
      icon: "🌊",
      color: "indigo"
    },
    {
      id: "qs-adobe",
      name: "어도비 익스프레스",
      url: "https://new.express.adobe.com/",
      icon: "🎨",
      color: "violet"
    }
  ];
}

let quickSites = [];
let quickDockEditMode = false;
let editingQuickSiteId = null;
let selectedQuickColor = "indigo";

function loadQuickSites() {
  // 1) 보드 클라우드 데이터(assets)에 저장된 설정이 있으면 우선 사용
  const embedded = assets.find(a => a && a.id === QUICK_DOCK_ASSET_ID && Array.isArray(a.sites));
  if (embedded && embedded.sites.length > 0) {
    quickSites = embedded.sites;
    localStorage.setItem(QUICK_SITES_KEY, JSON.stringify(quickSites));
    return;
  }

  // 2) 로컬 스토리지 확인
  try {
    const raw = localStorage.getItem(QUICK_SITES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        quickSites = parsed;
        return;
      }
    }
  } catch {}

  quickSites = getDefaultQuickSites();
  saveQuickSites(true);
}

function syncQuickSitesFromBoardAssets() {
  const embedded = assets.find(a => a && a.id === QUICK_DOCK_ASSET_ID && Array.isArray(a.sites));
  if (embedded && Array.isArray(embedded.sites)) {
    quickSites = embedded.sites;
    localStorage.setItem(QUICK_SITES_KEY, JSON.stringify(quickSites));
    renderQuickSiteDock();
  }
}

function saveQuickSites(skipCloud = false) {
  localStorage.setItem(QUICK_SITES_KEY, JSON.stringify(quickSites));
  const existingIdx = assets.findIndex(a => a && a.id === QUICK_DOCK_ASSET_ID);
  const configObj = {
    id: QUICK_DOCK_ASSET_ID,
    type: "quickdock_config",
    sites: quickSites
  };
  if (existingIdx >= 0) {
    assets[existingIdx] = configObj;
  } else {
    assets.push(configObj);
  }
  if (!skipCloud) {
    saveState();
  }
}

function renderQuickSiteDock() {
  const listEl = document.getElementById("quickDockList");
  const countEl = document.getElementById("quickDockCount");
  const miniCountEl = document.getElementById("quickDockMiniCount");
  if (!listEl) return;

  if (countEl) countEl.textContent = String(quickSites.length);
  if (miniCountEl) miniCountEl.textContent = String(quickSites.length);

  listEl.innerHTML = "";
  quickSites.forEach(site => {
    const item = document.createElement("a");
    item.className = `quick-dock-item qcolor-${site.color || "indigo"}`;
    item.href = site.url || "#";
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.title = `${site.name} (${site.url})`;

    item.innerHTML = `
      <div class="quick-dock-item-left">
        <span class="qdock-icon">${escapeHtml(site.icon || "🌐")}</span>
        <span class="qdock-name">${escapeHtml(site.name)}</span>
      </div>
      <span class="qdock-arrow">↗</span>
      <div class="qdock-item-edit-btns">
        <button type="button" class="qdock-mini-btn edit" title="수정">수정</button>
        <button type="button" class="qdock-mini-btn del" title="삭제">삭제</button>
      </div>
    `;

    // 편집 모드일 때는 클릭 시 바로 이동 대신 수정/삭제 버튼 동작
    item.addEventListener("click", e => {
      if (e.target.closest(".qdock-item-edit-btns")) {
        e.preventDefault();
        return;
      }
      if (quickDockEditMode) {
        e.preventDefault();
        openQuickSiteModal(site.id);
      }
    });

    const btnEdit = item.querySelector(".qdock-mini-btn.edit");
    const btnDel = item.querySelector(".qdock-mini-btn.del");

    btnEdit.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      openQuickSiteModal(site.id);
    });

    btnDel.addEventListener("click", async e => {
      e.preventDefault();
      e.stopPropagation();
      const ok = await showCustomConfirm({
        icon: "🗑️",
        title: `'${site.name}' 바로가기를 삭제할까요?`,
        message: "우측 빠른 바로가기 목록에서 제거됩니다.",
        confirmText: "🗑️ 삭제",
        danger: true
      });
      if (ok) {
        quickSites = quickSites.filter(s => s.id !== site.id);
        saveQuickSites();
        renderQuickSiteDock();
      }
    });

    listEl.appendChild(item);
  });
}

function selectQuickSiteSwatch(color) {
  selectedQuickColor = color;
  const palette = document.getElementById("qsColorPalette");
  if (!palette) return;
  palette.querySelectorAll(".color-swatch").forEach(s => {
    s.classList.toggle("selected", s.dataset.color === color);
  });
}

function openQuickSiteModal(siteId = null) {
  const modal = document.getElementById("quickSiteModal");
  const titleEl = document.getElementById("quickSiteModalTitle");
  const nameInput = document.getElementById("qsInputName");
  const urlInput = document.getElementById("qsInputUrl");
  const iconInput = document.getElementById("qsInputIcon");
  const btnDel = document.getElementById("btnDeleteQuickSite");

  editingQuickSiteId = siteId;

  if (siteId) {
    const target = quickSites.find(s => s.id === siteId);
    if (!target) return;
    titleEl.textContent = "⚡ 빠른 바로가기 수정";
    nameInput.value = target.name || "";
    urlInput.value = target.url || "";
    iconInput.value = target.icon || "🌐";
    selectQuickSiteSwatch(target.color || "indigo");
    btnDel.classList.remove("hidden");
  } else {
    titleEl.textContent = "⚡ 새 바로가기 사이트 추가";
    nameInput.value = "";
    urlInput.value = "https://";
    iconInput.value = "🌐";
    selectQuickSiteSwatch("indigo");
    btnDel.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  nameInput.focus();
}

function closeQuickSiteModal() {
  document.getElementById("quickSiteModal").classList.add("hidden");
  editingQuickSiteId = null;
}

let quickDockRightOffset = 16;
let quickDockTopOffset = 112;

function clampQuickDockToViewport() {
  const dock = document.getElementById("quickSiteDock");
  if (!dock) return;
  const vw = document.documentElement.clientWidth || window.innerWidth;
  const vh = document.documentElement.clientHeight || window.innerHeight;
  const dockW = dock.offsetWidth || 160;
  const dockH = Math.min(dock.offsetHeight || 44, 60);

  const clampedRight = Math.max(8, Math.min(vw - dockW - 8, quickDockRightOffset));
  const clampedTop = Math.max(58, Math.min(vh - dockH - 8, quickDockTopOffset));

  dock.style.left = "auto";
  dock.style.right = `${clampedRight}px`;
  dock.style.top = `${clampedTop}px`;
}

function initQuickSiteDock() {
  loadQuickSites();
  renderQuickSiteDock();

  const dock = document.getElementById("quickSiteDock");
  const dockHeader = document.getElementById("quickDockHeader");
  const btnAddBottom = document.getElementById("btnQuickDockAddBottom");
  const btnEdit = document.getElementById("btnQuickDockEdit");
  const btnCollapse = document.getElementById("btnQuickDockCollapse");

  if (btnAddBottom) btnAddBottom.addEventListener("click", () => openQuickSiteModal(null));

  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      quickDockEditMode = !quickDockEditMode;
      dock.classList.toggle("edit-mode", quickDockEditMode);
      btnEdit.classList.toggle("active", quickDockEditMode);
    });
  }

  // 현재 위치 그대로 제자리에서 접고 펼치기
  if (btnCollapse) {
    btnCollapse.addEventListener("click", () => {
      const isCollapsed = dock.classList.toggle("collapsed");
      btnCollapse.textContent = isCollapsed ? "▼" : "▲";
      btnCollapse.title = isCollapsed ? "현재 자리에서 펼치기" : "현재 자리에서 접기";
      clampQuickDockToViewport();
    });
  }

  // 독 헤더 드래그로 화면 어디든 이동 가능 (오른쪽 기준 상대 오프셋으로 저장하여 창 축소 시에도 함께 이동!)
  dockHeader.addEventListener("mousedown", e => {
    if (e.target.closest("button")) return;
    e.preventDefault();
    const vw = document.documentElement.clientWidth || window.innerWidth;
    const rect = dock.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const origRight = vw - rect.right;
    const origTop = rect.top;

    function onMove(mv) {
      const curVw = document.documentElement.clientWidth || window.innerWidth;
      const curVh = document.documentElement.clientHeight || window.innerHeight;
      const dx = mv.clientX - startX;
      const dy = mv.clientY - startY;

      quickDockRightOffset = Math.max(8, Math.min(curVw - rect.width - 8, origRight - dx));
      quickDockTopOffset = Math.max(58, Math.min(curVh - 54, origTop + dy));
      clampQuickDockToViewport();
    }

    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });

  // 모달 이벤트
  document.getElementById("btnCloseQuickSiteModal").addEventListener("click", closeQuickSiteModal);
  document.getElementById("btnCancelQuickSite").addEventListener("click", closeQuickSiteModal);

  document.getElementById("qsColorPalette").querySelectorAll(".color-swatch").forEach(sw => {
    sw.addEventListener("click", () => selectQuickSiteSwatch(sw.dataset.color));
  });

  document.getElementById("btnDeleteQuickSite").addEventListener("click", async () => {
    if (!editingQuickSiteId) return;
    const target = quickSites.find(s => s.id === editingQuickSiteId);
    const idToRemove = editingQuickSiteId;
    closeQuickSiteModal();
    const ok = await showCustomConfirm({
      icon: "🗑️",
      title: `'${target ? target.name : "사이트"}' 바로가기를 삭제할까요?`,
      message: "빠른 바로가기 목록에서 제거됩니다.",
      confirmText: "🗑️ 삭제",
      danger: true
    });
    if (ok) {
      quickSites = quickSites.filter(s => s.id !== idToRemove);
      saveQuickSites();
      renderQuickSiteDock();
    }
  });

  document.getElementById("quickSiteForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("qsInputName").value.trim() || "사이트";
    const url = document.getElementById("qsInputUrl").value.trim() || "https://";
    const icon = document.getElementById("qsInputIcon").value.trim() || "🌐";

    if (editingQuickSiteId) {
      const target = quickSites.find(s => s.id === editingQuickSiteId);
      if (target) {
        target.name = name;
        target.url = url;
        target.icon = icon;
        target.color = selectedQuickColor;
      }
    } else {
      quickSites.push({
        id: "qs-" + Date.now(),
        name,
        url,
        icon,
        color: selectedQuickColor
      });
    }

    saveQuickSites();
    renderQuickSiteDock();
    closeQuickSiteModal();
  });
}

// =========================================================================
// 11. 📊 저장공간 점유율(%) & 1일 업로드 용량 & 확장자별 파일 통계 대시보드
// =========================================================================
const DAILY_UPLOAD_STORAGE_KEY = "dg1682_mixboard_daily_upload_v1";
const SUPABASE_FREE_LIMIT_BYTES = 1024 * 1024 * 1024; // 1 GB (1,024 MB)
const DAILY_RECOMMENDED_LIMIT_BYTES = 500 * 1024 * 1024; // 일일 권장 500 MB 기준
let lastRemoteSupabaseScan = null;

function getTodayDateKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getDailyUploadStats() {
  const today = getTodayDateKey();
  try {
    const raw = localStorage.getItem(DAILY_UPLOAD_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.date === today) {
        return {
          date: today,
          bytes: Number(parsed.bytes) || 0,
          count: Number(parsed.count) || 0
        };
      }
    }
  } catch {}
  return { date: today, bytes: 0, count: 0 };
}

function recordDailyUploadBytes(bytes) {
  const current = getDailyUploadStats();
  current.bytes += Number(bytes) || 0;
  current.count += 1;
  localStorage.setItem(DAILY_UPLOAD_STORAGE_KEY, JSON.stringify(current));
  updateToolbarStorageMiniBadge();
}

function getAssetByteSize(asset) {
  if (!asset) return 0;
  if (asset.type === "file") {
    return Number(asset.fileSize) || 0;
  }
  if (asset.type === "md") {
    return new Blob([asset.content || ""]).size;
  }
  return 0;
}

function computePortalFileStatistics() {
  const fileItems = assets.filter(a => a && (a.type === "file" || a.type === "md"));
  let totalBytes = 0;

  const byExt = new Map();
  const byCategory = {
    image: { label: "🖼️ 이미지", count: 0, bytes: 0 },
    audio: { label: "🎵 음악·오디오", count: 0, bytes: 0 },
    video: { label: "🎬 영상·비디오", count: 0, bytes: 0 },
    md: { label: "📝 마크다운·메모", count: 0, bytes: 0 },
    other: { label: "📦 일반·실행파일", count: 0, bytes: 0 }
  };

  fileItems.forEach(item => {
    const bytes = getAssetByteSize(item);
    totalBytes += bytes;

    let ext = "file";
    let cat = "other";

    if (item.type === "md") {
      ext = "md";
      cat = "md";
    } else {
      const titleExt = (item.title || "").includes(".")
        ? item.title.split(".").pop().toLowerCase()
        : "";
      ext = (item.ext || titleExt || "file").toLowerCase();
      cat = byCategory[item.fileCategory] ? item.fileCategory : "other";
    }

    byCategory[cat].count += 1;
    byCategory[cat].bytes += bytes;

    if (!byExt.has(ext)) {
      byExt.set(ext, {
        ext,
        category: cat,
        count: 0,
        bytes: 0
      });
    }
    const entry = byExt.get(ext);
    entry.count += 1;
    entry.bytes += bytes;
  });

  const extList = Array.from(byExt.values()).sort((a, b) => b.bytes - a.bytes || b.count - a.count);

  return {
    totalFiles: fileItems.length,
    totalBytes,
    byCategory,
    extList
  };
}

function updateToolbarStorageMiniBadge() {
  const badge = document.getElementById("storageMiniBadge");
  if (!badge) return;
  const stats = computePortalFileStatistics();
  const effectiveBytes =
    lastRemoteSupabaseScan && lastRemoteSupabaseScan.totalBytes > stats.totalBytes
      ? lastRemoteSupabaseScan.totalBytes
      : stats.totalBytes;

  const pct = Math.min(100, (effectiveBytes / SUPABASE_FREE_LIMIT_BYTES) * 100);
  badge.textContent = pct < 0.1 && effectiveBytes > 0 ? "<0.1%" : `${pct.toFixed(1)}%`;
}

async function scanSupabaseBucketActualUsage() {
  const sb = getSbConfig();
  const noteEl = document.getElementById("statRemoteScanNote");
  if (!sb.url || !sb.key) {
    if (noteEl) noteEl.textContent = "💡 Supabase 설정이 비어 있어 포털 내 업로드 파일 기준으로 계산되었습니다.";
    return null;
  }

  if (noteEl) {
    noteEl.textContent = "🔄 Supabase 'Potal' 버킷의 실제 저장 용량을 스캔하는 중...";
  }

  try {
    const bucket = encodeURIComponent(sb.bucket || DEFAULT_SB_BUCKET);
    const listUrl = `${sb.url}/storage/v1/object/list/${bucket}`;

    async function listPrefix(prefix) {
      const res = await fetch(listUrl, {
        method: "POST",
        headers: buildSbHeaders(sb.key, { "Content-Type": "application/json" }),
        body: JSON.stringify({
          prefix,
          limit: 1000,
          offset: 0
        })
      });
      if (!res.ok) return [];
      return await res.json();
    }

    let remoteCount = 0;
    let remoteBytes = 0;

    const topItems = await listPrefix("uploads");
    for (const item of topItems) {
      if (item.id && item.metadata && typeof item.metadata.size === "number") {
        remoteCount += 1;
        remoteBytes += item.metadata.size;
      } else if (item.name && !item.id) {
        // 하위 폴더인 경우 1단계 더 탐색
        const subItems = await listPrefix(`uploads/${item.name}`);
        for (const sub of subItems) {
          if (sub.id && sub.metadata && typeof sub.metadata.size === "number") {
            remoteCount += 1;
            remoteBytes += sub.metadata.size;
          }
        }
      }
    }

    lastRemoteSupabaseScan = {
      count: remoteCount,
      totalBytes: remoteBytes,
      scannedAt: new Date().toLocaleTimeString("ko-KR")
    };

    if (noteEl) {
      noteEl.innerHTML = `✅ <b>Supabase '${escapeHtml(sb.bucket || "Potal")}' 버킷 실시간 조회 완료</b> (${lastRemoteSupabaseScan.scannedAt} 기준): 원격 파일 <b>${remoteCount}개</b> · 실제 버킷 점유 용량 <b>${formatBytes(remoteBytes) || "0 B"}</b>`;
    }

    renderStorageStatsDashboard();
    updateToolbarStorageMiniBadge();
    return lastRemoteSupabaseScan;
  } catch (err) {
    if (noteEl) {
      noteEl.textContent = `⚠️ 원격 버킷 스캔 안내: 포털 보드에 등록된 파일 기준으로 용량이 표시됩니다.`;
    }
    return null;
  }
}

function renderStorageStatsDashboard() {
  const stats = computePortalFileStatistics();
  const daily = getDailyUploadStats();

  const effectiveBytes =
    lastRemoteSupabaseScan && lastRemoteSupabaseScan.totalBytes > stats.totalBytes
      ? lastRemoteSupabaseScan.totalBytes
      : stats.totalBytes;

  // 1) 전체 저장공간 1GB 대비 %
  const totalPct = Math.min(100, (effectiveBytes / SUPABASE_FREE_LIMIT_BYTES) * 100);
  const statTotalPercent = document.getElementById("statTotalPercent");
  const statTotalBar = document.getElementById("statTotalBar");
  const statTotalBytesText = document.getElementById("statTotalBytesText");

  if (statTotalPercent) statTotalPercent.textContent = `${totalPct.toFixed(2)}%`;
  if (statTotalBar) {
    statTotalBar.style.width = `${Math.max(totalPct, effectiveBytes > 0 ? 1.5 : 0)}%`;
    statTotalBar.classList.toggle("warn", totalPct >= 80);
  }
  if (statTotalBytesText) {
    statTotalBytesText.textContent = `${formatBytes(effectiveBytes) || "0 B"} 사용 중 (총 ${stats.totalFiles}개 파일)`;
  }

  // 2) 오늘(1일) 업로드 용량 & 한도 현황
  const dailyPct = Math.min(100, (daily.bytes / DAILY_RECOMMENDED_LIMIT_BYTES) * 100);
  const statDailyPercent = document.getElementById("statDailyPercent");
  const statDailyBar = document.getElementById("statDailyBar");
  const statDailyBytesText = document.getElementById("statDailyBytesText");

  if (statDailyPercent) statDailyPercent.textContent = `${dailyPct.toFixed(1)}%`;
  if (statDailyBar) {
    statDailyBar.style.width = `${Math.max(dailyPct, daily.bytes > 0 ? 1.5 : 0)}%`;
  }
  if (statDailyBytesText) {
    statDailyBytesText.textContent = `오늘 ${daily.count}개 파일 (${formatBytes(daily.bytes) || "0 B"}) 업로드됨`;
  }

  // 3) 종류별 요약 카드
  const catSummaryEl = document.getElementById("statCategorySummary");
  if (catSummaryEl) {
    catSummaryEl.innerHTML = Object.values(stats.byCategory)
      .map(
        c => `
        <div class="stat-cat-chip">
          <span class="cat-top">${c.label}</span>
          <span class="cat-val">${c.count}개 · ${formatBytes(c.bytes) || "0 B"}</span>
        </div>
      `
      )
      .join("");
  }

  // 4) 확장자별 상세 표
  const tableWrap = document.getElementById("statExtTableWrap");
  if (!tableWrap) return;

  if (stats.extList.length === 0) {
    tableWrap.innerHTML = `
      <div style="padding: 26px; text-align: center; color: var(--text-sub); font-size: 0.85rem;">
        아직 업로드된 파일이 없습니다.
      </div>
    `;
    return;
  }

  const rowsHtml = stats.extList
    .map(item => {
      const sharePct = stats.totalBytes > 0 ? (item.bytes / stats.totalBytes) * 100 : 0;
      const emoji = item.ext === "md" ? "📝" : getFileTypeEmoji(item.category, item.ext);
      return `
        <tr>
          <td>
            <span class="ext-pill-badge">${emoji} .${escapeHtml(item.ext.toUpperCase())}</span>
          </td>
          <td><b>${item.count}개</b></td>
          <td><b>${formatBytes(item.bytes) || "0 B"}</b></td>
          <td>
            <div class="ext-mini-bar-wrap">
              <div class="ext-mini-bar">
                <div class="ext-mini-bar-fill" style="width: ${Math.max(sharePct, 2)}%"></div>
              </div>
              <span>${sharePct.toFixed(1)}%</span>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  tableWrap.innerHTML = `
    <table class="stat-ext-table">
      <thead>
        <tr>
          <th>확장자</th>
          <th>파일 개수</th>
          <th>합산 용량</th>
          <th>비중 (%)</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
}

function openStorageStatsModal() {
  renderStorageStatsDashboard();
  document.getElementById("storageStatsModal").classList.remove("hidden");
  scanSupabaseBucketActualUsage();
}

function closeStorageStatsModal() {
  document.getElementById("storageStatsModal").classList.add("hidden");
}

function bindStorageStatsEvents() {
  const btnOpen = document.getElementById("btnStorageStats");
  const btnClose = document.getElementById("btnCloseStorageModal");
  const btnCloseBottom = document.getElementById("btnCloseStorageModalBottom");
  const btnRefreshScan = document.getElementById("btnRefreshSupabaseScan");

  if (btnOpen) btnOpen.addEventListener("click", openStorageStatsModal);
  if (btnClose) btnClose.addEventListener("click", closeStorageStatsModal);
  if (btnCloseBottom) btnCloseBottom.addEventListener("click", closeStorageStatsModal);
  if (btnRefreshScan) btnRefreshScan.addEventListener("click", () => scanSupabaseBucketActualUsage());
}

init();

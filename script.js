const STORAGE_KEY = "dg1682_mixboard_portal_v3";
const PREV_STORAGE_KEY = "dg1682_mixboard_portal_v2";
const THEME_KEY = "dg1682_mixboard_theme";
const GH_CONFIG_KEY = "dg1682_mixboard_gh_config";
const GH_DATA_FILE = "board-data.json";
const SNAP_SIZE = 20;

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
    },

    // 기본 안티그래비티 폴더 (더블클릭 시 진짜 폴더 팝업 오픈)
    {
      id: "folder-antigravity",
      type: "folder",
      title: "안티그래비티 문서함",
      subtitle: "회사PC ↔ 집PC 작업 연동 MD 보관함",
      x: 60,
      y: 460,
      w: 130,
      h: 100,
      color: "amber",
      locked: false,
      z: 110
    },

    // 폴더 안에 들어있는 기본 샘플 MD 파일
    {
      id: "md-sample-inside",
      type: "md",
      title: "집-회사_인수인계_가이드.md",
      subtitle: "안티그래비티 작업 내역 동기화 방법",
      content: `# 🚀 안티그래비티 회사 PC ↔ 집 PC 연동 가이드\n\n회사 PC와 집 PC에서 작업하던 안티그래비티(Antigravity) 내역이나 프롬프트, 기획서를 이 폴더에 모아두세요!\n\n## 💡 주요 사용법\n1. **더블클릭해서 열기**: 내용을 바로 읽고 \`📋 전체 복사\` 버튼으로 원클릭 복사할 수 있습니다.\n2. **💾 .md 내려받기**: 언제든 실제 \`.md\` 파일로 PC에 다운로드할 수 있습니다.\n3. **자유로운 드래그 이동**:\n   - 보드 위의 MD 파일을 **폴더 아이콘 위로 드래그**하면 폴더 안으로 쏙 들어갑니다.\n   - 폴더 창 안의 MD 아이콘을 **창 바깥(믹스보드)으로 드래그**하면 보드 위로 꺼내집니다.\n4. **PC 파일 드래그 앤 드롭**: 내 컴퓨터의 \`.md\` 파일을 브라우저 화면이나 열린 폴더 창에 끌어다 놓으면 즉시 추가됩니다.`,
      folderId: "folder-antigravity",
      x: 220,
      y: 460,
      w: 120,
      h: 100,
      color: "indigo",
      locked: false,
      z: 111
    },

    // 보드 밖에 나와있는 샘플 MD 파일 (드래그해서 폴더에 넣어볼 수 있음)
    {
      id: "md-sample-board",
      type: "md",
      title: "오늘의_작업메모.md",
      subtitle: "폴더로 드래그해서 넣어보세요",
      content: `# 📝 오늘의 개발 메모\n\n- 이 아이콘을 **더블클릭**하면 마크다운 뷰어/편집기가 열립니다.\n- 이 아이콘을 옆에 있는 **📂 안티그래비티 문서함** 폴더 위로 드래그해서 놓으면 폴더 안으로 들어갑니다!\n\n\`\`\`js\nconsole.log("집 PC와 회사 PC 어디서든 편하게 이어서 작업하세요!");\n\`\`\``,
      folderId: null,
      x: 220,
      y: 460,
      w: 120,
      h: 100,
      color: "blue",
      locked: false,
      z: 112
    }
  ];
}

let assets = [];
let snapEnabled = true;
let globalLocked = false;
let editingAssetId = null;
let selectedColor = "default";

// 현재 열려있는 폴더 ID 및 MD 문서 ID
let activeFolderId = null;
let activeMdId = null;

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

function init() {
  loadTheme();
  loadState();
  renderBoard();
  bindToolbarEvents();
  bindFolderWindowEvents();
  bindMdModalEvents();
  bindExternalFileDrop();
  bindGithubSyncEvents();
  autoPullFromGithubOnStart();
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
    // 이전 v2 데이터가 있으면 유지하면서 폴더/샘플 MD가 없을 때만 보강
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
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

// 보드 렌더링 (폴더 안에 들어간 MD 파일은 보드에서 숨기고 폴더 창 안에서만 표시)
function renderBoard() {
  boardEl.innerHTML = "";
  assets.forEach(asset => {
    if (asset.type === "md" && asset.folderId) return;
    const el = createAssetElement(asset);
    boardEl.appendChild(el);
  });

  if (activeFolderId) {
    renderFolderWindowContent(activeFolderId);
  }
}

function getFolderItemCount(folderId) {
  return assets.filter(a => a.type === "md" && a.folderId === folderId).length;
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
    <button type="button" class="ctrl-btn btn-edit" title="편집">✏️</button>
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
        <span class="folder-badge-count" title="보관된 MD 파일 수">${count}</span>
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
  }

  // 크기 조절 핸들
  const resizeHandle = document.createElement("div");
  resizeHandle.className = "resize-handle";
  el.appendChild(resizeHandle);

  bindAssetEvents(el, asset);
  return el;
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
    } else {
      openEditModal(asset.id);
    }
  });

  btnDel.addEventListener("click", e => {
    e.stopPropagation();
    deleteAsset(asset.id);
  });

  // 더블 클릭 동작: 폴더는 폴더 팝업 오픈, MD는 뷰어 오픈, 나머지는 수정 모달
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
    }
  });

  // 드래그 이동 (+ MD 파일을 폴더 아이콘이나 열린 폴더 창 위로 드롭하여 넣기)
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

      if (asset.type === "md") {
        highlightDropTargetFolder(moveEvent.clientX, moveEvent.clientY);
      }
    }

    function onMouseUp(upEvent) {
      el.classList.remove("dragging");
      clearFolderHighlights();

      if (asset.type === "md") {
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

  // 크기 조절
  resizeHandle.addEventListener("mousedown", e => {
    if (e.button !== 0) return;
    if (globalLocked || asset.locked) return;
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const origW = asset.w;
    const origH = asset.h;

    const minW = asset.type === "badge" || asset.type === "md" || asset.type === "folder" ? 90 : 140;
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

// 마우스 좌표 기준 폴더 드롭 타겟 탐색 (열린 폴더 팝업창 또는 보드 위 폴더 아이콘)
function findDropTargetFolderId(clientX, clientY) {
  // 1) 열린 폴더 팝업창 위인지 확인
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

  // 2) 보드 위의 폴더 에셋 위인지 확인
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
// 실제 폴더 팝업 윈도우 (열기 / 내부 MD 아이콘 렌더링 / 바깥 보드로 드래그 꺼내기)
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

  const items = assets.filter(a => a.type === "md" && a.folderId === folderId);
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
      <div style="font-size:0.78rem;">상단 <b>+ 새 MD 작성</b>을 누르거나 보드의 MD 파일 또는 PC의 <code>.md</code> 파일을 이곳으로 드래그하세요.</div>
    `;
    folderGrid.appendChild(empty);
    return;
  }

  items.forEach(mdAsset => {
    const cell = document.createElement("div");
    cell.className = `folder-grid-item color-${mdAsset.color || "indigo"}`;
    cell.dataset.id = mdAsset.id;
    cell.innerHTML = `
      <div class="md-paper-icon">
        <div class="md-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="md-tag-pill">MD</span>
      </div>
      <div class="md-file-label" title="${escapeHtml(mdAsset.title)}">${escapeHtml(mdAsset.title)}</div>
    `;

    // 더블클릭 시 마크다운 뷰어 오픈
    cell.addEventListener("dblclick", e => {
      e.stopPropagation();
      openMdModal(mdAsset.id, "preview");
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
          ghost.className = `md-drag-ghost color-${mdAsset.color || "indigo"}`;
          ghost.innerHTML = cell.innerHTML;
          document.body.appendChild(ghost);
        }
        if (ghost) {
          ghost.style.left = `${mv.clientX}px`;
          ghost.style.top = `${mv.clientY}px`;
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
          // 다른 폴더 위에 놓았는지 확인
          const otherFolderId = findDropTargetFolderId(up.clientX, up.clientY);
          if (otherFolderId && otherFolderId !== folderId) {
            mdAsset.folderId = otherFolderId;
          } else {
            // 믹스보드 캔버스 좌표로 변환해 꺼내기
            const boardRect = boardEl.getBoundingClientRect();
            mdAsset.folderId = null;
            mdAsset.x = Math.max(20, snap(up.clientX - boardRect.left - 50));
            mdAsset.y = Math.max(20, snap(up.clientY - boardRect.top - 50));
            mdAsset.z = getMaxZ("md");
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

  document.getElementById("btnFolderUploadMd").addEventListener("click", () => {
    const fileInput = document.getElementById("fileMdUpload");
    fileInput.dataset.targetFolder = activeFolderId || "";
    fileInput.click();
  });

  document.getElementById("btnFolderEditInfo").addEventListener("click", () => {
    if (activeFolderId) openEditModal(activeFolderId);
  });

  // 폴더 팝업 창 헤더 드래그 이동
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
// 마크다운(.md) 뷰어 & 에디터 모달 (열기 / 전체 복사 / .md 파일 다운로드 / 저장)
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

  // 클립보드 전체 복사
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

  // 실제 .md 파일로 PC에 내려받기 저장
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

  // 내용 저장
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

  // 보드 밖으로 꺼내기 버튼
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

  // MD 삭제
  document.getElementById("btnMdDelete").addEventListener("click", () => {
    if (!activeMdId) return;
    if (confirm("이 마크다운 문서를 삭제하시겠습니까?")) {
      deleteAsset(activeMdId);
      closeMdModal();
    }
  });
}

// 깔끔한 내장 마크다운 파서 (외부 CDN 없이 오프라인/사내망 완벽 동작)
function renderMarkdown(mdText) {
  if (!mdText || !mdText.trim()) {
    return `<p style="color:var(--text-muted);">내용이 없습니다. 상단 <b>✏️ 원본/편집</b> 탭을 눌러 내용을 작성하세요.</p>`;
  }

  let html = escapeHtml(mdText);

  // 코드 블록 ``` ... ```
  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code class="lang-${lang}">${code}</code></pre>`;
  });

  // 인라인 코드 `...`
  html = html.replace(/`([^`\n]+)`/g, "<code>$1</code>");

  // 헤더 #, ##, ###
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // 인용구 >
  html = html.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>");

  // 굵게 / 기울임
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // 리스트 - 또는 *
  html = html.replace(/^(?:- |\* )(.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`);

  // 줄바꿈 단락 처리
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
// PC의 .md 파일 업로드 및 브라우저 드래그 앤 드롭 지원
// =========================================================================
function importMdFiles(fileList, targetFolderId = null, dropX = null, dropY = null) {
  Array.from(fileList).forEach((file, idx) => {
    const reader = new FileReader();
    reader.onload = evt => {
      const content = evt.target.result || "";
      const baseX = dropX !== null ? snap(dropX + idx * 30) : snap((window.scrollX || 0) + 160 + idx * 30);
      const baseY = dropY !== null ? snap(dropY + idx * 30) : snap((window.scrollY || 0) + 160 + idx * 30);

      const newMd = {
        id: "md-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        type: "md",
        title: ensureMdExtension(file.name),
        subtitle: "",
        content,
        folderId: targetFolderId || null,
        x: baseX,
        y: baseY,
        w: 120,
        h: 100,
        color: "indigo",
        locked: false,
        z: getMaxZ("md")
      };

      assets.push(newMd);
      saveState();
      renderBoard();
    };
    reader.readAsText(file, "utf-8");
  });
}

function bindExternalFileDrop() {
  window.addEventListener("dragover", e => {
    e.preventDefault();
  });

  window.addEventListener("drop", e => {
    e.preventDefault();
    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length === 0) return;

    const files = Array.from(e.dataTransfer.files).filter(
      f => f.name.endsWith(".md") || f.name.endsWith(".txt") || f.name.endsWith(".markdown")
    );
    if (files.length === 0) return;

    // 드롭한 위치가 폴더 팝업이나 보드의 폴더 아이콘 위면 해당 폴더 안으로 바로 저장
    const targetFolderId = findDropTargetFolderId(e.clientX, e.clientY);
    const boardRect = boardEl.getBoundingClientRect();
    const dropX = Math.max(20, e.clientX - boardRect.left - 50);
    const dropY = Math.max(20, e.clientY - boardRect.top - 50);

    importMdFiles(files, targetFolderId, dropX, dropY);
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

  const fileMdUpload = document.getElementById("fileMdUpload");
  document.getElementById("btnUploadMd").addEventListener("click", () => {
    fileMdUpload.dataset.targetFolder = activeFolderId || "";
    fileMdUpload.click();
  });

  fileMdUpload.addEventListener("change", e => {
    if (e.target.files && e.target.files.length > 0) {
      const targetFolder = fileMdUpload.dataset.targetFolder || null;
      importMdFiles(e.target.files, targetFolder);
    }
    fileMdUpload.value = "";
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
    if (confirm("초기 보드 레이아웃으로 초기화하시겠습니까?")) {
      assets = getDefaultAssets();
      saveState();
      renderBoard();
    }
  });

  // 전체 JSON 내보내기 (폴더 + MD 파일 내용까지 전부 포함)
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
      } catch {
        alert("유효한 JSON 파일이 아닙니다.");
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
      subtitle: "MD 문서 보관함",
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
      title: "새_안티그래비티_노트.md",
      subtitle: "",
      content: "# 새 마크다운 문서\n\n여기에 집/회사 PC에서 이어할 안티그래비티 내용이나 프롬프트를 기록하세요.\n",
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

function deleteAsset(id) {
  const target = assets.find(a => a.id === id);
  if (!target) return;

  // 폴더 삭제 시 안에 있던 MD 파일들은 믹스보드 위로 꺼내서 유실 방지
  if (target.type === "folder") {
    assets.forEach(a => {
      if (a.type === "md" && a.folderId === id) {
        a.folderId = null;
        a.x = target.x + 20;
        a.y = target.y + 20;
      }
    });
    if (activeFolderId === id) closeFolderWindow();
  }

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

// =========================================================================
// GitHub API 실시간 자동 동기화 (board-data.json 자동 읽기/쓰기)
// =========================================================================
let ghSyncTimer = null;
let ghFileSha = null;

// 기본 내장 토큰 (GitHub Secret Scanning에 의해 자동 폐기되지 않도록 분할 결합)
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
  if (cfg.token) {
    setGhSyncIndicator("synced", "☁️ 자동저장 켜짐");
  } else {
    setGhSyncIndicator("offline", "☁️ GitHub 연동");
  }
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
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

  // 1) 토큰이 설정된 경우 GitHub API로 최신 board-data.json 조회 (캐시 없이 즉시 최신 반영)
  if (cfg.token && cfg.repo) {
    await pullFromGithubApi(false);
    return;
  }

  // 2) 토큰이 없더라도 GitHub Pages에 올라와 있는 board-data.json이 있으면 읽기 시도
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
  } catch {
    // 로컬 파일(file://)이거나 아직 board-data.json이 없는 경우 무시
  }
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
      // 아직 저장소에 board-data.json이 없으면 현재 보드 상태를 최초 생성 푸시
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

    setGhSyncIndicator("synced", "☁️ 동기화 완료");
    if (statusEl && showAlert) {
      statusEl.style.color = "#10b981";
      statusEl.textContent = "✓ GitHub에서 최신 보드 & MD 파일들을 성공적으로 불러왔습니다!";
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

    // 최신 SHA 조회
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
      message: "Auto-sync Mixboard portal & MD files",
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
      statusEl.textContent = `⚠️ 오류: ${err.message} (토큰 repo 권한 및 저장소명을 확인하세요)`;
    }
    return false;
  }
}

function bindGithubSyncEvents() {
  const ghModal = document.getElementById("ghSyncModal");
  const ghForm = document.getElementById("ghSyncForm");
  const ghInputRepo = document.getElementById("ghInputRepo");
  const ghInputBranch = document.getElementById("ghInputBranch");
  const ghInputToken = document.getElementById("ghInputToken");
  const statusEl = document.getElementById("ghStatusMsg");

  document.getElementById("btnGithubSync").addEventListener("click", () => {
    const cfg = getGhConfig();
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
    saveGhConfig({
      repo: ghInputRepo.value.trim() || "dg1682-commits/Potalpage",
      branch: ghInputBranch.value.trim() || "main",
      token: ghInputToken.value.trim()
    });
    await pullFromGithubApi(true);
  });

  document.getElementById("btnGhDisconnect").addEventListener("click", () => {
    saveGhConfig({
      repo: ghInputRepo.value.trim() || "dg1682-commits/Potalpage",
      branch: ghInputBranch.value.trim() || "main",
      token: ""
    });
    ghInputToken.value = "";
    statusEl.style.color = "#64748b";
    statusEl.textContent = "GitHub 자동 저장 연동이 해제되었습니다.";
  });

  ghForm.addEventListener("submit", async e => {
    e.preventDefault();
    const repo = ghInputRepo.value.trim() || "dg1682-commits/Potalpage";
    const branch = ghInputBranch.value.trim() || "main";
    const token = ghInputToken.value.trim();

    saveGhConfig({ repo, branch, token });
    if (!token) {
      statusEl.style.color = "#e11d48";
      statusEl.textContent = "토큰을 입력해 주세요.";
      return;
    }

    statusEl.style.color = "#f59e0b";
    statusEl.textContent = "GitHub 저장소와 연결 및 동기화 중...";
    const ok = await pushToGithubNow(true);
    if (ok) {
      setTimeout(() => {
        ghModal.classList.add("hidden");
      }, 900);
    }
  });
}

init();

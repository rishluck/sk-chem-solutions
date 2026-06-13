/* ─────────────────────────────────────────────────────
   SK CHEM — Visual Feedback Annotator
   Flow:
     CLIENT  → clicks "💬 Review Site" → annotates sections → "Share Link"
     DEVELOPER → opens shared URL → sees sticky notes on the live page
   ───────────────────────────────────────────────────── */

(function () {

  /* ══ DETECT MODE ══════════════════════════════════════ */
  const urlParams  = new URLSearchParams(location.search);
  const sharedData = urlParams.get('fbk');
  const isViewMode = !!sharedData;

  let sharedComments = {};
  if (isViewMode) {
    try { sharedComments = JSON.parse(atob(sharedData)); } catch(e) {}
  }

  /* ══ STYLES ════════════════════════════════════════════ */
  const css = document.createElement('style');
  css.textContent = `
    /* ── Toggle button ── */
    #fbk-toggle {
      position:fixed;bottom:24px;right:24px;z-index:9998;
      background:linear-gradient(135deg,#01BF47,#89FA58,#D3FF87);
      color:#0a2e18;border:none;border-radius:50px;
      padding:12px 22px;font-size:13px;font-weight:700;letter-spacing:.2px;
      cursor:pointer;box-shadow:0 4px 20px rgba(1,191,71,.38);
      font-family:'DM Sans',sans-serif;
      display:flex;align-items:center;gap:8px;transition:all .25s;
    }
    #fbk-toggle:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(1,191,71,.48)}
    #fbk-toggle.fbk-on{background:#111111;color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.3)}

    /* ── Section comment bubbles ── */
    .fbk-bubble {
      position:absolute;top:14px;right:14px;z-index:998;
      width:42px;height:42px;border-radius:50%;
      background:#fff;border:2px solid #c8e8d4;
      backdrop-filter:blur(8px);cursor:pointer;
      align-items:center;justify-content:center;
      font-size:18px;transition:all .22s;
      box-shadow:0 2px 14px rgba(0,0,0,.12);
      display:none;line-height:1;
    }
    body.fbk-mode .fbk-bubble{display:flex}
    .fbk-bubble:hover{transform:scale(1.12);border-color:#01BF47;box-shadow:0 4px 18px rgba(1,191,71,.3)}
    .fbk-bubble.fbk-done{
      background:linear-gradient(135deg,#01BF47,#89FA58);
      border-color:#01BF47;
    }

    /* ── Bottom action bar ── */
    #fbk-bar {
      position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
      z-index:9997;background:#111;color:#fff;border-radius:50px;
      padding:10px 10px 10px 22px;
      display:none;align-items:center;gap:14px;
      box-shadow:0 4px 28px rgba(0,0,0,.32);
      font-family:'DM Sans',sans-serif;font-size:13px;white-space:nowrap;
    }
    body.fbk-mode #fbk-bar{display:flex}
    #fbk-count{color:rgba(255,255,255,.5)}
    #fbk-share{
      background:linear-gradient(135deg,#01BF47,#89FA58,#D3FF87);
      color:#0a2e18;border:none;border-radius:50px;
      padding:9px 20px;font-weight:700;font-size:12.5px;
      cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .2s;
    }
    #fbk-share:hover{opacity:.88}

    /* ── Comment popup ── */
    #fbk-popup {
      position:fixed;z-index:10000;width:320px;
      background:#fff;border-radius:16px;
      box-shadow:0 12px 48px rgba(0,0,0,.18);
      border:1px solid #D4E4D9;padding:20px;
      display:none;font-family:'DM Sans',sans-serif;
    }
    #fbk-popup.fbk-open{display:block;animation:fbkFadeIn .18s ease}
    @keyframes fbkFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
    #fbk-pop-eye{
      font-size:10px;font-weight:700;letter-spacing:2.5px;
      text-transform:uppercase;color:#01BF47;margin-bottom:5px;
    }
    #fbk-pop-title{
      font-size:14.5px;font-weight:700;color:#111;
      margin-bottom:13px;line-height:1.3;
    }
    #fbk-textarea{
      width:100%;border:1.5px solid #D4E4D9;border-radius:9px;
      padding:11px 13px;font-size:13.5px;font-family:'DM Sans',sans-serif;
      resize:vertical;min-height:90px;outline:none;color:#111;
      box-sizing:border-box;line-height:1.65;transition:border-color .2s;
    }
    #fbk-textarea:focus{border-color:#01BF47}
    .fbk-pop-btns{display:flex;gap:8px;margin-top:12px}
    #fbk-btn-save{
      flex:1;background:linear-gradient(135deg,#01BF47,#89FA58,#D3FF87);
      color:#0a2e18;border:none;border-radius:8px;padding:10px;
      font-weight:700;font-size:13px;cursor:pointer;
      font-family:'DM Sans',sans-serif;
    }
    #fbk-btn-save:hover{opacity:.88}
    #fbk-btn-del{
      padding:10px 14px;border:1.5px solid #fecdd3;border-radius:8px;
      background:transparent;color:#e11d48;font-size:12px;
      cursor:pointer;font-family:'DM Sans',sans-serif;
    }
    #fbk-btn-cancel{
      padding:10px 14px;border:1.5px solid #D4E4D9;border-radius:8px;
      background:transparent;color:#888;font-size:12px;
      cursor:pointer;font-family:'DM Sans',sans-serif;
    }

    /* ══ VIEW MODE — sticky note overlays ══ */
    #fbk-view-banner {
      position:fixed;top:0;left:0;right:0;z-index:9999;
      background:#0a2e18;color:#fff;
      padding:10px 24px;font-family:'DM Sans',sans-serif;
      display:flex;align-items:center;justify-content:space-between;font-size:13px;
    }
    #fbk-view-banner strong{color:#89FA58}
    #fbk-view-banner span{color:rgba(255,255,255,.5)}
    #fbk-view-close{
      background:rgba(255,255,255,.12);border:none;color:#fff;
      border-radius:50px;padding:5px 14px;font-size:12px;font-weight:600;
      cursor:pointer;font-family:'DM Sans',sans-serif;
    }

    .fbk-note {
      position:absolute;top:16px;right:16px;z-index:990;
      max-width:280px;min-width:200px;
      background:#fff;border-radius:12px;
      border:1.5px solid #D4E4D9;border-top:4px solid #01BF47;
      box-shadow:0 6px 28px rgba(0,0,0,.13);
      font-family:'DM Sans',sans-serif;padding:13px 15px;
    }
    .fbk-note-label{
      font-size:9.5px;font-weight:700;letter-spacing:2px;
      text-transform:uppercase;color:#01BF47;margin-bottom:5px;
    }
    .fbk-note-section{
      font-size:11px;font-weight:600;color:#888;margin-bottom:8px;
    }
    .fbk-note-text{
      font-size:13.5px;color:#111;line-height:1.65;font-weight:400;
    }

    /* Section hover outline in review mode */
    body.fbk-mode section{position:relative}
    body.fbk-mode section:has(.fbk-bubble:not(.fbk-done)):hover{
      outline:2px dashed rgba(1,191,71,.3);outline-offset:-2px;
    }
  `;
  document.head.appendChild(css);

  /* ══ SECTION LABELS ════════════════════════════════════ */
  const LABELS = {
    hero:'Hero / Banner',why:'Why Choose Us',about:'About Section',
    flagship:'Featured Products',industries:'Industries',
    partners:'Partners & Clients',gallery:'Gallery',
    csr:'Social Responsibility',contact:'Contact / Enquiry',
    ih:'Industry Hero',  'ind-ov':'Industry Overview',
    'ind-chem':'Chemicals & Services','ind-apps':'Applications',
    'ind-cta':'Industry CTA',ph:'Page Header',
    story:'Our Story',vm:'Vision & Mission',
    services:'Services Overview',sus:'Sustainability',
    'about-cta':'About CTA',
  };

  function sectionLabel(el, id) {
    if (LABELS[id]) return LABELS[id];
    const h = el.querySelector('h1,h2,.ey,.ph-h');
    if (h) return h.textContent.trim().replace(/\s+/g,' ').slice(0,42);
    return id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  }

  /* ══ DISCOVER SECTIONS ═════════════════════════════════ */
  const sections = [];
  document.querySelectorAll('section').forEach((el, i) => {
    const id    = el.id || ('sec-' + i);
    if (!el.id) el.id = id;
    const label = sectionLabel(el, id);
    el.dataset.fbkKey = id;
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    sections.push({ el, id, label });
  });

  /* ══════════════════════════════════════════════════════
     VIEW MODE  — Developer opens shared link
  ══════════════════════════════════════════════════════ */
  if (isViewMode) {
    const count = Object.keys(sharedComments).length;

    // Banner
    const banner = document.createElement('div');
    banner.id = 'fbk-view-banner';
    banner.innerHTML = `
      <div>📌 <strong>Client Feedback</strong> — <span>${count} annotation${count!==1?'s':''} on this page</span></div>
      <button id="fbk-view-close" onclick="this.closest('#fbk-view-banner').remove();document.body.style.paddingTop=''">✕ Close</button>
    `;
    document.body.prepend(banner);
    document.body.style.paddingTop = '44px';

    // Sticky notes
    sections.forEach(({ el, id, label }) => {
      if (!sharedComments[id]) return;
      const note = document.createElement('div');
      note.className = 'fbk-note';
      note.innerHTML = `
        <div class="fbk-note-label">💬 Client Note</div>
        <div class="fbk-note-section">${label}</div>
        <div class="fbk-note-text">${sharedComments[id].replace(/\n/g,'<br>')}</div>
      `;
      el.appendChild(note);
    });
    return; // Don't set up edit mode in view mode
  }

  /* ══════════════════════════════════════════════════════
     EDIT MODE  — Client annotates sections
  ══════════════════════════════════════════════════════ */
  const STORE  = 'sk-fbk-' + location.pathname;
  const saved  = JSON.parse(localStorage.getItem(STORE) || '{}');
  let activeKey = null;

  /* Add bubbles */
  sections.forEach(({ el, id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'fbk-bubble' + (saved[id] ? ' fbk-done' : '');
    btn.setAttribute('aria-label', 'Annotate: ' + label);
    btn.innerHTML = saved[id] ? '✏️' : '💬';
    btn.addEventListener('click', e => { e.stopPropagation(); openPopup(id, label, btn); });
    el.appendChild(btn);
    el.dataset.bubble = id;
  });

  /* Toggle button */
  const toggle = document.createElement('button');
  toggle.id = 'fbk-toggle';
  toggle.innerHTML = '💬 Review Site';
  toggle.addEventListener('click', () => {
    const on = document.body.classList.toggle('fbk-mode');
    toggle.classList.toggle('fbk-on', on);
    toggle.innerHTML = on ? '✕ Exit Review' : '💬 Review Site';
    if (!on) closePopup();
    syncCount();
  });
  document.body.appendChild(toggle);

  /* Bottom bar */
  const bar = document.createElement('div');
  bar.id = 'fbk-bar';
  bar.innerHTML = `<span id="fbk-count"></span><button id="fbk-share">🔗 Share Feedback</button>`;
  document.body.appendChild(bar);
  document.getElementById('fbk-share').addEventListener('click', shareLink);

  /* Popup */
  const popup = document.createElement('div');
  popup.id = 'fbk-popup';
  popup.innerHTML = `
    <div id="fbk-pop-eye">💬 Your Feedback</div>
    <div id="fbk-pop-title"></div>
    <textarea id="fbk-textarea" placeholder="Describe the change you want…&#10;e.g. 'Make this heading smaller' or 'Change the button colour to blue'"></textarea>
    <div class="fbk-pop-btns">
      <button id="fbk-btn-save">Save</button>
      <button id="fbk-btn-del">Remove</button>
      <button id="fbk-btn-cancel">Cancel</button>
    </div>`;
  document.body.appendChild(popup);

  popup.querySelector('#fbk-btn-save').addEventListener('click', saveComment);
  popup.querySelector('#fbk-btn-del').addEventListener('click', removeComment);
  popup.querySelector('#fbk-btn-cancel').addEventListener('click', closePopup);
  document.addEventListener('click', e => {
    if (popup.classList.contains('fbk-open') && !popup.contains(e.target)) closePopup();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

  /* ── Functions ── */
  function openPopup(key, label, anchor) {
    activeKey = key;
    document.getElementById('fbk-pop-title').textContent = label;
    document.getElementById('fbk-textarea').value = saved[key] || '';

    const r = anchor.getBoundingClientRect();
    let top  = r.bottom + 10;
    let left = r.right  - 320;
    if (top  + 240 > window.innerHeight - 10) top  = r.top - 240;
    if (left < 12)                             left = 12;
    if (left + 320 > window.innerWidth - 12)   left = window.innerWidth - 332;

    popup.style.top  = top  + 'px';
    popup.style.left = left + 'px';
    popup.classList.add('fbk-open');
    setTimeout(() => document.getElementById('fbk-textarea').focus(), 30);
  }

  function closePopup() {
    popup.classList.remove('fbk-open');
    activeKey = null;
  }

  function saveComment() {
    if (!activeKey) return;
    const val = document.getElementById('fbk-textarea').value.trim();
    if (val) saved[activeKey] = val; else delete saved[activeKey];
    persist();
    refreshBubble(activeKey);
    syncCount();
    closePopup();
  }

  function removeComment() {
    if (!activeKey) return;
    delete saved[activeKey];
    persist();
    refreshBubble(activeKey);
    syncCount();
    closePopup();
  }

  function persist() {
    localStorage.setItem(STORE, JSON.stringify(saved));
  }

  function refreshBubble(key) {
    const s = sections.find(s => s.id === key);
    if (!s) return;
    const btn = s.el.querySelector('.fbk-bubble');
    if (!btn) return;
    const has = !!saved[key];
    btn.classList.toggle('fbk-done', has);
    btn.innerHTML = has ? '✏️' : '💬';
  }

  function syncCount() {
    const n = Object.keys(saved).length;
    const el = document.getElementById('fbk-count');
    if (el) el.textContent = n === 0 ? 'No notes yet' : n + ' note' + (n !== 1 ? 's' : '');
  }

  function shareLink() {
    const n = Object.keys(saved).length;
    if (n === 0) {
      alert('Add at least one annotation first — click the 💬 bubbles on each section.');
      return;
    }
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(saved))));
    const base    = location.origin + location.pathname;
    const url     = base + '?fbk=' + encoded;

    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('fbk-share');
      btn.textContent = '✅ Link copied — send via WhatsApp!';
      setTimeout(() => btn.textContent = '🔗 Share Feedback', 3000);
    }).catch(() => {
      prompt('Copy this link and send it via WhatsApp:', url);
    });
  }

  syncCount();
})();

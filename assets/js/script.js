'use strict';

// ─────────────────────────────────────────────────────────────
//  INJECT STYLES  (prefixed dv- to avoid all conflicts)
// ─────────────────────────────────────────────────────────────
(function () {
  var s = document.createElement('style');
  s.textContent =

    /* Reduced motion */
    '@media(prefers-reduced-motion:reduce){' +
    '.dv-reveal,.skill-progress-fill,.dv-ripple{transition:none!important;animation:none!important}}' +

    /* ── Cursor (desktop/mouse only) ── */
    '@media(pointer:fine){' +
    '*{cursor:none!important}' +
    '#dv-cursor{position:fixed;width:10px;height:10px;background:hsl(43,100%,64%);' +
    'border-radius:50%;pointer-events:none;z-index:99999;top:0;left:0;' +
    'will-change:transform;' +
    'box-shadow:0 0 8px hsla(43,100%,64%,.8),0 0 18px hsla(43,100%,64%,.3);' +
    'transition:width .15s ease,height .15s ease,background .15s ease}' +
    '#dv-cursor.dv-hover{width:26px;height:26px;background:hsla(43,100%,64%,.1);' +
    'box-shadow:0 0 0 1.5px hsl(43,100%,64%),0 0 16px hsla(43,100%,64%,.25)}' +
    '#dv-cursor.dv-click{width:6px;height:6px;background:hsl(43,100%,88%)}}' +

    /* ── Scroll reveal ── */
    '.dv-reveal{opacity:0;transform:translateY(20px);' +
    'transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}' +
    '.dv-reveal.dv-visible{opacity:1;transform:translateY(0)}' +
    '.dv-d1{transition-delay:.06s}.dv-d2{transition-delay:.12s}' +
    '.dv-d3{transition-delay:.18s}.dv-d4{transition-delay:.24s}' +

    /* ── Skill progress bars ── */
    '.skill-progress-fill{transform-origin:left center;will-change:transform}' +
    '.dv-bar-zero{transform:scaleX(0)!important;transition:none!important}' +
    '.dv-bar-grow{transform:scaleX(1)!important;' +
    'transition:transform 1.1s cubic-bezier(.22,1,.36,1)!important}' +

    /* ── Testimonial avatars — perfect circles, correct size ── */
    '[data-testimonials-avatar]{' +
    'width:72px!important;height:72px!important;min-width:72px;' +
    'object-fit:cover!important;object-position:center top!important;' +
    'border-radius:50%!important;display:block!important;flex-shrink:0}' +
    '[data-modal-img]{' +
    'width:96px!important;height:96px!important;min-width:96px;' +
    'object-fit:cover!important;object-position:center top!important;' +
    'border-radius:50%!important;display:block!important;flex-shrink:0}' +

    /* ── Remove yellow focus outline box ── */
    '*:focus{outline:none!important}' +
    '*:focus-visible{outline:1px solid hsla(43,100%,64%,.4)!important;' +
    'outline-offset:2px;border-radius:3px}' +

    /* ── Modal close button ── */
    '[data-modal-close-btn]{' +
    'display:flex!important;align-items:center;justify-content:center;' +
    'width:34px;height:34px;border-radius:50%;' +
    'background:hsla(255,255%,100%,.05);border:1px solid hsla(255,255%,100%,.1);' +
    'color:hsl(0,0%,80%);cursor:pointer;flex-shrink:0;' +
    'transition:background .2s,border-color .2s,color .2s}' +
    '[data-modal-close-btn]:hover{background:hsla(255,255%,100%,.1);' +
    'border-color:hsla(255,255%,100%,.25);color:#fff}' +

    /* ── Sidebar btn: mobile only ── */
    '[data-sidebar-btn]{display:none!important}' +
    '@media(max-width:580px){[data-sidebar-btn]' +
    '{display:flex!important;align-items:center;gap:6px}}' +

    /* ── Typing cursor ── */
    '#typing-text::after{content:"|";color:hsl(43,100%,64%);' +
    'animation:dv-blink .75s step-end infinite;margin-left:1px}' +
    '@keyframes dv-blink{50%{opacity:0}}' +

    /* ── Ripple ── */
    '.dv-ripple-wrap{position:relative;overflow:hidden}' +
    '.dv-ripple{position:absolute;border-radius:50%;transform:scale(0);' +
    'background:hsla(43,100%,64%,.18);' +
    'animation:dv-rip .55s ease-out forwards;pointer-events:none}' +
    '@keyframes dv-rip{to{transform:scale(4.5);opacity:0}}' +

    /* ── Card hover lift — pure CSS, no JS/rAF per frame ── */
    '@media(pointer:fine){' +
    '.content-card,.clients-item{transition:transform .25s ease,box-shadow .25s ease}' +
    '.content-card:hover,.clients-item:hover{transform:translateY(-3px);' +
    'box-shadow:0 16px 32px hsla(0,0%,0%,.4)}}' +

    /* ── Magnetic ── */
    '.dv-mag{transition:transform .4s cubic-bezier(.23,1,.32,1)!important}' +

    /* ── Publication card lift (mouse only) ── */
    '.publication-item a{display:block}' +
    '@media(pointer:fine){' +
    '.publication-item a{transition:transform .25s ease}' +
    '.publication-item a:hover{transform:translateY(-4px)}' +
    '.project-img{overflow:hidden}' +
    '.project-img img{transition:transform .4s ease!important}' +
    '.project-item a:hover .project-img img{transform:scale(1.06)!important}' +
    '.service-item{transition:transform .25s ease}' +
    '.service-item:hover{transform:translateY(-3px)}}' +

    /* ── Social icon spring ── */
    '.social-link{transition:transform .2s cubic-bezier(.34,1.56,.64,1)!important}' +
    '.social-link:hover{transform:scale(1.18)!important}' +

    /* ── Modal entrance animation (does NOT touch overflow or scroll) ── */
    /* fill-mode is "backwards" (NOT "both"/"forwards"): with "both" the browser keeps
       applying the final keyframe's transform forever after the animation ends, and a
       transform of ANY kind (even the identity matrix scale(1)/translateY(0) produces)
       creates a new containing block for position:fixed descendants. That silently broke
       position:fixed on .modal-container and its .overlay child, anchoring them to this
       element/article instead of the viewport, so the modal could no longer size or
       scroll against the real viewport. */
    '[data-modal-container].active{animation:dv-modal-in .28s cubic-bezier(.22,1,.36,1) backwards}' +
    '@keyframes dv-modal-in{from{opacity:0;transform:scale(.95) translateY(10px)}' +
    'to{opacity:1;transform:scale(1) translateY(0)}}' +

    /* ── Page tab transition ── */
    'article.active{animation:dv-pagein .35s cubic-bezier(.22,1,.36,1) backwards}' +
    '@keyframes dv-pagein{from{opacity:0;transform:translateY(8px)}' +
    'to{opacity:1;transform:translateY(0)}}' +

    /* ── Form btn hover (mouse only) ── */
    '@media(pointer:fine){' +
    '.form-btn{transition:transform .2s ease!important}' +
    '.form-btn:hover{transform:translateY(-2px)!important}}' +

    /* ── Testimonial item hover — clean lift, NO glow/shadow/border ── */
    '@media(pointer:fine){' +
    '[data-testimonials-item]{transition:transform .25s ease;cursor:pointer}' +
    '[data-testimonials-item]:hover{transform:translateY(-3px)}}' +

    /* ── Nav link underline sweep — subtle, GPU-only ── */
    '.navbar-link{position:relative}' +
    '.navbar-link::after{content:"";position:absolute;left:50%;bottom:8px;' +
    'width:0;height:2px;background:hsl(43,100%,64%);' +
    'transition:width .25s ease,left .25s ease;border-radius:2px}' +
    '.navbar-link.active::after,.navbar-link:hover::after{width:70%;left:15%}' +

    /* ── Icon box — subtle scale on hover, replaces removed tilt ── */
    '@media(pointer:fine){' +
    '.service-icon-box,.timeline-item .icon-box{transition:transform .2s ease}' +
    '.service-item:hover .service-icon-box,.timeline-item:hover .icon-box{transform:scale(1.08)}}';

  document.head.appendChild(s);
}());


// ─────────────────────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────────────────────
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

function isMouse() {
  return window.matchMedia('(pointer:fine)').matches;
}


// ─────────────────────────────────────────────────────────────
//  CURSOR  (mouse/desktop only)
//  No easing/lerp — the dot is pinned to the real pointer position
//  every frame, so it never "chases" the mouse. mousemove just
//  records coordinates; a single rAF per frame flushes them to a
//  translate3d transform (GPU-composited, no layout/paint cost).
// ─────────────────────────────────────────────────────────────
(function () {
  if (!isMouse()) return;
  var dot = document.createElement('div');
  dot.id = 'dv-cursor';
  document.body.appendChild(dot);

  var px = -50, py = -50, raf = null, moved = false;

  function flush() {
    raf = null;
    if (!moved) return;
    moved = false;
    dot.style.transform = 'translate3d(' + (px - 5) + 'px,' + (py - 5) + 'px,0)';
  }

  window.addEventListener('mousemove', function (e) {
    px = e.clientX; py = e.clientY; moved = true;
    if (!raf) raf = requestAnimationFrame(flush);
  }, { passive: true });
  window.addEventListener('mousedown', function () { dot.classList.add('dv-click'); },    { passive: true });
  window.addEventListener('mouseup',   function () { dot.classList.remove('dv-click'); }, { passive: true });

  // Bound directly to the matched elements (mouseenter/mouseleave, which don't
  // bubble) instead of delegating mouseover/mouseout on `document` with
  // e.target.closest(SEL). The delegated version ran a DOM-tree walk on
  // *every* element the pointer crossed anywhere on the page — the main
  // cause of the mouse feeling laggy. A small enter-counter keeps the same
  // "stay hovered while over nested matches" behavior closest() gave for free.
  var SEL = 'a,button,input,textarea,label,[data-nav-link],[data-filter-btn],' +
            '[data-testimonials-item],[data-select],[data-select-item],[data-sidebar-btn]';
  var hoverDepth = 0;
  function onHoverEnter() { hoverDepth++; dot.classList.add('dv-hover'); }
  function onHoverLeave() { if (--hoverDepth <= 0) { hoverDepth = 0; dot.classList.remove('dv-hover'); } }
  document.querySelectorAll(SEL).forEach(function (el) {
    el.addEventListener('mouseenter', onHoverEnter, { passive: true });
    el.addEventListener('mouseleave', onHoverLeave,  { passive: true });
  });
}());


// ─────────────────────────────────────────────────────────────
//  SCROLL REVEAL
// ─────────────────────────────────────────────────────────────
var revealObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    e.target.classList.add('dv-visible');
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

function attachReveal(ctx) {
  ctx = ctx || document;
  var sel = '.service-item,.testimonials-item,.education-item,' +
            '.skills-item,.project-item,.publication-item,' +
            '.timeline-item,.clients-item,.content-card';
  var d = 0;
  ctx.querySelectorAll(sel).forEach(function (el) {
    if (el.dataset.dvReveal) return;
    el.dataset.dvReveal = '1';
    el.classList.add('dv-reveal', 'dv-d' + ((d % 4) + 1));
    d++;
    revealObs.observe(el);
  });
}


// ─────────────────────────────────────────────────────────────
//  PROGRESS BARS
// ─────────────────────────────────────────────────────────────
var barObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting || e.target.dataset.dvBar) return;
    e.target.dataset.dvBar = '1';
    e.target.classList.add('dv-bar-zero');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        e.target.classList.remove('dv-bar-zero');
        e.target.classList.add('dv-bar-grow');
      });
    });
    barObs.unobserve(e.target);
  });
}, { threshold: 0.3 });

function initProgressBars() {
  document.querySelectorAll('.skill-progress-fill').forEach(function (el) {
    if (!el.dataset.dvBar) barObs.observe(el);
  });
}


// ─────────────────────────────────────────────────────────────
//  RIPPLE  (works on touch too via 'click')
// ─────────────────────────────────────────────────────────────
document.addEventListener('click', function (e) {
  var btn = e.target.closest('button,.form-btn,[data-filter-btn]');
  if (!btn) return;
  btn.classList.add('dv-ripple-wrap');
  var r   = btn.getBoundingClientRect();
  var sz  = Math.max(r.width, r.height) * 1.9;
  var rip = document.createElement('span');
  rip.className = 'dv-ripple';
  rip.style.cssText =
    'width:' + sz + 'px;height:' + sz + 'px;' +
    'left:' + (e.clientX - r.left - sz / 2) + 'px;' +
    'top:'  + (e.clientY - r.top  - sz / 2) + 'px';
  btn.appendChild(rip);
  rip.addEventListener('animationend', function () { rip.remove(); }, { once: true });
}, { passive: true });


// ─────────────────────────────────────────────────────────────
//  MAGNETIC  (mouse/desktop only)
// ─────────────────────────────────────────────────────────────
function attachMagnetic(el) {
  if (!isMouse() || el.dataset.dvMag) return;
  el.dataset.dvMag = '1';
  el.classList.add('dv-mag');
  var rect = null;
  el.addEventListener('mouseenter', function () {
    rect = el.getBoundingClientRect();
  }, { passive: true });
  el.addEventListener('mousemove', function (e) {
    if (!rect) rect = el.getBoundingClientRect();
    var dx = (e.clientX - rect.left - rect.width  / 2) * 0.28;
    var dy = (e.clientY - rect.top  - rect.height / 2) * 0.28;
    el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
  }, { passive: true });
  el.addEventListener('mouseleave', function () { el.style.transform = ''; rect = null; }, { passive: true });
}


// ─────────────────────────────────────────────────────────────
//  SIDEBAR TOGGLE  +  EYE ICON  (mobile only via CSS)
// ─────────────────────────────────────────────────────────────
var sidebar    = document.querySelector('[data-sidebar]');
var sidebarBtn = document.querySelector('[data-sidebar-btn]');

var EYE_OPEN =
  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"' +
  ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
  ' stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
  '<circle cx="12" cy="12" r="3"/></svg>';

var EYE_SHUT =
  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"' +
  ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
  ' stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94' +
  'M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19' +
  'm-6.72-1.07a3 3 0 1 1-4.24-4.24"/>' +
  '<line x1="1" y1="1" x2="23" y2="23"/></svg>';

function setSidebarBtn(open) {
  if (!sidebarBtn) return;
  sidebarBtn.innerHTML =
    (open ? EYE_SHUT : EYE_OPEN) +
    '<span style="font-size:13px;font-weight:500">' +
    (open ? 'Hide Contacts' : 'Show Contacts') + '</span>';
}

if (sidebarBtn && sidebar) {
  setSidebarBtn(false);
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
    setSidebarBtn(sidebar.classList.contains('active'));
  });
}


// ─────────────────────────────────────────────────────────────
//  TESTIMONIALS MODAL
//  ★ ZERO scroll manipulation — identical to original JS ★
// ─────────────────────────────────────────────────────────────
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer   = document.querySelector('[data-modal-container]');
const modalCloseBtn    = document.querySelector('[data-modal-close-btn]');
const overlay          = document.querySelector('[data-overlay]');
const modalImg         = document.querySelector('[data-modal-img]');
const modalTitle       = document.querySelector('[data-modal-title]');
const modalText        = document.querySelector('[data-modal-text-content]');
const modalDate        = document.querySelector('[data-modal-date]');

// Exactly as original — no scroll lock added
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    var av  = this.querySelector('[data-testimonials-avatar]');
    var ttl = this.querySelector('[data-testimonials-title]');
    var txt = this.querySelector('[data-testimonials-text]');
    if (av)       { modalImg.src = av.src; modalImg.alt = av.alt; }
    if (ttl)      { modalTitle.innerHTML = ttl.innerHTML; }
    if (txt)      { modalText.innerHTML  = txt.innerHTML; }
    if (modalDate){ modalDate.innerHTML  = this.getAttribute('data-date') || ''; }
    testimonialsModalFunc();
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', testimonialsModalFunc);
if (overlay)       overlay.addEventListener('click', testimonialsModalFunc);

// Escape key (bonus — original didn't have this)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modalContainer && modalContainer.classList.contains('active')) {
    testimonialsModalFunc();
  }
});


// ─────────────────────────────────────────────────────────────
//  DROPDOWN SELECT  (original — double-c typo preserved)
// ─────────────────────────────────────────────────────────────
const select      = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');

select.addEventListener('click', function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.trim().toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}


// ─────────────────────────────────────────────────────────────
//  FILTER PROJECTS  (original)
// ─────────────────────────────────────────────────────────────
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const category = filterItems[i].querySelector('.project-category').innerText.trim().toLowerCase();
    if (selectedValue === 'all' || selectedValue === category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

const filterButtons = document.querySelectorAll('[data-filter-btn]');

filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const val = e.target.innerText.trim().toLowerCase();
    filterButtons.forEach(function (b) { b.classList.remove('active'); });
    e.target.classList.add('active');
    filterFunc(val);
  });
});


// ─────────────────────────────────────────────────────────────
//  PAGE NAVIGATION
//  Activates the clicked link directly (instead of assuming nav
//  links and pages are in the same order) so adding/reordering a
//  nav item later can't silently highlight the wrong tab.
// ─────────────────────────────────────────────────────────────
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages           = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    const label = this.innerHTML.toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (label === pages[j].dataset.page) {
        pages[j].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove('active');
      }
    }

    navigationLinks.forEach(function (link) { link.classList.remove('active'); });
    this.classList.add('active');

    setTimeout(function () { attachReveal(); initProgressBars(); }, 60);
  });
}


// ─────────────────────────────────────────────────────────────
//  TYPING ANIMATION  (original)
// ─────────────────────────────────────────────────────────────
const typingText = document.getElementById('typing-text');
const words = ['Doctor (MBBS).', 'AI in Healthcare.', 'Medical Researcher.', '14+ Publications.', 'Clinical Innovator.', 'Medical Mentor.'];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  typingText.textContent = currentWord.substring(0, charIndex);
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 200);
  }
}


// ─────────────────────────────────────────────────────────────
//  AVATAR ROTATION  (original + tab-visibility pause)
// ─────────────────────────────────────────────────────────────
let currentAvatarIndex = 0;
const avatarImages = [
  './assets/images/avatar/profile/profile-1.webp',
  './assets/images/avatar/profile/profile-2.webp',
  './assets/images/avatar/profile/profile-3.webp',
  './assets/images/avatar/profile/profile-4.webp',
  './assets/images/avatar/profile/profile-5.webp',
  './assets/images/avatar/profile/profile-6.webp',
];

function changeAvatar() {
  if (document.hidden) return;
  const avatarImg = document.getElementById('avatar');
  if (!avatarImg) return;
  avatarImg.classList.add('fade-out');
  setTimeout(function () {
    currentAvatarIndex = (currentAvatarIndex + 1) % avatarImages.length;
    avatarImg.src = avatarImages[currentAvatarIndex];
    avatarImg.classList.remove('fade-out');

    // Sync the ring pulse (defined in style.css) to fire exactly when
    // the new image appears, instead of it looping on its own timer.
    const box = avatarImg.closest('.avatar-box');
    if (box) {
      box.classList.remove('dv-avatar-sync');
      void box.offsetWidth; // force reflow so the class can be re-added and replay the animation
      box.classList.add('dv-avatar-sync');
    }
  }, 300);
}


// ─────────────────────────────────────────────────────────────
//  DOMContentLoaded — START EVERYTHING
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  filterFunc('all');
  setTimeout(typeEffect, 1000);
  setInterval(changeAvatar, 4000);
  attachReveal();
  initProgressBars();
  document.querySelectorAll('.form-btn').forEach(attachMagnetic);
});


// ─────────────────────────────────────────────────────────────
//  PRELOADER FADE-OUT  (isolated addition — touches nothing above)
//  Fades and removes #dv-preloader (defined inline in index.html)
//  once the page has fully loaded. Wrapped in try/catch and a
//  null-check so a missing element or any error here can never
//  affect the rest of the script.
// ─────────────────────────────────────────────────────────────
(function () {
  try {
    window.addEventListener('load', function () {
      var pre = document.getElementById('dv-preloader');
      if (!pre) return;
      setTimeout(function () {
        pre.style.opacity = '0';
        pre.style.visibility = 'hidden';
        setTimeout(function () {
          if (pre && pre.parentNode) pre.parentNode.removeChild(pre);
        }, 550);
      }, 250);
    });
  } catch (err) {
    var pre = document.getElementById('dv-preloader');
    if (pre && pre.parentNode) pre.parentNode.removeChild(pre);
  }
}());

/* Mada Overseas — main.js */

// SITE_ROOT is set by each page before this script loads:
//   root pages (index/about/contact/enquiry) → window.SITE_ROOT = './'
//   pages/export/* or pages/import/*         → window.SITE_ROOT = '../../'
const R = (typeof window.SITE_ROOT !== 'undefined') ? window.SITE_ROOT : './';

// ── SVG icon helpers ──────────────────────────────────────────────────────────
const _ico = (paths, cls) => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
const NAV  = paths => _ico(paths, 'nav-icon');
const CHEV = () => _ico('<path d="m9 18 6-6-6-6"/>', 'chev-icon');
const STAR = () => _ico('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/>', 'star-icon');

// ── Sidebar HTML ─────────────────────────────────────────────────────────────
const SIDEBAR_HTML = `
<div class="sb-logo">
  <a href="${R}index.html">
    <img src="${R}assets/images/logo/logo.2x.png" alt="Mada Overseas — International Trading"
         width="160" height="23"
         onerror="this.style.display='none'">
    <div class="sb-tag">International Trading</div>
  </a>
</div>
<nav class="sb-nav" aria-label="Main navigation">
  <div class="nav-item">
    <a href="${R}index.html" class="nl">${NAV('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>')} Home</a>
  </div>
  <div class="nav-item">
    <a href="${R}about.html" class="nl">${NAV('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/>')} About Us</a>
  </div>
  <div class="nav-item">
    <button class="nl" data-toggle aria-expanded="false" aria-controls="nav-commodities">
      ${NAV('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>')} Commodities ${CHEV()}
    </button>
    <div class="nd1" id="nav-commodities">
      <div class="nd1-group">
        <button class="nd1-btn" data-toggle aria-expanded="false" aria-controls="nav-import">
          ${NAV('<path d="M12 5v14"/><path d="m5 12 7 7 7-7"/>')} Import ${CHEV()}
        </button>
        <div class="nd2" id="nav-import">
          <a href="${R}pages/import/rice.html">Rice</a>
          <a href="${R}pages/import/sugar.html">Sugar</a>
          <a href="${R}pages/import/wheat-flour.html">Wheat Flour / Farine</a>
        </div>
      </div>
      <div class="nd1-group">
        <button class="nd1-btn" data-toggle aria-expanded="false" aria-controls="nav-export">
          ${NAV('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>')} Export ${CHEV()}
        </button>
        <div class="nd2" id="nav-export">
          <a href="${R}pages/export/cloves.html">Cloves ${STAR()}</a>
          <a href="${R}pages/export/vanilla.html">Vanilla ${STAR()}</a>
          <a href="${R}pages/export/kidney-beans.html">White Kidney Beans ${STAR()}</a>
          <a href="${R}pages/export/raw-cashew.html">Raw Cashew ${STAR()}</a>
          <a href="${R}pages/export/cinnamon.html">Cinnamon / Cassia ${STAR()}</a>
          <a href="${R}pages/export/mud-crab.html">Mud Crabs ${STAR()}</a>
          <a href="${R}pages/export/minerals.html">Ores &amp; Minerals</a>
        </div>
      </div>
    </div>
  </div>
  <div class="sb-sep"></div>
  <div class="nav-item">
    <a href="${R}enquiry.html" class="nl">${NAV('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>')} Enquiry / Query</a>
  </div>
  <div class="nav-item">
    <a href="${R}contact.html" class="nl">${NAV('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 9.81a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>')} Contact Us</a>
  </div>
</nav>
<div class="sb-foot">
  &copy; 2026 Mada Overseas<br>
  Est. 2006 &middot; Antananarivo, Madagascar
  <div class="sb-legal">
    <a href="${R}pages/legal/privacy-policy.html">Privacy</a>
    <a href="${R}pages/legal/terms-conditions.html">Terms</a>
    <a href="${R}pages/legal/shipping-policy.html">Shipping</a>
    <a href="${R}pages/legal/disclaimer.html">Disclaimer</a>
  </div>
</div>
`;

// ── Inject sidebar ────────────────────────────────────────────────────────────
const sbMount = document.getElementById('sidebar');
if (sbMount) sbMount.innerHTML = SIDEBAR_HTML;

// ── Mobile sidebar toggle ─────────────────────────────────────────────────────
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('sb-overlay');
const menuBtn = document.getElementById('menu-toggle');
if (menuBtn) menuBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  menuBtn.setAttribute('aria-expanded', 'true');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn?.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
overlay?.addEventListener('click', closeSidebar);

// Close sidebar on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
});

// ── Click-open dropdowns ──────────────────────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-toggle]');
  if (!btn) return;
  e.preventDefault();

  const container = btn.closest('.nd1-group') || btn.closest('.nav-item');
  if (!container) return;

  const isOpen = container.classList.contains('open');
  container.parentElement
    .querySelectorAll(':scope > .nav-item, :scope > .nd1-group')
    .forEach(s => {
      s.classList.remove('open');
      const b = s.querySelector('[data-toggle]');
      if (b) b.setAttribute('aria-expanded', 'false');
    });

  if (!isOpen) {
    container.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
});

// ── Active link highlight ─────────────────────────────────────────────────────
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nl, .nd1-btn, .nd2 a').forEach(link => {
  const href = (link.getAttribute('href') || '').split('/').pop();
  if (href === page) {
    link.classList.add('active');
    if (link.hasAttribute('href')) link.setAttribute('aria-current', 'page');
    let el = link.parentElement;
    while (el && el !== sbMount) {
      if (el.classList.contains('nav-item') || el.classList.contains('nd1-group')) {
        el.classList.add('open');
        const b = el.querySelector('[data-toggle]');
        if (b) b.setAttribute('aria-expanded', 'true');
      }
      el = el.parentElement;
    }
  }
});

// ── Shared: prevent double-submit ────────────────────────────────────────────
function lockSubmit(btn, label) {
  btn.disabled = true;
  btn.dataset.origText = btn.textContent;
  btn.textContent = label;
}
function unlockSubmit(btn) {
  btn.disabled = false;
  btn.textContent = btn.dataset.origText || 'Submit';
}

function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

// ── Contact form → Notion via /api/contact ────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  // Prevent re-submission after success
  let contactSubmitted = false;

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (contactSubmitted) return;

    const btn = contactForm.querySelector('[type=submit]');
    const ok  = document.getElementById('cf-ok');
    const err = document.getElementById('cf-err');
    if (ok)  ok.classList.remove('show');
    if (err) err.classList.remove('show');

    const data = {
      name:       contactForm.name.value.trim(),
      email:      contactForm.email.value.trim(),
      phone:      contactForm.phone?.value.trim() || '',
      whatsapp:   contactForm.whatsapp?.value.trim() || '',
      subject:    contactForm.subject.value.trim(),
      message:    contactForm.message.value.trim(),
      website:    contactForm.website?.value || '',   // honeypot
      sourcePage: location.pathname || '/contact.html',
      formType:   'Contact',
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      if (err) { err.textContent = 'Please fill in all required fields.'; err.classList.add('show'); }
      return;
    }
    if (!looksLikeEmail(data.email)) {
      if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
      return;
    }

    lockSubmit(btn, 'Sending…');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        contactSubmitted = true;
        btn.textContent = 'Sent';
        if (ok) ok.classList.add('show');
        contactForm.reset();
      } else {
        throw new Error('server error');
      }
    } catch {
      if (err) {
        err.textContent = 'Something went wrong. Please email us at support@madaoverseas.com';
        err.classList.add('show');
      }
    } finally {
      if (!contactSubmitted) unlockSubmit(btn);
    }
  });
}

// ── Enquiry form → Notion via /api/enquiry ────────────────────────────────────
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  let enquirySubmitted = false;

  enquiryForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (enquirySubmitted) return;

    const btn = enquiryForm.querySelector('[type=submit]');
    const ok  = document.getElementById('form-ok');
    const err = document.getElementById('form-err');
    if (ok)  ok.classList.remove('show');
    if (err) err.classList.remove('show');

    const data = {
      name:       enquiryForm.name.value.trim(),
      country:    enquiryForm.country.value.trim(),
      email:      enquiryForm.email.value.trim(),
      altEmail:   enquiryForm['alt-email']?.value.trim() || '',
      phone:      enquiryForm.phone.value.trim(),
      whatsapp:   enquiryForm.whatsapp?.value.trim() || '',
      company:    enquiryForm.company?.value.trim() || '',
      product:    enquiryForm.product.value.trim(),
      subject:    enquiryForm.subject.value.trim(),
      quantity:   enquiryForm.quantity?.value.trim() || '',
      message:    enquiryForm.message.value.trim(),
      website:    enquiryForm.website?.value || '',  // honeypot
      sourcePage: location.pathname || '/enquiry.html',
      formType:   'Enquiry',
    };

    if (!data.name || !data.email || !data.phone || !data.country || !data.product || !data.subject || !data.message) {
      if (err) { err.textContent = 'Please fill in all required fields.'; err.classList.add('show'); }
      return;
    }
    if (!looksLikeEmail(data.email) || (data.altEmail && !looksLikeEmail(data.altEmail))) {
      if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
      return;
    }

    lockSubmit(btn, 'Sending…');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        enquirySubmitted = true;
        btn.textContent = 'Sent';
        if (ok) ok.classList.add('show');
        enquiryForm.reset();
      } else {
        throw new Error('server error');
      }
    } catch {
      if (err) {
        err.textContent = 'Something went wrong. Please email us at support@madaoverseas.com';
        err.classList.add('show');
      }
    } finally {
      if (!enquirySubmitted) unlockSubmit(btn);
    }
  });
}

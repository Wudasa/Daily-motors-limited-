// =================== DATA ===================
const carsData = [
  { id: 1,  make: 'Toyota',     model: 'Land Cruiser Prado TX', year: 2021, price: 8500000, mileage: 28000, fuel: 'Diesel',  transmission: 'Automatic', type: 'suv',       condition: 'used', color: '#2d6a4f', engine: '2.8L', seats: 7, hot: true,  image: '2021-Toyota-Land-Cruiser-Prado.jpg' },
  { id: 2,  make: 'Mazda',      model: 'CX-5 Skyactiv-G',       year: 2022, price: 5200000, mileage: 15000, fuel: 'Petrol',  transmission: 'Automatic', type: 'suv',       condition: 'new',  color: '#CC2200', engine: '2.0L', seats: 5, hot: false, image: '2022 cx-5 skyactiv G.jpg' },
  { id: 3,  make: 'Toyota',     model: 'Hilux GD6 D/C',         year: 2023, price: 6800000, mileage:  8000, fuel: 'Diesel',  transmission: 'Manual',    type: 'pickup',    condition: 'new',  color: '#1a3a5c', engine: '2.4L', seats: 5, hot: true,  image: '2023 hilux gd6.jpg' },
  { id: 4,  make: 'Honda',      model: 'Fit RS',                 year: 2020, price: 1650000, mileage: 42000, fuel: 'Petrol',  transmission: 'CVT',       type: 'hatchback', condition: 'used', color: '#333333', engine: '1.5L', seats: 5, hot: false, image: '2020 fit rs.webp' },
  { id: 5,  make: 'Subaru',     model: 'Forester XT',            year: 2021, price: 3900000, mileage: 31000, fuel: 'Petrol',  transmission: 'Automatic', type: 'suv',       condition: 'used', color: '#4a4a4a', engine: '2.0T', seats: 5, hot: false, image: '2020 forester XT' },
  { id: 6,  make: 'Toyota',     model: 'Camry SE Hybrid',        year: 2022, price: 4100000, mileage: 18000, fuel: 'Hybrid',  transmission: 'CVT',       type: 'sedan',     condition: 'new',  color: '#7a1010', engine: '2.5L', seats: 5, hot: true,  image: '2022-toyota-camry-hybrid-.jpg' },
  { id: 7,  make: 'Nissan',     model: 'X-Trail T32',            year: 2020, price: 3200000, mileage: 44000, fuel: 'Petrol',  transmission: 'Automatic', type: 'suv',       condition: 'used', color: '#2c3e50', engine: '2.0L', seats: 7, hot: false, image: '2020 xtrail t23.jpg' },
  { id: 8,  make: 'Toyota',     model: 'Axio X Hybrid',          year: 2019, price: 1350000, mileage: 67000, fuel: 'Hybrid',  transmission: 'CVT',       type: 'sedan',     condition: 'used', color: '#555555', engine: '1.5L', seats: 5, hot: false, image: '2019 axio x hybird.jpg' },
  { id: 9,  make: 'Mitsubishi', model: 'Outlander PHEV',         year: 2022, price: 5800000, mileage: 12000, fuel: 'Hybrid',  transmission: 'Automatic', type: 'suv',       condition: 'new',  color: '#1a1a2e', engine: '2.4L', seats: 7, hot: true,  image: '2022 outlander phev.jpg' },
  { id: 10, make: 'Volkswagen', model: 'Polo Vivo GP',           year: 2021, price: 1250000, mileage: 35000, fuel: 'Petrol',  transmission: 'Manual',    type: 'hatchback', condition: 'used', color: '#444444', engine: '1.4L', seats: 5, hot: false, image: '2021-volkswagen-vw-polo-vivo-gp.jpeg' },
  { id: 11, make: 'Mercedes',   model: 'C200 Avantgarde',        year: 2021, price: 7200000, mileage: 22000, fuel: 'Petrol',  transmission: 'Automatic', type: 'sedan',     condition: 'used', color: '#1c1c1c', engine: '2.0L', seats: 5, hot: true,  image: '2021 c200 avantgrade.jpg' },
  { id: 12, make: 'Ford',       model: 'Ranger Wildtrak',        year: 2022, price: 5500000, mileage: 19000, fuel: 'Diesel',  transmission: 'Automatic', type: 'pickup',    condition: 'new',  color: '#8B4513', engine: '2.0L', seats: 5, hot: false, image: '2022 ranger wildtark.jpeg' },
];

// =================== UTILS ===================
function formatKES(n) {
  if (n >= 1000000) return 'KES ' + (n / 1000000).toFixed(1) + 'M';
  return 'KES ' + (n / 1000).toFixed(0) + 'K';
}
function formatMileage(n) { return n.toLocaleString() + ' km'; }

// Debounce — smooths out search input so we don't re-render on every keystroke
function debounce(fn, delay = 300) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  };
}

// =================== CAR SVG ===================
function carSVG(color) {
  return `<svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="36" width="124" height="30" rx="6" fill="${color}"/>
    <path d="M32 36 Q48 14 80 13 Q112 14 128 36Z" fill="${color}" opacity="0.9"/>
    <rect x="48" y="17" width="22" height="16" rx="3" fill="rgba(180,220,255,0.35)"/>
    <rect x="74" y="17" width="22" height="16" rx="3" fill="rgba(180,220,255,0.35)"/>
    <circle cx="44"  cy="66" r="12" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <circle cx="44"  cy="66" r="6"  fill="#2a2a2a"/>
    <circle cx="44"  cy="66" r="2"  fill="${color}"/>
    <circle cx="116" cy="66" r="12" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <circle cx="116" cy="66" r="6"  fill="#2a2a2a"/>
    <circle cx="116" cy="66" r="2"  fill="${color}"/>
    <rect x="16"  y="44" width="14"  height="7" rx="2" fill="#f0c040" opacity="0.9"/>
    <rect x="130" y="44" width="14"  height="7" rx="2" fill="#f04040" opacity="0.7"/>
    <rect x="18"  y="51" width="124" height="2"  fill="rgba(255,255,255,0.05)"/>
  </svg>`;
}

// =================== RENDER CARD ===================
function renderCarCard(car, link = 'car-detail.html') {
  const waMsg = encodeURIComponent(
    `Hi, I'm interested in the ${car.year} ${car.make} ${car.model} listed at ${formatKES(car.price)}. Is it still available?`
  );
  return `
    <div class="car-card reveal" data-type="${car.type}" data-id="${car.id}" data-condition="${car.condition}">
      <div class="car-img-wrap">
        ${car.image ? `<img src="images/${car.image}" alt="${car.year} ${car.make} ${car.model}" class="car-img" />` : carSVG(car.color)}
      </div>
      <div class="car-overlay">
        <a href="${link}?id=${car.id}" class="car-overlay-btn">View Details</a>
      </div>
      <div class="car-badge-wrap">
        <span class="badge badge-${car.condition}">${car.condition === 'new' ? 'NEW' : 'USED'}</span>
        ${car.hot ? '<span class="badge badge-hot">HOT</span>' : ''}
      </div>
      <button class="car-fav" data-fav-id="${car.id}" title="Save">♡</button>
      <div class="car-info">
        <div class="car-make">${car.make}</div>
        <div class="car-name">${car.year} ${car.model}</div>
        <div class="car-specs">
          <div class="spec-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            ${formatMileage(car.mileage)}
          </div>
          <div class="spec-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/></svg>
            ${car.fuel}
          </div>
          <div class="spec-item">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            ${car.transmission}
          </div>
        </div>
        <div class="car-footer">
          <div class="car-price">${formatKES(car.price)}<small>Negotiable</small></div>
          <div style="display:flex;gap:6px;align-items:center;">
            <a href="https://wa.me/254700000000?text=${waMsg}" target="_blank" rel="noopener"
               class="view-btn" title="WhatsApp enquiry"
               style="border-color:rgba(37,211,102,0.35);color:#25D366;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="${link}?id=${car.id}" class="view-btn" title="View details">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>`;
}

// =================== BATCH RENDER ===================
// Builds all HTML at once with .join('') then writes innerHTML exactly once.
// This is dramatically faster than appending cards one at a time.
function renderCars(cars, containerId, link = 'car-detail.html') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = cars.map(c => renderCarCard(c, link)).join('');
  setTimeout(() => {
    initReveal();
    markFavs();
    initCardInteractions();
  }, 50);
}

// =================== FAVOURITES (localStorage) ===================
function getFavs() {
  try { return JSON.parse(localStorage.getItem('dm_favs') || '[]'); }
  catch { return []; }
}
function saveFavs(favs) {
  try { localStorage.setItem('dm_favs', JSON.stringify(favs)); } catch {}
}

function toggleFav(btn, id) {
  let favs = getFavs();
  const saved = favs.includes(id);
  if (saved) {
    favs = favs.filter(f => f !== id);
    btn.classList.remove('faved');
    btn.textContent = '♡';
    showToast('Removed from saved vehicles');
  } else {
    favs.push(id);
    btn.classList.add('faved');
    btn.textContent = '♥';
    showToast('Saved to your favourites');
  }
  saveFavs(favs);
}

// Re-applies saved hearts after every render — no state ever lost on refresh
function markFavs() {
  const favs = getFavs();
  document.querySelectorAll('.car-fav[data-fav-id]').forEach(btn => {
    const id = Number(btn.dataset.favId);
    const isSaved = favs.includes(id);
    btn.classList.toggle('faved', isSaved);
    btn.textContent = isSaved ? '♥' : '♡';
  });
}

// =================== CARD INTERACTIONS ===================
function initCardInteractions() {
  document.querySelectorAll('.car-card').forEach(card => {
    // 3D tilt on hover — gives a premium physical feel
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rX = (y / r.height - 0.5) * -7;
      const rY = (x / r.width  - 0.5) *  7;
      card.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // Fav buttons — clone-replace trick removes any stale listeners before attaching fresh ones
  document.querySelectorAll('.car-fav[data-fav-id]').forEach(btn => {
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(fresh, Number(fresh.dataset.favId));
    });
  });
}

// =================== TOAST ===================
function showToast(msg) {
  let toast = document.getElementById('dm-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dm-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// =================== CUSTOM CURSOR ===================
function initCursor() {
  // Only activate on true pointer devices — preserves mobile usability
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor   = document.createElement('div'); cursor.className = 'cursor';
  const follower = document.createElement('div'); follower.className = 'cursor-follower';
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });
  (function loop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(loop);
  })();

  // Single delegated listener for the entire document — O(1) memory regardless of card count
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .car-card, .filter-chip')) {
      cursor.style.width = follower.style.height = '20px';
      cursor.style.height = follower.style.width = '50px';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .car-card, .filter-chip')) {
      cursor.style.width = cursor.style.height = '12px';
      follower.style.width = follower.style.height = '36px';
    }
  });
}

// =================== NAVBAR ===================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function updateNavbar() {
    if (navbar.classList.contains('on-dark')) {
      // Hero pages: transparent on top, solid when scrolled
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    } else {
      // Light pages: always solid
      navbar.classList.add('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click',   () => mobileNav.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('open'))
    );
  }
}

// =================== SCROLL REVEAL ===================
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// =================== COUNTER ANIMATION ===================
function animateCounter(el, target, suffix = '') {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1800, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.count), e.target.dataset.suffix || '');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// =================== MODAL ===================
function initModal() {
  const overlay = document.getElementById('enquiryModal');
  if (!overlay) return;
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('open'); });
  document.querySelectorAll('[data-modal="enquiry"]').forEach(btn =>
    btn.addEventListener('click', () => overlay.classList.add('open'))
  );
}

// =================== FORMS ===================
function initForms() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Sent!';
        showToast("Enquiry sent! We'll be in touch shortly.");
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          form.reset();
          form.closest('.modal-overlay')?.classList.remove('open');
        }, 2000);
      }, 1500);
    });
  });
}

// =================== BOOT ===================
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initReveal();
  initCounters();
  initModal();
  initForms();
});

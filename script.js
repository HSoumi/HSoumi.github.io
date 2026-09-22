const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const setTheme = (theme, persist = true) => {
  const isLight = theme === 'light';

  document.body.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(isLight));
  themeToggle?.setAttribute(
    'aria-label',
    isLight ? 'Switch to dark mode' : 'Switch to light mode'
  );

  if (themeIcon) {
    themeIcon.textContent = isLight ? '◐' : '☼';
  }

  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', isLight ? '#f5f8fc' : '#080d18');
  }

  if (persist) {
    localStorage.setItem('portfolio-theme', theme);
  }
};

const savedTheme = localStorage.getItem('portfolio-theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'), false);

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();


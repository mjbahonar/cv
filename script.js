document.getElementById('year').textContent = new Date().getFullYear();
const themeToggle = document.querySelector('.theme-toggle');
if (localStorage.getItem('cv-theme') === 'light') document.body.classList.add('light-theme');
const syncTheme = () => { const light = document.body.classList.contains('light-theme'); themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme'); themeToggle.querySelector('span').textContent = light ? '◐' : '☼'; };
syncTheme();
themeToggle.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('cv-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); syncTheme(); });

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a')];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}` || (visible.target.id === 'resume' && link.getAttribute('href') === '#top')));
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .6] });
sections.forEach((section) => observer.observe(section));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const setMenuState = (open) => {
  nav?.classList.toggle('open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
};

toggle?.addEventListener('click', () => {
  setMenuState(!nav?.classList.contains('open'));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuState(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

const revealTargets = document.querySelectorAll(
  '.statement-grid > *, .traits, .album-stage, .album-copy > *, .rooms-heading > *, .room-card, .language-panel > *, .philosophy-section > *, .project-heading > *, .facts > div'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));

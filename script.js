const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const modal = document.getElementById('philosophy-modal');
document.querySelector('[data-modal-open]')?.addEventListener('click', () => modal.showModal());
document.querySelector('[data-modal-close]')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', e => {
  if (e.target === modal) modal.close();
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

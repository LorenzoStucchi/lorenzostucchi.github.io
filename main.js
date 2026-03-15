// Scroll reveal
const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('up'); obs.unobserve(e.target); }
});
}, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
el.style.transitionDelay = (i % 5 * .07) + 's';
obs.observe(el);
});

// Skill bars
const barObs = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.sk-bar').forEach(b => {
    const w = b.dataset.w + '%';
    setTimeout(() => { b.style.transition = 'width .85s cubic-bezier(.4,0,.2,1)'; b.style.width = w; }, 120);
    });
    barObs.unobserve(e.target);
});
}, { threshold: 0.2 });
document.querySelectorAll('.sk-group').forEach(g => barObs.observe(g));

// Active nav scroll spy
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
sections.forEach(s => {
new IntersectionObserver(entries => {
    entries.forEach(e => {
    if (e.isIntersecting)
        navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
}, { rootMargin: '-40% 0px -55% 0px' }).observe(s);
});
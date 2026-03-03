document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar scroll compact
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            nav.style.padding = '14px 0';
        } else {
            nav.style.padding = '20px 0';
        }
    });
});

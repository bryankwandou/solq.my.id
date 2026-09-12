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

    const root = document.documentElement;
    const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } };

    // ── Theme toggle ──
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        store('solq-theme', next);
    });

    // ── Language toggle ──
    const dict = window.SOLQ_I18N || {};
    const langBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    function applyLang(lang) {
        const t = dict[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = t[el.getAttribute('data-i18n')];
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const v = t[el.getAttribute('data-i18n-html')];
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const v = t[el.getAttribute('data-i18n-aria')];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });

        if (t['meta.title']) document.title = t['meta.title'];
        const desc = document.querySelector('meta[name="description"]');
        if (desc && t['meta.description']) desc.setAttribute('content', t['meta.description']);

        root.setAttribute('lang', lang);
        langLabel.textContent = lang === 'id' ? 'ID' : 'EN';
    }

    langBtn.addEventListener('click', () => {
        const next = root.getAttribute('lang') === 'id' ? 'en' : 'id';
        applyLang(next);
        store('solq-lang', next);
    });

    applyLang(root.getAttribute('lang') === 'id' ? 'id' : 'en');
});

// ── Mobile Nav Toggle ──────────────────────────────────────
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
    const setOpen = (open) => {
        menu.classList.toggle('active', open);
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', open);
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!menu.classList.contains('active'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    // Close after choosing a link on mobile
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) setOpen(false);
        });
    });
}

// ── Mobile Nav Toggle ──────────────────────────────────────
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Mobile dropdown — tap to expand
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            }
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        }
    });

    // Close on link click (non-dropdown)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && !link.parentElement.classList.contains('dropdown')) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    });
}

// ── Publication Filter ──────────────────────────────────────
document.querySelectorAll('.pub-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.pubFilter;
        document.querySelectorAll('.pub-item').forEach(item => {
            item.style.display = (filter === 'all' || item.dataset.pubCat.includes(filter)) ? '' : 'none';
        });
    });
});

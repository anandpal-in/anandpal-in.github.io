// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('open');
            toggle.classList.remove('active');
        }
    });
}

// Publication filter
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

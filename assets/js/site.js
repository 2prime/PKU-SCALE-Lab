(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const search = document.querySelector('[data-publication-search]');
  const filters = [...document.querySelectorAll('[data-publication-filter]')];
  const papers = [...document.querySelectorAll('[data-paper]')];
  const empty = document.querySelector('[data-publication-empty]');
  let activeFilter = 'all';

  const applyFilters = () => {
    if (!papers.length) return;
    const query = search ? search.value.trim().toLowerCase() : '';
    let visible = 0;
    papers.forEach((paper) => {
      const categories = (paper.dataset.category || '').split(' ');
      const categoryMatch = activeFilter === 'all' || categories.includes(activeFilter);
      const textMatch = !query || paper.textContent.toLowerCase().includes(query);
      const show = categoryMatch && textMatch;
      paper.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.publicationFilter;
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFilters();
    });
  });
  if (search) search.addEventListener('input', applyFilters);
})();


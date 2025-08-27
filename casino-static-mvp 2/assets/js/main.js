
// Simple table sort
document.addEventListener('click', (e) => {
  const btn = e.target.closest('th button[data-sort]') || e.target.closest('th button');
  if (!btn) return;
  const th = btn.parentElement;
  const table = th.closest('table');
  const tbody = table.querySelector('tbody');
  const colIndex = Array.from(th.parentElement.children).indexOf(th);
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const dir = btn.dataset.dir === 'asc' ? 'desc' : 'asc';
  btn.dataset.dir = dir;

  rows.sort((a, b) => {
    let av = a.children[colIndex].innerText.trim().toLowerCase();
    let bv = b.children[colIndex].innerText.trim().toLowerCase();
    if (!isNaN(parseFloat(av)) && !isNaN(parseFloat(bv))) {
      av = parseFloat(av); bv = parseFloat(bv);
    }
    if (av < bv) return dir === 'asc' ? -1 : 1;
    if (av > bv) return dir === 'asc' ? 1 : -1;
    return 0;
  });
  rows.forEach(r => tbody.appendChild(r));
});

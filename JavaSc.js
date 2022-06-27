
const f = document.getElementById('search');
const q = document.getElementById('query');

const site = 'https://b-ok.africa/s/';

function submitted(event) {
  event.preventDefault();
  const url = site + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
f.addEventListener('submit', submitted);


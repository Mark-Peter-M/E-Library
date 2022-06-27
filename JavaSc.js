<<<<<<< HEAD

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

=======
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
>>>>>>> 088b2077b0ca8cdc4b86c89625a46506233c4dd6

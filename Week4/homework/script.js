function openDossier(name) {
  var toast = document.getElementById('toast');
  toast.textContent = name + ' — Dossier opened';
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}

var navButtons = document.querySelectorAll('.nav-btn');
var cards = document.querySelectorAll('.card');

navButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    navButtons.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.dataset.filter;
    cards.forEach(function(card) {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'flex' : 'none';
    });
  });
});

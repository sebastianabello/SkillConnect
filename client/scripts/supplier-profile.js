// Estrella de la pagina de del perfil de los proveedores

const icono = document.getElementById('estrella');
const rating = document.getElementById('rating');

const estado = localStorage.getItem('estrellaEstado');
let puntaje = parseInt(localStorage.getItem('rating')) || 4;

rating.textContent = puntaje.toFixed(1);

if (estado === 'clicked') {
  icono.classList.add('clicked');
}

icono.addEventListener('click', function () {
  if (icono.classList.contains('clicked')) {
    icono.classList.remove('clicked');
    localStorage.setItem('estrellaEstado', 'unclicked');
    puntaje -= 1;
  } else {
    icono.classList.add('clicked');
    localStorage.setItem('estrellaEstado', 'clicked');
    puntaje += 1;
  }

  rating.textContent = puntaje.toFixed(1);

  localStorage.setItem('rating', puntaje.toString());
});

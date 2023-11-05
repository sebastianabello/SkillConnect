// Activar botenes slide de la pagina inicio (index)
function scrollCards(direction) {
    const container = document.querySelector('.contenedor__tarjeta');
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector('.tarjeta').clientWidth;
  
    container.scrollLeft = scrollLeft + (direction * cardWidth);
  }


// Filtros de la pagina de inicio (index)
const botonesRadio = document.querySelectorAll('input[name="categories"]');

botonesRadio.forEach((botonRadio) => {
  botonRadio.addEventListener('click', manejarFiltroCategoria);
});

function manejarFiltroCategoria() {
  const categoriaSeleccionada = document.querySelector('input[name="categories"]:checked').value;
  const contenedoresTarjeta = document.querySelectorAll('.card--container');

  contenedoresTarjeta.forEach((contenedorTarjeta) => {
    const categoria = contenedorTarjeta.getAttribute('data-category');

    if (categoria === categoriaSeleccionada || categoriaSeleccionada === 'todo') {
      contenedorTarjeta.style.display = 'block'; 
      categoriaSeleccionada.style.background = '#343759';
    } else {
      contenedorTarjeta.style.display = 'none'; 
      categoriaSeleccionada.style.background = 'initial';
    }
  });
}
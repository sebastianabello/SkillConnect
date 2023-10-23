function scrollCards(direction) {
    const container = document.querySelector('.contenedor__tarjeta');
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.querySelector('.tarjeta').clientWidth;
  
    container.scrollLeft = scrollLeft + (direction * cardWidth);
  }
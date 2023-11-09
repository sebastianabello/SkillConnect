const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
const postsContainer = document.getElementById('postsContainer');

// Mostrar las publicaciones en tarjetas
existingPosts.forEach(function (user0,index) {
  
  let postCard = document.createElement('article');
  postCard.innerHTML = `<article class="card--container">
    <header class="card-figures">
      <img class="card-profile-picture" src="${user0.img}">
      <button class="saved--icon save-button" data-index="${index}">
        <i class="fa-solid fa-bookmark aside-icon"></i>
      </button>
    </header>
    <footer class="card--description">
      <h3 class="card--user-name">${user0.serviceName}</h3>
      <span class="card--skill">${user0.descriptionName}</span>
      <p class="card--price">Precio ${user0.priceInfo}</p>
      <picture class="card--rate--button--container">
        <button id="avatar-perfil--button" type="">
          <i class="fa-solid fa-star"></i> 5.0
        </button>
        <button class="card--rate--button">Contactar</button>
      </picture>
    </footer>
  `;
  postsContainer.appendChild(postCard);
  
});

// Agrega un controlador de eventos para el botón de guardar
postsContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('save-button')) {
    const postIndexToSave = parseInt(event.target.getAttribute('data-index'), 10);
    saveCard(postIndexToSave);
  }
});

// Función para guardar una tarjeta
function saveCard(index) {
  const postToSave = existingPosts[index];
  if (postToSave) {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || [];
    savedPosts.push(postToSave);
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
  }
}
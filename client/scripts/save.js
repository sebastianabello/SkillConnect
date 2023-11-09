			// Obtén las tarjetas guardadas desde LocalStorage
			const savedCards = JSON.parse(localStorage.getItem("savedPosts")) || [];
			const savedCardsContainer = document.getElementById("savedCardsContainer");
	
			// Función para mostrar las tarjetas guardadas
			function renderSavedCards() {
				savedCardsContainer.innerHTML = ""; // Borra el contenido actual
	
				savedCards.forEach(function (user, index) {
					const savedCardElement = document.createElement("article");
					savedCardElement.className = "card--container";
					savedCardElement.innerHTML = `
                    <header class="card-figures">
                    <img class="card-profile-picture" src="${user.img}">
                    <button class="saved--icon" data-index="${index}">
                      <i class="fa-solid fa-bookmark aside-icon"></i>
                    </button>
                  </header>
                  <footer class="card--description">
                    <h3 class="card--user-name">${user.serviceName}</h3>
                    <span class="card--skill">${user.descriptionName}</span>
                    <p class="card--price">Precio ${user.priceInfo}</p>
                    <picture class="card--rate--button--container">
                      <button id="avatar-perfil--button" type="">
                        <i class="fa-solid fa-star"></i> 5.0
                      </button>
                      <button class="card--rate--button">Contactar</button>
                    </picture>
                  </footer>
                `;
	
					// Agrega un controlador de eventos para el botón de eliminación
					const removeButton = document.createElement("button");
					removeButton.className = "remove-button";
					removeButton.setAttribute("data-index", index);
					removeButton.innerHTML = `<button class="card--rate--button">X</button>`;
					removeButton.addEventListener("click", function() {
						removeSavedCard(index);
					});
					savedCardElement.querySelector(".card--description").appendChild(removeButton);
	
					savedCardsContainer.appendChild(savedCardElement);
				});
			}
	
			// Agrega un controlador de eventos para el botón de eliminación
			savedCardsContainer.addEventListener("click", function(event) {
				if (event.target.classList.contains("remove-button")) {
					var cardIndexToRemove = parseInt(event.target.getAttribute("data-index"), 10);
					removeSavedCard(cardIndexToRemove);
				}
			});
	
			// Función para eliminar una tarjeta guardada
			function removeSavedCard(index) {
				savedCards.splice(index, 1); // Elimina la tarjeta guardada en el índice dado
				localStorage.setItem("savedPosts", JSON.stringify(savedCards)); // Actualiza LocalStorage
				renderSavedCards(); // Vuelve a mostrar las tarjetas guardadas
			}
	
			// Mostrar las tarjetas guardadas
			renderSavedCards();
// En otras páginas restringidas 

// Comprueba si el usuario ha iniciado sesión
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  // Si el usuario no ha iniciado sesión, redirige al usuario a la página de inicio de sesión
  window.location.href = "../client/views/login.html";
}

const $logout = document.querySelector(`#logout`)
$logout.addEventListener(`click`, () =>{
    alert(`Hasta pronto!`)
    localStorage.removeItem(`login_success`)
    window.location.href = `./client/views/login.html`
} )

//sale de la pagina
const $logout = document.querySelector(`#logout`);
$logout.addEventListener(`click`, () => {
    alert(`Hasta pronto!`);
    localStorage.removeItem('jwtToken');
    window.location.href = `./views/login.html`;
});


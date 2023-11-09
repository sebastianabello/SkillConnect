const $logout = document.querySelector(`#logout`)
$logout.addEventListener(`click`, () =>{
    alert(`Hasta pronto!`)
    localStorage.removeItem(`login_success`)
    window.location.href = `login.html`
} )
//Creacion de usuario
const $signupForm = document.querySelector('#signupForm');
$signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const $name = document.querySelector(`#name`).value
    const $email = document.querySelector(`#email`).value
    const $password = document.querySelector(`#password`).value

    const $Users = JSON.parse(localStorage.getItem(`users`)) || []
    const isUserRegister = $Users.find(user => user.$email === $email)
    if(isUserRegister){
        return alert(`Usted ya se encuentra registrado.`)
    }

    $Users.push({$name, $email, $password})
    localStorage.setItem(`users`, JSON.stringify($Users))
    alert(`¡Registro Exitoso!`)

    //redireccion al Login
    window.location.href = `../views/login.html`

})



// const $signupEmail = document.querySelector('#signup-email');
// const $signupPassword = document.querySelector('#signup-password');
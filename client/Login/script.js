document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si el usuario ha iniciado sesión
    if (!localStorage.getItem("loggedIn")) {
        // El usuario no ha iniciado sesión, redirigir al inicio de sesión
        window.location.href = "login.html";
    } else {
        // El usuario ha iniciado sesión, cargar el contenido de la plataforma
        cargarContenidoDePlataforma();
    }
    
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Realizar la autenticación aquí
        // Verificar credenciales y redirigir si es exitoso
        const storedUserData = JSON.parse(localStorage.getItem("userData"));

        if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
            // Credenciales válidas, permitir el acceso
            localStorage.setItem("loggedIn", "true");
            window.location.href = "index.html";
        } else {
            // Credenciales inválidas, mostrar un mensaje de error
            alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
        }
    });

    // Agregar lógica para redirigir al formulario de registro
    const goToRegisterButton = document.getElementById("goToRegister");
    goToRegisterButton.addEventListener("click", function() {
        window.location.href = "registro.html";
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        // Guardar los datos de registro en localStorage
        const userData = {
            username: newUsername,
            password: newPassword
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        // Redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de registro exitoso
        alert("Registro exitoso. Por favor, inicie sesión.");
        window.location.href = "login.html";
    });

    function cargarContenidoDePlataforma() {
        // Aquí puedes cargar el contenido de las páginas protegidas
        // Por ejemplo:
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "<h3>Bienvenido a la Plataforma Web</h3>";
    }
});

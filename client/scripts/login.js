// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("loginForm");
//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;

//         fetch("http://localhost:8080/api/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password }),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Error en la solicitud al servidor.");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Aquí puedes manejar la respuesta del servidor
//                 if (data.token) {
//                     alert("Inicio de sesión exitoso");
//                     window.location.href = `../index.html`;
//                 } else {
//                     alert("Error en el inicio de sesión. Verifica tus credenciales.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error en la solicitud:", error);
//                 alert("Error en la solicitud al servidor.");
//             });
//     });
// });


// Obtiene una referencia al formulario de inicio de sesión
const loginForm = document.getElementById("loginForm");

// Agrega un evento de escucha para el envío del formulario
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Comprueba si el usuario existe en el localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.username === username && userData.password === password) {
    // Inicio de sesión exitoso, marca al usuario como autenticado en el localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Agrega un console.log para verificar que se ha llegado a este punto
    console.log("Redirigiendo al usuario a la página de inicio...");

    // Redirige al usuario a la página de inicio
    window.location.href = "../../index.html";
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
});





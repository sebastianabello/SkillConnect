// document.addEventListener("DOMContentLoaded", function () {
//     const registerForm = document.getElementById("registerForm");
//     registerForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const username = document.getElementById("username").value;
//         const password = document.getElementById("password").value;
//         const firstname = document.getElementById("firstname").value;
//         const lastname = document.getElementById("lastname").value;
//         const country = document.getElementById("country").value;

//         fetch("http://localhost:8080/api/auth/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password, firstname, lastname, country }),
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
//                     // Redirige al usuario o realiza otras acciones
//                     alert("Registro exitoso");
//                     window.location.href = `../views/login.html`;
//                 } else {
//                     alert("Error en el registro. Verifica tus datos.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error en la solicitud:", error);
//                 alert("Error en la solicitud al servidor.");
//             });
//     });
// });



//Creacion de usuario
// Obtén una referencia al formulario de registro
const registerForm = document.getElementById("registerForm");

// Agrega un evento de escucha para el envío del formulario
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario por defecto

  // Obtiene los valores de los campos del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const country = document.getElementById("country").value;

  // Crea un objeto de usuario con los valores del formulario
  const user = {
    username,
    password,
    firstname,
    lastname,
    country,
  };

  // Guarda el objeto de usuario en el localStorage
  localStorage.setItem("userData", JSON.stringify(user));

  // Redirige o realiza otras acciones necesarias después del registro
  // Por ejemplo, puedes redirigir al usuario a una página de inicio de sesión.
  window.location.href = "./login.html";
});
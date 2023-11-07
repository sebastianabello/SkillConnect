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

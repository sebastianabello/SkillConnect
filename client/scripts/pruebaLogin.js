document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    // Agregar eventos para cambiar entre formularios
    loginLink.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });

    registerLink.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });

    // Agregar evento para el envío de formulario de inicio de sesión
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Agregar lógica de inicio de sesión aquí
    });

    // Agregar evento para el envío de formulario de registro
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Agregar lógica de registro aquí
    });
  });
// Animacion en la pagina de planes:
document.addEventListener("DOMContentLoaded", function () {
    const tablas = document.querySelectorAll(".tabla");

    tablas.forEach((tabla) => {
        tabla.addEventListener("click", () => {
            tabla.classList.toggle("flip");
        });
    });
});
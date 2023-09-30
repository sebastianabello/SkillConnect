// Personalización de los botones: mostrar y ocultar, que estan en la seccion de ayuda.

function mostrarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    formulario.style.display = "block";
}

function ocultarFormulario() {
    let formulario = document.getElementById("hiddenForm");

    formulario.style.display = "none";
}
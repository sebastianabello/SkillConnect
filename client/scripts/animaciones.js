

// Función para mostrar y ocultar los formularios del perfil
function mostrarFormularioHelpCenter(indice) {
    const formulariosHelpCenter = document.querySelectorAll('.container__card form');
    
    formulariosHelpCenter.forEach((formulario) => {
        formulario.style.display = 'block';
    });
    
    const formularioAMostrarHelpCenter = document.getElementById(`OcultarForm${indice}`);
    
    if (formularioAMostrarHelpCenter) {
        formularioAMostrarHelpCenter.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarFormularioHelpCenter(1);
});

// Animacion en la pagina de planes:

document.addEventListener("DOMContentLoaded", function () {
    const tablas = document.querySelectorAll(".tabla");

    tablas.forEach((tabla) => {
        tabla.addEventListener("click", () => {
            tabla.classList.toggle("flip");
        });
    });
});


// Personalización de los botones: mostrar y ocultar, que estan en la seccion de ayuda.
function mostrarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    let ocultarDescription = document.querySelector(".help__description");
    
    if (formulario) {
        formulario.style.display = "block";
        ocultarDescription.style.display = "none"; 
    } else {
        console.error("hidden form no existe.");
    }
}

function ocultarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    let ocultarDescription= document.querySelector(".help__description");
    
    if (formulario) {
        formulario.style.display = "none";
        ocultarDescription.style.display = "flex";
    } else {
        console.error("hiddenForm no exite.");
    }
}

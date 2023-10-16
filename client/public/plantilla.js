

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



/***
 * New Design
 */

const sideLinks = document.querySelectorAll('.sidebar .side-menu li card__add');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.header nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.header nav ');
const searchBtnIcon = document.querySelector('.header nav ');
const searchForm = document.querySelector('.header nav ');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
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

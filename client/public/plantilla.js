// Personalización de los botones: mostrar y ocultar, que estan en la seccion de ayuda.

function mostrarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    formulario.style.display = "block";
}

function ocultarFormulario() {
    let formulario = document.getElementById("hiddenForm");

    formulario.style.display = "none";
}

// Función para mostrar y ocultar los formularios del perfil
function mostrarFormulario(indice) {
    const formularios = document.querySelectorAll('.container__card form');
    formularios.forEach((formulario) => {
        formulario.style.display = 'none';
    });
    const formularioAMostrar = document.getElementById(`hiddenForm${indice}`);
    formularioAMostrar.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarFormulario(1);
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

/*
function saveCard() {
    document.getElementById('btn').style.backgroundColor = "#ff9c7eca";
}
*/
const saveButton = document.querySelectorAll('.btn'); 
saveButton.forEach(btn => {
   btn.addEventListener('click', function onClick(){
    btn.style.backgroundColor = '#ff9c7eca'; 
 })
})

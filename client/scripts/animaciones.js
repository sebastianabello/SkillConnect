

// Función para mostrar y ocultar los formularios del perfil
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link__card');
    const forms = document.querySelectorAll('.form__container');

    function hideAllForms() {
        forms.forEach(form => {
            form.style.display = 'none';
        });
    }

    hideAllForms();
    forms[0].style.display = 'block';

    links.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            hideAllForms();
            forms[index].style.display = 'block';
        });
    });
});



// Input File - Perfil
let usersArray=[]
let idUpdate=0;
const profileImg = document.getElementById('imgProfile'), input = document.getElementById('fileInputProfile');
input.addEventListener("change", function() {
  profileImg.src = URL.createObjectURL(input.files[0]);
});


// Personalización de los botones: mostrar y ocultar, que estan en la seccion de ayuda.
function mostrarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    // let ocultarDescription = document.querySelector(".help__description");
    
    if (formulario) {
        formulario.style.display = "block";
        ocultarDescription.style.display = "none"; 
    } else {
        console.error("hidden form no existe.");
    }
}

function ocultarFormulario() {
    let formulario = document.getElementById("hiddenForm");
    let ocultarDescription = document.querySelector(".help__description");
    
    if (formulario && ocultarDescription) {
        formulario.style.display = "none";
        ocultarDescription.style.display = "flex";
    } else {
        console.error("hiddenForm or help__description does not exist.");
    }
}

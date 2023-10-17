//  Formularios del Perfil
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formPersonalInfo").style.display = "block";
  document.getElementById("formEditProfile").style.display = "none";
  document.getElementById("formNotifications").style.display = "none";

});

function mostrarFormularioHelpCenter(formulario) {
  document.getElementById("formPersonalInfo").style.display = "none";
  document.getElementById("formEditProfile").style.display = "none";
  document.getElementById("formNotifications").style.display = "none";

  if (formulario === 1) {
    document.getElementById("formPersonalInfo").style.display = "block";
  } else if (formulario === 2) {
    document.getElementById("formEditProfile").style.display = "block";
  } else if (formulario === 3) {
    document.getElementById("formNotifications").style.display = "block";
  }
}
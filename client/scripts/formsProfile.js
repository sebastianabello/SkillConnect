function mostrarFormularioHelpCenter(formulario) {
    // Oculta todos los formularios al principio
    document.getElementById("formPersonalInfo").style.display = "none";
    document.getElementById("formEditProfile").style.display = "none";
    document.getElementById("formNotifications").style.display = "none";

    // Muestra el formulario correspondiente
    if (formulario === 1) {
      document.getElementById("formPersonalInfo").style.display = "block";
    } else if (formulario === 2) {
      document.getElementById("formEditProfile").style.display = "block";
    } else if (formulario === 3) {
      document.getElementById("formNotifications").style.display = "block";
    }
  }
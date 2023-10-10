/*

cnst names = [];
const prices = [];
const occupations = [];
const rates = [];
const cards = document.querySelectorAll(".card--container");

// Recorrer todas las tarjetas y actualizar la información
cards.forEach((card, index) => {
  const name = names[alert('nname??????')];

//Selecciono tarjeta
  const cardName = card.querySelector(".card--user-name");
  const cardPrice = card.querySelector(".card--price");
  const cardSkill = card.querySelector(".card--skill");
  const cardRate = card.querySelector(".card--rate--button");

  cardName.textContent = name;
  cardPrice.textContent = `Price ${price}`;
  cardSkill.textContent = occupation;
  cardRate.textContent = `Rating ${rate}`;
});

//Creo plantilla
class Persona{  //Para meterle parametros a una clase uso el consutrctor, toda clase necesita un constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.saludar = function(){
            //console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años")
    }
   /*saludar(){
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años") 
   }
  
} 

//insto la nueva persona
let pepito = new Persona("Pepito", 30);
let pepa = new Persona("Pepa", 29);
let pepe = new Persona("Pepe", 28);
let pepi = new Persona("Pepi", 27);
let pepo = new Persona("Pepo", 26);
let pepu = new Persona("Pepu", 25);

pepito.saludar();
*/

/*Random information because we don't users yet xd*/

/***
 * Api randomUser
 * https://randomuser.me. */




 
const ProfileCard = (() => {
  const profile = document.querySelector('.card-profile-picture');
  const name = document.querySelector('.card--user-name');
  


  return {
      setData: (data) => {
          let fullname = `${data.name.first} ${data.name.last}`;
          profile.src = data.picture.large;
          name.textContent = fullname;
          /*
          description.textContent = `Hello, I am ${fullname} from ${origin}. To learn more about me, my username is` +
          `${data.login.username}. Feel free to email me at ${data.email} !`;
*/
      }
  }
})();

fetch('https://randomuser.me/api/?results=1'); //Fecth al website
then((response) => resp.json()) // Entonces, mi parametro va a ser response, que va a ser un objeto json, espero respuesta then
then((data)=>{
 ProfileCard.setData(data.results[0]);//Function with queryselectors would be Profile card
});



function showIcon() {
  let buttonBurger = document.getElementById("bx-menu");
  formulario.style.display = "block";
}

function hideIcon() {
  let buttonBurger = document.getElementById("bx-menu");

  formulario.style.display = "none";
}

// Función para mostrar y ocultar los formularios del perfil
function showIcon(indice) {
  const formularios = document.querySelectorAll('.header .header__nav');
  formularios.forEach((formulario) => {
      formulario.style.display = 'none';
  });
  const formularioAMostrar = document.getElementById(`hiddenForm${indice}`);
  formularioAMostrar.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  mostrarFormulario(1);
});
const names = ["Juan Perez", "Maria Lopez", "Pedro Ramirez", "Ana Martinez", "Carlos Rodriguez"];
const prices = ["$200.50", "$350.80", "$420.25", "$275.60", "$500.00"];
const occupations = ["Artist", "Web Developer", "Chef", "Photographer", "Teacher"];
const rates = ["4.1", "4.5", "4.7", "4.3", "4.9"];
const cards = document.querySelectorAll(".card--container");

// Recorrer todas las tarjetas y actualizar la información
cards.forEach((card, index) => {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const rate = rates[Math.floor(Math.random() * rates.length)];
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
            console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años")
    }
   /*saludar(){
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años") */
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

let usersArray=[]
let idUpdate=0;
const profileImg = document.getElementById('addImg'), input = document.getElementById('add-service-img');
input.addEventListener("change", function() {
  profileImg.src = URL.createObjectURL(input.files[0]);
});
function addInfoForm(){
const addInfoService = document.getElementById('inputCategory').value;
const addDescription  = document.getElementById('serviceName').value;
const addInfoPrice = document.getElementById('servicePrice').value;
const addInfoPortFolio = document.getElementById('serviceDescription').value;
const list = document.getElementById('list');



//Instanciando re duro el array
let usersArray= [ // Uso los brackets por que para el for each tiene que ser solo con arrays
     {
     id:idUpdate++, //Si no lo incio en 0 no incrementa xD
     serviceName: addInfoService,
     descriptionName: addDescription,
     priceInfo: addInfoPrice,
     portfolioInfo: addInfoPortFolio,
     img: profileImg.src,
    
     },


     
] // Sigue siendo array que contiene dos objetos los cuales van a recibir strings

console.log(usersArray)

let listUsers =[];
//Init function
   usersArray.forEach((user, key)=>{
   let newInfo = document.createElement('article');
   newInfo.innerHTML = `<article class="card--container">
   <header class="card-figures">
   <img class="card-profile-picture" src="${user.img}">
     <button class="saved--icon">
       <i class="fa-solid fa-bookmark aside-icon"></i>
     </button>
   </header>
   <footer class="card--description">
     <h3 class="card--user-name">${user.serviceName}</h3>
     <span class="card--skill"> ${user.descriptionName}</span>
     <p class="card--price">Precio ${user.priceInfo}</p>
     <picture class="card--rate--button--container">
       <button id="avatar-perfil--button" type="">
         <i class="fa-solid fa-star"></i> 5.0
       </button>
       <button class="card--rate--button">Contactar</button>
     </picture>
   </footer>
 </article>`;
  list.appendChild(newInfo);
        
});
const jsonButton = document.getElementById('btn');
jsonButton.addEventListener('click', function() {
  const key = 0; 
  if (listUsers[key] == null) {// Si no existe crea una copia en
    listUsers[key] = JSON.parse(JSON.stringify(usersArray[key]));//usersArray
    listUsers[key].quantity = +1;
    console.log(`Json ? ${listUsers.length}`);
  }

});
}
new MultiSelectTag('inputCategory')
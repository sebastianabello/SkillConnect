

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
const currentTheme = localStorage.getItem("theme"); //Theme is my key name, can be any value, is not the same as below because in this one i'm not saying the value that i want save i'm asumming the value with a conditional to verify if the state is active or not, getItem is a localStorage method
if (currentTheme) {    
    if (currentTheme === "dark") { // if currentThem has some value it means that the user has checked the option meaning that can be storage in the localStorage XD
        document.body.classList.add('dark');
        toggler.checked = true;
    }
}
toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
        localStorage.setItem("theme", "dark"); // LocalStorage will find the theme Item instead of using the simple value document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem("theme", "light"); 
    }
});



/*
const toggler = document.getElementById('theme-toggle');
localStorage.setItem("changeTheme",(toggler) ); // Save in localstorage
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

/*

const saveButton = document.querySelectorAll('.saved--icon');


const saveButton = document.querySelectorAll('.saved--icon'); 
saveButton.forEach(btn => {
   btn.addEventListener('click', function onClick(){
    const backgroundColor = btn.style.backgroundColor;

    if (backgroundColor === '#ff9c7eca') {
      btn.style.backgroundColor = '#ff5722';
    } else {
      btn.style.backgroundColor ='#ff9c7eca';
    }
    
 })
});
*/
/**I can use the add and remove as the change aspect property Js before  */
const saveButton = document.querySelectorAll('.saved--icon');
saveButton.forEach(btn => {
    btn.addEventListener('click', function onClick(){
       
        if (btn.classList.contains('saved--icon--selected')) {
            btn.classList.remove('saved--icon--selected');
            btn.classList.add('saved--icon');
          } else {
            btn.classList.remove('saved--icon');
            btn.classList.add('saved--icon--selected');
          }
        })   
})



const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMovile = document.querySelector('.menu');
const menuHamburger = document.querySelector('.mobile-menu');
//Variable Carrito de compras
const carIcon = document.querySelector('.navbar-shopping-cart'); //Icono del carrito
const asideCar = document.querySelector('.product-detail');

menuEmail.addEventListener('click', togglemenu);
menuMovile.addEventListener('click', toggleMenuMovile);
carIcon.addEventListener('click', toggleAsideCar); //Evento para llamar a la funcion que activa el Aside

function togglemenu(){
  menuDesktop.classList.toggle('inactive');

}

function toggleMenuMovile(){
  menuHamburger.classList.toggle('inactive');
}

//funcion para acticvar y desctivar el Aside
function toggleAsideCar() {
  asideCar.classList.toggle('inactive');
}
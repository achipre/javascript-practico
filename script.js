const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', togglemenu);

function togglemenu(){
  menuDesktop.classList.toggle('inactive');
}
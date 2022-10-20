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

//seleccionar el Card container para ingreaserle los productos por JS
const  cardContainer = document.querySelector('.cards-container');

function togglemenu(){
  menuDesktop.classList.toggle('inactive');
  asideCar.classList.add('inactive');

}

function toggleMenuMovile(){
  menuHamburger.classList.toggle('inactive');
  asideCar.classList.add('inactive');
}

//funcion para acticvar y desctivar el Aside
function toggleAsideCar() {
  asideCar.classList.toggle('inactive');
  menuHamburger.classList.add('inactive');
  menuDesktop.classList.add('inactive');
}
// Traer produto de la pagina por JS
const produtList = [];
produtList.push({
  name: 'Bike',
  precio: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtList.push({
  name: 'Pelota',
  precio: 10,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtList.push({
  name: 'TV',
  precio: 250,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtList.push({
  name: 'PC',
  precio: 500,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produtList.push({
  name: 'PlayStation 4',
  precio: 300,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//   <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="produc-card">
//     <div class="product-info">
//       <div>
//         <p>$120,00</p>
//         <p>bike</p>
//       </div>
//       <figure>
//         <img src="https://raw.githubusercontent.com/platzi/curso-frontend-developer-practico/4774124de4c723d46d6a22da4c93c03f7be9e7bd/icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>

function renderizarProducts(arr){
    for (product of arr) {
      //constante para agregar la imagen del producto con el atributo src del arrive
      const productImg = document.createElement('img') //63
      productImg.setAttribute('src', product.imagen) //63
      //contante para crear el div .produt card
      const productCard = document.createElement('div') //62
      productCard.classList.add('product-card') //64 la clase
      
      //constante para crear el <p> con el precio del producto
      const productPrice = document.createElement('p') //66
      productPrice.innerText = '$' + product.precio; //66
      
      //constante para crear el <p> con el nombre del procuto que sale del Array
      const productName = document.createElement('p') //67
      productName.innerText = product.name; //67
      
      //constante para crear el div que le sigue al div con clase produt info
      const productInfoDiv = document.createElement('div') //65
      
      const productImgCart = document.createElement('img'); //70
      productImgCart.setAttribute('src', 'https://raw.githubusercontent.com/platzi/curso-frontend-developer-practico/4774124de4c723d46d6a22da4c93c03f7be9e7bd/icons/bt_add_to_cart.svg')
      
      const productInfoFigure = document.createElement('figure')//69
      //contante para crear el div .product-info
      
      const productInfo = document.createElement('div') //64
      productInfo.classList.add('product-info')
      
      
      productInfoFigure.append(productPrice, productImgCart)
      productInfoDiv.append(productPrice, productName)
      productInfo.append(productInfoDiv, productInfoFigure)
      productCard.append(productImg, productInfo)
      cardContainer.append(productCard)
      
      
      
      

}

}

renderizarProducts(produtList)
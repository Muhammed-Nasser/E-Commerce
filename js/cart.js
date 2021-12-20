
  function displayCart()
  {
      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);
      let productContainer = document.querySelector(".procuctsAll");
      let cartCost = localStorage.getItem('totalCost');
      let cartNamber = localStorage.getItem('cartNumbers');
      console.log(cartCost)
      if ( cartItems && productContainer ){
          productContainer.innerHTML = '';
          Object.values(cartItems).map( item => {
              productContainer.innerHTML += 
              `<div class="productAdd">
                  <i class="fas fa-window-close"></i>
                  <img src="./res/img/${item.tag}.png">
                  <span>${item.name}</span>
              </div>
              <div class="price">$${item.price},00</div>
              <div class="quantity">
                <i class="fas fa-plus-circle"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-minus-circle"></i>
              </div>
              <div class="total">$${item.inCart * item.price},00</div>`;
          });
          productContainer.innerHTML += `
              <div class="basketTotalContainer">
                  <h4 class="basketTotalTitle">
                  Subtotal (${cartNamber} items):
                  </h4>
                  <h4 class="basketTotal">
                      $${cartCost},00
                  </h4>
              </div>
          `;
      }
  }
  displayCart()
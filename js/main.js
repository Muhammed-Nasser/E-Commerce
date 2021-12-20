

//location
function goPosition() {

    var url = "http://maps.google.com/maps/"+ "place/Gleem+Bay/@31.2428335,29.9564149,17z/data=!3m1!4b1!4m5!3m4!1s0x14f5c57ba821e56d:0x133d5c82c18cd7!8m2!3d31.2428335!4d29.9586036" ;
    window.open(url,'_blank');
  }
  
  //add to cart
  
  let products=[
    {
      name:"product name 1",
      tag:"product01",
      price:10 ,
      inCart:0
    },
    {
      name:"product name 2",
      tag:"product02",
      price:20 ,
      inCart:0
    },
    {
      name:"product name 3",
      tag:"product03",
      price:30 ,
      inCart:0
    },
    {
      name:"product name 4",
      tag:"product04",
      price:40 ,
      inCart:0
    },
    {
      name:"product name 5",
      tag:"product05",
      price:50 ,
      inCart:0
    },
    {
      name:"product name 6",
      tag:"product06",
      price:60 ,
      inCart:0
    },
    {
      name:"product name 7",
      tag:"product07",
      price:70 ,
      inCart:0
    },
    {
      name:"product name 8",
      tag:"product08",
      price:80 ,
      inCart:0
    },
  ];
  
  let carts=document.querySelectorAll('.add-to-cart-btn')
  
  for (let i=0;i<carts.length; i++)
  {
    carts[i].addEventListener('click',()=>{ 
      cartNumbers(products[i]);
      totalCosts(products[i]);
    })
  }
  
  function onLoadCartNumbers1()
  {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers <1){
      var x= document.getElementById('basketNumber')
      x.remove();
    }
    else{
      document.getElementById('basket').appendChild(document.createElement("SPAN"));
      document.querySelector('.cart span').textContent= productNumbers;
    }
    // console.log("first")
  }
  function onLoadCartNumbers()
  {
      document.getElementById('basket').appendChild(document.createElement("SPAN"));
      document.querySelector('.cart span').textContent= productNumbers;
  }
  
  function cartNumbers(product){
    var h1 = document.getElementsByTagName("span")[0];   // Get the first <h1> element in the document
    var att = document.createAttribute("id");       // Create a "class" attribute
    att.value = "basketNumber";                           // Set the value of the class attribute
    h1.setAttributeNode(att);
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
  
    if( productNumbers ){
      localStorage.setItem('cartNumbers', productNumbers+1);
      document.querySelector('.cart span').textContent= productNumbers+1;
    }else {
      localStorage.setItem('cartNumbers',1);
      document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
  }
  
  function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
      if(cartItems[product.tag] == undefined){
        cartItems = {
          ...cartItems,
          [product.tag]:product
        }
      }
      cartItems[product.tag].inCart += 1;
    }else{
      product.inCart = 1
      cartItems= {
        [product.tag]: product
      }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
  }
  
  function totalCosts(product){
    let cartCost =localStorage.getItem('totalCost');
    if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost+ product.price)
    }else{
      localStorage.setItem("totalCost", product.price)
    }
  }
onLoadCartNumbers1()


function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function show(){
  document.getElementById("myUL").style.visibility = "visible;";
}

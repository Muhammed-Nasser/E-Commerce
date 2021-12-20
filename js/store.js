"use strict";
/*<<==========| PAGE-ELEMENTS |==========>>*/
const productGrid = document.querySelector(".products__grid");
const categoryListView = document.querySelector(".category__list");
const itemsGrid = document.getElementsByClassName("products__grid")[0];
/*<<==========| GLOBAL-VARIABLES |==========>>*/
// const productsList = [
//   {
//     imgSrc: "./res/img/product01.png",
//     category: "category 1",
//     name: "Laptop HP",
//     oldPrice: 200,
//     newPrice: 199,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product02.png",
//     category: "category 2",
//     name: "Headset 1",
//     oldPrice: 27,
//     newPrice: "",
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product03.png",
//     category: "category 1",
//     name: "Laptop Dell",
//     oldPrice: 201,
//     newPrice: 200,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product04.png",
//     category: "category 3",
//     name: "Tablet",
//     oldPrice: 33,
//     newPrice: 32.5,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product05.png",
//     category: "category 2",
//     name: "Headset 2",
//     oldPrice: 20,
//     newPrice: 18,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product06.png",
//     category: "category 1",
//     name: "Product 1",
//     oldPrice: 207,
//     newPrice: 205,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product07.png",
//     category: "category 4",
//     name: "Product 1",
//     oldPrice: 130,
//     newPrice: 129,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product08.png",
//     category: "category 1",
//     name: "Product 1",
//     oldPrice: "",
//     newPrice: 150,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
//   {
//     imgSrc: "./res/img/product09.png",
//     category: "category 5",
//     name: "Product 1",
//     oldPrice: 180,
//     newPrice: 170,
//     rating: "",
//     isNew: false,
//     wishlisted: false,
//   },
// ];
/*<----------------------->*/

const buildTemplate = (index, array = productsList) => {
  let template = `
  <div class="store__item">
  <img src=${array[index].imgSrc} alt="" />
  <p class="store__item_category">${array[index].category}</p>
  <p class="store__item_name">${array[index].name}</p>
  <p class="store__item_price">
    <span class="price-current">$${array[index].newPrice}</span>
    <span class="price-before">$${array[index].oldPrice}</span>
    </p>
    <div class="store__item__footer">
    <i class="far fa-heart"></i>
    <i class="fas fa-th-list"></i>
    <i class="fas fa-eye"></i>
  </div>
  </div>
  <div class="store__item__drop">
  <a class="btn">
  <i class="fas fa-cart-plus"></i>
  Add to cart</a
  >
  </div>
  
<!-- ======================== -->
<!-- item end -->

</div>
<!-- product container end ^ -->`;
  return template;
};

/*<<==========| GLOABAL-FUNCTIONS |==========>>*/
const clearChoice = () => {
  buildFullProducts(true);
  let checkboxes = [...document.querySelectorAll('input[type="radio"]')];
  checkboxes.forEach((element) => {
    console.log(element);
    element.checked = false;
  });
};
const gridItemsHandler = (e) => {
  if (e.target == itemsGrid) {
  } else {
    let itemContainer = e.target.closest(".store__item__container");
    let indexOfReq = itemContainer.dataset.itemIndex;
    sessionStorage.setItem("ItemKey", indexOfReq);
    console.dir(itemContainer.dataset.itemIndex);
    window.open("./product.html","_self");
  }
};
/*<<==========| HELPER-FUNCTIONS |==========>>*/
const filterResults = (categName) => {
  const specialCategoryList = productsList.filter(
    (productsList) => productsList.category === categName
  );
  let pageHTML = "";
  for (let i = 0; i < specialCategoryList.length; i++) {
    pageHTML +=
      '\n <div class="store__item__container">' +
      buildTemplate(i, specialCategoryList) +
      "</div>";
    productGrid.innerHTML = pageHTML;
  }
};

/*<<========================================>>*/

const buildCategoryList = () => {
  /** Build unique categries array */
  let categoryList = productsList.map((element) => {
    return element.category;
  });
  categoryList = categoryList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  /*----------------*/
  let fragment = new DocumentFragment();
  categoryList.forEach((categoryName, index) => {
    let choiceContainer = document.createElement("div");
    choiceContainer.classList.add("category__item");
    let choice = document.createElement("input");
    choice.type = "radio";
    // choice.type = "checkbox";
    choice.name = "category";
    // choice.name = `cat-${index}`;
    choice.id = `cat-${index}`;
    choice.setAttribute("data-cat", `${categoryName}`);
    choice.addEventListener("change", (e) => {
      filterResults(choice.getAttribute("data-cat"));
    });
    choiceContainer.appendChild(choice);
    let choiceLabel = document.createElement("label");
    choiceLabel.setAttribute("for", `cat-${index}`);
    choiceLabel.innerText = ` ${categoryName}`;
    choiceContainer.appendChild(choiceLabel);
    fragment.appendChild(choiceContainer);
  });

  categoryListView.appendChild(fragment);
};
const buildFullProducts = (isToRemove) => {
  if (isToRemove) {
    productGrid.innerHTML = "";
  }
  for (let i = 0; i < productsList.length; i++) {
    let element = document.createElement("div");
    element.className = "store__item__container";
    element.dataset.itemIndex=i;
    element.innerHTML = buildTemplate(i);
    productGrid.appendChild(element);
  }
};
/*<<==========| PAGE-EVENTS |==========>>*/
window.onload = () => {
  buildFullProducts();
  buildCategoryList();
};
// updateItemCards();

itemsGrid.addEventListener("click", gridItemsHandler);

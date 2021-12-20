"use strict";

var firstSrc;

let itemKey = sessionStorage.getItem("ItemKey") || 0;
var product = productsList[itemKey];
firstSrc = product.imgSrc;
/*<<==========| PAGE-ELEMENTS |==========>>*/
/*<-------summary__image__view----------------->*/

const summaryIamgeView = document.getElementById("summary-img-container");
const mainImageView = document.querySelector(".summary__img .large__img");
const smallImagesContainer = document.querySelector(
  ".summary__img .small__img__container"
);
const smallImages = document.querySelectorAll(".summary__img .small__img");
const summaryRightArrow = document.querySelector(".summary__arrow_right");
const summaryLeftArrow = document.querySelector(".summary__arrow_left");

const addToCardButton = document.getElementById("add-to-cart");
const addReviewButton = document.getElementById("add-review");
const addWishButton = document.getElementById("add-to-wish");
const addCompareButton = document.getElementById("add-to-compare");
/*<--------------->*/
const facebookButton = document.getElementById("facebook-share");
const twitterButton = document.getElementById("twitter-share");
const mailButton = document.getElementById("mail-share");
/*<-------details__buttons-------->*/
const descriptionTabButton = document.getElementById("description-tab-btn");
const detailsTabButton = document.getElementById("details-tab-btn");
const reviewsTabButton = document.getElementById("reviews-tab-btn");
/*<-------details__tabs-------->*/
const detailsSectionView = document.querySelector(".details__section");
const detailsHeaderTitles = document.querySelector(".details__header_titles");

const descriptionView = detailsSectionView.querySelector(
  ".details__description"
);
const detailsView = detailsSectionView.querySelector(".details__details");
const reviewsView = detailsSectionView.querySelector(".details__reviews");

/*<-------related_products__view----------------->*/
const relatedScrollView = document.querySelector(".related__container__scroll");
const relatedRightArrow = document.querySelector(".related__arrow_right");
const relatedLeftArrow = document.querySelector(".related__arrow_left");

/**
 * product views
 */
const productNameView = document.getElementById("product-name");
const currentPriceView = document.getElementById("current__price__span");
const oldPriceView = document.getElementById("old__price__span");
/*<<==========| GLOABL-VARIABLES |==========>>*/
const productImgSrc = [
  firstSrc,
  "./res/img/product01.png",
  // "res/img/product03.png",
  "res/img/product06.png",
];
let currentImgIndex = 0;

mainImageView.src = productImgSrc[currentImgIndex];
smallImages.forEach((element, index) => {
  element.src = productImgSrc[index];
});

/*<<==========| GLOBAL-FUNCTIONS |==========>>*/

/*<----------event handlers---------->*/

/*<----------image of product------> */
const imgRightArrowHandler = () => {
  currentImgIndex++;
  if (currentImgIndex > productImgSrc.length - 1) currentImgIndex = 0;
  changeImage(currentImgIndex);
};

const imgLeftArrowHandler = () => {
  currentImgIndex--;
  if (currentImgIndex < 0) currentImgIndex = productImgSrc.length - 1;
  changeImage(currentImgIndex);
};

const smallImagesContainerHandler = (e) => {
  const images = [...e.target.parentElement.children];
  console.log("Handler Clicked on index :", images.indexOf(e.target));
  console.log("with pic :", productImgSrc[images.indexOf(e.target)]);
  changeImage(images.indexOf(e.target));
};

/*<----------buttons of product------> */
const addToCartHandler = (e) => {
  e.preventDefault();
};
const addReviewHandler = (e) => {
  reviewsTabHandler(e, true);
  document
    .getElementById("reviews-tab-btn")
    .scrollIntoView({ behavior: "smooth" });
  // e.preventDefault();
};
const addWishHandler = (e) => {
  e.preventDefault();
};
const addCompareHandler = (e) => {
  e.preventDefault();
};

/* >----- share buttons ------< */
const facebookShare = (e) => {
  e.preventDefault();
};
const twitterShare = (e) => {
  e.preventDefault();
};
const mailShare = (e) => {
  e.preventDefault();
};
/* >----- details buttons ------< */
const descriptionTabHandler = (e) => {
  e.preventDefault();
  descriptionView.classList.toggle("details--active");
  descriptionTabButton.classList.toggle("header_titles--active");
  for (const element of detailsSectionView.children) {
    if (element.classList.contains("details__description")) continue;
    element.classList.remove("details--active");
    reviewsView.classList.remove("details__reviews--active");
  }
  for (const element of detailsHeaderTitles.children) {
    if (element.id == "description-tab-btn") continue;
    element.classList.remove("header_titles--active");
  }
};
const detailsTabHandler = (e) => {
  e.preventDefault();
  detailsView.classList.toggle("details--active");
  detailsTabButton.classList.toggle("header_titles--active");
  for (const element of detailsSectionView.children) {
    if (element.classList.contains("details__details")) continue;
    element.classList.remove("details--active");
    reviewsView.classList.remove("details__reviews--active");
  }
  for (const element of detailsHeaderTitles.children) {
    if (element.id == "details-tab-btn") continue;
    element.classList.remove("header_titles--active");
  }
};
const reviewsTabHandler = (e, show) => {
  e.preventDefault();
  if (!!show && reviewsView.classList.contains("details__reviews--active")) {
  } else {
    detailsView.classList.toggle("details--active");
    reviewsView.classList.toggle("details__reviews--active");
    reviewsTabButton.classList.toggle("header_titles--active");

    for (const element of detailsSectionView.children) {
      if (element.classList.contains("details__reviews")) continue;
      element.classList.remove("details--active");
    }

    for (const element of detailsHeaderTitles.children) {
      if (element.id == "reviews-tab-btn") continue;
      element.classList.remove("header_titles--active");
    }
  }
};

/*<----------related products------> */
const rltdRightArrowhandler = (e) => {
  let boundRe = relatedScrollView.getBoundingClientRect();
  relatedScrollView.scrollBy(300, 0);
  console.dir(boundRe);
};
const rltdLeftArrowhandler = () => {
  let boundRe = relatedScrollView.getBoundingClientRect();
  relatedScrollView.scrollBy(-300, 0);
  console.dir(boundRe);
};

/*<<==========| HELPER-FUNCTIONS |==========>>*/

const changeImage = (ImgIndex) => {
  currentImgIndex = ImgIndex;
  console.log("Before changing:", mainImageView.src, productImgSrc[ImgIndex]);
  mainImageView.src = productImgSrc[ImgIndex];
  console.log("After changing:", mainImageView.src, productImgSrc[ImgIndex]);
  console.log("___________________________");

  smallImages.forEach((element, index) => {
    if (index === ImgIndex) {
      smallImages[index].classList.add("small__img-active");
    } else {
      if (smallImages[index].classList.contains("small__img-active"))
        smallImages[index].classList.toggle("small__img-active");
    }
  });
};

/*<<==========| PAGE-EVENTS |==========>>*/

/*<-large image-->*


 *<-------------->*/
summaryRightArrow.addEventListener("click", imgRightArrowHandler);
summaryLeftArrow.addEventListener("click", imgLeftArrowHandler);
/*<--------------> */
smallImagesContainer.addEventListener("click", smallImagesContainerHandler);
/*<--------------> */
addToCardButton.addEventListener("click", addToCartHandler);
addReviewButton.addEventListener("click", addReviewHandler);
addWishButton.addEventListener("click", addWishHandler);
addCompareButton.addEventListener("click", addCompareHandler);
/*<--------------->*/
facebookButton.addEventListener("click", facebookShare);
twitterButton.addEventListener("click", twitterShare);
mailButton.addEventListener("click", mailShare);
/*<--------------->*/
descriptionTabButton.addEventListener("click", descriptionTabHandler);
detailsTabButton.addEventListener("click", detailsTabHandler);
reviewsTabButton.addEventListener("click", reviewsTabHandler);
/*<--------------->*/
relatedRightArrow.addEventListener("click", rltdRightArrowhandler);
relatedLeftArrow.addEventListener("click", rltdLeftArrowhandler);
/*<---------------->*/
window.onload = () => {
  // itemKey = sessionStorage.getItem("ItemKey");
  // var product = productsList[itemKey];
  productNameView.innerText = product.name;
  currentPriceView.innerText = "$" + product.newPrice;
  oldPriceView.innerText = "$" + product.oldPrice;
  mainImageView.src = product.imgSrc;
};

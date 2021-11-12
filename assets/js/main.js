// change format of Price
let x = document.querySelectorAll(".product__item-price--old, .product__item-price--new");
for (var i = 0; i < x.length; i++) {
  let num = Number(x[i].innerHTML).toLocaleString("de");
  x[i].innerHTML = num;
}

let filter = document.querySelector(".product__filter");

function hideFilter(destinationClass) {
  let destination = document.querySelector(destinationClass);

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        filter.classList.add("hide");
      } else {
        filter.classList.remove("hide");
      }
    });
  });

  observer.observe(destination);
}

hideFilter("#header");
hideFilter("#footer");

// lazy image using Intersection Observer to check viewport
document.addEventListener("DOMContentLoaded", function () {
  var lazyObjects = [].slice.call(document.querySelectorAll(".lazy-observer"));

  if ("IntersectionObserver" in window) {
    let lazyObjectObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyObject = entry.target;
            lazyObject.src = lazyObject.dataset.src;
            lazyObject.style.zIndex = "1";
            lazyObject.classList.remove("lazy-observer");
            lazyObject.parentElement.classList.remove("placeholder");
            lazyObjectObserver.unobserve(lazyObject);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "500px",
      }
    );

    lazyObjects.forEach(function (lazyObject) {
      lazyObjectObserver.observe(lazyObject);
    });
  }
});

function showItem(button, show) {
  let triggerButton = document.querySelector(button);
  let itemToShow = document.querySelector(show);
  triggerButton.addEventListener("click", function () {
    if (itemToShow.classList.contains("show")) {
      itemToShow.classList.remove("show");
    } else {
      itemToShow.classList.add("show");
    }
  });
}

function closeMenu(button, itemToClose){
  let close = document.querySelectorAll(button);
  let toClose = document.querySelector(itemToClose);
  close.forEach(function(item){
    item.addEventListener('click', function(){
      toClose.classList.remove('show');
    })
  })
}

let productFilterButton = document.querySelector(".product__filter-filter");
let productSelector = document.querySelector(".product__selector");
productFilterButton.addEventListener('click', function(){
    if (productSelector.classList.contains('active')){
      productSelector.classList.remove('active');
    }else{
      productSelector.classList.add('active');
    }
})

let productFilterClose = document.querySelectorAll('.js--close');
productFilterClose.forEach(function(item){
  item.addEventListener('click', function(){
    productSelector.classList.remove('active');
  }
)});

let dropdown = document.querySelectorAll('.js-menu-dropdown');
dropdown.forEach(function(item){
  let button = item.querySelector('.js-menu-dropdown__button')
  let content = item.querySelector('.js-menu-dropdown__content');
  button.addEventListener('click', function(){
    if (item.classList.contains('show')){
      item.classList.remove('show');
      content.style.height = "0";      
    }
    else {
      item.classList.add('show');
      content.style.height = "90px";
    }
  })
})

let hearts = document.querySelectorAll(".product__item-heart");
heartItems = [].slice.call(hearts);

heartItems.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("clicked")) {
      item.classList.remove("clicked");
    } else {
      item.classList.add("clicked");
    }
  });
});

var sortBtn = document.querySelector(".product__filter-sort span");
sortBtn.setAttribute("data-after", ": Default");
function changeSortBy(name) {
  sortBtn.setAttribute("data-after", name);
}

var menuBtn = document.querySelector(".navigation__icon--menu");
var menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menu.classList.add("showMenu");
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
});
var closeMenu = document.querySelector(".menu__overlay");
closeMenu.addEventListener("click", function () {
  menu.classList.remove("showMenu");
  window.onscroll = function () {};
});

let carouselItem = document.querySelectorAll(".carousel-item");
carouselItems = [].slice.call(carouselItem);

carouselItems.forEach(function (item) {
  item.addEventListener("click", function () {
    carouselItems.forEach((item) => item.classList.remove("selected"));
    item.classList.add("selected");
    console.log(item);
  });
});

let allHeaders = document.querySelectorAll(".main-menu-heading");
allHeaders.forEach(function (header) {
  var menuToOpen = header.querySelector(".subMenu");
  var btn = header.querySelector(".title");
  btn.addEventListener("click", function () {
    menuToOpen.classList.add("active");
    var closeSubMenuBtn = document.querySelector(".main-menu-heading .active");
    if (closeSubMenuBtn !== null) {
      closeSubMenuBtn.addEventListener("click", function () {
        closeSubMenuBtn.classList.remove("active");
      });
    }
  });
});

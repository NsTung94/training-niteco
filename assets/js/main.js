let x = document.querySelectorAll('.item__price .old, .item__price .new')
for (var i = 0; i < x.length; i++) {
  let num = Number(x[i].innerHTML).toLocaleString('de');
  x[i].innerHTML = num;
}

var footer = document.getElementById("footer");
var filter = document.getElementById("filter");
var filterBtn = document.querySelector('.footerBtn');

function reachBottom(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // hide
      filter.classList.add("hideBtn");
      filterBtn.style.display = 'none'
    } else {
      // show button
      filter.classList.remove("hideBtn");
    }
  });
}
let observer = new IntersectionObserver(reachBottom);
observer.observe(footer);

var topPage = document.getElementById("header");


function reachTop(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // hide
      filter.classList.add("hideBtn");
      filterBtn.style.display = "none";
    } else {
      // show button
      filter.classList.remove("hideBtn");
    }
  });
}
let observerTop = new IntersectionObserver(reachTop);
observerTop.observe(topPage);

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

let selector = document.getElementById("selector");
let selectSort = document.getElementById("selectSort");
let selectorHeader = document.querySelector('.selector__header');
selectorHeader.addEventListener("click", showSelector);
let applyBtn = document.querySelector('#apply');
applyBtn.addEventListener("click", showSelector);

function showSelector() {
  if (selector.classList.contains("showSelector")) {
    selector.classList.remove("showSelector");
    
  } else {
    selector.classList.add("showSelector");
    selectSort.classList.remove('showSort');
    
  }
}

let hearts = document.querySelectorAll('.item__heart');
heartItems = [].slice.call(hearts);

heartItems.forEach(function(item){
  item.addEventListener('click', function(){
    if(item.classList.contains('clicked')){
      item.classList.remove('clicked')
    }else{
      item.classList.add('clicked')
    }
  })
})

let contentSelector = document.querySelectorAll('.selector__container .content');

contents = [].slice.call(contentSelector);

contents.forEach(function(item){
  var headingBtn = item.querySelector('.content__heading');
  headingBtn.addEventListener('click', function(){
    if(item.classList.contains('showContent')){
      item.classList.remove('showContent')
    }
    else{
      item.classList.add('showContent')
    }
  })
})

function showSort() {

  if (selectSort.classList.contains("showSort")) {
    selectSort.classList.remove("showSort");
    
  } else {
    selectSort.classList.add("showSort");
    selector.classList.remove('showSelector');
    
  }
}

var languageBtn = document.querySelector("#language")
var dropdown = document.querySelector('.navigation__icon .dropdown')

languageBtn.addEventListener("click", function(){
  if (dropdown.classList.contains('show')){
    console.log("show true", dropdown.classList.contains('show'))
    dropdown.classList.remove('show');
  }else {
    dropdown.classList.add("show")
  }
})


function resetCbs() {
  var allChecked = document.querySelectorAll("input[type=checkbox]:checked");

  allChecked.forEach(target => 
    target.checked = false)
  
}

var list = document.querySelector(".items");
let original = list.querySelectorAll(".item");
// console.log(original);
var nodesToSort = list.querySelectorAll(".item");
// console.log("nodesToSort", nodesToSort)

var sortBtn = document.querySelector('.sort span')
sortBtn.setAttribute('data-after',': Default')
function changeSortBy(name){
  sortBtn.setAttribute('data-after', name);
}


let x = document.querySelectorAll('.item__price .old, .item__price .new')
for (var i = 0; i < x.length; i++) {
  let num = Number(x[i].innerHTML).toLocaleString('de');
  x[i].innerHTML = num;
}

var footer = document.getElementById("footer");
var filter = document.getElementById("filter");

function reachBottom(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // hide
      filter.classList.add("hideBtn");
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
let reset = document.querySelector('.refresh');
function showSelector() {
  if (selector.classList.contains("showSelector")) {
    selector.classList.remove("showSelector");
    reset.classList.remove('show');
  } else {
    selector.classList.add("showSelector");
    selectSort.classList.remove('showSort');
    reset.classList.add('show');
    
  }
}



function showSort() {
  reset.classList.remove('show')
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

function changeSortBy(name){
  document.getElementById("demo").innerHTML = name;
}


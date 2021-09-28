var indexItem=document.querySelectorAll(".home_slider_gl .slider_item");
indexItem.forEach(element => {
  element.index;
  console.log(element.id, 5050505)
});
var swiper = new Swiper(".home_slider_gl", {
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'  + "</span>";
    },
 
  },
});

var swiper = new Swiper(".featured_swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween:30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_button-next",
    prevEl: ".swiper_button-prev",
  },
});

var swiper = new Swiper(".slider_rewviews_test", {
  slidesPerView: 2,
  spaceBetween: 30,
  // breakpoints: {  
  //   '480': {
  //     slidesPerView: 4,
  //     spaceBetween: 40,},
  //   '@640': {
  //     slidesPerView: 5,
  //     spaceBetween: 50, },
  // },
  loop:true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_review_next",
    prevEl: ".swiper_review_prev",
  },
});


var swiper = new Swiper(".home_carousel_portfolio", {
  slidesPerView: 4,
  spaceBetween: 5,
  // breakpoints: {  
  //   '480': {
  //     slidesPerView: 4,
  //     spaceBetween: 40,},
  //   '@640': {
  //     slidesPerView: 5,
  //     spaceBetween: 50, },
  // },

  freeMode: true,
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination_portfolio",
    // clickable: true,
    type:"progressbar"
  },
  navigation: {
    nextEl: ".swiper_portfolio_next",
    prevEl: ".swiper_portfolio_prev",
  },
});


var swiper = new Swiper(".swiper_portfolio_item", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

VANTA.NET({
  el: "#animation_footer",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor:1776411,
  color:16777215,
});

$(function() {
  $(window).on("scroll resize", function() {
      var o = $(window).scrollTop() / ($(document).height() - $(window).height());
      o*=100;
      $(".progress_bar_color").css({
          "height": o+ "%"
      });
      $('.progress_bar_color')[0].value = o;
  })
});


let toggle=false;
let menuAll=document.getElementById("menu_all");
let menuButton=document.getElementById("menu_button");
function openMenu(){
  if (toggle==false){
    toggle=true;
    menuAll.classList.add("active")
    menuButton.classList.add("active")
  }else{
    toggle=false;
    menuAll.classList.remove("active")
    menuButton.classList.remove("active")
  }

}
let shareButton=document.getElementById("folio_share");
let sharemenu=document.getElementById("share-wrapper");
function folioShare(){
  if (toggle==false){
    toggle=true;
    sharemenu.classList.add("active")
    shareButton.classList.add("active")
  }else{
    toggle=false;
    sharemenu.classList.remove("active")
    shareButton.classList.remove("active")
  }

}
function closeShareBtn(){
  toggle=false;
  sharemenu.classList.remove("active")
  shareButton.classList.remove("active")
}



const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}


const strings = [
  'menu'
];

let counter = 0;
   
const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;
    
    if (counter >= strings.length) {
      counter = 0;
    }
    
    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 3000);
}

resolver.resolve(options, callback);
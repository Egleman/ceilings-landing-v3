import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();
flsFunction.calcWidthScroll();
flsFunction.mask();
flsFunction.openHeaderCallback();
flsFunction.openHiddenMenu();
flsFunction.rangeSlider();
flsFunction.customSelect();
// flsFunction.beforAfter();
// flsFunction.tabs();
// flsFunction.showMoreBlocks();
flsFunction.calc();
// flsFunction.playVideo();
flsFunction.accordion();
// flsFunction.presentation();
flsFunction.scrollButtons();
flsFunction.openModal();
flsFunction.hiddenAdv();
flsFunction.photosSlider();
flsFunction.reviewsSlider();
flsFunction.submitForms();

let im = new Inputmask({
    mask: '8 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});
let im2 = new Inputmask({
  mask: '(999) 999-99-99',
  showMaskOnHover: false,
  showMaskOnFocus: false,
  jitMasking: true,
  inputmode: 'tel'
});
document.querySelectorAll('.masked').forEach(input => {
    im.mask(input);
})
document.querySelectorAll('.masked-2').forEach(input => {
  im2.mask(input);
})




document.addEventListener('DOMContentLoaded', function() {
    function hasTouchDevice() {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    }
    if (!hasTouchDevice()) {
      const toUp = document.querySelectorAll('.calc__counters-wr button');
      toUp.forEach(link => {
        link.classList.add('hover');
        link.onmouseenter = function(){
            link.classList.add('hover');
          }
        link.onmouseleave = function() {
            link.classList.remove('hover');
        }
      })
      
    }
  });

// var swiper = new Swiper(".about-thumb", {
//     modules: [FreeMode],
//     // loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     // freeMode: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 3,
//         },
//         606: {
//             slidesPerView: 4,
//         }
//     }
// });


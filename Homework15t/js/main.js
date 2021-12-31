'use strict';

console.log('test');


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
  }, 500);
  }
  
  $(document).ready(function () {
      $('.review-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.bg-arrow_left',
          nextArrow: '.bg-arrow_right'
      })
  })
$(document).ready(function(){
    $('.slider-wrapper').slick({
      arrows: false,
      dots: true,
      appendDots:'.slider-dots',
      dotsClass: 'dots'
    });
    let hamberger = document.querySelector('.hamberger');
    let cros= document.querySelector('.cros-btn');
    let mobile_nav = document.querySelector('.mobile-nav')

    hamberger.addEventListener('click', function(){
      mobile_nav.classList.add('open');
    });
    cros.addEventListener('click', function(){
      mobile_nav.classList.remove('open');
    });
  });
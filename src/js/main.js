$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10'],
        menu: '#menu',
        animateAnchor: false,
        autoScrolling: true,
        scrollHorizontally: false,
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: false
    });
});

$('.retail-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="retail-slider__prev"></div>',
  nextArrow: '<div class="retail-slider__next"></div>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

(function() {
  
    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());
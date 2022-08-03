$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 4,
      center: true,
      loop: true,
      dots: false,
      margin: 10,
      autoWidth: true,
      stagePadding: 0,
      smartSpeed: 450,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        485: {
          items: 1,
        },
        728: {
          items: 1,
          loop: true,
        },
        960: {
          items: 1,
          loop: true,
        },
        1200: {
          items: 1,
        },
        
      },
    });
  });
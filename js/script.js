$(window).on("load", function () {

   // Preload
   $("#preload").fadeOut(500);

});

jQuery(document).ready(function () {

   // Dropdown Menu
   $('.header-menu  > .menu-item-has-children > a').append('<i class="fa-solid fa-chevron-down"></i>');
   $('.header-menu  > .menu-item-has-children > .sub-menu > .menu-item-has-children > a').append('<i class="fa-solid fa-chevron-right"></i>');

   // Project Carousel
   $('.project-carousel').owlCarousel({
       loop: true,
       margin: 20,
       nav: false,
       dots: true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 2
           },
           1000: {
               items: 3
           }
       }
   });

   // Accordion 
   $('.wrapper-accordion .content-accordion:first-of-type').show();
   $('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');

   var titleAccordion = $('.wrapper-accordion h3');
   var contentAccordion = $('.content-accordion');


   titleAccordion.click(function () {
       var content = $(this).next(contentAccordion);
       if (content.is(':visible')) {
           content.slideUp();
           $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
       } else {
           contentAccordion.slideUp();
           content.slideDown();
           titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
           $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
       }

   });
   
   // Scroll Top Button
   $('#scroll-top').click(function (event) {
       event.preventDefault();
       $('body,html').animate({
           scrollTop: 0
       }, 800);
       return false;
   });

   $('#scroll-top').hide();
   $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
           $('#scroll-top').fadeIn();
       } else {
           $('#scroll-top').fadeOut();
       }
   });

   // Dropdown Mobile Menu 
   $('.mobile-menu > li.menu-item-has-children > a').append('<i class="fa-solid fa-chevron-down"></i>');
   $('.mobile-menu .sub-menu > li.menu-item-has-children > a').append('<i class="fa-solid fa-chevron-down"></i>');
   $('.mobile-menu > li.menu-item-has-children > a').click(function () {
       $(this).next('.sub-menu').slideToggle();

   });
   $('.mobile-menu .sub-menu > li.menu-item-has-children > a').click(function () {
       $(this).next('.sub-menu').slideToggle();

   });

   // Show/hide Mobile Menu 
   $('#closemenu').click(function (event) {
       event.preventDefault();
       $('#mobile-nav').animate({
           'left': '-320px'
       }, 800);
   });
   $('#openmenu').click(function (event) {
       event.preventDefault();
       $('#mobile-nav').animate({
           'left': '0px'
       }, 800);
   });

   //Details Carousel
   $('.details-carousel').owlCarousel({
       loop: true,
       margin: 0,
       nav: false,
       dots: true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   })


}); // ready
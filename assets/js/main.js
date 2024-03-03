
$('body').scrollspy({ target: '.navmenu' });

// When we click on the LI
$("ul.qcontrols li").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active
    $("ul.qcontrols li.active").removeClass("active");
    // And make this active
    $(this).addClass("active");
  }
});


//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();


function affichercercles(){

}


jQuery(document).ready(function( $ ) {
        $('.circle').circleProgress({
        value: 0.70,
        startAngle: 4.75,
        size: 200,
        fill: { gradient: ["#FFFFFF"] }
      });
        $('.two').circleProgress({
          value: 1.00,
        });
        $('.three').circleProgress({
          value: 0.75,
        });
        $('.four').circleProgress({
          value: 0.70,
        });
        $('.five').circleProgress({
          value: 0.50,
        });
        $('.six').circleProgress({
          value: 0.95,
        });
        $('.seven').circleProgress({
          value: 0.80,
        });
        $('.height').circleProgress({
          value: 0.90,
        });
        $('.nine').circleProgress({
          value: 0.35,
        });
        $('.ten').circleProgress({
          value: 0.65,
        });
        $('.eleven').circleProgress({
          value: 0.75,
        });
        $('.twelve').circleProgress({
          value: 0.75,
        });
        $('.fourtenn').circleProgress({
          value: 0.90,
        });
    


   //Clients carousel Slider
    $('#clients-carousel').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        paginationSpeed: 800,
        autoPlay: true,
        pagination : false,
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });
    $('#clients-carousel2').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        paginationSpeed: 800,
        autoPlay: true,
        pagination : false,
        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });
       $('#menu').click(function(){
       $('#menu').not(this).removeClass("active");
       $(this).toggleClass("active");
      });

  });
  
  
  

  
//ScrollTop
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

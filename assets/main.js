$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });

  
  TweenMax.from(".fadeInBottom", 1, {alpha:0, y:"100%"});

  //Cloudinary Image Hosting
  var cloudinary = require("cloudinary-core"); // If your code is for ES5
import cloudinary from “cloudinary-core”;    // If your code is for ES6 or higher

var cl = new cloudinary.Cloudinary({cloud_name: "zacmorton-com", secure: true});

//Carousel
$('#myCarousel').on('slid.bs.carousel', '', function() {
    var $this = $(this);
  
    $this.children('.carousel-control').show();
  
    if($('.carousel-inner .item:first').hasClass('active')) {
      $this.children('.left.carousel-control').hide();
    } else if($('.carousel-inner .item:last').hasClass('active')) {
      $this.children('.right.carousel-control').hide();
    }
  
  });
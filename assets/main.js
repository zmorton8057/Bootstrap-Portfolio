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

  var cloudinary = require("cloudinary-core"); // If your code is for ES5
import cloudinary from “cloudinary-core”;    // If your code is for ES6 or higher

var cl = new cloudinary.Cloudinary({cloud_name: "zacmorton-com", secure: true});
$(document).ready(function(){
    
    var img=new Image();
    img.src="pics/logo.png";
    img.addEventListener("load",function(){
        console.log("Image has loaded");
        $('.wrapper').fadeOut();
        $('.postsplash').css('display','block');
    });
     
    $('#popup1').popup({
        transition: 'all 0.3s'
      });
    $('#popup2').popup({
        transition: 'all 0.3s'
      });
    $('#popup3').popup({
        transition: 'all 0.3s'
      });
    $('#popup4').popup({
        transition: 'all 0.3s'  
      });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
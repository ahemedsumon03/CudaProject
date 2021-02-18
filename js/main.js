$(document).ready(function(){

  $('.js-service-section').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
  });


  //Active link

   $('nav ul li').click(function(){
       $('nav ul li').removeClass('active');
       $(this).addClass("active");
   });  

   $('nav a img.logo').click(function(){
       $('nav ul li').removeClass('active');
       $('nav ul li:first-child').addClass('active');
   });

   // For container
   var mixer = mixitup('.containerone');

   // Smooth scroll for explore/IDGE/safari

   $('a').on('click',function(event){
       if(this.hash !== ''){
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset.top    
          }, 800,function(){
             window.location.hash = hash;
          });
       }
   });
     

});

function openNav(){
    document.getElementById("mobile-menu-nav").style.width = "100%";
}
function closeNav(){
    document.getElementById("mobile-menu-nav").style.width = "0%";
}
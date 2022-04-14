$(document).ready(function(){
    $('.myslider').owlCarousel({
          items:1,
          nav: false,
          dots: true,
          dotsData: true,
          rtl: true
      });
  });



  $(document).ready(function() {


    //Init the carousel
    $("#owl-demo").owlCarousel({      
      items: 1,
      loop: true,
      nav:true,
      autoplay: true,
      autoplayTimeout:10000,
      rtl:true,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar
    });
  
     function startProgressBar() {
      // apply keyframe animation
      $(".slide-progress").css({
        width: "100%",
        transition: "width 10000ms"
      });
    }

    function resetProgressBar() {
      $(".slide-progress").css({
        width: 0,
        transition: "width 0s"
      });
    }
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

 
 
});




function showhide() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}



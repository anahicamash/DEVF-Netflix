
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("#nav-1").css("background-color" , "blue");
        }
  
        else{
            $("#nav-1").css("background-color" , "#333");  	
        }
    })
  })
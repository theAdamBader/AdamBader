//ARTWORK
$(document).ready(function() {
  $(".artwork-img").click(function() {
    $src = $(this).attr("src");

    if (!$("#light-box").length > 0) {
      $("body").append("<div id='light-box'><span class='close-img'>&times</span><img src=''></div>");
      $("#light-box").show();
      $("#light-box img").attr("src", $src);
    } else {
      $("#light-box").show();
      $("#light-box img").attr("src", $src);
    }
  });
  
  $("body").on("click", "#light-box span", function() {
    $("#light-box").hide();
  });
});

//SMOOTH SCROLLING
$(document).ready(function(){

  $("a").on('click', function(event) {

        if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
      });
    }
  });
});

//TOGGLE SWITCH
$(function(){
  var test = localStorage.input === 'true'? true: false;
  $('input').prop('checked', test || false);
});

$('input').on('change', function() {
  localStorage.input = $(this).is(':checked');
  console.log($(this).is(':checked'));
});

$(document).ready(function() {
  $("input").click(function() {
      $(".change-nav").removeClass('.active');
      $(this).addClass('.active');
  });
});

$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 
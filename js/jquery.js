//SCROLLING
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 1500, 'swing', function () {

      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

//REFRESH PAGE TO THE TOP
$(document).ready(function(){
  $(this).scrollTop(0);
});

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

//PRELOADER
// Set the pre-loader animation for 2200 milliseconds for it to animated and fade to the page
// setTimeout(function(){
//   $('.loader').fadeToggle();
// }, 1800);


//HAMBURGER
// Opens the responsive menu
$('.hamburger').click(function() {
  $(this).toggleClass('active open');
  $('.sidebar').toggleClass('open');
  $('.sidebar li').toggleClass('fade');
});

// Closes the responsive menu on anchor click
$('.sidebar li').on('click', function(){
  $(".sidebar").toggleClass('open');
  $('.sidebar li').toggleClass('fade');
  $(".hamburger").toggleClass('open');
  $(".hamburger").removeClass("active");
});
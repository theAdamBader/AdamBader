//SCROLLING 
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // Set the animation for 1000 milliseconds for it to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
      });
    }
  });
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

//CLASS LI
// When click on an active li function then the colour will be highlighted as blue
$(document).on('click', 'nav li', function(){
  // The member of the function li .active will be removed and added onto an li child within the nav function
  $(this).addClass('active').siblings().removeClass('active');
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
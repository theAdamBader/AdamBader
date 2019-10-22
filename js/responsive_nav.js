// Opens the responsive menu
$('.hamburger').click(function() {
  $(this).toggleClass('active');
  $('.sidebar').toggleClass('open');
  $('.sidebar li').toggleClass('fade');
 });

// Closes the responsive menu on anchor click
$('.sidebar li').on('click', function(){
  $(".sidebar").toggleClass('open');
  $('.sidebar li').toggleClass('fade');
  $(".hamburger").removeClass("active");
});
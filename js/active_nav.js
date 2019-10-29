// When click on an active li function then the colour will be highlighted as blue
$(document).on('click', 'nav li', function(){
    // The member of the function li .active will be removed and added onto an li child within the nav function
    $(this).addClass('active').siblings().removeClass('active');
});

// Set the pre-loader animation for 2200 milliseconds for it to animated and fade to the page
setTimeout(function(){
    $('.loader').fadeToggle();
}, 1800);
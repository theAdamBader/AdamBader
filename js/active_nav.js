//When click on an active li function then the colour will be highlighted as blue
$(document).on('click', 'nav li', function(){
    //the member of the function li .active will be removed and added onto an li child within the nav function
    $(this).addClass('active').siblings().removeClass('active')
})

//When the page is refreshed it would return to the top of the screen
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

setTimeout(function(){
    $('.loader').fadeToggle();
}, 2200);
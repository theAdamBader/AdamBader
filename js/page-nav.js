document.getElementById("strokes").addEventListener("click", toggleFunc);
document.querySelector(".overlay-content").addEventListener("click", toggleFunc);

function toggleFunc(){
    var menu= document.getElementById("strokes");
    menu.classList.toggle('active');

    var styling = document.getElementById("overlay");

    if(styling.style.width === "100%")
    {
        styling.style.width = "0%";
    } else {
        styling.style.width = "100%";
    }

    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
}
   
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

var open = document.getElementsByClassName('menuOpen');
var close = document.getElementsByClassName('menuClose');
var navi = document.getElementsByClassName('navi');
var clicking = false;
open[0].addEventListener("click", openBurger, false);
close[0].addEventListener("click", closeBurger, false);


function openBurger() {
    navi[0].classList = "navi active";
}
function closeBurger() {
    navi[0].classList = "navi";
}


// Points navigation
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        clicking = true;
        closeBurger();

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
        clicking = false;// End if
    });
});
// Navigation points scroll



$(function() {

    var viewportHeight = $(window).height();

    //caches a jQuery object containing the header element
    var one = $("#one");
    var two = $("#two");
    var three = $("#three");
    var four = $("#four");
    w1 = viewportHeight;
    w2 = viewportHeight*1.8;
    w3 = viewportHeight*2.5;
    w4 = viewportHeight*3.4;

    if (clicking != true){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll < w1) {
                console.log("Accueil");
                one.addClass("active");
                two.removeClass("active");
                three.removeClass("active");
                four.removeClass("active");
            }
            else if (scroll < w2 ){
                console.log("Histoire");
                one.removeClass("active");
                two.addClass("active");
                three.removeClass("active");
                four.removeClass("active");
            }
            else if (scroll < w3){
                console.log("Emossions");
                one.removeClass("active");
                two.removeClass("active");
                three.addClass("active");
                four.removeClass("active");
            }
            else if (scroll < w4){
                console.log("Inscriptions");
                one.removeClass("active");
                two.removeClass("active");
                three.removeClass("active");
                four.addClass("active");
            }

        });
    }
});
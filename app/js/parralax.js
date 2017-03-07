
var open = document.getElementsByClassName('menuOpen');
var close = document.getElementsByClassName('menuClose');
var navi = document.getElementsByClassName('navi');
var clickable = document.getElementsByClassName("clickable");

open[0].addEventListener("click", openBurger, false);
close[0].addEventListener("click", closeBurger, false);


function openBurger() {
    navi[0].classList = "navi active";
}
function closeBurger() {
    navi[0].classList = "navi";
}



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
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
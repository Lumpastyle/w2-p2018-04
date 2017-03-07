
var open = document.getElementsByClassName('menuOpen');
var close = document.getElementsByClassName('menuClose');
var navi = document.getElementsByClassName('navi');

open[0].addEventListener("click", openBurger, false);
close[0].addEventListener("click", closeBurger, false);

function openBurger() {
    navi[0].classList = "navi active";
}
function closeBurger() {
    navi[0].classList = "navi";
}


console.log("Hauteur:"+ $( window ).height()+"px");

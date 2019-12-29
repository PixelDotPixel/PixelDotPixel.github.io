//var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
/*var slideId = ["slideL", "slideR"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
} */

var slideIndex = 0;

function showSlides() {
    "use strict";
    var i, slidesR = document.getElementsByClassName("slideR"), slidesL = document.getElementsByClassName("slideL");

    for (i = 0; i < slidesR.length; (i += 1)) {
        slidesR[i].style.display = "none";
        slidesL[i].style.display = "none";
    }

    slideIndex += 1;
    if (slideIndex >= slidesR.length) {slideIndex = 0; }

    slidesR[slideIndex].style.display = "block";
    slidesL[slideIndex].style.display = "block";

    setTimeout(showSlides(), 5000); // Change image every 2 seconds

}
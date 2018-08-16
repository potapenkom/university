var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i = 1;
    var slides = document.getElementsByClassName("siide__js");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
         slides[i].style.visibility = "hidden"; 
         slides[i].style.opasity = "0";
    }
    slides[slideIndex-1].style.visibility = "visible";
    slides[slideIndex-1].style.opasity = "1";
}

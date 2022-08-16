/** @format */
document.addEventListener("DOMContentLoaded", function () {
  // nav-fixed
  let menufixed = document.querySelector(".nav__fixed");
  // console.log(menufixed);
  let statusMenu = "under100";
  window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
      if (statusMenu == "under100") {
        statusMenu = "over100";
        menufixed.classList.add("fixed");
      }
    } else if (window.pageYOffset < 100) {
      if (statusMenu == "over100") {
        statusMenu = "under100";
        menufixed.classList.remove("fixed");
      }
    }
  });
  // end-nav-fixed
});

// slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
// end-slider

// search by jquery
$(document).ready(function () {
  $(".search").click(function () {
    $(".togglesearch").toggle();
    $("input[type='text']").focus();
  });
});
// end-search

/* top navbar slideri
https://www.youtube.com/watch?v=gXkqy0b4M5g */
const navSlide = function () {
  const burger = document.querySelector(".burger"); //haetaan hamppari htmlstä
  const nav = document.querySelector(".nav-links"); //haetaan linkit htmlstä
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
    //hamppari animaatio
    burger.classList.toggle("toggle");
  });
};

/* haetaan slideshown kuvat, kun käyttäjä klikkaa kuvaa, ohjataan kohteen esittelyyn */
var imageGalleryContainer = document.querySelector(".imageGalleryContainer");
var imageGalleryContainerImages = imageGalleryContainer.querySelectorAll(
  "div.manualSlides > img"
);
for (k = 0; k < imageGalleryContainerImages.length; k++) {
  imageGalleryContainerImages[k].addEventListener("click", gotoTarget);
}
function gotoTarget() {
  // siirrytään klikatusta kuvasta kohteeseen
  window.location.href = "./esittely.html#" + this.alt;
}

/* https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("manualSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

navSlide();

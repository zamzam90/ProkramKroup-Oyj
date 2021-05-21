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

/* automaaginen slideshow
    https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
var slideIndex = 0;
slideShow();

function slideShow() {
  var i;
  var slides = document.getElementsByClassName("slide"); // haetaan kaikki slide luokan omaavat elementit
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // laitetaan jokaisen elementin style noneksi=piilotetaan
  }
  slideIndex++; // kasvatetaan slide indexiä
  if (slideIndex > slides.length) {
    //jos slide index yli kuvien määrän, asetetaan se ykköseksi
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // vaihdetaan slide elementin style blockiksi = näytetään kuva
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}
/* slideshow stuff end */

/* modal image stuff */
var slideShowContainer = document.querySelector(".slideShow-container");
var slideShowContainerImages =
  slideShowContainer.querySelectorAll("div.slide > img");
for (k = 0; k < slideShowContainerImages.length; k++) {
  slideShowContainerImages[k].addEventListener("click", openModal);
}

function openModal() {
  // console.log(this.src);
  // Get the modal
  var modal = document.getElementById("modal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML =
    this.alt +
    "<br><a href='./esittely.html#" +
    this.alt +
    "'>Lue lisää!</a>";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}
/* modal image stuff end */
navSlide();

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

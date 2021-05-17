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

//yhteydenottolomake
function lomake(form) {

//Haetaan tiedot muuttujiin lomakkeesta
var nimi = document.getElementById('nimi').value;
var sahkoposti = document.getElementById('email').value;
var x = document.getElementById('numero').value;

if (nimi.length < 2) {
  alert("Antamasi nimi on liian lyhyt!");
  return false;
}

//Söhköpostin tarkastus
if(emailIsValid(sahkoposti)) {
}
else {
  alert("Anna oikea sähköpostiosoitteesi!");
  return false;
}
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
//Puhelinnumeron tarkastus
//Puhelinnumeron on oltava numero, määritetään se isNaN:Lla, muutoin perus else if:t
if (x === "") {
  alert("Anna puhelinnumerosi!");
  return false;
}
else if (isNaN(x)) {
  alert("Puhelinnumeron on oltava numeroita!");
  return false;
}

//tekstiä syötetty kenttään, tsekkaus
if (kommentti.length < 3) {
  alert("Kirjoita kommentteihin vähintään 3 merkkiä!");
  return false;
}
}

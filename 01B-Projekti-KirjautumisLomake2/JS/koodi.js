//01B - Kirjautumislomake2 koodit
//alert("kukkuu"); - toimii!
function kyselylomake() {

//Haetaan tiedot muuttujiin lomakkeesta
var annaNimi = document.getElementById('nimi').value;
var sahkoposti = document.getElementById('email').value;
var x = document.getElementById('ika').value;

console.log(annaNimi.length);
//Käyttäjänimen pituuden tarkistus
if (annaNimi.length < 3) {
  alert("Antamasi nimi on liian lyhyt!");
  return false;
}

//Söhköpostin tarkastus

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }

if(emailIsValid(sahkoposti)) { //
 }
 else {
  alert("Anna oikea sähköpostiosoitteesi!");
  lomake.email.focus();
  return false;
}

//Ikä-kentän numero tarkastus
//iän on oltava numero, määritetään se isNaN:Lla

if (isNaN(x)) {
  alert("Iän on oltava numeroita!");
  return false;
}
else if (x<12) {
  alert("Olet alaikäinen tähän lomakkeeseen ja sivustolle!");
  return false;
}
else if (x>100) {
  alert("Olet jo aika iäkäs, otahan lepoa vaan!");
  return false;
}
return true;
}

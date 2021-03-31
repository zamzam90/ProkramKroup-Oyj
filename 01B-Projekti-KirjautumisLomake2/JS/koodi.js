//01B - Kirjautumislomake2 koodit
//alert("kukkuu"); - toimii!
function kyselylomake() {

//Haetaan tiedot muuttujiin lomakkeesta
var annaNimi = document.getElementById('nimi').value;
var sahkoposti = document.getElementById('email').value;
var x = document.getElementById('ika').value;
var henkinenIka = dropdownlist.options[dropdownlist.selectedIndex].value;
var raaadiot = document.getElementById('radior1');
var kayttojarjestelma = false;
var radionappulat = document.getElementById('radior2');
var atk = false;
var tsekkibox = document.getElementsByName('tsekbox');
var taitotaso = false;
var dropdownia = document.getElementById('dropdown');
var kommentti = document.getElementById('name').value;


console.log(annaNimi.length);
//Käyttäjänimen pituuden tarkistus
if (annaNimi.length < 3) {
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

//Ikä-kentän numero tarkastus
//iän on oltava numero, määritetään se isNaN:Lla, muutoin perus else if:t

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

//tarkistus että dropdown valikosta on valittu jotain:
if (henkinenIka == "empty") {
  alert("Valitse henkinen ikäsi.");
  return false;
}

//ekoille radiobuttoneille haku, että on jotain valittuna
for (var x = 0; x < raaadiot.length; x++) {
  if (raaadiot[x].checked == true) {
    kayttojarjestelma = true;
  }
}
if (kayttojarjestelma == false) {
  alert("Valitse mitä käyttöjärjestelmää käytät.");
  return false;
}

//tokille radiobuttoneille haku, että on jotain valittuna
for (var x = 0; x < radionappulat.length; x++) {
  if (radionappulat[x].checked == true) {
    atk = true;
  }
}
if (atk == false) {
  alert("Valitse käyttämäsi ATK.");
  return false;
}

//checkboxeille haku, että on valittuna
for (var y = 0; y < tsekkibox.length; y++) {
  if (tsekkibox[y].checked == true) {
    taitotaso = true;
  }
}
if (taitotaso == false) {
  alert("Valitse CS:GO taitotasosi!");
  return false;
}
//Kommenttikentän tsekkaus
if (kommentti.length < 10) {
  alert("Anna kommentteihin vähintää 10 merkkiä!")
  return false;
}
}

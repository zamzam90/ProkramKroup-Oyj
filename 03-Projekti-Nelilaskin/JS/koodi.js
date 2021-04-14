//JS by Johanna & Sami
//alustetaan muuttujia:
var tulos = "",
  luvut = "",
  operaattorit = ["+", "-", "*", "/", "%"],
  tyhjätty = "Suorita lasku..";
//Lisäys-funktio (lisää luvun / operaattorin) lisätään luku tulosmuuttujaan
function lisää(luvut) {
  tulos += luvut;
  console.log("Luku / Operaattori " + luvut + " lisätty laskuun"); //for debugging..
  console.log(tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
//lasku-funktio (tässä lasketaan lisätyt luvut eval funktion avulla)
function laske() {
  tulos = eval(tulos);
  console.log("Tulos: " + tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
/* ToDo..
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin)
*/
//Alustus-funktio (tyhjentää "näytön")
function tyhjennä() {
  console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}

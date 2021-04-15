//JS by Johanna & Sami
//alustetaan muuttujia:
var tulos = "",
  luvut = "",
  operaattorit = ["+", "-", "*", "/", "%"],
  index = 0,
  tyhjätty = "0";
//Lisäys-funktio, lisää luvun / operaattorin tulosmuuttujaan
function lisää(luvut) {
  tulos += luvut;
  //console.log("Luku / Operaattori " + luvut + " lisätty laskuun"); //for debugging..
  //console.log(tulos);
  document.getElementById("näyttö").innerHTML = tulos;
}
//lasku-funktio (tässä lasketaan lisätyt luvut tulos muuttujassa eval funktion avulla)
function laske() {
  /* Estetään undefined jos painetaan ensimmäisenä = nappia */
  if (tulos == "") {
    //console.log("hello");//for debugging..
    return false;
  } else {
    tulos = eval(tulos);
    tulos = tulos.toString();
    //console.log("Tulos: " + tulos);
    document.getElementById("näyttö").innerHTML = tulos;
  }
}
//Poisto-funktio (poistaa viimeksi lisätyn luvun & operaattorin)
function poista() {
  //Loopin avulla käydään läpi numerot mitä annettu
  for (var y = 0; y < tulos.length; y++) {
    for (var x = 0; x < operaattorit.length; x++) {
      if (tulos[y] == operaattorit[x]) {
        index = y;
      }
    }
  }
  //merkkijonosta leikataan substr:lla, joka leikkaa nollasta, eli alusta,
  //viimeisimmän operaation kohdalle = eli poistaa esim 20+30:sta +30 lopusta
  tulos = tulos.substr(0, index);
  document.getElementById("näyttö").innerHTML = tulos;
}

//Alustus-funktio (tyhjentää "näytön")
function tyhjennä() {
  //console.log("Näyttö tyhjennetty."); //for debugging..
  tulos = "";
  document.getElementById("näyttö").innerHTML = tyhjätty;
}

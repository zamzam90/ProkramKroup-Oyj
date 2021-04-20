//Alustetaan muuttujia ja haetaan niihin arvot,
//Haetaan htmlstä syöttökenttä tehtävälle
var input = document.getElementById("input");
//Haetaan htmlstä "lisää tehtävä" painike
var enterButton = document.getElementById("button");
//Haetaan documentin ensimmäinen ul elementti, johon li elementit(tehtävät) lisätään
var ul = document.querySelector("ul");

//Tehdään funktio joka laskee inputtiin syötetyn merkkijonon pituuden
function inputLength() {
  return input.value.length; //palautetaan merkkijonon pituus
}

//Tehdään pääfunktio, joka luo lista elementin(tehtävän)
function createListElement() {
  var li = document.createElement("li"); // luodaan li elementti
  li.appendChild(document.createTextNode(input.value)); //laitetaan syöttökentän arvo(=teksti) li elementin tekstiksi
  ul.appendChild(li); //lisätään li elementti ul:ään
  input.value = ""; //tyhjennetään syöttökenttä
}

//Funktiot ja eventlistenerit jotka kutsuvat pääfunktiota,
//Funktio joka kutsuu pääfunktiota napin klikkauksen jälkeen
function addListAfterClick() {
  if (inputLength() > 0) {
    //varmistetaan että syöttökenttään on syötetty jotain
    createListElement();
  }
}
//Funktio joka kutsuu pääfunktiota enter painalluksen jälkeen
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    //varmistetaan että syöttökenttään on syötetty jotain ja "kuunnellaan" onko enteriä painettu
    //nro 13 on Enterin avainkoodi, voidaan kirjoittaa myös event.keyCode === 13
    createListElement();
  }
}
//jos nappia painetaan
enterButton.addEventListener("click", addListAfterClick);
//jos syöttökentässä painetaan enter näppäintä
input.addEventListener("keypress", addListAfterKeypress);

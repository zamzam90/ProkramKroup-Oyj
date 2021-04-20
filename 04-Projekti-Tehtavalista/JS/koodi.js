//Alustetaan muuttujia ja haetaan niihin arvot,
//Haetaan htmlstä syöttökentän arvo tehtävälle
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

  //Valmiin tehtävän värjäys alkaa
  //Koska tämä on funktion sisällä, koskee vain pääfunktiolla tehtyjä li elementtejä(tehtäviä)
  function crossOut() {
    li.classList.toggle("done"); //vaihdetaan li elementin classin done:ksi
  }

  li.addEventListener("click", crossOut); //kun li elementtiä klikataan, se merkitään tehdyksi crossOut() funktiolla
  //värjäys päättyy

  //Poista napin lisäys alkaa
  var dBtn = document.createElement("button"); //luodaan poisto nappi
  dBtn.appendChild(document.createTextNode("🗑")); //lisätään nappiin teksti "🗑"(roskis hymiö)
  li.appendChild(dBtn); //lisätään nappi li elementtiin
  dBtn.addEventListener("click", deleteListItem); //kun X:ää painetaan, li elementti poistetaan
  //Poista napin lisäys päättyy

  //Poisto funktio
  function deleteListItem() {
    li.classList.add("delete"); //vaihtaa li elementin classin delete:ksi
  }
}

//Funktiot jotka kutsuvat pääfunktiota, ja eventlistenerit,
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
//event listener jos nappia painetaan
enterButton.addEventListener("click", addListAfterClick);
//event listener jos syöttökentässä painetaan enter näppäintä
input.addEventListener("keypress", addListAfterKeypress);

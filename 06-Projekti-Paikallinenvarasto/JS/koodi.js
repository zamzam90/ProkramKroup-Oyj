//Paikallinen varasto js

/* alustetaan muuttujia ja haetaan niihin tietoa */
var varasto = document.getElementById("varastoAlue");
var lsForm = document.getElementById("formi");
var henkilöTiedot = {};
var id, avain, avaimenArvo;
id = localStorage.length;
avain = "henkilötiedot " + id;
avaimenArvo = "";

/* Funktio joka hakee tiedot lomakkeesta ja lisää ne olioon */
function formTiedotOlioon() {
  //for loopilla lisätään formin nimi ja arvo olioon.. -1 koska ei haluta nappia olioon
  for (x = 0; x < lsForm.length - 1; x++) {
    console.log(lsForm[x].name + " " + lsForm[x].value); //tulostetaan "nimi" ja sen arvo
    /* lisää tiedot taulukosta olioon */
    henkilöTiedot[lsForm[x].name] = lsForm[x].value;
  }
}
/* ---------------------------------------------------------------- */

/* Funktio joka muuttaa olion string muotoon */
function olioStringiksi() {
  avaimenArvo = JSON.stringify(henkilöTiedot); //muutetaan olio stringiksi
  console.log("olio stringiföity..");
}

/* Funktio joka lisää avaimen("henkilötiedot: ") ja arvon(=olion) localstorageen */
function lisääLocalStorageen() {
  päivitäAvain(); //päivitetään avain ennenkuin tallennetaan
  /* tässä lisätään avain ja arvo(=olio) localstorageen */
  localStorage.setItem(avain, avaimenArvo);
}

/* Funktio joka päivittää avaimen tallentamisen jälkeen */
function päivitäAvain() {
  id = localStorage.length; //päivittää id:n localstoragen lengthin perusteella
  avain = "henkilötiedot " + id; //päivitetään avain uudella id:llä
}

/* Funktio joka kutsuu muita funktioita.... */
function tallennaTiedot() {
  console.log("Olio:");
  formTiedotOlioon(); //lisätään lomakkeen tiedot olioon
  olioStringiksi(); //muutetaan olio stringiksi
  console.log("avain: " + avain); //for testing..
  console.log("arvo: " + avaimenArvo); //for testing..
  lisääLocalStorageen(); //lisätään avain ja arvo(=olio) localstorageen
  päivitäAvain(); //päivitetään avain consolelogia varten
  console.log("seuraava avain: " + avain); //for testing
  document.getElementById("formi").reset(); //tyhjätään lomake tallentamisen jälkeen
}

function tietoLomake() {
  //alustetaan muuttujia, tiedot haetaan lomakkeesta
  var etuNimi = document.getElementById("arvoEtun").value;
  var sukuNimi = document.getElementById("arvoSukun").value;
  var osoite = document.getElementById("arvoLahios").value;
  var postiNumero = document.getElementById("arvoPostin").value;
  var postiPaikka = document.getElementById("arvoPostit").value;
  var puhelin = document.getElementById("arvoPuh").value;
  var sahkoPosti = document.getElementById("arvoSposti").value;

  //tarkastetaan etunimen kenttä ja pituus
  if (etuNimi === "") {
    alert("Syötä etunimi!");
    return false;
  } else if (etuNimi.length < 2) {
    alert("Antamasi etunimi on liian lyhyt!");
    return false;
  }

  //tarkastetaan kaikki kentät että jotain on syötetty
  if (sukuNimi === "") {
    alert("Syötä sukunimi!");
    return false;
  }

  if (osoite === "") {
    alert("Syötä lähiosoite!");
    return false;
  }

  if (postiNumero === "") {
    alert("Syötä postinumero!");
    return false;
  }

  if (postiPaikka === "") {
    alert("Syötä postitoimipaikka!");
    return false;
  }

  if (puhelin === "") {
    alert("Syötä puhelinnumero!");
    return false;
  }

  if (sahkoPosti === "") {
    alert("Syötä sähköpostiosoite!");
    return false;
  }

  tallennaTiedot(); // tallennettaa tietoi localstoragee
}

/* Funktio joka tulostaa tiedot htmlään */
function listaa() {
  var tulosteAvain,
    tulosteArvo,
    htmlTuloste = "";

  console.log("tulostetaan...");
  for (x = 0; x < localStorage.length; x++) {
    // hae avaimet ls:stä
    tulosteAvain = localStorage.key(x);
    console.log(tulosteAvain);
    // hae avaimella arvo(olio) ls:stä
    tulosteArvo = JSON.parse(localStorage.getItem(tulosteAvain));
    console.log(tulosteArvo);
    /* todo:
      -tulosta olio nätisti htmlään, table?  
    */
    // lisätään avain ja arvo tulosteeseen
    htmlTuloste += tulosteAvain + " " + tulosteArvo + "<br>";
  }
  document.getElementById("varastoAlue").innerHTML = htmlTuloste;
}

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
  var etuNimi = document.getElementById("arvoEtun");
  var sukuNimi = document.getElementById("arvoSukun");
  var osoite = document.getElementById("arvoLahios");
  var postiNumero = document.getElementById("arvoPostin");
  var postiPaikka = document.getElementById("arvoPostit");
  var puhelin = document.getElementById("arvoPuh");
  var sahkoPosti = document.getElementById("arvoSposti");

  //tarkastetaan etunimen kenttä ja pituus
  if (etuNimi.value === "") {
    alert("Syötä etunimi!");
    etuNimi.focus();
    return false;
  } else if (etuNimi.value.length < 2) {
    alert("Antamasi etunimi on liian lyhyt!");
    etuNimi.focus();
    return false;
  }

  //tarkastetaan kaikki kentät että jotain on syötetty
  if (sukuNimi.value === "") {
    alert("Syötä sukunimi!");
    sukuNimi.focus();
    return false;
  }

  if (osoite.value === "") {
    alert("Syötä lähiosoite!");
    osoite.focus();
    return false;
  }

  if (postiNumero.value === "") {
    alert("Syötä postinumero!");
    postiNumero.focus();
    return false;
  } else if (isNaN(postiNumero.value)) {
    alert("Postinumeron on oltava numeroita!");
    postiNumero.focus();
    return false;
  }

  if (postiPaikka.value === "") {
    alert("Syötä postitoimipaikka!");
    postiPaikka.focus();
    return false;
  }

  if (puhelin.value === "") {
    alert("Syötä puhelinnumero!");
    puhelin.focus();
    return false;
  } else if (isNaN(puhelin.value)) {
    alert("Puhelinnumeron on oltava numeroita!");
    puhelin.focus();
    return false;
  }

  if (emailIsValid(sahkoPosti.value)) {
  } else {
    alert("Anna oikea sähköpostiosoite!");
    sahkoPosti.focus();
    return false;
  }
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  tallennaTiedot(); // tallennettaa tietoi localstoragee
}

/* Funktio joka tulostaa tiedot htmlään */
function listaa() {
  // alustelut
  var tulosteAvain,
    tulosteArvo,
    arrayFromObject = [],
    htmlTuloste = "<table align='center'>";

  // magic
  console.log("tulostetaan...");
  for (x = 0; x < localStorage.length; x++) {
    // hae avaimet ls:stä
    tulosteAvain = localStorage.key(x);
    console.log(tulosteAvain);
    htmlTuloste += "<tr><th>" + tulosteAvain + "</th>";
    htmlTuloste +=
      "<th><button type='button' id='" +
      tulosteAvain +
      "' onclick='poistaAvain(this)'>Poista tieto</button></th></tr>";
    // hae avaimella arvo(olio) ls:stä
    tulosteArvo = JSON.parse(localStorage.getItem(tulosteAvain));
    console.log(tulosteArvo);
    // muutetaan objekti listaksi https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
    arrayFromObject = Object.entries(tulosteArvo);
    // tehdään table avaimesta ja arvosta(objektin listasta)
    for (a = 0; a < arrayFromObject.length; a++) {
      htmlTuloste += "<tr>";
      for (b = 0; b < arrayFromObject[a].length; b++) {
        htmlTuloste += "<td>" + arrayFromObject[a][b] + "</td>";
      }
      htmlTuloste += "</tr>";
    }
  }
  htmlTuloste += "</table>";
  // kirjoita htmlTuloste htmlään..
  document.getElementById("varastoAlue").innerHTML = htmlTuloste;
}

function poistaAvain(key) {
  const avain = key.id;
  console.log("poistetaan: " + avain);
  localStorage.removeItem(avain);
  listaa(); // "päivitetään" näkymä
}

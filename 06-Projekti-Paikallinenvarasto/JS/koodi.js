//Paikallinen varasto js
//alert("pööööö"); - toimii!
function tietoLomake() {
  alert("test");
  //alustetaan muuttujia, tiedot haetaan lomakkeesta
  var etuNimi = document.getElementById("arvoEtun").value;
  var sukuNimi = document.getElementById("arvoSukun").value;
  var osoite = document.getElementById("arvoLahios").value;
  var postiNumero = document.getElementById("arvoPostin").value;
  var postiPaikka = document.getElementById("arvoPostit").value;
  var puhelin = document.getElementById("arvoPuh").value;
  var sahkoPosti = document.getElementById("arvoSposti").value;
  var varasto = document.getElementById("varastoAlue").value;

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

  if(postiNumero === "") {
    alert("Syötä postinumero!");
    return false;
  }

 if(postiPaikka === "") {
   alert("Syötä postitoimipaikka!");
   return false;
 }

 if(puhelin === "") {
   alert("Syötä puhelinnumero!");
   return false;
 }

 if(sahkoPosti === "") {
   alert("Syötä sähköpostiosoite!");
   return false;
 }

function tallenna() {
  
}
}

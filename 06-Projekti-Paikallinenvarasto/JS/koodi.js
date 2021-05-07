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

  //tarkastetaan etunimen pituus
  if (etuNimi === "") {
    alert("Syötä etunimi!");
    return false;
  } else if (etuNimi.length < 2) {
    alert("Antamasi etunimi on liian lyhyt!");
    return false;
  }
}

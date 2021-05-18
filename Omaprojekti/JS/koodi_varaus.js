//yhteydenottolomake
function lomake(form) {
  //Haetaan tiedot muuttujiin lomakkeesta
  var nimi = document.getElementById("nimi").value;
  var sahkoposti = document.getElementById("email").value;
  var n = document.getElementById("numero").value;
  var yhteys = document.getElementById("palaute").value;

  if (nimi.length < 2) {
    alert("Antamasi nimi on liian lyhyt!");
    return false;
  }

  //Söhköpostin tarkastus
  if (emailIsValid(sahkoposti)) {
  } else {
    alert("Anna oikea sähköpostiosoitteesi!");
    return false;
  }
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  //Puhelinnumeron tarkastus
  //Puhelinnumeron on oltava numeroita, määritetään se isNaN:Lla
  if (n === "") {
    alert("Anna puhelinnumerosi!");
    return false;
  } else if (isNaN(n)) {
    alert("Puhelinnumeron on oltava numeroita!");
    return false;
  }

  //tekstiä syötetty kenttään, tsekkaus
  if (yhteys.length < 3) {
    alert("Kirjoita kommentteihin vähintään 3 merkkiä!");
    return false;
  }
}

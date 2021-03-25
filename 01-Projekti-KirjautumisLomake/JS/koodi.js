//Kirjautumislomake
//console.info("koodi.js loaded.."); //for debugging
function checkLoginForm(form) {
  //alustetaan muuttujia, haetaan niihin tiedot lomakkeesta:
  var käyttäjäNimi = form.name.value;
  var salasana = form.password.value;
  var radiobuttonit = document.getElementsByName("radio");
  var millainenKoneenKäyttäjä = false;
  var checkboksit = document.getElementsByName("box");
  var mitäMieltäSivusta = false;
  var palauteboxi = document.getElementById("feedback").value;
  //tarkistetaan nimen pituus:
  if (käyttäjäNimi.length < 3) {
    //console.log("Nimen pituus: " + userName.length + " kirjainta."); //for debugging
    alert("Nimi alle 3 kirjainta!");
    return false;
  }
  //tarkistetaan salasanan pituus (pitää olla yli 15 merkkiä), mitä pidempi sen parempi :D
  if (salasana.length < 15) {
    //console.log("Salasanan pituus: " + password.length + " merkkiä."); //for debugging
    alert("Liian lyhyt salasana! (alle 15-merkkiä)");
    return false;
  }
  //tarkastetaan että joku radiobuttoni on valittuna:
  //console.log("Radioboxit: " + radiobuttonit.length); //for debugging
  for (var x = 0; x < radiobuttonit.length; x++) {
    if (radiobuttonit[x].checked == true) {
      millainenKoneenKäyttäjä = true;
    }
  }
  if (millainenKoneenKäyttäjä == false) {
    alert("Valitse vielä millainen koneenkäyttäjä olet.");
    return false;
  }
  //tarkastetaan checkboksit samallatavalla:
  //console.log("Checkboxit: " + checkboksit.length); //for debugging
  for (var y = 0; y < checkboksit.length; y++) {
    if (checkboksit[y].checked == true) {
      mitäMieltäSivusta = true;
    }
  }
  if (mitäMieltäSivusta == false) {
    alert("Valitse vielä mitä mieltä sivuistamme olet.");
    return false;
  }
  //tarkistetaan että dropdown valikosta on valittuna jotain:
  var dropdownlist = document.getElementById("dropdown");
  var valittuAine = dropdownlist.options[dropdownlist.selectedIndex].value;
  if (valittuAine == "empty") {
    alert("Valitse vielä lempiaineesi Keudassa.");
    return false;
  }
  //tarkastetaan että palauteboksissa on tekstiä, ainakin 15merkkiä:
  if (palauteboxi.length < 15) {
    //console.log("Merkkien määrä palautteessa: " + palauteboxi.length);//for debugging
    alert("Anna vielä palautteeseen vähintään 15 merkkiä.");
    return false;
  }
}

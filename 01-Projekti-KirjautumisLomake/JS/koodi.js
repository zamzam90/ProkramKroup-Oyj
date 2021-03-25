//Kirjautumislomake
console.info("koodi.js loaded.."); //for debugging
function checkLoginForm(form) {
  //alustetaan muuttujia, haetaan niihin tiedot lomakkeesta:
  var userName = form.name.value;
  var password = form.password.value;
  var radiobuttonit = document.getElementsByName("radio");
  var millainenKoneenKäyttäjä = false;
  var checkboksit = document.getElementsByName("box");
  var mitäMieltäSivusta = false;
  var palauteboxi = document.getElementById("feedback").value;
  //tarkistetaan nimen pituus:
  if (userName.length < 3) {
    console.log("Nimen pituus: " + userName.length + " kirjainta."); //for debugging
    alert("Nimi alle 3 kirjainta!");
    return false;
  }
  //tarkistetaan salasanan pituus (pitää olla yli 15 merkkiä), mitä pidempi sen parempi :D
  if (password.length < 15) {
    console.log("Salasanan pituus: " + password.length + " merkkiä."); //for debugging
    alert("Liian lyhyt salasana!");
    return false;
  }
  //tarkastetaan että joku radiobuttoni on valittuna:
  console.log("Radioboxit: " + radiobuttonit.length); //for debugging
  for (var x = 0; x < radiobuttonit.length; x++) {
    if (radiobuttonit[x].checked == true) {
      millainenKoneenKäyttäjä = true;
    }
  }
  if (millainenKoneenKäyttäjä == false) {
    alert("Valitse millainen koneenkäyttäjä olet.");
    return false;
  }
  //tarkastetaan checkboksit samallatavalla:
  console.log("Checkboxit: " + checkboksit.length); //for debugging
  for (var y = 0; y < checkboksit.length; y++) {
    if (checkboksit[y].checked == true) {
      mitäMieltäSivusta = true;
    }
  }
  if (mitäMieltäSivusta == false) {
    alert("Valitse mitä mieltä sivuistamme olet.");
    return false;
  }
  //tarkistetaan että dropdown valikosta on valittuna jotain:
  var ddl = document.getElementById("dropdown");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
     if (selectedValue == "empty")
    {
     alert("Valitse lempiaineesi Keudassa.");
      return false;
    }
  //tarkastetaan että palauteboksissa on tekstiä, ainakin 15merkkiä:
  if (palauteboxi.length < 15) {
    console.log("Merkkien määrä palautteessa: " + palauteboxi.length);//for debugging
    alert("Anna palautteeseen vähintään 15 merkkiä.");
    return false;
  }
}

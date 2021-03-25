//Kirjautumislomake
console.info("koodi.js loaded..");//for debugging
function checkLoginForm(form) {
  //alustetaan muuttujia, haetaan niihin tiedot lomakkeesta:
  var userName = form[0].name.value;
  //tarkistetaan nimen pituus:
  if (userName.length < 3) {
    console.log("Nimen pituus: " + userName.length);//for debugging
    alert("Nimi alle 3 kirjainta!");
    return false;
  }
  //tarkistetaan salasanan pituus (pitää olla yli 15 merkkiä), mitä pidempi sen parempi :D

}

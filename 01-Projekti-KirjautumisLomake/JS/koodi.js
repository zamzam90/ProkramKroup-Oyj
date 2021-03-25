//Kirjautumislomake
console.info("koodi.js loaded..");//for debugging
function checkLoginForm(form) {
  var userName = form.name.value;
  if (userName.length < 5) {
    alert("Nimi alle 5 kirjainta!");
    return false;
  }
}

//Kirjautumislomake
console.log("testing..");
//alustetaan muuttujia..
//nimi & salasana:
var userName = document.getElementById("user").value;
var password = document.getElementById("password").value;
//radionapit:
var radioNappi1 = document.getElementById("radio1").value;
var radioNappi2 = document.getElementById("radio2").value;
var radioNappi3 = document.getElementById("radio3").value;
//checkboxit:
var zekkiNappi1 = document.getElementById("check1").value;
var zekkiNappi2 = document.getElementById("check2").value;
var zekkiNappi3 = document.getElementById("check3").value;
//dropdowni:
var dropdowni = document.getElementById("dropdown").value;
//kommenttikenttä:
var kommenttikenttä = document.getElementById("feedback").value;
//funktio joka tarkastaa lomakkeen:
function checkLoginForm(form) {
  if (userName < 4) {
    alert("test");
  }
}

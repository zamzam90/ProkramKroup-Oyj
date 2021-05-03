//Muistipeli

/* TODO:
    -lisätä eventlistenerit korteille..
    -tehdä napsautuksien seuraaminen..
    -tehdä ajanotto..
*/

/* Alustetaan muuttujia.. */
var gameArea,
  gameCards6x6 = [],
  gameCards4x6 = [],
  gameCards4x4 = [],
  dropDownMenu,
  selectedGameMode,
  selectedCardDeck = [];
/* ..ja haetaan niihin tietoja */
gameArea = document.getElementById("pelikentta");
gameCards6x6 = [
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
  "kortti-9.png",
  "kortti-10.png",
  "kortti-11.png",
  "kortti-12.png",
  "kortti-13.png",
  "kortti-14.png",
  "kortti-15.png",
  "kortti-16.png",
  "kortti-17.png",
  "kortti-18.png",
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
  "kortti-9.png",
  "kortti-10.png",
  "kortti-11.png",
  "kortti-12.png",
  "kortti-13.png",
  "kortti-14.png",
  "kortti-15.png",
  "kortti-16.png",
  "kortti-17.png",
  "kortti-18.png",
];
gameCards4x6 = [
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
  "kortti-9.png",
  "kortti-10.png",
  "kortti-11.png",
  "kortti-12.png",
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
  "kortti-9.png",
  "kortti-10.png",
  "kortti-11.png",
  "kortti-12.png",
];
gameCards4x4 = [
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
  "kortti-1.png",
  "kortti-2.png",
  "kortti-3.png",
  "kortti-4.png",
  "kortti-5.png",
  "kortti-6.png",
  "kortti-7.png",
  "kortti-8.png",
];

// Das spielen!
function main() {
  selectedGameSize();
  console.log(selectedGameMode + "peli valittu.");
  cardDeckSelected();
  createGame();
  console.log("peli luotu.");
}

//Funktio joka hakee pelin valinnan pudotusvalikosta.
function selectedGameSize() {
  dropDownMenu = document.getElementById("putous");
  //   console.log(dropDownMenu); //for testing..
  selectedGameMode = dropDownMenu.options[dropDownMenu.selectedIndex].value;
  //   console.log("valikosta valittu peli: " + SelectedGameMode); //for testing..
  return selectedGameMode;
}

//Funktio joka syöttää valitun määrän kortteja pelipakkaan.
function cardDeckSelected() {
  /* tunnista mikä peli on valittu (4x4/4x6/6x6) ja valitse oikea määrä kortteja pakkaan */
  if (selectedGameMode == "tyhja") {
    selectedCardDeck = [];
    return alert("valitse pelin koko!");
  }
  if (selectedGameSize() == "pieni") {
    selectedGameMode = "pieni";
    selectedCardDeck = gameCards4x4;
    shuffleCards();
    return /* alert("pieni peli valittu!") */;
  }
  if (selectedGameSize() == "keski") {
    selectedGameMode = "keski";
    selectedCardDeck = gameCards4x6;
    shuffleCards();
    return /* alert("keski peli valittu!") */;
  }
  if (selectedGameSize() == "suuri") {
    selectedGameMode = "suuri";
    selectedCardDeck = gameCards6x6;
    shuffleCards();
    return /* alert("suuri peli valittu!") */;
  }
}

/* Funktio joka sekoittaa valitun korttipakan.
https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript */
function shuffleCards() {
  var i = selectedCardDeck.length,
    k,
    temp; // k is to generate random index and temp is to swap the values
  while (--i > 0) {
    k = Math.floor(Math.random() * (i + 1));
    temp = selectedCardDeck[k];
    selectedCardDeck[k] = selectedCardDeck[i];
    selectedCardDeck[i] = temp;
  }
  console.log(selectedCardDeck);
}

//Funktio joka luo pelitaulukon.
function createGame() {
  /* luodaan valitun koon mukainen lista johon kortit sekoitettuna laitettu */
  var output = "";
  for (var x = 0; x < selectedCardDeck.length; x++) {
    output += "<div class='card'>";
    output += "<div class='card-front hidden'>";
    output += "<img src=" + selectedCardDeck[x] + "></img>";
    output += "</div>";
    output += "<div class='card-back visible'>";
    output += "<img src='kortti.png'></img>";
    output += "</div>";
    output += "</div>";
  }
  //kirjoitettaan se htmlään
  document.getElementById("pelikentta").innerHTML = output;

  let card = document.getElementsByClassName("card");
  // loop to add event listeners to each card
  for (var i = 0; i < card.length; i++) {
    card[i].addEventListener("click", test);
  }
}

function test() {
  alert("testing");
}

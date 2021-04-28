//Muistipeli

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
  [
    "kortti-1.png",
    "kortti-2.png",
    "kortti-3.png",
    "kortti-4.png",
    "kortti-5.png",
    "kortti-6.png",
  ],
  [
    "kortti-7.png",
    "kortti-8.png",
    "kortti-9.png",
    "kortti-10.png",
    "kortti-11.png",
    "kortti-12.png",
  ],
  [
    "kortti-13.png",
    "kortti-14.png",
    "kortti-15.png",
    "kortti-16.png",
    "kortti-17.png",
    "kortti-18.png",
  ],
  [
    "kortti-1.png",
    "kortti-2.png",
    "kortti-3.png",
    "kortti-4.png",
    "kortti-5.png",
    "kortti-6.png",
  ],
  [
    "kortti-7.png",
    "kortti-8.png",
    "kortti-9.png",
    "kortti-10.png",
    "kortti-11.png",
    "kortti-12.png",
  ],
  [
    "kortti-13.png",
    "kortti-14.png",
    "kortti-15.png",
    "kortti-16.png",
    "kortti-17.png",
    "kortti-18.png",
  ],
];
gameCards4x6 = [
  [
    "kortti-1.png",
    "kortti-2.png",
    "kortti-3.png",
    "kortti-4.png",
    "kortti-5.png",
    "kortti-6.png",
  ],
  [
    "kortti-7.png",
    "kortti-8.png",
    "kortti-9.png",
    "kortti-10.png",
    "kortti-11.png",
    "kortti-12.png",
  ],
  [
    "kortti-1.png",
    "kortti-2.png",
    "kortti-3.png",
    "kortti-4.png",
    "kortti-5.png",
    "kortti-6.png",
  ],
  [
    "kortti-7.png",
    "kortti-8.png",
    "kortti-9.png",
    "kortti-10.png",
    "kortti-11.png",
    "kortti-12.png",
  ],
];
gameCards4x4 = [
  ["kortti-1.png", "kortti-2.png", "kortti-3.png", "kortti-4.png"],
  ["kortti-5.png", "kortti-6.png", "kortti-7.png", "kortti-8.png"],
  ["kortti-1.png", "kortti-2.png", "kortti-3.png", "kortti-4.png"],
  ["kortti-5.png", "kortti-6.png", "kortti-7.png", "kortti-8.png"],
];

// Das spielen!
function main() {
  selectedGameSize();
  console.log(selectedGameMode + "peli valittu.");
  cardDeckSelected();
  console.log("kortit:");
  console.log(selectedCardDeck);
  /* console.log(shuffledCardDeck); */
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
    //shuffleCards();
    return /* alert("pieni peli valittu!") */;
  }
  if (selectedGameSize() == "keski") {
    selectedGameMode = "keski";
    selectedCardDeck = gameCards4x6;
    //shuffleCards();
    return /* alert("keski peli valittu!") */;
  }
  if (selectedGameSize() == "suuri") {
    selectedGameMode = "suuri";
    selectedCardDeck = gameCards6x6;
    //shuffleCards();
    return /* alert("suuri peli valittu!") */;
  }
}

//Funktio joka sekoittaa valitun korttipakan.
/* function shuffleCards() {
  korttien sekoitusta tähän...
  var shuffledCardDeck = selectedCardDeck;
  sekoitus taikaa tähän
  selectedCardDeck = shuffledCardDeck;
  return selectedCardDeck;
  return selectedCardDeck sekoitettuna
} */

//Funktio joka luo pelitaulukon.
function createGame() {
  /* luodaan valitun koon mukainen taulukko? lista? juttu? johon kortit sekoitettuna laitettu
    kahdella for loopilla tehrää taulukko korteille.. */
  var output = '<table align="center">';
  for (var x = 0; x < selectedCardDeck.length; x++) {
    output += "<tr>";
    for (var y = 0; y < selectedCardDeck[x].length; y++) {
      output += "<td><img src=" + selectedCardDeck[x][y] + "></td>";
    }
    output += "</tr>";
  }
  output += "</table>";
  //kirjoitettaan se htmlään
  document.getElementById("pelikentta").innerHTML = output;
}

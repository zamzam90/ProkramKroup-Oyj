//Muistipeli

/* TODO:
    -tehdä napsautuksien seuraaminen..
    -tehdä ajanotto..
*/

/* Alustetaan muuttujia..
..ja haetaan niihin tietoja */

var gameArea,
  dropDownMenu,
  selectedGameMode,
  selectedCardDeck = [],
  timer = 0,
  guessCount = 0,
  firstGuess = "",
  secondGuess = "",
  count = 0,
  previousTarget = null,
  delay = "1000";
gameArea = document.getElementById("pelikentta");
const gameCards6x6 = [
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
const gameCards4x6 = [
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
const gameCards4x4 = [
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

//funktio joka resetoiarvaukset
function resetGuesses() {
  (firstGuess = ""), (secondGuess = ""), (count = 0), (previousTarget = null);
  var visibleCard = document.querySelectorAll(".selected");
  console.log(visibleCard);
  visibleCard.forEach((card) => {
    if (card.className == "selected visible") {
      card.className = "hidden";
    }
    if (card.className == "selected hidden") {
      card.className = "visible";
    }
  });
}

//funktio joka tarkastaa mätsääkö 2 käännettyä korttia
function match() {
  console.log("howdy mätsi!");
  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.className = "match";
  });
}

//Funktio joka luo pelitaulukon.
function createGame() {
  /* luodaan valitun koon mukainen lista johon kortit sekoitettuna laitettu */
  var output = "";
  for (var x = 0; x < selectedCardDeck.length; x++) {
    output += "<div class='card'>";
    output += "<img src=" + selectedCardDeck[x] + " class='hidden'></img>";
    output += "<img src='kortti.png' class='visible'></img>";
    output += "</div>";
  }
  //kirjoitettaan se htmlään
  document.getElementById("pelikentta").innerHTML = output;

  var card = document.getElementsByClassName("card");
  // loop to add event listeners to each card
  for (var i = 0; i < card.length; i++) {
    card[i].addEventListener("click", showCard);
  }

  // valittu kortti "käännetään"..
  function showCard() {
    var clicked = this.firstChild;
    console.log("klikattu:");
    console.log(clicked);

    if (
      this === previousTarget ||
      this.firstChild.classList.contains("selected") ||
      this.firstChild.classList.contains("match")
    ) {
      return;
    }

    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = this.firstChild.src;
        console.log("eka arvaus:");
        console.log(firstGuess);
        console.log("count:");
        console.log(count);
        this.firstChild.className = "selected visible";
        this.lastChild.className = "selected hidden";
      } else {
        secondGuess = this.firstChild.src;
        console.log("toka arvaus:");
        console.log(secondGuess);
        console.log("count:");
        console.log(count);
        this.firstChild.className = "selected visible";
        this.lastChild.className = "selected hidden";
      }
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        console.log("mätsi");
        setTimeout(match, delay);
      }
      console.log("arvauksien nollaus");
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
}

  //taimeri päälle kun klikkaa ensimmäistä korttia

//Muistipeli

/* Alustetaan muuttujia..
..ja haetaan niihin tietoja */

var gameArea,
  dropDownMenu,
  selectedGameMode,
  selectedCardDeck = [],
  timer,
  second,
  minute,
  hour,
  interval,
  guessCount = 0,
  firstGuess = "",
  secondGuess = "",
  count = 0,
  moves = 0,
  previousTarget = null,
  delay = "800";
gameArea = document.getElementById("pelikentta");
second = 0;
minute = 0;
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
  selectedGameSize(); //mikä pelikoko valittu
  console.log(selectedGameMode + "peli valittu.");
  cardDeckSelected(); //pelin koon mukaan sekoitettu korttipakka
  createGame(); //luodaan peli htmlään
  console.log("peli luotu.");
  pairsLeft(); //käynnistetään parejajäljellä laskuri
  guessCountReset(); //resetoidaan arvausyrityksiä laskuri
  changeBtn(); //vaihdetaan aloitus napin tekstiä..
}

//Funktio joka hakee pelin koon valinnan pudotusvalikosta.
function selectedGameSize() {
  dropDownMenu = document.getElementById("putous");
  //   console.log(dropDownMenu); //for testing..
  selectedGameMode = dropDownMenu.options[dropDownMenu.selectedIndex].value;
  //   console.log("valikosta valittu peli: " + SelectedGameMode); //for testing..
  return selectedGameMode;
}

//Funktio joka syöttää valitun pelin koon mukaan oikean määrän kortteja pelipakkaan.
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

/* Funktio joka sekoittaa pelipakan.
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
  // console.log(selectedCardDeck);
}

//Funktio joka luo pelitaulukon.
function createGame() {
  /* luodaan valitun koon mukainen lista johon kortit sekoitettuna laitettu */
  var output = "";
  timer = document.querySelector(".timer");

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
    card[i].addEventListener("click", onClick);
  }

  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
  moves = 0;
}

// kun korttia klikataan..
function onClick() {
  var clicked = this.firstChild;
  /* console.log("--------------------");
  console.log("klikattu:");
  console.log(clicked); */
  moves++;

  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
    changeBtn();
  }

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
      /* console.log("eka arvaus:");
      console.log(firstGuess);
      console.log("count: " + count);
      console.log("--------------------"); */
      this.firstChild.className = "selected visible";
      this.lastChild.className = "selected hidden";
    } else {
      secondGuess = this.firstChild.src;
      /* console.log("toka arvaus:");
      console.log(secondGuess);
      console.log("count: " + count);
      console.log("--------------------"); */
      this.firstChild.className = "selected visible";
      this.lastChild.className = "selected hidden";
    }
  }

  if (count === 2) {
    guessCountUpdate();
  }

  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      /* console.log("--------------------");
      console.log("mätsi!!"); */
      setTimeout(match, delay);
    }
    /* console.log("arvauksien nollaus..");
    console.log("--------------------"); */
    guessCount++; //kasvatetaan arvausyrityslaskuria
    setTimeout(resetGuesses, delay);
  }
  previousTarget = clicked;
}

//funktio joka resetoiarvaukset.
function resetGuesses() {
  (firstGuess = ""), (secondGuess = ""), (count = 0), (previousTarget = null);
  var visibleCard = document.querySelectorAll(".selected");
  // console.log(visibleCard);
  visibleCard.forEach((card) => {
    if (card.className == "selected visible") {
      card.className = "hidden";
    }
    if (card.className == "selected hidden") {
      card.className = "visible";
    }
  });
}

//funktio joka tarkastaa mätsääkö 2 klikattua korttia.
function match() {
  /* console.log("--------------------");
  console.log("howdy mätsi!"); */
  var matchedCards = document.querySelectorAll(".selected");
  /* console.log("esillä olevat kortit:");
  console.log(matchedCards); */
  matchedCards.forEach((card) => {
    if (card.className == "selected visible") {
      // console.log(card);
      card.className = "match";
    }
    if (card.className == "selected hidden") {
      // console.log(card);
      card.className = "hidden";
    }
  });
  // console.log("--------------------");
  pairsLeft();
}

//funktio joka näyttää jäljellä olevien parien määrän.
function pairsLeft() {
  var pairs = document.getElementsByClassName("visible");
  var pairsLeft = pairs.length / 2;
  document.getElementById("pairsleft").innerHTML = pairsLeft;
  if (pairsLeft === 0) {
    guessCount = 0;
    clearInterval(interval);
  }
}

//funktio joka resetoi käytetyarvaukset laskurin.
function guessCountReset() {
  document.getElementById("guessess").innerHTML = guessCount = 0;
  moves = 0; //resetoidaan movesit
}

//käytetytarvaukset laskuri.
function guessCountUpdate() {
  document.getElementById("guessess").innerHTML = guessCount + 1;
}

/*Ajanotto funktio..
https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript kohta #5) */
function startTimer() {
  timer = document.querySelector(".timer");
  interval = setInterval(function () {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function changeBtn() {
  var x = document.getElementById("aloita");
  if (moves == 0) {
    // console.log("moves 0");
    x.innerHTML = "Käynnistä peli";
  } else {
    // console.log("moves enemmänkuin 0");
    x.innerHTML = "Aloita alusta";
  }
}

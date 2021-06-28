const cards = document.getElementsByClassName("cards");

var hasAnyCardBeenFlippedToMatch = false;
var firstCard;
var secondCard;

var lockBoard = false;
function flipCard() {
  //Dont let the click do anything when board is locked
  if (lockBoard) return;

  //For double click on a single card
  if (this === firstCard) return;

  this.classList.toggle("flip");
  if (!hasAnyCardBeenFlippedToMatch) {
    //first click
    hasAnyCardBeenFlippedToMatch = true;
    firstCard = this;
  } else {
    //second click
    secondCard = this; //Didnt change hasanycardflipped to false here as we are doing it in the function called.
    //Now just on the second click we want to check if they match
    checkForMatch();
  }
}

function checkForMatch() {
  let firstCardType = firstCard.getAttribute("data-foodType");
  let secondCardType = secondCard.getAttribute("data-foodType");

  //If they match, keep them open, and also dont let the event fire on them ever again during this session, and if they dont match then unflip them.
  firstCardType === secondCardType ? disableClick() : unflipCards();
}

function unflipCards() {
  //lock the board as we want that till the time our unmatching cards are open, no other card should be clicked
  lockBoard = true;
  //We had to set a set time out because if we dont do so then as soon as we click on the second card and it is not same as first card then without even flipping the second card for even the first time, it will just flip the first card back. So we won't be able to see the second card's flipping and what is there under the second card.
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    //unclock the board after they have been unflipped.
    resetBoard();
  }, 1000);
}

function disableClick() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  [hasAnyCardBeenFlippedToMatch, lockBoard] = [false, false];
}

function shuffleCards() {
  [...cards].forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
shuffleCards();

[...cards].forEach((element) => {
  element.addEventListener("click", flipCard);
});

document.getElementById("resetGame").addEventListener("click", () => {
  [...cards].forEach((element) => {
    element.classList.remove("flip");
  });
  setTimeout(shuffleCards, 500);
  [...cards].forEach((element) => {
    element.addEventListener("click", flipCard);
  });
});

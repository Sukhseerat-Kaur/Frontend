let startingDiv = document.querySelector(".starting-div");
let container = document.querySelector(".container");
let startBtn = document.querySelector(".start-btn");
let over = document.querySelector(".over");
var questionsList = [
  {
    ques: "Some months have 30 days, some have 31, how many months have 28 days ?",
    option1: "One",
    option2: "Four",
    option3: "Six",
    option4: "Twelve",

    correctAns: "option4",
  },
  {
    ques: "A plane crashes on the border of India-Pakistan . Where do the survivors get buried ?",
    option1: "In hell",
    option2: "In the graveyard",
    option3: "In the sky",
    option4: "They dont get buried lol",

    correctAns: "option4",
  },
  {
    ques: "If You Overtake the 3rd Person in a Race, What Would be Your Position?",
    option1: "First",
    option2: "Second",
    option3: "Third",
    option4: "Last",

    correctAns: "option3",
  },
  {
    ques: "A single storey house has 3 rooms , all the furniture is yellow. What's the colour of the stairs?",
    option1: "Yellow",
    option2: "No staircase",
    option3: "Green",
    option4: "Pink",

    correctAns: "option2",
  },

  {
    ques: "There's a family with a mother, father , 3 daughters and each daughter has one brother. How many family members are there in total ?",
    option1: "Six",
    option2: "Eight",
    option3: "Ten",
    option4: "Five",

    correctAns: "option1",
  },
  {
    ques: "Ali's father has 5 children , the first 4 are named 1, 2, 3, 4. What is the name of the fifth child ?",
    option1: "Raj",
    option2: "5",
    option3: "Ali",
    option4: "Kabir",

    correctAns: "option3",
  },
];
const TOTAL_QUES = questionsList.length;

let quesDiv = document.querySelector(".question");
let optionBtns = document.querySelector(".options").children;
let nextBtn = document.querySelector(".next");
let optionsDiv = document.querySelector(".options");
let quesNum = 1;
let quesObj;
let optionSelected = false;
let score = 0;

startQuiz();

function startQuiz() {
  startBtn.addEventListener("click", () => {
    startingDiv.classList.remove("show");
    startingDiv.classList.add("hide");

    container.classList.remove("hide");
    container.classList.add("show");
  });
  startTimer();
  renderQues();
}

function startTimer() {
  const STARTING_TIME = 5;
  var time = 5 * 60;
  const timer = document.querySelector(".timer");

  updateTimer();
  setInterval(updateTimer, 1000);
  function updateTimer() {
    if (time === 0) {
      gameOver();
      return;
    }
    let mins = Math.floor(time / 60);
    let secs = time % 60;

    secs = secs < 10 ? "0" + secs : secs;

    timer.innerText = `0${mins}:${secs}`;
    time--;
  }
}

function renderQues() {
  optionSelected = false;
  let randomIndex = Math.floor(Math.random() * questionsList.length);
  quesObj = questionsList[randomIndex];

  quesDiv.innerText = "Q" + quesNum + ": " + quesObj.ques;
  optionBtns[0].innerText = quesObj.option1;
  optionBtns[1].innerText = quesObj.option2;
  optionBtns[2].innerText = quesObj.option3;
  optionBtns[3].innerText = quesObj.option4;

  questionsList.splice(randomIndex, 1);
  console.log(questionsList);

  checkAns();
  nextBtn.addEventListener("click", next);
}

function checkAns() {
  optionsDiv.addEventListener("click", addClass, { once: true });

  function addClass(e) {
    if (
      ["option1", "option2", "option3", "option4"].includes(e.target.className)
    ) {
      if (e.target.className == quesObj.correctAns) {
        e.target.classList.add("correct");
        score++;
      } else {
        e.target.classList.add("incorrect");
      }
      optionSelected = true;
    } else optionSelected = false;
  }
}

function next() {
  if (optionSelected) {
    [...optionBtns].forEach((btn) => {
      btn.classList.remove("correct");
      btn.classList.remove("incorrect");
    });
    quesNum++;
    quesNum > TOTAL_QUES ? gameOver() : renderQues();
  } else {
    alert("Select an option");
  }
}

let playAgainBtn = document.querySelector(".play-again");
let scoreDiv = document.querySelector(".score");

function gameOver() {
  container.classList.remove("show");
  container.classList.add("hide");
  over.classList.remove("hide");
  over.classList.add("show");

  scoreDiv.innerText = `Your Score: ${score}`;

  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

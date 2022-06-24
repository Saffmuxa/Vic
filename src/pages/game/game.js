import {
  questionfirstTheme,
  questionsecondTheme,
  questionthirdTheme,
  questionfourthTheme,
  questionfifthTheme,
} from "./quests.js";
const names = decodeURIComponent(window.location.search)
  .replace(/name=/g, "")
  .replace(/time=/g, "")
  .replace(/&/g, ", ")
  .replace("?", "")
  .split(",");
const teams = names.slice(0, -1);
const teamJS =
  '<div class="team js-team"><div class="team__name"><span class="name js-team__name">text </span></div><div class="board"><div class="score-board"><div class="the-score">$<span class="dollar js-score">0</span></div></div><div class="answer-board js-answer-board disable"><button class="correct js-correct"></button><button class="incorrect js-incorrect"></button></div></div></div>';
teams.forEach((team) => {
  console.log(team);
  document.querySelector(".js-teams").insertAdjacentHTML("afterbegin", teamJS);
});
const teamNames = [...document.querySelectorAll(".js-team__name")];
teamNames.forEach((teamName, i) => {
  console.log(teams, i);
  teamName.textContent = teams[i];
});
const name1 = teamNames[0];
const name2 = teamNames[1];
const name3 = teamNames[2];
const name4 = teamNames[3];
const teamScore = [...document.querySelectorAll(".js-score")];

const time = document.querySelector(".js-countdown");
const timeH = document.querySelector(".js-countdown-one");
const timer = names[names.length - 1];
console.log(timer);
const hours = Math.floor(timer / 60);
let newTimer = 1;
const hoursC = Math.floor(newTimer / 60);
const minsC = Math.round(60 * (newTimer / 60 - Math.floor(newTimer / 60)));

const mins = Math.round(60 * (timer / 60 - Math.floor(timer / 60)));
// name1.textContent = names[0];
// name2.textContent = names[1];
const replacer = () => {
  if (timer < 60) {
    if (mins.toString().length == 1) {
      time.textContent = "0" + mins;
    } else {
      time.textContent = mins;
    }
  } else {
    if (hours.toString().length == 1) {
      timeH.textContent = "0" + hours;
    }
    if (hours.toString().length == 2) {
      timeH.textContent = hours;
    }
    if (mins.toString().length == 1) {
      time.textContent = "0" + mins;
    }
    if (mins.toString().length == 2) {
      time.textContent = mins;
    }
  }
};
const namesReplace = (newTimer) => {
  if (newTimer < 60) {
    timeH.textContent = "00";
    if (newTimer.toString().length == 1) {
      time.textContent = "0" + newTimer;
    } else {
      time.textContent = newTimer;
    }
  } else {
    if (Math.floor(newTimer / 60).toString().length == 1) {
      timeH.textContent = "0" + Math.floor(newTimer / 60);
    }
    if (Math.floor(newTimer / 60).toString().length == 2) {
      timeH.textContent = Math.floor(newTimer / 60);
    }
    if (minsC.toString().length == 1) {
      time.textContent =
        "0" + Math.round(60 * (newTimer / 60 - Math.floor(newTimer / 60)));
    }
    if (minsC.toString().length == 2) {
      time.textContent = Math.round(
        60 * (newTimer / 60 - Math.floor(newTimer / 60))
      );
    }
  }
};
replacer();
const titles = document.querySelectorAll(".js-title");
const questWindow = document.querySelector(".js-questionWindow");
const answerBoard = document.querySelectorAll(".js-answer-board");
const answerCorrect1 = document.querySelector(".js-correct1");
const answerCorrect2 = document.querySelector(".js-correct2");
const answerInCorrect1 = document.querySelector(".js-incorrect1");
const answerInCorrect2 = document.querySelector(".js-incorrect2");
const question = document.querySelector(".js-question");
const qText = document.querySelector(".js-question__text");
const themes = [...document.querySelectorAll(".js-title")];
const answer = document.querySelector(".js-questionWindow__vars");
const answerBtn = document.querySelector(".js-questionWindow__vars-btn");
const score1 = teamScore[0];
const score2 = teamScore[1];
const score3 = teamScore[2];
const score4 = teamScore[3];
const bag = document.querySelector(".js-bag-div");
const bagAnswer = document.querySelector(".js-bag-answer");
const firstTheme = document.querySelectorAll(".js-firstRow");
const secondTheme = document.querySelectorAll(".js-secondRow");
const thirdTheme = document.querySelectorAll(".js-thirdRow");
const fourthTheme = document.querySelectorAll(".js-fourthRow");
const fifthTheme = document.querySelectorAll(".js-fifthRow");
const countdown = document.querySelector(".js-countdown-block");

// const answers = questionfirstTheme[10];
const isQSet = [];
let secretAnswerAndCoin = ["answer", 0];
const countFunc = () => {
  countdown.classList.remove("invisible-but-block");
  const tikTak = setInterval(() => {
    tick();
    console.log;
  }, 1000);

  document.addEventListener("keypress", (event) => {
    if (questWindow.classList.contains("active")) {
      console.log("Строковый код: ", event.code);
      console.log("ASCII код: ", event.charCode);
      clearInterval(tikTak);
    }
  });
  countdown.addEventListener("click", (event) => {
    console.log("123");
    if (questWindow.classList.contains("active")) {
      console.log("Строковый код: ", event.code);
      console.log("ASCII код: ", event.charCode);
      clearInterval(tikTak);
    }
  });
};
const tick = () => {
  let seconds = Number(timeH.textContent) * 60 + Number(time.textContent);
  let newTimer = seconds - 1;
  namesReplace(newTimer);
};

const bug = () => {
  bag.classList.add("invisible");
};
answerBtn.addEventListener("click", () => answerBtnOnClick());
const answerBtnOnClick = () => {
  console.log("в кнопке");
  answerBoard.forEach((commands) => {
    if (commands.classList.contains("disable")) {
      answerBoard.forEach((commands) => {
        commands.classList.remove("disable");
      });
    }
  });
  answerBtn.classList.add("disable");
  (answer.style.cssText = "opacity: 0; transition: all, 0.2s"),
    setTimeout(() => (answer.textContent = secretAnswerAndCoin[0]), 200),
    setTimeout(
      () => (answer.style.cssText = "opacity: 1; transition: all, 0.3s"),
      205
    );
};
const cardOpen = (el) => {
  answer.textContent = "Верный ответ";
  el.style.cssText = "opacity: 0; transition: all, 0.5s";
  setTimeout(() => (el.style.cssText = "display: none"), 600);
  questWindow.classList.add("active");
  setTimeout(
    () => (questWindow.style.cssText = "opacity: 1; transition: all, 0.3s"),
    10
  );
  answerBtn.classList.remove("disable");

  if ([...firstTheme].includes(el)) {
    const elNum = [...firstTheme].indexOf(el);
    const isQSet = [
      questionfirstTheme[elNum],
      questionfirstTheme[elNum + 5],
      questionfirstTheme[elNum + 10],
      el.getAttribute("data-score"),
    ];
    question.textContent =
      questionfirstTheme[elNum] + ". Категория: " + themes[0].textContent;
    titles[0].classList.add("title_active");
    secretAnswerAndCoin[0] = isQSet[2];
    secretAnswerAndCoin[1] = isQSet[3];

    qText.textContent = isQSet[1];
  }
  if ([...secondTheme].includes(el)) {
    const elNum = [...secondTheme].indexOf(el);
    const isQSet = [
      questionsecondTheme[elNum],
      questionsecondTheme[elNum + 5],
      questionsecondTheme[elNum + 10],
      el.getAttribute("data-score"),
    ];
    question.textContent =
      questionsecondTheme[elNum] + ". Категория: " + themes[1].textContent;
    titles[1].classList.add("title_active");
    qText.textContent = isQSet[1];
    secretAnswerAndCoin[0] = isQSet[2];
    secretAnswerAndCoin[1] = isQSet[3];
  }
  if ([...thirdTheme].includes(el)) {
    const elNum = [...thirdTheme].indexOf(el);
    const isQSet = [
      questionthirdTheme[elNum],
      questionthirdTheme[elNum + 5],
      questionthirdTheme[elNum + 10],
      el.getAttribute("data-score"),
    ];
    question.textContent =
      questionthirdTheme[elNum] + ". Категория: " + themes[2].textContent;
    titles[2].classList.add("title_active");
    qText.textContent = isQSet[1];
    secretAnswerAndCoin[0] = isQSet[2];
    secretAnswerAndCoin[1] = isQSet[3];
  }
  if ([...fourthTheme].includes(el)) {
    const elNum = [...fourthTheme].indexOf(el);
    const isQSet = [
      questionfourthTheme[elNum],
      questionfourthTheme[elNum + 5],
      questionfourthTheme[elNum + 10],
      el.getAttribute("data-score"),
    ];

    titles[3].classList.add("title_active");

    if (isQSet[1] !== "bag") {
      secretAnswerAndCoin[0] = isQSet[2];
      secretAnswerAndCoin[1] = isQSet[3];
      question.textContent =
        questionfourthTheme[elNum] + ". Категория: " + themes[3].textContent;
      qText.textContent = isQSet[1];
    } else {
      secretAnswerAndCoin[0] = bagAnswer.textContent;

      secretAnswerAndCoin[1] = 1000;
      question.textContent = "Хер в мешке за 1000$!";
      qText.textContent = "";
      bag.classList.remove("invisible");
    }
  }
  if ([...fifthTheme].includes(el)) {
    const elNum = [...fifthTheme].indexOf(el);
    const isQSet = [
      questionfifthTheme[elNum],
      questionfifthTheme[elNum + 5],
      questionfifthTheme[elNum + 10],
      el.getAttribute("data-score"),
    ];
    question.textContent =
      questionfifthTheme[elNum] + ". Категория: " + themes[4].textContent;
    titles[4].classList.add("title_active");
    qText.textContent = isQSet[1];
    secretAnswerAndCoin[0] = isQSet[2];
    secretAnswerAndCoin[1] = isQSet[3];
  }
  setTimeout(() => countFunc(), 1000);
};
const cardClose = () => {
  console.log("close");
  questWindow.classList.remove("active");
  questWindow.style.cssText = "opacity: 0; transition: all, 0.3s";
  setTimeout(() => questWindow.classList.remove("active"), 300);
  answerBoard.forEach((commands) => {
    commands.classList.toggle("disable");
  });
  answerBoard.forEach((commands) => {
    commands.classList.add("disable");
  });
};

// answerCorrect1.addEventListener("click", () => {
//   answerCorrectFunc(answerCorrect1);
//   bug();
// });
// answerCorrect2.addEventListener("click", () => {
//   answerCorrectFunc(answerCorrect2);
//   bug();
// });
// answerInCorrect1.addEventListener("click", () => {
//   answerInCorrectFunc(answerInCorrect1);
//   bug();
// });
// answerInCorrect2.addEventListener("click", () => {
//   answerInCorrectFunc(answerInCorrect2);
//   bug();
// });

// const answerCorrectFunc = (el) => {
//   if ([answerCorrect1].includes(el)) {
//     const newScore =
//       Number(score1.textContent) + Number(secretAnswerAndCoin[1]);
//     score1.textContent = newScore;

//     cardClose();
//   } else {
//     const newScore =
//       Number(score2.textContent) + Number(secretAnswerAndCoin[1]);
//     score2.textContent = newScore;
//     cardClose();
//   }
// };
// const answerInCorrectFunc = (el) => {
//   if ([answerInCorrect1].includes(el)) {
//     const newScore =
//       Number(score1.textContent) - Number(secretAnswerAndCoin[1]);
//     score1.textContent = newScore;
//     cardClose();
//   } else {
//     const newScore =
//       Number(score2.textContent) - Number(secretAnswerAndCoin[1]);
//     score2.textContent = newScore;
//     cardClose();
//   }
// };

let rows = [firstTheme, secondTheme, thirdTheme, fourthTheme, fifthTheme];
rows.forEach((themes) => {
  themes.forEach((el) => {
    el.addEventListener("click", () => {
      cardOpen(el);
    });
  });
});

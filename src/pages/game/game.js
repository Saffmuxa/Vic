import { questions } from "./quests.js";
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
const teamScore = [...document.querySelectorAll(".js-score")];
const time = document.querySelector(".js-countdown");
const timeH = document.querySelector(".js-countdown-one");
const timer = names[names.length - 1];
console.log(timer);
const hours = Math.floor(timer / 60);
let newTimer = 1;
// const hoursC = Math.floor(newTimer / 60);
const minsC = Math.round(60 * (newTimer / 60 - Math.floor(newTimer / 60)));
const mins = Math.round(60 * (timer / 60 - Math.floor(timer / 60)));
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
const answersCorrect = [...document.querySelectorAll(".js-correct")];
const answersInCorrect = [...document.querySelectorAll(".js-incorrect")];
const question = document.querySelector(".js-question");
const qText = document.querySelector(".js-question__text");
const themes = [...document.querySelectorAll(".js-title")];
const answer = document.querySelector(".js-questionWindow__vars");
const answerBtn = document.querySelector(".js-questionWindow__vars-btn");
const nextBtn = document.querySelector(".js-questionWindow__next");
const bagWindow = document.querySelector(".js-bag-div");
const bagAnswer = document.querySelector(".js-bag-answer");
const firstTheme = document.querySelectorAll(".js-firstRow");
const secondTheme = document.querySelectorAll(".js-secondRow");
const thirdTheme = document.querySelectorAll(".js-thirdRow");
const fourthTheme = document.querySelectorAll(".js-fourthRow");
const fifthTheme = document.querySelectorAll(".js-fifthRow");
const countdown = document.querySelector(".js-countdown-block");

const isQSet = [];
let secretAnswerAndCoin = ["answer", 0];
let btnActivate = () => {
  answerBoard.forEach((commands) => {
    if (commands.classList.contains("disable")) {
      answerBoard.forEach((commands) => {
        commands.classList.remove("disable");
      });
    }
  });
  answerBtn.classList.remove("disable");
};
const countFunc = () => {
  countdown.classList.remove("invisible-but-block");
  const tikTak = setInterval(() => {
    if (timeH.textContent == 0 && time.textContent == 0) {
      btnActivate();
      clearInterval(tikTak);
      countdown.style.cssText = "color: red";
    } else {
      tick();
    }
  }, 1000);
  document.addEventListener("keypress", () => {
    if (questWindow.classList.contains("active")) {
      btnActivate();
      clearInterval(tikTak);
    }
  });
  countdown.addEventListener("click", () => {
    console.log("123");
    if (questWindow.classList.contains("active")) {
      btnActivate();
      clearInterval(tikTak);
    }
  });
  nextBtn.addEventListener("click", () => {
    clearInterval(tikTak);
    cardClose();
  });
};
const tick = () => {
  let seconds = Number(timeH.textContent) * 60 + Number(time.textContent);
  let newTimer = seconds - 1;
  namesReplace(newTimer);
};

const bag = () => {
  bagWindow.classList.add("invisible");
};
answerBtn.addEventListener("click", () => answerBtnOnClick());
const answerBtnOnClick = () => {
  answerBtn.classList.add("disable");
  (answer.style.cssText = "opacity: 0; transition: all, 0.2s"),
    setTimeout(() => (answer.textContent = secretAnswerAndCoin[0]), 200),
    setTimeout(
      () => (answer.style.cssText = "opacity: 1; transition: all, 0.3s"),
      205
    );
  nextBtn.classList.remove("disable");
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
  answerBtn.classList.add("disable");
  let themeIndex = 0;
  let elNum = 0;
  if ([...firstTheme].includes(el)) {
    themeIndex = 0;
    elNum = [...firstTheme].indexOf(el);
  }
  if ([...secondTheme].includes(el)) {
    themeIndex = 1;
    elNum = [...secondTheme].indexOf(el);
  }
  if ([...thirdTheme].includes(el)) {
    themeIndex = 2;
    elNum = [...thirdTheme].indexOf(el);
  }
  if ([...fourthTheme].includes(el)) {
    themeIndex = 3;
    elNum = [...fourthTheme].indexOf(el);
  }
  if ([...fifthTheme].includes(el)) {
    themeIndex = 4;
    elNum = [...fifthTheme].indexOf(el);
  }
  const isQSet = [
    questions[themeIndex][elNum],
    questions[themeIndex][elNum + 5],
    questions[themeIndex][elNum + 10],
    el.getAttribute("data-score"),
  ];
  if (isQSet[1] == "bag") {
    secretAnswerAndCoin[0] = bagAnswer.textContent;
    secretAnswerAndCoin[1] = 1000;
    question.textContent = "Хер в мешке за 1000$!";
    qText.textContent = "";
    bagWindow.classList.remove("invisible");
  } else {
    question.textContent =
      isQSet[0] + ". Категория: " + themes[themeIndex].textContent;
    titles[themeIndex].classList.add("title_active");
    secretAnswerAndCoin[0] = isQSet[2];
    secretAnswerAndCoin[1] = isQSet[3];
    qText.textContent = isQSet[1];
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
  nextBtn.classList.add("disable");
  replacer();
};
answersCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerCorrectFunc(el);
    bag();
  });
});
answersInCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerInCorrectFunc(el);
    bag();
  });
});
const answerCorrectFunc = (el) => {
  let answersTeamNum = answersCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) +
    Number(secretAnswerAndCoin[1]);

  cardClose();
};
const answerInCorrectFunc = (el) => {
  let answersTeamNum = answersInCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) -
    Number(secretAnswerAndCoin[1]);
  // cardClose();
};

let rows = [firstTheme, secondTheme, thirdTheme, fourthTheme, fifthTheme];
rows.forEach((themes) => {
  themes.forEach((el) => {
    el.addEventListener("click", () => {
      cardOpen(el);
    });
  });
});

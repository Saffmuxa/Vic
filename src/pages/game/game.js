import { questions } from "./quests.js";
// const names = decodeURIComponent(window.location.search)
//   .replace(/[name=time?]/g, "")
//   // .replace(/time=/g, "")
//   .replace(/&/g, ", ")
//   // .replace("?", "")
//   .replace(/[+]/g, " ")
//   .split(",");
const teams = JSON.parse(sessionStorage.getItem("names"));
// const timer = names[names.length - 1];
const timer = sessionStorage.getItem("timer");
// const teams = names.slice(0, -1);
console.log(questions);
const teamJS =
  '<div class="team js-team"><div class="team__name"><span class="name js-team__name">text </span></div><div class="score-board"><div class="the-score">$<span class="dollar js-score">0</span></div></div><div class="answer-board js-answer-board disable"><button class="correct js-correct"></button><button class="incorrect js-incorrect"></button></div></div>';
teams.forEach((team) => {
  document.querySelector(".js-teams").insertAdjacentHTML("afterbegin", teamJS);
});
const teamNames = [...document.querySelectorAll(".js-team__name")];
teamNames.forEach((teamName, i) => {
  teamName.textContent = teams[i];
});
const teamScore = [...document.querySelectorAll(".js-score")];
const time = document.querySelector(".js-countdown");
const timeH = document.querySelector(".js-countdown-one");
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
const mainBoard = document.querySelector(".js-board");
const questWindow = document.querySelector(".js-questionWindow");
const answerBoard = document.querySelectorAll(".js-answer-board");
const answersCorrect = [...document.querySelectorAll(".js-correct")];
const answersInCorrect = [...document.querySelectorAll(".js-incorrect")];
const question = document.querySelector(".js-question");
const qText = document.querySelector(".js-question__text");
const qTextWrap = document.querySelector(".js-question__text-wrap");
const qTextContent = document.querySelector(".js-questionWindow__text-wrap");
const nextBtn = document.querySelector(".js-questionWindow__next");
const firstTheme = document.querySelectorAll(".js-firstRow");
const secondTheme = document.querySelectorAll(".js-secondRow");
const thirdTheme = document.querySelectorAll(".js-thirdRow");
const fourthTheme = document.querySelectorAll(".js-fourthRow");
const fifthTheme = document.querySelectorAll(".js-fifthRow");
const countdown = document.querySelector(".js-countdown-block");
const answerBtn2 = document.querySelector(".js-answer-btn");
const addsImg = document.createElement("img");
addsImg.className = "js-quest-content";
const addsVid = document.createElement("iframe");
addsVid.className = "js-quest-content";
addsVid.setAttribute("allow", "autoplay");
addsVid.setAttribute("autoplay", 1);

let iQSet = {
  name: "name",
  num: "num",
  key: "key",
  queText: "queText",
  answer: "answer",
  type: "quest.type",
  bag: "quest.bag",
  nameContent: "quest.nameContent",
  coins: "el.getAttribute",
};
const startA = new Audio();
startA.preload = "auto";
startA.src = "assets/audio/start.mp3";
startA.play();
const audioClick = new Audio();
audioClick.preload = "auto";
audioClick.src = "assets/audio/1.mp3";

const audioStop = new Audio();
audioStop.preload = "auto";
audioStop.src = "assets/audio/stop.mp3";

const audioQu = new Audio();
audioQu.preload = "auto";
audioQu.src = "assets/audio/q.mp3";

const audioQ = () => {
  audioQu.volume = 0.0;
  audioQu.currentTime = Number(199 - timer);
  console.log(audioQu.currentTime);
  // audioQu.load();
  audioQu.play();
  volumeUp();
};
let vl = "volume";
const volumeUp = () => {
  setTimeout(() => {
    vl = setInterval(() => {
      audioQu.volume = audioQu.volume + 0.04;
      console.log(audioQu.volume, vl);
      if (audioQu.volume > 0.6) {
        clearInterval(vl);
      }
    }, 400);
  }, 4000);
};

const correctAnswer = new Audio();
correctAnswer.preload = "auto";
correctAnswer.src = "assets/audio/correct.mp3";

const inCorrectAnswer = new Audio();
inCorrectAnswer.preload = "auto";
inCorrectAnswer.src = "assets/audio/incorrect.mp3";

let answerAndCoin = {};
let btnActivate = () => {
  answerBoard.forEach((commands) => {
    if (commands.classList.contains("disable")) {
      answerBoard.forEach((commands) => {
        commands.classList.remove("disable");
      });
    }
  });
  // answerBtn.classList.remove("disable");
};
let tikTak = "counter";
// let video = "video";
// let audio = "audio";
// let content = "content";
const countFunc = () => {
  countdown.classList.remove("invisible-but-block");
  tikTak = setInterval(() => {
    if (timeH.textContent == 0 && time.textContent == 0) {
      countdown.style.cssText = "color: red";
      showMeAnswer();

      // audioStop();
    } else {
      tick();
    }
  }, 1000);
  // video = Array.from(document.getElementsByTagName("video"));
  // audio = Array.from(document.getElementsByTagName("audio"));
  // content = video.concat(audio);
};
nextBtn.addEventListener("click", () => {
  clearInterval(tikTak);
  cardClose();
});
countdown.addEventListener("click", () => {
  if (questWindow.classList.contains("visible")) {
    showMeAnswer();
    // content.forEach((el) => {
    //   el.pause();
    // });
  }
});
document.addEventListener("keypress", (ev) => {
  if (ev.code == "Space") {
    if (questWindow.classList.contains("visible")) {
      showMeAnswer();

      // content.forEach((el) => {
      //   console.log(el);
      //   if (el === document.activeElement) {
      //   } else {
      //     el.pause();
      //   }
      // });
    }
  } else console.log("нажмите пробел", ev.code);
});

const showMeAnswer = () => {
  audioQu.pause();
  btnActivate();
  clearInterval(tikTak);
  clearInterval(vl);

  setTimeout(() => {
    qTextWrap.classList.add("answer-check");
  }, 500);
  console.log(nextBtn.classList.contains("disable"));
  if (nextBtn.classList.contains("disable")) {
    audioStop.play();
    console.log("3333");
    nextBtn.classList.remove("disable");
  } else {
  }
};
const tick = () => {
  let seconds = Number(timeH.textContent) * 60 + Number(time.textContent);
  let newTimer = seconds - 1;
  namesReplace(newTimer);
};

const cardOpen = (el) => {
  qTextWrap.classList.remove("answer-check");
  mainBoard.classList.remove("visible");
  setTimeout(() => {
    mainBoard.classList.add("invisible");
    questWindow.classList.remove("invisible");
  }, 200);
  setTimeout(() => {
    questWindow.classList.add("visible");
  }, 222);
  // answer.textContent = "Верный ответ";
  // answerBtn.classList.add("disable");
  setTimeout(() => (el.style.cssText = "display: none"), 403);
  let themeIndex = 0;
  let elNum = 0;
  let quest = 0;
  if ([...firstTheme].includes(el)) {
    themeIndex = questions.firstTheme;
    elNum = [...firstTheme].indexOf(el);
  }
  if ([...secondTheme].includes(el)) {
    themeIndex = questions.secondTheme;
    elNum = [...secondTheme].indexOf(el);
  }
  if ([...thirdTheme].includes(el)) {
    themeIndex = questions.thirdTheme;
    elNum = [...thirdTheme].indexOf(el);
  }
  if ([...fourthTheme].includes(el)) {
    themeIndex = questions.fourthTheme;
    elNum = [...fourthTheme].indexOf(el);
  }
  if ([...fifthTheme].includes(el)) {
    themeIndex = questions.fifthTheme;
    elNum = [...fifthTheme].indexOf(el);
  }

  if (elNum == 0) {
    quest = themeIndex.firstQ;
  }
  if (elNum == 1) {
    quest = themeIndex.secQ;
  }
  if (elNum == 2) {
    quest = themeIndex.thrdQ;
  }
  if (elNum == 3) {
    quest = themeIndex.frthQ;
  }
  if (elNum == 4) {
    quest = themeIndex.fftQ;
  }

  iQSet.name = themeIndex.name;
  iQSet.num = questions.questionsNum[elNum];
  iQSet.key = themeIndex.key;
  iQSet.queText = quest.text;
  iQSet.answer = quest.answer;
  iQSet.type = quest.type;
  iQSet.bag = quest.bag;
  iQSet.nameContent = quest.nameContent;
  iQSet.coins = el.getAttribute("data-score");

  if (iQSet.type == "img" || "") {
    audioQ();
  } else {
    console.log(iQSet.type);
  }
  question.textContent = iQSet.num + ". Категория: " + iQSet.name;

  answerAndCoin.answer = iQSet.answer;
  answerAndCoin.coin = iQSet.coins;
  qText.textContent = iQSet.queText;
  if (iQSet.type == "img") {
    addsImg.src = "assets/img/" + iQSet.nameContent;
    qTextContent.insertAdjacentElement("afterbegin", addsImg);
  }
  if (iQSet.type == "vid") {
    addsVid.src = iQSet.nameContent;
    qTextContent.insertAdjacentElement("afterbegin", addsVid);
  }
  if (iQSet.bag == true) {
    answerAndCoin.coin = 1000;
    question.textContent = "Хер в мешке за 1000$!";
  } else {
    setTimeout(() => {
      titles[themeIndex.key].textContent = iQSet.name;
    }, 300);
  }
  countFunc();
};
answerBtn2.addEventListener("click", () => {
  if (qTextWrap.classList.contains("answer-check")) {
    if (qText.textContent == iQSet.queText) {
      qText.textContent = iQSet.answer;
      answerBtn2.textContent = "Показать вопрос";
    } else {
      qText.textContent = iQSet.queText;
      answerBtn2.textContent = "Показать правильный ответ";
    }
  }
});
const cardClose = () => {
  document.activeElement.blur();
  if (audioQu.volume > 0.6) {
    clearInterval(vl);
  }
  if (openCards < 25) {
    openCards++;
  } else {
    alert("GAME OVER!");
  }
  questWindow.classList.remove("visible");
  setTimeout(() => {
    questWindow.classList.add("invisible");
    mainBoard.classList.remove("invisible");
  }, 200);
  setTimeout(() => {
    mainBoard.classList.add("visible");
  }, 222);
  let content = [...qTextContent.querySelectorAll(".js-quest-content")];
  content.forEach((el) => {
    setTimeout(() => {
      el.remove();
    }, 100);
  });
  answerBoard.forEach((commands) => {
    commands.classList.add("disable");
    commands.blur();
  });
  qTextWrap.classList.remove("answer-check");
  nextBtn.classList.add("disable");
  replacer();
  countdown.style.cssText = "color: #fbed56";
  answerBtn2.textContent = "Показать правильный ответ";
};
answersCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerCorrectFunc(el);
    clearInterval(vl);
  });
});
answersInCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerInCorrectFunc(el);
  });
});
const answerCorrectFunc = (el) => {
  correctAnswer.load();
  correctAnswer.play();
  answersTeamNum = answersCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) + Number(answerAndCoin.coin);

  cardClose();
};
let answersTeamNum = "answersTeamNum";
const answerInCorrectFunc = (el) => {
  inCorrectAnswer.load();
  inCorrectAnswer.play();
  answersTeamNum = answersInCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) - Number(answerAndCoin.coin);
};

let rows = [firstTheme, secondTheme, thirdTheme, fourthTheme, fifthTheme];
let openCards = 0;
rows.forEach((themes) => {
  themes.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.add("flash");
      setTimeout(() => cardOpen(el), 200);
      audioClick.load();
      audioClick.play();
      console.log(openCards);
    });
  });
});

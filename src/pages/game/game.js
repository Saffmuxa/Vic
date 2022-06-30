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
const qTextContent = document.querySelector(".js-questionWindow__text-wrap");
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

let answerAndCoin = {};
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
  let video = Array.from(document.getElementsByTagName("video"));
  let audio = Array.from(document.getElementsByTagName("audio"));
  let content = video.concat(audio);
  console.log(content);
  document.addEventListener("keypress", (ev) => {
    if (ev.code == "Space") {
      if (questWindow.classList.contains("visible")) {
        btnActivate();
        clearInterval(tikTak);

        content.forEach((el) => {
          if (el === document.activeElement) {
          } else el.pause();
        });
      }
    } else console.log("нажмите пробел", ev.code);
  });

  countdown.addEventListener("click", () => {
    console.log("123");
    if (questWindow.classList.contains("visible")) {
      btnActivate();
      clearInterval(tikTak);
      content.forEach((el) => {
        el.pause();
      });
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
    setTimeout(() => (answer.textContent = answerAndCoin.answer), 200),
    setTimeout(
      () => (answer.style.cssText = "opacity: 1; transition: all, 0.3s"),
      205
    );
  nextBtn.classList.remove("disable");
};
const cardOpen = (el) => {
  mainBoard.classList.remove("visible");
  setTimeout(() => {
    mainBoard.classList.add("invisible");
    questWindow.classList.remove("invisible");
  }, 200);
  setTimeout(() => {
    questWindow.classList.add("visible");
  }, 222);
  answer.textContent = "Верный ответ";
  answerBtn.classList.add("disable");
  setTimeout(() => (el.style.cssText = "display: none"), 403);
  let themeIndex = 0;
  let elNum = 0;
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
  const iQSet = {
    name: themeIndex.name,
    num: themeIndex.questionsNum[elNum],
    key: themeIndex.key,
    queText: themeIndex.questionsText[elNum],
    answer: themeIndex.answers[elNum],
    coins: el.getAttribute("data-score"),
  };
  if (iQSet.queText == "bag") {
    answerAndCoin.answer = bagAnswer.textContent;
    answerAndCoin.coin = 1000;
    question.textContent = "Хер в мешке за 1000$!";
    qText.textContent = "";
    bagWindow.classList.remove("invisible");
  } else {
    question.textContent = iQSet.num + ". Категория: " + iQSet.name;
    titles[themeIndex.key].classList.add("title_active");
    titles[themeIndex.key].textContent = iQSet.name;
    answerAndCoin.answer = iQSet.answer;
    answerAndCoin.coin = iQSet.coins;
    qText.textContent = iQSet.queText;
    const showContent = () => {
      let temp = document.getElementsByTagName("template")[iQSet.key];
      let clon = temp.content.cloneNode(true);
      qTextContent.append(clon);
      qTextContent
        .getElementsByClassName("js-quest-content")
        [elNum].classList.remove("invisible");
      let content = [...qTextContent.querySelectorAll(".js-quest-content")];
      content.forEach((el) => {
        if (el.classList.contains("invisible")) {
          el.remove();
        }
      });
    };
    showContent();
  }
  countFunc();
};
const cardClose = () => {
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
  });
  nextBtn.classList.add("disable");
  replacer();
  bag();
  countdown.style.cssText = "color: #fbed56";
};
answersCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerCorrectFunc(el);
    console.log(el);
  });
});
answersInCorrect.forEach((el) => {
  el.addEventListener("click", () => {
    answerInCorrectFunc(el);
  });
});
const answerCorrectFunc = (el) => {
  let answersTeamNum = answersCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) + Number(answerAndCoin.coin);

  cardClose();
};
const answerInCorrectFunc = (el) => {
  let answersTeamNum = answersInCorrect.indexOf(el);
  teamScore[answersTeamNum].textContent =
    Number(teamScore[answersTeamNum].textContent) - Number(answerAndCoin.coin);
};

let rows = [firstTheme, secondTheme, thirdTheme, fourthTheme, fifthTheme];
rows.forEach((themes) => {
  themes.forEach((el) => {
    el.addEventListener("click", () => {
      cardOpen(el);
    });
  });
});

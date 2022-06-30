const words = (value, words) => {
  if (value === 0) {
    return "0";
  }
  const num = value;
  if (num == 1) return `${value} ${words[0]}`;
  if (num > 1 && num < 5) return `${value} ${words[1]}`;
  if (num % 100 > 20 && num % 10 == 1) return `${value} ${words[0]}`;
  // if (num >= 20) return `${value} ${words[2]}`;
  return `${value} ${words[2]}`;
};
const wordsDeclensions = ["команда", "команды", "команд"];

console.log("!>> App is loaded.");

// sessionStorage.setItem

let counter = 1;
const output = document.querySelector(".output");
const formGame = document.querySelector(".js-start-game");
let formFields = formGame.elements;
const submitBtn = document.querySelector(".js-submit");
console.log(submitBtn);

output.textContent = words(counter, wordsDeclensions);
console.log(wordsDeclensions);

let btns = document.querySelectorAll(".btn-home");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let input = document.createElement("input");
    input.type = "text";
    input.className = "main-menu_group1-name";
    input.name = "name";
    input.required = true;
    input.placeholder = "Введите название команды";

    if (btn.classList.contains("js-btn-down") && counter > 1) {
      counter--;
      document.querySelector(".inputs").firstChild.remove(input);

      // output.innerText = counter;
    }
    if (btn.classList.contains("js-btn-up") && counter >= 1) {
      counter++;
      document.querySelector(".inputs").append(input);
    }
    if (counter < 2) {
      btns[0].classList.add("dsbl");
    }
    if (counter > 1) {
      btns[0].classList.remove("dsbl");
    }
    if (counter > 3) {
      btns[1].classList.add("dsbl");
    }
    if (counter < 4) {
      btns[1].classList.remove("dsbl");
    }
    output.textContent = words(counter, wordsDeclensions);

    if (counter === 1) {
      output.style.color = "black";
    } else if (counter === 4) {
      output.style.color = "red";
    } else {
      output.style.color = "green";
    }

    // console.log(formFields);
  });
  // formFields.addEventListener("change", () => {
  //   console.log(element.name, element.value);
  // });
});
submitBtn.addEventListener("click", (event) => {
  // event.preventDefault();
  // localStorage.setItem(array, JSON.stringify(array));
  // array = JSON.parse(localStorage.getItem("array"));

  sessionStorage.clear();
  let formFields = formGame.elements;
  let namesArr = [];
  Array.prototype.forEach.call(formFields, (element) => {
    if (element.name == "name") {
      namesArr.push(element.value);
      console.log(namesArr);
    }
    if (element.name == "time") {
      sessionStorage.setItem("timer", element.value);
    }
  });
  sessionStorage.setItem("names", JSON.stringify(namesArr));
  // namesArr = JSON.parse(localStorage.getItem("namesArr"));
  // let i = 0;
  // Array.prototype.forEach.call(formFields, (element) => {
  //   if (element.name == "name") {
  //     sessionStorage.setItem("name" + " " + [i], element.value);
  //     i++;
  //   }
  //   if (element.name == "time") {
  //     sessionStorage.setItem("timer", element.value);
  //   }
  // });
});

"use strict";
const container = document.getElementById("container");
const btnRight = document.getElementById("btn-right");
const inputTxt = document.getElementById("inp");
const formEl = document.getElementById("form");
const habits = document.getElementById("habits");

btnRight.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputTxt.value === "") return;
  createEl(inputTxt);
  inputTxt.value = "";
});

const createEl = function (hbt) {
  let habit = hbt.value;
  const para = document.createElement("p");
  para.innerText = `My habbit : ${habit}

   Status :`;
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  btnContainer.appendChild(para);
  const btnDone = document.createElement("button");
  btnDone.innerText = "Done";
  btnDone.classList.add("btn");
  btnContainer.appendChild(btnDone);
  const btnMissed = document.createElement("button");
  btnMissed.innerText = "Missed";
  btnMissed.classList.add("btn");
  btnContainer.appendChild(btnMissed);
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("btn");
  btnContainer.appendChild(btnDelete);
  habits.appendChild(btnContainer);
  const buttons = document.querySelectorAll(".btn");
  buttonHandler(buttons, habit, para);
};

const buttonHandler = function (btn, hbtP) {
  btn.forEach((btnEl) => {
    if (btnEl.innerText === "Delete") {
      btnEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentNode.remove();
      });
    }
    if (btnEl.innerText === "Done") {
      btnEl.addEventListener("click", (e) => {
        e.target.parentNode.children.item("p").innerText = `My habbit : ${hbtP}

        Status : ✔`;
      });
    }
    if (btnEl.innerText === "Missed") {
      btnEl.addEventListener("click", (e) => {
        e.target.parentNode.children.item("p").innerText = `My habbit : ${hbtP}

        Status : Missed`;
      });
    }
  });
};

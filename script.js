"use strict";

let countNumber = 0;
const array = [];

window.addEventListener("load", initArrayLoop);

function initArrayLoop() {
  if (countNumber < 22) {
    setTimeout(arrayLoop, 1000);
  }
}

function arrayLoop() {
  if (countNumber < 9) {
    array.unshift(countNumber);
    console.log(array);
    countNumber++;
  } else {
    array.unshift(countNumber);
    array.length = 9;
    console.log(array);
    countNumber++;
  }
  initArrayLoop();
}

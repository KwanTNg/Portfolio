const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation;

function calculate(but) {
  const value = but.textContent;
  if (value == "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value == "=") {
    screenDisplay.textContent =
      Math.round(eval(accumulativeCalculation) * 100000000) / 100000000;
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((but) => but.addEventListener("click", () => calculate(but)));

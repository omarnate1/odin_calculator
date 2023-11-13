let display = document.getElementById("display");
let numbers = Array.from(document.getElementsByClassName("number"));
let operators = Array.from(document.getElementsByClassName("operator"));
let clear = document.getElementsByClassName("clear")[0];
let backspace = document.getElementsByClassName("backspace")[0];
let equals = document.getElementsByClassName("equals")[0];
let decimal = document.getElementsByClassName("decimal")[0];

let currentOperator = "";
let operand1 = "";
let operand2 = "";

numbers.map((number) => {
  number.addEventListener("click", (e) => {
    if (currentOperator === "") {
      operand1 += e.target.innerText;
      display.innerText = operand1;
    } else {
      operand2 += e.target.innerText;
      display.innerText = operand2;
    }
  });
});

operators.map((operator) => {
  operator.addEventListener("click", (e) => {
    if (operand1 !== "") {
      currentOperator = e.target.innerText;
    }
  });
});

equals.addEventListener("click", () => {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);
  switch (currentOperator) {
    case "+":
      display.innerText = operand1 + operand2;
      break;
    case "-":
      display.innerText = operand1 - operand2;
      break;
    case "*":
      display.innerText = operand1 * operand2;
      break;
    case "/":
      if (operand2 !== 0) {
        display.innerText = operand1 / operand2;
      } else {
        display.innerText = "Error";
      }
      break;
  }
  operand1 = display.innerText;
  operand2 = "";
});

clear.addEventListener("click", () => {
  display.innerText = "";
  operand1 = "";
  operand2 = "";
  currentOperator = "";
});

backspace.addEventListener("click", () => {
  if (currentOperator === "") {
    operand1 = operand1.slice(0, -1);
    display.innerText = operand1;
  } else {
    operand2 = operand2.slice(0, -1);
    display.innerText = operand2;
  }
});

decimal.addEventListener("click", () => {
  if (currentOperator === "" && !operand1.includes(".")) {
    operand1 += ".";
    display.innerText = operand1;
  } else if (currentOperator !== "" && !operand2.includes(".")) {
    operand2 += ".";
    display.innerText = operand2;
  }
});

//Deklarasi variabel
let prevNumber = "";
let currentNumber = "";
let calculationOperator = "";

const calculatorscreenOp = document.querySelector(".calculator-screen-op");
const calculatorScreen = document.querySelector(".calculator-screen");
 

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
//calculator function




const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }

  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  currentNumber += dot;
};


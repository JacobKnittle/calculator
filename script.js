function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// operands and operator for calculator
let operand1 = 0;
let operator = "";
let operand2 = "";

// create a function operate that takes the two operands and a operator and calls one of the math functions

function operate(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    default:
      console.log("ERROR in operate function");
  }
}

// create functions that populate the display when you click the buttons on the calculator and store that value in a variable

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.srcElement.textContent);
    let userInput = e.srcElement.textContent;
    console.log(isNaN(userInput));
    evaluteInput(userInput);
  });
});

// create a function that checks the values of the operands and the operator to see if the input is valid and what variable it should be stored if it is

function evaluteInput(buttonPress) {
  if (operand1 === 0 && isNaN() == false) {
    operand1 = +buttonPress;
  }
}

// store both number inputs and call the operate function when the user hits the = button

// update the display with the result of the operation when the = sign is pressed

// evaluate one pair of numbers at a time and update the first variable with the result along with then allowing only a next operator

// round answers with long decimals to prevent overflow

// don't allow the = button to work prematurally

// make sure there is a clear button that wipes out all data

// display a error message if the user tries to divide by 0

// prevent a operator from being used twice in a row

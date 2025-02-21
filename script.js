const screen = document.querySelector("input");

function add(num1, num2) {
  console.log(num1 + num2);
  operand1 = num1 + num2;
}

function subtract(num1, num2) {
  console.log(num1 - num2);
  operand1 = num1 - num2;
}

function multiply(num1, num2) {
  console.log(num1 * num2);
  operand1 = num1 * num2;
}

function divide(num1, num2) {
  console.log(num1 / num2);
  operand1 = (num1 / num2).toFixed(2);
}

// operands and operator for calculator
let operand1 = 0;
let operator = "";
let operand2 = "";

screen.value = `0  `;

// create a function operate that takes the two operands and a operator and calls one of the math functions

function operate(operand1, operator, operand2) {
  operand1 = +operand1;
  operand2 = +operand2;

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
    let userInput = e.srcElement.textContent;
    evaluteInput(userInput);
    // display both operands and the operator in the calculator input box

    screen.value = `${operand1} ${operator} ${operand2}`;
  });
});

// create a function that checks the values of the operands and the operator to see if the input is valid and what variable it should be stored if it is

function evaluteInput(buttonPress) {
  const operators = ["+", "-", "*", "/"];

  // checks if a button press is one of the four operators
  const checkForOperators = operators.some((operator) =>
    buttonPress.includes(operator)
  );

  // checks for if a operator already exists when a operator is selected
  if (checkForOperators && operator) {
    console.log("operator exists already");
    return;
  }

  // checks if a equal sign is pressed without a second operand
  if (buttonPress === "=" && !operand2) {
    console.log("cant use = without second operand");
    return;
  }

  // check if buttonPressed is a num and reassign operand1 if it is a 0 otherwise add onto it
  if (operand1 === 0 && !isNaN(buttonPress) && !operator) {
    console.log("reassign operand1");
    operand1 = buttonPress;
  } else if (operand1 != 0 && !isNaN(buttonPress) && !operator) {
    console.log("add onto operand 1");
    operand1 += buttonPress;
  }

  // assigns an operator if one is selected and one does not already exist
  if (checkForOperators && !operator) {
    console.log("assign new operator");
    operator = buttonPress;
  }

  // adds a num to operand2 if operand1 and operator exist
  if (operand1 && operator && !isNaN(buttonPress)) {
    console.log("add onto operand 2");
    operand2 += buttonPress;
  }

  // runs equation with = is pressed an resets operator and operand 2
  if (operand1 && operator && operand2 && buttonPress === "=") {
    console.log(operate(operand1, operator, operand2));
    operator = "";
    operand2 = "";
  }
  // clears calculator
  if (buttonPress === "AC") {
    operand1 = 0;
    operator = "";
    operand2 = "";
  }
}

// display a error message if the user tries to divide by 0

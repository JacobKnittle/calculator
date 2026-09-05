let num1 = 0;
let operator;
let num2;

const screen = document.querySelector('.screen');
screen.value = num1

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === 'x') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    }
}

function add(num1, num2) {
    return +num1 + +num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

const buttonsContainer = document.querySelector('.buttons-container')
buttonsContainer.addEventListener(('click'), (e) => {
    
    if (e.target.innerText.length > 2) return
    const user_input = e.target.innerText;
    updateValuesAndDisplay(user_input)
})

function updateValuesAndDisplay(userInput) {
    if (screen.value.length > 16) return
    if (userInput === '=' && (num1 === undefined || num2 === undefined || operator === 'undefined')) return
    if (userInput === '=' && (num1 !== undefined && num2 !== undefined && operator !== undefined)) {
        num1 = operate(num1, operator, num2)
        num2 = undefined
        operator = undefined
        screen.value = num1
    }

    if (num1 === 0 && operator === undefined && Number.isInteger(+userInput)) {
        num1 = +userInput
        screen.value = num1
    } else if (num1 !== 0 && operator === undefined && Number.isInteger(+userInput)) {
        num1 += userInput
        screen.value = num1
    } else if (operator === undefined && num2 === undefined && (userInput === '/' || userInput === '+' || userInput === 'x' || userInput === '-')) {
        operator = userInput;
        screen.value = `${num1} ${operator}`
    } else if (num1 !== undefined && operator !== undefined) {
        if (num2 === undefined) {
            num2 = userInput;
        } else {
            num2 += userInput
        }
        
        screen.value = `${num1} ${operator} ${num2}`
    }
}
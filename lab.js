// Summative Lab Part 1: JavaScript Calculator

// Array to Store History
let history = [];

// Function to Add to History Array
function addToHistory(operand1, operand2, operator, result) {
    const calculation = {
        operand1: operand1,
        operand2: operand2,
        operator: operator,
        result: result
    };
    history.push(calculation);
}

// Function for Addition
function add(a, b) {
    let result = a + b;
    addToHistory(a, b, '+', result);
    return result;
}

// Function for Subtraction
function subtract(a, b) {
    let result = a - b;
    addToHistory(a, b, '-', result);
    return result;
}

// Function for Multiplication
function multiply(a, b) {
    let result = a * b;
    addToHistory(a, b, '*', result);
    return result;
}

// Function for Division
function divide(a, b) {
    let result = a / b;
    addToHistory(a, b, '/', result);
    return result;
}

// Function to Display History
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations yet.");
    } else {
        console.log("Calculation History:");
        history.forEach((calc, index) => {
            console.log(`${index + 1}: ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`);
        });
    }
}



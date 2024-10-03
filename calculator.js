let displayValue = '0';
let firstNum = null;
let secondNum = null;
let currentOperator = null;

function updateDisplay() {
 let display = document.getElementById("display");
 display.innerText = displayValue;  
}
function addNumber(number) {
 if (displayValue === '0') {  
     displayValue = number.toString();  
 } else {
     displayValue += number.toString(); 
 }
 updateDisplay();
}
function addOperator(operator) {
 if (firstNum === null) {
  firstNum = parseFloat(displayValue);  
 } else if (currentOperator) {
 secondNum = parseFloat(displayValue); 
  calculateAnswer();  
 firstNum = parseFloat(displayValue);  
 }
 currentOperator = operator;  
 displayValue = '0';  
}
function clearDisplay() {
 displayValue = '0';
 firstNum = null;
 secondNum = null;
 currentOperator = null;
 updateDisplay();
}
function deleteNum() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);  
    } else {
        displayValue = '0';  
    }
    updateDisplay();
   }
   function addDecimal() {
    if (displayValue.indexOf('.') === -1) {
        displayValue = displayValue + '.';  
    }
    updateDisplay();
   }
   function clearAll() {
    let display = document.getElementById('display');
    display.value = '';
}
   function calculateAnswer() {
    if (firstNum !== null && currentOperator !== null) {
       secondNum = parseFloat(displayValue);  
    let result = 0;
    if (currentOperator === '+') {
       result = firstNum + secondNum;
    } else if (currentOperator === '-') {
        result = firstNum - secondNum;
    } else if (currentOperator === '*') {
        result = firstNum * secondNum;
    } else if (currentOperator === '/') {
    if (secondNum !== 0) {
        result = firstNum / secondNum;  
    } else {
        result = 'Error';
    }
    } else if (currentOperator === '%') {
        result = firstNum % secondNum;
    }
    displayValue = result.toString();
    firstNum = result;  
    currentOperator = null; 
    secondNum = null;  
    updateDisplay();  
       }
   }

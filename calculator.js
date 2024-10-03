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


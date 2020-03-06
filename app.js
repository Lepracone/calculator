//Variables
let displayValue = [0];
let firstValue = null;
let operatorValue=null;
let secondValue = null;
let onHold = false;
let operatorStatus = false;

//DOM Manipulation
let keys = document.querySelector(".keys");
const display = document.querySelector(".display")

//Basic functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    if(b ==0){
        return "ERROR"
    }
    return a/b;
}

function multiply(a,b){
    return a*b;
}

//Operate function, calls basic functions
function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(secondNum);
           return calc = add(firstNum,secondNum);
           
        case "-":
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(secondNum);
            return calc = subtract(firstNum,secondNum);
            
        case "/":
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(secondNum);
            return calc = divide(firstNum,secondNum); 
        
        case "*":
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(secondNum);
            return calc = multiply(firstNum,secondNum);
            
        case "=":
            return firstValue;
    }
}

keys.addEventListener("click", function(event){
    const { target} = event; //equivalent to const target = event.target

    if(!target.matches("button")){
        return
    }

    if(target.classList.contains("decimal")){
        inputDecimal(target.value);
        updateDisplay(); 
        return;
    }

    if(target.classList.contains("operator")){
        inputOperator(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains("clear")){
        clear();
        updateDisplay();
        return;
    }

    if(target.classList.contains("clearAll")){
        clearAll();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();

});

function inputDigit(digit){
    if(displayValue.length === 10){ //Impede que exceda os 10 caracteres que o ecra permite mostrar
        return
    }
    operatorStatus = false;
    if(onHold === true){
        displayValue = digit;
        onHold = false;
    }else if(displayValue[0] === 0){
        displayValue = digit;
    }else{
        displayValue = displayValue + digit;
    }
    
}

function updateDisplay(){
    display.value = displayValue
}



function inputDecimal(dot){
    if(!displayValue.includes(dot)){
        displayValue += dot;
    }
}

function inputOperator(inputOp){
    if(operatorStatus === true){
        operatorValue = inputOp;
        return;
   }
    inputValue = parseFloat(displayValue);
    if(firstValue === null){
        firstValue = inputValue;
        operatorStatus = true;
    }else{
        let result = operate(operatorValue, firstValue, inputValue);
        displayValue = firstValue = result;
        operatorStatus = true;
    }
        onHold = true;
        operatorValue = inputOp;
}

function clearAll(){
    displayValue = [0];
    firstValue = null;
    inputValue = null;
}

function clear(){
    if(displayValue[0]===0){
        return
    }
    displayValue = displayValue.substring(0, displayValue.length -1);
    if(displayValue === ""){
        displayValue = [0];
    }
}
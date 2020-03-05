
//Basic functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    if(b ==0){
        return "Impossible to divide by zero"
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
           return add(firstNum,secondNum);
           
        case "-":
            return calc = subtract(firstNum,secondNum);
            
        case "/":
            return calc = divide(firstNum,secondNum); 
        
        case "*":
            return calc = multiply(firstNum,secondNum);  
    }
}
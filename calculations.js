// run the main function when the dom is ready
//document.addEventListener('DOMContentLoaded', functionName);

//
function add(a,b) {
    return a+b;
}

//
function subtract(c,d) {
    return c-d;
}

//
function multiply(x,y) {
    return x*y;
}

//
function divide(above,below) {
    return above/below;
}

function operate(operator, num1, num2) {
    //
    switch (operator) {
        case '+':
          return  add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            break;
    }
}

//
console.log(`1 + 2 = ${add(1,2)}`); // answer should be 3

//
console.log(`2 - 1 = ${subtract(2,1)}`); // answer should be 1

//
console.log(`2 * 3 = ${multiply(2,3)}`); // answer should be 6

//
console.log(`1 / 2 = ${divide(1,2)}`); // answer should be 0.5
console.log(operate('+',1,2));
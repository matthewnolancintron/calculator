// run the main function when the dom is ready
document.addEventListener('DOMContentLoaded', main);

function main() {
    //
    console.log('dom is loaded');

    //
    let display = document.querySelector('.display');

    //number buttons 
    let zeroButton = document.querySelector('.zero');
    let oneButton = document.querySelector('.one');
    let twoButton = document.querySelector('.two');
    let threeButton = document.querySelector('.three');
    let fourButton = document.querySelector('.four');
    let fiveButton = document.querySelector('.five');
    let sixButton = document.querySelector('.six');
    let sevenButton = document.querySelector('.seven');
    let eightButton = document.querySelector('.eight');
    let nineButton = document.querySelector('.nine');

    //sign
    let signButton = document.querySelector('.sign');

    // decimal point
    let decimalPointButton = document.querySelector('.decimal-point');

    //
    let displayValue = display.textContent;

    //
    let operationButtons = document.querySelectorAll('.operation-buttons');

    //console.log(operationButtons);

    //
    function handleDisplayStates(e) {
        // the code below handles display states for
        // the number sign and decimal point

        // check if display contain class default
        // which means default vaule is present
        // only clear the display and replace with starting 
        //digit when class is present
        // also remove class default
        //when class is not present
        // tack on the digit instead of replacing.
        if (display.classList.contains('default')) {
            display.classList.remove('default');
            // if adding a decimal to the default display
            if (e.target.textContent === '.') {
                // don't remove the zero just tack on the decimal
                return display.textContent += e.target.textContent;
            } else {
                // if not a decimal then replace default text
                display.textContent = display.textContent.replace(display.textContent, '');
                return display.textContent = e.target.textContent;
            }
        } else {
            // check for leading zero
            if (display.textContent == '0') {
                // if adding a decimal to the default display
                if (e.target.textContent === '.') {
                    // don't remove the zero just tack on the decimal
                    return display.textContent += e.target.textContent;
                } else {
                    // if not a decimal then replace default text
                    display.textContent = display.textContent.replace(display.textContent, '');
                    return display.textContent = e.target.textContent;
                }
            } else {
                if(isWaitingForNextNumber){
                    display.textContent = display.textContent.replace(display.textContent, '');
                    isWaitingForNextNumber = false;
                    return display.textContent = e.target.textContent;
                } else {
                    return display.textContent += e.target.textContent;
                }
            }
        }
        // might need to add conditional for sign button...
        
        //handle leading zero
        /*
        if the display has no class of default
        and just a zero but the user presses a key
        other than the decimal then remove the zero
        and replace with the other number
        no leading zero with out decimal point
        
        */
       
    }

    //todo: could shorten this code...
    //event listeners for the number buttons
    zeroButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);

    });

    oneButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    twoButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    threeButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    fourButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    fiveButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    sixButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    sevenButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    eightButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    nineButton.addEventListener('click', (e) => {
        displayValue = handleDisplayStates(e);
    });

    /*
     could move the conditionals 
     to the handle states function.
     and split into a sub function. 
     */
    signButton.addEventListener('click', (e) => {
        // check to see if number on display is already negative
        if (display.textContent[0] == '-') {
            // it's negative, change it to positve
            display.textContent = display.textContent.slice(1);
        } else {
            // it's positve, change it to negative
            display.textContent = `-${display.textContent}`
        }
    });

    /*
     could move the conditionals 
     to the handle states function.
     and split into a sub function. 
     */
    decimalPointButton.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        // if there is not decimal add one at the end
        if (!(display.textContent.includes(e.target.textContent))) {
            // there is no decimal add it to the end
            displayValue = handleDisplayStates(e);
        }
        //will only add a decimal point if there isn't one present
    });

    //handle operations
    /*
        when any of the operation buttons are clicked call the
        operation function
     */

    //store the current operation 2 number and an operator.
    let currentOperation = [];

    //
    let resultOfCurrentOperation = 0;

    //defining a state the calculator can be in.
    let isWaitingForNextNumber = false;

    //
    let snarkyDivideByZeroMessage = 'How should I know?';
    
    // handles events for the operation buttons
    for(let operationButton of operationButtons){
        operationButton.addEventListener('click', (e) => {
            //
            if(display.textContent == snarkyDivideByZeroMessage){
                if(e.target.textContent == 'clear'){
                    //
                    clear();
                    //exit
                    return;
                }else{
                    //exit
                    return;
                }
            }
  
            //clear:
            function clear(){
                // set the display to 0
                display.textContent = '0';
                // clear the current operation array
                currentOperation.length = 0;
            }

            if(e.target.textContent == 'clear'){
                clear();
                // exit
                return;
            }

            //current operation array is empty
            if(currentOperation.length === 0){
                //not enough info in the current operation
                //to compute a result so...
                // only run if operation is not equals
                if(!(e.target.textContent == '=')){
                    //add number on the display to the array
                    currentOperation.push(display.textContent);

                    // add operation button if not equal sign
                    currentOperation.push(e.target.textContent);

                    //update the isWaitingForNextNumber bool
                    isWaitingForNextNumber = true;

                    //
                    console.log(currentOperation);

                    //
                    return;
                }
            }
            
            //current operation has a number and operator
            if(currentOperation.length === 2) {
                //divide by zero
                if(display.textContent == '0' && currentOperation[1] == '/'){
                    display.textContent = snarkyDivideByZeroMessage;
                    isWaitingForNextNumber = true;
                    currentOperation.length = 0;
                    return; // exit
                }

                // equate the current operation
                if(e.target.textContent == '='){
        
                    // when in the middle of waiting for
                    // the next number but the equal
                    // sign is pressed instead
                    // then just ignore it
                    if(isWaitingForNextNumber) {
                        return; // exit
                    }

                    //3rd item in the array is the number currently in the display
                    currentOperation.push(display.textContent);
                    
                    //
                    console.log(currentOperation);
                    
                    //compute current operation array and update the display with the result 
                    resultOfCurrentOperation = operate(currentOperation[1],currentOperation[0],currentOperation[2]);
                    
                    /*
                    rounding answers with long decimals
                    so that they don't overflow the screen
                    */

                    // set condtion for when answer has more than 7 numbers after the decimal
                    // if that happens then adjust the answer by rounding it
                    if((resultOfCurrentOperation.toString().slice(resultOfCurrentOperation.toString().indexOf('.')+1).length) > 7){
                        console.log('result has more than 7 number after the decimal');
                        resultOfCurrentOperation = Math.round(resultOfCurrentOperation);
                    }
                    //
                    display.textContent = resultOfCurrentOperation.toString();

                    //
                    console.log(resultOfCurrentOperation);

                    //clear current operation array
                    currentOperation.length = 0;
                    
                    //update isWaitingForNextNumber bool
                   isWaitingForNextNumber = true;  
                } else{
                    //operation other than equals has occured.
                   
                    // handle state for when calculator is expecting next number
                    if(isWaitingForNextNumber === true){
                        //user press another operation before entering another number
                        // update the operation in the current operation array to
                        // the new operation pressed.
                        if(
                            (e.target.textContent != currentOperation[1]) &&
                            (e.target.textContent == '+' ||
                             e.target.textContent == '-' ||
                             e.target.textContent == '*' ||
                             e.target.textContent == '/')){
                            //update the 2nd index of the array to the new operation
                            currentOperation[1] = e.target.textContent;
                            console.log(currentOperation);
                            return; // exit
                        }
                        /* 
                        same sign repeated:
                        do nothing
                        */
                        return; // exit
                    }

                    //3rd item/index as the number currently in the display
                    currentOperation.push(display.textContent);
                    console.log(currentOperation);
                
                    //compute current operation array and update the display with the result 
                    resultOfCurrentOperation = operate(currentOperation[1],currentOperation[0],currentOperation[2]);
                    display.textContent = resultOfCurrentOperation.toString();
                    console.log(resultOfCurrentOperation);
            
                    //clear current operation array
                    currentOperation.length = 0;

                    //add the result as the first item/index
                    currentOperation.push(resultOfCurrentOperation);

                    //add operation into the array
                    currentOperation.push(e.target.textContent);

                    //
                    isWaitingForNextNumber = true;
                    //
                    return
                }
                //
              }
              //
        });
    }
}

//
function add(a, b) {
    return a + b;
}

//
function subtract(c, d) {
    return c - d;
}

//
function multiply(x, y) {
    return x * y;
}

//
function divide(above, below) {
    return above / below;
}

function operate(operator, num1, num2) {
    //
    switch (operator) {
        case '+':
            return add(parseFloat(num1), parseFloat(num2));
            break;
        case '-':
            return subtract(parseFloat(num1), parseFloat(num2));
            break;
        case '*':
            return multiply(parseFloat(num1), parseFloat(num2));
            break;
        case '/':
            return divide(parseFloat(num1), parseFloat(num2));
            break;
        default:
            break;
    }
}
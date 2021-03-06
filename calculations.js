// run the main function when the dom is ready
document.addEventListener('DOMContentLoaded', main);
/*
    todo:

    0:
    add super script element showing the current equation
    for added visual feedback

    
 */

//
function main() {
    //
    console.log('dom is loaded');

    //
    let display = document.querySelector('.display');

    //number buttons 
    let numberButtons = document.querySelectorAll('.number-buttons');

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
        function changeSignOfNumber(){
            // check to see if number on display is already negative
            if (display.textContent[0] == '-') {
                //display
                console.log('happy');
               // it's negative, change it to positve
               display.textContent = display.textContent.slice(1);
           } else {
               // it's positve, change it to negative
               console.log('sad');
               display.textContent = `-${display.textContent}`
           }
        }

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
            } else if (e.target.textContent === '+/-'){
                return changeSignOfNumber();
            }else {
                // if not a decimal then replace default text
                display.textContent = display.textContent.replace(display.textContent, '');
                return display.textContent = e.target.textContent;
            }
        } else {
            // not default display
            
            // if there is not decimal add one at the end
            // there is no decimal add it to the end
        //will only add a decimal point if there isn't one present
        

            // check for leading zero
            if (display.textContent == '0') {
                // if adding a decimal to the default display
                if (e.target.textContent === '.' && !(display.textContent.includes('.')) ) {
                    // don't remove the zero just tack on the decimal
                    return display.textContent += e.target.textContent;
                } else if(e.target.textContent === '+/-'){
                    //
                    return changeSignOfNumber();
                } else {
                    // if not a decimal then replace default text
                    display.textContent = display.textContent.replace(display.textContent, '');
                    return display.textContent = e.target.textContent;
                }
            } else {
                //not leading zero
                if(e.target.textContent === '+/-'){
                    console.log('enter?')
                    return changeSignOfNumber();
                }

                // waiting for a new number to be entered
                if(isWaitingForNextNumber){
                    display.textContent = display.textContent.replace(display.textContent, '');
                    isWaitingForNextNumber = false;
                    return display.textContent = e.target.textContent;
                } else if (e.target.textContent === '.'){
                    if(!(display.textContent.includes('.'))){
                        // don't remove the zero just tack on the decimal
                        return display.textContent += e.target.textContent;
                    }
                }else {  
                    //not waiting for a new number to be entered
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
    for(let numberButton of numberButtons){
        numberButton.addEventListener('click', (e) => {
            
            // console.log(e.target);
            // console.log(numberButtons[0]);
            
            // prevent parent element from calling 
            // the event on all of the number buttons
            // when clicked
            if(e.target == numberButtons[0]){
                return;
            } else{
                //
                displayValue = handleDisplayStates(e);
            }
        });
    }
    
    document.addEventListener('keydown', (e)=> {
        //console.log(numberButtons[0]);
       console.log(`Event key: ${e.key}`);
       // console.log(`Event Code: ${e.code}`);
        e.preventDefault();
        //ctrl+r doesn't refresh the page anymore,
        //todo: fix issue above.

        switch (e.key) {
            case '0' || 'Numpad0':
                console.log("zero");
                numberButtons[0].childNodes[1].childNodes[1].click();
                break;
            case '1' || 'Numpad1':
                console.log("one");
                numberButtons[0].childNodes[3].childNodes[1].click();
                break;
            case '2' || 'Numpad2':
                console.log("two");
                numberButtons[0].childNodes[5].childNodes[1].click();
                break;
            case '3' || 'NumPad3':
                console.log("three");
                numberButtons[0].childNodes[7].childNodes[1].click();
                break;
            case '4' || 'Numpad4':
                console.log("four");
                numberButtons[0].childNodes[9].childNodes[1].click();
                break;
            case '5' || 'Numpad5':
                console.log("five");
                numberButtons[0].childNodes[11].childNodes[1].click();
                break;
            case '6' || 'Numpad6':
                console.log("six");
                numberButtons[0].childNodes[13].childNodes[1].click();
                break;
            case '7' || 'Numpad7':
                console.log("seven");
                numberButtons[0].childNodes[15].childNodes[1].click();
                break;
            case '8' || 'Numpad8':
                console.log("eight");
                numberButtons[0].childNodes[17].childNodes[1].click();
                break;
            case '9' || 'Numpad9':
                console.log('nine');
                numberButtons[0].childNodes[19].childNodes[1].click();
                break;
            case '+':
                console.log('plus');
                operationButtons[0].childNodes[1].childNodes[1].click();
                break;
            case '-':
                console.log('minus');
                operationButtons[0].childNodes[3].childNodes[1].click();
                break;
            case '*':
                console.log('times');
                operationButtons[0].childNodes[7].childNodes[1].click();
                break;
            case '/':
                console.log('divides');
                operationButtons[0].childNodes[9].childNodes[1].click();
                break;
            case '=' || 'Enter':
                console.log('equals');
                operationButtons[0].childNodes[13].childNodes[1].click();
                break;
            case 'Backspace':
                //5 is del
                console.log('backspace');
                operationButtons[0].childNodes[5].childNodes[1].click();
                break;
            case 'c':
                //11 is clear
                console.log('clear');
                operationButtons[0].childNodes[11].childNodes[1].click();
                break;
            default:
                e.preventDefault();
                break;
        }
        console.log(operationButtons[0].childNodes[13].childNodes)
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
            // console.log(e.target);
            // console.log(operationButtons[0]);

            //prevent parent element the container
            // from call the event on all the operation
            // buttons
            if(e.target == operationButtons[0]){
                return;
            }

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

            //
            function backspace(){
                //console.log(typeof display.textContent)
                /*
                    get the text from the display
                    store it as an array
                    pop off the last index of the array
                    then convert back to a string and
                    use it to update the display

                    conditionals to add:
                    if the array only has 1 index
                    and the value of the item at the index
                    is zero then do nothing just exit the
                    function

                    if the array has only 1 index but the 
                    value of the item at index 1 is not zero
                    then make it zero and exit the function
                 */
                console.log(display.textContent)
                let displayArray = display.textContent.split('');
                //console.log(displayArray);

                if(displayArray.length == 1 && displayArray[0] == '0'){
                    return;
                }
                
                if(displayArray.length == 1 && displayArray[0] != '0'){
                    console.log(displayArray);
                     display.textContent = '0';
                }

                if(displayArray.length > 1){
                    displayArray.pop();
                    console.log(displayArray)
                    console.log(displayArray.join(''))
                    display.textContent = displayArray.join('');
                }



            }

            //
            if(e.target.textContent == 'clear'){
                clear();
                // exit
                return;
            }

            //
            if(e.target.textContent =='del'){
                //
                backspace();
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
                if(display.textContent == '0' && currentOperation[1] == '/' && isWaitingForNextNumber == false){
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
                        if(e.target.textContent == currentOperation[1]){
                            console.log('same');
                            return;
                        }
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
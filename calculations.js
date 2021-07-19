// run the main function when the dom is ready
//document.addEventListener('DOMContentLoaded', functionName);
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

    let displayValue = display.textContent;

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
                return display.textContent += e.target.textContent;
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

    //update the display and store it's current value,
    // when pressing number buttons

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

    //
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

    //
    decimalPointButton.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        // if there is not decimal add one at the end
        if (!(display.textContent.includes(e.target.textContent))) {
            // there is no decimal add it to the end
            displayValue = handleDisplayStates(e);
        }
        //will only add a decimal point if there isn't one present
    });






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
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

//
console.log(`1 + 2 = ${add(1, 2)}`); // answer should be 3

//
console.log(`2 - 1 = ${subtract(2, 1)}`); // answer should be 1

//
console.log(`2 * 3 = ${multiply(2, 3)}`); // answer should be 6

//
console.log(`1 / 2 = ${divide(1, 2)}`); // answer should be 0.5

// 
console.log(operate('+', 1, 2)); // answer should be 3
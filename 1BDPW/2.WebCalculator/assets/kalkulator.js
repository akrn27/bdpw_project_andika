// let p = document.createElement('p');
// p.innerHTML = 'HAI INI PERCOBAAN';

// document.body.appendChild(p);

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false,
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    } else {
    calculator.displayNumber += digit;
    }
}

const buttons = document.querySelectorAll('.button');
for(const button of buttons){
    button.addEventListener('click', function(event) {
        // Mendapatkan object elemen yang diklik
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay();
    })
}
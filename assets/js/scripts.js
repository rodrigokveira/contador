// console.log("Hello World!");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var buttonIncrement = document.getElementById("adicionar");
var buttonDecrement = document.getElementById("subtrair");
var message = document.getElementById("message");

function limit() {
    if (currentNumber == 10) {
        buttonIncrement.disabled = true;
        currentNumberWrapper.style.fontWeight = 700;
        message.innerHTML = "Limite máximo atingido!"
    } else {
        buttonIncrement.disabled = false;
        currentNumberWrapper.style.fontWeight = 400;
        if (currentNumber == -10) {
            buttonDecrement.disabled = true;
            currentNumberWrapper.style.fontWeight = 700;
            message.innerHTML = "Limite mínimo atingido!"
        } else {
            buttonDecrement.disabled = false;
            currentNumberWrapper.style.fontWeight = 400;
            message.innerHTML = "";
        }
    }
}

function negative() {
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = 'black';
    } else {
        if (currentNumber < 0) {
            currentNumberWrapper.style.color = 'red';
        }
    }

}

function positive() {
    if (currentNumber == 0) {
        currentNumberWrapper.style.color = 'black';
    } else {
        if (currentNumber > 0) {
            currentNumberWrapper.style.color = 'blue';
        }
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    limit();
    positive();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    limit();
    negative();
}

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
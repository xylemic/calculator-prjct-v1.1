"use strict";

let currentNumber = "";
let previousNumber = null;
let operation = null;
// let calculatorOn = false;

const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");




function disableNumberPadButtons() {
    const numberButtons = document.querySelectorAll(".numberButtons");
    numberButtons.forEach(button => {
        button.disabled = true;
        console.log(numberButtons);
    })
}

function enableNumberPadButtons() {
    const numberButtons = document.querySelectorAll(".numberButtons");
    numberButtons.forEach(button => {
        button.disabled = false;
    })
}


offButton.addEventListener("click", () => {
    // e.preventDefault;
    console.log("yes, this works");
    document.getElementById("output").value = "";
    currentNumber = "";
    previousNumber = null;
    operation = null;
    disableNumberPadButtons();
})

onButton.addEventListener("click", () => {
    console.log("yeah, it came on");
    document.getElementById("output").value = 0;
    currentNumber = "";
    previousNumber = null;
    operation = null;
    enableNumberPadButtons();
})


function handleNumber(number) {
    currentNumber += number;
    document.getElementById("output").value = currentNumber;
}

function handleOperation(op) {
    if (currentNumber === "") return;
    previousNumber = parseFloat(currentNumber);
    currentNumber = "";
    operation = op;
}

function handleClear() {
    currentNumber = "";
    previousNumber = null;
    operation = null;
    document.getElementById("output").value = 0;
}

function calculate() {
    


    function handleOperation(op) {
        // Always reset currentNumber before storing the previous number
        currentNumber = ""; 
        if (previousNumber !== null) {
          calculate(); // Perform calculation if there's a previous number and operation
        }
        previousNumber = parseFloat(currentNumber);
        operation = op;
      }


    if (previousNumber === null || currentNumber === "" || operation === null) return;

    let result;
    const NUM1 = previousNumber;
    const NUM2 = parseFloat(currentNumber);

    switch (operation) {
        case "+":
            result = NUM1 + NUM2;
            break;
        case "-":
            result = NUM1 - NUM2;
            break;
        case "×":
            result = NUM1 * NUM2;
            break;
        case "%":
            result = NUM1 % NUM2;
            break;
        case "÷":
            if (NUM2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = NUM1 / NUM2;
            break;
            default:
                return;
    }

    currentNumber = result.toString();
    previousNumber = null;
    operation = null;
    document.getElementById("output").value = currentNumber;
}



// This code checks for a previous number and operation upon clicking '='
if (previousNumber !== null) {
    calculate(); // Perform calculation if there's a previous number and operation on page load
  }

  document.getElementById("output").value = "";
  disableNumberPadButtons();
  



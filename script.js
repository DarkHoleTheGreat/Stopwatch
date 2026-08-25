let input = document.getElementById("step");

let inputNumber = Number(input.value);

input.addEventListener("change", ()=> {
    inputNumber = Number(input.value)
})

let number = 0;

const JustNumber = document.getElementById("number");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

function checkSize() {
    if (number < 0) {
        JustNumber.style.color = "red";
    } else {
        JustNumber.style.color = "#39FF14";
    }
}

plusButton.addEventListener("click", ()=> {
    number += inputNumber;
    JustNumber.innerHTML = number;
    checkSize();
})

minusButton.addEventListener("click", ()=> {
    number -= inputNumber;
    JustNumber.innerHTML = number;
    checkSize()
})

resetButton.addEventListener("click", ()=> {
    number = 0;
    JustNumber.innerHTML = number;
    checkSize()
})


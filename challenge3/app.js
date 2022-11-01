const inputRange = document.querySelector(".range");
const button = document.querySelector("#button");
const item = document.querySelector("#item");
const check = document.querySelector("#check");
const inner = document.querySelector("#inner");
const result = document.querySelector("#result");


let randomNumber;

function handleBtnClick(event) {
    event.preventDefault();

    const INPUTRANGE_VALUE = parseInt(inputRange.value);
    const ITEM_VALUE = parseInt(item.value);

    if (INPUTRANGE_VALUE !== "" && INPUTRANGE_VALUE >= 0) {
        if (ITEM_VALUE >= 0 && ITEM_VALUE <= INPUTRANGE_VALUE) {
            randomNumber = Math.floor(Math.random() * (INPUTRANGE_VALUE + 1));
            check.innerText = "You chose: " + ITEM_VALUE + ", the machine chose: " + randomNumber + ".";
            inner.classList.remove("hidden");
        }

        if (ITEM_VALUE === randomNumber) {
            result.innerText = "You won!";
        }
        else {
            result.innerText = "You lost!";
        }
    }
}

button.addEventListener("click", handleBtnClick);
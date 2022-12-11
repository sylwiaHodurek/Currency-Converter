console.log("Witam wszystkich, którzy tu zaglądają :)");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = "0.22";
let SEK = "2.32";
let NOK = "2.19";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result;

    if (currency === "EUR") {
        result = (amount * EUR);
    } else if (currency === "SEK") {
        result = (amount * SEK);
    } else {
        result = (amount * NOK);
    }

    resultElement.innerText = result.toFixed(2);

});




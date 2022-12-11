console.log("Witam wszystkich, którzy tu zaglądają :)");
{
const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const calculateResult = (currency) = {

    if (currency === "EUR") {
        result = (amount * EUR);
    } else if (currency === "SEK") {
        result = (amount * SEK);
    } else {
        result = (amount * NOK);
    }

}

const EUR = "0.22";
const SEK = "2.32";
const NOK = "2.19";

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = currencyElement.value;
    const amount = +amountElement.value;
    let  result;

   
    resultElement.innerText = result.toFixed(2);

});

}


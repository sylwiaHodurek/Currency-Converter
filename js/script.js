console.log("Witam wszystkich, którzy tu zaglądają :)");
{
    const calculateResult = (amount, currency) => {
        const EUR = "0.22";
        const SEK = "2.32";
        const NOK = "2.19";

        if (currency === "EUR") {
            return (amount * EUR);
        } else if (currency === "SEK") {
            return (amount * SEK);
        } else {
            return (amount * NOK);
        }

    };

    const resultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
        
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");


            const currency = currencyElement.value;
            const amount = +amountElement.value;

            const result = calculateResult(amount, currency);
            
            resultText();
        });
       

    };

    init();

}

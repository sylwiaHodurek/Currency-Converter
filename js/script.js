{
    const welcome = () => {

        console.log("Witam wszystkich, którzy tu zaglądają :)");
    };

    welcome();



    const calculateResult = (amount, currency) => {
        const EUR = 0.22;
        const SEK = 2.32;
        const NOK = 2.19;

        switch (currency) {
            case "EUR":
                return (amount * EUR);
            case "SEK":
                return (amount * SEK);
            case "NOK":
                return (amount * NOK);
        };

    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);

    };

    const onFormSubmit = (formElement) => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

        };

        onFormSubmit ();

        const init = () => {

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");

            const currency = currencyElement.value;
            const amount = +amountElement.value;

            const result = calculateResult(amount, currency);
            updateResultText(result);

        });
    };

    init();

}

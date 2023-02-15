{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const rateEUR = 4.71;
        const rateUSD = 4.35;
        const rateGBP = 5.37;

        const currency = currencyElement.value;
        const amount = +amountElement.value;
        let result = resultElement.value;

        switch (currency) {
            case "EUR":
                result = amount / rateEUR;
                break;
            case "USD":
                result = amount / rateUSD;
                break;
            case "GBP":
                result = amount / rateGBP;
                break;
        };

        resultElement.value = `${amountElement.value} PLN = ${result.toFixed(2)} ${currency}`;
    });
}
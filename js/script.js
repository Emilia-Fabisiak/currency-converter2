let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.71;
    let rateUSD = 4.35;
    let rateGBP = 5.37;

    let currency = currencyElement.value;
    let amount = +amountElement.value;
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

formElement.addEventListener("reset", () => {
})     

{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.71;
        const rateUSD = 4.35;
        const rateGBP = 5.37;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
                
            case "USD":
                return amount / rateUSD;
                
            case "GBP":
                return amount / rateGBP;
        };
    }

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        let result = calculateResult(amount, currency);
        
        resultElement.value = `${amountElement.value} PLN = ${result.toFixed(2)} ${currency}`;
    });
}
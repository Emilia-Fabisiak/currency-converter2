{
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
        }
    };

    const updateResultText = (amountElement, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${amountElement.value} PLN = ${result.toFixed(2)} ${currency}`;
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
    
        const currency = currencyElement.value;
        const amount = +amountElement.value;
    
        const result = calculateResult(amount, currency);

        updateResultText(amountElement, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }; 
    
    init();
}
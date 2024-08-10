document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const number1 = parseFloat(document.getElementById("number1").value);
        const operator = document.getElementById("operator").value;
        const number2 = parseFloat(document.getElementById("number2").value);
        let result;

        if (operator === "+") {
            result = number1 + number2;
        } else if (operator === "-") {
            result = number1 - number2;
        } else if (operator === "*") {
            result = number1 * number2;
        } else if (operator === "/") {
            result = number1 / number2;
        } else {
            result = "Invalid operator";
        }

        alert("The result is: " + result);
    });
});

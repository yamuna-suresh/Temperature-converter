const celcius = document.getElementById("Celcius");
const fahrenheit = document.getElementById("Fahrenheit");
const kelvin = document.getElementById("Kelvin");

function Calculate(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheit.value = (currentValue * 9 / 5) + 32;
            kelvin.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celcius.value = (currentValue - 32) * 5 / 9;
            kelvin.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celcius.value = currentValue - 273.15;
            fahrenheit.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}
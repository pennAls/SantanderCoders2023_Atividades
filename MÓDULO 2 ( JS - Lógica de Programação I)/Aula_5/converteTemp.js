/*
    Crie uma função chamada 'converterCelsiusParaFahrenheit' que recebe uma temperatura em Celsius como parâmetro e retorna a temperatura equivalente em Fahrenheit.

    Fórmula:
    °F = °C × 1,8 + 32
*/

function converterCelsiusParaFahrenheit(c){
    const f = c * 1.8 + 32
    return  f
}

console.log(converterCelsiusParaFahrenheit(2))
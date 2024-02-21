/*
    Crie uma função chamada 'somarIntervalo' que recebe dois números como parâmetro e retorna a soma de todos os números no intervalo, inclusive esses dois números.
*/

function somarIntervalo (x,y){
    soma = 0
    for(let i = y; i>= x; i--){
        soma = soma + i
        y--
    }
    return soma

}

console.log(somarIntervalo(9,10))

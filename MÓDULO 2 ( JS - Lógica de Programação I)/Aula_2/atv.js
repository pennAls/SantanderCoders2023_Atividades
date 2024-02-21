//ATV -1: As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

// salários até R$ 1500,00 (incluindo) : aumento de 20%
// salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
// salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
// salários de R$ 2000,00 em diante : aumento de 5% 

// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.


let salario_1 = 1400;
salario = parseFloat(salario_1)
let salario_2
let aumento;
let x;

if(salario_1 <= 1500){
    x = 20/100
    aumento = (x * salario)
    salario_2 = salario_1 + aumento
    
} else if(1500 < salario_1 < 1700 ){
    x = 15/100
    aumento = (x * salario)
    salario_2 = salario_1 + aumento

}else if(1700 < salario_1 < 2000){
    x = 10/100
    aumento = (x * salario)
    salario_2 = salario_1 + aumento

}else if(salario_1 >= 2000){
    x = 5/100
    aumento = (x* salario)
    salario_2 = salario_1 + aumento
}

console.log("Salário Originial : R$",salario_1)
console.log("Salário com Reajuste:",salario_2)
console.log("Percentual do Reajuste:",x)
console.log("Valor do Aumento", aumento)



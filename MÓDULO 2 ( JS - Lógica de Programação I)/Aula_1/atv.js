//ATV-1: Declare duas variáveis numéricas, c e d, e realize uma operação matemática entre elas. Imprima o resultado no console.

let num1 = 10;
let num2 = -5;

console.log(num1 + num2);

// //ATV -2: Declare uma variável 'e' contendo uma string de sua escolha. Em seguida, concatene essa string com outra e imprima o resultado.

let b = "Hello-";
let a = "World";

console.log(b + a);

//ATV -3: Crie um algoritmo que, dadas duas variáveis, valide se os seus valores são do number e então retorne a soma entre esses valores. Caso algum dos valores não for um número, faça a conversão deste. Se não for possível fazer a conversão, exiba uma mensagem de erro ao usuário.

let variavel1 = 9;
let variavel2 = "15";

if (typeof variavel1 !== "number") {
  variavel1 = parseInt(variavel1);

  if (isNaN(variavel1)) {
    console.log("Erro: O valor da variável 1 não é um número válido.");
  }
}

if (typeof variavel2 !== "number") {
  variavel2 = parseInt(variavel2);

  if (isNaN(variavel2)) {
    console.log("Erro: O valor da variável 2 não é um número válido.");
  }
}

if (!isNaN(variavel1) && !isNaN(variavel2)) {
  const soma = variavel1 + variavel2;
  console.log("A soma dos valores é:", soma);
}

//ATV -4: Crie um algoritmo que, dada uma variável, que recebe o valor de um CPF com formatação, remova essa formatação e armazene esse valor sem formatação, como um 'number'.

let cpf = "955054822-12";
console.log(typeof cpf);

let formatcpf = cpf.replace(/-/g, "");
formatcpf = parseInt(formatcpf);
console.log(formatcpf);
console.log(typeof formatcpf);

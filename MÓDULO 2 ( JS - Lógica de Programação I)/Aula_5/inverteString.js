/*
    Crie uma função chamada 'inverterString' que recebe uma string como parâmetro e retorna a mesma string, mas invertida.
*/

const inverterString = (x) => {
  const stringInvertida = x.split("").reverse().join("");
  return stringInvertida;
};

console.log(inverterString("lucas"));


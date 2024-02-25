/*
    Escreva uma função para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/

/*
Sem Recursividade:

const fatorial = (num) => {
  let calculo = 1;
  for (let i = num; i > 0; i--) {
    calculo = calculo*i;
  }
  console.log(calculo);
};

fatorial(5);
*/

//Com Recursividade

const fatorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
};

console.log(fatorial(6));

/*
  fatorial(6) é chamada.

  Dentro da função fatorial, n é 6, então ele executa return 6 * fatorial(5).

  Agora, fatorial(5) é chamada. Aqui, a função fatorial é chamada novamente, mas agora com n = 5.
  
  Dentro de fatorial(5), n é 5, então ele executa return 5 * fatorial(4).

  Este processo continua até que n seja 1. Quando n é 1, a função retorna 1.

  A partir desse ponto, as chamadas recursivas começam a ser resolvidas. fatorial(1) retorna 1.

fatorial(1) retorna 1.
fatorial(2) retorna 2 * fatorial(1), que é 2 * 1 = 2.
fatorial(3) retorna 3 * fatorial(2), que é 3 * 2 = 6.
fatorial(4) retorna 4 * fatorial(3), que é 4 * 6 = 24.
fatorial(5) retorna 5 * fatorial(4), que é 5 * 24 = 120.
fatorial(6) retorna 6 * fatorial(5), que é 6 * 120 = 720.

  Portanto, fatorial(6) retorna 720, que é o fatorial de 6. Cada chamada recursiva multiplica o número n pelo resultado da chamada recursiva subsequente, até que n seja 1. A partir desse ponto, as chamadas recursivas começam a retornar e os resultados são multiplicados juntos para calcular o resultado final.
  
*/

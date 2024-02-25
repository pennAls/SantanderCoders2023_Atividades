/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 0, 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

//Sem Recursividade
/*
const seqFibonacci = (num) => {
    if (num === 1) return "0";
    else if (num === 2) return "0, 1";
    
    let arrayFibonacci = [0, 1];
    for (let i = 1; i < num; i++) {
        let newElement = arrayFibonacci[i] + arrayFibonacci[i - 1];
        arrayFibonacci.push(newElement);
    }
    let stringFibonacci = arrayFibonacci.join(", ");
    return stringFibonacci;
}

console.log(seqFibonacci(5))
*/

//Com recursividade

function fibonacci(n) {
    if (n === 1) {
      return 0;
    }
  
    if (n === 2) {
      return 1;
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(5));


/*
fibonacci(5) chama fibonacci(4) e fibonacci(3).
fibonacci(4) chama fibonacci(3) e fibonacci(2).
fibonacci(3) chama fibonacci(2) e fibonacci(1).

fibonacci(2) retorna 1.
fibonacci(1) retorna 0.

fibonacci(3) retorna fibonacci(2) + fibonacci(1), que é 1 + 0 = 1.
fibonacci(4) retorna fibonacci(3) + fibonacci(2), que é 1 + 1 = 2.
fibonacci(5) retorna fibonacci(4) + fibonacci(3), que é 2 + 1 = 3.
*/

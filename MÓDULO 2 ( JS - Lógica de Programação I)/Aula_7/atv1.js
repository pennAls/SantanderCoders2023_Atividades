/*
    Escreva uma função para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/
const num = 6;

const fatorial = () => {
  let calculo = 1;
  for (let i = num; i > 0; i--) {
    calculo = calculo*i;
  }
  console.log(calculo);
};

fatorial();


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











*/
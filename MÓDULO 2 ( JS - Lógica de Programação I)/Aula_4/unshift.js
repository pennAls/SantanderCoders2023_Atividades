//O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
//arr.unshift([element1[, ...[, elementN]]])

const fruits = ["banana", "apple"];
const size = fruits.unshift("orange", "grape");
console.log(fruits); // ["orange", "grape", "banana", "apple"]
console.log(size); // 4
//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
//array.includes(searchElement[, fromIndex]) : Opcional. A posição no array de onde a busca pelo searchElement se iniciará. Por padrão, 0.

const fruits = ["banana", "apple", "orange", "grape", "apple"];
console.log(fruits.includes("orange"));
console.log(fruits.includes("pineapple"));
console.log(fruits.includes("apple", 2));
console.log(fruits.includes("orange", 3));
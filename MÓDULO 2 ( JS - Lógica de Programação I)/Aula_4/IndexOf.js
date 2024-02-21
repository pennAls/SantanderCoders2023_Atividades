//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
//array.indexOf(elementoDePesquisa, [pontoInicial = 0]) - O índice para iniciar a procura. Se o índice for maior ou igual ao tamanho do array, é retornado -1 e signfica que o item não será procurado. Se o pontoInicial é fornecido com um número negativo, é tomado como deslocamento da extremidade do array. Nota: se o pontoInicial fornecido é negativo, a procura no array acontece de frente para trás. Se o pontoInicial fornecido é 0, então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array).

const fruits = ["banana", "apple", "orange", "grape", "apple"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("apple", -1)); // 4
console.log(fruits.indexOf("apple", -4)); // 1



//Teste:
function fn1() {}
function fn2() {}
const arr = [fn1, fn2];
console.log(arr.indexOf(fn2));
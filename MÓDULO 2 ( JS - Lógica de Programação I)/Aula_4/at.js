/* Temos a lista:

1.Utilize o método "at" para acessar o primeiro elemento do array. Lembre-se de que o índice do primeiro elemento é 0.
2.Utilize o método "at" novamente para acessar o terceiro elemento do array.
3.Utilize o método "at" mais uma vez para acessar o último elemento do array. Lembre-se de que o índice do último elemento é o comprimento do array menos 1.
4.Verifique se você conseguiu acessar os elementos corretamente.*/

const produtos = ["sabao", "detergente", "amaciante", "alvejante", "sapolio"];

console.log(produtos.at(0));
console.log(produtos.at(2));
console.log(produtos.at(produtos.length - 1))
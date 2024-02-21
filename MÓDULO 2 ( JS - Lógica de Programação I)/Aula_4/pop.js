/*Temos a lista:
1.Utilize o método "pop" para remover o último elemento do array.
2.Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
3.Utilize o método "pop" novamente para remover outro elemento do array.
4.Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.*/

const numeros = [1, 2, 3, 4];
let exit = numeros.pop();
console.log(exit);
console.log(numeros.length);
let exit1 = numeros.pop();
console.log(exit, exit1);
console.log(numeros.length);

/* Temos essa duas listas:
1.Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.
2.Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.
3.Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.*/

const lista1 = ["banana", "pera", "melancia"];
const lista2 = ["alface", "tomate", "rucula"];
const lista3 = ["limao", "laranja", "acerola"];
const lista4 = ["pimenta", "pimentao", "alho"];

const list1_2 = lista1.concat(lista2)
console.log(list1_2,list1_2.length)

const list1_2_3_4 = lista1.concat(lista2,lista3,lista4)
console.log(list1_2_3_4, list1_2_3_4.length)
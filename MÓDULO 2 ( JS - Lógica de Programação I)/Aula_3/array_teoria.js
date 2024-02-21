// Um array é como uma variável, no entanto, ele é capaz de armazenar vários valores. Também é chamado em português de vetor ou arranjo e no caso do JavaScript não seria errado chamá-lo de lista.

const array = [5, 4, 3.5, 4, "banana", null, undefined, "chuva"];

// Para acessarmos esses valores o array se vale de um sistema de endereçamento, cada valor tem um endereço no array que chamamos de index ou índice. Na maioria das vezes o índice será a posição em que o valor se encontra no array.

// Mas, atenção! Os índices de um array sempre começam do 0.

console.log(array[0]); // -> 5
console.log(array[1]); // -> 4
console.log(array[4]); // -> "banana"

// É importante notar que, para um array de n elementos, o índice deve estar entre 0 e n-1. Usar um índice fora desse intervalo provocará um erro. Podemos usar a mesma sintaxe para fazer uma atribuição e assim alterar o valor de uma determinada posição do array:

// Atualiza o valor do índice 0
array[0] = 3;

// Adiciona um novo item no array. Adiciona, pois, estou referenciando o índice 8 do array que ainda não foi preenchido anteriormente.
array[8] = 90;
console.log(array); //[ 3, 4, 3.5, 4, 'banana', null, undefined, 'chuva', 90 ]

// No JavaScript, arrays são objetos e tem propriedades e métodos. Métodos são funções que geralmente manipulam os valores internos do array. Temos uma grande quantidade dessas funções nos arrays, que permitem adicionar itens, remover itens, procurar por valores etc.

// Array.length(): Essa propriedade chama-se length e nos dá o tamanho do array:
const arr = [1, 2, 3, 99];
console.log(arr.length); // 4
// Vale mencionar que se você quiser saber o último índice de um array basta fazer arr.length -1.

//Array.push(): Inserção de valores ao array
const arrs = [11, 12, 14, 15];
arrs.push(10);
console.log(arrs); //[ 11, 12, 14, 15, 10 ]
// push() retorna o novo tamanho do array se precisar dele basta atribuir a uma variável.
const size = arrs.push(10);
console.log(size);
// Se quisermos adicionar no começo do array, basta usar unshift() no lugar de push()

// Array.unshift():O elemento 9 é inserido no index 0 de arrs.
arrs.unshift(9);
console.log(arrs);
// unshift() como push() também retorna o novo tamanho do array.

// Array.indexOf e Array.lastIndexOf():indexOf retorna a primeira posição (index) onde o valor foi encontrado, enquanto lastIndexOf retorna a última.
const arrl = [10, 10, 500, 300, 2020, "eu", 10, 20, 50, 23, "eu"];
const firstIndex = arrl.indexOf("eu"); // 5
console.log(firstIndex);
const lastIndex = arrl.lastIndexOf("eu"); //10
console.log(lastIndex);
// Se o valor não está presente no array esses métodos retornam -1. Assim, podemos usá-los também para saber se um determinado valor existe no array.
const arri = [10, 10];
console.log(arri.indexOf(10) > -1); // true
console.log(arri.indexOf(11) > -1); // false

// Array.includes():includes() permite um parâmetro opcional se você desejar procurar um valor a partir de uma posição que não seja o início do array.
const arra = [10, 10, "eu"];
console.log(arra.includes("eu")); // true
console.log(arra.includes(11)); // false
// Caso deseje retornar um valor em específico, utilize o .find()

// Array.find(): find() recupera a primeira ocorrência daquele valor buscado. O parâmetro é uma função, no exemplo acima eu uso uma função arrow function para comparação (veremos mais sobre elas nos próximos tópicos).
const arrb = [10, 10, 11];
console.log(arrb.filter((o) => o == 10)); // -> [10, 10]
console.log(arrb.filter((o) => o == 12)); // -> undefined
//Exemplo Prático:
function filtroNumerosPares(elemento) {
  return elemento % 2 === 0;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(filtroNumerosPares);
console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

// Array.pop(): pop() remove o último item do array e o retorna.
const arrc = [1, 2, 3, 4, 5, "hello"];
const lastValue = arrc.pop();
console.log(arrc); // [1, 2, 3, 4, 5]
console.log(lastValue); // "hello"

// Array.shift(): shift() remove o primeiro item do array e o retorna.
const arrd = ["oi", 1, 2, 3, 4, 5];
const firstValue = arrd.shift();
console.log(arrd); // [1, 2, 3, 4, 5]
console.log(firstValue); // "oi"

// Array.splice():pode remover e adicionar itens ao mesmo tempo. Vejamos abaixo alguns exemplos com diferentes parâmetros.

// Array.splice() com 1 parâmetro:
const arre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = arre.splice(3);
console.log(res); // [4, 5, 6, 7, 8, 9, 10]
console.log(arre); // [1, 2, 3]
// Veja, o splice retornou um array contendo os elementos do array original a partir do index 3, ou seja, a partir do valor 4, que está no index 3, e ele também modificou o array original, deixando nele apenas a parte não selecionada, do index 0 até o index 2. Sendo assim, nele ficaram os valores 1, 2 e 3.

// Array.splice() com 2 parâmetros:
const arrg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res1 = arrg.splice(3, 2);
console.log(res1); // [4, 5]
console.log(arrg); // [1, 2, 3, 6, 7, 8, 9, 10]
// Veja, o splice retornou um array contendo os elementos do array original a partir do index 3, ou seja, a partir do valor 4, que está no index 3. No entanto, como passamos o valor 2 como segundo parâmetro ele pegou apenas 2 elementos e manteve todos os demais no array original.
//Em suma, com dois parâmetros, o splice tira uma fatia do array a partir de um index com o tamanho indicado pelo segundo parâmetro.
//O splice aceita também números negativos no primeiro parâmetro, o que faz com que ele comece pelo final do array. Isso é útil para remover e retornar, por exemplo, os dois últimos valores arr.splice(-2,2).

// Array.splice() com N parâmetros:
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res2 = arr1.splice(3, 2, 11, 12, 13);
console.log(res2); // [4, 5]
console.log(arr1); // [1, 2, 3, 11, 12, 13, 6, 7, 8, 9, 10]
//Se após o segundo parâmetro forem passados mais parâmetros ao splice, ele adicionará todos os valores passados no array resultante. No entanto, ele adicionará onde recortamos o array original. No exemplo acima, os valores 11, 12 e 13 foram adicionados onde os valores removidos estavam originalmente (index 3).

//Array.fill(): Podemos usar o método fill() para preencher um array com um valor padrão. No entanto, para que ele funcione, precisamos criar o array de uma forma diferente.
//Dissemos que arrays são objetos, sendo assim, eles possuem construtores. O construtor do array permite que passemos um tamanho inicial ao array. O método fill() precisa desse tamanho para saber quantos itens adicionar.
const arr2 = new Array(10);
arr2.fill(0);
console.log(arr2); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//Array.concat(): Assim como strings, dois arrays podem ser concatenados para formar um único array com os elementos de ambos.
const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];
const arr5 = arr3.concat(arr4);
console.log(arr5); // [1, 2, 3, 4, 5, 6, 7, 8]
// A melhor parte de usar concat é que ele não modifica nenhum dos arrays originais, ele apenas cria um com todos os elementos.

// Array.reverse():Se desejarmos inverter todos os valores de um array basta usar o método .reverse().
const arr6 = [1, 2, 3, 4];
arr6.reverse();
console.log(arr6); // [4, 3, 2, 1]
//Lembre-se que .reverse() altera o array original!



// Ordenação:
//Arrays podem ser ordenados pelo método .sort() no entanto vale ressaltar que o JavaScript só é capaz de ordenação numérica ou alfabética (Number ou String). Ordenações mais complexas requerem que você crie uma função de ordenação.
const arry = [5, 7, 3, 4, 2, 1];
arry.sort();
console.log(arry); // [1, 2, 3, 4, 5, 7]

const arrz = ["carla", "alberto", "bruna"];
arrz.sort();
console.log(arrz); // ["alberto", "bruna", "carla"]
//Obs: Lembre-se que sort() altera o array original!



//Matrizes:
//Arrays são valores como qualquer outro, nada impede que tenhamos arrays dentro de outro array. Isso seria um array bidimensional ou uma matriz. Você pode pensar em uma matriz como sendo uma tabela, para endereçar uma determinada célula precisamos saber o número da linha e da coluna.
const tabela = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(tabela[0]); //[ 1, 2, 3 ]
console.log(tabela[1]); //[ 4, 5, 6 ]
console.log(tabela[2]); //[ 7, 8, 9 ]
// No exemplo, o array maior, que foi alocado na variável, representa as linhas da tabela, enquanto os arrays internos representam as colunas. Sendo assim, tabela[0] representa a primeira linha, ou se preferir, o array [1,2,3].

console.log(tabela[0][0]); //1
//Se tabela[0] é um array, e acessamos um valor no array fazendo arr[index], podemos acessar os valores da célula da mesma forma: tabela[0][index], sim dois pares de colchetes, pois são dois arrays, um dentro do outro.

//Exemplo de automatizar:

for (let i = 0; i < tabela.length; i++) {
  console.log(tabela[i][0]);
  console.log(tabela[i][1]);
  console.log(tabela[i][2]);
}
//ou
for(let i = 0; i < tabela.length; i++){
  for(let j = 0; j < tabela[i].length; j++){
    //uso tabela[i].length para pegar a quantidade de colunas
      console.log(tabela[i][j]);
  }
}
// Você já deve imaginar que para fazermos modificações nos dados de uma matriz basta passar os dois endereços, da linha e da coluna, e fazer a atribuição normalmente.
const tabela1 = [[],[]];
tabela1[0][0] = 10;
tabela1[0][1] = 20;
tabela1[0][2] = 30;
 
tabela1[1][0] = 40;
tabela1[1][1] = 50;
tabela1[1][2] = 60;
 
console.log(tabela1.join('\n'));
 
/*
10,20,30
40,50,60
*/
//Nesse exemplo, usamos o .join() para transformar o array em uma string usando o caractere passado por parâmetro como separador dos valores, no caso \n que significa quebra de linha.

//OBS:
//Talvez mais importante, arrays são objetos e como tal são passados por referência! Isso quer dizer que fazer arrA = arrB não significa fazer uma cópia de arrB em arrA, isso significa que arrA e arrB apontam para a mesma memória, sendo assim, modificar um é modificar o outro.Nas linguagens mais antigas chamamos isso de ponteiros, nas mais modernas de referência.


// Desestruturação:
//O JavaScript tem um operador chamado spread operator sua sintaxe é ... quando aplicado a um array ele representa os elementos desse array sem a estrutura, ou seja, imagine uma caixinha com 4 bolinhas dentro em fila, agora imagine que a caixa sumiu e ficaram apenas as bolinhas flutuando no ar.
//É mais ou menos isso que o spread faz. Ele copia os elementos do array sem copiar o array em si. Você pode pensar, por que raios iríamos querer algo assim??
//A vantagem é que podemos montar novos arrays usando o spread e a sintaxe normal de colchetes. Por exemplo, copiar um array é muito fácil usando spread:
const arrA = [1, 2, 3, 4, 5];
const arrB = [...arrA];
//Simples assim, arrB tem todos os elementos de arrA sem apontar para a sua memória.
const arrC = [1, 2, 3, 4, 5];
const arrD = [...arrC, 6, 7, 8, 9, 10];
console.log(arrD)
//Fazendo, montamos um array que além de todos os itens de arrA ainda tem os itens 6, 7, 8, 9 e 10.

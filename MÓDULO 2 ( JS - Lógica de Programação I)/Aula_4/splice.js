let meuArray = [1, 2, 3, 4, 5];
// meuArray.splice(2, 0, 6, 7); // Inserir os elementos 6 e 7 a partir do índice 2
// console.log(meuArray); //[1, 2, 6, 7, 3, 4, 5]

// meuArray.splice(2, 2); // Remover 2 elementos a partir do índice 2
// console.log(meuArray);//[ 1, 2, 5 ]

// meuArray.splice(2, 2, 6, 7, 250); // Remover 2 elementos a partir do índice 2 e inserir os elementos 6 , 7 e 250
// console.log(meuArray);//[1,2,6,7,250,5]

// meuArray.splice(1);
// console.log(meuArray);//[1]

// meuArray.splice(0, 0, 5, 8, 9, 45, 36);
// console.log(meuArray);//[5, 8, 9, 45, 36, 1, 2, 3,  4,  5 ]

meuArray.splice(0, meuArray.length, 3, 5, 7);
console.log(meuArray);//[ 3, 5, 7 ]

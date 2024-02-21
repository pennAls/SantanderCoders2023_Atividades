/*
1. Temos a lista de alunos com suas notas:
const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];
1. Utilize o método "map" para criar um novo objeto com o nome e a média de cada aluno.
2. A média deve ser calculada utilizando o método "reduce" para somar as notas e dividi-las pelo número  de notas.

A função reducer recebe quatro parâmetros:

.Acumulador (acc)
.Valor Atual (cur)
.Index Atual (idx)
.Array original (src)
.O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
*/

const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const media = alunos.map(({nome,notas}) => `${nome} - media = ${notas.reduce((acc,nota,)=> acc + nota,0)/notas.length}`)

console.log(media)


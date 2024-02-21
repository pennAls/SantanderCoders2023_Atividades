/*Temos a lista de alunos:

1.Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.
2.Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.
3.Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".
4.Verifique se você conseguiu utilizar o método "filter" corretamente.*/

const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const MaiordeIdade = alunos.filter(({ idade }) => idade >= 18);
console.log(MaiordeIdade);

const Menorque20 = alunos.filter(({ idade }) => idade < 20);
console.log(Menorque20);

const começaj = alunos.filter(({ nome }) => nome.startsWith("J"));
console.log(começaj);

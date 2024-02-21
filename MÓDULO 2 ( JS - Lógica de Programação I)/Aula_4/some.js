/*Temos a lista de empregados com seus respectivos nomes e salários:

1.Utilize o método "some" para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
2.Utilize o método "some" novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
3.Verifique se você conseguiu utilizar o método "some" corretamenteS.
*/
const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

console.log(empregados.some(({ salario }) => salario >= 1500));
console.log(empregados.some(({ salario }) => salario <= 1000));

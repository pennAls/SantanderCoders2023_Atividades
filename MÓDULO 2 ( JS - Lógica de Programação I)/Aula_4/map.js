/*Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:
1.Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula peso / altura².
2.Verifique se você conseguiu utilizar o método "map" corretamente.
*/
const pessoas = [
    { nome: "João", altura: 1.75, peso: 80 },
    { nome: "Maria", altura: 1.68, peso: 60 },
    { nome: "Pedro", altura: 1.8, peso: 70 },
    { nome: "Ana", altura: 1.65, peso: 55 },
    { nome: "Carlos", altura: 1.9, peso: 100 },
  ];

const object = pessoas.map(({nome, altura, peso }) => `${nome} - IMC: ${(peso / (altura * altura)).toFixed(2)}`);
console.log(object)

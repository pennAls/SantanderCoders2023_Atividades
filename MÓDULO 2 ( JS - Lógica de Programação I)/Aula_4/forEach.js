/*Temos uma lista de sabores de pizza e seus valores:
1. Utilize o método "forEach" para percorrer a lista de pizzas e imprimir no console o nome do sabor da pizza e seu valor.
2. Verifique se você conseguiu utilizar o método "forEach" corretamente.

*/
const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

pizzas.forEach(({ sabor, valor }) => {
  console.log(`A pizza de ${sabor} custa R$${valor}`);
});

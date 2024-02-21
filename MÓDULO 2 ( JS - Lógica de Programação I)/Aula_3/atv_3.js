/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

const sorteio = [];

while (sorteio.length < 6) {
  let num = Math.floor(Math.random() * 60) + 1;
  if (!sorteio.includes(num)) {
    sorteio.push(num);
  }
}

console.log(` Os números sorteados foram: ${sorteio}`);

// Crie um jogo de adivinhação em que o programa gera um número aleatório entre 1 e 100 e o jogador tenta adivinhar o número. O jogo deve dar dicas ao jogador, informando se o número é maior ou menor do que a tentativa atual. O jogador deve continuar a adivinhar até acertar o número. No final, deverá informar a quantidade de tentativas.

const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let attempt = prompt("Tente Acertar o número: ");

let attempts = 0;

while (parseInt(numeroAleatorio) !== parseInt(attempt)) {
  attempts++;
  console.log("Você Errou!, Tente novamente");
  if (attempt < numeroAleatorio) {
    console.log("Sua tentativa é menor que o valor em questão");
  } else if (attempt > numeroAleatorio) {
    console.log("Sua tentativa é maior que o valor em questão");
  }

  attempt = prompt("Tente Acertar o número: ");
}
console.log("Parabéns! Você acertou o número em " + attempts + " tentativas.");
console.log("O número aleatório era: " + numeroAleatorio);

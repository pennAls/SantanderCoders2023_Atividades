// const prompt = require("prompt-sync")({ sigint: true });


// class JogoAdivinhacao {
//   static numeroAleatorio: number = Math.floor(Math.random() * 10) + 1;
//   static attempts: number = 0;

//   constructor() {}

//   static main() {
//     while (true) {
//       this.attempts++;
//       console.log("Tentativa: " + this.attempts);
//       const tried: any = prompt("Tente Acertar o número: ");
//       if (tried === this.numeroAleatorio) {
//         console.log(
//           "Parabéns! Você acertou o número em " + this.attempts + " tentativas."
//         );
//         console.log("O número aleatório era: " + this.numeroAleatorio);
//         break;
//       } else if (tried < this.numeroAleatorio) {
//         console.log("Sua tentativa é menor que o valor em questão");
//       } else {
//         console.log("Sua tentativa é maior que o valor em questão");
//       }
//     }
//   }
// }

// JogoAdivinhacao.main();

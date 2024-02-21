/*
    Crie uma função chamada contarPalavrasRepetidas que recebe uma string como parâmetro e retorna um objeto contendo a contagem de cada palavra na string.
*/

function contarPalavrasRepetidas(texto) {
    texto = texto.toLowerCase().replace(/[^\w\s]/g, ""); // Remover todos os caracteres que não são letras, números ou espaços de uma string.
  
    let palavras = texto.split(/\s+/); // Encontrar sequências de um ou mais caracteres de espaço em branco em uma string.
  
    let contagem = {};
    for(let palavra of palavras) {
      if (contagem[palavra]) {
        contagem[palavra] += 1;
      } else {
        contagem[palavra] = 1;
      }
    }
  
    return contagem;
  }
  
  let texto =
    "Este é um exemplo de texto. Este texto contém palavras repetidas, como exemplo e texto.";
  let resultado = contarPalavrasRepetidas(texto);
  console.log(resultado);
  
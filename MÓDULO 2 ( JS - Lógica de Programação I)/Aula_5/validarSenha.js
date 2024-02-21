/*
    Crie uma função "validarSenha" que recebe uma senha como parâmetro e retorna true se a senha atender aos seguintes critérios, sem utilizar regex:

    Pelo menos 8 caracteres de comprimento.
    Deve conter pelo menos uma letra maiúscula.
    Deve conter pelo menos uma letra minúscula.
    Deve conter pelo menos um número.
*/

const validarSenha = (senha) => {
    let possuiMaiuscula = false;
    let possuiMinuscula = false;
    let possuiNumero = false;
  
    for (let i = 0; i < senha.length; i++) {
      if (senha[i] >= "A" && senha[i] <= "Z") {
        possuiMaiuscula = true;
      } else if (senha[i] >= "a" && senha[i] <= "z") {
        possuiMinuscula = true;
      } else if (senha[i] >= "0" && senha[i] <= "9") {
        possuiNumero = true;
      }
    }
  
    return possuiMaiuscula && possuiMinuscula && possuiNumero && senha.length >= 8;
  };
  
  console.log(validarSenha("wwwwwwwwLwwwwwww1")); 
  

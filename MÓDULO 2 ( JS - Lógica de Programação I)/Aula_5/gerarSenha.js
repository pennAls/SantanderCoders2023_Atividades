/*
    Crie uma função "gerarSenhaAleatoria" que recebe um comprimento (tamanho) como parâmetro e gera uma senha aleatória contendo letras maiúsculas, letras minúsculas e números.
*/

const gerarSenhaAleatoria = (tamanho) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = ""
    for(let i = 0; i < tamanho; i++){
        tamanhosenha = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres.charAt(tamanhosenha)

    }
    return senha
}

console.log(gerarSenhaAleatoria(12));
    

/*
    A função charAt() é usada para obter o caractere em uma posição específica em uma string. Ela aceita um índice como argumento e retorna o caractere na posição correspondente. Por exemplo:
    
    const str = "abc";
    console.log(str.charAt(0)); // Saída: "a"
    console.log(str.charAt(1)); // Saída: "b"
    console.log(str.charAt(2)); // Saída: "c"
*/
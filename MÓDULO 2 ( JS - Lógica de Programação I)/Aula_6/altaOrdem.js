//_Função sendo passada como parâmetro de outra função_
function exibirResultado(result) {
  console.log(result);
}

function exibirResultadoFormatado(result) {
  console.log(`O resultado é: ${result}`);
}

function multiplicar(a, b, fn) {
  const result = a * b;
  fn(result);
}

multiplicar(5, 3, exibirResultado);
multiplicar(5, 3, exibirResultadoFormatado);


//_Função como retorno de outra função_

const statusLogado = (nome) => {
    return `${nome} logou com sucesso no sistema!`;
  };
  
  const usuarioLogin = (nome) => {
    // Efetua o login aqui...
    return statusLogado(nome);
  };
  
  const login = usuarioLogin("Lucas");
  console.log(login);
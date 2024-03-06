const prompt = require("prompt-sync")({ sigint: true });

class Pessoa {
  Nome;
  Idade;
  CPF;
  constructor(nome, idade, cpf) {
    if (typeof nome !== "string") {
      throw new Error("O titular deve ser uma string");
    }

    for (const letra of nome) {
      if (!isNaN(letra) && letra !== " ") {
        throw new Error("O nome não pode conter números");
      }
    }
    this.Nome = nome;
    if (!isNaN(idade) && idade >= 18 && idade < 120) {
      this.Idade = idade;
    } else {
      throw new Error("A idade é inválida");
    }
    if (typeof cpf === "string") {
      this.CPF = cpf;
    } else {
      throw new Error("CPF inválido");
    }
  }
  exibirDados() {
    console.log(
      `O cliente ${this.Nome} tem ${this.Idade} anos e CPF: ${this.CPF}`
    );
  }
}

const person = new Pessoa("Ivan", 18, "111111111111");
person.exibirDados();

class Conta {
  #Nometitular;
  #Saldo = 0;
  #Conta_ativa = true;

  constructor(titular) {
    if (typeof titular !== "string") {
      throw new Error("O titular deve ser uma string");
    }
    if (titular.length < 4) {
      throw new Error("O nome deve ter mais de 4 caracteres");
    }
    for (const letra of titular) {
      if (!isNaN(letra) && letra !== " ") {
        throw new Error("O nome não pode conter números");
      }
    }
    this.#Nometitular = titular;
  }

  ativarConta() {
    if (this.Conta_ativa === false) {
      console.log("Conta ativada com sucesso");
      return (this.Conta_ativa = true);
    } else {
      throw new Error("Sua conta já está ativa");
    }
  }

  inativarConta() {
    if (this.#Saldo === 0 && this.#Saldo === true) {
      console.log("Conta Inativada com Sucesso");
      return this.#Conta_ativa === false;
    } else {
      throw new Error(
        "Não é Possível Inativar uma conta com saldo ou que já esteja inativa"
      );
    }
  }

  depositar(valor) {
    valor = Number(prompt("Digite o valor a ser depositado, R$:".trim()));
    if (this.#Conta_ativa === true && !isNaN(valor)) {
      this.#Saldo += valor;
      return `Seu novo saldo é de: ${this.#Saldo.toFixed(2)} R$`;
    } else {
      throw new Error("O valor inserido é inválido ou sua conta está inativa");
    }
  }

  sacar(valor) {
    valor = Number(prompt("Digite o valor a ser sacado, R$: ".trim()));
    if (!isNaN(valor) && valor <= this.#Saldo) {
      this.#Saldo -= valor;
      return `Seu novo saldo é de: ${this.#Saldo.toFixed(2)} R$`;
    } else {
      throw new Error("O valor inserido é inválido ou não há saldo suficiente");
    }
  }
  obterSaldo() {
    return `Seu saldo atual é de R$ ${this.#Saldo.toFixed(2)}`;
  }

  get titular() {
    return this.#Nometitular;
  }

  get saldo() {
    return this.#Saldo;
  }

  get contaAtiva() {
    return this.#Conta_ativa;
  }
}

const clientes = [];

function addCliente(titular) {
  const clienteExistente = clientes.find(
    (cliente) => cliente.Titular === titular
  );
  if (clienteExistente) {
    throw new Error("Usuário já existente no banco de dados");
  } else {
    const novaConta = new Conta(titular);
    const novoCliente = {
      Titular: novaConta.titular,
      Saldo: novaConta.saldo,
      Conta_ativa: novaConta.contaAtiva,
    };
    clientes.push(novoCliente);
    return novaConta;
  }
}

addCliente("Lucas");
addCliente("Pena");
console.log(clientes);

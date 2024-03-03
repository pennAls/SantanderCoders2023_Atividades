const prompt = require("prompt-sync")({ sigint: true });

class Conta {
  #nomeTitular;
  #saldo = 1;
  #contaAtiva = true;

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
    this.#nomeTitular = titular;
  }

  ativarConta() {
    if (this.#contaAtiva === false) {
      console.log("Conta ativada com sucesso");
      return (this.#contaAtiva = true);
    } else {
      throw new Error("Sua conta já está ativa");
    }
  }

  inativarConta() {
    if (this.#saldo === 0 && this.#contaAtiva === true) {
      console.log("Conta Inativada com Sucesso");
      return this.#contaAtiva === false;
    } else {
      throw new Error(
        "Não é Possível Inativar uma conta com saldo ou que já esteja inativa"
      );
    }
  }

  depositar(valor) {
    valor = Number(prompt("Digite o valor a ser depositado, R$:".trim()));
    if (this.#contaAtiva === true && !isNaN(valor)) {
      this.#saldo += valor;
      return `Seu novo saldo é de: ${this.#saldo.toFixed(2)} R$`;
    } else {
      throw new Error("O valor inserido é inválido ou sua conta está inativa");
    }
  }

  sacar(valor) {
    valor = Number(prompt("Digite o valor a ser sacado, R$: ".trim()));
    if (!isNaN(valor) && valor <= this.#saldo) {
      this.#saldo -= valor;
      return `Seu novo saldo é de: ${this.#saldo.toFixed(2)} R$`;
    } else {
      throw new Error("O valor inserido é inválido ou não há saldo suficiente");
    }
  }
  obterSaldo() {
    return `Seu saldo atual é de R$ ${this.#saldo.toFixed(2)}`;
  }

  get titular() {
    return this.#nomeTitular;
  }

  get saldo() {
    return this.#saldo;
  }

  get contaAtiva() {
    return this.#contaAtiva;
  }
}

const clientes = [];

function addCliente(titular) {
  if (clientes.includes(titular)) {
    throw new Error("Usuário já existente no banco de dados");
  } else {
    const user = new Conta(titular);
    clientes.push(user);
    console.log(user);
  }
}
addCliente("Lucas Pena");
addCliente("Ben Ten");
addCliente("Ben Nine");

console.log(clientes);




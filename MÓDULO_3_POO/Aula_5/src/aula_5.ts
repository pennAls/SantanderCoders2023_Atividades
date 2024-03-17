class Person {
  _Nome: string;
  _Idade: number;
  _CPF: string;
  constructor(idUser: Iperson) {
    for (const letra of idUser.nome) {
      if (letra === " " && !isNaN(parseInt(letra))) {
        throw new Error("O nome não pode conter números");
      }
    }
    this._Nome = idUser.nome;

    if (!isNaN(idUser.idade) && idUser.idade >= 18 && idUser.idade < 120) {
      this._Idade = idUser.idade;
    } else {
      throw new Error("A idade é inválida");
    }
    for (const char of idUser.cpf) {
      if (isNaN(parseInt(char))) {
        throw new Error("O cpf não pode conter letras");
      }
    }
    this._CPF = idUser.cpf;
  }
  exibirDados() {
    console.log(
      `O cliente ${this._Nome} tem ${this._Idade} anos e CPF: ${this._CPF}`
    );
  }
}

interface Iperson {
  nome: string;
  idade: number;
  cpf: string;
}

const user_: Iperson = {
  nome: "Pena",
  idade: 18,
  cpf: "42424242422",
};

const idUser = new Person(user_);
console.log(idUser);

class Account {
  private _nomeTitular: string;
  private _Saldo: number = 0;
  private _contaAtiva: boolean = true;

  constructor(mainUser: Iaccount) {
    for (const letter of mainUser.nomeTitular) {
      if (!isNaN(parseInt(letter))) {
        throw new Error("O nome não pode conter números");
      }
    }
    this._nomeTitular = mainUser.nomeTitular;
    this._Saldo = mainUser.saldo;
    this._contaAtiva = mainUser.contaAtiva;
  }
  ativarConta(): boolean {
    if (this._contaAtiva === false) {
      console.log("Conta ativada com sucesso");
      return (this._contaAtiva = true);
    } else {
      throw new Error("Sua conta já está ativa");
    }
  }

  inativarConta(): boolean {
    if (this._Saldo === 0 && this._contaAtiva === true) {
      console.log("Conta Inativada com Sucesso");
      return (this._contaAtiva = false);
    } else {
      throw new Error(
        "Não é Possível Inativar uma conta com saldo ou que já esteja inativa"
      );
    }
  }

  depositar(valor: number): string {
    // valor = Number(prompt("Digite o valor a ser depositado, R$: ".trim()));
    if (this._contaAtiva === true) {
      this._Saldo += valor;
      return `Seu novo saldo é de: R$ ${this._Saldo.toFixed(2)} `;
    } else {
      throw new Error("O valor inserido é inválido ou sua conta está inativa");
    }
  }

  sacar(valor: number) {
    // valor = Number(prompt("Digite o valor a ser sacado, R$: ".trim()));
    if (!isNaN(valor) && valor <= this._Saldo) {
      this._Saldo -= valor;
      return `Seu novo saldo é de: R$ ${this._Saldo.toFixed(2)}`;
    } else {
      throw new Error("O valor inserido é inválido ou não há saldo suficiente");
    }
  }
  obterSaldo(): string {
    return `Seu saldo atual é de R$ ${this._Saldo.toFixed(2)}`;
  }
  get titular(): string {
    return this._nomeTitular;
  }
  get saldo(): number {
    return this._Saldo;
  }
  get activate(): boolean {
    return this._contaAtiva;
  }
}

const clientes: Iaccount[] = [];

function addCliente(dados: Iaccount) {
  const clienteExistente = clientes.find(
    (cliente) => cliente.nomeTitular === dados.nomeTitular
  );
  if (clienteExistente) {
    throw new Error("Usuário já existente no banco de dados");
  } else {
    const novaConta = new Account(dados);
    const novoCliente: Iaccount = {
      nomeTitular: novaConta.titular,
      saldo: novaConta.saldo,
      contaAtiva: novaConta.activate,
    };
    clientes.push(novoCliente);
    return novoCliente;
  }
}

interface Iaccount {
  nomeTitular: string;
  saldo: number;
  contaAtiva: boolean;
}

const user1: Iaccount = {
  nomeTitular: "Lucas",
  saldo: 500,
  contaAtiva: true,
};

const user2: Iaccount = {
  nomeTitular: "Lucas",
  saldo: 500,
  contaAtiva: true,
};

addCliente(user1);
console.log(clientes);

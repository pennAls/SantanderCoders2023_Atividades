/*
Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível (caso esteja zerado, o mesmo deverá estar setado como indisponível no atributo específico);
*/

interface IProduto {
  nome: string;
  valor: number;
  estoque: number;
}

class Produto {
  private _Nome: string;
  private _Valor: number;
  private _Estoque: number;
  private _produtoDisponivel: boolean;

  constructor(dados: IProduto) {
    this._Nome = dados.nome;
    this._Valor = dados.valor;
    this._Estoque = dados.estoque;
    this._produtoDisponivel = this._Estoque > 0 ? true : false;
  }

  get Nome(): string {
    return this._Nome;
  }
  get Valor(): number {
    return this._Valor;
  }
  get Estoque(): number {
    return this._Estoque;
  }

  set Estoque (novoValor: number) {
    this._Estoque = this.Estoque + novoValor;
  }

  calcularValorEstoque(): string {
    if (!this._produtoDisponivel) {
      return `Produto indisponível`;
    }
    const value = this._Estoque * this._Valor;
    return `Produto: ${this._Nome} - Valor de Estoque: R$ ${value}`;
  }

  verificarDisponbilidade(): string {
    if (!this._produtoDisponivel) {
      return "Produto Indisponível";
    } else {
      return `Produto: ${this._Nome} - Disponível`;
    }
  }
}

const product1: IProduto = {
  nome: "Leite",
  valor: 2.99,
  estoque: 100,
};

const product2: IProduto = {
  nome: "Ovo",
  valor: 12.00,
  estoque: 0,
};

const leite = new Produto(product1);
console.log(leite.calcularValorEstoque());
console.log(leite.verificarDisponbilidade());

const ovo = new Produto(product2);
// ovo.Estoque = 14;
console.log(ovo.calcularValorEstoque());
console.log(ovo.verificarDisponbilidade());

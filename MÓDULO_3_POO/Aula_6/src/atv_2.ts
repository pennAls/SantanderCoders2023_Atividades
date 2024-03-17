/*
Implemente uma classe chamada “Carro” com atributos para armazenar a marca, o modelo, se o carro está ligado ou não e a velocidade atual do carro. Adicione métodos para ligar, desligar, acelerar, frear e exibir a velocidade atual. REGRA BÁSICA DE VALIDAÇÃO: o carro só poderá acelerar ou frear, caso esteja ligado
*/
interface ICarro {
  marca: string;
  modelo: string;
}

class Carro {
  private _Marca: string;
  private _Modelo: string;
  private _Estado: boolean;
  private _Velocidade: number;

  constructor(dados: ICarro) {
    this._Marca = dados.marca;
    this._Modelo = dados.modelo;
    this._Velocidade = 0;
    this._Estado = false;
  }

  get Marca(): string {
    return this._Marca;
  }
  get Modelo(): string {
    return this._Modelo;
  }
  get Velocidade(): number {
    return this._Velocidade;
  }
  get Estado(): boolean {
    return this._Estado;
  }

  set Velocidade(novaVelocidade: number) {
    this._Velocidade = novaVelocidade;
  }

  LigaDesliga(): string {
    this._Estado = !this.Estado;
    if (this._Estado === true) {
      return `O carro foi Ligado`;
    } else {
      return `O carro foi Desligado`;
    }
  }

  acelerar(faster: number): number | string {
    if (this.Estado) {
      this.Velocidade = this.Velocidade + faster;
      return this._Velocidade;
    } else {
      return `O carro está Desligado`;
    }
  }

  frear(slower: number): number | string {
    if (this.Estado) {
      this.Velocidade = this.Velocidade - slower;
      return this._Velocidade;
    } else {
      return `O carro está Desligado`;
    }
  }

  exibirVelocidade(): string {
    this._Estado = this._Velocidade === 0 ? false : true;
    if (this.Estado) {
      return `Sua velocidade atual é ${this._Velocidade}Km/h`;
    } else {
      return `O carro está Desligado`;
    }
  }
}
const Carro1: ICarro = {
  marca: "Ferrari",
  modelo: "Slim",
};

const Car = new Carro(Carro1);
console.log(Car.LigaDesliga());
console.log(Car.LigaDesliga());
console.log(Car.LigaDesliga());
Car.Velocidade = 200;
console.log(Car.exibirVelocidade());
Car.acelerar(100);
console.log(Car.exibirVelocidade());
Car.frear(300);
console.log(Car.exibirVelocidade());


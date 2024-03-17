class Quadrado {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura))
      throw "base e altura precisam ser números";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }

  duplicarParaDireita() {
    this.base = this.base * 2;
  }
  duplicarParaBaixo() {
    this.altura = this.altura * 2;
  }
  imprimir() {
    return `<div style='position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; width:${
      this.base
    }px; height:${this.altura}px; background-color:${
      this.cor || "black"
    }'></div>`;
  }
}
const quadrado = new Quadrado(100, 100);
quadrado.duplicarParaBaixo();
quadrado.duplicarParaDireita();

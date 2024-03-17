class Calculadora {
  constructor(num1, num2, opera) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Números Inválidos.");
    }

    this.num1 = num1;
    this.num2 = num2;

    if (!["+", "-", "*", "/"].includes(opera)) {
      throw new Error("Operação Inválida");
    }

    this.opera = opera;
  }

  calcular() {
    switch (this.opera) {
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "*":
        return this.num1 * this.num2;
      case "/":
        if (this.num2 === 0) {
          throw new Error("Não é possível dividir por zero.");
        }
        return this.num1 / this.num2;
      default:
        throw new Error("Operação Inválida");
    }
  }
}

let calc = new Calculadora(10, 1, "/");
console.log(calc.calcular());


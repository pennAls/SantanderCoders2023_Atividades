class People {
    nome;
    cpf;
    static nomesRegistrados = [];
  
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
  
    verifica() {
      if (People.nomesRegistrados.includes(this.nome)) {
        throw new Error("Nome Já Registrado");
      } else {
        People.nomesRegistrados.push(this.nome); // Adiciona o nome à lista de nomes registrados
        console.log("Nome registrado com sucesso");
      }
    }
  }
  
  let imprimir = new People("Lucas", 86304095503);
  let imprimir1 = new People("Lucas", 86304095503);
  imprimir.verifica();
  imprimir1.verifica();


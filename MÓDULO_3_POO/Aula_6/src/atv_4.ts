/*
    Estamos criando um sistema para uma biblioteca para gerenciar os livros aos quais temos registrados na mesma. Crie uma classe Livro com os atributos título, autor e ano_publicacao. Crie uma classe Biblioteca que armazena uma lista de livros. Agora, você deverá criar os métodos para adicionar livros à biblioteca, remover livros da biblioteca e, por fim, pesquisar livros por título ou autor;
 */

interface ILivro {
  title: string;
  autor: string;
  ano: number;
}

class Livro {
  private _Title: string;
  private _Autor: string;
  private _Ano: number;

  constructor(dados: ILivro) {
    if (!this.validarLivro(dados.title)) {
      throw new TypeError(`Nome inválido: "${dados.title}"`);
    }
    if (!this.validarNome(dados.autor)) {
      throw new TypeError(`Nome inválido: "${dados.autor}"`);
    }
    this._Title = dados.title;
    this._Autor = dados.autor;
    this._Ano = dados.ano;
  }

  get Title() {
    return this._Title;
  }

  set Title(newTitle) {
    if (!this.validarLivro) {
      throw new TypeError(`Nome inválido: "${newTitle}"`);
    }
    this._Title = newTitle;
  }

  private validarLivro(title: string): boolean {
    if (title.length < 4) {
      console.error("O nome do livro tem que ter mais de 4 letras");
      return false;
    }
    return true;
  }

  private validarNome(autor: string): boolean {
    for (const letra of autor) {
      if (!isNaN(parseInt(letra))) {
        console.error("Não é permida a inserção de Números no nome do livro");
        return false;
      }
    }
    return true;
  }
}

class Biblioteca {
  static listaDeLivros: ILivro[] = [];

  static buscarNome(livroProcurado: ILivro): boolean {
    const nome_existente = this.listaDeLivros.find(
      (livro) =>
        livro.title.toLowerCase() === livroProcurado.title.toLowerCase()
    );
    if (!nome_existente) {
      return true;
    }
    return false;
  }

  adicionarLivro(livro: ILivro) {
    if (Biblioteca.buscarNome(livro)) {
      Biblioteca.listaDeLivros.push(livro);
    } else {
      console.error("Já existe um livro com esse Nome na Biblioteca");
    }
  }

  removerLivro(title: string) {
    const indexLivro = Biblioteca.listaDeLivros.findIndex(
      (livro) => livro.title.toLowerCase() === title.toLowerCase()
    );
    if (indexLivro === -1) {
      console.log("livro não encontrado");
      return;
    }
    Biblioteca.listaDeLivros.splice(indexLivro, 1);
    console.log("Livro removido com sucesso!");
  }

  buscarLivro(nome: string) {
    const tituloEncontrado = Biblioteca.listaDeLivros.find(
      (livro) => nome.toLowerCase() === livro.title.toLowerCase()
    );

    const autorEncontrado = Biblioteca.listaDeLivros.find(
      (livro) => nome.toLowerCase() === livro.autor.toLowerCase()
    );

    if (tituloEncontrado || autorEncontrado) {
      if (tituloEncontrado) {
        console.log(`===== Informações do Livro =====
Título: ${tituloEncontrado.title}
Autor: ${tituloEncontrado.autor}
Ano: ${tituloEncontrado.ano}
=====================================`);
      }
      if (autorEncontrado) {
        console.log(`===== Informações do Livro =====
Título: ${autorEncontrado.title}
Autor: ${autorEncontrado.autor}
Ano: ${autorEncontrado.ano}
=====================================`);
      }
    } else {
      console.log("Livro não encontrado");
    }
  }
}
const livro1: ILivro = {
  title: "Branca de Neve",
  autor: "Fulano de Neve",
  ano: 1678,
};

const livro2: ILivro = {
  title: "Coração de Aço",
  autor: "Rocky Balboa",
  ano: 1978,
};

const book1 = new Livro(livro1);
const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(livro1);
console.table(Biblioteca.listaDeLivros);
biblioteca.adicionarLivro(livro2);
console.table(Biblioteca.listaDeLivros);
biblioteca.removerLivro("BRANCA DE NEVE");
console.table(Biblioteca.listaDeLivros);
biblioteca.buscarLivro("Rocky Balboa");

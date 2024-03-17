// COMO TRABALHAR COM OS TIPOS PRIMITIVOS NO TYPESCRIPT?:
//const nome: = "Lucas"; Não pode Declarar sem tipar
const nome: string = "Lucas";
const idade: number = 22;
const programador: boolean = true;
const temchorro: any = true; //Qualquer tipo, perde a propriedade do TS
const temgato: boolean | number = true; // Posso Atribuir ou boolean ou number
let temPets: null | undefined = null; // Posso atribuir null ou undefined

// COMO TRABALHAR COM ARRAYS?:
const numbers: number[] = []; //Um array que apenas recebe números
//numbers.push("salve") Não funciona, pois não aceita nada que não seja number
numbers.push(1, 2, 3, 4);
console.log(numbers);
const string: string[] = [];
string.push("Olá", "Mundo", "1");
console.log(string);

const nomeseIdades: string | number[] = []; //Aqui, string | number[] é uma união de tipos, o que significa que o valor atribuído a nomeseIdades pode ser uma string ou um array de números.
const nomesEIdades: Array<string | number> = []; //Isso declara o tipo de elementos que o array nomesEIdades pode conter.
nomesEIdades.push(1, "teste");
console.log(nomesEIdades);

// COMO TRABALHAR CRIAR OS TIPOS PERSONALIZADOS INTERFACE E TYPE?:

//Uma interface define a estrutura de um objeto, mas não fornece a implementação real desses métodos ou propriedades. Em vez disso, ela define apenas o que esses métodos e propriedades devem se parecer.

interface IPessoa {
  nome?: string; //A interrogação me permite deixar o campo "nome" sem atribuição quando atribuindo o tipo Ipessoa a alguma variável.
  idade: number;
}

const pessoas: IPessoa = { nome: "Lucas", idade: 12 };
console.log(pessoas);

const pessoa: IPessoa = {
  idade: 23,
  nome: "teste",
  // cpf: "xxxxxxxxxx";Não aceita porque tem que seguir o modelo da interface
};
console.log(pessoa);

const people: IPessoa[] = [];
// people.push("teste") //Não aceita
people.push({ idade: 1, nome: "fulano" });
console.log(people);

// Um type é uma maneira de definir um tipo personalizado para um conjunto de valores. Ele pode representar qualquer tipo de dado, incluindo primitivos, objetos, funções, arrays

type Conta = {
  pessoa: IPessoa;
};

const conta: Conta = {
  pessoa,
};
console.log(conta); //{ pessoa: { idade: 23, nome: 'teste' } }

type Token = string; //Isso define um novo tipo chamado Token, que é simplesmente uma abreviação para o tipo string. Ou seja, sempre que você usar Token, é o mesmo que usar string.

const token: Token = "asdaskldaksl"; //Token só pode conter valores do tipo string.

type VerificaToken = (token: Token) => boolean; //VerificaToken é uma função que recebe uma string (ou um Token) e retorna um boolean.

const validarToken: VerificaToken = () => true; //Cria uma constante do tipo VerificaToken.Ela deve receber uma string (um Token) como argumento e retorna true.
console.log(validarToken("Salve"));

// Formas de Interseção:
//TYPE:
type Pessoa = {
  name: string;
};

type Usuario = Pessoa & { endereco: string }; //A interseção & combina dois tipos em um novo tipo que tem todas as propriedades de ambos os tipos. Portanto, um Usuario tem as propriedades name (herdada de Pessoa) e endereco.

const usuario: Usuario = {
  name: "asdasd",
  endereco: "",
};

//INTERFACE:
interface Pessoa1 {
  nome: string;
}

interface Usuario1 extends Pessoa1 {
  idade: number;
}

const pessoa1: Pessoa1 = {
  nome: "teste",
  // idade: 1; Usuario1 extends Pessoa, não o contrário, logo não é permitido
};

const usuario1: Usuario1 = {
  nome: "teste",
  idade: 12,
};

//TYPE VS INTERFACE: enquanto as interfaces são mais adequadas para definir a forma de objetos, os types são mais versáteis e podem ser usados para definir uma variedade mais ampla de tipos de dados.

// CLASSES + TYPESCRIPT:

interface IBasePessoaUsuario {
  Name: string;
  Email: string;
  Apresentar: () => string;
}

class user implements IBasePessoaUsuario {
  //Implements é usada para permitir que uma classe implemente uma ou mais interfaces. Isso significa que a classe deve fornecer implementações para todos os métodos e propriedades definidos na interface ou interfaces que ela está implementando.

  Name: string;
  Email: string;
  Idade: number;

  constructor(name: string, email: string) {
    this.Name = name;
    this.Email = email;
    this.Idade = 0;
  }

  Apresentar() {
    return "";
  }

  FazerAniversario() {}
}

// Mesmo que a classe user tenha uma propriedade Idade que não está presente na interface IBasePessoaUsuario, não tem problema. No entanto, é importante notar que a classe user ainda deve fornecer implementações para todos os métodos e propriedades exigidos pela interface IBasePessoaUsuario, que neste caso são Name, Email e Apresentar.

interface bidu {
  Individuo: string;
  Peso: number;
  foiPraAcad: boolean;
  msg: () => string;
}

class bitous implements bidu {
  Individuo: string;
  Peso: number;
  foiPraAcad: boolean;
  constructor(Individuo: string, Peso: number, acad: boolean) {
    this.Individuo = Individuo;
    this.Peso = Peso;
    this.foiPraAcad = acad;
  }
  msg() {
    const foiPraAcadStr = this.foiPraAcad ? "" : "não";
    return `Nosso querido ${this.Individuo}, pesa ${this.Peso}KG e ${foiPraAcadStr} foi para Academia`;
  }
}

const Bidu = new bitous("Bidu", 100, false);
console.log(Bidu.msg());

class EuPessoa {
    public Nome: string
    private IsAlive: boolean;
    static NumeroEuPessoas: number = 10;
    static Idade: number = 33;

    constructor(nome: string) {
        this.Nome = nome;
        this.IsAlive = true;
    }

    apresentar(): string {
        return `meu nome é ${this.Nome} e minha idade ${EuPessoa.Idade}`;
    }

    static conteAteONumeroRecebido(numero: number) {
        for (let i = 0; i <= numero; i++) {
            console.log(i);
        }
    }

    get isAlive(): boolean {
        return this.IsAlive;
    }

    set isAlive(alive: boolean) {
        this.IsAlive = alive;
    }

}

const person0 = new EuPessoa("larissa")
console.log(person0)

let person: EuPessoa;
person = new EuPessoa("batatinha")
console.log(person)

console.log(person.apresentar())
EuPessoa.conteAteONumeroRecebido(10);
console.log(EuPessoa.Idade)


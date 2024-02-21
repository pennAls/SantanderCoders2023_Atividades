//1.EX1:

// const numbers = [1, 2, 3, 4, 5];
// // const numbersNovo = numbers; //Se fizer assim quando mudar um muda o outro, mesmo endereço de memória
// const numbersNovo = [...numbers];
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(numbersNovo); // [1, 2, 3, 4, 5]
// numbersNovo.push(1986);
// console.log(numbers); // [1, 2, 3, 4, 5,]
// console.log(numbersNovo); // [1, 2, 3, 4, 5, 1986]

//2.EX2:

// const pessoa = {
//   name: "Fulano de Tal",
// };
// const outraPessoa = { ...pessoa };
// console.log(pessoa); //{ name: 'Fulano de Tal' }
// console.log(outraPessoa); //{ name: 'Fulano de Tal' }
// outraPessoa.age = 15;
// console.log(pessoa); //{ name: 'Fulano de Tal' }
// console.log(outraPessoa); //{ name: 'Fulano de Tal',age:15 }

//3.EX3:

// const numbers = [1, 2, 3];
// const letters = ["a", "b", "c"];
// const combined = [...numbers, ...letters]; 
// console.log(combined); //[ 1, 2, 3, 'a', 'b', 'c' ]

//4.EX4:

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(one); //1
// console.log(two); //2
// console.log(rest); //[ 3, 4, 5, 6 ]

//5.EX5:

const aluno = {
    name: "Fulano de Tal",
    age: 15,
    documentNumber: "01234567890",
    adress: {
      street: "Rua A",
      number: 258,
      zipCode: "42800-049",
    },
  };

  const { name, age, ...rest } = aluno;
  console.log(name);//Fulano de Tal
  console.log(age); //15
  console.log(rest);//{documentNumber: '01234567890',adress: { street: 'Rua A', number: 258, zipCode: '42800-049' }}

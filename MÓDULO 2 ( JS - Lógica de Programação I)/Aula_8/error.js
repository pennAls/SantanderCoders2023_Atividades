class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

function checaIdade(age) {
  if (age >= 200) {
    throw new CustomError(404, "Ninguem deveria ter essa idade");
  }

  return age;
}

try {
  console.log(checaIdade(300));
} catch (error) {
  if (error.code === 500) {
    console.log("Servidor fora");
  }

  if (error.code === 404) {
    console.log("O recurso solicitado não existe");
  }

  console.log(error instanceof CustomError);
} finally {
  console.log("Processo finalizado");
}

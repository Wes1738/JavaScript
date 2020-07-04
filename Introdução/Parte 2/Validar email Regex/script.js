const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("teste@gmail.com"));
console.log(validaEmail.test("teste-gmail.com"));
console.log(validaEmail.test("teste_gmail.com"));
console.log(validaEmail.test("gmail.com"));
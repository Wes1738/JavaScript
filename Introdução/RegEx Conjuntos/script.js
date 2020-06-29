// Verifica se temos o numero na expressão
const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6?"));
console.log(reg1.test("Temos o número 3?"));
console.log(reg1.test("Temos o número 59"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 65"));


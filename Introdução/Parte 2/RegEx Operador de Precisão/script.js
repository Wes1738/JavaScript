let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-7080"));
console.log(telefone.test("98125-5100"));
console.log(telefone.test("4004-7080"));
console.log(telefone.test("981-7080"));
console.log(telefone.test("998120080"));
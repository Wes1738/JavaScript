let validarID = /\d+ID\b/;

console.log(validarID.test("908755ID"));
console.log(validarID.test("5543321ID"));
console.log(validarID.test("55433243"));
console.log(validarID.test("trhreh"));
console.log(validarID.test("id"));




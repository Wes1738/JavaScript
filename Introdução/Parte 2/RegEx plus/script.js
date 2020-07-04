let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("12359635412"));
console.log(muitosOuPoucosDigitos.test("HCA"));
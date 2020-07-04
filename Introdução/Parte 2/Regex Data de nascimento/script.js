 let validarDDN = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
// let validarDDN = /^[0-31]{2}[/][0-12]{2}[/][1800-2020]{4}/;

console.log(validarDDN.test("08021999"));
console.log(validarDDN.test("08/02/1999"));
console.log(validarDDN.test("08/02/99"));
console.log(validarDDN.test("08/02/99"));
console.log(validarDDN.test("5/2/10"));

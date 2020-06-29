let validaNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaNome.test("wesley1738_gmail"));
console.log(validaNome.test("Wesley1738_gmail.com"));
console.log(validaNome.test("Wesley1738_gmai"));
console.log(validaNome.test("aqui tem mais de 16 letras"));
console.log(validaNome.test("12"));

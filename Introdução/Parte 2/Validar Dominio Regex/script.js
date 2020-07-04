const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.informaticaemacao.com"));
console.log(validaDominio.test("azure"));

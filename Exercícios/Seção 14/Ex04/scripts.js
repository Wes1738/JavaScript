let validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("127.0.0."));
console.log(validaIP.test("127.0.0.101"));
console.log(validaIP.test("127.0.0.1041"));
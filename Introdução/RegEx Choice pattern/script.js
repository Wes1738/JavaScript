let nome = /\w+: (Wesley|Carla|Elisangela|Luiz)/; //Nome: .......

console.log(nome.test("Nome: Carla"));
console.log(nome.test("Nome: Wesley"));
console.log(nome.test("Nome: Luiz"));
console.log(nome.test("Nome: Andreza"));
const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)\b/;

console.log(validarMarca.test("Marca: Cristal"));
console.log(validarMarca.test("Marca: Adidass"));
console.log(validarMarca.test("Marca: Pumas"));
console.log(validarMarca.test("Marca: Asics"));